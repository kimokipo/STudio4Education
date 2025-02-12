/**
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview JavaScript for Blockly's Minimap demo.
 * @author karnpurohit@gmail.com (Karan Purohit)
 * @author scanet@libreduc.cc (Sébastien Canet - https://www.linkedin.com/in/sebcanet/) update code
 * @author kamalhammi2@gmail.com (Kamal Hammi - https://www.linkedin.com/in/kamal-hammi-11bbb61a2/) bug fix
 */
'use strict';

/**
 * Creating a seperate namespace for minimap.
 */
const Minimap = {};
let scrollHeightInitial = 0;
let scrollWidthInitial = 0;
// parameter which should be in setup control panel, change size of minimap div
let globalSize_ = 10;

/**
 * Initialize the workspace and minimap.
 * @param {!Workspace} workspace The main workspace of the user.
 * @param {!Workspace} minimap The workspace that will be used as a minimap.
 */
Minimap.init = function(workspace, minimap, zoomFactor) {
    if (!zoomFactor)
        this.zoomFactor = 10;
    else
        this.zoomFactor = zoomFactor;
    this.workspace = workspace;
    this.minimap = minimap;
    //Adding scroll callback functionnality to vScroll and hScroll
    this.workspace.scrollbar.vScroll.setHandlePosition = function(newPosition) {
        this.handlePosition_ = newPosition;
        this.svgHandle_.setAttribute(this.positionAttribute_, this.handlePosition_);
        // var absolutePosition = this.handlePosition_ / Minimap.zoomFactor;
        Minimap.onScrollChange(newPosition, this.vertical_);
    };
    this.workspace.scrollbar.hScroll.setHandlePosition = function(newPosition) {
        this.handlePosition_ = newPosition;
        this.svgHandle_.setAttribute(this.positionAttribute_, this.handlePosition_);
        // var absolutePosition = this.handlePosition_ / Minimap.zoomFactor;
        Minimap.onScrollChange(newPosition, this.horizontal_);
    };

    // Required to stop a positive feedback loop when user clicks minimap
    // and the scroll changes, which inturn may change minimap.
    this.disableScrollChange = false;

    // Listen to events on the main workspace.
    this.workspace.addChangeListener(Minimap.mirrorEvent);

    // Create a svg overlay on the top of mapDiv for the minimap.
    this.svg = Blockly.utils.dom.createSvgElement('svg', {
        'xmlns': Blockly.utils.dom.SVG_NS,
        'xmlns:html': Blockly.utils.dom.HTML_NS,
        'xmlns:xlink': Blockly.utils.dom.XLINK_NS,
        'version': '1.1',
        'width': parseFloat(document.getElementById('minimapDiv').style.width),
        'height': parseFloat(document.getElementById('minimapDiv').style.height),
        'id': 'minimapSVG',
        'class': 'minimap',
    }, document.getElementById('minimapDiv'));
    this.svg.style.top = '0';
    this.svg.style.left = '0';

    // Creating a rectangle in the minimap that represents current view.
    let workspaceMetrics = this.workspace.getMetrics();
    scrollWidthInitial = workspaceMetrics.scrollWidth;
    scrollHeightInitial = workspaceMetrics.scrollHeight;
    this.mapDragger = Blockly.utils.dom.createSvgElement('rect', {
        'xmlns': Blockly.utils.dom.SVG_NS,
        'xmlns:html': Blockly.utils.dom.HTML_NS,
        'xmlns:xlink': Blockly.utils.dom.XLINK_NS,
        'version': '1.1',
        'width': parseFloat(workspaceMetrics.viewWidth / this.zoomFactor),
        'height': parseFloat(workspaceMetrics.viewHeight / this.zoomFactor),
        'id': 'mapDragger',
        'class': 'mapDragger minimap'
    }, this.svg);
    this.mapDragger.style.top = '0';
    this.mapDragger.style.left = '0';
    //In case it's recreated, force mirror
    this.resizeMinimap();
    this.setDraggerHeight();
    this.setDraggerWidth();
    this.scaleMinimap();

    // Adding mouse events to the rectangle, to make it Draggable.
    // Using Blockly.browserEvents.bind to attach mouse/touch listeners.
    Blockly.browserEvents.bind(this.mapDragger, 'mousedown', null, Minimap.mousedown);

    //When the window change, we need to resize the minimap window.
    window.addEventListener('resize', Minimap.resizeMinimap, false);

    // Mouse up event for the minimap.
    this.svg.addEventListener('mouseup', Minimap.updateMapDragger, false);

    //Boolen to check whether I am dragging the surface or not.
    this.isDragging = false;

    let xmlMainWorkspace = Blockly.Xml.workspaceToDom(workspace);
    xmlMainWorkspace = Blockly.Xml.domToText(xmlMainWorkspace);
    let xmlMiniMapWorkspace = Blockly.Xml.textToDom(xmlMainWorkspace);
    Blockly.Xml.domToWorkspace(xmlMiniMapWorkspace, minimap);
    Blockly.svgResize(Minimap.minimap);
};

