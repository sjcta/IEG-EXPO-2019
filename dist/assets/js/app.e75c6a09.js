(function(t){function a(a){for(var r,o,i=a[0],c=a[1],l=a[2],p=0,u=[];p<i.length;p++)o=i[p],s[o]&&u.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);v&&v(a);while(u.length)u.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],r=!0,i=1;i<e.length;i++){var c=e[i];0!==s[c]&&(r=!1)}r&&(n.splice(a--,1),t=o(o.s=e[0]))}return t}var r={},s={app:0},n=[];function o(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=r,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)o.d(e,r,function(a){return t[a]}.bind(null,r));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var v=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var r=e("1356"),s=e.n(r);s.a},"087d":function(t,a,e){t.exports=e.p+"assets/img/laser_p4.3cf033df.jpg"},1356:function(t,a,e){},"171b":function(t,a,e){"use strict";var r=e("e81c"),s=e.n(r);s.a},1829:function(t,a,e){},"1f5f":function(t,a,e){var r={"./UX-D110S.jpg":"9351","./UX-D160S.jpg":"b6cf","./UX-D860S.jpg":"20ef","./g_p1.jpg":"660b","./g_p2.jpg":"a245","./g_p3.jpg":"da59"};function s(t){var a=n(t);return e(a)}function n(t){var a=r[t];if(!(a+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a}s.keys=function(){return Object.keys(r)},s.resolve=n,t.exports=s,s.id="1f5f"},"20ef":function(t,a,e){t.exports=e.p+"assets/img/UX-D860S.5759d824.jpg"},2332:function(t,a,e){},2772:function(t,a,e){t.exports=e.p+"assets/img/ux-d160s_p1.cb5ed1a6.png"},"2e43":function(t,a,e){t.exports=e.p+"assets/img/laser_p5.c9f33adb.jpg"},"30dc":function(t,a,e){},"3eab":function(t,a,e){"use strict";var r=e("cdbf"),s=e.n(r);s.a},"3efd":function(t,a,e){"use strict";var r=e("1829"),s=e.n(r);s.a},4612:function(t,a,e){t.exports=e.p+"assets/img/laser_p2.f128574f.jpg"},"48ea":function(t,a,e){"use strict";var r=e("30dc"),s=e.n(r);s.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var r=e("2b0e"),s=e("bb71");e("da64");r["a"].use(s["a"],{iconfont:"md"});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("transition",{attrs:{name:"door-anim"}},[t.doorState?e("v-content",{attrs:{id:"pop"}},[e("v-container",{attrs:{fluid:"","fill-height":""}},[e("div",{attrs:{id:"logo"}}),e("v-layout",{staticClass:"text-xs-center white--text",attrs:{"align-center":"","justify-center":"",id:"text"}},[e("h1",{staticClass:"text-xs-center"},[t._v("第100届"),e("br"),t._v("全国糖酒商品交易会")]),e("div",{staticClass:"headline"},[e("h1",{staticClass:"text-xs-center"},[t._v("日立产机系统（中国）有限公司")]),e("span",[t._v("出展信息")])]),e("div",{staticClass:"date"},[e("h3",[t._v("2019年3月21日～23日")]),e("span",[t._v("中国，成都")])]),e("div",[e("v-btn",{attrs:{depressed:"",small:"",color:"primary"},on:{click:t.openDoor}},[t._v("Enter v0.3.2")])],1)])],1)],1):t._e()],1),e("transition",{attrs:{name:"router-anim"}},[e("router-view")],1)],1)},o=[],i={name:"App",components:{},data:function(){return{}},created:function(){},watch:{$route:function(t,a){this.$vuetify.goTo(0)}},mounted:function(){console.log(this.$store.state.showDoor)},computed:{doorState:function(){return this.$store.state.showDoor}},methods:{openDoor:function(){this.$store.state.showDoor=!1}}},c=i,l=(e("034f"),e("2877")),v=e("6544"),p=e.n(v),u=e("7496"),d=e("8336"),f=e("a523"),_=e("549c"),m=e("a722"),h=Object(l["a"])(c,n,o,!1,null,null,null);h.options.__file="App.vue";var b=h.exports;p()(h,{VApp:u["a"],VBtn:d["a"],VContainer:f["a"],VContent:_["a"],VLayout:m["a"]});var g=e("8c4f"),x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-toolbar",{attrs:{app:"",dark:"",color:"pink"}},[e("v-layout",{attrs:{"align-center":"","justify-space-between":"",row:""}},[e("v-toolbar-title",{staticClass:" text-uppercase text-xs-center"},[e("span",{staticClass:"text-xs-center"},[t._v("日立产机系统")])])],1)],1),e("v-content",{attrs:{id:"indexPage"}},[e("v-container",{attrs:{fluid:""}},[e("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[e("v-card",{attrs:{color:"grey lighten-3",flat:""}},[e("v-card-title",[e("div",[e("h2",[t._v("日立产机系统出展"),e("br"),t._v("第100届全国糖酒商品交易会")]),e("div",{staticClass:"disc"},[e("p",[t._v("日立产机系统，秉承日立制作所创业者的“和”、“诚”、“开拓者精神”，100多年来，不断地钻研、磨练，制造工厂所需要的基础设备。")]),e("p",[t._v("2019年3月，日立产机出展成都糖酒会，带来了喷码机和空压机，为广大中国客户提供技术先进、性能可靠的设备，为客户的事业进步，为中国的社会发展做出贡献。\n      日立产机有志于成为中国客户“最值得信任的供应商”。")])])])])],1)],1),e("v-list",[e("v-subheader",[t._v("信息一览")]),e("div",{attrs:{id:"buttonList"}},[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-btn",{attrs:{block:"",dark:"",large:"",to:"/product",color:t.$store.state.mainColor+" lighten-1"}},[e("v-icon",{attrs:{left:""}},[t._v("star")]),e("span",{staticClass:"text-capitalize"},[t._v("出展产品")])],1),e("v-btn",{attrs:{block:"",dark:"",large:"",to:"/info",color:t.$store.state.mainColor+" lighten-1"}},[e("v-icon",{attrs:{left:""}},[t._v("map")]),e("span",{staticClass:"text-capitalize"},[t._v("展位信息")])],1),e("v-btn",{attrs:{block:"",outline:"",large:"",to:"/qa",color:t.$store.state.mainColor}},[e("v-icon",{attrs:{left:""}},[t._v("contact_support")]),e("span",{staticClass:"text-capitalize"},[t._v("问卷调查")])],1)],1)],1)],1),e("v-list-tile",{attrs:{avatar:"",ripple:"",to:"/product",color:t.$store.state.mainColor}},[e("v-list-tile-avatar",[e("v-icon",{attrs:{left:"",color:t.$store.state.mainColor}},[t._v("star")])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v("出展产品")])],1),e("v-list-tile-action",[e("v-icon",{attrs:{color:t.$store.state.mainColor}},[t._v("arrow_forward_ios")])],1)],1),e("v-list-tile",{attrs:{avatar:"",ripple:"",to:"/info",color:t.$store.state.mainColor}},[e("v-list-tile-avatar",[e("v-icon",{attrs:{left:"",color:t.$store.state.mainColor}},[t._v("map")])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v("展位信息")])],1),e("v-list-tile-action",[e("v-icon",{attrs:{color:t.$store.state.mainColor}},[t._v("arrow_forward_ios")])],1)],1),e("v-list-tile",{attrs:{avatar:"",ripple:""}},[e("v-list-tile-avatar",[e("v-icon",[t._v("contact_support")])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v("问卷调查")])],1),e("v-list-tile-action",[e("v-icon",{attrs:{left:""}},[t._v("arrow_forward_ios")])],1)],1)],1)],1)],1),e("v-footer",{staticClass:"pa-3",attrs:{light:""}},[e("v-flex",{attrs:{"text-xs-center":""}},[t._v("© Hitachi, Ltd. 1994, 2019. All rights reserved.")])],1)],1)},C=[],V={name:"indexPage",mounted:function(){},methods:{}},w=V,y=(e("3efd"),e("b0af")),k=e("12b2"),$=e("0e8f"),j=e("553a"),T=e("132d"),L=e("8860"),D=e("ba95"),P=e("40fe"),B=e("c954"),S=e("5d23"),U=e("e0c7"),O=e("71d9"),X=e("2a7f"),E=Object(l["a"])(w,x,C,!1,null,"6038bf5f",null);E.options.__file="index.vue";var I=E.exports;p()(E,{VBtn:d["a"],VCard:y["a"],VCardTitle:k["a"],VContainer:f["a"],VContent:_["a"],VFlex:$["a"],VFooter:j["a"],VIcon:T["a"],VLayout:m["a"],VList:L["a"],VListTile:D["a"],VListTileAction:P["a"],VListTileAvatar:B["a"],VListTileContent:S["a"],VListTileTitle:S["b"],VSubheader:U["a"],VToolbar:O["a"],VToolbarTitle:X["a"]});var z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("headerBar",[t._v("出展产品")]),e("v-content",{attrs:{id:"productList"}},[e("v-container",{attrs:{fluid:""}},[e("v-list",[e("v-subheader",[t._v("出展产品一览")]),e("v-list-tile",{attrs:{ripple:""},on:{click:function(a){t.showProduct("/product/printer/")}}},[e("v-list-tile-content",[e("h2",[t._v("喷码机")])]),e("v-list-tile-action",[e("v-icon",{attrs:{color:t.$store.state.mainColor}},[t._v("arrow_forward_ios")])],1)],1)],1),e("v-list",[e("v-list-tile",{attrs:{ripple:""},on:{click:function(a){t.showProduct("/product/detecter/")}}},[e("v-list-tile-content",[e("h2",[t._v("检测机")])]),e("v-list-tile-action",[e("v-icon",{attrs:{color:t.$store.state.mainColor}},[t._v("arrow_forward_ios")])],1)],1)],1),e("v-list",[e("v-list-tile",{attrs:{ripple:""},on:{click:function(a){t.showProduct("/product/laser/")}}},[e("v-list-tile-content",[e("h2",[t._v("激光机")])]),e("v-list-tile-action",[e("v-icon",{attrs:{color:t.$store.state.mainColor}},[t._v("arrow_forward_ios")])],1)],1)],1),e("v-list",[e("v-list-tile",{attrs:{ripple:""},on:{click:function(a){t.showProduct("/product/ac/")}}},[e("v-list-tile-content",[e("h2",[t._v("空压机")])]),e("v-list-tile-action",[e("v-icon",{attrs:{color:t.$store.state.mainColor}},[t._v("arrow_forward_ios")])],1)],1)],1)],1)],1)],1)},A=[],F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-toolbar",{attrs:{app:"",dark:"",tabs:"",fixed:"",color:t.$store.state.mainColor}},[e("v-btn",{attrs:{right:"",flat:""},on:{click:t.back}},[e("v-icon",[t._v("arrow_back_ios")])],1),e("v-toolbar-title",{staticClass:"title text-uppercase"},[e("span",{staticClass:"text-xs-center"},[t._t("default")],2)]),e("v-btn",{attrs:{left:"",flat:""},on:{click:t.home}},[e("v-icon",[t._v("home")])],1),t._t("extension")],2)},M=[],G={data:function(){return{}},methods:{back:function(){this.$router.back(-1)},home:function(){this.$router.push("/")}}},q=G,J=(e("a030"),Object(l["a"])(q,F,M,!1,null,"74530ff7",null));J.options.__file="headerBar.vue";var N=J.exports;p()(J,{VBtn:d["a"],VIcon:T["a"],VToolbar:O["a"],VToolbarTitle:X["a"]});var H={components:{headerBar:N},data:function(){return{}},computed:{},methods:{showProduct:function(t){this.$router.push(t)}}},K=H,Q=(e("f4e5"),Object(l["a"])(K,z,A,!1,null,"2ad137b0",null));Q.options.__file="product.vue";var R=Q.exports;p()(Q,{VContainer:f["a"],VContent:_["a"],VIcon:T["a"],VList:L["a"],VListTile:D["a"],VListTileAction:P["a"],VListTileContent:S["a"],VSubheader:U["a"]});var W=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("headerBar",[t._v("喷码机")]),r("v-content",{attrs:{id:"productList"}},[r("v-container",{staticClass:"group",attrs:{fluid:""}},[r("v-list",{attrs:{dense:""}},[r("v-list-tile",{attrs:{ripple:""},on:{click:function(a){t.showProduct("ux/0")}}},[r("v-list-tile-content",[r("h2",[t._v("UX系列")])]),r("v-list-tile-action",[r("v-icon",{attrs:{color:t.$store.state.mainColor}},[t._v("arrow_forward_ios")])],1)],1)],1),r("v-layout",{attrs:{row:""}},t._l(t.productUX,function(a,s){return r("v-flex",{key:s,attrs:{xs4:""}},[r("v-card",{attrs:{flat:""},on:{click:function(a){t.showProduct("ux/"+s)}}},[r("v-img",{attrs:{src:e("1f5f")("./"+a+".jpg"),"aspect-ratio":"1"}},[r("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey"}})],1)],1),r("v-card-text",{staticClass:"text-xs-center"},[r("v-btn",{attrs:{block:"",flat:""}},[t._v(t._s(a)),r("v-icon",{attrs:{color:t.$store.state.mainColor,small:"",dark:""}},[t._v("arrow_forward_ios")])],1)],1)],1)],1)}))],1),r("v-container",{attrs:{fluid:""}},[r("v-list",{attrs:{dense:""}},[r("v-list-tile",{attrs:{ripple:""},on:{click:function(a){t.showProduct("g")}}},[r("v-list-tile-content",[r("h2",[t._v("G系列")])]),r("v-list-tile-action",[r("v-icon",{attrs:{color:t.$store.state.mainColor}},[t._v("arrow_forward_ios")])],1)],1)],1),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-card",{attrs:{flat:""},on:{click:function(a){t.showProduct("g")}}},[r("v-img",{attrs:{src:e("b297")}}),r("v-card-text",{staticClass:"text-xs-center"},[r("v-btn",{attrs:{block:"",flat:""}},[t._v("G系列"),r("v-icon",{attrs:{color:t.$store.state.mainColor,small:"",dark:""}},[t._v("arrow_forward_ios")])],1)],1)],1)],1)],1)],1)],1)],1)},Y=[],Z={components:{headerBar:N},data:function(){return{productUX:["UX-D160S","UX-D860S","UX-D110S"]}},computed:{},methods:{showProduct:function(t){this.$router.push("/product/printer/"+t+"/")}}},tt=Z,at=(e("f139"),e("99d9")),et=e("adda"),rt=e("490a"),st=Object(l["a"])(tt,W,Y,!1,null,"6579f1f4",null);st.options.__file="product_printer.vue";var nt=st.exports;p()(st,{VBtn:d["a"],VCard:y["a"],VCardText:at["a"],VContainer:f["a"],VContent:_["a"],VFlex:$["a"],VIcon:T["a"],VImg:et["a"],VLayout:m["a"],VList:L["a"],VListTile:D["a"],VListTileAction:P["a"],VListTileContent:S["a"],VProgressCircular:rt["a"]});var ot=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("headerBar",[t._v("UX系列")]),r("v-content",{attrs:{id:"productList"}},[r("v-container",{attrs:{fluid:""}},[r("v-tabs",{attrs:{grow:"","fixed-tabs":"","slider-color":"pink"},model:{value:t.tabs,callback:function(a){t.tabs=a},expression:"tabs"}},t._l(t.products,function(a,e){return r("v-tab",{key:e,attrs:{href:"#tab-"+e,"active-class":"active"}},[t._v(t._s(a))])})),r("v-tabs-items",{model:{value:t.tabs,callback:function(a){t.tabs=a},expression:"tabs"}},[r("v-tab-item",{key:"0",attrs:{value:"tab-0"}},[r("v-card",{attrs:{flat:""}},[r("v-card-title",{attrs:{"primary-title":""}},[r("h2",{staticClass:"display-2"},[t._v(t._s(t.products[0]))])]),r("v-card-text",[r("v-img",{attrs:{src:e("72fd")}}),r("h3",{staticClass:"headline mb-4"},[t._v("日立独创的“溶剂低消耗系统”，显著降低客户的运行成本")]),r("p",[t._v("\n              墨盒式设计，墨水及溶剂更换更方便，避免脏手和墨水遗漏。"),r("br"),t._v("\n              日立先进技术制造的“溶剂低消耗系统”通过对墨水回路和设备温度的控制，有效减少耗材挥发，在控制耗材用量方面处于业内顶尖地位。\n              ")]),r("v-img",{staticClass:"mb-3",attrs:{src:e("2772"),contain:""}}),r("p",{staticClass:"caption mb-3"},[t._v("* 和日立现有的设备相比，在相同条件下，UX-B和UX-D的溶剂挥发量减少30% （墨水：1067K，温度：20℃）")]),r("v-container",[r("v-img",{staticClass:"mb-3",attrs:{src:e("ef6f"),contain:""}})],1),r("v-container",[r("v-btn",{attrs:{depressed:"",block:"",dark:"",large:"",href:"http://www.hitachi.com.cn",color:t.$store.state.mainColor}},[r("span",{staticClass:"text-capitalize"},[t._v("了解更多")])])],1)],1)],1)],1),r("v-tab-item",{key:"1",attrs:{value:"tab-1"}},[r("v-card",{attrs:{flat:""}},[r("v-card-title",{attrs:{"primary-title":""}},[r("h2",{staticClass:"display-2"},[t._v(t._s(t.products[1]))])]),r("v-card-text",[r("v-img",{attrs:{src:e("7805")}}),r("h3",{staticClass:"headline mb-4"},[t._v("高速，多行喷印（最多8行）、最大64点阵，90°旋转喷印（竖向喷印），满足不同喷印需求")]),r("ul",{staticClass:"mb-4 list-style-sq"},[r("li",[t._v("可同时喷印行数达到8行。日立独有的喷印调节方式，即使多行印刷也可以确保清晰美观")]),r("li",[t._v("单个喷头32点阵，最大可达64点阵印刷。适用于钢板建材上的大文字印刷，并可对文字标识等进行自由编辑。")]),r("li",[t._v("喷印方向可进行90°旋转调节，最多可喷印12文字。")]),r("li",[t._v("搭载双喷嘴，将印刷速度提高一倍*1。")])]),r("p",{staticClass:"caption mb-3"},[t._v("*1 和我司单喷嘴机型（UX-D660J）对比")]),r("v-container",[r("v-img",{staticClass:"mb-3",attrs:{src:e("f5cd"),contain:""}})],1),r("v-container",[r("v-btn",{attrs:{depressed:"",block:"",dark:"",large:"",href:"http://www.hitachi.com.cn",color:t.$store.state.mainColor}},[r("span",{staticClass:"text-capitalize"},[t._v("了解更多")])])],1)],1)],1)],1),r("v-tab-item",{key:"2",attrs:{value:"tab-2"}},[r("v-card",{attrs:{flat:""}},[r("v-card-title",{attrs:{"primary-title":""}},[r("h2",{staticClass:"display-2"},[t._v(t._s(t.products[2]))])]),r("v-card-text",[r("v-img",{attrs:{src:e("f4f0")}}),r("v-container",[r("v-btn",{attrs:{depressed:"",block:"",dark:"",large:"",href:"http://www.hitachi.com.cn",color:t.$store.state.mainColor}},[r("span",{staticClass:"text-capitalize"},[t._v("了解更多")])])],1)],1)],1)],1)],1)],1)],1)],1)},it=[],ct={components:{headerBar:N},data:function(){return{tabs:"tab-"+this.$route.params.id,products:["UX-D160S","UX-D860S","UX-D110S"]}},computed:{},methods:{}},lt=ct,vt=(e("3eab"),e("71a3")),pt=e("c671"),ut=e("fe57"),dt=e("aac8"),ft=Object(l["a"])(lt,ot,it,!1,null,null,null);ft.options.__file="product_printer_ux.vue";var _t=ft.exports;p()(ft,{VBtn:d["a"],VCard:y["a"],VCardText:at["a"],VCardTitle:k["a"],VContainer:f["a"],VContent:_["a"],VImg:et["a"],VTab:vt["a"],VTabItem:pt["a"],VTabs:ut["a"],VTabsItems:dt["a"]});var mt=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("headerBar",[t._v("G系列")]),r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-card",{attrs:{flat:""}},[r("v-card-title",{attrs:{"primary-title":""}},[r("h2",{staticClass:"display-2"},[t._v("G系列")])]),r("v-card-text",[r("v-container",[r("v-img",{staticClass:"mb-3",attrs:{src:e("b297"),contain:""}})],1),r("h3",{staticClass:"headline mb-4"},[t._v("采用墨盒式墨水和溶剂，操作方便，节能环保。")]),r("p",[t._v("墨盒式设计，墨水及溶剂更换更方便，避免脏手和墨水溢漏")]),r("v-layout",{staticClass:"mb-4",attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"imgList",attrs:{xs12:""}},[r("v-img",{attrs:{src:e("660b")}}),t._v("\n                  墨水和溶剂的墨盒式设计，更换方便不脏手。新增纠错功能（报警），更换墨水和溶剂时须确认号码。防止人为错误，提高工作效率。\n                ")],1),r("v-flex",{staticClass:"imgList",attrs:{xs12:""}},[r("v-img",{attrs:{src:e("a245")}}),t._v("\n                  “用户友好”模式，触摸屏上墨水、溶剂直接用图标显示，并指示余量及合适的更换时间。\n                ")],1),r("v-flex",{staticClass:"imgList",attrs:{xs12:""}},[r("v-img",{attrs:{src:e("da59")}}),t._v("\n                  墨盒式墨水和溶剂可使用至最后一滴，不浪费。\n                ")],1)],1),r("v-container",[r("v-btn",{attrs:{depressed:"",block:"",dark:"",large:"",href:"http://www.hitachi.com.cn",color:t.$store.state.mainColor}},[r("span",{staticClass:"text-capitalize"},[t._v("了解更多")])])],1)],1)],1)],1)],1)],1)},ht=[],bt={components:{headerBar:N},data:function(){return{}},computed:{},methods:{}},gt=bt,xt=(e("da6f"),Object(l["a"])(gt,mt,ht,!1,null,null,null));xt.options.__file="product_printer_g.vue";var Ct=xt.exports;p()(xt,{VBtn:d["a"],VCard:y["a"],VCardText:at["a"],VCardTitle:k["a"],VContainer:f["a"],VContent:_["a"],VFlex:$["a"],VImg:et["a"],VLayout:m["a"]});var Vt=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("headerBar",[t._v("检测机")]),r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-card",{attrs:{flat:""}},[r("v-card-title",{attrs:{"primary-title":""}},[r("h2",{staticClass:"display-2"},[t._v("检测机"),r("br"),r("span",[t._v("MC-20S")])])]),r("v-card-text",[r("v-container",[r("v-img",{staticClass:"mb-3",attrs:{src:e("70f3"),contain:""}})],1),r("ul",{staticClass:"mb-4 list-style-sq"},[r("li",[t._v("采用特有的校对检测方式，与标识设备相匹配")]),r("li",[t._v("采用彩色摄像头，提高印字检测的灵活性")]),r("li",[t._v("采用专门的白色LED闪光灯照明，控制电源内置（*仅限配备照明灯的机型）")]),r("li",[t._v("显示调节焦距、亮度的设定最佳值")]),r("li",[t._v("参数设定采用2进制，显示彩色滤镜设定最佳值")])]),r("v-container",[r("v-img",{staticClass:"mb-3",attrs:{src:e("818a"),contain:""}})],1),r("v-container",[r("v-btn",{attrs:{depressed:"",block:"",dark:"",large:"",href:"http://www.hitachi.com.cn",color:t.$store.state.mainColor}},[r("span",{staticClass:"text-capitalize"},[t._v("了解更多")])])],1)],1)],1)],1)],1)],1)},wt=[],yt={components:{headerBar:N},data:function(){return{}},computed:{},methods:{}},kt=yt,$t=(e("171b"),Object(l["a"])(kt,Vt,wt,!1,null,null,null));$t.options.__file="product_detecter.vue";var jt=$t.exports;p()($t,{VBtn:d["a"],VCard:y["a"],VCardText:at["a"],VCardTitle:k["a"],VContainer:f["a"],VContent:_["a"],VImg:et["a"]});var Tt=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("headerBar",[t._v("激光机")]),r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-card",{attrs:{flat:""}},[r("v-card-title",{attrs:{"primary-title":""}},[r("h2",{staticClass:"display-2"},[t._v("激光机 "),r("span",[t._v("LM-C300系列")])])]),r("v-card-text",[r("v-img",{attrs:{src:e("9744")}}),r("ul",{staticClass:"mb-4 mt-4 list-style-sq"},[r("li",[t._v("配备高速、高清的数码振镜。（仅限高端机型）")]),r("li",[t._v("编码器使用时，可自动检测印字对象是静止状态或移动状态。")]),r("li",[t._v("设计安全符合IEC60825标准。"),r("br"),t._v("装有激光发射信号灯，激光发射状态一目了然。")]),r("li",[t._v("适宜使用环境的保护构造：IP54。")]),r("li",[t._v("丰富的日历功能。")]),r("li",[t._v("配备合成编码。")]),r("li",[t._v("配备自动快门。")]),r("li",[t._v("配备紧急停机开关。")]),r("li",[t._v("配备使用于玻璃和透明物的点阵。")])]),r("v-layout",{staticClass:"mb-4",attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"imgList",attrs:{xs12:""}},[r("v-img",{attrs:{src:e("4612")}}),t._v("\n                  点阵\n                ")],1),r("v-flex",{staticClass:"imgList",attrs:{xs6:""}},[r("v-img",{attrs:{src:e("e67a")}}),t._v("\n                  在化妆品外盒上印字\n                ")],1),r("v-flex",{staticClass:"imgList",attrs:{xs6:""}},[r("v-img",{attrs:{src:e("087d")}}),t._v("\n                  在瓶子、玻璃表面印字\n                ")],1),r("v-flex",{staticClass:"imgList",attrs:{xs6:""}},[r("v-img",{attrs:{src:e("2e43")}}),t._v("\n                  在光滑的电子主板上印字\n                ")],1),r("v-flex",{staticClass:"imgList",attrs:{xs6:""}},[r("v-img",{attrs:{src:e("a973")}}),t._v("\n                  在CD·DVD等光盘上印字\n                ")],1)],1)],1)],1),r("v-container",[r("v-btn",{attrs:{depressed:"",block:"",dark:"",large:"",href:"http://www.hitachi.com.cn",color:t.$store.state.mainColor}},[r("span",{staticClass:"text-capitalize"},[t._v("了解更多")])])],1)],1)],1)],1)},Lt=[],Dt={components:{headerBar:N},data:function(){return{}},computed:{},methods:{}},Pt=Dt,Bt=(e("9559"),Object(l["a"])(Pt,Tt,Lt,!1,null,null,null));Bt.options.__file="product_laser.vue";var St=Bt.exports;p()(Bt,{VBtn:d["a"],VCard:y["a"],VCardText:at["a"],VCardTitle:k["a"],VContainer:f["a"],VContent:_["a"],VFlex:$["a"],VImg:et["a"],VLayout:m["a"]});var Ut=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("headerBar",[t._v("空压机")]),e("v-content",[e("v-container",{attrs:{fluid:""}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",{attrs:{"primary-title":""}},[e("h2",{staticClass:"display-2"},[t._v("空压机")])]),e("v-card-text",[t._v("\nworking...\n              ")])],1),e("v-container",[e("v-btn",{attrs:{depressed:"",block:"",dark:"",large:"",href:"http://www.hitachi.com.cn",color:t.$store.state.mainColor}},[e("span",{staticClass:"text-capitalize"},[t._v("了解更多")])])],1)],1)],1)],1)},Ot=[],Xt={components:{headerBar:N},data:function(){return{}},computed:{},methods:{}},Et=Xt,It=(e("48ea"),Object(l["a"])(Et,Ut,Ot,!1,null,null,null));It.options.__file="product_ac.vue";var zt=It.exports;p()(It,{VBtn:d["a"],VCard:y["a"],VCardText:at["a"],VCardTitle:k["a"],VContainer:f["a"],VContent:_["a"]});var At=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("headerBar",[t._v("展位信息")]),r("v-content",{attrs:{id:"info"}},[r("v-container",{attrs:{fluid:""}},[r("h2",[t._v("第100届全国糖酒商品交易会展馆"),r("br"),t._v("日立产机系统展台示意图")]),r("v-layout",{staticClass:"mb-4 mt-4",attrs:{row:"",wrap:""}},[r("h3",[t._v("2号馆")]),r("v-flex",{staticClass:"mb-4 mt-4",attrs:{xs12:""}},[r("v-img",{attrs:{src:e("f7f0")}})],1),r("h3",[t._v("日立产机系统展台位置：D-049T")]),r("v-flex",{staticClass:"mb-4 mt-4",attrs:{xs6:"","offset-xs3":""}},[r("v-img",{attrs:{src:e("b2d9")}})],1)],1)],1)],1)],1)},Ft=[],Mt={components:{headerBar:N},data:function(){return{}},computed:{},methods:{}},Gt=Mt,qt=(e("ddd5"),Object(l["a"])(Gt,At,Ft,!1,null,"42435e95",null));qt.options.__file="info.vue";var Jt=qt.exports;p()(qt,{VContainer:f["a"],VContent:_["a"],VFlex:$["a"],VImg:et["a"],VLayout:m["a"]}),r["a"].use(g["a"]);var Nt=new g["a"]({mode:"history",base:"/",routes:[{path:"/",name:"indexPage",component:I},{path:"/product",name:"productPage",component:R},{path:"/product/printer",name:"productPrinterPage",component:nt},{path:"/product/printer/ux/:id",name:"productPrinterUXPage",component:_t},{path:"/product/printer/g/",name:"productDPrinterGPage",component:Ct},{path:"/product/detecter",name:"productDetecterPage",component:jt},{path:"/product/laser",name:"productLaserPage",component:St},{path:"/product/ac",name:"productACPage",component:zt},{path:"/info",name:"infoPage",component:Jt}]}),Ht=e("2f62");r["a"].use(Ht["a"]);var Kt=new Ht["a"].Store({state:{states:"turn-left",showDoor:!0,mainColor:"pink"},getters:{},mutations:{setTransition:function(t,a){t.states=a}},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:Nt,store:Kt,render:function(t){return t(b)}}).$mount("#app")},"660b":function(t,a,e){t.exports=e.p+"assets/img/g_p1.ae3f61cb.jpg"},"70f3":function(t,a,e){t.exports=e.p+"assets/img/detecter_p1.6b0f5698.jpg"},"72fd":function(t,a,e){t.exports=e.p+"assets/img/UX-D160S.8ad9b921.png"},7805:function(t,a,e){t.exports=e.p+"assets/img/UX-D860S.97de5420.png"},"818a":function(t,a,e){t.exports=e.p+"assets/img/detecter_p2.77c3c612.png"},"8eaf":function(t,a,e){},9351:function(t,a,e){t.exports=e.p+"assets/img/UX-D110S.16718ccf.jpg"},9559:function(t,a,e){"use strict";var r=e("ed44"),s=e.n(r);s.a},9744:function(t,a,e){t.exports=e.p+"assets/img/laser_p1.1907582d.jpg"},a030:function(t,a,e){"use strict";var r=e("2332"),s=e.n(r);s.a},a245:function(t,a,e){t.exports=e.p+"assets/img/g_p2.95144d7f.jpg"},a973:function(t,a,e){t.exports=e.p+"assets/img/laser_p6.e8ad257c.jpg"},b297:function(t,a,e){t.exports=e.p+"assets/img/g.553a9c1b.png"},b2d9:function(t,a,e){t.exports=e.p+"assets/img/map2.5813f011.png"},b6cf:function(t,a,e){t.exports=e.p+"assets/img/UX-D160S.95de7bf7.jpg"},bf14:function(t,a,e){},c68b:function(t,a,e){},c708:function(t,a,e){},cdbf:function(t,a,e){},da59:function(t,a,e){t.exports=e.p+"assets/img/g_p3.d8028e20.jpg"},da6f:function(t,a,e){"use strict";var r=e("8eaf"),s=e.n(r);s.a},ddd5:function(t,a,e){"use strict";var r=e("c68b"),s=e.n(r);s.a},e67a:function(t,a,e){t.exports=e.p+"assets/img/laser_p3.3ff8570d.jpg"},e81c:function(t,a,e){},ed44:function(t,a,e){},ef6f:function(t,a,e){t.exports=e.p+"assets/img/ux-d160s_p2.3899d48d.png"},f139:function(t,a,e){"use strict";var r=e("c708"),s=e.n(r);s.a},f4e5:function(t,a,e){"use strict";var r=e("bf14"),s=e.n(r);s.a},f4f0:function(t,a,e){t.exports=e.p+"assets/img/UX-D110S.2a7a1144.png"},f5cd:function(t,a,e){t.exports=e.p+"assets/img/ux-d860s_p1.80c80ce2.png"},f7f0:function(t,a,e){t.exports=e.p+"assets/img/map1.63547c3e.jpg"}});
//# sourceMappingURL=app.e75c6a09.js.map