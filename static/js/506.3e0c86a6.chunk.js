"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[506],{506:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var a=t(439),r=t(791),o=t(434),s=t(165),c=t(861),l=t(402),i=t(634),u={overvlow:"modal_overvlow__xYxJO",modalBackDrop:"modal_modalBackDrop__RDxgy",container:"modal_container__3X4bX",title:"modal_title__Bv5mf",form:"modal_form__O7IAU",label:"modal_label__jyDJr",btn:"modal_btn__I5JQb",contentTitle:"modal_contentTitle__oRoqJ",content:"modal_content__DKo8L"},m=t(164),d=function(e){return e.contacts.loading},_=function(e){return e.contacts.items},f=t(184),p=document.querySelector("#modal-root");function b(e){var n=e.onClose,t=e.id,a=e.name,s=e.number,c=(0,o.v9)(_),d=(0,o.I0)();(0,r.useEffect)((function(){return document.body.classList.add(u.overvlow),function(){document.body.classList.remove(u.overvlow)}}),[]);return(0,m.createPortal)((0,f.jsx)("div",{className:u.modalBackDrop,onClick:function(e){e.currentTarget===e.target&&n()},children:(0,f.jsxs)("div",{className:u.container,children:[(0,f.jsx)("h2",{className:u.title,children:"Update Contact"}),(0,f.jsxs)("form",{className:u.form,onSubmit:function(e){e.preventDefault();var a=e.currentTarget,r=a.elements.name.value,o=a.elements.number.value;""!==r&&""!==o?c.some((function(e){return e.name.toLocaleLowerCase()===r.toLocaleLowerCase()}))?l.Am.error("Name -".concat(r,"- is alredy in contacts")):(d((0,i.Tk)({id:t,name:r,number:o})),a.reset(),l.Am.success("Contact -".concat(r,"- is successfully updated")),n()):l.Am.error("name or number cannot be empty. Enter some text!")},children:[(0,f.jsxs)("label",{className:u.label,children:["Name: ",(0,f.jsx)("input",{name:"name",className:u.input,placeholder:a})]}),(0,f.jsxs)("label",{className:u.label,children:["Number:"," ",(0,f.jsx)("input",{name:"number",type:"tel",className:u.input,placeholder:s})]}),(0,f.jsx)("button",{type:"submit",className:u.btn,children:"Confirm"})]})]})}),p)}var x=t(552),h="Contact_wrapper__edP3o",v="Contact_text__XEekE",j="Contact_container__qVIH7",C="Contact_button__G3qkQ",N="Contact_buttonUpd__BJN-n",y="Contact_phone__LtbEN",k=function(e){var n=e.id,t=e.name,u=e.number,m=(0,r.useState)(!1),d=(0,a.Z)(m,2),_=d[0],p=d[1];function k(){return p(!_)}var g=(0,o.I0)(),L=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g((0,i.GK)(n));case 3:l.Am.error("Contact -".concat(t,"- is successfully DELETED")),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:h,children:[(0,f.jsxs)("p",{className:v,children:[t," "]}),(0,f.jsx)("span",{children:"- "})," ",(0,f.jsx)("img",{className:y,src:x,alt:"phone"}),u,(0,f.jsxs)("div",{className:j,children:[(0,f.jsx)("button",{type:"button",className:N,onClick:k,children:"Update Contact"}),(0,f.jsx)("button",{type:"button",className:C,onClick:L,children:"Delete"})]}),_&&(0,f.jsx)(b,{onClose:k,id:n,number:u,name:t})]})},g="ContactList_list__skyO1",L=function(e){var n=e.filter,t=(0,o.v9)(_);return(0,f.jsx)("ul",{className:g,children:t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){var n=e.id,t=e.name,a=e.number;return(0,f.jsx)("li",{children:(0,f.jsx)(k,{id:n,name:t,number:a})},n)}))})},w="ContactEditor_form__jm5NF",E="ContactEditor_input__+ThGd",T="ContactEditor_label__a4BT4",D="ContactEditor_button__ek833",A=function(){var e=(0,o.I0)(),n=(0,o.v9)(_);return(0,f.jsxs)("form",{className:w,onSubmit:function(t){t.preventDefault();var a=t.currentTarget,r=a.elements.name.value,o=a.elements.number.value;""!==r&&""!==o?n.some((function(e){return e.name.toLocaleLowerCase()===r.toLocaleLowerCase()}))?l.Am.error("Name -".concat(r,"- is alredy in contacts")):(e((0,i.uK)({name:r,number:o})),a.reset(),l.Am.success("Contact -".concat(r,"- is successfully added"))):l.Am.error("name or number cannot be empty. Enter some text!")},children:[(0,f.jsxs)("label",{className:T,children:["Name: ",(0,f.jsx)("input",{name:"name",className:E})]}),(0,f.jsxs)("label",{className:T,children:["Number: ",(0,f.jsx)("input",{name:"number",type:"tel",className:E})]}),(0,f.jsx)("button",{type:"submit",className:D,children:"Add contact"})]})},I="Filter_input__fUB5j",B=function(e){var n=e.filter,t=e.onChangeInput;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("hr",{}),"Find contacts - \xa0",(0,f.jsx)("input",{className:I,onChange:t,value:n,type:"text",name:"filter"})]}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{})]})},F=t(192);function Z(){var e=(0,o.I0)(),n=(0,o.v9)(d);(0,r.useEffect)((function(){e((0,i.yF)())}),[e]);var t=(0,r.useState)(""),s=(0,a.Z)(t,2),c=s[0],l=s[1];return(0,f.jsxs)("section",{className:F.Z.section,children:[(0,f.jsx)("title",{children:"Your Contacts"}),(0,f.jsx)(A,{}),(0,f.jsx)(B,{filter:c,onChangeInput:function(e){l(e.currentTarget.value)}}),(0,f.jsx)("div",{children:n&&"Request in progress..."}),(0,f.jsx)(L,{filter:c})]})}},192:function(e,n){n.Z={container:"s_container__BTpsF",phone:"s_phone__DlJGH",animatePhoneRing:"s_animatePhoneRing__olShl",title:"s_title__NcFf-",animateText:"s_animateText__lEYWM",section:"s_section__LWCsC"}},552:function(e,n,t){e.exports=t.p+"static/media/telephone.29fa9ac561d7eeaeec92.png"}}]);
//# sourceMappingURL=506.3e0c86a6.chunk.js.map