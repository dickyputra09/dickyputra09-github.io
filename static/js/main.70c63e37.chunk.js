(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{406:function(e,a,t){e.exports=t(735)},411:function(e,a,t){},580:function(e,a){},582:function(e,a){},735:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(31),c=t.n(r),i=(t(411),t(745)),o=t(744),u=t(377),m=t(7),s=t(375),h=t.n(s),d=t(376),p=t.n(d),b=t(746),v=t(747),E=t(741),k=t(742),g=function(e){return l.a.createElement(b.a,e,l.a.createElement(v.a,null,l.a.createElement(E.a,{source:"id"}),l.a.createElement(E.a,{source:"name"}),l.a.createElement(E.a,{source:"username"}),l.a.createElement(k.a,{source:"email"}),l.a.createElement(E.a,{source:"age"})))},f=t(106),y=t.n(f),j=t(347),x=t.n(j),C=t(54),w=t.n(C),O=t(141),J=t.n(O),B=t(189),S=t(190),T=t(204),V=t(191),W=t(201),N=t(62),P=t(748),A=t(134),I=t.n(A),$=t(192),R=t.n($),H=t(118),F=t.n(H),K=t(193),L=t.n(K);F.a.fcRoot(I.a,R.a,L.a);var M={type:"column2d",width:"99%",height:250,dataFormat:"json",dataSource:{chart:{caption:"Jumlah Bank Sampah per Wilayah Besar",subcaption:"Bulan Ini",xaxisname:"Wilayah",yaxisname:"Jumlah"},data:[{label:"Jakarta",value:"110",link:"newchart-xml-jakarta"},{label:"Bekasi",value:"140",link:"newchart-xml-bekasi"},{label:"Bogor",value:"35",link:"newchart-xml-bogor"}],linkeddata:[{id:"jakarta",linkedchart:{chart:{caption:"Jumlah transaksi sampah -  Wilayah Jakarta",subcaption:"Bulan Ini",rotateValues:"0",plottooltext:"$label, $dataValue"},data:[{label:"Jakarta Utara",value:"30"},{label:"Jakarta Barat",value:"25"},{label:"Jakarta Pusat",value:"20"},{label:"Jakarta Selatan",value:"9"},{label:"Jakarta Timur",value:"25"},{label:"Kepulauan Seribu",value:"1"}]}}]}},U=function(e){function a(e){var t;return Object(B.a)(this,a),(t=Object(T.a)(this,Object(V.a)(a).call(this,e))).state={chart:{},currentVal:"column2d"},t.renderComplete=t.renderComplete.bind(Object(N.a)(Object(N.a)(t))),t.handlechange=t.handlechange.bind(Object(N.a)(Object(N.a)(t))),t}return Object(W.a)(a,e),Object(S.a)(a,[{key:"renderComplete",value:function(e){this.setState({chart:e})}},{key:"handlechange",value:function(e){this.state.chart.chartType(e.currentTarget.value),this.setState({currentVal:e.currentTarget.value})}},{key:"render",value:function(){return l.a.createElement(P.a,{width:"99%",height:300},l.a.createElement("div",null,l.a.createElement(F.a,Object.assign({},M,{onRender:this.renderComplete})),l.a.createElement("br",null),l.a.createElement("span",null,"Choose a chart type:"),l.a.createElement("div",{className:"change-type"},l.a.createElement("div",null,l.a.createElement("select",{name:"chart",value:this.state.currentVal,onChange:this.handlechange},l.a.createElement("option",{value:"column2d"},"Column Chart"),l.a.createElement("option",{value:"bar2d"},"Bar Chart"),l.a.createElement("option",{value:"line"},"Line Chart"),l.a.createElement("option",{value:"pie2d"},"Pie Chart"))))))}}]),a}(l.a.Component);F.a.fcRoot(I.a,R.a,L.a);var G={type:"column2d",width:"99%",height:250,dataFormat:"json",dataSource:{chart:{caption:"Jumlah Nasabah per Wilayah Besar",subcaption:"Bulan Ini",xaxisname:"Wilayah",yaxisname:"Jumlah",numbersuffix:"k"},data:[{label:"Jakarta",value:"110",link:"newchart-xml-jakarta"},{label:"Bekasi",value:"140",link:"newchart-xml-bekasi"},{label:"Bogor",value:"35",link:"newchart-xml-bogor"}],linkeddata:[{id:"jakarta",linkedchart:{chart:{caption:"Jumlah transaksi sampah -  Wilayah Jakarta",subcaption:"Bulan Ini",rotateValues:"0",plottooltext:"$label, $dataValue"},data:[{label:"Jakarta Utara",value:"30"},{label:"Jakarta Barat",value:"25"},{label:"Jakarta Pusat",value:"20"},{label:"Jakarta Selatan",value:"9"},{label:"Jakarta Timur",value:"25"},{label:"Kepulauan Seribu",value:"1"}]}}]}},q=function(e){function a(e){var t;return Object(B.a)(this,a),(t=Object(T.a)(this,Object(V.a)(a).call(this,e))).state={chart:{},currentVal:"column2d"},t.renderComplete=t.renderComplete.bind(Object(N.a)(Object(N.a)(t))),t.handlechange=t.handlechange.bind(Object(N.a)(Object(N.a)(t))),t}return Object(W.a)(a,e),Object(S.a)(a,[{key:"renderComplete",value:function(e){this.setState({chart:e})}},{key:"handlechange",value:function(e){this.state.chart.chartType(e.currentTarget.value),this.setState({currentVal:e.currentTarget.value})}},{key:"render",value:function(){return l.a.createElement(P.a,{width:"99%",height:300},l.a.createElement("div",null,l.a.createElement(F.a,Object.assign({},G,{onRender:this.renderComplete})),l.a.createElement("br",null),l.a.createElement("span",null,"Choose a chart type:"),l.a.createElement("div",{className:"change-type"},l.a.createElement("div",null,l.a.createElement("select",{name:"chart",value:this.state.currentVal,onChange:this.handlechange},l.a.createElement("option",{value:"column2d"},"Column Chart"),l.a.createElement("option",{value:"bar2d"},"Bar Chart"),l.a.createElement("option",{value:"line"},"Line Chart"),l.a.createElement("option",{value:"pie2d"},"Pie Chart"))))))}}]),a}(l.a.Component);var z=Object(m.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,color:e.palette.text.secondary,margin:2},paperChart:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary},paperHeader:{padding:1.5*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(function(e){var a=e.classes;return l.a.createElement("div",{className:a.root},l.a.createElement(J.a,{container:!0,spacing:20},l.a.createElement(J.a,{xs:12,md:12,className:a.paperHeader},l.a.createElement(y.a,null,l.a.createElement(x.a,{title:"Welcome to TAMPAH Admin"}))),l.a.createElement(J.a,{item:!0,xs:12,md:6},l.a.createElement(w.a,{className:a.paper},l.a.createElement(U,null))),l.a.createElement(J.a,{item:!0,xs:12,md:6},l.a.createElement(w.a,{className:a.paper},l.a.createElement(q,null)))))}),D=function(e){return l.a.createElement(b.a,e,l.a.createElement(v.a,null,l.a.createElement(E.a,{source:"id"}),l.a.createElement(E.a,{source:"name"}),l.a.createElement(E.a,{source:"description"})))},Q=Object(m.createMuiTheme)({palette:{primary:{main:"#ff4400"},secondary:{light:"#0066ff",main:"#0044ff",contrastText:"#ffffff"}}}),X=Object(u.a)("https://my-json-server.typicode.com/dickyputra09/json-server"),Y=function(){return l.a.createElement(i.a,{theme:Q,dataProvider:X,dashboard:z},l.a.createElement(o.a,{name:"customer",list:g,icon:h.a}),l.a.createElement(o.a,{name:"bank",list:D,icon:p.a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[406,2,1]]]);
//# sourceMappingURL=main.70c63e37.chunk.js.map