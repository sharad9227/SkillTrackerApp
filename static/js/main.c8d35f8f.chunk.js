(this.webpackJsonpskilltrackerapp=this.webpackJsonpskilltrackerapp||[]).push([[0],{27:function(e,a,t){e.exports=t(54)},32:function(e,a,t){},52:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(23),i=t.n(r),o=(t(32),t(6)),s=t(7),c=t(9),m=t(8),d=t(57),h=t(56),u=t(26),p=t(10),g=t(4),v=t(12),F=t(24),b=t.n(F),f=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).signUpAction=function(a){a.preventDefault(),console.log("submitted"),b.a.post("http://localhost:8080/testjpa_war_exploded/api/register",e.state).then((function(a){null!=a.data?(alert("Hello "+e.state.fullName+"!You are now registered on our portal"),alert("Please sign in with your credentials")):alert("User not Registed:Error")})).catch((function(e){console.log(e),alert(e)}))},e.state={emailId:"",password:"",fullName:"",hasAgreed:!1},e.handleChange=e.handleChange.bind(Object(g.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(g.a)(e)),e}return Object(s.a)(t,[{key:"handleChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(p.a)({},n,t))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("The form was submitted with the following data:"),console.log(this.state)}},{key:"render",value:function(){return l.a.createElement("div",{className:"FormCenter"},l.a.createElement("form",{onSubmit:this.signUpAction,className:"FormFields"},l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"name"},"Full Name"),l.a.createElement("input",{type:"text",id:"name",className:"FormField__Input",placeholder:"Enter your full name",name:"fullName",value:this.state.fullName,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",className:"FormField__Input",placeholder:"Enter your password",name:"password",value:this.state.password,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"email"},"E-Mail Address"),l.a.createElement("input",{type:"email",id:"email",className:"FormField__Input",placeholder:"Enter your email",name:"emailId",value:this.state.emailId,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__CheckboxLabel"},l.a.createElement("input",{className:"FormField__Checkbox",type:"checkbox",name:"hasAgreed",value:this.state.hasAgreed,onChange:this.handleChange})," I agree all statements in ",l.a.createElement("a",{href:"",className:"FormField__TermsLink"},"terms of service"))),l.a.createElement("div",{className:"FormField"},l.a.createElement("button",{className:"FormField__Button mr-20",type:"submit"},"Sign Up"),l.a.createElement(v.a,{to:"/sign-in",className:"FormField__Link"},"I'm already member"))))}}]),t}(n.Component),_=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={email:"",password:""},e.handleChange=e.handleChange.bind(Object(g.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(g.a)(e)),e}return Object(s.a)(t,[{key:"handleChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(p.a)({},n,t))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("The form was submitted with the following data:"),console.log(this.state)}},{key:"render",value:function(){return l.a.createElement("div",{className:"FormCenter"},l.a.createElement("form",Object(p.a)({onSubmit:this.handleSubmit,className:"FormFields"},"onSubmit",this.handleSubmit),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"email"},"E-Mail Address"),l.a.createElement("input",{type:"email",id:"email",className:"FormField__Input",placeholder:"Enter your email",name:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("label",{className:"FormField__Label",htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",className:"FormField__Input",placeholder:"Enter your password",name:"password",value:this.state.password,onChange:this.handleChange})),l.a.createElement("div",{className:"FormField"},l.a.createElement("button",{className:"FormField__Button mr-20"},"Sign In")," ",l.a.createElement(v.a,{to:"/",className:"FormField__Link"},"Create an account"))))}}]),t}(n.Component),E=(t(52),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{basename:"/react-auth-ui/"},l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App__Aside"}),l.a.createElement("div",{className:"App__Form"},l.a.createElement("div",{className:"PageSwitcher"},l.a.createElement(h.a,{to:"/sign-in",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item"},"Sign In"),l.a.createElement(h.a,{exact:!0,to:"/",activeClassName:"PageSwitcher__Item--Active",className:"PageSwitcher__Item"},"Sign Up")),l.a.createElement("div",{className:"FormTitle"},l.a.createElement(h.a,{to:"/sign-in",activeClassName:"FormTitle__Link--Active",className:"FormTitle__Link"},"Sign In")," or ",l.a.createElement(h.a,{exact:!0,to:"/",activeClassName:"FormTitle__Link--Active",className:"FormTitle__Link"},"Sign Up")),l.a.createElement(u.a,{exact:!0,path:"/",component:f}),l.a.createElement(u.a,{path:"/sign-in",component:_}))))}}]),t}(n.Component)),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(l.a.createElement(E,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/SkillTrackerApp",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/SkillTrackerApp","/service-worker.js");w?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):N(e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.c8d35f8f.chunk.js.map