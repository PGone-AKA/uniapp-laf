(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"0d41":function(t,e,n){},"48d2":function(t,e,n){"use strict";n.r(e);var o=n("d873"),i=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=i.a},"4c9a":function(t,e,n){"use strict";n.r(e);var o=n("e3ba"),i=n("48d2");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("5d49");var a,s=n("f0c5"),l=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=l.exports},"5d49":function(t,e,n){"use strict";var o=n("0d41"),i=n.n(o);i.a},ae51:function(t,e,n){"use strict";(function(t){n("c83d");o(n("66fd"));var e=o(n("4c9a"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},d873:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("9e94")),i=u(n("6cac"));function u(t){return t&&t.__esModule?t:{default:t}}var a=function(){n.e("components/thorui/tui-button/tui-button").then(function(){return resolve(n("d17a"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/thorui/tui-modal/tui-modal").then(function(){return resolve(n("f69d"))}.bind(null,n)).catch(n.oe)},l={components:{tuiButton:a,tuiModal:s},data:function(){return{load:{show:!0},baseUrl:i.default.getHost(),author:{uid:null,avatar:null,nickName:null},comments:[],info:null,input:{uid:null,cid:1e3,commented:null,msg:"",commentIcon:"",isUpload:!1,uploadPath:"",focus:!1,placeholder:"请发送一条友善的评论",mainComment:null,acceptPeople:null},delete:{id:""},option:"",tid:"",category:[],shadowStyle:{backgroundImage:"none",paddingTop:"0",marginTop:"20rpx"},timeout:0,isPopup:!1,renling:{show:!1,reShow:!1,button:[{text:"取消",type:"red",plain:!0},{text:"确定",type:"red"}]},loginPane:{show:!1},emptyComment:{text:" "}}},onLoad:function(t){this.reload(t)},onShareAppMessage:function(t){return"button"===t.from&&console.log(t.target),{title:"页面详细",path:"../detail/detail?tid="+this.tid}},onPullDownRefresh:function(){var e=this;t.showNavigationBarLoading(),t.stopPullDownRefresh({success:function(n){e.reload(e.option),t.hideNavigationBarLoading()}})},methods:{reload:function(e){var n=this;this.option=e,this.tid=e.tid,this.category=[],i.default.getRequest("/wx/api/category/treeData",null,(function(t){t.data.forEach((function(t){n.category.push(t.name)}))})),null==this.author.uid&&t.getStorage({key:"userInfo",success:function(t){n.author.uid=t.data.stuId,n.author.avatar=t.data.stuImage,n.author.nickName=t.data.stuNick}}),i.default.getRequest("/wx/api/info/list",{relId:this.tid},(function(t){var e=t.data;n.info=e,n.load.show=!1})),this.getCommentList(this.tid)},clear:function(){this.input.msg=""},uploadPicture:function(){var e=this;t.chooseImage({count:1,sizeType:["original"],sourceType:["album"],success:function(t){e.input.uploadPath=t.tempFilePaths[0],e.input.isUpload=!0}})},cancelUpload:function(){this.input.isUpload=!1},previewImage:function(e){t.previewImage({urls:[e]})},changeGood:function(t){t.isGood?t.goodNum--:t.goodNum++,t.isGood=!t.isGood},comment:function(){var e=this;if(this.isLogin())if(t.requestSubscribeMessage({tmplIds:["fTUA7CP8Wh1hbv-3x4QrrK_BRl5y8dnHMBnbTqdN9dI","lhQ8vRjYydEDLDni5sWTUndbzrbtfvycNyP-SHMWMmM"],success:function(t){console.log("SubscribeMessageSuccess"),console.log(t)},fail:function(t){console.log("SubscribeMessageError"),console.log(t)}}),this.input.msg.length<1&&!this.input.isUpload)this.$refs.uToast.show({type:"default",message:"评论不能为空!",iconUrl:"https://cdn.uviewui.com/uview/demo/toast/error.png"});else{var n=this,u=new Date,a=((0,o.default)(u),null);this.input.isUpload?t.uploadFile({url:n.baseUrl+"/wx/api/info/upload",filePath:n.input.uploadPath,name:"file",success:function(t){a=t.data,console.log(n.input),i.default.postRequest("/wx/api/info/auth/comment/add",{comRelId:n.tid,comContent:n.input.msg,parentId:n.input.acceptPeople,comImage:a},(function(t){0==t.data.code?(i.default.getRequest("/wx/api/info/test?relId="+e.tid,null,(function(t){n.comments=t.data})),e.$refs.uToast.show({type:"success",message:"发布评论成功",duration:700,iconUrl:"https://cdn.uviewui.com/uview/demo/toast/success.png"}),e.input.msg="",e.input.isUpload=!1,e.input.focus=!1,e.input.mainComment=null,e.input.acceptPeople=null,e.input.cid++,e.input.placeholder="请发送一条友善的评论"):e.paneAlert()}))}}):i.default.postRequest("/wx/api/info/auth/comment/add",{comRelId:n.tid,comContent:n.input.msg,parentId:n.input.acceptPeople,comImage:a},(function(t){0==t.data.code?(i.default.getRequest("/wx/api/info/test?relId="+e.tid,null,(function(t){n.comments=t.data})),e.$refs.uToast.show({type:"success",message:"发布评论成功",duration:700,iconUrl:"https://cdn.uviewui.com/uview/demo/toast/success.png"}),e.input.msg="",e.input.isUpload=!1,e.input.focus=!1,e.input.mainComment=null,e.input.acceptPeople=null,e.input.cid++,e.input.placeholder="请发送一条友善的评论"):e.paneAlert()}))}else this.loginPane.show=!0},replyInfo:function(t,e){this.input.focus=!0,this.input.placeholder="回复:"+t.comm_user.nickName,this.input.mainComment=t,this.input.acceptPeople=e},blur:function(){this.input.msg="",this.input.isUpload=!1,this.input.focus=!1,this.input.mainComment=null,this.input.acceptPeople=null,this.input.placeholder="请发送一条友善的评论"},judgeComment:function(t,e){var n;return this.comments.forEach((function(e){e.cid==t.pid&&(n=t.name)})),void 0===n&&e.forEach((function(e){e.cid==t.pid&&(n=e.name)})),n},touchend:function(t,e){clearTimeout(this.timeout),t.comment.comStar="#f3f3f3;",this.timeout<700&&this.replyInfo(t,e)},touchstart:function(t,e){var n=this;n.timeout=0,t.comm_user.uid===n.author.uid&&(clearTimeout(n.timeout),t.comment.comStar="#cbcbcb",n.timeout=setTimeout((function(){n.longClick(e),n.timeout=701}),700))},touchmove:function(){clearTimeout(this.timeout),this.timeout=701},longClick:function(t){this.isPopup=!0,this.delete.id=t},deleteComment:function(){var t=this;i.default.getRequest("/wx/api/info/auth/comment/delete?id="+this.delete.id,null,(function(e){0==e.data.code?i.default.getRequest("/wx/api/info/test?relId="+t.tid,null,(function(e){t.comments=e.data,t.isPopup=!1})):(t.isPopup=!1,paneAlert())}))},accept:function(){this.isLogin()?this.renling.show=!0:this.loginPane.show=!0},acceptClick:function(t){var e=this;0==t.index?this.renling.show=!1:i.default.getRequest("/wx/api/info/auth/claim?relId="+this.tid,null,(function(t){0==t.data.code?(e.renling.show=!1,e.$refs.uToast.show({type:"success",message:"认领成功",duration:700,iconUrl:"https://cdn.uviewui.com/uview/demo/toast/success.png"}),e.$store.state.fresh=!0,e.reload(e.option)):(e.renling.show=!1,e.paneAlert())}))},getCommentList:function(t){var e=this;i.default.getRequest("/wx/api/info/test",{relId:t},(function(t){var n=t.data;e.comments=n}))},doComment:function(){this.input.focus=!0},isLogin:function(){return null!==this.author.uid},login:function(){t.switchTab({url:"../user/user"})},cancelAccept:function(t){var e=this;0==t.index?this.renling.reShow=!1:(this.renling.reShow=!1,i.default.getRequest("/wx/api/info/auth/unClaim?relId="+this.tid,null,(function(t){0==t.data.code?(e.reload(e.option),e.$store.state.fresh=!0):e.paneAlert()})))},paneAlert:function(){this.$refs.uToast.show({type:"fail",message:"异常错误",duration:700})}}};e.default=l}).call(this,n("543d")["default"])},e3ba:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var o={uLoadingPage:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-loading-page/u-loading-page")]).then(n.bind(null,"b8e0"))},uAvatar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(n.bind(null,"8950"))},uTag:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-tag/u-tag")]).then(n.bind(null,"d543"))},uReadMore:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-read-more/u-read-more")]).then(n.bind(null,"459a"))},uLine:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-line/u-line")]).then(n.bind(null,"472f"))},uEmpty:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-empty/u-empty")]).then(n.bind(null,"2046"))},uToast:function(){return n.e("uni_modules/uview-ui/components/u-toast/u-toast").then(n.bind(null,"c41c"))},uPopup:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(n.bind(null,"d857"))},uTabbar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-tabbar/u-tabbar")]).then(n.bind(null,"d249"))},tuiModal:function(){return n.e("node-modules/thorui-uni/lib/thorui/tui-modal/tui-modal").then(n.bind(null,"e2df"))},uSearch:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-search/u-search")]).then(n.bind(null,"bfce"))},tuiButton:function(){return n.e("node-modules/thorui-uni/lib/thorui/tui-button/tui-button").then(n.bind(null,"9b82"))}},i=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){e.stopPropagation(),t.isPopup=!1},t.e1=function(e){t.renling.reShow=!0},t.e2=function(e){t.loginPane.show=!1})},u=[]}},[["ae51","common/runtime","common/vendor"]]]);