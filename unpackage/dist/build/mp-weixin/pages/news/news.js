(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/news"],{"0f7e":function(e,n,t){"use strict";t.r(n);var u=t("5e99"),o=t("4dcd");for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);var r,c=t("f0c5"),i=Object(c["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=i.exports},3614:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=o(t("faa5"));function o(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{content:null,loading:!0}},onLoad:function(){var e=this;u.default.getRequest("/wx/api/article/week",null,(function(n){e.loading=!1,console.log(n.data.object.content),e.content=n.data.object.content}))},methods:{}};n.default=a},"4dcd":function(e,n,t){"use strict";t.r(n);var u=t("3614"),o=t.n(u);for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);n["default"]=o.a},"5e99":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return u}));var u={uParse:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-parse/u-parse")]).then(t.bind(null,"3a62"))},uLoadingPage:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-loading-page/u-loading-page")]).then(t.bind(null,"afae"))}},o=function(){var e=this,n=e.$createElement;e._self._c},a=[]},e117:function(e,n,t){"use strict";(function(e){t("ef4b");u(t("66fd"));var n=u(t("0f7e"));function u(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])}},[["e117","common/runtime","common/vendor"]]]);