(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u--form/u--form"],{"28db":function(e,t,n){"use strict";var u;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u}));var r=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"69fd":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n("eeee"));function r(e){return e&&e.__esModule?e:{default:e}}var i=function(){Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-form/u-form")]).then(function(){return resolve(n("5316"))}.bind(null,n)).catch(n.oe)},o={name:"u-form",mixins:[e.$u.mpMixin,u.default,e.$u.mixin],components:{uvForm:i},created:function(){this.children=[]},methods:{setRules:function(e){this.$refs.uForm.setRules(e)},validate:function(){return this.setMpData(),this.$refs.uForm.validate()},validateField:function(e,t){return this.setMpData(),this.$refs.uForm.validateField(e,t)},resetFields:function(){return this.setMpData(),this.$refs.uForm.resetFields()},clearValidate:function(e){return this.setMpData(),this.$refs.uForm.clearValidate(e)},setMpData:function(){this.$refs.uForm.children=this.children}}};t.default=o}).call(this,n("543d")["default"])},8032:function(e,t,n){"use strict";n.r(t);var u=n("28db"),r=n("d91d");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);var o,a=n("f0c5"),s=Object(a["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);t["default"]=s.exports},d91d:function(e,t,n){"use strict";n.r(t);var u=n("69fd"),r=n.n(u);for(var i in u)"default"!==i&&function(e){n.d(t,e,(function(){return u[e]}))}(i);t["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u--form/u--form-create-component',
    {
        'uni_modules/uview-ui/components/u--form/u--form-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8032"))
        })
    },
    [['uni_modules/uview-ui/components/u--form/u--form-create-component']]
]);
