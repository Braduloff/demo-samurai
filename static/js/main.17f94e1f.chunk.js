(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i});var r=n(127),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"89377b9d-aaee-4534-8b58-699f71ffe30e"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},120:function(e,t,n){"use strict";n.d(t,"b",function(){return i});var r=n(37),a=n(11);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var c={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},i=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){Object(a.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},129:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1_En6"}},130:function(e,t,n){e.exports=n.p+"static/media/user.8b1dbb1f.png"},131:function(e,t,n){e.exports=n.p+"static/media/preloader.6c3daf60.svg"},14:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE"}},161:function(e,t,n){e.exports=n(289)},166:function(e,t,n){},167:function(e,t,n){},24:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return p});var r=n(29),a=n(0),o=n.n(a),c=n(49),i=n.n(c),u=n(86),s=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return o.a.createElement("div",{className:i.a.formControl+" "+(c?i.a.error:"")},o.a.createElement("div",null,a),c&&o.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(u.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a)),c)}},289:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(124),c=n.n(o),i=(n(166),n(31)),u=n(32),s=n(36),l=n(33),f=n(35),p=(n(167),n(14)),m=n.n(p),g=n(293),d=function(){return a.a.createElement("nav",{className:m.a.nav},a.a.createElement("div",{className:m.a.item},a.a.createElement(g.a,{to:"/profile",activeClassName:m.a.activeLink},"Profile")),a.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)},a.a.createElement(g.a,{to:"/dialogs",activeClassName:m.a.activeLink},"Messages")),a.a.createElement("div",{className:"".concat(m.a.item," ").concat(m.a.active)},a.a.createElement(g.a,{to:"/users",activeClassName:m.a.activeLink},"Users")),a.a.createElement("div",{className:m.a.item},a.a.createElement("a",{href:"#"},"News")),a.a.createElement("div",{className:m.a.item},a.a.createElement("a",{href:"#"},"Music")),a.a.createElement("div",{className:m.a.item},a.a.createElement("a",{href:"#"},"Settings")))},b=n(125),O=n(294),h=n(291),v=n(10),E=n(7),w=n.n(E),y=n(13),P=n(37),j=n(11),S=n(12);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var C=function(e,t,n,r){return e.map(function(e){return e[n]===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach(function(t){Object(j.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},r):e})};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach(function(t){Object(j.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var T={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},N=function(e){return{type:"FOLLOW",userId:e}},D=function(e){return{type:"UNFOLLOW",userId:e}},L=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},U=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},x=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},A=function(){var e=Object(y.a)(w.a.mark(function e(t,n,r,a){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(x(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(x(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FAKE":return I({},e,{fake:e.fake+1});case"FOLLOW":return I({},e,{users:C(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return I({},e,{users:C(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return I({},e,{users:t.users});case"SET_CURRENT_PAGE":return I({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return I({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return I({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return I({},e,{followingInProgress:t.isFetching?[].concat(Object(P.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!=t.userId})});default:return e}},z=n(29),R=n(122),G=n(68),M=n.n(G),B=n(128),W=n.n(B),H=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,i=e.portionSize,u=void 0===i?10:i,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/u),m=Object(r.useState)(1),g=Object(R.a)(m,2),d=g[0],b=g[1],O=(d-1)*u+1,h=d*u;return a.a.createElement("div",{className:M.a.paginator},d>1&&a.a.createElement("button",{onClick:function(){b(d-1)}},"PREV"),l.filter(function(e){return e>=O&&e<=h}).map(function(e){return a.a.createElement("span",{className:W()(Object(j.a)({},M.a.selectedPage,o===e),M.a.pageNumber),key:e,onClick:function(t){c(e),console.log(e)}},e)}),p>d&&a.a.createElement("button",{onClick:function(){b(d+1)}},"NEXT"))},V=n(129),K=n.n(V),Y=n(130),X=n.n(Y),J=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;Object(z.a)(e,["user","followingInProgress","unfollow","follow"]);return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(g.a,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:X.a,className:K.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){o(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},Z=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,o=e.onPageChanged,c=e.users,i=Object(z.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return a.a.createElement("div",null,a.a.createElement(H,{currentPage:t,totalItemsCount:n,pageSize:r,onPageChanged:o}),a.a.createElement("div",null,c.map(function(e){return a.a.createElement(J,{user:e,key:e.id,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow})})))},q=n(60),$=n(6),Q=n(132),ee=Object(Q.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),te=function(e){return e.usersPage.pageSize},ne=function(e){return e.usersPage.totalUsersCount},re=function(e){return e.usersPage.currentPage},ae=function(e){return e.usersPage.isFetching},oe=function(e){return e.usersPage.followingInProgress},ce=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.getUsers(e,t)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(q.a,null):null,a.a.createElement(Z,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(a.a.Component),ie=Object($.d)(Object(v.b)(function(e){return{users:ee(e),pageSize:te(e),totalUsersCount:ne(e),currentPage:re(e),isFetching:ae(e),followingInProgress:oe(e)}},{follow:function(e){return function(){var t=Object(y.a)(w.a.mark(function t(n){return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:A(n,e,S.c.follow.bind(S.c),N);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(y.a)(w.a.mark(function t(n){return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:A(n,e,S.c.unfollow.bind(S.c),D);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:L,toggleFollowingProgress:x,getUsers:function(e,t){return function(){var n=Object(y.a)(w.a.mark(function n(r){var a;return w.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(U(!0)),r(L(e)),n.next=4,S.c.getUsers(e,t);case 4:a=n.sent,r(U(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}))(ce),ue=n(88),se=n.n(ue),le=function(e){return a.a.createElement("header",{className:se.a.header},a.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),a.a.createElement("div",{className:se.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Log out")," "):a.a.createElement(g.a,{to:"/login"},"Login")))},fe=n(42);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var me={userId:null,email:null,login:null,isAuth:!1},ge=function(e,t,n,r){return{type:"samurai-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},de=function(){return function(){var e=Object(y.a)(w.a.mark(function e(t){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.a.me().then(function(e){if(0===e.data.resultCode){var n=e.data.data,r=n.id,a=n.login,o=n.email;t(ge(r,o,a,!0))}}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"samurai-network/auth/SET_USER_DATA":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(n,!0).forEach(function(t){Object(j.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},t.payload);default:return e}},Oe=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(le,this.props)}}]),t}(a.a.Component),he=Object(v.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(y.a)(w.a.mark(function e(t){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.logout();case 2:0===e.sent.data.resultCode&&t(ge(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(Oe),ve=n(121),Ee=n(24),we=n(83),ye=n(292),Pe=n(49),je=n.n(Pe),Se=Object(ve.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(Ee.c)("Email","email",[we.b],Ee.a),Object(Ee.c)("Password","password",[we.b],Ee.a,{type:"password"}),Object(Ee.c)(null,"rememberMe",null,Ee.a,{type:"checkbox"},"remember me"),n&&a.a.createElement("div",{className:je.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}),_e=Object(v.b)(function(e){return{isAuth:e.auth.isAuth}},{login:function(e,t,n){return function(){var r=Object(y.a)(w.a.mark(function r(a){var o,c;return w.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,S.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(de()):(c=o.data.messages.length>0?o.data.messages[0]:"Some error",a(Object(fe.a)("login",{_error:c})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){return e.isAuth?a.a.createElement(ye.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(Se,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))});function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var ke={initialized:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(n,!0).forEach(function(t){Object(j.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{initialized:!0});default:return e}},Te=n(91),Ne=n(120),De={},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De;arguments.length>1&&arguments[1];return e},Ue=n(134),xe=n(123),Ae=Object($.c)({profilePage:Te.b,dialogsPage:Ne.a,sidebar:Le,usersPage:F,auth:be,form:xe.a,app:Ie}),Fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,ze=Object($.e)(Ae,Fe(Object($.a)(Ue.a)));window.store=ze;var Re=ze,Ge=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(e,null))}},Me=a.a.lazy(function(){return n.e(4).then(n.bind(null,300))}),Be=a.a.lazy(function(){return n.e(3).then(n.bind(null,299))}),We=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(he,null),a.a.createElement(d,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(b.a,{path:"/dialogs",render:Ge(Me)}),a.a.createElement(b.a,{path:"/profile/:userId?",render:Ge(Be)}),a.a.createElement(b.a,{path:"/users",render:function(){return a.a.createElement(ie,null)}}),a.a.createElement(b.a,{path:"/login",render:function(){return a.a.createElement(_e,null)}}))):a.a.createElement(q.a,null)}}]),t}(r.Component),He=Object($.d)(O.a,Object(v.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(de());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(We),Ve=function(e){return a.a.createElement(h.a,null,a.a.createElement(v.a,{store:Re},a.a.createElement(He,null)))};c.a.render(a.a.createElement(Ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},60:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(131),c=n.n(o);t.a=function(e){return a.a.createElement("div",{style:{backgroundColor:"white"}},a.a.createElement("img",{src:c.a}))}},68:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3SIki",paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi"}},83:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},88:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},91:function(e,t,n){"use strict";n.d(t,"a",function(){return p}),n.d(t,"d",function(){return g}),n.d(t,"c",function(){return d}),n.d(t,"e",function(){return b});var r=n(7),a=n.n(r),o=n(13),c=n(37),i=n(11),u=n(12);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},p=function(e){return{type:"ADD-POST",newPostText:e}},m=function(e){return{type:"SET_STATUS",status:e}},g=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(m(r.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return l({},e,{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return l({},e,{status:t.status});case"SET_USER_PROFILE":return l({},e,{profile:t.profile});case"DELETE_POST":return l({},e,{posts:e.posts.filter(function(e){return e.id!=t.postId})});default:return e}}}},[[161,1,2]]]);
//# sourceMappingURL=main.17f94e1f.chunk.js.map