(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(9),a(1));function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",to:"/home"},"Home")),l.a.createElement("li",{className:"nav-item"}),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},"Contact"))),l.a.createElement("form",{className:"d-flex"},l.a.createElement("input",{type:"radio",class:"btn-check",name:"options-outlined",id:"danger-outlined",autocomplete:"off",onClick:e.dangerColorBtn}),l.a.createElement("label",{class:"btn btn-outline-danger",for:"danger-outlined"},"Danger radio"),l.a.createElement("div",{class:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input text",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode"))))))}function s(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{for:"myBox",className:"form-label"},e.heading),l.a.createElement("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"grey":"white"},id:"myBox",rows:"15",value:r,onChange:function(e){console.log("Handle On Change was clicked"),c(e.target.value)}})),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){console.log("Uppercase button was Clicked"+r);var e=r.toUpperCase();c(e)}},"Convert To UpperCase"),l.a.createElement("button",{className:"btn btn-primary mx-4",onClick:function(){var e=r.toLowerCase();c(e)}},"Convert To LowerCase"),l.a.createElement("button",{className:"btn btn-primary mx-4",onClick:function(){var e=r.split("").reverse().join("");c(e)}},"Replace String"),l.a.createElement("button",{className:"btn btn-primary mx-4",onClick:function(){c("")}},"Clear All"))),l.a.createElement("div",{className:"container my-4"},l.a.createElement("h1",null,"Your Text Summary"),l.a.createElement("p",null,r.split("").length," Words and ",r.length," Characters"),l.a.createElement("p",null,.008*r.split("").length," minutes read"),l.a.createElement("h3",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter Something in the textbox above to preview it")))}function i(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,e.alert.type," ")," ",e.alert.msg)}m.defaultProps={title:"Set title here",aboutText:"About text here"};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],g=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},3e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"Textutils",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="grey",document.body.style.color="#fff",g("Dark Mode Is Enabled","success")):(r("light"),document.body.style.backgroundColor="white",document.body.style.color="#000",g("Dark Mode Is Enabled","success"))}}),l.a.createElement(i,{alert:d}),l.a.createElement(s,{heading:"Enter the text to analyze"}),l.a.createElement("div",{className:"container my-4"}),l.a.createElement("div",{className:"container my-4"}))},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,11)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),d()},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.60521cb6.chunk.js.map