(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(e,a,t){e.exports=t(28)},22:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(15),r=t.n(c),m=(t(22),t(7)),s=t(6),i=t(5),o=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!1),o=Object(m.a)(r,2),u=o[0],E=o[1],p=function(){return c(!1)};return window.addEventListener("scroll",(function(){window.scrollY>=80?E(!0):E(!1)})),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:u?"navbar-container-active":"navbar-container"},l.a.createElement(s.b,{to:"/",className:u?"navbar-logo-active":"navbar-logo",onClick:p},"cjdc"),l.a.createElement("div",{className:u?"menu-icon-active":"menu-icon",onClick:function(){return c(!t)}},t?l.a.createElement(i.g,null):l.a.createElement(i.b,null)),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/",className:u?"nav-links-active":"nav-links",onClick:p},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/about",className:u?"nav-links-active":"nav-links",onClick:p},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/projects",className:u?"nav-links-active":"nav-links",onClick:p},"Projects")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/contact",className:u?"nav-links-active":"nav-links",onClick:p},"Contact"))))))},u=t(0),E=function(){return l.a.createElement(u.b.Provider,{value:{size:"35px"}},l.a.createElement("div",{className:"text-wrapper"},l.a.createElement("div",{className:"swipe-title"},l.a.createElement("h1",null,"Christopher Celimen")),l.a.createElement("div",{className:"swipe-subtitle"},l.a.createElement("h3",null,"Front-end Developer")),l.a.createElement("div",{className:"social-menu"},l.a.createElement("ul",null,l.a.createElement("li",{className:"social-menu-item"},l.a.createElement(i.c,null)),l.a.createElement("li",{className:"social-menu-item"},l.a.createElement(i.d,null)),l.a.createElement("li",{className:"social-menu-item"},l.a.createElement(i.e,null)),l.a.createElement("li",{className:"social-menu-item"},l.a.createElement(i.h,null)),l.a.createElement("li",{className:"social-menu-item"},l.a.createElement(i.f,null))))))},p=[{id:1,title:"Software Engineer",dates:"January 2018 - December 2019",company:"ACCENTURE",duties:["SAP ABAP Developer","Development of automation bots for Accenture Ticket Handling Operator Solution (ATHOS)","Developement of SAP ABAP OData services to build and cosume RESTful APIs which is integrated to our Splunk dashboard"]},{id:2,title:"Technical Developer",dates:"August 2020 - Present",company:"PORTALINK",duties:["Java RegEx Data Mapper and Verifier","Accurately capture all required fields of a Data Extraction Template with the appropriate use of regular expressions"]}],v=function(){var e=Object(n.useState)(p),a=Object(m.a)(e,2),t=a[0],c=(a[1],Object(n.useState)(0)),r=Object(m.a)(c,2),s=r[0],o=r[1],u=t[s],E=u.title,v=u.duties,d=u.company,N=u.dates;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"about-section"},l.a.createElement("div",{className:"about-title"},l.a.createElement("h1",null,"Experience")),l.a.createElement("div",{className:"jobs-center"},l.a.createElement("div",{className:"btn-container"},t.map((function(e,a){return l.a.createElement("button",{key:e.id,onClick:function(){return o(a)},className:"job-btn ".concat(a===s&&"active-btn")},e.company)}))),l.a.createElement("article",{className:"job-info"},l.a.createElement("h3",null,E),l.a.createElement("h4",null,d),l.a.createElement("p",{className:"job-date"},N),v.map((function(e,a){return l.a.createElement("div",{key:a,className:"job-desc"},l.a.createElement(i.a,{className:"job-icon"}),l.a.createElement("p",null,e))}))))))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"contact-wrapper"},l.a.createElement("h1",null,"Projects")))},N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"contact-wrapper"},l.a.createElement("h1",{className:"contact-message"},"For the appreciation of design and continuous innovation, let's collaborate.")),l.a.createElement("div",{className:"contact-wrapper-container"},l.a.createElement("div",{className:"contact-wrapper-form"},l.a.createElement("h2",null,"Contact Me"),l.a.createElement("div",{className:"row100"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("input",{type:"text",name:""}),l.a.createElement("span",{className:"text"},"Name"),l.a.createElement("span",{className:"line"}))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"inputBox"},l.a.createElement("input",{type:"text",name:""}),l.a.createElement("span",{className:"text"},"Email"),l.a.createElement("span",{className:"line"})))),l.a.createElement("div",{className:"row100"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"inputBox textarea"},l.a.createElement("textarea",null),l.a.createElement("span",{className:"text"},"Message"),l.a.createElement("span",{className:"line"})))),l.a.createElement("div",{className:"row100"},l.a.createElement("div",{className:"col"},l.a.createElement("input",{className:"submit",type:"submit",value:"Send"}))))))},b=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("h3",null,"\xa9 ",(new Date).getFullYear()," Christopher Celimen"))},f=t(2);function h(){var e=Object(f.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var w=function(){return l.a.createElement(s.a,null,l.a.createElement(h,null),l.a.createElement(o,null),l.a.createElement("div",{className:"page-container"},l.a.createElement("div",{className:"content-wrap"},l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/",exact:!0,component:E}),l.a.createElement(f.a,{path:"/about",component:v}),l.a.createElement(f.a,{path:"/projects",component:d}),l.a.createElement(f.a,{path:"/contact",component:N}),l.a.createElement(f.a,{path:"*",component:E})),l.a.createElement(b,null))))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6951b87e.chunk.js.map