(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1761:function(e,i,s){"use strict";s.r(i);var t={data:()=>({date:{start:new Date(2019,0,5),end:new Date(2019,0,1)},mode:"range",isInline:!1,isDark:!1,popover:{visibility:"focus",placement:"bottom-start"},attrs:[{highlight:{color:"gray",fillMode:"none"},dates:new Date}],dragAttribute:{highlight:{base:{fillMode:"light"},startEnd:{fillMode:"light"}}}})},a=s(3),l=Object(a.a)(t,function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"example"},[s("h3",{staticClass:"text-lg mb-2"},[e._v("Mode")]),e._v(" "),s("div",{staticClass:"flex mb-4"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",id:"single",value:"single"},domProps:{checked:e._q(e.mode,"single")},on:{change:function(i){e.mode="single"}}}),e._v(" "),s("label",{attrs:{for:"single"}},[e._v("Single")])]),e._v(" "),s("div",{staticClass:"ml-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",id:"multiple",value:"multiple"},domProps:{checked:e._q(e.mode,"multiple")},on:{change:function(i){e.mode="multiple"}}}),e._v(" "),s("label",{attrs:{for:"multiple"}},[e._v("Multiple")])]),e._v(" "),s("div",{staticClass:"ml-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],attrs:{type:"radio",id:"range",value:"range"},domProps:{checked:e._q(e.mode,"range")},on:{change:function(i){e.mode="range"}}}),e._v(" "),s("label",{attrs:{for:"range"}},[e._v("Range")])])]),e._v(" "),s("h3",{staticClass:"text-lg mb-2"},[e._v("Popover Visibility")]),e._v(" "),s("div",{staticClass:"flex mb-4"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.popover.visibility,expression:"popover.visibility"}],attrs:{type:"radio",id:"hover",value:"hover"},domProps:{checked:e._q(e.popover.visibility,"hover")},on:{change:function(i){return e.$set(e.popover,"visibility","hover")}}}),e._v(" "),s("label",{attrs:{for:"hover"}},[e._v("Hover")])]),e._v(" "),s("div",{staticClass:"ml-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.popover.visibility,expression:"popover.visibility"}],attrs:{type:"radio",id:"focus",value:"focus"},domProps:{checked:e._q(e.popover.visibility,"focus")},on:{change:function(i){return e.$set(e.popover,"visibility","focus")}}}),e._v(" "),s("label",{attrs:{for:"focus"}},[e._v("Focus")])]),e._v(" "),s("div",{staticClass:"ml-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.popover.visibility,expression:"popover.visibility"}],attrs:{type:"radio",id:"click",value:"click"},domProps:{checked:e._q(e.popover.visibility,"click")},on:{change:function(i){return e.$set(e.popover,"visibility","click")}}}),e._v(" "),s("label",{attrs:{for:"click"}},[e._v("Click")])]),e._v(" "),s("div",{staticClass:"ml-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.popover.visibility,expression:"popover.visibility"}],attrs:{type:"radio",id:"visible",value:"visible"},domProps:{checked:e._q(e.popover.visibility,"visible")},on:{change:function(i){return e.$set(e.popover,"visibility","visible")}}}),e._v(" "),s("label",{attrs:{for:"visible"}},[e._v("Visible")])])]),e._v(" "),s("div",{staticClass:"flex items-center mb-2"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.isInline,expression:"isInline"}],staticClass:"mt-1",attrs:{id:"isInline",type:"checkbox"},domProps:{checked:Array.isArray(e.isInline)?e._i(e.isInline,null)>-1:e.isInline},on:{change:function(i){var s=e.isInline,t=i.target,a=!!t.checked;if(Array.isArray(s)){var l=e._i(s,null);t.checked?l<0&&(e.isInline=s.concat([null])):l>-1&&(e.isInline=s.slice(0,l).concat(s.slice(l+1)))}else e.isInline=a}}}),e._v(" "),s("label",{attrs:{for:"isInline"}},[e._v("Is Inline")])]),e._v(" "),s("div",{staticClass:"ml-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.isDark,expression:"isDark"}],staticClass:"mt-1",attrs:{id:"isDark",type:"checkbox"},domProps:{checked:Array.isArray(e.isDark)?e._i(e.isDark,null)>-1:e.isDark},on:{change:function(i){var s=e.isDark,t=i.target,a=!!t.checked;if(Array.isArray(s)){var l=e._i(s,null);t.checked?l<0&&(e.isDark=s.concat([null])):l>-1&&(e.isDark=s.slice(0,l).concat(s.slice(l+1)))}else e.isDark=a}}}),e._v(" "),s("label",{attrs:{for:"isDark"}},[e._v("Is Dark")])])]),e._v(" "),s("v-date-picker",{attrs:{mode:e.mode,"is-inline":e.isInline,"is-dark":e.isDark,popover:e.popover,attributes:e.attrs},model:{value:e.date,callback:function(i){e.date=i},expression:"date"}})],1)},[],!1,null,null,null);i.default=l.exports}}]);
//# sourceMappingURL=84.4c3df30d.js.map