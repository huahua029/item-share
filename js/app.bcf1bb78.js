(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0e8f0d00":"a342f035","chunk-20994495":"07c332de","chunk-2854f353":"140d0133","chunk-29363e42":"e346caa0","chunk-73d10ca6":"286b2d18","chunk-d7ec85c6":"a617db26","chunk-e0e8aae0":"80ca17d5","chunk-f26a1890":"e13d5c91"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0e8f0d00":1,"chunk-20994495":1,"chunk-2854f353":1,"chunk-29363e42":1,"chunk-73d10ca6":1,"chunk-d7ec85c6":1,"chunk-e0e8aae0":1,"chunk-f26a1890":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0e8f0d00":"e271a99c","chunk-20994495":"a924d4e5","chunk-2854f353":"36701c73","chunk-29363e42":"2b7977c4","chunk-73d10ca6":"7522d323","chunk-d7ec85c6":"be21797f","chunk-e0e8aae0":"ae550be9","chunk-f26a1890":"b29b0d96"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var s,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=i(e),s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,l.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="./",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2b7c":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("bc3a"),o=n.n(r),a=n("5c96");function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r,u){var i={url:e,method:t};"get"===t.toLowerCase()?i.params=n:i.data=n,o()(i).then(function(e){"ok"===e.data.status?r(e.data):(a["Message"].error(e.data.msg),u(e.data))}).catch(function(e){return a["Message"].error("网络异常")})})}o.a.defaults.baseURL=" http://blog-server.hunger-valley.com",o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",o.a.defaults.withCredentials=!0},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=n("bc3a"),a=n.n(o),u={},i=a.a.create(u);i.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),i.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)}),Plugin.install=function(e,t){e.axios=i,window.axios=i,Object.defineProperties(e.prototype,{axios:{get:function(){return i}},$axios:{get:function(){return i}}})},r["default"].use(Plugin);Plugin;var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{id:"Header"}}),n("div",{attrs:{id:"main"}},[n("router-view")],1),n("Footer",{attrs:{id:"Footer"}})],1)},s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isLogin?n("section",{staticClass:"login"},[n("h1",[n("router-link",{attrs:{to:"/"}},[e._v("\n        LET'S SHARE\n      ")])],1),n("router-link",{attrs:{to:"/create"}},[n("i",{staticClass:"el-icon-edit"})]),n("figure",[n("img",{attrs:{src:e.user.avatar}}),n("ul",{staticClass:"msg"},[n("li",[n("router-link",{attrs:{to:"/my"}},[e._v("\n            我的\n          ")])],1),n("li",{on:{click:e.onLogout}},[e._v("注销")])])])],1):n("section",{attrs:{id:"noLogin"}},[n("h1",[n("router-link",{attrs:{to:"/"}},[e._v("\n        LET'S SHARE\n      ")])],1),n("p",[e._v("精品博客汇聚")]),n("div",[n("el-button",{attrs:{plain:""}},[n("router-link",{attrs:{to:"/login"}},[e._v(" \n          立即登录\n        ")])],1),n("el-button",{attrs:{plain:""}},[n("router-link",{attrs:{to:"/register"}},[e._v("              \n          注册账号\n        ")])],1)],1)])])},f=[],d=n("be94"),h=n("2f62"),p={data:function(){return{}},computed:Object(d["a"])({},Object(h["c"])(["isLogin","user"])),created:function(){this.checkLogin()},methods:Object(d["a"])({},Object(h["b"])(["checkLogin","logout"]),{onLogout:function(){this.logout()}})},g=p,m=(n("9afa"),n("2877")),v=Object(m["a"])(g,l,f,!1,null,"88cca29c",null);v.options.__file="Header.vue";var b=v.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[n("p",[e._v("©huahua029 2018 wechat:1282038751")])])}],L=(n("c3ba"),{}),y=Object(m["a"])(L,k,w,!1,null,"4ffead3f",null);y.options.__file="Footer.vue";var O=y.exports,_={components:{Header:b,Footer:O}},j=_,E=(n("5c0b"),Object(m["a"])(j,c,s,!1,null,null,null));E.options.__file="App.vue";var T=E.exports,P=n("8c4f"),S=n("2b7c"),I={REGISTER:"/auth/register",LOGIN:"/auth/login",ISLOGIN:"/auth",LOGOUT:"/auth/logout"},x={login:function(e){var t=e.username,n=e.password;return Object(S["a"])(I.LOGIN,"POST",{username:t,password:n})},register:function(e){var t=e.username,n=e.password;return Object(S["a"])(I.REGISTER,"POST",{username:t,password:n})},logout:function(){return Object(S["a"])(I.LOGOUT)},isLogin:function(){return Object(S["a"])(I.ISLOGIN)}};r["default"].use(h["a"]);var A=new h["a"].Store({state:{isLogin:null,user:{}},mutations:{setLogin:function(e,t){e.isLogin=t.isLogin},setUser:function(e,t){e.user=t}},actions:{login:function(e,t){var n=e.commit,r=t.username,o=t.password;return x.login({username:r,password:o}).then(function(e){n("setLogin",{isLogin:!0}),n("setUser",e.data)})},register:function(e,t){var n=e.commit,r=t.username,o=t.password;return x.register({username:r,password:o}).then(function(e){n("setLogin",{isLogin:!0}),n("setUser",e.data)})},logout:function(e){var t=e.commit;return x.logout().then(function(e){t("setLogin",{isLogin:!1}),t("setUser",null)})},checkLogin:function(e){var t=e.commit;this.state.isLogin||x.isLogin().then(function(e){!0===e.isLogin&&(t("setLogin",{isLogin:!0}),t("setUser",e.data))})}}});r["default"].use(P["a"]);var C=new P["a"]({mode:"history",base:"./",routes:[{path:"/",component:function(){return n.e("chunk-73d10ca6").then(n.bind(null,"aee6"))}},{path:"/login",component:function(){return n.e("chunk-2854f353").then(n.bind(null,"22f1"))}},{path:"/register",component:function(){return n.e("chunk-f26a1890").then(n.bind(null,"4d55"))}},{path:"/create",component:function(){return n.e("chunk-20994495").then(n.bind(null,"7da7"))},meta:{requiresAuth:!0}},{path:"/edit/:blogId",component:function(){return n.e("chunk-e0e8aae0").then(n.bind(null,"aefc"))},meta:{requiresAuth:!0}},{path:"/user/:userId",component:function(){return n.e("chunk-d7ec85c6").then(n.bind(null,"209d"))}},{path:"/my",component:function(){return n.e("chunk-29363e42").then(n.bind(null,"1870"))},meta:{requiresAuth:!0}},{path:"/detail/:blogId",component:function(){return n.e("chunk-0e8f0d00").then(n.bind(null,"6059"))}}]});C.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.requiresAuth})?A.dispatch("checkLogin").then(function(t){A.state.isLogin?n():n({path:"/login",query:{redirect:e.fullPath}})}):n()});var N=C,q=n("5c96"),G=n.n(q),U=n("f0d9"),R=n.n(U);n("f843");r["default"].use(G.a,{locale:R.a}),r["default"].config.productionTip=!1,new r["default"]({router:N,store:A,render:function(e){return e(T)}}).$mount("#app"),r["default"].filter("formatDate",function(e){if(!e)return"";var t=new Date(e),n=(new Date).getTime()-t.getTime();return n<0?"":n/1e3<30?"刚刚":n/1e3<60?parseInt(n/1e3)+"秒前":n/6e4<60?parseInt(n/6e4)+"分前":n/36e5<24?parseInt(n/36e5)+"小时前":n/864e5<31?parseInt(n/864e5)+"天前":n/2592e6<12?parseInt(n/2592e6)+"月前":n/31536e6?parseInt(n/31536e6)+"年前":void 0})},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"761f":function(e,t,n){},"9afa":function(e,t,n){"use strict";var r=n("761f"),o=n.n(r);o.a},ac8c:function(e,t,n){},c3ba:function(e,t,n){"use strict";var r=n("ac8c"),o=n.n(r);o.a},f843:function(e,t,n){}});