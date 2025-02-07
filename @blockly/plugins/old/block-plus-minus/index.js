! function(t, e) { if ("object" == typeof exports && "object" == typeof module) module.exports = e(require("blockly/core"));
    else if ("function" == typeof define && define.amd) define(["blockly/core"], e);
    else { var n = "object" == typeof exports ? e(require("blockly/core")) : e(t.Blockly); for (var i in n)("object" == typeof exports ? exports : t)[i] = n[i] } }(this, (function(t) {
    return function(t) { var e = {};

        function n(i) { if (e[i]) return e[i].exports; var s = e[i] = { i: i, l: !1, exports: {} }; return t[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports } return n.m = t, n.c = e, n.d = function(t, e, i) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i }) }, n.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function(t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var i = Object.create(null); if (n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                for (var s in t) n.d(i, s, function(e) { return t[e] }.bind(null, s)); return i }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "/dist/", n(n.s = 1) }([function(e, n) { e.exports = t }, function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(0),
            s = n.n(i);
        /**
         * @license
         * Copyright 2020 Google LLC
         * SPDX-License-Identifier: Apache-2.0
         */
        function o(t) { const e = new i.FieldImage(r, 15, 15, void 0, a); return e.args_ = t, e }

        function a(t) { const e = t.getSourceBlock(); if (e.isInFlyout) return;
            i.Events.setGroup(!0); const n = e.mutationToDom(),
                s = n && i.Xml.domToText(n);
            e.minus(t.args_); const o = e.mutationToDom(),
                a = o && i.Xml.domToText(o);
            s != a && i.Events.fire(new i.Events.BlockChange(e, "mutation", null, s, a)), i.Events.setGroup(!1) }
        const r = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTggMTFoLTEyYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgxMmMxLjEwNCAwIDItLjg5NiAyLTJzLS44OTYtMi0yLTJ6IiBmaWxsPSJ3aGl0ZSIgLz48L3N2Zz4K";
        /**
         * @license
         * Copyright 2020 Google LLC
         * SPDX-License-Identifier: Apache-2.0
         */
        function u(t) { const e = new i.FieldImage(d, 15, 15, void 0, l); return e.args_ = t, e }

        function l(t) { const e = t.getSourceBlock(); if (e.isInFlyout) return;
            i.Events.setGroup(!0); const n = e.mutationToDom(),
                s = n && i.Xml.domToText(n);
            e.plus(t.args_); const o = e.mutationToDom(),
                a = o && i.Xml.domToText(o);
            s != a && i.Events.fire(new i.Events.BlockChange(e, "mutation", null, s, a)), i.Events.setGroup(!1) }
        const d = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNzFjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MWMwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==",
            _ = { suppressPrefixSuffix: !0, elseIfCount_: 0, hasElse_: !1, mutationToDom: function() { if (!this.elseIfCount_ && !this.hasElse_) return null; const t = s.a.utils.xml.createElement("mutation"); return t.setAttribute("elseif", this.elseIfCount_), this.hasElse_ && t.setAttribute("else", 1), t }, domToMutation: function(t) { const e = parseInt(t.getAttribute("elseif"), 10) || 0;
                    this.hasElse_ = !!parseInt(t.getAttribute("else"), 10) || 0, this.hasElse_ && !this.getInput("ELSE") && this.appendStatementInput("ELSE").appendField(s.a.Msg.CONTROLS_IF_MSG_ELSE), this.updateShape_(e) }, updateShape_: function(t) { for (; this.elseIfCount_ < t;) this.addElseIf_(); for (; this.elseIfCount_ > t;) this.removeElseIf_() }, plus: function() { this.addElseIf_() }, minus: function(t) { 0 != this.elseIfCount_ && this.removeElseIf_(t) }, addElseIf_: function() { this.elseIfCount_++, this.appendValueInput("IF" + this.elseIfCount_).setCheck("Boolean").appendField(s.a.Msg.CONTROLS_IF_MSG_ELSEIF).appendField(o(this.elseIfCount_), "MINUS" + this.elseIfCount_), this.appendStatementInput("DO" + this.elseIfCount_).appendField(s.a.Msg.CONTROLS_IF_MSG_THEN), this.getInput("ELSE") && this.moveInputBefore("ELSE", null) }, removeElseIf_: function(t) { if (void 0 !== t && t != this.elseIfCount_) { const e = 2 * t,
                            n = this.inputList; let i = n[e].connection;
                        i.isConnected() && i.disconnect(), i = n[e + 1].connection, i.isConnected() && i.disconnect(), this.bumpNeighbours(); for (let t, n = e + 2;
                            (t = this.inputList[n]) && "ELSE" != t.name; n++) { const e = t.connection.targetConnection;
                            e && this.inputList[n - 2].connection.connect(e) } }
                    this.removeInput("IF" + this.elseIfCount_), this.removeInput("DO" + this.elseIfCount_), this.elseIfCount_-- } };
        /**
         * @license
         * Copyright 2020 Google LLC
         * SPDX-License-Identifier: Apache-2.0
         */
        s.a.Extensions.unregister("controls_if_mutator"), s.a.Extensions.registerMutator("controls_if_mutator", _, (function() { this.getInput("IF0").insertFieldAt(0, u(), "PLUS") })),
            /**
             * @license
             * Copyright 2020 Google LLC
             * SPDX-License-Identifier: Apache-2.0
             */
            s.a.defineBlocksWithJsonArray([{ type: "lists_create_with", message0: "%{BKY_LISTS_CREATE_EMPTY_TITLE} %1", args0: [{ type: "input_dummy", name: "EMPTY" }], output: "Array", style: "list_blocks", helpUrl: "%{BKY_LISTS_CREATE_WITH_HELPURL}", tooltip: "%{BKY_LISTS_CREATE_WITH_TOOLTIP}", mutator: "new_list_create_with_mutator" }]);
        const p = { itemCount_: 0, mutationToDom: function() { const t = s.a.utils.xml.createElement("mutation"); return t.setAttribute("items", this.itemCount_), t }, domToMutation: function(t) { const e = parseInt(t.getAttribute("items"), 10);
                this.updateShape_(e) }, updateShape_: function(t) { for (; this.itemCount_ < t;) this.addPart_(); for (; this.itemCount_ > t;) this.removePart_();
                this.updateMinus_() }, plus: function() { this.addPart_(), this.updateMinus_() }, minus: function() { 0 != this.itemCount_ && (this.removePart_(), this.updateMinus_()) }, addPart_: function() { 0 == this.itemCount_ ? (this.removeInput("EMPTY"), this.topInput_ = this.appendValueInput("ADD" + this.itemCount_).appendField(u(), "PLUS").appendField(s.a.Msg.LISTS_CREATE_WITH_INPUT_WITH)) : this.appendValueInput("ADD" + this.itemCount_), this.itemCount_++ }, removePart_: function() { this.itemCount_--, this.removeInput("ADD" + this.itemCount_), 0 == this.itemCount_ && (this.topInput_ = this.appendDummyInput("EMPTY").appendField(u(), "PLUS").appendField(s.a.Msg.LISTS_CREATE_EMPTY_TITLE)) }, updateMinus_: function() { const t = this.getField("MINUS");!t && this.itemCount_ > 0 ? this.topInput_.insertFieldAt(1, o(), "MINUS") : t && this.itemCount_ < 1 && this.topInput_.removeField("MINUS") } };
        s.a.Extensions.registerMutator("new_list_create_with_mutator", p, (function() { this.getInput("EMPTY").insertFieldAt(0, u(), "PLUS"), this.updateShape_(3) })),
            /**
             * @license
             * Copyright 2020 Google LLC
             * SPDX-License-Identifier: Apache-2.0
             */
            s.a.Msg.PROCEDURE_VARIABLE = "variable:", s.a.defineBlocksWithJsonArray([{ type: "procedures_defnoreturn", message0: "%{BKY_PROCEDURES_DEFNORETURN_TITLE} %1 %2", message1: "%{BKY_PROCEDURES_DEFNORETURN_DO} %1", args0: [{ type: "field_input", name: "NAME", text: "" }, { type: "input_dummy", name: "TOP" }], args1: [{ type: "input_statement", name: "STACK" }], style: "procedure_blocks", helpUrl: "%{BKY_PROCEDURES_DEFNORETURN_HELPURL}", tooltip: "%{BKY_PROCEDURES_DEFNORETURN_TOOLTIP}", extensions: ["get_procedure_def_no_return", "procedure_context_menu", "procedure_rename", "procedure_vars"], mutator: "procedure_def_mutator" }, { type: "procedures_defreturn", message0: "%{BKY_PROCEDURES_DEFRETURN_TITLE} %1 %2", message1: "%{BKY_PROCEDURES_DEFRETURN_DO} %1", message2: "%{BKY_PROCEDURES_DEFRETURN_RETURN} %1", args0: [{ type: "field_input", name: "NAME", text: "" }, { type: "input_dummy", name: "TOP" }], args1: [{ type: "input_statement", name: "STACK" }], args2: [{ type: "input_value", align: "right", name: "RETURN" }], style: "procedure_blocks", helpUrl: "%{BKY_PROCEDURES_DEFRETURN_HELPURL}", tooltip: "%{BKY_PROCEDURES_DEFRETURN_TOOLTIP}", extensions: ["get_procedure_def_return", "procedure_context_menu", "procedure_rename", "procedure_vars"], mutator: "procedure_def_mutator" }]);
        s.a.Extensions.registerMixin("get_procedure_def_no_return", { getProcedureDef: function() { const t = this.argData_.map(t => t.model.name); return [this.getFieldValue("NAME"), t, !1] }, callType_: "procedures_callnoreturn" });
        s.a.Extensions.registerMixin("get_procedure_def_return", { getProcedureDef: function() { const t = this.argData_.map(t => t.model.name); return [this.getFieldValue("NAME"), t, !0] }, callType_: "procedures_callreturn" });
        const c = { customContextMenu: function(t) { if (this.isInFlyout) return; const e = this.getFieldValue("NAME"),
                    n = s.a.Msg.PROCEDURES_CREATE_DO.replace("%1", e),
                    i = s.a.utils.xml.createElement("block");
                i.setAttribute("type", this.callType_), i.appendChild(this.mutationToDom(!0)); const o = s.a.ContextMenu.callbackFactory(this, i); if (t.push({ enabled: !0, text: n, callback: o }), this.isCollapsed()) return; const a = this.getVarModels(); for (const e of a) { const n = s.a.Msg.VARIABLES_SET_CREATE_GET.replace("%1", e.name),
                        i = s.a.utils.xml.createElement("block");
                    i.setAttribute("type", "variables_get"), i.appendChild(s.a.Variables.generateVariableFieldDom(e)); const o = s.a.ContextMenu.callbackFactory(this, i);
                    t.push({ enabled: !0, text: n, callback: o }) } } };
        s.a.Extensions.registerMixin("procedure_context_menu", c);
        const m = { mutationToDom: function(t = !1) { const e = s.a.utils.xml.createElement("mutation"); return t && e.setAttribute("name", this.getFieldValue("NAME")), this.argData_.forEach(n => { const i = s.a.utils.xml.createElement("arg"),
                        o = n.model;
                    i.setAttribute("name", o.name), i.setAttribute("varid", o.getId()), t && i.setAttribute("paramid", n.argId), e.appendChild(i) }), this.hasStatements_ || e.setAttribute("statements", "false"), e }, domToMutation: function(t) { this.hasStatements_ = "false" !== t.getAttribute("statements"), this.hasStatements_ || this.removeInput("STACK"); const e = [],
                    n = []; for (const i of t.childNodes) "arg" == i.nodeName.toLowerCase() && (e.push(i.getAttribute("name")), n.push(i.getAttribute("varid") || i.getAttribute("varId")));
                this.updateShape_(e, n) }, updateShape_: function(t, e) { if (t.length != e.length) throw Error("names and varIds must have the same length."); for (let t = this.argData_.length - 1; t >= 0; t--) this.removeArg_(this.argData_[t].argId);
                this.argData_ = []; const n = e.length; for (let i = 0; i < n; i++) this.addArg_(t[i], e[i]);
                s.a.Procedures.mutateCallers(this) }, plus: function() { this.addArg_(), s.a.Procedures.mutateCallers(this) }, minus: function(t) { this.argData_.length && (this.removeArg_(t), s.a.Procedures.mutateCallers(this)) }, addArg_: function(t = null, e = null) { if (!this.argData_.length) { const t = new s.a.FieldLabel(s.a.Msg.PROCEDURES_BEFORE_PARAMS);
                    this.getInput("TOP").appendField(t, "WITH") } const n = this.argData_.map(t => t.model.name);
                t = t || s.a.Variables.generateUniqueNameFromOptions(s.a.Procedures.DEFAULT_ARG, n); const i = s.a.Variables.getOrCreateVariablePackage(this.workspace, e, t, ""),
                    o = s.a.utils.genUid();
                this.addVarInput_(t, o), this.getInput("STACK") ? this.moveInputBefore(o, "STACK") : this.moveInputBefore(o, "RETURN"), this.argData_.push({ model: i, argId: o }) }, removeArg_: function(t) { this.removeInput(t, !0) && (1 == this.argData_.length && this.getInput("TOP").removeField("WITH"), this.argData_ = this.argData_.filter(e => e.argId != t)) }, addVarInput_: function(t, e) { const n = new s.a.FieldTextInput(t, this.validator_);
                n.onFinishEditing_ = this.finishEditing_.bind(n), n.varIdsToDelete_ = [], n.preEditVarModel_ = null, this.appendDummyInput(e).setAlign(s.a.ALIGN_RIGHT).appendField(o(e)).appendField(s.a.Msg.PROCEDURE_VARIABLE).appendField(n, e) }, validator_: function(t) { const e = this.getSourceBlock(),
                    n = e.workspace,
                    i = e.argData_,
                    o = e.argData_.find(t => t.argId == this.name),
                    a = o.model.getId(),
                    r = (t = t.replace(/[\s\xa0]+/g, " ").trim()).toLowerCase(); if (!t || !i.every(t => t.argId == this.name || r != t.model.name.toLowerCase())) return this.preEditVarModel_ && (o.model = this.preEditVarModel_, this.preEditVarModel_ = null), s.a.Procedures.mutateCallers(e), null;
                this.varIdsToDelete_.length || (this.preEditVarModel_ = o.model, n.getVariableUsesById(a).every(t => t.id == e.id || t.getProcedureCall && t.getProcedureCall() == e.getProcedureDef()[0]) && this.varIdsToDelete_.push(a)); let u = n.getVariable(t, ""); return u ? u.name != t && n.renameVariableById(u.getId(), t) : (u = n.createVariable(t, ""), this.varIdsToDelete_.push(u.getId())), u.getId() != a && (o.model = u), s.a.Procedures.mutateCallers(e), t }, finishEditing_: function(t) { const e = this.getSourceBlock(),
                    n = e.argData_.find(t => t.argId == this.name).model.getId();
                this.varIdsToDelete_.forEach(t => { t != n && e.workspace.deleteVariableById(t) }), this.varIdsToDelete_.length = 0, this.preEditVarModel_ = null } };
        s.a.Extensions.registerMutator("procedure_def_mutator", m, (function() { this.argData_ = [], this.hasStatements_ = !0, this.getInput("TOP").insertFieldAt(0, u(), "PLUS") }));
        s.a.Extensions.register("procedure_rename", (function() { this.getField("NAME").setValidator(s.a.Procedures.rename) }));
        s.a.Extensions.register("procedure_vars", (function() { const t = { getVars: function() { return this.argData_.map(t => t.model.name) }, getVarModels: function() { return this.argData_.map(t => t.model) }, renameVarById: function(t, e) { const n = this.argData_.find(e => e.model.getId() == t); if (!n) return; const i = this.workspace.getVariableById(e),
                        o = i.name;
                    this.addVarInput_(o, e), this.moveInputBefore(e, t), this.removeInput(t), n.model = i, s.a.Procedures.mutateCallers(this) }, updateVarName: function(t) { const e = t.getId(),
                        n = this.argData_.find(t => t.model.getId() == e);
                    n && (this.setFieldValue(t.name, n.argId), n.model = t) } };
            this.mixin(t, !0) }));
        /**
         * @license
         * Copyright 2020 Google LLC
         * SPDX-License-Identifier: Apache-2.0
         */
        const h = { itemCount_: 0, mutationToDom: function() { const t = s.a.utils.xml.createElement("mutation"); return t.setAttribute("items", this.itemCount_), t }, domToMutation: function(t) { const e = parseInt(t.getAttribute("items"), 10);
                this.updateShape_(e) }, updateShape_: function(t) { for (; this.itemCount_ < t;) this.addPart_(); for (; this.itemCount_ > t;) this.removePart_();
                this.updateMinus_() }, plus: function() { this.addPart_(), this.updateMinus_() }, minus: function() { 0 != this.itemCount_ && (this.removePart_(), this.updateMinus_()) }, addPart_: function() { 0 == this.itemCount_ ? (this.getInput("EMPTY") && this.removeInput("EMPTY"), this.topInput_ = this.appendValueInput("ADD" + this.itemCount_).appendField(u(), "PLUS").appendField(s.a.Msg.TEXT_JOIN_TITLE_CREATEWITH)) : this.appendValueInput("ADD" + this.itemCount_), this.itemCount_++ }, removePart_: function() { this.itemCount_--, this.removeInput("ADD" + this.itemCount_), 0 == this.itemCount_ && (this.topInput_ = this.appendDummyInput("EMPTY").appendField(u(), "PLUS").appendField(this.newQuote_(!0)).appendField(this.newQuote_(!1))) }, updateMinus_: function() { const t = this.getField("MINUS");!t && this.itemCount_ > 0 ? this.topInput_.insertFieldAt(1, o(), "MINUS") : t && this.itemCount_ < 1 && this.topInput_.removeField("MINUS") } };
        s.a.Extensions.unregister("text_join_mutator"), s.a.Extensions.registerMutator("text_join_mutator", h, (function() { this.mixin(s.a.Constants.Text.QUOTE_IMAGE_MIXIN), this.updateShape_(2) }))
    }])
}));
//# sourceMappingURL=index.js.map