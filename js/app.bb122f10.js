(function(t){function e(e){for(var n,i,r=e[0],l=e[1],c=e[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),o=a.n(n);o.a},"1fde":function(t,e,a){"use strict";var n=a("4244"),o=a.n(n);o.a},"36b2":function(t,e,a){"use strict";var n=a("f0f1"),o=a.n(n);o.a},4244:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/katex"}},[t._v("wysiwygMath - KaTeX")])],1),a("div",{staticStyle:{padding:"40px"}},[a("keep-alive",[a("router-view")],1)],1)])},s=[],i={created:function(){"/katex"!==this.$router.currentRoute.path&&this.$router.push("/katex")}},r=i,l=(a("034f"),a("2877")),c=Object(l["a"])(r,o,s,!1,null,null,null),u=c.exports,d=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("transition",{attrs:{name:"fade"}},[a("span",{staticClass:"popup",class:{hidden:!t.showPopup},on:{mousedown:t.preventHide}},[a("span",{staticClass:"border-right"},t._l(t.fontStyles,(function(e,n){return a("button",{key:n,staticClass:"popup-button",class:{selected:e.selected},on:{click:function(a){t.setStyle(e.style,!1,null),e.selected=!e.selected}}},[a("i",{class:e.icon})])})),0),a("span",{staticClass:"border-right"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedFontSize,expression:"selectedFontSize"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedFontSize=e.target.multiple?a:a[0]},t.changeFontSize]}},t._l(t.newFontSizes,(function(e){return a("option",{key:e},[t._v(t._s(e))])})),0)]),a("span",{staticClass:"border-right"},t._l(t.textStyles,(function(e,n){return a("button",{key:n,staticClass:"popup-button",class:{selected:e.selected},on:{click:function(a){t.textAlign(e.style),e.selected=!e.selected}}},[a("i",{class:e.icon})])})),0),a("span",{staticClass:"border-right"},t._l(t.lists,(function(e,n){return a("button",{key:n,staticClass:"popup-button",class:{selected:e.selected},on:{click:function(a){t.setStyle(e.style),e.selected=!e.selected}}},[a("i",{class:e.icon})])})),0),a("span",{staticClass:"border-right"},[a("button",{staticClass:"popup-button",on:{click:t.createFormula}},[a("i",{staticClass:"fas fa-square-root-alt"})])]),a("span",{},[a("button",{staticClass:"popup-button",on:{click:function(e){return t.setStyle("undo")}}},[a("i",{staticClass:"fas fa-undo-alt"})])])])]),a("span",{ref:"textarea",staticClass:"form-control editor",style:"height: calc(1.5em * "+t.rows+" + .75rem + 2px);",attrs:{id:t.id,placeholder:t.placeholder,contenteditable:""},on:{focusin:function(e){t.showPopup=!0},focusout:t.hideSelf,input:t.onDivInput,change:t.onDivInput,click:t.updateCursorPos,keyup:t.updateCursorPos}}),a("div",[t._v(" dataRaw "),a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data,expression:"data"}],attrs:{cols:"100",rows:"10"},domProps:{value:t.data},on:{input:[function(e){e.target.composing||(t.data=e.target.value)},t.onDataRawInput],change:t.onDataRawInput}})])]),a("formula-modal",{ref:"formulaAddModal",on:{"insert-latex":t.insertLaTeX}}),a("formula-modal",{ref:"formulaEditModal",attrs:{"is-in-edit-mode":""},on:{"insert-latex":t.insertLaTeX2}})],1)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-end"},[a("h3",[t._v("KaTeX")])])}],h=(a("4160"),a("a630"),a("caad"),a("c975"),a("d81d"),a("fb6a"),a("b0c0"),a("a9e3"),a("d3b7"),a("25f0"),a("3ca3"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"formula",staticClass:"wysiwyg-math-formula",attrs:{contenteditable:"false"},on:{dblclick:t.edit}})}),p=[],v={name:"mathFormula",props:{latex:String},data:function(){return{show:!1}},methods:{edit:function(){window.bus.$emit("formula-click",{element:this.$refs.formula,latex:this.latex})},render:function(){var t=this;this.show=!1,setTimeout((function(){window.katex.render("".concat(t.latex),t.$refs.formula,{throwOnError:!1,output:"html"}),t.$refs.formula.innerHTML=" "+t.$refs.formula.innerHTML+" ",t.show=!0}),100)}},mounted:function(){this.render()}},g=v,w=(a("fc20"),Object(l["a"])(g,h,p,!1,null,null,null)),b=w.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.isInEditMode?"Редактировать формулу":"Вставить формулу"))]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){t.showModal=!1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[a("div",{ref:"patterns",staticClass:"d-flex mb-3"},[a("div",{staticClass:"d-flex"},[a("div",{staticStyle:{position:"relative"}},[a("div",{staticClass:"py-1 px-2 text-center section-button",class:{expanded:t.showLetters},attrs:{tabindex:"0"},on:{click:function(e){t.showLetters=!t.showLetters},focusout:t.hideSelf}},[t._v(" \\(\\alpha \\beta \\delta\\) ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showLetters,expression:"showLetters"}],staticStyle:{"z-index":"100","background-color":"#ffffff",position:"absolute",top:"100%",left:"0","margin-top":"8px",border:"black 1px solid","border-radius":"4px",padding:"4px",display:"grid","grid-template-columns":"repeat(8, 1fr)","flex-wrap":"wrap","text-align":"center"},on:{mousedown:t.preventHide}},t._l(t.letters,(function(e,n){return a("div",{key:n,staticClass:"letter",on:{click:function(a){return t.insertLetter(e)}}},[t._v(" \\( "+t._s(e)+" \\) ")])})),0)]),a("div",{staticClass:"ml-2",staticStyle:{position:"relative"}},[a("div",{staticClass:"py-1 px-2 text-center section-button",class:{expanded:t.showOperators},attrs:{tabindex:"0"},on:{click:function(e){t.showOperators=!t.showOperators},focusout:t.hideSelf}},[t._v(" \\(\\sum\\) ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showOperators,expression:"showOperators"}],staticStyle:{"z-index":"100","background-color":"#ffffff",position:"absolute",top:"100%",left:"0","margin-top":"8px",border:"black 1px solid","border-radius":"4px",padding:"4px",display:"grid","grid-template-columns":"repeat(4, 1fr)","flex-wrap":"wrap","text-align":"center"},on:{mousedown:t.preventHide}},t._l(t.operators,(function(e,n){return a("div",{key:n,staticClass:"letter",on:{click:function(a){return t.insertOperator(e)}}},[t._v(" \\("+t._s(e)+"\\) ")])})),0)]),a("div",{staticClass:"ml-2",staticStyle:{position:"relative"}},[a("div",{staticClass:"py-1 px-2 text-center section-button",class:{expanded:t.showSymbols},attrs:{tabindex:"0"},on:{click:function(e){t.showSymbols=!t.showSymbols},focusout:t.hideSelf}},[t._v(" \\(\\neq\\) ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showSymbols,expression:"showSymbols"}],staticStyle:{"z-index":"100","background-color":"#ffffff",position:"absolute",top:"100%",left:"0","margin-top":"8px",border:"black 1px solid","border-radius":"4px",padding:"4px",display:"grid","grid-template-columns":"repeat(7, 1fr)","flex-wrap":"wrap","text-align":"center"},on:{mousedown:t.preventHide}},t._l(t.symbols,(function(e,n){return a("div",{key:n,staticClass:"letter",on:{click:function(a){return t.insertSymbol(e)}}},[t._v(" \\("+t._s(e)+"\\) ")])})),0)])])]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formula,expression:"formula"}],ref:"formulaTextarea",staticStyle:{width:"100%"},attrs:{rows:"3",autofocus:""},domProps:{value:t.formula},on:{click:t.updateFormulaCursorPos,keydown:t.updateFormulaCursorPos,input:function(e){e.target.composing||(t.formula=e.target.value)}}}),a("div",{staticStyle:{"font-weight":"bolder",margin:".8rem 0 .4rem"}},[t._v("Результат:")]),a("div",{ref:"formulaPreview",staticStyle:{margin:".5rem 0",height:"40px"}})]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){t.showModal=!1}}},[t._v("Отмена")]),t.isInEditMode?a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.saveFormula}},[t._v("Сохранить ")]):a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addFormula}},[t._v("Добавить ")])])])])])])])},y=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"formula",staticClass:"wysiwyg-math-formula",attrs:{contenteditable:"false"},domProps:{innerHTML:t._s(" \\( "+t.latex+" \\) ")},on:{dblclick:t.edit}})},C=[],_={name:"mathFormula",props:{latex:String},data:function(){return{show:!1}},methods:{edit:function(){window.bus.$emit("formula-click",{element:this.$refs.formula,latex:this.latex})},render:function(){var t=this;this.show=!1,setTimeout((function(){window.MathJax.typeset(),t.show=!0}),100)}},mounted:function(){this.render()}},k=_,F=(a("df98"),Object(l["a"])(k,S,C,!1,null,null,null)),z=F.exports,$={name:"wysiwygMath",components:{mathFormula:z},props:{isInEditMode:{type:Boolean,default:!1}},data:function(){return{showModal:!1,updateFormulaTimeout:null,formula:"",data:null,showLetters:!1,showOperators:!1,showSymbols:!1,preventHideFlag:!1,changeOpacity:!1,preventFormulaWatcher:!1,letters:["\\alpha","\\beta","\\gamma","\\delta","\\epsilon","\\zeta","\\eta","\\theta","\\iota","\\kappa","\\lambda","\\mu","\\nu","\\omicron","\\pi","\\rho","\\sigma","\\tau","\\upsilon","\\phi","\\chi","\\psi","\\omega","\\Gamma","\\Delta","\\Theta","\\Lambda","\\Xi","\\Pi","\\Upsilon","\\Phi","\\Psi","\\Omega","\\Sigma","\\mathbb{N}","\\mathbb{Z}","\\mathbb{Q}","\\mathbb{R}","\\mathbb{C}"],operators:["\\sqrt{ab}","\\sqrt[n]{ab}","\\log_{a}{b}","\\lg{ab}","a^{b}","a_{b} c_a^b","c_a^b","\\widetilde{ab}","\\widehat{ab}","\\overrightarrow{ab}","\\overline{ab}","\\frac{ab}{cd}","\\frac{\\partial a}{\\partial b}","\\frac{\\text{d}x}{\\text{d}y}","\\lim_{a \\rightarrow b}","\\int_{a}^{b}","\\prod_a^b","\\bigcap_a^b","\\bigcup_a^b","\\sum_a^b","\\left(\\begin{array}{c}a\\\\ b\\end{array}\\right)","\\begin{bmatrix}a & b \\\\c & d \\end{bmatrix}","\\begin{cases}a & x = 0\\\\b & x > 0\\end{cases}"],symbols:["\\times","\\div","\\pm","\\mp","\\cdot","\\star","\\neq","\\leq","\\geq","\\sim","\\approx","\\cong","\\equiv","\\ll","\\gg","\\in","\\subset","\\subseteq","\\ni","\\models","\\vdash","\\perp","\\mid","\\parallel","\\hat{a}","\\check{a}","\\acute{a}","\\tilde{a}","\\bar{a}","\\vec{a}","\\dot{a}","\\ddot{a}","\\leftarrow","\\Leftarrow","\\rightarrow","\\Rightarrow","\\leftrightarrow","\\Leftrightarrow","\\exists","\\forall","\\triangle","\\triangledown"]}},watch:{formula:function(){var t=this;this.updateFormulaTimeout&&clearTimeout(this.updateFormulaTimeout),this.preventFormulaWatcher?this.preventFormulaWatcher=!1:this.updateFormulaTimeout=setTimeout((function(){window.katex.render("".concat(t.formula),t.$refs.formulaPreview,{throwOnError:!1,output:"html"}),t.changeOpacity&&(t.$refs.formulaPreview.style.opacity=1,t.changeOpacity=!1)}),1500)},showModal:function(){this.showModal&&setTimeout((function(){}),1e3)}},methods:{toggle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.data=t,this.formula="",this.$refs.formulaPreview.innerHTML="",this.isInEditMode&&(this.preventFormulaWatcher=!0,this.formula=t.latex,window.katex.render("".concat(this.formula),this.$refs.formulaPreview,{throwOnError:!1,output:"html"})),this.showModal=!0},test:function(){console.log("123")},preventHide:function(){this.preventHideFlag=!0},hideSelf:function(){this.preventHideFlag?this.preventHideFlag=!this.preventHideFlag:(this.showLetters=!1,this.showOperators=!1,this.showSymbols=!1)},updateData:function(){this.data=this.$refs.textarea.innerHTML},updateFormulaCursorPos:function(t){this.formulaCursorPos=t.target.selectionStart},insertToFormula:function(t){void 0!==this.formulaCursorPos?this.formula=this.formula.slice(0,this.formulaCursorPos)+" ".concat(t," ")+this.formula.slice(this.formulaCursorPos):this.formula+=" ".concat(t," ")},insertLetter:function(t){this.showLetters=!1,this.insertToFormula(t)},insertOperator:function(t){this.showOperators=!1,this.insertToFormula(t)},insertSymbol:function(t){this.showSymbols=!1,this.insertToFormula(t)},addFormula:function(){this.showModal=!1,this.$emit("insert-latex",this.formula)},editFormula:function(){console.log("editFormula")},saveFormula:function(){this.showModal=!1,this.data.latex=this.formula,this.$emit("insert-latex",this.data)}}},T=$,M=(a("36b2"),Object(l["a"])(T,x,y,!1,null,null,null)),O=M.exports,P={name:"wysiwygMath",components:{mathFormula:b,formulaModal:O},props:{id:String,placeholder:String,rows:{type:Number,default:5}},data:function(){return{showPopup:!1,hideTimeout:null,preventHideFlag:!1,data:"",selection:null,range:null,align:"left",fontStyles:[{tag:"b",icon:"fas fa-bold",style:"bold",selected:!1},{tag:"i",icon:"fas fa-italic",style:"italic",selected:!1},{tag:"u",icon:"fas fa-underline",style:"underline",selected:!1},{tag:"strike",icon:"fas fa-strikethrough",style:"strikethrough",selected:!1}],lists:[{tag:"ul",icon:"fas fa-list-ul",style:"insertUnorderedList",selected:!1},{tag:"ol",icon:"fas fa-list-ol",style:"insertOrderedList",selected:!1}],textStyles:[{tag:"left",icon:"fas fa-align-left",style:"left",selected:!1},{tag:"center",icon:"fas fa-align-center",style:"center",selected:!1},{tag:"right",icon:"fas fa-align-right",style:"right",selected:!1},{tag:"justify",icon:"fas fa-align-justify",style:"justify",selected:!1}],fontSizes:[{name:"x-small",value:"1"},{name:"small",value:"2"},{name:"medium",value:"3"},{name:"large",value:"4"},{name:"x-large",value:"5"},{name:"xx-large",value:"6"},{name:"xxx-large",value:"7"}],selectedFontSize:12,newFontSizes:[8,9,10,11,12,14,18,24,30,36,48,60,72,96],updateFormulaTimeout:null}},computed:{cursorPos:function(){try{return this.range.startOffset}catch(t){return-1}}},watch:{},methods:{preventHide:function(){this.preventHideFlag=!0},setStyle:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;document.execCommand(t,a,n),this.$refs.textarea.focus(),setTimeout((function(){e.analyze()}),100)},textAlign:function(t){var e=this,a=this.selection.getRangeAt(0).commonAncestorContainer;while("p"!==a.nodeName.toLowerCase())a=a.parentNode;a.style.textAlign=t,this.$refs.textarea.focus(),setTimeout((function(){e.analyze()}),100)},hideSelf:function(){this.preventHideFlag?this.preventHideFlag=!this.preventHideFlag:this.showPopup=!1},createFormula:function(){this.$refs.formulaAddModal.toggle()},onDivInput:function(t){this.$emit("input",t.target.innerHTML),this.data=t.target.innerHTML},onDataRawInput:function(){this.$refs.textarea.innerHTML=this.data},test:function(){var t=document.createElement("p");this.range.insertNode(t),this.updateData()},changeFontSize:function(){var t=this.range.extractContents();Array.from(t.children).forEach((function(t){return t.style.removeProperty("font-size")}));var e=document.createElement("span");e.style.fontSize=this.selectedFontSize.toString()+"pt",e.appendChild(t),this.range.insertNode(e),this.updateData(),this.$refs.textarea.focus()},insertLaTeX:function(t){var e=n["a"].mixin(b),a=new e({propsData:{latex:t}});a.$mount(),this.range.insertNode(a.$el),this.updateData(),this.selection.removeAllRanges(),this.selection.addRange(this.range),this.selection.collapseToEnd(),this.$refs.textarea.focus()},insertLaTeX2:function(t){var e=n["a"].mixin(b),a=new e({propsData:{latex:t.latex}});a.$mount(),t.element.parentNode.insertBefore(a.$el,t.element),t.element.parentNode.removeChild(t.element),this.$refs.textarea.focus()},updateData:function(){this.data=this.$refs.textarea.innerHTML},updateCursorPos:function(t){this.selection=window.getSelection(),this.range=this.selection.getRangeAt(0),"click"===t.type?setTimeout(this.analyze,100):this.analyze()},analyze:function(){var t,e=this.selection,a=[],n={};if(e.rangeCount){t=e.getRangeAt(0).commonAncestorContainer;while(1){if(null==t)break;var o=t.nodeName.toLowerCase();if(t===this.$refs.textarea)break;function s(t,e){try{return""!==t[e]?t[e]:null}catch(a){return null}}"textAlign"in n&&null!==n.textAlign||(n.textAlign=s(t.style,"textAlign")),"fontSize"in n&&null!==n.fontSize||(n.fontSize=s(t.style,"fontSize")),"fontWeight"in n&&null!==n.fontWeight||(n.fontWeight=s(t.style,"fontWeight")),a.push(o),t=t.parentNode}}if([void 0,null].includes(n.fontSize))this.selectedFontSize=12;else{var i=parseInt(n.fontSize.slice(0,-2)),r=n.fontSize.slice(-2);"px"===r&&(i*=3/4),this.selectedFontSize=i}this.lists.forEach((function(t){return t.selected=a.includes(t.tag)})),this.fontStyles.forEach((function(t){return t.selected=a.includes(t.tag)})),"bolder"===n.fontWeight&&(this.fontStyles[0].selected=!0);var l=!1;this.textStyles.forEach((function(t){t.selected=n.textAlign===t.tag,t.selected&&(l=!0)})),l||(this.textStyles[0].selected=!0)},increaseFont:function(){var t=window.getSelection().getRangeAt(0).commonAncestorContainer.parentElement;if(t!==this.$refs.textarea){if(""!==t.style.fontSize){var e=this.fontSizes.map((function(t){return t.name})).indexOf(t.style.fontSize);e<this.fontSizes.length-1&&(document.execCommand("styleWithCSS",!1,!0),document.execCommand("fontSize",!1,this.fontSizes[e+1].value),document.execCommand("styleWithCSS",!1,!1))}}else document.execCommand("styleWithCSS",!1,!0),document.execCommand("fontSize",!1,this.fontSizes[3].value),document.execCommand("styleWithCSS",!1,!1)},decreaseFont:function(){var t=window.getSelection().getRangeAt(0).commonAncestorContainer.parentElement;if(t!==this.$refs.textarea){if(""!==t.style.fontSize){var e=this.fontSizes.map((function(t){return t.name})).indexOf(t.style.fontSize);e>0&&(document.execCommand("styleWithCSS",!1,!0),document.execCommand("fontSize",!1,this.fontSizes[e-1].value),document.execCommand("styleWithCSS",!1,!1))}}else document.execCommand("styleWithCSS",!1,!0),document.execCommand("fontSize",!1,this.fontSizes[1].value),document.execCommand("styleWithCSS",!1,!1)}},beforeCreate:function(){},beforeMount:function(){},mounted:function(){var t=this;window.bus=new n["a"]({}),window.bus.$on("formula-click",(function(e){t.$refs.formulaEditModal.toggle(e)})),document.execCommand("defaultParagraphSeparator",!1,"p"),this.$refs.textarea.innerHTML='<p><span style="font-size: 12pt;"><br></span></p>'},updated:function(){}},L=P,H=(a("1fde"),Object(l["a"])(L,f,m,!1,null,null,null)),E=H.exports;n["a"].use(d["a"]);var A=[{path:"/katex",name:"wysiwygKaTeX",component:E}],N=new d["a"]({routes:A}),j=N,W=window.MathJax;n["a"].prototype.$mathjax=W,n["a"].config.productionTip=!1,new n["a"]({router:j,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,a){},c417:function(t,e,a){},dd43:function(t,e,a){},df98:function(t,e,a){"use strict";var n=a("c417"),o=a.n(n);o.a},f0f1:function(t,e,a){},fc20:function(t,e,a){"use strict";var n=a("dd43"),o=a.n(n);o.a}});
//# sourceMappingURL=app.bb122f10.js.map