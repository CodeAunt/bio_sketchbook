(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],h=0,f=[];h<i.length;h++)s=i[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0587":function(t,e,n){},1:function(t,e){},"16ed":function(t,e,n){"use strict";var a=n("0587"),o=n.n(a);o.a},2:function(t,e){},"2eab":function(t,e,n){"use strict";var a=n("6a89"),o=n.n(a);o.a},"2edc":function(t,e,n){"use strict";var a=n("a026"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=n("2222"),r=n.n(o),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c=n("2877"),l={},u=Object(c["a"])(l,s,i,!1,null,null,null),h=u.exports,f=(n("a4d3"),n("e01a"),n("2f62")),d=n("d4ec"),p=n("bee2"),v=(n("a434"),n("ac1f"),function(){function t(e){Object(d["a"])(this,t),this.limit=e,this.history=[],this.current=0}return Object(p["a"])(t,[{key:"add",value:function(t){this.history.splice(this.current,this.history.length),this.history.length>=this.limit&&this.history.shift(),this.history.push(t),this.current=this.history.length,localStorage.vdarw=r.a.project.exportJSON()}},{key:"undo",value:function(){this.canUndo()&&this.history[--this.current].unexec()}},{key:"redo",value:function(){this.canRedo()&&this.history[this.current++].exec()}},{key:"canUndo",value:function(){return this.current>0}},{key:"canRedo",value:function(){return this.history.length>this.current}},{key:"clear",value:function(){this.history=[],this.current=0,localStorage.vdarw="[]"}}]),t}()),m=new v(20),y=n("2909"),g=(n("b0c0"),n("4c17")),x=n.n(g),w=function(){function t(e){var n=e.path;Object(d["a"])(this,t),this._args={path:n},n.name=x()()}return Object(p["a"])(t,[{key:"exec",value:function(){var t;this.removed&&(t=this._args.path).add.apply(t,Object(y["a"])(this.removed))}},{key:"unexec",value:function(){this.removed=this._args.path.removeSegments()}}]),t}(),b={path:null,show:null},k={lastSize:0,lastColor:"#00000FF"},C=function(t){b.show&&b.show.layer===r.a.project.activeLayer&&k.lastSize===Q.state.pencilArgs.size&&k.lastColor===Q.state.pencilArgs.color||(b.show&&b.show.remove(),b.show=null,b.show=new r.a.Path.Circle({center:[0,0],radius:Q.state.pencilArgs.size/2,fillColor:Q.state.pencilArgs.color}),k.lastSize=Q.state.pencilArgs.size,k.lastColor=Q.state.pencilArgs.color),b.show.position=t.point},S=function(t){b.path=new r.a.Path,b.path.strokeColor=Q.state.pencilArgs.color,b.path.strokeWidth=Q.state.pencilArgs.size,b.path.strokeCap="round",b.path.strokeJoin="round",b.path.add(t.point)},A=function(t){b.path&&b.path.add(t.point)},j=function(t){b.path.add(t.point),Q.state.pencilArgs.shake&&b.path.simplify(),m.add(new w({path:b.path})),b.path=null,b.show&&b.show.remove(),b.show=null},$=function(){},z=function(){b.show&&b.show.remove(),b.show=null},O=new r.a.Tool;O.onMouseDown=S,O.onMouseDrag=A,O.onMouseUp=j,O.onMouseMove=C,O.onToggleIn=$,O.onToggleOut=z;var M={path:null,show:null},_={lastSize:0},T=function(t){M.show&&M.show.layer===r.a.project.activeLayer&&_.layer===Q.state.eraserArgs.size||(M.show&&M.show.remove(),M.show=null,M.show=new r.a.Path.Circle({center:[0,0],radius:Q.state.eraserArgs.size/2,strokeColor:"black",fillColor:"white"}),_.lastSize=Q.state.eraserArgs.size),M.show.position=t.point},E=function(t){M.path=new r.a.Path,M.path.strokeColor="white",M.path.strokeWidth=Q.state.eraserArgs.size,M.path.blendMode="destination-out",M.path.strokeCap="round",M.path.strokeJoin="round",M.path.add(t.point)},I=function(t){M.show&&(M.show.position=t.point,M.show.bringToFront()),M.path&&M.path.add(t.point)},L=function(t){M.path.add(t.point),m.add(new w({path:M.path})),M.path=null},D=function(){},N=function(){M.show&&M.show.remove(),M.show=null},P=new r.a.Tool;P.onMouseDown=E,P.onMouseDrag=I,P.onMouseUp=L,P.onMouseMove=T,P.onToggleIn=D,P.onToggleOut=N;var V={prevSelection:null};function B(){if(V.prevSelection){var t=V.prevSelection.path||V.prevSelection;t.bounds.selected=!1,t.selected=!1,V.prevSelection.selected=!1,V.prevSelection=null}}var R=function(t){B();var e=r.a.project.hitTest(t.point,{tolerance:4,fill:!0,stroke:!0,segments:!0}),n=e&&e.item;if(n){var a="segment"===e.type;n.bounds.selected=!a,a&&(n=e.segment),n.selected=!0}V.prevSelection=n},F=function(){B()},U=new r.a.Tool;U.onMouseDown=R,U.onToggleOut=F;var H={path:null,carryLength:0},J=function(){H.path=new r.a.Path,H.path.fillColor=Q.state.brushArgs.color},q=function(t){if(H.path&&t.delta.length>1){var e=t.delta;e.angle=e.angle+90;var n=e.normalize().multiply(Q.state.brushArgs.size).multiply(1/e.length),a=t.middlePoint.add(n),o=t.middlePoint.subtract(n);H.carryLength=H.carryLength+e.length,H.carryLength>n.length&&(H.path.add(a),H.path.insert(0,o),H.path.smooth(),H.carryLength=0)}},X=function(){Q.state.brushArgs.shake&&H.path.simplify(),m.add(new w({path:H.path})),H.path=null},G=function(){},Y=function(){},W=new r.a.Tool;W.onMouseDown=J,W.onMouseDrag=q,W.onMouseUp=X,W.onToggleIn=G,W.onToggleOut=Y;var Z={pencil:O,eraser:P,select:U,brush:W};a["default"].use(f["a"]);var Q=new f["a"].Store({state:{image:"",toolName:null,canvasArgs:{bgColor:"#fff"},pencilArgs:{color:"#000000",size:10,shake:!0},eraserArgs:{size:20},brushArgs:{color:"#000000",size:20,shake:!0},drawSession:{step:0,description:""}},mutations:{setImage:function(t,e){t.image=e},setStep:function(t){t.drawSession.step<3&&t.drawSession.step++},setDescription:function(t,e){t.drawSession.description=e},setTool:function(t,e){t.toolName&&Z[t.toolName].onToggleOut&&Z[t.toolName].onToggleOut(),t.toolName=e,Z[e]&&(Z[e].activate(),Z[e].onToggleIn&&Z[e].onToggleIn())},setArgs:function(t,e){var n=e.toolName,a=e.color,o=e.size,r=e.shake,s=t[n+"Args"];s.color=a||s.color,s.size=o||s.size,void 0!==r&&(s.shake=r)},setCanvasArgs:function(t,e){Object.assign(t.canvasArgs,e)}},actions:{},modules:{}}),K=n("e37d"),tt=(n("b972"),n("8c4f")),et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("div",{staticClass:"z-50 absolute bg-white bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col justify-between items-center"},[n("a",{ref:"classification",attrs:{id:"classification"}}),n("div",{staticClass:"flex flex-row"},[n("button",{staticClass:"ml-6",on:{click:function(e){return t.onConfirm()}}},[t._v(" Confirm ")]),n("router-link",{staticClass:"mx-6",attrs:{to:"/canvas"}},[t._v("Canvas")])],1)]),t._m(0),n("VCapture",{staticClass:"z-50 absolute top-1/2 right-5 transform -translate-y-1/2",on:{click:function(e){return t.onCapture()}}}),t._m(1),n("canvas",{ref:"canvas",staticClass:"hidden",attrs:{id:"canvas"}}),n("video",{ref:"video",staticClass:"w-full z-0",attrs:{id:"video",playsinline:"",autoplay:""}})],1)},nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"z-50 absolute top-12 left-1/2 transform -translate-x-1/2"},[n("p",{staticClass:"text"},[t._v("按下快门，和我一起写生吧！")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"absolute bottom-0"},[n("img",{attrs:{src:"https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/png/cover.png",alt:""}})])}],at=(n("d3b7"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:t.handleClick}},[t._m(0)])}),ot=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",[n("img",{attrs:{src:"https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/shot.svg"}})])}],rt={methods:{handleClick:function(t){this.$emit("click",t)}}},st=rt,it=Object(c["a"])(st,at,ot,!1,null,"50c92132",null),ct=it.exports,lt={components:{VCapture:ct},data:function(){return{video:"",imgData:"",canvas:"",context:"",scale:1,sketch:new Image,windowWidth:document.documentElement.clientWidth,windowHeight:document.documentElement.clientHeight}},methods:{errorHandler:function(t){console.log("navigator.getUserMedia error: ",t)},gotStream:function(t){return window.stream=t,this.video.srcObject=t,navigator.mediaDevices.enumerateDevices()},start:function(){window.stream&&window.stream.getTracks().forEach((function(t){t.stop()}));var t={video:{facingMode:"environment"}};navigator.mediaDevices.getUserMedia(t).then(this.gotStream).catch(this.errorHandler)},onCapture:function(){this.canvas.classList.toggle("hidden"),this.video.classList.toggle("hidden"),this.context.drawImage(this.video,0,0,this.canvas.width/this.scale,this.canvas.height/this.scale),this.imgData=this.canvas.toDataURL("image/jpeg")},onConfirm:function(){var t=new XMLHttpRequest;t.open("POST","https://ztodesign.cn:5000/photo2sketch",!0),t.setRequestHeader("cache-control","no-cache");var e=new FormData;e.append("image",this.imgData);var n=this;t.onreadystatechange=function(){if(this.readyState===XMLHttpRequest.DONE&&200===this.status){var e=JSON.parse(t.responseText);e&&n.$store.commit("setImage",e.data.resImage)}},t.send(e)}},mounted:function(){this.video=this.$refs.video,this.canvas=this.$refs.canvas,this.context=this.canvas.getContext("2d"),this.scale=window.devicePixelRatio,this.canvas.width=Math.floor(this.windowWidth),this.canvas.height=Math.floor(this.windowHeight),this.context.scale(this.scale,this.scale);var t=this;this.sketch.onload=function(){t.context.drawImage(this,0,0,t.canvas.width/t.scale,t.canvas.height/t.scale)},navigator.mediaDevices.enumerateDevices().catch(this.errorHandler),this.start()}},ut=lt,ht=(n("2edc"),Object(c["a"])(ut,et,nt,!1,null,"8e76fc8e",null)),ft=ht.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"canvas w-full h-full flex flex-col justify-between items-center overflow-hidden",class:{default:t.isDefault,image:!t.isDefault},style:{backgroundImage:t.getBg}},[n("div",{staticClass:"absolute flex flex-row justify-between items-center bg-white rounded-b-2xl"},[n("VHeader")],1),n("canvas",{ref:"canvas",staticClass:"w-full h-screen",style:t.cursor+t.canvasBg,attrs:{id:"canvas",resize:""}}),n("VDialogue",{ref:"sidebar",staticClass:"absolute top-1/2 left-0 transform -translate-y-2/3 transition duration-500 ease-in-out",on:{click:t.toggleSideBar,toggleMagnifier:t.toggleMagnifier}}),n("VContent",{staticClass:"absolute bottom-12"}),n("VNext",{staticClass:"absolute bottom-12 right-12 transition duration-500 ease-in-out transform hover:-translate-y-3"}),n("VTrump",{staticClass:"absolute bottom-10 left-12 transition duration-500 ease-in-out transform hover:-translate-y-3"}),n("VMagnifier",{ref:"magnifier",staticClass:"absolute top-8 left-16 border-4 border-yellow-400 rounded-full transition duration-500 ease-in-out transform -translate-y-64",on:{click:function(e){t.toggleSideBar(),t.toggleMagnifier()}}})],1)},pt=[],vt=n("5530"),mt=(n("99af"),n("b680"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center justify-center flex-wrap w-96 h-20"},[n("VPicker",{staticClass:"transform -translate-y-2"}),n("VTools",{staticClass:"transform -translate-y-2"})],1)}),yt=[],gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center gap-x-10"},[n("v-popover",{attrs:{disabled:t.disabledSize,offset:"6"}},[n("VIconBtn",{ref:"pencil",staticClass:"transform -translate-y-5 transition duration-300 ease-in-out",attrs:{title:"画笔(P)",active:"pencil"===t.toolName,name:"pencil"},on:{click:function(e){return t.setTool("pencil")}}}),n("template",{slot:"popover"},[n("div",{staticClass:"v-size-picker"},[n("VueSlider",{attrs:{min:1},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})],1)])],2),n("v-popover",{attrs:{disabled:t.disabledSize,offset:"6"}},[n("VIconBtn",{ref:"brush",staticClass:"transform -translate-y-5 transition duration-300 ease-in-out",attrs:{title:"刷子(B)",active:"brush"===t.toolName,name:"brush"},on:{click:function(e){return t.setTool("brush")}}}),n("template",{slot:"popover"},[n("div",{staticClass:"v-size-picker"},[n("VueSlider",{attrs:{min:1},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})],1)])],2),n("v-popover",{attrs:{disabled:t.disabledSize,offset:"16"}},[n("VIconBtn",{attrs:{title:"擦除(E)",active:"eraser"===t.toolName,name:"eraser"},on:{click:function(e){return t.setTool("eraser")}}}),n("template",{slot:"popover"},[n("div",{staticClass:"v-size-picker"},[n("VueSlider",{attrs:{min:1},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})],1)])],2)],1)},xt=[],wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:t.handleClick}},[n("i",[n("img",{attrs:{src:t.src,alt:t.name}})])])},bt=[],kt={props:{active:Boolean,disabled:Boolean,name:String},computed:{src:function(){return"https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/"+this.name+".svg"}},methods:{handleClick:function(t){this.disabled||this.$emit("click",t)}}},Ct=kt,St=Object(c["a"])(Ct,wt,bt,!1,null,"6cc9eac0",null),At=St.exports,jt=n("4971"),$t=n.n(jt),zt=(n("8445"),{components:{VIconBtn:At,VueSlider:$t.a},data:function(){return{size:1}},computed:{toolName:function(){return this.$store.state.toolName},toolArgs:function(){return this.$store.state[this.toolName+"Args"]||{}},disabledSize:function(){return null===this.toolName}},watch:{toolName:function(){this.toolArgs.size&&(this.size=this.toolArgs.size)},size:function(){this.toolArgs.size&&this.$store.commit("setArgs",{toolName:this.toolName,size:this.size})}},methods:{setTool:function(t){"pencil"===t?(this.$refs["brush"].$el.classList.remove("-translate-y-2"),this.$refs["brush"].$el.classList.add("-translate-y-5"),this.$refs["pencil"].$el.classList.remove("-translate-y-5"),this.$refs["pencil"].$el.classList.add("-translate-y-2")):"brush"===t?(this.$refs["pencil"].$el.classList.remove("-translate-y-2"),this.$refs["pencil"].$el.classList.add("-translate-y-5"),this.$refs["brush"].$el.classList.remove("-translate-y-5"),this.$refs["brush"].$el.classList.add("-translate-y-2")):"eraser"===t&&(this.$refs["brush"].$el.classList.remove("-translate-y-2"),this.$refs["brush"].$el.classList.add("-translate-y-5"),this.$refs["pencil"].$el.classList.remove("-translate-y-2"),this.$refs["pencil"].$el.classList.add("-translate-y-5")),this.$store.commit("setTool",t)}},mounted:function(){this.$refs["brush"].$el.classList.remove("-translate-y-2"),this.$refs["brush"].$el.classList.add("-translate-y-5"),this.$refs["pencil"].$el.classList.remove("-translate-y-5"),this.$refs["pencil"].$el.classList.add("-translate-y-2")}}),Ot=zt,Mt=(n("a574"),Object(c["a"])(Ot,gt,xt,!1,null,"2d18e012",null)),_t=Mt.exports,Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex pr-10"},[n("v-popover",{attrs:{disabled:t.disabledColor,offset:"16"}},[n("VIconBtn",{attrs:{disabled:t.disabledColor,title:"颜色",color:t.color,name:"color"}}),n("template",{slot:"popover"},[n("CompactPicker",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],2)],1)},Et=[],It=n("c345"),Lt={components:{VIconBtn:At,CompactPicker:It["Compact"]},data:function(){return{color:"#000000"}},computed:Object(vt["a"])(Object(vt["a"])({},Object(f["b"])(["toolName"])),{},{toolArgs:function(){return this.$store.state[this.toolName+"Args"]||{}},disabledColor:function(){return null===this.toolName||"eraser"===this.toolName}}),watch:{toolName:function(){this.toolArgs.color&&(this.color=this.toolArgs.color)},color:function(){this.toolArgs.color&&this.$store.commit("setArgs",{toolName:this.toolName,color:this.color.hex8})}}},Dt=Lt,Nt=Object(c["a"])(Dt,Tt,Et,!1,null,"2169a79e",null),Pt=Nt.exports,Vt=function(t){t||(t=x()());var e=new r.a.Layer({name:t});return r.a.project.addLayer(e),e},Bt=function(){return r.a.project.clear(),m.clear(),r.a.project},Rt=n("9b6a"),Ft={components:{VTools:_t,VIconBtn:At,VPicker:Pt},data:function(){return{history:m}},mounted:function(){Object(Rt["a"])("ctrl+s",this.exportSvg),Object(Rt["a"])("f1",this.help)},methods:{clear:function(){Bt(),Vt()},undo:function(){m.undo()},redo:function(){m.redo()}}},Ut=Ft,Ht=Object(c["a"])(Ut,mt,yt,!1,null,"68e5754c",null),Jt=Ht.exports,qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"test",staticClass:"flex flex-row bg-white rounded-r-2xl"},[n("img",{staticClass:"pl-6",attrs:{src:"https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/line.svg"}}),n("div",{staticClass:"flex flex-col justify-between items-center",on:{click:t.handleClick}},[n("div",{staticClass:"pt-6"},[n("p",{staticClass:"dialogue"},[n("span",[t._v(t._s(t.content))])])]),n("img",{staticClass:"m-12",attrs:{src:"https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/len.svg"},on:{click:function(e){return t.$emit("toggleMagnifier")}}})])])},Xt=[];n("a15b"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861");function Gt(t,e){var n="https://tsn.baidu.com/text2audio",a=e||{},o=t||{},r=document.createElement("audio");a.autoplay&&r.setAttribute("autoplay","autoplay"),a.hidden?r.style.display="none":r.setAttribute("controls","controls"),"undefined"!==typeof a.volume&&(r.volume=a.volume),p(a.onInit)&&a.onInit(r);var s=6e4,i=a.timeout||s,c=new XMLHttpRequest;c.open("POST",n);var l={};for(var o in t)l[o]=t[o];l.cuid=l.cuid||l.tok,l.ctp=1,l.lan=l.lan||"zh",l.aue=l.aue||3;var u=[];for(var h in l)u.push(h+"="+encodeURIComponent(l[h]));var f=new FileReader;c.responseType="blob",c.send(u.join("&"));var d=setTimeout((function(){c.abort(),p(a.onTimeout)&&a.onTimeout()}),i);function p(t){return"[object Function]"===Object.prototype.toString.call(t)}c.onreadystatechange=function(){4==c.readyState&&(clearTimeout(d),200==c.status&&("audio/mp3"===c.response.type&&(document.body.appendChild(r),r.setAttribute("src",URL.createObjectURL(c.response)),a.autoDestory&&(r.onended=function(){document.body.removeChild(r)}),p(a.onSuccess)&&a.onSuccess(r)),"application/json"===c.response.type&&(f.onload=function(){var t=f.result;p(a.onError)&&a.onError(t)},f.readAsText(c.response))))}}function Yt(t){console.log(t),Gt({tex:t,tok:"25.460eac2eaa96064987fb7d42b0bdebd9.315360000.1953616249.282335-24318664",spd:5,pit:5,vol:15,per:103},{volume:.3,autoDestory:!0,timeout:1e4,hidden:!0,autoplay:!0})}var Wt={computed:Object(vt["a"])(Object(vt["a"])({},Object(f["b"])(["drawSession"])),{},{content:function(){return 0===this.drawSession.step?"你好呀，小朋友! 我已经帮你绘制了我的轮廓，你可以通过观察将我补充完整吗？":1===this.drawSession.step?"小朋友! 你可以通过观察画出我的样子吗？比如我的花瓣，我的叶子等等。":2===this.drawSession.step?"小朋友! 你可以给我涂上颜色和画出纹理吗？如果周围安全的话，试着摸摸看！":3===this.drawSession.step?"小朋友! 你可以观察周围环境并丰富你的画面吗？有没有其他植物或者小昆虫？":""}}),methods:{handleClick:function(t){this.$emit("click",t)}},watch:{content:function(t){Yt(t)}},mounted:function(){this.$refs.test.click(),Yt("你好呀，小朋友! 我已经帮你绘制了我的轮廓，你可以通过观察将我补充完整吗？")}},Zt=Wt,Qt=(n("2eab"),Object(c["a"])(Zt,qt,Xt,!1,null,"19eafdda",null)),Kt=Qt.exports,te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-wrapper filter drop-shadow-md"},[n("p",{staticClass:"content"},[n("span",[t._v(t._s(t.content))])])])},ee=[],ne={computed:Object(vt["a"])(Object(vt["a"])({},Object(f["b"])(["drawSession"])),{},{content:function(){var t="";return 0===this.drawSession.step||1===this.drawSession.step?t="我是杜鹃花，一般在春季开花，每簇花2到6朵，花冠漏斗形。叶革质，常集生枝端，卵形、椭圆状卵形或倒卵形或倒卵形至倒披针形。":2===this.drawSession.step?t="我有红、淡红、杏红、雪青、白色等不同颜色的品种，花色繁茂艳丽。我的花冠上往往会有一些斑点。我的分枝多而纤细，密被亮棕褐色扁平糙伏毛。":3===this.drawSession.step&&(t="我主要生活在亚洲，常出现在山地疏灌丛或松林下，周围会有很多绿叶，也会有一些小昆虫会出现在我的身边。"),this.$store.commit("setDescription",t),t}})},ae=ne,oe=(n("16ed"),Object(c["a"])(ae,te,ee,!1,null,"7a803a34",null)),re=oe.exports,se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:t.handleClick}},[t._m(0)])},ie=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",[n("img",{attrs:{src:"https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/next.svg"}})])}],ce={methods:{handleClick:function(t){this.$store.commit("setStep"),this.$emit("click",t)}}},le=ce,ue=Object(c["a"])(le,se,ie,!1,null,"6424c3d4",null),he=ue.exports,fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:t.handleClick}},[t._m(0)])},de=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"transition duration-500 ease-in-out transform hover:-translate-y-3"},[n("img",{attrs:{src:"https://raw.githubusercontent.com/chaochaooo/Bio_Sketchbook/main/public/assets/svg/trump.svg"}})])}],pe={computed:Object(vt["a"])({},Object(f["b"])(["drawSession"])),methods:{handleClick:function(t){Yt(this.drawSession.description),this.$emit("click",t)}}},ve=pe,me=Object(c["a"])(ve,fe,de,!1,null,"62fd5933",null),ye=me.exports,ge=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-48 h-48 overflow-hidden",attrs:{id:"camera"},on:{click:t.handleClick}},[n("video",{ref:"video",staticClass:"video absolute right-0 top-0 object-cover",attrs:{id:"video",playsinline:"",autoplay:""}})])},xe=[],we={data:function(){return{videoElement:""}},methods:{errorHandler:function(t){console.log("navigator.getUserMedia error: ",t)},gotStream:function(t){return window.stream=t,this.videoElement.srcObject=t,navigator.mediaDevices.enumerateDevices()},start:function(){window.stream&&window.stream.getTracks().forEach((function(t){t.stop()}));var t={video:{facingMode:"environment"}};navigator.mediaDevices.getUserMedia(t).then(this.gotStream).catch(this.errorHandler)},handleClick:function(t){this.$emit("click",t)}},mounted:function(){this.videoElement=this.$refs.video,navigator.mediaDevices.enumerateDevices().catch(this.errorHandler),this.start()}},be=we,ke=(n("f9d4"),Object(c["a"])(be,ge,xe,!1,null,"68bd7f1d",null)),Ce=ke.exports,Se=function(t){Object(Rt["a"])("b",(function(){return Q.commit("setTool","brush")})),Object(Rt["a"])("p",(function(){return Q.commit("setTool","pencil")})),Object(Rt["a"])("e",(function(){return Q.commit("setTool","eraser")})),Object(Rt["a"])("a",(function(){return Q.commit("setTool","select")})),Object(Rt["a"])("ctrl+z",(function(){return m.undo()})),Object(Rt["a"])("ctrl+shift+z",(function(){return m.redo()})),Object(Rt["a"])("ctrl+q",(function(){Bt(),Vt()}))},Ae=function(t){r.a.setup(t.canvas),r.a.tool=null,Se(t),document.getElementById("canvas").addEventListener("wheel",(function(e){t.vdrawArgs.zoom=r.a.view.zoom})),r.a.project.importJSON(window.localStorage.vdarw||[]),t.vdrawArgs.size=r.a.view.size,t.vdrawArgs.zoom=r.a.view.zoom,t.isInit=!0},je=(n("c19f"),n("ace4"),n("fd87"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),function(){function t(t,e){this.x=t,this.y=e}function e(t,e){this.w=t,this.h=e,this.size=t*e,this.arraybuffer=new ArrayBuffer(this.size),this.data=new Int8Array(this.arraybuffer)}function n(){this.area=0,this.len=0,this.curve={},this.pt=[],this.minX=1e5,this.minY=1e5,this.maxX=-1,this.maxY=-1}function a(t){this.n=t,this.tag=new Array(t),this.c=new Array(3*t),this.alphaCurve=0,this.vertex=new Array(t),this.alpha=new Array(t),this.alpha0=new Array(t),this.beta=new Array(t)}t.prototype.copy=function(){return new t(this.x,this.y)},e.prototype.at=function(t,e){return t>=0&&t<this.w&&e>=0&&e<this.h&&1===this.data[this.w*e+t]},e.prototype.index=function(e){var n=new t;return n.y=Math.floor(e/this.w),n.x=e-n.y*this.w,n},e.prototype.flip=function(t,e){this.at(t,e)?this.data[this.w*e+t]=0:this.data[this.w*e+t]=1},e.prototype.copy=function(){var t,n=new e(this.w,this.h);for(t=0;t<this.size;t++)n.data[t]=this.data[t];return n};var o,r=document.createElement("img"),s=document.createElement("canvas"),i=null,c=[],l={isReady:!1,turnpolicy:"minority",turdsize:2,optcurve:!0,alphamax:1,opttolerance:.2};function u(t){l.isReady&&g(),r.file=t;var e=new FileReader;e.onload=function(t){return function(e){t.src=e.target.result}}(r),e.readAsDataURL(t)}function h(t){l.isReady&&g(),r.src=t}function f(t){var e;for(e in t)t.hasOwnProperty(e)&&(l[e]=t[e])}function d(){s.width=r.width,s.height=r.height;var t=s.getContext("2d");t.drawImage(r,0,0)}function p(){var t=s.getContext("2d");i=new e(s.width,s.height);var n,a,o,r=t.getImageData(0,0,i.w,i.h),c=r.data.length;for(n=0,a=0;n<c;n+=4,a++)o=.2126*r.data[n]+.7153*r.data[n+1]+.0721*r.data[n+2],i.data[a]=o<128?1:0;l.isReady=!0}function v(){var e,a=i.copy(),o=new t(0,0);function r(t){var e=a.w*t.y+t.x;while(e<a.size&&1!==a.data[e])e++;return e<a.size&&a.index(e)}function s(t,e){var n,o,r;for(n=2;n<5;n++){for(r=0,o=1-n;o<=n-1;o++)r+=a.at(t+o,e+n-1)?1:-1,r+=a.at(t+n-1,e+o-1)?1:-1,r+=a.at(t+o-1,e-n)?1:-1,r+=a.at(t-n,e+o)?1:-1;if(r>0)return 1;if(r<0)return 0}return 0}function u(e){var o,r=new n,c=e.x,u=e.y,h=0,f=1;r.sign=i.at(e.x,e.y)?"+":"-";while(1){if(r.pt.push(new t(c,u)),c>r.maxX&&(r.maxX=c),c<r.minX&&(r.minX=c),u>r.maxY&&(r.maxY=u),u<r.minY&&(r.minY=u),r.len++,c+=h,u+=f,r.area-=c*f,c===e.x&&u===e.y)break;var d=a.at(c+(h+f-1)/2,u+(f-h-1)/2),p=a.at(c+(h-f-1)/2,u+(f+h-1)/2);p&&!d?"right"===l.turnpolicy||"black"===l.turnpolicy&&"+"===r.sign||"white"===l.turnpolicy&&"-"===r.sign||"majority"===l.turnpolicy&&s(c,u)||"minority"===l.turnpolicy&&!s(c,u)?(o=h,h=-f,f=o):(o=h,h=f,f=-o):p?(o=h,h=-f,f=o):d||(o=h,h=f,f=-o)}return r}function h(t){var e,n,o,r,s,i,c=t.pt[0].y,l=t.len;for(s=1;s<l;s++)if(e=t.pt[s].x,n=t.pt[s].y,n!==c){for(r=c<n?c:n,o=t.maxX,i=e;i<o;i++)a.flip(i,r);c=n}}while(o=r(o))e=u(o),h(e),e.area>l.turdsize&&c.push(e)}function m(){function e(){this.data=[0,0,0,0,0,0,0,0,0]}function n(t,e,n,a,o){this.x=t,this.y=e,this.xy=n,this.x2=a,this.y2=o}function o(t,e){return t>=e?t%e:t>=0?t:e-1-(-1-t)%e}function r(t,e){return t.x*e.y-t.y*e.x}function s(t,e,n){return t<=n?t<=e&&e<n:t<=e||e<n}function i(t){return t>0?1:t<0?-1:0}function u(t,e){var n,a,o,r=new Array(3);for(r[0]=e.x,r[1]=e.y,r[2]=1,o=0,n=0;n<3;n++)for(a=0;a<3;a++)o+=r[n]*t.at(n,a)*r[a];return o}function h(e,n,a){var o=new t;return o.x=n.x+e*(a.x-n.x),o.y=n.y+e*(a.y-n.y),o}function f(e,n){var a=new t;return a.y=i(n.x-e.x),a.x=-i(n.y-e.y),a}function d(t,e){var n=f(t,e);return n.y*(e.x-t.x)-n.x*(e.y-t.y)}function p(t,e,n){var a,o,r,s;return a=e.x-t.x,o=e.y-t.y,r=n.x-t.x,s=n.y-t.y,a*s-r*o}function v(t,e,n,a){var o,r,s,i;return o=e.x-t.x,r=e.y-t.y,s=a.x-n.x,i=a.y-n.y,o*i-s*r}function m(t,e,n){var a,o,r,s;return a=e.x-t.x,o=e.y-t.y,r=n.x-t.x,s=n.y-t.y,a*r+o*s}function y(t,e,n,a){var o,r,s,i;return o=e.x-t.x,r=e.y-t.y,s=a.x-n.x,i=a.y-n.y,o*s+r*i}function g(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))}function x(e,n,a,o,r){var s=1-e,i=new t;return i.x=s*s*s*n.x+s*s*e*3*a.x+e*e*s*3*o.x+e*e*e*r.x,i.y=s*s*s*n.y+s*s*e*3*a.y+e*e*s*3*o.y+e*e*e*r.y,i}function w(t,e,n,a,o,r){var s,i,c,l,u,h,f,d,p,m;return s=v(t,e,o,r),i=v(e,n,o,r),c=v(n,a,o,r),l=s-2*i+c,u=-2*s+2*i,h=s,f=u*u-4*l*h,0===l||f<0?-1:(d=Math.sqrt(f),p=(-u+d)/(2*l),m=(-u-d)/(2*l),p>=0&&p<=1?p:m>=0&&m<=1?m:-1)}function b(t){var e,a,o;t.x0=t.pt[0].x,t.y0=t.pt[0].y,t.sums=[];var r=t.sums;for(r.push(new n(0,0,0,0,0)),e=0;e<t.len;e++)a=t.pt[e].x-t.x0,o=t.pt[e].y-t.y0,r.push(new n(r[e].x+a,r[e].y+o,r[e].xy+a*o,r[e].x2+a*a,r[e].y2+o*o))}function k(e){var n,a=e.len,c=e.pt,l=new Array(a),u=new Array(a),h=new Array(4);e.lon=new Array(a);var f,d,p,v,m,y,g,x,w=[new t,new t],b=new t,k=new t,C=new t,S=0;for(d=a-1;d>=0;d--)c[d].x!=c[S].x&&c[d].y!=c[S].y&&(S=d+1),u[d]=S;for(d=a-1;d>=0;d--){h[0]=h[1]=h[2]=h[3]=0,n=(3+3*(c[o(d+1,a)].x-c[d].x)+(c[o(d+1,a)].y-c[d].y))/2,h[n]++,w[0].x=0,w[0].y=0,w[1].x=0,w[1].y=0,S=u[d],v=d;while(1){if(f=0,n=(3+3*i(c[S].x-c[v].x)+i(c[S].y-c[v].y))/2,h[n]++,h[0]&&h[1]&&h[2]&&h[3]){l[d]=v,f=1;break}if(b.x=c[S].x-c[d].x,b.y=c[S].y-c[d].y,r(w[0],b)<0||r(w[1],b)>0)break;if(Math.abs(b.x)<=1&&Math.abs(b.y)<=1||(k.x=b.x+(b.y>=0&&(b.y>0||b.x<0)?1:-1),k.y=b.y+(b.x<=0&&(b.x<0||b.y<0)?1:-1),r(w[0],k)>=0&&(w[0].x=k.x,w[0].y=k.y),k.x=b.x+(b.y<=0&&(b.y<0||b.x<0)?1:-1),k.y=b.y+(b.x>=0&&(b.x>0||b.y<0)?1:-1),r(w[1],k)<=0&&(w[1].x=k.x,w[1].y=k.y)),v=S,S=u[v],!s(S,d,v))break}0===f&&(C.x=i(c[S].x-c[v].x),C.y=i(c[S].y-c[v].y),b.x=c[v].x-c[d].x,b.y=c[v].y-c[d].y,m=r(w[0],b),y=r(w[0],C),g=r(w[1],b),x=r(w[1],C),p=1e7,y<0&&(p=Math.floor(m/-y)),x>0&&(p=Math.min(p,Math.floor(-g/x))),l[d]=o(v+p,a))}for(p=l[a-1],e.lon[a-1]=p,d=a-2;d>=0;d--)s(d+1,l[d],p)&&(p=l[d]),e.lon[d]=p;for(d=a-1;s(o(d+1,a),p,e.lon[d]);d--)e.lon[d]=p}function C(t){function e(t,e,n){var a,o,r,s,i,c,l,u,h,f,d,p,v,m,y=t.len,g=t.pt,x=t.sums,w=0;return n>=y&&(n-=y,w=1),0===w?(a=x[n+1].x-x[e].x,o=x[n+1].y-x[e].y,s=x[n+1].x2-x[e].x2,r=x[n+1].xy-x[e].xy,i=x[n+1].y2-x[e].y2,c=n+1-e):(a=x[n+1].x-x[e].x+x[y].x,o=x[n+1].y-x[e].y+x[y].y,s=x[n+1].x2-x[e].x2+x[y].x2,r=x[n+1].xy-x[e].xy+x[y].xy,i=x[n+1].y2-x[e].y2+x[y].y2,c=n+1-e+y),d=(g[e].x+g[n].x)/2-g[0].x,p=(g[e].y+g[n].y)/2-g[0].y,m=g[n].x-g[e].x,v=-(g[n].y-g[e].y),l=(s-2*a*d)/c+d*d,u=(r-a*p-o*d)/c+d*p,h=(i-2*o*p)/c+p*p,f=v*v*l+2*v*m*u+m*m*h,Math.sqrt(f)}var n,a,r,s,i,c,l,u=t.len,h=new Array(u+1),f=new Array(u+1),d=new Array(u),p=new Array(u+1),v=new Array(u+1),m=new Array(u+1);for(n=0;n<u;n++)l=o(t.lon[o(n-1,u)]-1,u),l==n&&(l=o(n+1,u)),d[n]=l<n?u:l;for(a=1,n=0;n<u;n++)while(a<=d[n])p[a]=n,a++;for(n=0,a=0;n<u;a++)v[a]=n,n=d[n];for(v[a]=u,r=a,n=u,a=r;a>0;a--)m[a]=n,n=p[n];for(m[0]=0,h[0]=0,a=1;a<=r;a++)for(n=m[a];n<=v[a];n++){for(c=-1,s=v[a-1];s>=p[n];s--)i=e(t,s,n)+h[s],(c<0||i<c)&&(f[n]=s,c=i);h[n]=c}for(t.m=r,t.po=new Array(r),n=u,a=r-1;n>0;a--)n=f[n],t.po[a]=n}function S(n){function r(t,e,n,a,o){var r,s,i,c,l,u,h,f,d,p,v,m=t.len,y=t.sums,g=0;while(n>=m)n-=m,g+=1;while(e>=m)e-=m,g-=1;while(n<0)n+=m,g-=1;while(e<0)e+=m,g+=1;r=y[n+1].x-y[e].x+g*y[m].x,s=y[n+1].y-y[e].y+g*y[m].y,i=y[n+1].x2-y[e].x2+g*y[m].x2,c=y[n+1].xy-y[e].xy+g*y[m].xy,l=y[n+1].y2-y[e].y2+g*y[m].y2,u=n+1-e+g*m,a.x=r/u,a.y=s/u,h=(i-r*r/u)/u,f=(c-r*s/u)/u,d=(l-s*s/u)/u,p=(h+d+Math.sqrt((h-d)*(h-d)+4*f*f))/2,h-=p,d-=p,Math.abs(h)>=Math.abs(d)?(v=Math.sqrt(h*h+f*f),0!==v&&(o.x=-f/v,o.y=h/v)):(v=Math.sqrt(d*d+f*f),0!==v&&(o.x=-d/v,o.y=f/v)),0===v&&(o.x=o.y=0)}var s,i,c,l,h,f,d,p,v,m,y,g,x,w,b,k=n.m,C=n.po,S=n.len,A=n.pt,j=n.x0,$=n.y0,z=new Array(k),O=new Array(k),M=new Array(k),_=new Array(3),T=new t;for(n.curve=new a(k),i=0;i<k;i++)c=C[o(i+1,k)],c=o(c-C[i],S)+C[i],z[i]=new t,O[i]=new t,r(n,C[i],c,z[i],O[i]);for(i=0;i<k;i++)if(M[i]=new e,s=O[i].x*O[i].x+O[i].y*O[i].y,0===s)for(c=0;c<3;c++)for(l=0;l<3;l++)M[i].data[3*c+l]=0;else for(_[0]=O[i].y,_[1]=-O[i].x,_[2]=-_[1]*z[i].y-_[0]*z[i].x,h=0;h<3;h++)for(l=0;l<3;l++)M[i].data[3*h+l]=_[h]*_[l]/s;for(i=0;i<k;i++){for(f=new e,d=new t,T.x=A[C[i]].x-j,T.y=A[C[i]].y-$,c=o(i-1,k),h=0;h<3;h++)for(l=0;l<3;l++)f.data[3*h+l]=M[c].at(h,l)+M[i].at(h,l);while(1){if(m=f.at(0,0)*f.at(1,1)-f.at(0,1)*f.at(1,0),0!==m){d.x=(-f.at(0,2)*f.at(1,1)+f.at(1,2)*f.at(0,1))/m,d.y=(f.at(0,2)*f.at(1,0)-f.at(1,2)*f.at(0,0))/m;break}for(f.at(0,0)>f.at(1,1)?(_[0]=-f.at(0,1),_[1]=f.at(0,0)):f.at(1,1)?(_[0]=-f.at(1,1),_[1]=f.at(1,0)):(_[0]=1,_[1]=0),s=_[0]*_[0]+_[1]*_[1],_[2]=-_[1]*T.y-_[0]*T.x,h=0;h<3;h++)for(l=0;l<3;l++)f.data[3*h+l]+=_[h]*_[l]/s}if(p=Math.abs(d.x-T.x),v=Math.abs(d.y-T.y),p<=.5&&v<=.5)n.curve.vertex[i]=new t(d.x+j,d.y+$);else{if(y=u(f,T),x=T.x,w=T.y,0!==f.at(0,0))for(b=0;b<2;b++)d.y=T.y-.5+b,d.x=-(f.at(0,1)*d.y+f.at(0,2))/f.at(0,0),p=Math.abs(d.x-T.x),g=u(f,d),p<=.5&&g<y&&(y=g,x=d.x,w=d.y);if(0!==f.at(1,1))for(b=0;b<2;b++)d.x=T.x-.5+b,d.y=-(f.at(1,0)*d.x+f.at(1,2))/f.at(1,1),v=Math.abs(d.y-T.y),g=u(f,d),v<=.5&&g<y&&(y=g,x=d.x,w=d.y);for(h=0;h<2;h++)for(l=0;l<2;l++)d.x=T.x-.5+h,d.y=T.y-.5+l,g=u(f,d),g<y&&(y=g,x=d.x,w=d.y);n.curve.vertex[i]=new t(x+j,w+$)}}}function A(t){var e,n,a,o=t.curve,r=o.n,s=o.vertex;for(e=0,n=r-1;e<n;e++,n--)a=s[e],s[e]=s[n],s[n]=a}function j(t){var e,n,a,r,s,i,c,u,f,v=t.curve.n,m=t.curve;for(e=0;e<v;e++)n=o(e+1,v),a=o(e+2,v),f=h(.5,m.vertex[a],m.vertex[n]),s=d(m.vertex[e],m.vertex[a]),0!==s?(r=p(m.vertex[e],m.vertex[n],m.vertex[a])/s,r=Math.abs(r),i=r>1?1-1/r:0,i/=.75):i=4/3,m.alpha0[n]=i,i>=l.alphamax?(m.tag[n]="CORNER",m.c[3*n+1]=m.vertex[n],m.c[3*n+2]=f):(i<.55?i=.55:i>1&&(i=1),c=h(.5+.5*i,m.vertex[e],m.vertex[n]),u=h(.5+.5*i,m.vertex[a],m.vertex[n]),m.tag[n]="CURVE",m.c[3*n+0]=c,m.c[3*n+1]=u,m.c[3*n+2]=f),m.alpha[n]=i,m.beta[n]=.5;m.alphacurve=1}function $(e){function n(){this.pen=0,this.c=[new t,new t],this.t=0,this.s=0,this.alpha=0}function r(t,e,n,a,r,s,c){var l,u,f,d,b,k,C,S,A,j,$,z,O,M,_,T,E,I,L,D,N,P,V,B=t.curve.n,R=t.curve,F=R.vertex;if(e==n)return 1;if(l=e,b=o(e+1,B),u=o(l+1,B),d=s[u],0===d)return 1;for(S=g(F[e],F[b]),l=u;l!=n;l=u){if(u=o(l+1,B),f=o(l+2,B),s[u]!=d)return 1;if(i(v(F[e],F[b],F[u],F[f]))!=d)return 1;if(y(F[e],F[b],F[u],F[f])<S*g(F[u],F[f])*-.999847695156)return 1}if($=R.c[3*o(e,B)+2].copy(),z=F[o(e+1,B)].copy(),O=F[o(n,B)].copy(),M=R.c[3*o(n,B)+2].copy(),k=c[n]-c[e],k-=p(F[0],R.c[3*e+2],R.c[3*n+2])/2,e>=n&&(k+=c[B]),I=p($,z,O),L=p($,z,M),D=p($,O,M),N=I+D-L,L==I)return 1;if(V=D/(D-N),P=L/(L-I),T=L*V/2,0===T)return 1;for(E=k/T,C=2-Math.sqrt(4-E/.3),a.c[0]=h(V*C,$,z),a.c[1]=h(P*C,M,O),a.alpha=C,a.t=V,a.s=P,z=a.c[0].copy(),O=a.c[1].copy(),a.pen=0,l=o(e+1,B);l!=n;l=u){if(u=o(l+1,B),V=w($,z,O,M,F[l],F[u]),V<-.5)return 1;if(_=x(V,$,z,O,M),S=g(F[l],F[u]),0===S)return 1;if(A=p(F[l],F[u],_)/S,Math.abs(A)>r)return 1;if(m(F[l],F[u],_)<0||m(F[u],F[l],_)<0)return 1;a.pen+=A*A}for(l=e;l!=n;l=u){if(u=o(l+1,B),V=w($,z,O,M,R.c[3*l+2],R.c[3*u+2]),V<-.5)return 1;if(_=x(V,$,z,O,M),S=g(R.c[3*l+2],R.c[3*u+2]),0===S)return 1;if(A=p(R.c[3*l+2],R.c[3*u+2],_)/S,j=p(R.c[3*l+2],R.c[3*u+2],F[u])/S,j*=.75*R.alpha[u],j<0&&(A=-A,j=-j),A<j-r)return 1;A<j&&(a.pen+=(A-j)*(A-j))}return 0}var s,c,u,f,d,b,k,C,S,A,j,$=e.curve,z=$.n,O=$.vertex,M=new Array(z+1),_=new Array(z+1),T=new Array(z+1),E=new Array(z+1),I=new n,L=new Array(z),D=new Array(z+1);for(c=0;c<z;c++)"CURVE"==$.tag[c]?L[c]=i(p(O[o(c-1,z)],O[c],O[o(c+1,z)])):L[c]=0;for(k=0,D[0]=0,d=$.vertex[0],c=0;c<z;c++)b=o(c+1,z),"CURVE"==$.tag[b]&&(C=$.alpha[b],k+=.3*C*(4-C)*p($.c[3*c+2],O[b],$.c[3*b+2])/2,k+=p(d,$.c[3*c+2],$.c[3*b+2])/2),D[c+1]=k;for(M[0]=-1,_[0]=0,T[0]=0,u=1;u<=z;u++)for(M[u]=u-1,_[u]=_[u-1],T[u]=T[u-1]+1,c=u-2;c>=0;c--){if(f=r(e,c,o(u,z),I,l.opttolerance,L,D),f)break;(T[u]>T[c]+1||T[u]==T[c]+1&&_[u]>_[c]+I.pen)&&(M[u]=c,_[u]=_[c]+I.pen,T[u]=T[c]+1,E[u]=I,I=new n)}for(s=T[z],S=new a(s),A=new Array(s),j=new Array(s),u=z,c=s-1;c>=0;c--)M[u]==u-1?(S.tag[c]=$.tag[o(u,z)],S.c[3*c+0]=$.c[3*o(u,z)+0],S.c[3*c+1]=$.c[3*o(u,z)+1],S.c[3*c+2]=$.c[3*o(u,z)+2],S.vertex[c]=$.vertex[o(u,z)],S.alpha[c]=$.alpha[o(u,z)],S.alpha0[c]=$.alpha0[o(u,z)],S.beta[c]=$.beta[o(u,z)],A[c]=j[c]=1):(S.tag[c]="CURVE",S.c[3*c+0]=E[u].c[0],S.c[3*c+1]=E[u].c[1],S.c[3*c+2]=$.c[3*o(u,z)+2],S.vertex[c]=h(E[u].s,$.c[3*o(u,z)+2],O[o(u,z)]),S.alpha[c]=E[u].alpha,S.alpha0[c]=E[u].alpha,A[c]=E[u].s,j[c]=E[u].t),u=M[u];for(c=0;c<s;c++)b=o(c+1,s),S.beta[c]=A[c]/(A[c]+j[b]);S.alphacurve=1,e.curve=S}e.prototype.at=function(t,e){return this.data[3*t+e]};for(var z=0;z<c.length;z++){var O=c[z];b(O),k(O),C(O),S(O),"-"===O.sign&&A(O),j(O),l.optcurve&&$(O)}}function y(t){t&&(o=t),l.isReady?(v(),m(),o(),o=null):setTimeout(y,100)}function g(){i=null,c=[],o=null,l.isReady=!1}function x(t,e){function n(e){function n(n){var a="C "+(e.c[3*n+0].x*t).toFixed(3)+" "+(e.c[3*n+0].y*t).toFixed(3)+",";return a+=(e.c[3*n+1].x*t).toFixed(3)+" "+(e.c[3*n+1].y*t).toFixed(3)+",",a+=(e.c[3*n+2].x*t).toFixed(3)+" "+(e.c[3*n+2].y*t).toFixed(3)+" ",a}function a(n){var a="L "+(e.c[3*n+1].x*t).toFixed(3)+" "+(e.c[3*n+1].y*t).toFixed(3)+" ";return a+=(e.c[3*n+2].x*t).toFixed(3)+" "+(e.c[3*n+2].y*t).toFixed(3)+" ",a}var o,r=e.n,s="M"+(e.c[3*(r-1)+2].x*t).toFixed(3)+" "+(e.c[3*(r-1)+2].y*t).toFixed(3)+" ";for(o=0;o<r;o++)"CURVE"===e.tag[o]?s+=n(o):"CORNER"===e.tag[o]&&(s+=a(o));return s}var a,o,r,s,l,u=i.w*t,h=i.h*t,f=c.length,d='<svg id="svg" version="1.1" width="'+u+'" height="'+h+'" xmlns="http://www.w3.org/2000/svg">';for(d+='<path d="',o=0;o<f;o++)a=c[o].curve,d+=n(a);return"curve"===e?(r="black",s="none",l=""):(r="none",s="black",l=' fill-rule="evenodd"'),d+='" stroke="'+r+'" fill="'+s+'"'+l+"/></svg>",d}return r.onload=function(){d(),p()},{loadImageFromFile:u,loadImageFromUrl:h,setParameter:f,process:y,getSVG:x,img:r}}),$e={components:{VHeader:Jt,VDialogue:Kt,VContent:re,VNext:he,VTrump:ye,VMagnifier:Ce},data:function(){return{isInit:!1,vdrawArgs:{size:{width:0,height:0},zoom:0},svg:"",Potrace:je()}},methods:{toggleSideBar:function(){this.$refs["sidebar"].$el.classList.toggle("-translate-x-44")},toggleMagnifier:function(){this.$refs["magnifier"].$el.classList.toggle("-translate-y-64")},handleFiles:function(){this.Potrace.loadImageFromUrl(this.image);var t=this;this.Potrace.process((function(){var e=document.createElement("div");e.innerHTML=t.Potrace.getSVG(1);var n=e.firstChild,a=n.getElementsByTagName("path"),o=([].forEach.call(a,(function(t){t.setAttribute("fill","#D3D3D3")})),btoa((new XMLSerializer).serializeToString(n)));t.svg="data:image/svg+xml;base64,"+o}))}},computed:Object(vt["a"])(Object(vt["a"])({},Object(f["b"])(["image"])),{},{isDefault:function(){return""===this.image},getBg:function(){var t="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNScgaGVpZ2h0PScxNSc+CiAgPHJlY3Qgd2lkdGg9JzUwJyBoZWlnaHQ9JzUwJyBmaWxsPSIjRjlGOUY5IiAvPgogIDxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIwLjgiIGZpbGw9IiNDQUNBQ0IiLz4KPC9zdmc+')";return"url(".concat(this.svg,"), ").concat(t)},cursor:function(){var t=this.$store.state.toolName;return null===t||"brush"===t?"cursor: auto;":"select"!==t?"cursor: none;":"cursor: auto;"},canvasBg:function(){return"background-color: ".concat(this.$store.state.canvasArgs.bgColor,"fa;")},canvas:function(){return this.$refs.canvas}}),mounted:function(){""!==this.image&&this.handleFiles(),Ae(this),this.$store.commit("setTool","pencil")},filters:{toFixed:function(t){return t.toFixed(2)}}},ze=$e,Oe=(n("dcd9"),Object(c["a"])(ze,dt,pt,!1,null,null,null)),Me=Oe.exports;a["default"].use(tt["a"]);var _e=[{path:"/",name:"Home",component:ft},{path:"/canvas",name:"Canvas",component:Me}],Te=new tt["a"]({mode:"hash",base:"",routes:_e}),Ee=Te;r.a.install(window),a["default"].prototype.$store=Q,a["default"].config.productionTip=!1,a["default"].use(K["a"]);e["default"]=new a["default"]({store:Q,router:Ee,render:function(t){return t(h)}}).$mount("#app")},"6a89":function(t,e,n){},"88d0":function(t,e,n){},"925d":function(t,e,n){},a026:function(t,e,n){},a574:function(t,e,n){"use strict";var a=n("88d0"),o=n.n(a);o.a},d3d9:function(t,e,n){},dcd9:function(t,e,n){"use strict";var a=n("925d"),o=n.n(a);o.a},f9d4:function(t,e,n){"use strict";var a=n("d3d9"),o=n.n(a);o.a}});
//# sourceMappingURL=app.89265c60.js.map