(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1524:function(e,t,n){},3999:function(e,t,n){"use strict";n.r(t);var a=n("4a5b"),o=n.n(a);for(var l in a)"default"!==l&&function(e){n.d(t,e,(function(){return a[e]}))}(l);t["default"]=o.a},"4a5b":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n("6cac")),o=l(n("f8b3"));function l(e){return e&&e.__esModule?e:{default:e}}var i={name:"square",filters:{ellipsis:function(e){return e?e.length>15?e.slice(0,15)+"...":e:""}},data:function(){return{rollNews:"点击查看本周失物招领汇总！",uStatus:"loading ",msg:"",filterData:[[{text:"所有发布",value:"0"},{text:"失物招领",value:"1"},{text:"寻物启事",value:"2"}],[{text:"待解决",value:"1"},{text:"已解决",value:"2"},{text:"全部状态",value:"0"}],[{text:"所有种类",value:"0"}]],defaultIndex:[0,0,0],selectInfos:[],type:"全部",species:"全部类型",status:"待解决",baseUrl:a.default.getHost(),userInfo:{},notice:"在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准",searchValue:"",isLastPage:!1,pageNum:1,pageSize:5,isEnd:!1,releaseList:[],lafRelease:{relTitle:null,relDesc:null,relCateId:null,relCampus:null,relStatus:null,relFlag:null,createTime:null},category:[],floor:!0}},onLoad:function(){console.log("onLoad"),this.onLoadClone3389()},onReady:function(){console.log("onready")},onShow:function(){e.showTabBar(),this.$store.state.fresh&&this.onLoadClone3389(),this.$store.state.fresh=!1,console.log("onshow")},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){var t=this;e.showNavigationBarLoading(),e.stopPullDownRefresh({success:function(n){t.onLoadClone3389(),e.hideNavigationBarLoading()}})},onReachBottom:function(){this.onReachBottom1()},methods:{share:function(){e.share({provider:"weixin",scene:"WXSceneSession",type:1,summary:"我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(e){console.log("fail:"+JSON.stringify(e))}})},onSelected:function(e){this.initSearchData(),console.log(e),0==e[0][0].value?this.lafRelease.relStatus=null:this.lafRelease.relStatus=e[0][0].value,0==e[1][0].value?this.lafRelease.relFlag=null:this.lafRelease.relFlag=e[1][0].value,0==e[2][0].value?this.lafRelease.relCateId=null:this.lafRelease.relCateId=e[2][0].value,this.loadRelease()},navigateDetail:function(t){e.navigateTo({url:"/pages/detail/detail?tid="+t})},previewImage:function(t){e.previewImage({urls:[t]})},onLoadClone3389:function(){var e=this;this.initSearchData(),a.default.getRequest("/wx/api/announce/list",null,(function(t){e.notice=t.data.annContent})),a.default.getRequest("/wx/api/category/treeData",null,(function(t){var n,a=[];t.data.forEach((function(e){a.push({text:e.name,value:e.id})})),e.category=[],(n=e.filterData[2]).push.apply(n,a),console.log(e.filterData[2]),e.filterData[2].forEach((function(t){e.category.push(t.text)}))})),this.loadRelease(),console.log("!!!!")},initSearchData:function(){this.isEnd=!1,this.isLastPage=!1,this.pageNum=1,this.pageSize=5,this.releaseList=[]},loadRelease:function(){var e=this;0==this.isLastPage&&a.default.postRequest("/wx/api/release/list?pageNum="+this.pageNum+"&pageSize="+this.pageSize,this.lafRelease,(function(t){if(500==t.data.code)console.log("服务器开小差");else{var n=e.releaseList.concat(t.data.list);e.releaseList=n,e.isLastPage=t.data.isLastPage,e.isLastPage&&e.onReachBottom1(),e.pageNum=t.data.nextPage}}),(function(e){console.log("网络拥挤")}))},onSearch:function(e){var t=e.replace(/\ +/g,"");""==t?(this.msg="",this.initSearchData(),this.lafRelease.relTitle=null,this.loadRelease()):(console.log(e),this.initSearchData(),this.lafRelease.relTitle=e,this.loadRelease())},showinfo:function(t){var n=t.currentTarget.dataset.info.relId;console.log(n),e.navigateTo({url:"/pages/list_detail/list_detail?id="+n,events:{acceptDataFromOpenedPage:function(e){console.log(e)},someEvent:function(e){console.log(e)}},success:function(e){e.eventChannel.emit("acceptDataFromOpenerPage",{data:"test"})}})},dateCauseList:function(e){this.initSearchData(),this.lafRelease.createTime="选择日期"===e?null:e+" 00:00:00",this.loadRelease()},onReachBottom1:function(){var e=this;if(this.isLastPage)return this.uStatus="nomore",void(this.isEnd=!0);setTimeout((function(){e.uStatus="loading",e.loadRelease()}),300)},onPageScroll:function(e){e.scrollTop>300?this.floor=!1:this.floor=!0},goTop:function(e){wx.pageScrollTo?wx.pageScrollTo({scrollTop:0}):wx.showModal({title:"提示",content:"当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"})},clearSearch:function(){this.initSearchData(),this.lafRelease.relTitle=null,this.loadRelease()},stringIsNull:function(e){return(0,o.default)(e)}}};t.default=i}).call(this,n("543d")["default"])},"7e5d":function(e,t,n){"use strict";n.r(t);var a=n("f15d"),o=n("3999");for(var l in o)"default"!==l&&function(e){n.d(t,e,(function(){return o[e]}))}(l);n("8a97");var i,s=n("f0c5"),u=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);t["default"]=u.exports},"8a97":function(e,t,n){"use strict";var a=n("1524"),o=n.n(a);o.a},f15d:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return a}));var a={uNoticeBar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-notice-bar/u-notice-bar")]).then(n.bind(null,"b1d3"))},uSearch:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-search/u-search")]).then(n.bind(null,"bfce"))},renDropdownFilter:function(){return n.e("components/ren-dropdown-filter/ren-dropdown-filter").then(n.bind(null,"a61e"))},uAvatar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(n.bind(null,"8950"))},uTag:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-tag/u-tag")]).then(n.bind(null,"d543"))},uLoadmore:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-loadmore/u-loadmore")]).then(n.bind(null,"6c79"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.releaseList,(function(t,n){var a=e.__get_orig(t),o=e._f("ellipsis")(t.relTitle),l=e.stringIsNull(t.relDesc),i=l?null:e._f("ellipsis")(t.relDesc);return{$orig:a,f0:o,m0:l,f1:i}})));e.$mp.data=Object.assign({},{$root:{l0:n}})},l=[]},f981:function(e,t,n){"use strict";(function(e){n("c83d");a(n("66fd"));var t=a(n("7e5d"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])}},[["f981","common/runtime","common/vendor"]]]);