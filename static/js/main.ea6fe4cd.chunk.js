(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var _=a(0),r=a.n(_),s=a(3),u=a.n(s),l=(a(14),a(4));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},4:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_compu_javascript_calculator_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),C_Users_compu_javascript_calculator_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),C_Users_compu_javascript_calculator_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),C_Users_compu_javascript_calculator_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),C_Users_compu_javascript_calculator_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),App=function(_React$Component){Object(C_Users_compu_javascript_calculator_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(C_Users_compu_javascript_calculator_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(t){var e;return Object(C_Users_compu_javascript_calculator_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(e=_super.call(this,t)).state={gridItemWidth:4,gridItemHeight:4,upperOutput:"",lowerOutput:"0",decimals:!1,upperLast:"",calcState:"zero"},e.digitLimit=24,e.warningBlock=!1,e.isValid=e.isValid.bind(Object(C_Users_compu_javascript_calculator_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.onCalcButtonPress=e.onCalcButtonPress.bind(Object(C_Users_compu_javascript_calculator_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.categorizeInput=e.categorizeInput.bind(Object(C_Users_compu_javascript_calculator_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.numberLimit=e.numberLimit.bind(Object(C_Users_compu_javascript_calculator_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e}return Object(C_Users_compu_javascript_calculator_portfolio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"isValid",value:function(t,e){if("AC"===t)return!0;switch(this.state.calcState){case"zero":return"digit"===e||"decimal"===e||"-"===t||"equals"===e||"zero"===e||"operator"===e&&""!==this.state.upperOutput;case"operator":return"digit"===e||"zero"===e||"operator"===e||"decimal"===e;case"digit":return"digit"===e||"zero"===e||"operator"===e||("decimal"===e&&!1===this.state.decimals||"equals"===e);case"decimal":return"digit"===e||"zero"===e||"operator"===e||"equals"===e;case"result":return"digit"===e||"operator"===e||"decimal"===e||"zero"===e;default:return!1}}},{key:"categorizeInput",value:function(t){switch(t){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return"digit";case"0":return"zero";case".":return"decimal";case"=":return"equals";case"*":case"/":case"-":case"+":return"operator";case"AC":return"AC";default:return"unrecognized"}}},{key:"onCalcButtonPress",value:function onCalcButtonPress(btn){if(!this.warningBlock){var category=this.categorizeInput(btn);if(this.state.lowerOutput.length>=this.digitLimit&&("digit"===category||"zero"===category||"decimal"===category))this.numberLimit();else if(this.isValid(btn,category))switch(category){case"AC":this.setState({calcState:"zero",upperLast:"",upperOutput:"",lowerOutput:"0",decimals:!1});break;case"zero":"zero"===this.state.calcState?this.setState({calcResult:"zero",upperLast:"0",upperOutput:"0",lowerOutput:"0"}):"result"===this.state.calcState?this.setState({calcState:"zero",upperLast:"0",upperOutput:"0",lowerOutput:"0",decimals:!1}):"operator"===this.state.calcState?this.setState((function(t){return{calcState:"zero",upperLast:"0",upperOutput:t.upperOutput+btn,lowerOutput:btn}})):this.setState((function(t){return{calcState:"digit",upperLast:"0",upperOutput:t.upperOutput+"0",lowerOutput:t.lowerOutput+"0"}}));break;case"digit":"result"===this.state.calcState?this.setState({calcState:"digit",upperLast:btn,upperOutput:btn,lowerOutput:btn,decimals:!1}):"zero"===this.state.calcState?this.setState((function(t){return{calcState:"digit",upperLast:btn,upperOutput:t.upperOutput.slice(0,t.upperOutput.length-1)+btn,lowerOutput:btn}})):"operator"===this.state.calcState?this.setState((function(t){return{calcState:"digit",upperLast:btn,upperOutput:t.upperOutput+btn,lowerOutput:btn}})):this.setState((function(t){return{calcState:"digit",upperLast:btn,upperOutput:t.upperOutput+btn,lowerOutput:t.lowerOutput+btn}}));break;case"operator":if("result"===this.state.calcState){var savedResult=this.state.lowerOutput;this.setState({calcState:"operator",upperLast:btn,upperOutput:savedResult+btn,lowerOutput:btn,decimals:!1})}else if("operator"===this.state.calcState){if(this.state.upperLast===btn)return;"-"!==this.state.upperLast&&"-"===btn?this.setState((function(t){return{calcState:"operator",upperLast:btn,upperOutput:t.upperOutput+btn,lowerOutput:btn,decimals:!1}})):/(\*|\/|\+|-)/.test(this.state.upperOutput[this.state.upperOutput.length-2])?this.setState((function(t){return{calcState:"operator",upperLast:btn,upperOutput:t.upperOutput.slice(0,t.upperOutput.length-2)+btn,lowerOutput:btn,decimals:!1}})):this.setState((function(t){return{calcState:"operator",upperLast:btn,upperOutput:t.upperOutput.slice(0,t.upperOutput.length-1)+btn,lowerOutput:btn,decimals:!1}}))}else this.setState((function(t){return{calcState:"operator",upperLast:btn,upperOutput:t.upperOutput+btn,lowerOutput:btn,decimals:!1}}));break;case"equals":var calcResult=Math.round(1e7*eval(this.state.upperOutput))/1e7;this.setState((function(t){return{calcState:"result",upperLast:"",upperOutput:t.upperOutput+"="+calcResult,lowerOutput:calcResult,decimals:!1}}));break;case"decimal":"operator"===this.state.calcState?this.setState((function(t){return{calcState:"decimal",upperLast:".",upperOutput:t.upperOutput+"0.",lowerOutput:"0.",decimals:!0}})):"result"===this.state.calcState?this.setState({calcState:"decimal",upperLast:".",upperOutput:"0.",lowerOutput:"0.",decimals:!0}):"zero"===this.state.calcState?""===this.state.upperOutput?this.setState({calcState:"decimal",upperLast:".",upperOutput:"0.",lowerOutput:"0.",decimals:!0}):this.setState((function(t){return{calcState:"decimal",upperLast:".",upperOutput:t.upperOutput+btn,lowerOutput:t.lowerOutput+btn,decimals:!0}})):this.setState((function(t){return{calcState:"decimal",upperLast:".",upperOutput:t.upperOutput+".",lowerOutput:t.lowerOutput+".",decimals:!0}}));break;default:return}}}},{key:"numberLimit",value:function(){var t=this;if(!this.warningBlock){this.warningBlock=!0;var e=this.state.lowerOutput;this.setState({lowerOutput:"MAX DIGITS REACHED"}),setTimeout((function(){t.setState({lowerOutput:e}),t.warningBlock=!1}),1e3)}}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"calculator",style:{gridTemplateColumns:"repeat(4, "+this.state.gridItemWidth+"rem)",gridTemplateRows:"minmax(4rem, max-content) repeat(5, "+this.state.gridItemHeight+"rem)"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(OutputField,{upper:this.state.upperOutput,lower:this.state.lowerOutput}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"AC",gridArea:"AC",btnClass:"AC hoverable",press:this.onCalcButtonPress,id:"clear"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"/",btnClass:"light hoverable",press:this.onCalcButtonPress,id:"divide"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"*",btnClass:"light hoverable",press:this.onCalcButtonPress,id:"multiply"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"7",btnClass:"dark hoverable",press:this.onCalcButtonPress,id:"seven"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"8",btnClass:"dark hoverable",press:this.onCalcButtonPress,id:"eight"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"9",btnClass:"dark hoverable",press:this.onCalcButtonPress,id:"nine"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"-",btnClass:"light hoverable",press:this.onCalcButtonPress,id:"subtract"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"4",btnClass:"dark hoverable",press:this.onCalcButtonPress,id:"four"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"5",btnClass:"dark hoverable",press:this.onCalcButtonPress,id:"five"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"6",btnClass:"dark hoverable",press:this.onCalcButtonPress,id:"six"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"+",btnClass:"light hoverable",press:this.onCalcButtonPress,id:"add"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"1",btnClass:"dark hoverable",press:this.onCalcButtonPress,id:"one"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"2",btnClass:"dark hoverable",press:this.onCalcButtonPress,id:"two"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"3",btnClass:"dark hoverable",press:this.onCalcButtonPress,id:"three"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"=",gridArea:"equal",btnClass:"equal hoverable rounded-corner-right",press:this.onCalcButtonPress,id:"equals"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"0",gridArea:"zero",btnClass:"dark hoverable rounded-corner-left",press:this.onCalcButtonPress,id:"zero"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:".",btnClass:"dark hoverable",press:this.onCalcButtonPress,id:"decimal"}))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);function CalcButton(t){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:t.btnClass?t.btnClass+" calc-child":"calc-child",style:t.gridArea?{gridArea:t.gridArea}:{gridArea:"initial"},onClick:function(){return t.press(t.label)},id:t.id},t.label)}function OutputField(t){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calc-child output",style:{gridArea:"output"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"output-row"},t.upper),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"output-row",id:"display"},t.lower))}__webpack_exports__.a=App},9:function(t,e,a){t.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.ea6fe4cd.chunk.js.map