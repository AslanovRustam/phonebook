"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[691],{691:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var a=t(439),r=t(791),s=t(434),o=t(634),c=t(552),i="Contact_wrapper__edP3o",u="Contact_text__XEekE",l="Contact_button__G3qkQ",m="Contact_phone__LtbEN",_=t(184),d=function(e){var n=e.id,t=e.name,a=e.number,r=(0,s.I0)();return(0,_.jsxs)("div",{className:i,children:[(0,_.jsxs)("p",{className:u,children:[t," "]}),(0,_.jsx)("span",{children:"- "})," ",(0,_.jsx)("img",{className:m,src:c,alt:"phone"}),a,(0,_.jsx)("button",{type:"button",className:l,onClick:function(){return r((0,o.GK)(n))},children:"Delete"})]})},f=function(e){return e.contacts.loading},h=function(e){return e.contacts.items},p="ContactList_list__skyO1",x=function(e){var n=e.filter,t=(0,s.v9)(h);return(0,_.jsx)("ul",{className:p,children:t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){var n=e.id,t=e.name,a=e.number;return(0,_.jsx)("li",{children:(0,_.jsx)(d,{id:n,name:t,number:a})},n)}))})},j=t(402),b="ContactEditor_form__jm5NF",C="ContactEditor_input__+ThGd",v="ContactEditor_button__ek833",N=function(){var e=(0,s.I0)(),n=(0,s.v9)(h);return(0,_.jsxs)("form",{className:b,onSubmit:function(t){t.preventDefault();var a=t.currentTarget,r=a.elements.name.value,s=a.elements.number.value;""!==r||""!==s?n.some((function(e){return e.name.toLocaleLowerCase()===r.toLocaleLowerCase()}))?j.Am.error("Name -".concat(r,"- is alredy in contacts")):(e((0,o.uK)({name:r,number:s})),a.reset()):j.Am.error("Contact cannot be empty. Enter some text!")},children:[(0,_.jsxs)("label",{children:["Name: ",(0,_.jsx)("input",{name:"name",className:C})]}),(0,_.jsxs)("label",{children:["Number: ",(0,_.jsx)("input",{name:"number",type:"tel",className:C})]}),(0,_.jsx)("button",{type:"submit",className:v,children:"Add contact"})]})},g="Filter_input__fUB5j",k=function(e){var n=e.filter,t=e.onChangeInput;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("label",{children:[(0,_.jsx)("hr",{}),"Find contacts -",(0,_.jsx)("input",{className:g,onChange:t,value:n,type:"text",name:"filter"})]}),(0,_.jsx)("br",{}),(0,_.jsx)("br",{})]})};t(192);function E(){var e=(0,s.I0)(),n=(0,s.v9)(f);(0,r.useEffect)((function(){e((0,o.yF)())}),[e]);var t=(0,r.useState)(""),c=(0,a.Z)(t,2),i=c[0],u=c[1];return(0,_.jsxs)("section",{children:[(0,_.jsx)("title",{children:"Your Contacts"}),(0,_.jsx)(N,{}),(0,_.jsx)(k,{filter:i,onChangeInput:function(e){u(e.currentTarget.value)}}),(0,_.jsx)("div",{children:n&&"Request in progress..."}),(0,_.jsx)(x,{filter:i})]})}},192:function(e,n){n.Z={container:"s_container__BTpsF",phone:"s_phone__DlJGH",animatePhoneRing:"s_animatePhoneRing__olShl",title:"s_title__NcFf-",animateText:"s_animateText__lEYWM"}},552:function(e,n,t){e.exports=t.p+"static/media/telephone.29fa9ac561d7eeaeec92.png"}}]);
//# sourceMappingURL=691.bde5ac23.chunk.js.map