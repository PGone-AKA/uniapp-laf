(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/form/form"],{3781:function(e,t,n){"use strict";n.r(t);var o=n("ac64"),u=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=u.a},"472c":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var o={uUpload:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-upload/u-upload")]).then(n.bind(null,"f887"))},"u-Form":function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u--form/u--form")]).then(n.bind(null,"8032"))},uFormItem:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-form-item/u-form-item")]).then(n.bind(null,"7ca2"))},"u-Input":function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u--input/u--input")]).then(n.bind(null,"5be4"))},uIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null,"1ad2"))},uActionSheet:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-action-sheet/u-action-sheet")]).then(n.bind(null,"d878"))},"u-Textarea":function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u--textarea/u--textarea")]).then(n.bind(null,"66d0"))},tuiLoading:function(){return n.e("node-modules/thorui-uni/lib/thorui/tui-loading/tui-loading").then(n.bind(null,"0db2"))},uToast:function(){return n.e("uni_modules/uview-ui/components/u-toast/u-toast").then(n.bind(null,"c41c"))},uOverlay:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-overlay/u-overlay")]).then(n.bind(null,"f24c"))}},u=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.showSort=!0},e.e1=function(t){e.showSort=!1},e.e2=function(t){e.showCampus=!0},e.e3=function(t){e.showCampus=!1})},r=[]},ac64:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("a34a")),u=r(n("6cac"));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n,o,u,r,s){try{var i=e[r](s),a=i.value}catch(l){return void n(l)}i.done?t(a):Promise.resolve(a).then(o,u)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(o,u){var r=e.apply(t,n);function s(e){l(r,o,u,s,i,"next",e)}function i(e){l(r,o,u,s,i,"throw",e)}s(void 0)}))}}var m=function(){n.e("components/thorui/tui-loading/tui-loading").then(function(){return resolve(n("889a"))}.bind(null,n)).catch(n.oe)},d={components:{tuiLoading:m},data:function(){return{apiHost:u.default.getHost(),err:!0,mask:!1,isShow:!0,isRequest:!1,rel_status:null,navbar:null,showCampus:!1,showSort:!1,model1:{userInfo:{name:null,campus:null,value:null,contact:null,title:null}},actions:[{name:"南昌校区"},{name:"红旗校区"},{name:"黄金校区"}],sortActions:[{name:"学生证"},{name:"身份证"},{name:"其他"}],submitBtnStyle:{width:"100%",margin:"auto",borderRadius:" 10rpx 10rpx"},rules:{"userInfo.sort":{type:"string",trigger:["blur","change"]},"userInfo.campus":{type:"string",max:1,required:!0,message:"请选择校区",trigger:["blur","change"]},"userInfo.title":{type:"string",required:!0,message:"请填写失物",trigger:["blur","change"]},"userInfo.contact":{type:"string",required:!0,message:"请填写联系方式",trigger:["blur","change"]}},radio:"",switchVal:!1,value3:null,photoUrl:null,fileList1:[],name:"",type:"",campusText:null,id:"",status:"",thumb:"",check:!1,isActive:!1}},onLoad:function(e){this.onLoadClone3389(e)},methods:{onLoadClone3389:function(t){var n=this,o=t.type;1==o?(e.setNavigationBarTitle({title:"失物招领"}),this.navbar="发布一条失物招领",this.rel_status=o):2==o?(e.setNavigationBarTitle({title:"寻物启事"}),this.navbar="发布一条寻物启事",this.rel_status=o):e.showToast({title:"非法访问!",icon:"error",duration:1e3,success:function(){e.switchTab({url:"../index/index"})}}),e.getStorage({key:"userInfo",success:function(e){var t=null,o=e.data.stuQq,u=e.data.stuEmail;""==o.replace(/\ +/g,"")&&(o=null),""==u.replace(/\ +/g,"")&&(u=null),null!=o&&null==u&&(t="QQ:"+o),null==o&&null!=u&&(t="TEL:"+u),null!=u&&null!=o&&(t="QQ:"+o+"/TEL:"+u),n.model1.userInfo.contact=t}});u.default.getRequest("/wx/api/category/treeData",null,(function(e){var t=[];e.data.forEach((function(e){t.push({name:e.name,value:e.id})})),n.sortActions=t}))},campusSelect:function(e){this.model1.userInfo.campus=e.name},sortSelect:function(e){this.model1.userInfo.sort=e.name,this.model1.userInfo.value=e.value,console.log(e.name),console.log(e.value)},deletePic:function(e){this["fileList".concat(e.name)].splice(e.index,1)},afterRead:function(e){var t=this;return c(o.default.mark((function n(){var u,r,s,a,l;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:u=[].concat(e.file),r=t["fileList".concat(e.name)].length,u.map((function(n){t["fileList".concat(e.name)].push(i(i({},n),{},{status:"uploading",message:"上传中"}))})),s=0;case 4:if(!(s<u.length)){n.next=14;break}return n.next=7,t.uploadFilePromise(u[s].url);case 7:a=n.sent,l=t["fileList".concat(e.name)][r],t["fileList".concat(e.name)].splice(r,1,Object.assign(l,{status:"success",message:"",url:a,thumb:t.apiHost+t.photoUrl})),r++;case 11:s++,n.next=4;break;case 14:case"end":return n.stop()}}),n)})))()},uploadFilePromise:function(t){var n=this;return new Promise((function(o,u){var r=n;e.uploadFile({url:n.apiHost+"/wx/api/release/upload",filePath:t,name:"file",formData:{user:"test"},success:function(e){console.log(e);var t=JSON.parse(e.data);if(console.log(t.code),0==t.code){console.log(1),o();var u=t.object;if(console.log(u),r.status=u.statusCode,r.name=u.name,r.type=u.type,r.number=u.number,r.photoUrl=u.photoUrl,console.log(r.type),"sfz"==r.type){var s=r.number.replace(/^(.{4})(?:\d+)(.{4})$/,"$1******$2");r.model1.userInfo.title="捡到"+n.name+"的身份证",r.value3="身份证号为"+s,r.model1.userInfo.sort="身份证",r.model1.userInfo.value=2,console.log("捡到身份证")}else if("xsz"==r.type){s=r.number.replace(/^(.{2})(?:\d+)(.{2})$/,"$1******$2");r.model1.userInfo.title="捡到"+n.name+"的学生证",r.value3="学生证号为"+s,r.model1.userInfo.sort="学生证",r.model1.userInfo.value=3}null!=r.model1.userInfo.campus&&""!=r.model1.userInfo.campus||(r.model1.userInfo.campus="南昌校区")}else 406==t.code?r.$refs.uToast.show({type:"error",message:"图片包含敏感信息!",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/error.png"}):r.$refs.uToast.show({type:"error",message:"上传失败!",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/error.png"})},fail:function(e){r.$refs.uToast.show({type:"error",message:"上传失败!",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/error.png"})}})}))},postForm:function(){var t=this,n=this;null!=n.model1.userInfo.title&&""!=n.model1.userInfo.title.replace(/\ +/g,"")||(n.model1.userInfo.title=null),null!=n.value3&&""!=n.value3.replace(/\ +/g,"")||(n.value3=null),this.isActive=!1,this.$refs.form1.validate().then((function(o){t.check?e.requestSubscribeMessage({tmplIds:["WjSjw0WyRL-bTJ8KLZ0mL6bJLevOi3Qfw727iWPjdvg","ePAwjtm9WKRLyGdrce0IiQtO9jE6l7mnY1KhT2Nvm6U","yN2LMy5FBS8ha9Fq-akQTag3SWgx9uvgTG5J3ABVGYw"],success:function(e){console.log("SubscribeMessageSuccess"),console.log(e)},fail:function(e){console.log("SubscribeMessageError"),console.log(e)},complete:function(){0==n.isRequest&&(n.isRequest=!0,n.mask=!0,u.default.postRequest("/wx/api/release/auth/add/check",{relCampus:n.model1.userInfo.campus,relCateId:n.model1.userInfo.value,relContact:n.model1.userInfo.contact,relDesc:n.value3,relImage:n.photoUrl,relStatus:n.rel_status,relTitle:n.model1.userInfo.title,createPlace:n.model1.userInfo.clue},(function(t){0==t.data.code?(n.isRequest=!1,n.mask=!1,e.switchTab({url:"../index/index",success:function(){var e=getCurrentPages().pop();void 0!=e&&null!=e&&e.onLoad()}})):406==t.data.code?(n.isRequest=!1,n.mask=!1,n.$refs.uToast.show({type:"error",message:"内容包含敏感信息",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/error.png"})):(n.isRequest=!1,n.mask=!1,n.$refs.uToast.show({type:"error",message:"发布失败!",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/error.png"}))}),(function(e){n.isRequest=!1,n.mask=!1,n.$refs.uToast.show({type:"error",message:"服务器异常!",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/error.png"})})))}}):t.isActive=!0}))},openWord:function(){e.navigateTo({url:"../word/word"})},changeRadio:function(){this.check?this.check=!1:(this.check=!0,this.isActive=!1)}}};t.default=d}).call(this,n("543d")["default"])},bcdc:function(e,t,n){"use strict";var o=n("e314"),u=n.n(o);u.a},e314:function(e,t,n){},ecc4:function(e,t,n){"use strict";n.r(t);var o=n("472c"),u=n("3781");for(var r in u)"default"!==r&&function(e){n.d(t,e,(function(){return u[e]}))}(r);n("bcdc");var s,i=n("f0c5"),a=Object(i["a"])(u["default"],o["b"],o["c"],!1,null,"63080aec",null,!1,o["a"],s);t["default"]=a.exports},fa0d:function(e,t,n){"use strict";(function(e){n("c83d");o(n("66fd"));var t=o(n("ecc4"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])}},[["fa0d","common/runtime","common/vendor"]]]);