Minimap.mousedown = function(e) {
    // Using Blockly.browserEvents.bind to attach mouse/touch listeners.
    Minimap.mouseMoveBindData = Blockly.browserEvents.bind(document, 'mousemove', null, Minimap.mousemove);
    Minimap.mouseUpBindData = Blockly.browserEvents.bind(document, 'mouseup', null, Minimap.mouseup);
    Minimap.isDragging = true;
    e.stopPropagation();
};

Minimap.mouseup = function(e) {
    Minimap.isDragging = false;
    // Removing listeners.
    Blockly.browserEvents.unbind(Minimap.mouseMoveBindData);
    Blockly.browserEvents.unbind(Minimap.mouseUpBindData);
    Minimap.updateMapDragger(e);
    e.stopPropagation();
};

Minimap.mousemove = function(e) {
    if (Minimap.isDragging) {
        Minimap.updateMapDragger(e);
        e.stopPropagation();
    }
};

/**
 * Run non-UI events from the main workspace on the minimap.
 * @param {!Blockly.Events.Abstract} event Event that triggered in the main
 *    workspace.
 */
Minimap.mirrorEvent = function(event) {
    if ((event instanceof Blockly.Events.Ui) || (event.newItem)) {
        return; // Don't mirror UI events nor click on toolbox newItem.
    }
    // Convert event to JSON.  This could then be transmitted across the net.
    var json = event.toJson();
    // Convert JSON back into an event, then execute it.
    var minimapEvent = Blockly.Events.fromJson(json, Minimap.minimap);
    minimapEvent.run(true);

    Minimap.scaleMinimap();
    Minimap.setDraggerHeight();
    Minimap.setDraggerWidth();

    // Resize minimap when the workspace change Height or Width
    Minimap.resizeMinimap();

};

/**
 * Called when window is resized. Repositions the minimap overlay.
 */
Minimap.resizeMinimap = function() {
    // recalculate workspace's new size
    let workspaceMetrics = Minimap.workspace.getMetrics();
    document.getElementById('minimapDiv').style.width = Math.round(workspaceMetrics.scrollWidth / Minimap.zoomFactor) + 'px';
    document.getElementById('minimapDiv').style.height = Math.round(workspaceMetrics.scrollHeight / Minimap.zoomFactor) + 'px';
    Minimap.svg.style.width = document.getElementById('minimapDiv').style.width;
    Minimap.svg.style.height = document.getElementById('minimapDiv').style.height;
    Minimap.mapDragger.style.width = Math.round(workspaceMetrics.viewWidth * Minimap.minimap.scale / Minimap.workspace.scale /* Minimap.zoomFactor*/ ) + 'px';
    Minimap.mapDragger.style.height = Math.round(workspaceMetrics.viewHeight * Minimap.minimap.scale / Minimap.workspace.scale /* Minimap.zoomFactor*/ ) + 'px';
    Blockly.svgResize(Minimap.minimap);
};

/**
 * Updates the rectangle's height.
 */
Minimap.setDraggerHeight = function() {
    let workspaceMetrics = Minimap.workspace.getMetrics();
    let draggerHeight = workspaceMetrics.viewHeight * Minimap.minimap.scale / Minimap.workspace.scale;
    // var draggerHeight = workspaceMetrics.viewHeight / Minimap.zoomFactor;
    // It's zero when first block is placed.
    if (draggerHeight != 0) {
        // Minimap.mapDragger.setAttribute("height", draggerHeight);
        Minimap.mapDragger.style.height = Math.round(workspaceMetrics.viewHeight * Minimap.minimap.scale / Minimap.workspace.scale /* Minimap.zoomFactor*/ ) + 'px';
        Blockly.svgResize(Minimap.minimap);
    }
};

/**
 * Updates the rectangle's width.
 */
Minimap.setDraggerWidth = function() {
    var workspaceMetrics = Minimap.workspace.getMetrics();
    var draggerWidth = workspaceMetrics.viewWidth * Minimap.minimap.scale / Minimap.workspace.scale;
    // var draggerWidth = workspaceMetrics.viewWidth / Minimap.zoomFactor;
    // It's zero when first block is placed.
    if (draggerWidth != 0) {
        // Minimap.mapDragger.setAttribute("width", draggerWidth);
        Minimap.mapDragger.style.width = Math.round(workspaceMetrics.viewWidth * Minimap.minimap.scale / Minimap.workspace.scale /* Minimap.zoomFactor*/ ) + 'px';
        Blockly.svgResize(Minimap.minimap);
    }
};

/**
 * Updates the overall position of the viewport of the minimap by appropriately
 * using translate functions.
 */
