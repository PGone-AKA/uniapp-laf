(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-tag/u-tag"],{"2ecc":function(t,n,e){"use strict";e.r(n);var i=e("c897"),o=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=o.a},"394d":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={uTransition:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-transition/u-transition")]).then(e.bind(null,"a6ca"))},uIcon:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(e.bind(null,"1ad2"))}},o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__get_style([{marginRight:t.closable?"10px":0,marginTop:t.closable?"10px":0},t.style])),i=t.icon?t.$u.test.image(t.icon):null,o=t.icon&&i?t.__get_style([t.imgStyle]):null,r=t.__get_style([t.textColor]);t.$mp.data=Object.assign({},{$root:{s0:e,g0:i,s1:o,s2:r}})},r=[]},c720:function(t,n,e){},c897:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("78f7"));function o(t){return t&&t.__esModule?t:{default:t}}var r={name:"u-tag",mixins:[t.$u.mpMixin,t.$u.mixin,i.default],data:function(){return{}},computed:{style:function(){var t={};return this.bgColor&&(t.backgroundColor=this.bgColor),this.color&&(t.color=this.color),this.borderColor&&(t.borderColor=this.borderColor),t},textColor:function(){var t={};return this.color&&(t.color=this.color),t},imgStyle:function(){var t="large"===this.size?"17px":"medium"===this.size?"15px":"13px";return{width:t,height:t}},closeSize:function(){var t="large"===this.size?15:"medium"===this.size?13:12;return t},iconSize:function(){var t="large"===this.size?21:"medium"===this.size?19:16;return t},elIconColor:function(){return this.iconColor?this.iconColor:this.plain?this.type:"#ffffff"}},methods:{closeHandler:function(){this.$emit("close",this.name)},clickHandler:function(){this.$emit("click",this.name)}}};n.default=r}).call(this,e("543d")["default"])},d543:function(t,n,e){"use strict";e.r(n);var i=e("394d"),o=e("2ecc");for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("f7b8");var u,c=e("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"28856ff5",null,!1,i["a"],u);n["default"]=l.exports},f7b8:function(t,n,e){"use strict";var i=e("c720"),o=e.n(i);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-tag/u-tag-create-component',
    {
        'uni_modules/uview-ui/components/u-tag/u-tag-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d543"))
        })
    },
    [['uni_modules/uview-ui/components/u-tag/u-tag-create-component']]
]);
