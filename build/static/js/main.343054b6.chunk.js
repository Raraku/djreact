(this.webpackJsonpgui=this.webpackJsonpgui||[]).push([[0],{173:function(e,t,a){e.exports=a.p+"static/media/background.e41cf302.svg"},179:function(e,t,a){e.exports=a.p+"static/media/Bean.a45f1a86.svg"},185:function(e,t,a){e.exports=a(361)},360:function(e,t,a){},361:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),i=a.n(o),l=a(65);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var s=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{},t)},u={token:null,error:null,loading:!1},p=function(e,t){return s(e,{error:null,loading:!0})},m=function(e,t){return s(e,{token:t.token,error:null,loading:!1})},d=function(e,t){return s(e,{error:t.error,loading:!1})},f=function(e,t){return s(e,{token:null})},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return p(e);case"AUTH_SUCCESS":return m(e,t);case"AUTH_FAIL":return d(e,t);case"AUTH_LOGOUT":return f(e);default:return e}},g=a(69),y=a(32),b=a(33),v=a(35),E=a(34),w=a(36),O=a(363),j=a(135),k=a(372),S=a(38),T=a(51),D=a(24),A=a(25),x=a.n(A),I=function(e){return{type:"AUTH_SUCCESS",token:e}},P=function(e){return{type:"AUTH_FAIL",error:e}},C=function(){return localStorage.removeItem("user"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},U=function(e){return function(t){setTimeout((function(){t(C())}),1e3*e)}},L=a(364),_=O.a.Header,R=O.a.Content,F=O.a.Footer,H=Object(T.e)(Object(D.b)(null,(function(e){return{logout:function(){return e(C())}}}))((function(e){return r.a.createElement(O.a,{className:"layout"},r.a.createElement(_,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(j.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],style:{lineHeight:"64px"}},e.isAuthenticated?r.a.createElement(j.a.Item,{key:"2",onClick:e.logout},"Logout"):r.a.createElement(j.a.Item,{key:"2"},r.a.createElement(S.b,{to:"/login"},"Login")),r.a.createElement(j.a.Item,{key:"1"},r.a.createElement(S.b,{to:"/"},"Posts")))),r.a.createElement(R,{style:{padding:"0 50px"}},r.a.createElement(k.a,{style:{margin:"16px 0"}},r.a.createElement(k.a.Item,null,r.a.createElement(S.b,{to:"/"},"Home")),r.a.createElement(k.a.Item,null,r.a.createElement(S.b,{to:"/"},"List"))),r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},e.children)),r.a.createElement(L.a,{className:"mybox"},r.a.createElement("p",{style:{verticalAlign:"center",fontSize:"3vmin"}},"This is where the ad will go")),r.a.createElement(F,{style:{textAlign:"center"}},"Ant Design \xa92018 Created by Ant UED"))}))),N=a(11),z=a(367),q=a(365),W=a(173),M=a.n(W),B=function(e){var t=e.type,a=e.text;return r.a.createElement("span",null,r.a.createElement(N.a,{type:t,style:{marginRight:8}}),a)};var G=function(e){return r.a.createElement(z.a,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:3},dataSource:e.data,renderItem:function(e){return r.a.createElement(z.a.Item,{key:e.title,actions:[r.a.createElement(B,{type:"star-o",text:1e3*Math.random(),key:"list-vertical-star-o"}),r.a.createElement(B,{type:"like-o",text:1e3*Math.random(),key:"list-vertical-like-o"}),r.a.createElement(B,{type:"message",text:1e3*Math.random(),key:"list-vertical-message"})],extra:r.a.createElement("img",{width:240,alt:"logo",src:M.a})},r.a.createElement(z.a.Item.Meta,{avatar:r.a.createElement(q.a,{src:e.avatar}),title:r.a.createElement("a",{href:"/articles/".concat(e.id)},e.title),description:e.description}),e.content)}})},J=a(371),V=a(373),X=a(137),Y=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).handleFormSubmit=function(e,t,n){e.preventDefault();var r=e.target.elements.title.value,o=e.target.elements.content.value,i=e.target.elements.description.value;switch(console.log(r,o,i),x.a.defaults.headers={"Content-Type":"application/json",Authorization:"Token ".concat(a.props.token)},t){case"post":return x.a.post("api/",{title:r,content:o,description:i}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));case"put":return x.a.put("/api/".concat(n,"/"),{title:r,content:o,description:i}).then(a.props.callbacktoreload).catch((function(e){return console.log(e)}));default:return"error"}},a}return Object(w.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(J.a,{onSubmit:function(t){return e.handleFormSubmit(t,e.props.requestType,e.props.articleID)}},r.a.createElement(J.a.Item,{label:"Title"},r.a.createElement(V.a,{name:"title",placeholder:"Put a title"})),r.a.createElement(J.a.Item,{label:"Content"},r.a.createElement(V.a,{name:"content",placeholder:"Enter some content"})),r.a.createElement(J.a.Item,{label:"Description"},r.a.createElement(V.a,{name:"description",placeholder:"Description"})),r.a.createElement(J.a.Item,null,r.a.createElement(X.a,Object(l.a)({htmlType:"submit",type:"primary"},"htmlType","submit"),this.props.btnText))))}}]),t}(r.a.Component),K=Object(D.b)((function(e){return{token:e.token}}))(Y),$=a(179),Q=a.n($),Z=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).state={articles:[],isLoading:!0},a}return Object(w.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.a.get("api/").then((function(t){e.setState({articles:t.data})})).then(this.setState({isLoading:!1}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.isLoading?r.a.createElement("div",{className:"suspense"},r.a.createElement("img",{src:Q.a,alt:"Articles are loading"}),r.a.createElement("br",null),r.a.createElement("h3",{style:{position:"relative",left:"-15px"}},"loading...")):r.a.createElement(G,{data:this.state.articles}),r.a.createElement("br",null),r.a.createElement("h2",{id:"form-header"},"Create an Article"),r.a.createElement(K,{requestType:"post",articleID:null,btnText:"Create",reloadCallback:function(){return e.componentDidChange()}}))}}]),t}(r.a.Component),ee=Object(D.b)((function(e){return{token:e.token}}))(Z),te=a(368),ae=a(370),ne=a(366),re=a(369);function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ie=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).handleDelete=function(e){if(e.preventDefault(),null!==a.props.token){var t=a.props.match.params.articleID;x.a.defaults.headers={"Content-Type":"application/json",Authorization:"Token ".concat(a.props.token)},x.a.delete("/api/".concat(t,"/")).then((function(){a.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?oe(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state,{article:"Your article has been deleted",show:!0})),a.props.history.push("/")}))}},a.state={article:[],show:!1,articleid:""},a}return Object(w.a)(t,e),Object(b.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;if(console.log(e),e.token){x.a.defaults.headers={"Content-Type":"application/json",Authorization:"Token ".concat(e.token)};var a=this.props.match.params.articleID;x.a.get("/api/".concat(a,"/")).then((function(e){t.setState({article:e.data})}))}}},{key:"componentDidChange",value:function(){var e=this,t=this.props.match.params.articleID;x.a.get("/api/".concat(t,"/")).then((function(t){e.setState({article:t.data,response:""})}))}},{key:"render",value:function(){var e=this;return!1===this.state.show?r.a.createElement("div",null,r.a.createElement(te.a,{title:this.state.article.title},r.a.createElement("p",null,this.state.article.content)),r.a.createElement("br",null),r.a.createElement(K,{requestType:"put",btnText:"Update",articleID:this.props.match.params.articleID,reloadCallback:function(){return e.componentDidChange()}}),r.a.createElement(ae.a,{onSubmit:this.handleDelete},r.a.createElement(ne.a,{type:"submit",variant:"outline-danger"},"Delete")),r.a.createElement("br",null)):r.a.createElement(re.a,{variant:"warning",show:this.state.show},"Your article has been deleted")}}]),t}(r.a.Component),le=Object(D.b)((function(e){return{token:e.token}}))(ie),ce=a(174),se=r.a.createElement(N.a,{type:"loading",style:{fontSize:24},spin:!0}),ue=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e||a.props.onAuth(t.username,t.password)})),a.props.history.push("/")},a}return Object(w.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=null;this.props.error&&(e=r.a.createElement("p",null,this.props.error.message));var t=this.props.form.getFieldDecorator;return r.a.createElement("div",null,e,this.props.loading?r.a.createElement(ce.a,{indicator:se}):r.a.createElement(J.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(J.a.Item,null,t("username",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(V.a,{prefix:r.a.createElement(N.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(J.a.Item,null,t("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(V.a,{prefix:r.a.createElement(N.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(J.a.Item,null,r.a.createElement(X.a,{type:"primary",htmlType:"submit",style:{marginRight:"10px"}},"Login"),"or",r.a.createElement(S.c,{style:{marginRight:"10px",marginLeft:"10px"},to:"/signup/"},"signup"))))}}]),t}(r.a.Component),pe=J.a.create({name:"normal_login"})(ue),me=Object(D.b)((function(e){return{loading:e.loading,error:e.error}}),(function(e){return{onAuth:function(t,a){return e(function(e,t){return function(a){a({type:"AUTH_START"}),x.a.post("rest-auth/login/",{username:e,password:t}).then((function(e){var t=e.data.key,n=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",n),a(I(t)),a(U(3600))})).catch((function(e){a(P(e))}))}}(t,a))}}}))(pe),de=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={confirmDirty:!1},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){e||(console.log("Received values of form: ",t),a.props.onAuth(t.username,t.email,t.password,t.confirm)),a.props.history.push("/")}))},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.compareToFirstPassword=function(e,t,n){var r=a.props.form;t&&t!==r.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()},a.validateToNextPassword=function(e,t,n){var r=a.props.form;t&&a.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},a}return Object(w.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(J.a,{onSubmit:this.handleSubmit},r.a.createElement(J.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(V.a,{prefix:r.a.createElement(N.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(J.a.Item,null,e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(r.a.createElement(V.a,{prefix:r.a.createElement(N.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"e-mail"}))),r.a.createElement(J.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(r.a.createElement(V.a.Password,{prefix:r.a.createElement(N.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(J.a.Item,null,e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(r.a.createElement(V.a.Password,{prefix:r.a.createElement(N.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password",onBlur:this.handleConfirmBlur}))),r.a.createElement(J.a.Item,null,r.a.createElement(X.a,{type:"primary",htmlType:"submit",style:{marginRight:"10px"}},"Signup"),"or",r.a.createElement(S.c,{style:{marginRight:"10px",marginLeft:"10px"},to:"/login/"},"Login")))}}]),t}(r.a.Component),fe=J.a.create({name:"register"})(de),he=Object(D.b)((function(e){return{loading:e.loading,error:e.error}}),(function(e){return{onAuth:function(t,a,n,r){return e(function(e,t,a,n){return function(r){r({type:"AUTH_START"}),x.a.post("rest-auth/registration/",{username:e,email:t,password1:a,password2:n}).then((function(e){var t=e.data.key,a=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",a),r(I(t)),r(U(3600))})).catch((function(e){r(P(e))}))}}(t,a,n,r))}}}))(fe),ge=function(){return r.a.createElement("div",null,r.a.createElement(T.a,{exact:!0,path:"/",component:ee}),r.a.createElement(T.a,{exact:!0,path:"/articles/:articleID",component:le}),r.a.createElement(T.a,{exact:!0,path:"/login",component:me}),r.a.createElement(T.a,{exact:!0,path:"/signup",component:he}))},ye=a(70);var be=function(e){function t(){return Object(y.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup(),ye.a.initialize("UA-155326309-1"),ye.a.pageview(window.location.pathname+window.location.search)}},{key:"render",value:function(){return r.a.createElement(L.a,null,r.a.createElement(S.a,null,r.a.createElement(H,this.props,r.a.createElement(ge,null))))}}]),t}(n.Component),ve=Object(D.b)((function(e){return{isAuthenticated:null!==e.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(void 0===t)e(C());else{var a=new Date(localStorage.getItem("expirationDate"));a<=new Date?e(C()):(e(I(t)),e(U((a.getTime()-(new Date).getTime())/1e3)))}}))}}}))(be),Ee=a(181),we=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(358),a(359),a(360);!function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");we?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Oe(t,e)}))}}();var je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.c,ke=Object(g.d)(h,je(Object(g.a)(Ee.a)));ye.a.initialize("UA-155326309-1"),ye.a.pageview(window.location.pathname+window.location.search);var Se=r.a.createElement(D.a,{store:ke},r.a.createElement(ve,null));i.a.render(Se,document.getElementById("root"))}},[[185,1,2]]]);
//# sourceMappingURL=main.343054b6.chunk.js.map