(this.webpackJsonpreports=this.webpackJsonpreports||[]).push([[0],{43:function(e,t,s){},46:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(0),a=s.n(n),i=s(33),r=s.n(i),l=(s(43),s(44),s(45),s(6)),o=s(4),d=(s(46),s(5)),j=Object(o.i)((function(e){var t=e.history,s=Object(n.useState)(!1),a=Object(d.a)(s,2),i=a[0],r=a[1],o=!!localStorage.getItem("token");return Object(c.jsx)("nav",{className:"navbar is-primary",role:"navigation","aria-label":"main navigation",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"navbar-brand",children:Object(c.jsxs)("a",{role:"button",className:"navbar-burger burger ".concat(i&&"is-active"),"aria-label":"menu","aria-expanded":"false",onClick:function(){return r(!i)},children:[Object(c.jsx)("span",{"aria-hidden":"true"}),Object(c.jsx)("span",{"aria-hidden":"true"}),Object(c.jsx)("span",{"aria-hidden":"true"})]})}),Object(c.jsxs)("div",{className:"navbar-menu ".concat(i&&"is-active"),children:[Object(c.jsxs)("div",{className:"navbar-start",children:[Object(c.jsx)(l.c,{className:"navbar-item",activeClassName:"is-active",to:"/",exact:!0,children:"Home"}),Object(c.jsxs)("li",{class:"nav-item dropdown",children:[Object(c.jsx)("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Assistance"}),Object(c.jsxs)("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:[Object(c.jsx)("a",{class:"dropdown-item",href:"./AddApplication",children:"Add application"}),Object(c.jsx)("a",{class:"dropdown-item",href:"./ListApplication",children:"List application"})]})]}),Object(c.jsx)(l.c,{className:"navbar-item",activeClassName:"is-active",to:"/addapplication",children:"Assistance"}),Object(c.jsx)(l.c,{className:"navbar-item",activeClassName:"is-active",to:"/profile/Vijit",children:"Profile"})]}),Object(c.jsx)("div",{className:"navbar-end",children:Object(c.jsx)("div",{className:"navbar-item",children:Object(c.jsx)("div",{className:"buttons",children:o?Object(c.jsx)("button",{className:"button is-black",onClick:function(){localStorage.removeItem("token"),t.push("/")},children:"Log out"}):Object(c.jsx)("button",{className:"button is-white",onClick:function(){localStorage.setItem("token","some-login-token"),t.push("/profile/Vijit")},children:"Log in"})})})})]})]})})})),u=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"title is-1",children:"This is the Home Page"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum, lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio."})]})},p=s(11),b=s(3),h=s.n(b),m=s(10),x=s(17),O=s.n(x),v=s(37),g=function(){var e=Object(o.g)(),t=Object(n.useState)(),s=Object(d.a)(t,2),a=(s[0],s[1],Object(v.a)()),i=a.register,r=a.handleSubmit,j=(a.errors,function(){var t=Object(m.a)(h.a.mark((function t(s,c){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),console.log(s),s.json=JSON.stringify(s),s.created=new Date,n={"Content-Type":"application/json"},console.log(s),t.next=8,O.a.post("https://testspace03.azurewebsites.net/api/application",JSON.stringify(s),{headers:n});case 8:e.push("/");case 9:case"end":return t.stop()}}),t)})));return function(e,s){return t.apply(this,arguments)}}());return Object(c.jsxs)("div",{className:"container py-2",children:[Object(c.jsx)("div",{children:Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"col-xs-4 col-md-4 col-sm-4",children:Object(c.jsx)(l.b,{className:"btn btn-primary btn-sm",to:"/",children:"Home"})}),Object(c.jsx)("div",{class:"col-xs-4 col-md-4 col-sm-4",children:Object(c.jsx)("h6",{children:"Add Application"})}),Object(c.jsx)("div",{class:"col-xs-4 col-md-4 col-sm-4",children:Object(c.jsx)("div",{class:"row py-2",children:Object(c.jsx)("div",{class:"col-2"})})})]})}),Object(c.jsx)("div",{className:"mx-auto shadow p-2",children:Object(c.jsxs)("form",{onSubmit:r(j),children:[Object(c.jsxs)("div",{class:"input-group input-group-sm mb-3",children:[Object(c.jsx)("div",{class:"input-group-prepend",children:Object(c.jsx)("span",{class:"input-group-text",id:"",children:"Filecode + Status"})}),Object(c.jsx)("input",{type:"text",name:"filecode",placeholder:"File code",class:"form-control",ref:i({required:!0,maxLength:12})}),Object(c.jsx)("input",{ref:i({required:!0}),type:"text",name:"status",placeholder:"Status",class:"form-control"})]}),Object(c.jsxs)("div",{class:"input-group input-group-sm mb-3",children:[Object(c.jsx)("div",{class:"input-group-prepend",children:Object(c.jsx)("span",{class:"input-group-text",id:"",children:"Name + Age"})}),Object(c.jsx)("input",{type:"text",name:"name",placeholder:"Name",class:"form-control",ref:i({required:!0,maxLength:50,minLength:5})}),Object(c.jsx)("input",{ref:i({min:18,max:99}),type:"number",name:"age",placeholder:"Age"})]}),Object(c.jsxs)("div",{class:"input-group input-group-sm mb-3",children:[Object(c.jsx)("div",{class:"input-group-prepend",children:Object(c.jsx)("span",{class:"input-group-text",id:"",children:"Address"})}),Object(c.jsx)("input",{type:"text",name:"address",placeholder:"",class:"form-control",ref:i({required:!0,maxLength:100,minLength:5})})]}),Object(c.jsxs)("div",{class:"input-group input-group-sm mb-3",children:[Object(c.jsx)("div",{class:"input-group-prepend",children:Object(c.jsx)("span",{class:"input-group-text",id:"",children:"Phone + Email"})}),Object(c.jsx)("input",Object(p.a)({ref:i,type:"tel",name:"phone",placeholder:"Phone",class:"form-control"},"ref",i({required:!1,maxLength:11,minLength:8}))),Object(c.jsx)("input",Object(p.a)({ref:i,type:"text",name:"email",placeholder:"Email",class:"form-control"},"ref",i({required:!1,pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})))]}),Object(c.jsxs)("div",{class:"input-group input-group-sm mb-3",children:[Object(c.jsx)("div",{class:"input-group-prepend",children:Object(c.jsx)("span",{class:"input-group-text",id:"",children:"Category + Amount"})}),Object(c.jsxs)("select",{ref:i({required:!0}),name:"category",class:"form-control",placeholder:"Category",children:[Object(c.jsx)("option",{value:"Medical",children:"Medical"}),Object(c.jsx)("option",{value:"Education",children:"Education"}),Object(c.jsx)("option",{value:"House Repair",children:"House Repair"}),Object(c.jsx)("option",{value:"Other",children:"Other"})]}),Object(c.jsx)("input",{ref:i({required:!1,maxLength:6,minLength:2}),type:"number",name:"amount",placeholder:"Amount"})]}),Object(c.jsxs)("div",{class:"input-group input-group-sm mb-3",children:[Object(c.jsx)("div",{class:"input-group-prepend",children:Object(c.jsx)("span",{class:"input-group-text",id:"",children:"Details/Actions"})}),Object(c.jsx)("textarea",{ref:i,type:"text",name:"comment",placeholder:"",rows:"5",columns:"130",class:"form-control"})]}),Object(c.jsx)("button",{className:"btn btn-primary btn-block",children:"Add Application"})]})})]})},f=s(36),N=function(e){var t=e.showPerPage,s=e.onPaginationChange,a=(e.total,e.numberOfButtons),i=Object(n.useState)(1),r=Object(d.a)(i,2),l=r[0],o=r[1];Object(n.useEffect)((function(){var e=t*l;s(e-t,e)}),[l]);var j=function(e){"prev"===e?o(1===l?1:l-1):"next"===e&&o(a===l?l:l+1)};return Object(c.jsx)("div",{className:"d-flex justify-content-center",children:Object(c.jsx)("nav",{"aria-label":"Page navigation example",children:Object(c.jsxs)("ul",{class:"pagination",children:[Object(c.jsx)("li",{class:"page-item",children:Object(c.jsx)("a",{class:"page-link",href:"!#",onClick:function(){return j("prev")},children:"Previous"})}),new Array(a).fill("").map((function(e,t){return Object(c.jsx)("li",{class:"page-item ".concat(t+1===l?"active":null),children:Object(c.jsx)("a",{class:"page-link",onClick:function(){return o(t+1)},children:t+1})},t)})),Object(c.jsx)("li",{class:"page-item",children:Object(c.jsx)("a",{class:"page-link",onClick:function(){return j("next")},children:"Next"})})]})})})},w=s(35),y=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),s=t[0],a=t[1],i=Object(n.useState)(""),r=Object(d.a)(i,2),o=r[0],j=r[1],u=Object(n.useState)(!1),p=Object(d.a)(u,2),b=p[0],x=p[1];Object(n.useEffect)((function(){g()}),[]);var v={headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"http://localhost:3000"}},g=function(){var e=Object(m.a)(h.a.mark((function e(){var t,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),console.log("loading data...."),e.next=4,O.a.get("https://testspace03.azurewebsites.net/api/application",v);case 4:t=e.sent,s=t.data,a(s),x(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function y(e){return e.filter((function(e){return JSON.parse(e.json).name.toLowerCase().indexOf(o)>-1||JSON.parse(e.json).filecode.toLowerCase().indexOf(o)>-1}))}var S=Object(n.useState)(20),k=Object(d.a)(S,2),A=k[0],C=(k[1],Object(n.useState)({start:0,end:A})),L=Object(d.a)(C,2),P=L[0],q=L[1];return b?Object(c.jsx)("div",{class:"container",children:Object(c.jsx)(w.a,{animation:"border"})}):Object(c.jsxs)("div",{class:"container",children:[Object(c.jsx)("div",{children:Object(c.jsxs)("div",{class:"row",children:[Object(c.jsxs)("div",{class:"col-xs-4 col-md-4 col-sm-4",children:[" ",Object(c.jsx)(l.b,{className:"btn btn-primary btn-sm",to:"/",children:"back to Home"})]}),Object(c.jsx)("div",{class:"col-xs-4 col-md-4 col-sm-4",children:Object(c.jsx)("h5",{children:"Applications List"})}),Object(c.jsxs)("div",{class:"col-xs-4 col-md-4 col-sm-4",children:[" ",Object(c.jsx)("div",{class:"row py-2",children:Object(c.jsx)("div",{class:"col-2",children:Object(c.jsx)("input",{type:"text",placeholder:"Search list for",value:o,onChange:function(e){return j(e.target.value)}})})})]})]})}),Object(c.jsx)("div",{class:"container2",children:Object(c.jsx)("div",{className:"w-95 mx-auto shadow p-2",children:Object(c.jsx)("div",{class:"container3",children:Object(c.jsx)(f.a,{responsive:"sm",striped:!0,bordered:!0,hover:!0,children:Object(c.jsxs)("tbody",{children:[Object(c.jsx)("th",{children:"ID"}),Object(c.jsx)("th",{children:"File Code"}),Object(c.jsx)("th",{children:"Applicant"}),Object(c.jsx)("th",{children:"Deatils"}),Object(c.jsx)("th",{}),y(s).slice(P.start,P.end).map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"row",width:"5%",children:e.id}),Object(c.jsx)("td",{width:"10%",children:JSON.parse(e.json).filecode+" "+JSON.parse(e.json).status}),Object(c.jsx)("td",{width:"20%",children:JSON.parse(e.json).name+" "+JSON.parse(e.json).phone+" \u20b9"+JSON.parse(e.json).amount}),Object(c.jsx)("td",{width:"55%",children:JSON.parse(e.json).comment}),Object(c.jsxs)("td",{width:"5%",align:"center",children:[Object(c.jsx)(l.b,{class:"mt-1 mr-2",to:"/applications/edit/".concat(e.id),children:"Edit"}),Object(c.jsx)(l.b,{class:"mt-1 mr-2",to:"/applications/view/".concat(e.id),children:"View"})]})]},e.id)}))]})})})})}),Object(c.jsx)(N,{showPerPage:A,onPaginationChange:function(e,t){q({start:e,end:t})},total:y(s).length,numberOfButtons:Math.ceil(y(s).length/A)})]})},S=function(e){return function(){return!!localStorage.getItem("token")?Object(c.jsx)(e,{}):Object(c.jsx)(o.a,{to:"/"})}}((function(){var e=Object(o.h)().name;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"title is-1",children:"This is the Profile Page"}),Object(c.jsxs)("article",{className:"message is-dark",style:{marginTop:40},children:[Object(c.jsx)("div",{className:"message-header",children:Object(c.jsx)("p",{children:e})}),Object(c.jsxs)("div",{className:"message-body",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit."," ",Object(c.jsx)("strong",{children:"Pellentesque risus mi"}),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ",Object(c.jsx)("a",{children:"felis venenatis"})," efficitur. Aenean ac"," ",Object(c.jsx)("em",{children:"eleifend lacus"}),", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."]})]})]})}));var k=function(){return Object(c.jsxs)(l.a,{children:[Object(c.jsx)(j,{}),Object(c.jsx)("div",{className:"container mt-2",style:{marginTop:40},children:Object(c.jsxs)(o.d,{children:[Object(c.jsx)(o.b,{exact:!0,path:"/",children:Object(c.jsx)(u,{})}),Object(c.jsx)(o.b,{path:"/addapplication",children:Object(c.jsx)(g,{})}),Object(c.jsx)(o.b,{path:"/listapplication",children:Object(c.jsx)(y,{})}),Object(c.jsx)(o.b,{path:"/profile/:name",children:Object(c.jsx)(S,{})})]})})]})};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.109a3f74.chunk.js.map