Minimap.scaleMinimap = function() {
    //let minimapBoundingBox = Minimap.minimap.getBlocksBoundingBox();
    let workspaceBoundingBox = Minimap.workspace.getBlocksBoundingBox();
    let workspaceMetrics = Minimap.workspace.getMetrics();
    let minimapMetrics = Minimap.minimap.getMetrics();

    // Scaling the mimimap such that all the blocks can be seen in the viewport.
    // This padding is default because this is how to scrollbar(in main workspace)
    // is implemented.
    let topPadding = workspaceMetrics.viewHeight * Minimap.minimap.scale / (2 * Minimap.workspace.scale);
    let sidePadding = workspaceMetrics.viewWidth * Minimap.minimap.scale / (2 * Minimap.workspace.scale);
    // If actual padding is more than half view ports height,
    // change it to actual padding.
    if ((workspaceBoundingBox.y * Minimap.workspace.scale -
            workspaceMetrics.contentTop) / Minimap.zoomFactor
        /*
             Minimap.minimap.scale / Minimap.workspace.scale */
        >
        topPadding) {
        topPadding = (workspaceBoundingBox.y * Minimap.workspace.scale - workspaceMetrics.contentTop) / Minimap.zoomFactor
            /*
                   Minimap.minimap.scale / Minimap.workspace.scale */
        ;
    }

    // If actual padding is more than half view ports height,
    // change it to actual padding.
    if ((workspaceBoundingBox.x * Minimap.workspace.scale -
            workspaceMetrics.contentLeft) / Minimap.zoomFactor
        /*
             Minimap.minimap.scale / Minimap.workspace.scale */
        >
        sidePadding) {
        sidePadding = (workspaceBoundingBox.x * Minimap.workspace.scale -
                workspaceMetrics.contentLeft) / Minimap.zoomFactor
            /*
                   Minimap.minimap.scale / Minimap.workspace.scale */
        ;
    }

    // Translating the minimap.
    Minimap.minimap.translate(-minimapMetrics.contentLeft * Minimap.minimap.scale + sidePadding, -minimapMetrics.contentTop * Minimap.minimap.scale + topPadding);
};




/**
 * Handles the onclick event on the minimapBoundingBox.
 * Changes mapDraggers position.
 * @param {!Event} e Event from the mouse click.
 */
Minimap.updateMapDragger = function(e) {
    let y = e.clientY;
    let x = e.clientX;
    let mapDraggerRect = Minimap.mapDragger.getBoundingClientRect();
    let mapContainerRect = Minimap.svg.getBoundingClientRect();
    // drag'n'drop rectangle is from its center
    let finalY = 0,
        finalX = 0;

    if ((y + mapDraggerRect.height / 2) > mapContainerRect.bottom) {
        finalY = mapContainerRect.bottom - mapContainerRect.top - mapDraggerRect.height;
    } else if ((y - mapDraggerRect.height / 2) < mapContainerRect.top) {
        finalY = 0;
    } else finalY = y - mapContainerRect.top - (mapDraggerRect.height / 2);
    if ((x + mapDraggerRect.width / 2) > mapContainerRect.right) {
        finalX = mapContainerRect.right - mapContainerRect.left - mapDraggerRect.width;
    } else if ((x - mapDraggerRect.width / 2) < mapContainerRect.left) {
        finalX = 0;
    } else finalX = x - mapContainerRect.left - (mapDraggerRect.width / 2);

    Minimap.mapDragger.setAttribute("y", finalY);
    Minimap.mapDragger.setAttribute("x", finalX);
    // Required, otherwise creates a feedback loop.
    Minimap.disableScrollChange = true;
    Minimap.workspace.scrollbar.vScroll.set(finalY * Minimap.workspace.scale / Minimap.minimap.scale);
    Minimap.workspace.scrollbar.hScroll.set(finalX * Minimap.workspace.scale / Minimap.minimap.scale);
    Minimap.disableScrollChange = false;

    Minimap.scaleMinimap();
    Minimap.setDraggerHeight();
    Minimap.setDraggerWidth();
};

/**
 * Handles the onclick event on the minimapBoundingBox, paramaters are passed by
 * the event handler.
 * @param {Float} position This is the absolute postion of the scrollbar.
 * @param {boolean} horizontal Informs if the change event if for horizontal(true)
 *     scrollbar or vertical(false) scrollbar.
 */
Minimap.onScrollChange = function(position, horizontal) {
    if (!Minimap.disableScrollChange) {
        // Minimap.workspace.scrollbar.vScroll.set(finalY * Minimap.workspace.scale / Minimap.minimap.scale);
        Minimap.mapDragger.setAttribute(horizontal ? 'x' : 'y',
            // newPosition);
            // position / Minimap.zoomFactor);
            position * Minimap.minimap.scale / Minimap.workspace.scale);

    }
};