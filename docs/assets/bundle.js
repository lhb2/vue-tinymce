(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vue')) :
	typeof define === 'function' && define.amd ? define(['vue'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Vue));
})(this, (function (Vue) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

	const t=["INIT","INPUT","CHANGED"];var e={name:"VueTinymce",model:{prop:"content",event:"change"},props:{content:{type:[String,Object],default:""},setup:{type:Function,default:function(){}},disabled:{type:Boolean,default:!1},setting:{type:Object,default:function(){return {}}},debug:Boolean},render(t){return t("div",{attrs:{id:this.id}})},data:()=>({id:"vue-tinymce-"+Date.now()+Math.floor(1e3*Math.random()),editor:null,status:0,bookmark:null}),watch:{content(t,e){if(this.changedLog({type:"propsChanged"},this.status,`${t} | ${e}`,"--"),1!==this.status&&e!==t&&this.editor&&this.editor.initialized)return null===t?this.resetContent(""):void this.setContent(t)},disabled(t){this.editor.setMode(t?"readonly":"design");}},created(){this.changedLog=this.debug?(console.warn("`@packy-tang/vue-tinymce`进入debug模式"),(e,n,i,o)=>console.log("来自：%s | 状态：%s \n %s \n %s",e.type,t[n],i,o)):()=>!1;},mounted(){if("undefined"==typeof tinymce){var t=()=>{document.removeEventListener("tinymce",t),this.initEditor();};document.addEventListener("tinymce",t);}else this.initEditor();},updated(){this.editor.render();},beforeDestroy:function(){this.editor.remove();},methods:{setContent(t,e){e||(e=this.editor),e.setContent(t),e.selection.moveToBookmark(this.bookmark);},resetContent(t,e){if(e||(e=this.editor),e.resetContent)return e.resetContent(t);e.setContent(t),e.setDirty(!1),e.undoManager.clear();},onChanged(t,e){e||(e=this.editor),"change"===t.type&&(this.bookmark=t.level.bookmark);const n=e.getContent();this.changedLog(t,this.status,n,"--"),this.$emit("change",n);},initEditor(){const t=Object.assign({},this.setting,{selector:"#"+this.id,setup:t=>{this.setup(t),t.on("init",(()=>{this.setContent(this.content,t),t.on("keyup input",(t=>{this.status=1;})),t.on("SetContent",(e=>{this.changedLog(e,this.status,t.getContent(),"--");})),t.on("Blur",(e=>{this.status=0,this.changedLog(e,this.status,t.getContent(),"--");})),t.on("input keyup Change Undo Redo ExecCommand NodeChange",(e=>{this.onChanged(e,t);}));}));}});this.editor=window.tinymce.createEditor(t.selector,t),this.editor.targetElm=this.$el,this.editor.render();}}};var i=new class{constructor(){const{prefix:t}={prefix:""};this.prefix=t;}install(t,n={}){const i=n.prefix||this.prefix,o={VueTinymce:e};Object.keys(o).forEach((e=>{const n=o[e];t.component(i+n.name,n);}));}};

	Vue__default["default"].use(i);

}));
//# sourceMappingURL=bundle.js.map
