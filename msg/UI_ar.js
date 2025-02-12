/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

var MSG = {
    title: "S4E",
    btnMinimize: "minimize",
    btnMaximize: "maximize",
    btnClose: "close application",
    blocks: "Blocks",
    prog: "Program",
    listVariable: "list",
    textVariable: "text",
    screenshot: "Download Screenshot",
    xmlError: "لا يمكن تحميل ملف النسخ الاحتياطي.  ربما تم إنشاؤه مع نسخة أخرى من Blockly؟",
    xmlLoad: "هل تريد استبدال الكتل الحالية؟ \ n سيؤدي 'إلغاء' إلى دمجها.",
    badXml: "Error parsing file.",
    languageSpan: "choose language",
    levelSpan: "skill level",
    skill1_menu_span: "novice (padawan)",
    skill2_menu_span: "skilled (knight)",
    skill3_menu_span: "expert (master)",
    interfaceColorSpan: "interface theme",
    codeEditorColorSpan: "code editor theme",
    themeSpan: "choose block theme",
    renderSpan: "choose block renderer",
    fullScreenButton_span: "full screen",
    fullToolboxButton_span: "shrink/expand toolbox",
    blocksPictureButton_span: "show/hide pictures in blocks",
    undoButton_span: "Undo",
    redoButton_span: "Redo",
    boardButtonSpan: "list boards",
    verifyButton_span: "verify code",
    serialButtonSpan: "list COM port",
    uploadButton_span: "upload",
    serialConnectButton_span: "monitoring & control",
    serialMonitorButton_span: "Serial monitor",
    nodeRedFlowButton_span: "node-Red flows",
    supervisionButton_span: "supervision",
    importPapyrusButton_span: "Import Papyrus config file",
    importSysMLButton_span: "Import SysML config file",
    saveCodeButton_span: "Export Code",
    menuButton_span: "File menu",
    newButton_span: "New project",
    save_span: "Save file name?",
    sketch_name_default: "sketch name",
    sketch_name_wrapper: "project sketch name",
    saveXMLButton_span: "Save to S4E file",
    loadXMLfakeButton_span: "Load S4E file",
    loadXML_span: "Replace existing blocks?\n'Cancel' will merge.",
    loadXML_error_span: "Error parsing XML:\n",
    resetButton_span: "Reset S4E",
    resetQuestion_span: "Reset S4E and",
    helpButton_span: "help",
    helpModalSpan_title: "Help / About",
    helpModalSpan_text: "<img src='./S4E/media/logo_only.png' alt='' style='height:100px; float:left; margin: 0 10px 10px 0;' />" +
        "<p style='text-align: left;'>Designed for <a href='https://www.arrowhead.eu/arrowheadtools' rel='nofollow'><strong>Arrowhead</strong> Tools Project</a>, S4E is a <strong>web-based visual programming editor for <a href='https://www.st.com' rel='nofollow'>STmicroelectronics</a></strong> boards, thanks to <a href='https://developers.google.com/blockly/' rel='nofollow'>Blockly</a>, the web-based, graphical programming editor.</p>" +
        "<p style='text-align: left;'>Studio4Education provides static type language blocks and code generators for simple C programming.</p>" +
        "<p style='text-align: left;'>Accessibility: <a href='https://github.com/A-S-T-U-C-E/Studio4Education#accessibility'>online documentation</a>.</br>" +
        "Wiki : <a href='https://github.com/A-S-T-U-C-E/Studio4Education/wiki'>on Github</a>.</br>" +
        "A bug? Post it here: <a href='https://github.com/A-S-T-U-C-E/Studio4Education/issues'>on Github</a>.</br>" +
        "Thanks & libraries: <a href='https://github.com/A-S-T-U-C-E/Studio4Education/wiki/Thanks'>on Github</a>.</p>" +
        "<p style='text-align: center;'>v0.9.5 - BSD3 license - Sébastien CANET" +
        "<p style='text-align: center;'><a href='https://www.paypal.com/donate/?business=KBQDU3S6FWQU8&no_recurring=0&item_name=Thanks+for+donation+with+Paypal+to+help+me+improve+this+software.&currency_code=EUR'>Thanks for donation with Paypal to help me improve this software.</br><img src='https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donateCC_LG.gif' alt='Paypal'/></a></p>",
    CROSS_TAB_COPY: "Copy",
    CROSS_TAB_PASTE: "Paste",
    INSERTBLOCKS_WORKSPACE_BLOCK_EXPORT: "Export selected block to block file",
    INSERTBLOCKS_WORKSPACE_BLOCK_INSERT: "Insert a block into workspace from block file",
    PICKPLACEBLOCK_PICKPLACE_ENABLED: "Enable pick/place block",
    PICKPLACEBLOCK_PICKPLACE_DISABLED: "Disable pick/place block",
    PICKPLACEBLOCK_CLICK_TO_PICK: "Pick block",
    PICKPLACEBLOCK_CLICK_TO_PLACE_NEXT: "Place block (next)",
    PICKPLACEBLOCK_CLICK_TO_PLACE_PREVIOUS: "Place block (previous)",
    PICKPLACEBLOCK_CLICK_TO_PLACE_INPUT: "Place block [input: #]",
    MYBACKPACK_REMOVE: "Remove this block from backpack",
    MYBACKPACK_REMOVE_ALL: "Remove all blocks from backpack",
    MYBACKPACK_REMOVE_ALL_TITLE: "Are you sure to remove all blocks from backpack?",
    MYBACKPACK_IMPORT_BLOCK: "Copy block to backpack",
    MYBACKPACK_IMPORT_FILE: "Import a backpack from backpack file",
    MYBACKPACK_IMPORT_WORKSPACE: "Import to backpack all blocks from workspace",
    MYBACKPACK_IMPORT_WORKSPACE_TITLE: "Are you sure to copy to backpack all blocks from workspace?",
    MYBACKPACK_WORKSPACE_EXPORT_FILE: "Export to backpack file all blocks from workspace",
    MYBACKPACK_MYBACKPACK_EXPORT_FILE: "Export to backpack file all blocks from backpack",
    //menu tools
    toolsButton_span: "tools",
    wiringButton_span: "wiring",
    circuitjsButton_span: "circuitJS simulator",
    factoryButton_span: "block factory",
    htmlButton_span: "HTML factory",
    colorConversionButton_span: "colors encoding",
    dataConversionButton_span: "data encoding",
    //menu IoT
    iotConnectButton_span: "servers",
    drawio_span: "diagrams",
    launchNodeRed_span: "Node-RED",
    launchNodeRedServer_span: "Node-RED server",
    launchWebServer_span: "local server",
    papyrusConnect_span: "Papyrus connect",
    papyrusConnect_helper_span: "Papyrus configuration",
    papyrusConfiguration_AHF_id_span: "ID of download service",
    papyrusConfiguration_AHF_name_span: "name of config file",
    papyrusConfiguration_AHF_save_span: "save information",
    ArrowheadConfiguration_helper_span: "Arrowhead configuration",
    ArrowheadConfiguration_span: "connect as provider to Arrowhead cloud",
    ArrowheadConfiguration_span_menu: "Arrowhead connect",
    ArrowheadConfiguration_ServReg_span: "Configure service registry",
    ArrowheadConfiguration_provider_span: "Configure provider",
    ArrowheadConfiguration_consumer_span: "Configure consumer",
    ArrowheadConfiguration_auth_span: "Define authorization server",
    ArrowheadConfiguration_orch_span: "Define orchestrator server",
    blynkConnect_span: "Blynk connect",
    serialConnectIOT_span: "connect serial to IoT",
    //monaco code editor
    editorDiffToggle_span: "compare code modifications",
    copyCodeButton_span: "copy code to clipboard",
    openCodeButton_span: "Open code editor",
    copyConsoleButton_span: "copy console to clipboard",
    cleanConsoleButton_span: "clean console content",
    //lateral panel
    highlightSpan: "highlights the content on the workspace",
    toolboxAutocloseSpan: "toolbox autoclose",
    toolboxContinuousSpan: "continuous toolbox",
    minimapSpan: "(de)activate minimap",
    accessibilitySpan: "enable Accessibility Mode",
    defaultCursorSpan: "Default Cursor",
    basicCursorSpan: "Basic Cursor",
    lineCursorSpan: "Line Cursor",
    keyMappingSpan: "open key mappings",
    themeClassicSpan: "Classic",
    themeModernSpan: "Modern",
    themeDeuteranopiaSpan: "Deuteranopia/Protanopia",
    themeTritanopiaSpan: "Tritanopia",
    themeZelosSpan: "Zelos",
    themeHighContrastSpan: "High Contrast",
    themeDarkSpan: "Dark",
    themeBwSpan: "Black & White",
    compilationInProgress: "Board",
    keyMappingModalSpan: "Set key mappings",
    detailedCompilation_span: "Detailed compilation verbose",
    CLI_title_span: "compiler management",
    installBoard_title_span: "board install to CLI",
    searchlLib_title_span: "search for a library",
    installLib_title_span: "library install to CLI",
    actionName0: "previous",
    actionName1: "next",
    actionName2: "in",
    actionName3: "out",
    actionName4: "insert",
    actionName5: "mark",
    actionName6: "disconnect",
    actionName7: "toolbox",
    actionName8: "exit",
    actionName9: "move workspace cursor up",
    actionName10: "move workspace cursor down",
    actionName11: "move workspace cursor left",
    actionName12: "move workspace cursor right",
    actionName13: "toggle keyboard navigation",
    setup_sideButton_span: "setup",
    setup_reset_button_span: "reset configuration",
    setup_save_button_span: "save configuration",
    setup_load_button_span: "load configuration",
    config_UI_title_span: "interface",
    displaySpan: "display choice",
    displayChoiceButtons: "buttons only",
    displayChoiceBandT: "buttons + text",
    displayChoiceText: "text only",
    fontSpan: "font choice",
    fontSizeSpan: "rendering",
    optionFontSizeBlocks: "Blocks Font Size",
    optionFontSizeEditor: "Editor Font Size",
    optionFontSizePage: "Page Font Size",
    optionFontSpacingPage: "Page Font Spacing",
    //CLI_functions.js
    CLI_githubLinkButton_span: "documentation",
    coreUpdateButton_msg: "Updating...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    cleanCLIcacheButton_msg: "Cleaning...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    cleanCLIcacheButton_error_msg: "Error deleting folder .\\tmp",
    cleanCLIcacheButton_success_msg: "Cleaned!",
    listBoardsButton_msg: "Searching for board...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    installBoardsButton_msg: "Installing board support, wait...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    searchlLibButton_msg: "Searching for library...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    installLibButton_msg: "Installing library...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    coreUpdateButton_span: "update core and libraries",
    cleanCLIcacheButton_span: "cleaning cache",
    listBoardsButton_span: "detection and list boards",
    installBoardsInput_span: "name of board to support",
    installBoardsButton_span: "install this board type",
    searchlLibInput_span: "name of library to search",
    searchlLibButton_span: "search this library",
    installLibInput_span: "name of library to install",
    installLibButton_span: "install this library",
    //categories panel
    categories_title_span: "categories choice",
    categories_content_selectAll_span: "ALL / NONE",
    categories_search_placeholder: "Search for category...",
    //IoT panel
    iot_title_span: "IoT control",
    ArrowheadConfiguration_helper_span: "Arrowhead configuration",
    //modals
    boardListModalHeader_span: "Boards list",
    boardListModalButton_span: "Details",
    boardModal_connect: "Connector",
    boardModal_voltage: "Operating voltage",
    boardModal_voltage_normal: "Operating voltage (recommended)",
    boardModal_voltage_maxi: "Operating voltage (limits)",
    boardModal_cpu: "Microcontroler µC",
    boardModal_speed: "Clock speed",
    boardModal_inout: "Number of logical I/Os",
    boardModal_in_analog: "Number of analogue I/Os",
    boardModal_out_analog: "Number of PWM ouput",
    boardModal_i_max_out: "Max. current per pin (5V)",
    boardModal_i_max3: "Max. output current on pin 3.3V",
    boardModal_i_max_5: "Max. output current on pin 5V",
    boardModal_flash: "Flash memory",
    boardModal_sram: "SRAM memory",
    boardModal_eeprom: "EEPROM",
    portListModalHeader_span: "COMM port list",
    editorMonacoModal_titlebar: "Code editor",
    editorMonacoModal_undo_span: "undo code modifications",
    editorMonacoModal_redo_span: "redo code modifications",
    editorMonacoModal_diff_span: "open difference pane with original code",
    editorMonacoModal_ok_span: "validate modification to code",
    editorMonacoModal_cancel_span: "reset code panel with original code",
    circuitJSmodalTitle_titlebar: "electronic circuit simulator",
    circuitJSmodal_run: "compile and run code simulation",
    circuitJSmodal_stop: "stop simulation",
    //IDE_functions.js
    IDE_connect: "Connect to port ",
    IDE_select_port: "Select a port !",
    IDE_select_board: "Select a board !",
    IDE_verif_progress: "\nVerification: in progress...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    IDE_verif_ok: "\nVerification: OK",
    IDE_upload1: "Board ",
    IDE_upload2: " on port ",
    IDE_upload3: "\nupload: in progress...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    IDE_upload_ok: "\nupload: OK",
    serialModalTitle_titlebar_span: "Serial monitor",
    inputTextSerial: "Text",
    btn_serialSend_span: "Send",
    btn_serialConnect_span: "Start connection",
    btn_serialStop_span: "Stop",
    btn_serialPeekClear_span: "Clean",
    btn_serialAddTimeStamp_span: "Timestamp",
    btn_serialPeekCSV_span: "Export CSV",
    btn_serialPeekJSON_span: "Export JSON",
    btn_serialChart_span: "Graph",
    btn_serialChartPause_span: "Pause",
    btn_serialChartStart_span: "Restart",
    btn_serialChartMin_span: "Min.",
    btn_serialChartMax_span: "Max.",
    btn_serialChartNb_span: "Nb.",
    input_serialChartJSONheaders_span: "En-tête JSON (;)",
};