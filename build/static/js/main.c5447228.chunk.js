(this.webpackJsonpmyfuckingwork=this.webpackJsonpmyfuckingwork||[]).push([[0],{28:function(e,t,a){e.exports=a(62)},33:function(e,t,a){},34:function(e,t,a){},37:function(e,t){},39:function(e,t){},51:function(e,t,a){e.exports=a.p+"static/media/1.7dc8f86c.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/2.bd713b39.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/3.bf3873f8.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/4.55765fef.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/5.17f619ae.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/6.60fb92b6.jpg"},57:function(e,t,a){e.exports=a.p+"static/media/7.a8397a4e.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/8.9dae2c29.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/9.aed291c2.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/10.4d8147a4.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/11.1cfc1d93.jpg"},62:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(25),i=a.n(r),c=(a(33),a(7)),l=a(8),o=a(1),u=a(9),h=a(10),p=(a(34),a(26)),m=a(51),d=a(52),b=a(53),f=a(54),v=a(55),E=a(56),k=a(57),x=a(58),S=a(59),y=a(60),g=a(61),j=new Audio("./extra-life.mp3"),O=new Audio("./ha-sound-effect.mp3"),w=new Audio("./beep-07.mp3"),C=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={en:!1,ip:"",ptr:0,cur:"0",next:"0",result:"",history:[{node:["0","0"]}]},s.handlebox=s.handlebox.bind(Object(o.a)(s)),s.next=s.next.bind(Object(o.a)(s)),s.previous=s.previous.bind(Object(o.a)(s)),s.start=s.start.bind(Object(o.a)(s)),s.reset=s.reset.bind(Object(o.a)(s)),s.readall=s.readall.bind(Object(o.a)(s)),s}return Object(l.a)(a,[{key:"onStart",value:function(){var e=document.getElementById("ad0");e.muted=!1,e.addEventListener("canplaythrough",(function(){e.play()}),!1)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{onLoad:this.onStart},n.a.createElement("audio",{id:"ad0",src:"./love-me.mp3",preload:"auto",controls:!0,autoPlay:!0,loop:!0,muted:!0}),n.a.createElement("script",{type:"text/javascript"},'alert(document.getElementById("abc"));'),n.a.createElement("div",{class:"groupname"},n.a.createElement("div",{style:{textAlign:"center",fontSize:"30px"}},"\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01",n.a.createElement("br",null)),"60010659 \u0e19\u0e32\u0e22\u0e1e\u0e23\u0e40\u0e17\u0e1e \u0e2b\u0e25\u0e48\u0e21\u0e41\u0e2a\u0e07",n.a.createElement("br",null),"60010912 \u0e27\u0e42\u0e23\u0e14\u0e21 \u0e43\u0e1a\u0e2d\u0e38\u0e14\u0e21",n.a.createElement("br",null),"60010916 \u0e27\u0e31\u0e0a\u0e23\u0e40\u0e01\u0e35\u0e22\u0e23\u0e15\u0e34 \u0e27\u0e48\u0e2d\u0e07\u0e40\u0e08\u0e23\u0e34\u0e0d\u0e1e\u0e23",n.a.createElement("br",null),"60010986 \u0e28\u0e34\u0e27\u0e01\u0e23\u0e13\u0e4c \u0e1a\u0e38\u0e0d\u0e1e\u0e32\u0e21\u0e35",n.a.createElement("br",null)),n.a.createElement("div",{class:"col1"},n.a.createElement(B,{updatepress:function(t){e.Press(t)}})),n.a.createElement("div",{class:"col2"},n.a.createElement("div",{class:"row1"},n.a.createElement(R,{value:this.state.ip,ptr:this.state.ptr,updatebox:this.handlebox,start:this.start,next:this.next,reset:this.reset,prev:this.previous,readall:this.readall,setEn:function(){return e.setEn()}})),n.a.createElement("div",{class:"row2"},n.a.createElement(A,{cur:this.state.cur,result:this.state.result}))))}},{key:"Press",value:function(e){if(!1===this.state.en&&this.state.ip.length<=20){var t=this.state.ip;this.setState({ip:t+=e})}}},{key:"handlebox",value:function(e){this.setState({ip:e})}},{key:"readall",value:function(){var e=this;this.state.ip.length!==this.state.ptr&&setTimeout((function(){e.next(),w.play(),e.readall()}),1e3)}},{key:"save",value:function(){var e=[this.state.cur,this.state.next];this.setState({history:this.state.history.concat({node:e})})}},{key:"next",value:function(){var e=this;this.state.ip.length>this.state.ptr&&this.setState((function(){return{ptr:e.state.ptr+1}}),(function(){e.save(),e.startread()}))}},{key:"previous",value:function(){var e=this;this.state.ptr>0&&this.setState((function(){return{ptr:e.state.ptr-1}}),(function(){var t=e.state.history,a=t[t.length-1].node.slice();t.pop(),e.setState({cur:a[0],next:a[1],history:t}),e.state.ip.length===e.state.ptr?"f"===e.state.cur?e.setState({result:"Accept"}):e.setState({result:"Reject"}):e.setState({result:""})}))}},{key:"startread",value:function(){this.setState({cur:this.state.next},this.startread2)}},{key:"startread2",value:function(){this.state.ip.length===this.state.ptr?"f"===this.state.cur?(this.setState({result:"Accept"}),j.play()):(this.setState({result:"Reject"}),O.play()):this.setState({result:""});var e=this.state.ip[this.state.ptr];switch(this.state.cur){case"l":case"e":case"m":this.coffee(e);break;case"1":case"2":this.level(e);break;case"i":this.ice(e);break;case"h":this.hot(e);break;case"t":this.tang(e);break;case"f":this.final();break;case"trap":this.trap();break;default:this.init(e)}}},{key:"start",value:function(){this.startread(),this.setState({en:!0})}},{key:"reset",value:function(){this.setState({en:!1,ip:"",ptr:0,cur:"0",next:"0",result:"",history:[{node:["0","0",0]}]})}},{key:"init",value:function(e){switch(e){case"l":this.setState({next:"l"});break;case"e":this.setState({next:"e"});break;case"m":this.setState({next:"m"})}}},{key:"coffee",value:function(e){switch(e){case"l":this.setState({next:"l"});break;case"e":this.setState({next:"e"});break;case"m":this.setState({next:"m"});break;case"1":this.setState({next:"1"});break;case"2":this.setState({next:"2"});break;case"c":this.setState({next:"0"})}}},{key:"level",value:function(e){switch(e){case"l":this.setState({next:"l"});break;case"e":this.setState({next:"e"});break;case"m":this.setState({next:"m"});break;case"1":this.setState({next:"1"});break;case"2":this.setState({next:"2"});break;case"i":this.setState({next:"i"});break;case"h":this.setState({next:"h"});break;case"c":this.setState({next:"0"})}}},{key:"ice",value:function(e){switch(e){case"l":this.setState({next:"l"});break;case"e":this.setState({next:"e"});break;case"m":this.setState({next:"m"});break;case"1":this.setState({next:"1"});break;case"2":this.setState({next:"2"});break;case"i":this.setState({next:"i"});break;case"h":this.setState({next:"h"});break;case"t":this.setState({next:"t"});break;case"c":this.setState({next:"0"})}}},{key:"hot",value:function(e){switch(e){case"l":this.setState({next:"l"});break;case"e":this.setState({next:"e"});break;case"m":this.setState({next:"m"});break;case"1":this.setState({next:"1"});break;case"2":this.setState({next:"2"});break;case"i":this.setState({next:"i"});break;case"h":this.setState({next:"h"});break;case"t":this.setState({next:"f"});break;case"c":this.setState({next:"0"})}}},{key:"tang",value:function(e){switch(e){case"t":this.setState({next:"f"});break;case"c":this.setState({next:"0"})}}},{key:"trap",value:function(){}},{key:"final",value:function(){this.setState({next:"trap"})}},{key:"cancel",value:function(){this.setState({next:"0"})}}]),a}(s.Component),R=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={isboxEn:!1},s.handleRand=s.handleRand.bind(Object(o.a)(s)),s.handleStart=s.handleStart.bind(Object(o.a)(s)),s.handleReset=s.handleReset.bind(Object(o.a)(s)),s.update=s.update.bind(Object(o.a)(s)),s}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{class:"boxtop"},n.a.createElement("div",{class:"title"},n.a.createElement(p.a,null,"\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e0a\u0e07\u0e01\u0e32\u0e41\u0e1f\u0e2d\u0e31\u0e15\u0e34\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34 (Brewing Coffee Machine)")),n.a.createElement("hr",null),n.a.createElement("div",{class:"string"},n.a.createElement("div",{style:{display:"inline"}},"String: ",this.props.value.substring(0,this.props.ptr)),n.a.createElement("div",{style:{color:"red",display:"inline"}},n.a.createElement("b",null,this.props.value[this.props.ptr])),n.a.createElement("div",{style:{display:"inline"}},this.props.value.substring(this.props.ptr+1))),n.a.createElement("div",{class:"boxstring"}),n.a.createElement("br",null),n.a.createElement("button",{class:"random",type:"button",onClick:this.handleRand},"Random String"),n.a.createElement("button",{class:"start",variant:"primary",onClick:this.handleStart,disabled:this.state.isboxEn},"Start"),n.a.createElement("button",{class:"reset",onClick:this.handleReset},"Reset"),n.a.createElement("button",{class:"previous",onClick:this.props.prev,disabled:!this.state.isboxEn},"Previous"),n.a.createElement("button",{class:"next",onClick:this.props.next,disabled:!this.state.isboxEn},"Next"),n.a.createElement("button",{class:"all",onClick:this.props.readall,disabled:!this.state.isboxEn},"Read All"),n.a.createElement("br",null)))}},{key:"update",value:function(e){this.props.updatebox(e.target.value)}},{key:"handleStart",value:function(e){this.setState({isboxEn:!0}),this.props.start()}},{key:"handleReset",value:function(e){this.setState({isboxEn:!1}),this.props.reset()}},{key:"handleRand",value:function(e){if(!this.state.isboxEn){for(var t="",a=0;a<12;a++)t+="lem12ihtc".charAt(Math.floor(100*Math.random())%9);this.props.updatebox(t)}}}]),a}(s.Component),A=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.set()}},{key:"set",value:function(){var e;switch(e="Accept"===this.props.result?n.a.createElement("h1",{class:"dfatx",style:{color:"green"}},this.props.result):n.a.createElement("h1",{class:"dfatx",style:{color:"red"}},this.props.result),this.props.cur){case"l":return n.a.createElement("div",null,n.a.createElement("img",{src:f,alt:":("}),e);case"m":return n.a.createElement("div",null,n.a.createElement("img",{src:d,alt:":("}),e);case"e":return n.a.createElement("div",null,n.a.createElement("img",{src:b,alt:":("}),e);case"1":return n.a.createElement("div",null,n.a.createElement("img",{src:v,alt:":("}),e);case"2":return n.a.createElement("div",null,n.a.createElement("img",{src:E,alt:":("}),e);case"i":return n.a.createElement("div",null,n.a.createElement("img",{src:k,alt:":("}),e);case"h":return n.a.createElement("div",null,n.a.createElement("img",{src:x,alt:":("}),e);case"t":return n.a.createElement("div",null,n.a.createElement("img",{src:S,alt:":("}),e);case"f":return n.a.createElement("div",null,n.a.createElement("img",{src:y,alt:":("}),e);case"trap":return n.a.createElement("div",null,n.a.createElement("img",{src:g,alt:":("}),e);default:return n.a.createElement("div",null,n.a.createElement("img",{src:m,alt:":("}),e)}}}]),a}(s.Component),B=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("img",{class:"machine",src:"./img/Machine1.png",alt:";("}),n.a.createElement("img",{class:"bank",src:"./img/insert.png",alt:";("}),n.a.createElement("div",{class:"howto"},n.a.createElement("b",{style:{color:"red"}},"\u0e27\u0e34\u0e18\u0e35\u0e43\u0e0a\u0e49")," ",n.a.createElement("br",null),"1. \u0e40\u0e25\u0e37\u0e2d\u0e01\u0e01\u0e32\u0e41\u0e1f ",n.a.createElement("br",null),"2. \u0e40\u0e25\u0e37\u0e2d\u0e01\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e27\u0e32\u0e19",n.a.createElement("li",null,"LV1 \u0e04\u0e37\u0e2d \u0e2b\u0e27\u0e32\u0e19\u0e19\u0e49\u0e2d\u0e22"),n.a.createElement("li",null,"LV2 \u0e04\u0e37\u0e2d \u0e2b\u0e27\u0e32\u0e19\u0e1b\u0e01\u0e15\u0e34"),"3. \u0e40\u0e25\u0e37\u0e2d\u0e01\u0e23\u0e49\u0e2d\u0e19 \u0e40\u0e22\u0e47\u0e19",n.a.createElement("li",null,"\u0e23\u0e49\u0e2d\u0e19 \u0e23\u0e32\u0e04\u0e32 20 \u0e1a\u0e32\u0e17"),n.a.createElement("li",null,"\u0e40\u0e22\u0e47\u0e19 \u0e23\u0e32\u0e04\u0e32 40 \u0e1a\u0e32\u0e17"),"4. \u0e08\u0e48\u0e32\u0e22\u0e40\u0e07\u0e34\u0e19 ",n.a.createElement("br",null),n.a.createElement("li",null,"\u0e2b\u0e22\u0e2d\u0e14\u0e04\u0e23\u0e31\u0e49\u0e07\u0e25\u0e30 20 \u0e1a\u0e32\u0e17")),n.a.createElement("button",{class:"latte mc",onClick:function(){return e.props.updatepress("l")}}),n.a.createElement("button",{class:"espres mc",onClick:function(){return e.props.updatepress("e")}}),n.a.createElement("button",{class:"mocca mc",onClick:function(){return e.props.updatepress("m")}}),n.a.createElement("button",{class:"lv1 mc",onClick:function(){return e.props.updatepress("1")}}),n.a.createElement("button",{class:"lv2 mc",onClick:function(){return e.props.updatepress("2")}}),n.a.createElement("button",{class:"ice mc",onClick:function(){return e.props.updatepress("i")}}),n.a.createElement("button",{class:"hot mc",onClick:function(){return e.props.updatepress("h")}}),n.a.createElement("button",{class:"cancel",onClick:function(){return e.props.updatepress("c")}},"Cancel(c)"),n.a.createElement("button",{class:"token",onClick:function(){return e.props.updatepress("t")}},"Insert Cash(t)"))}}]),a}(s.Component),M=C;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.c5447228.chunk.js.map