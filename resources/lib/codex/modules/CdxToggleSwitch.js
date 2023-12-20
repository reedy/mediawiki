"use strict";const t=require("vue"),f=require("./CdxLabel.js"),b=require("./useLabelChecker.js"),w=require("./useModelWrapper.js"),c=require("./useGeneratedId.js"),y=require("./useSplitAttributes.js"),v=require("./useFieldData.js"),C=require("./_plugin-vue_export-helper.js");require("./Icon.js");require("./useComputedDirection.js");require("./useComputedLanguage.js");require("./constants.js");require("./useSlotContents2.js");require("./useWarnOnce.js");require("./useComputedDisabled.js");const k=t.defineComponent({name:"CdxToggleSwitch",components:{CdxLabel:f},inheritAttrs:!1,props:{modelValue:{type:[Boolean,Array],default:!1},inputValue:{type:[String,Number,Boolean],default:!1},alignSwitch:{type:Boolean,default:!1},hideLabel:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:i,slots:s,attrs:l}){var a;b.useLabelChecker((a=s.default)==null?void 0:a.call(s),l,"CdxToggleSwitch");const n=t.ref(),r=c("toggle-switch"),d=c("description"),o=t.computed(()=>({"cdx-toggle-switch--align-switch":e.alignSwitch})),{rootClasses:p,rootStyle:u,otherAttrs:h}=y(l,o),{computedDisabled:g}=v(t.toRef(e,"disabled")),m=w(t.toRef(e,"modelValue"),i);return{input:n,inputId:r,descriptionId:d,rootClasses:p,rootStyle:u,otherAttrs:h,computedDisabled:g,wrappedModel:m,clickInput:()=>{n.value.click()}}}});const q=["id","aria-describedby","value","disabled"],S=t.createElementVNode("span",{class:"cdx-toggle-switch__switch"},[t.createElementVNode("span",{class:"cdx-toggle-switch__switch__grip"})],-1);function $(e,i,s,l,n,r){const d=t.resolveComponent("cdx-label");return t.openBlock(),t.createElementBlock("span",{class:t.normalizeClass(["cdx-toggle-switch",e.rootClasses]),style:t.normalizeStyle(e.rootStyle)},[t.withDirectives(t.createElementVNode("input",t.mergeProps({id:e.inputId,ref:"input","onUpdate:modelValue":i[0]||(i[0]=o=>e.wrappedModel=o),class:"cdx-toggle-switch__input",type:"checkbox",role:"switch","aria-describedby":e.$slots.description&&e.$slots.description().length>0?e.descriptionId:void 0,value:e.inputValue,disabled:e.computedDisabled},e.otherAttrs,{onKeydown:i[1]||(i[1]=t.withKeys(t.withModifiers((...o)=>e.clickInput&&e.clickInput(...o),["prevent"]),["enter"]))}),null,16,q),[[t.vModelCheckbox,e.wrappedModel]]),S,t.createCommentVNode(" Only render a Label component if label text has been provided. This component can also\n			supply a description to the input if content is provided in the description slot. "),e.$slots.default&&e.$slots.default().length?(t.openBlock(),t.createBlock(d,{key:0,class:"cdx-toggle-switch__label","input-id":e.inputId,"description-id":e.$slots.description&&e.$slots.description().length>0?e.descriptionId:void 0,"visually-hidden":e.hideLabel,disabled:e.computedDisabled},t.createSlots({default:t.withCtx(()=>[t.renderSlot(e.$slots,"default")]),_:2},[e.$slots.description&&e.$slots.description().length>0?{name:"description",fn:t.withCtx(()=>[t.createCommentVNode(" @slot Short description text. "),t.renderSlot(e.$slots,"description")]),key:"0"}:void 0]),1032,["input-id","description-id","visually-hidden","disabled"])):t.createCommentVNode("v-if",!0)],6)}const V=C._export_sfc(k,[["render",$]]);module.exports=V;
