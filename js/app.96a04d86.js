(function(t){function a(a){for(var e,n,c=a[0],o=a[1],u=a[2],f=0,d=[];f<c.length;f++)n=c[f],r[n]&&d.push(r[n][0]),r[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);l&&l(a);while(d.length)d.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,a=0;a<i.length;a++){for(var s=i[a],e=!0,c=1;c<s.length;c++){var o=s[c];0!==r[o]&&(e=!1)}e&&(i.splice(a--,1),t=n(n.s=s[0]))}return t}var e={},r={app:0},i=[];function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,a,s){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)n.d(s,e,function(a){return t[a]}.bind(null,e));return s},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var l=o;i.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"0162":function(t){t.exports=[{id:1,name:"Rihanna",slug:"rihanna",image:"rihanna.jpg",category:"Hip Hop, R&B"},{id:2,name:"Sukh E",slug:"sukh-e",image:"sukhe.jpg",category:"Pop singer"},{id:3,name:"Jass Manak",slug:"jass-manak",image:"jassmanak.jpg",category:"Pop singer"},{id:4,name:"Bohemia",slug:"bohemia",image:"bohemia.jpg",category:"Rapper"},{id:5,name:"Jazzy B",slug:"jazzy-b",image:"jazzyb.jpg",category:"Pop singer"},{id:6,name:"Guru Randhawa",slug:"guru-randhawa",image:"guru.jpg",category:"Hip Hop"}]},"034f":function(t,a,s){"use strict";var e=s("64a9"),r=s.n(e);r.a},"368b":function(t,a,s){"use strict";var e=s("ddda"),r=s.n(e);r.a},"56d7":function(t,a,s){"use strict";s.r(a);s("cadf"),s("551c"),s("f751"),s("097d");var e=s("2b0e"),r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"main"},[s("router-view")],1)])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"sidebar"},[s("div",{staticClass:"nav"},[s("div",{staticClass:"nav-title"},[t._v("Library")]),s("a",{staticClass:"nav-link active",attrs:{href:"#"}},[t._v("Artists")]),s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Albums")]),s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Songs")]),s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Playlists")])]),s("div",{staticClass:"nav"},[s("div",{staticClass:"nav-title"},[t._v("Discover")]),s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Store")]),s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Radio")]),s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("For You")]),s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Browse")])])])}],n={name:"app"},c=n,o=(s("034f"),s("2877")),u=Object(o["a"])(c,r,i,!1,null,null,null),l=u.exports,f=s("8c4f"),d=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h1",[t._v("Artists")]),s("h2",[t._v("Trending Now")]),s("div",{staticClass:"artists"},t._l(t.artists,function(a){return s("div",{key:a.id,staticClass:"artist",attrs:{"data-artistId":a.id},on:{click:t.artistSelected}},[s("img",{staticClass:"artist-image",attrs:{src:"/img/"+a.image}}),s("div",{staticClass:"artist-content"},[s("div",{staticClass:"artist-name"},[t._v(t._s(a.name))]),s("div",{staticClass:"artist-category"},[t._v(t._s(a.category))])])])}),0)])},g=[],v=(s("c5f6"),s("7514"),s("0162")),p={name:"artists",data:function(){return{artists:v}},methods:{artistSelected:function(t){var a=t.path.find(function(t){return t.classList.contains("artist")}),s=Number(a.dataset.artistid),e=a.querySelector(".artist-image").getBoundingClientRect();this.$router.push({name:"artist",params:{slug:v.find(function(t){return t.id===s}).slug,originalImageRect:e}})}}},m=p,h=(s("f30e"),Object(o["a"])(m,d,g,!1,null,"a80232fc",null)),y=h.exports,_=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"artist"},[s("div",{staticClass:"controls"},[s("router-link",{attrs:{to:"/artists"}},[s("img",{staticClass:"back-button",attrs:{src:"/img/icons/back-arrow.svg"}})])],1),s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[s("img",{staticClass:"artist-image",style:t.artistImageStyle,attrs:{src:"/img/"+t.artist.image}}),s("div",{staticClass:"artist-quickinfo"},[s("h1",{staticClass:"artist-name"},[t._v(t._s(t.artist.name))]),s("div",{staticClass:"artist-category"},[t._v(t._s(t.artist.category))])])])])])},b=[],C={name:"artist",computed:{artist:function(){var t=this;return v.find(function(a){return t.$route.params.slug===a.slug})},originalImageRect:function(){return this.$route.params.originalImageRect||{x:0,y:0,width:0}},artistImageStyle:function(){var t=document.querySelector(".artist-image").getBoundingClientRect(),a=this.originalImageRect.x-t.x-42,s=this.originalImageRect.y-t.y+95,e=.75;return{transform:"translate(".concat(a,"px, ").concat(s,"px) scale(").concat(e,")")}}}},k=C,j=(s("368b"),Object(o["a"])(k,_,b,!1,null,"27467075",null)),w=j.exports;e["a"].use(f["a"]);var x=new f["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/artists"},{path:"/artists",name:"artists",component:y},{path:"/artist/:slug",name:"artist",component:w}]});e["a"].config.productionTip=!1,new e["a"]({router:x,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,a,s){},"7f20":function(t,a,s){},ddda:function(t,a,s){},f30e:function(t,a,s){"use strict";var e=s("7f20"),r=s.n(e);r.a}});
//# sourceMappingURL=app.96a04d86.js.map