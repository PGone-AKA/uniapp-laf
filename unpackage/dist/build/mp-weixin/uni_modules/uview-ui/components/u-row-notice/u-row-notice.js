(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-row-notice/u-row-notice"],{"179f":function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(i("a34a")),o=a(i("9ff8"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,i,u,o,a){try{var r=t[o](a),c=r.value}catch(s){return void e(s)}r.done?n(c):Promise.resolve(c).then(i,u)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(i,u){var o=t.apply(n,e);function a(t){r(o,i,u,a,c,"next",t)}function c(t){r(o,i,u,a,c,"throw",t)}a(void 0)}))}}var s={name:"u-row-notice",mixins:[n.$u.mpMixin,n.$u.mixin,o.default],data:function(){return{animationDuration:"0",animationPlayState:"paused",nvueInit:!0,show:!0}},watch:{text:{immediate:!0,handler:function(t,e){this.vue(),n.$u.test.string(t)||n.$u.error("noticebar组件direction为row时，要求text参数为字符串形式")}},fontSize:function(){t,this.vue()},speed:function(){this.vue()}},computed:{textStyle:function(){var t={};return t.color=this.color,t.animationDuration=this.animationDuration,t.animationPlayState=this.animationPlayState,t.fontSize=n.$u.addUnit(this.fontSize),t}},mounted:function(){this.init()},methods:{init:function(){this.vue(),n.$u.test.string(this.text)||n.$u.error("noticebar组件direction为row时，要求text参数为字符串形式")},vue:function(){var t=this;return c(u.default.mark((function e(){var i;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return 0,i=0,e.next=3,n.$u.sleep();case 3:return e.next=5,t.$uGetRect(".u-notice__content__text");case 5:return i=e.sent.width,e.next=8,t.$uGetRect(".u-notice__content");case 8:e.sent.width,t.animationDuration="".concat(i/n.$u.getPx(t.speed),"s"),t.animationPlayState="paused",setTimeout((function(){t.animationPlayState="running"}),10);case 12:case"end":return e.stop()}}),e)})))()},nvue:function(){return c(u.default.mark((function t(){return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},loopAnimation:function(t,n){},getNvueRect:function(t){},clickHandler:function(t){this.$emit("click")},close:function(){this.$emit("close")}}};e.default=s}).call(this,i("543d")["default"])},"1dab":function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={uIcon:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(e.bind(null,"1ad2"))}},u=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__get_style([t.textStyle])),i=["link","closable"].includes(t.mode);t.$mp.data=Object.assign({},{$root:{s0:e,g0:i}})},o=[]},"22d3":function(t,n,e){"use strict";var i=e("4979"),u=e.n(i);u.a},"2dbf":function(t,n,e){"use strict";e.r(n);var i=e("179f"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=u.a},4979:function(t,n,e){},c803:function(t,n,e){"use strict";e.r(n);var i=e("1dab"),u=e("2dbf");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("22d3");var a,r=e("f0c5"),c=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,"7c219a02",null,!1,i["a"],a);n["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-row-notice/u-row-notice-create-component',
    {
        'uni_modules/uview-ui/components/u-row-notice/u-row-notice-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c803"))
        })
    },
    [['uni_modules/uview-ui/components/u-row-notice/u-row-notice-create-component']]
]);
