(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1524:function(e,t,a){},"1c36":function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var n={uSearch:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uview-ui/components/u-search/u-search")]).then(a.bind(null,"bfce"))},renDropdownFilter:function(){return a.e("components/ren-dropdown-filter/ren-dropdown-filter").then(a.bind(null,"a61e"))},uAvatar:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(a.bind(null,"8950"))},uTag:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uview-ui/components/u-tag/u-tag")]).then(a.bind(null,"d543"))},uLoadmore:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uview-ui/components/u-loadmore/u-loadmore")]).then(a.bind(null,"6c79"))}},l=function(){var e=this,t=e.$createElement,a=(e._self._c,e.__map(e.releaseList,(function(t,a){var n=e.__get_orig(t),l=e._f("ellipsis")(t.relTitle),i=e._f("ellipsis")(t.relDesc);return{$orig:n,f0:l,f1:i}})));e.$mp.data=Object.assign({},{$root:{l0:a}})},i=[]},3999:function(e,t,a){"use strict";a.r(t);var n=a("4a5b"),l=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=l.a},"4a5b":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("6cac"));function l(e){return e&&e.__esModule?e:{default:e}}var i={name:"square",filters:{ellipsis:function(e){return e?e.length>15?e.slice(0,15)+"...":e:""}},data:function(){return{uStatus:"loading ",msg:"",filterData:[[{text:"所有发布",value:"0"},{text:"失物招领",value:"1"},{text:"寻物启事",value:"2"}],[{text:"待解决",value:"1"},{text:"已解决",value:"2"},{text:"全部状态",value:"0"}],[{text:"所有种类",value:"0"},{text:"其他",value:"1"},{text:"身份证",value:"2"},{text:"学生证",value:"3"},{text:"衣物",value:"4"}]],defaultIndex:[0,0,0],selectInfos:[],type:"全部",species:"全部类型",status:"待解决",baseUrl:n.default.getHost(),userInfo:{},notice:"在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准",searchValue:"",isLastPage:!1,pageNum:1,pageSize:5,isEnd:!1,releaseList:[],lafRelease:{relTitle:null,relDesc:null,relCateId:null,relCampus:null,relStatus:null,relFlag:null,createTime:null},category:[]}},onLoad:function(){console.log("onLoad"),this.onLoadClone3389()},onReady:function(){console.log("onready")},onShow:function(){e.showTabBar(),this.$store.state.fresh&&this.onLoadClone3389(),this.$store.state.fresh=!1,console.log("onshow")},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){var t=this;e.showNavigationBarLoading(),e.stopPullDownRefresh({success:function(a){t.onLoadClone3389({}),e.hideNavigationBarLoading()}})},onReachBottom:function(){var e=this;if(this.isLastPage)return this.uStatus="nomore",void(this.isEnd=!0);setTimeout((function(){e.uStatus="loading",e.loadRelease()}),300)},methods:{test:function(){},share:function(){e.share({provider:"weixin",scene:"WXSceneSession",type:1,summary:"我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(e){console.log("fail:"+JSON.stringify(e))}})},onSelected:function(e){this.initSearchData(),console.log(e),0==e[0][0].value?this.lafRelease.relStatus=null:this.lafRelease.relStatus=e[0][0].value,0==e[1][0].value?this.lafRelease.relFlag=null:this.lafRelease.relFlag=e[1][0].value,0==e[2][0].value?this.lafRelease.relCateId=null:this.lafRelease.relCateId=e[2][0].value,this.loadRelease()},navigateDetail:function(t){e.navigateTo({url:"/pages/detail/detail?tid="+t})},previewImage:function(t){e.previewImage({urls:[t]})},onLoadClone3389:function(){var e=this;this.initSearchData(),n.default.getRequest("/wx/api/announce/list",null,(function(t){e.notice=t.data.annContent})),n.default.getRequest("/wx/api/category/treeData",null,(function(t){var a=[];t.data.forEach((function(e){a.push({text:e.name,value:e.id})})),e.category=[],e.filterData[2].forEach((function(t){e.category.push(t.text)}))})),this.loadRelease(),console.log("!!!!")},initSearchData:function(){this.isEnd=!1,this.isLastPage=!1,this.pageNum=1,this.pageSize=5,this.releaseList=[]},loadRelease:function(){var e=this;0==this.isLastPage&&n.default.postRequest("/wx/api/release/list?pageNum="+this.pageNum+"&pageSize="+this.pageSize,this.lafRelease,(function(t){if(500==t.data.code)console.log("服务器开小差");else{var a=e.releaseList.concat(t.data.list);e.releaseList=a,e.isLastPage=t.data.isLastPage,e.pageNum=t.data.nextPage}}),(function(e){console.log("网络拥挤")}))},onSearch:function(e){var t=e.replace(/\ +/g,"");""==t?(this.msg="",this.initSearchData(),this.lafRelease.relTitle=null,this.loadRelease()):(console.log(e),this.initSearchData(),this.lafRelease.relTitle=e,this.loadRelease())},showinfo:function(t){var a=t.currentTarget.dataset.info.relId;console.log(a),e.navigateTo({url:"/pages/list_detail/list_detail?id="+a,events:{acceptDataFromOpenedPage:function(e){console.log(e)},someEvent:function(e){console.log(e)}},success:function(e){e.eventChannel.emit("acceptDataFromOpenerPage",{data:"test"})}})},dateCauseList:function(e){this.initSearchData(),this.lafRelease.createTime="选择日期"===e?null:e+" 00:00:00",this.loadRelease()}}};t.default=i}).call(this,a("543d")["default"])},"7e5d":function(e,t,a){"use strict";a.r(t);var n=a("1c36"),l=a("3999");for(var i in l)"default"!==i&&function(e){a.d(t,e,(function(){return l[e]}))}(i);a("8a97");var o,s=a("f0c5"),u=Object(s["a"])(l["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=u.exports},"8a97":function(e,t,a){"use strict";var n=a("1524"),l=a.n(n);l.a},f981:function(e,t,a){"use strict";(function(e){a("c83d");n(a("66fd"));var t=n(a("7e5d"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=a,e(t.default)}).call(this,a("543d")["createPage"])}},[["f981","common/runtime","common/vendor"]]]);