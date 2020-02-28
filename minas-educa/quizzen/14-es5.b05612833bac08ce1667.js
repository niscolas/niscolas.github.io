function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"8OGi":function(n,t,e){var i,l;void 0===(l="function"==typeof(i=function(){var n=function(n){return n.reduce((function(n,t){return 2*n+t}),0)},t=function(n){for(var t=[],e=7;e>=0;e--)t.push(!!(n&1<<e));return t},e=function(n){this.data=n,this.len=this.data.length,this.pos=0,this.readByte=function(){if(this.pos>=this.data.length)throw new Error("Attempted to read past end of stream.");return n instanceof Uint8Array?n[this.pos++]:255&n.charCodeAt(this.pos++)},this.readBytes=function(n){for(var t=[],e=0;e<n;e++)t.push(this.readByte());return t},this.read=function(n){for(var t="",e=0;e<n;e++)t+=String.fromCharCode(this.readByte());return t},this.readUnsigned=function(){var n=this.readBytes(2);return(n[1]<<8)+n[0]}};return function(i){var l,o,r={vp_l:0,vp_t:0,vp_w:null,vp_h:null,c_w:null,c_h:null};for(var a in i)r[a]=i[a];r.vp_w&&r.vp_h&&(r.is_vp=!0);var u=null,s=!1,c=null,d=null,p=null,h=null,f=null,g=null,b=null,m=!0,y=!1,v=[],_=[],w=r.gif;void 0===r.auto_play&&(r.auto_play=!w.getAttribute("rel:auto_play")||"1"==w.getAttribute("rel:auto_play"));var C,x,k,B,T=r.hasOwnProperty("on_end")?r.on_end:null,O=r.hasOwnProperty("loop_delay")?r.loop_delay:0,P=r.hasOwnProperty("loop_mode")?r.loop_mode:"auto",S=!r.hasOwnProperty("draw_while_loading")||r.draw_while_loading,I=!!S&&(!r.hasOwnProperty("show_progress_bar")||r.show_progress_bar),q=r.hasOwnProperty("progressbar_height")?r.progressbar_height:25,z=r.hasOwnProperty("progressbar_background_color")?r.progressbar_background_color:"rgba(255,255,255,0.4)",A=r.hasOwnProperty("progressbar_foreground_color")?r.progressbar_foreground_color:"rgba(255,0,22,.8)",E=function(){c=null,d=null,f=p,p=null,g=null},F=function(){try{!function(e,i){i||(i={});var l=function(n){for(var t=[],i=0;i<n;i++)t.push(e.readBytes(3));return t},o=function(){var n,t;t="";do{n=e.readByte(),t+=e.read(n)}while(0!==n);return t};!function(){var o={};if(o.sig=e.read(3),o.ver=e.read(3),"GIF"!==o.sig)throw new Error("Not a GIF file.");o.width=e.readUnsigned(),o.height=e.readUnsigned();var r=t(e.readByte());o.gctFlag=r.shift(),o.colorRes=n(r.splice(0,3)),o.sorted=r.shift(),o.gctSize=n(r.splice(0,3)),o.bgColor=e.readByte(),o.pixelAspectRatio=e.readByte(),o.gctFlag&&(o.gct=l(1<<o.gctSize+1)),i.hdr&&i.hdr(o)}(),setTimeout((function r(){var a={};switch(a.sentinel=e.readByte(),String.fromCharCode(a.sentinel)){case"!":a.type="ext",function(l){switch(l.label=e.readByte(),l.label){case 249:l.extType="gce",function(l){e.readByte();var o=t(e.readByte());l.reserved=o.splice(0,3),l.disposalMethod=n(o.splice(0,3)),l.userInput=o.shift(),l.transparencyGiven=o.shift(),l.delayTime=e.readUnsigned(),l.transparencyIndex=e.readByte(),l.terminator=e.readByte(),i.gce&&i.gce(l)}(l);break;case 254:l.extType="com",function(n){n.comment=o(),i.com&&i.com(n)}(l);break;case 1:l.extType="pte",function(n){e.readByte(),n.ptHeader=e.readBytes(12),n.ptData=o(),i.pte&&i.pte(n)}(l);break;case 255:l.extType="app",function(n){switch(e.readByte(),n.identifier=e.read(8),n.authCode=e.read(3),n.identifier){case"NETSCAPE":!function(n){e.readByte(),n.unknown=e.readByte(),n.iterations=e.readUnsigned(),n.terminator=e.readByte(),i.app&&i.app.NETSCAPE&&i.app.NETSCAPE(n)}(n);break;default:!function(n){n.appData=o(),i.app&&i.app[n.identifier]&&i.app[n.identifier](n)}(n)}}(l);break;default:l.extType="unknown",function(n){n.data=o(),i.unknown&&i.unknown(n)}(l)}}(a);break;case",":a.type="img",function(r){r.leftPos=e.readUnsigned(),r.topPos=e.readUnsigned(),r.width=e.readUnsigned(),r.height=e.readUnsigned();var a=t(e.readByte());r.lctFlag=a.shift(),r.interlaced=a.shift(),r.sorted=a.shift(),r.reserved=a.splice(0,2),r.lctSize=n(a.splice(0,3)),r.lctFlag&&(r.lct=l(1<<r.lctSize+1)),r.lzwMinCodeSize=e.readByte();var u=o();r.pixels=function(n,t){for(var e,i,l=0,o=function(n){for(var e=0,i=0;i<n;i++)t.charCodeAt(l>>3)&1<<(7&l)&&(e|=1<<i),l++;return e},r=[],a=1<<n,u=a+1,s=n+1,c=[],d=function(){c=[],s=n+1;for(var t=0;t<a;t++)c[t]=[t];c[a]=[],c[u]=null};;)if(i=e,(e=o(s))!==a){if(e===u)break;if(e<c.length)i!==a&&c.push(c[i].concat(c[e][0]));else{if(e!==c.length)throw new Error("Invalid LZW code.");c.push(c[i].concat(c[i][0]))}r.push.apply(r,c[e]),c.length===1<<s&&s<12&&s++}else d();return r}(r.lzwMinCodeSize,u),r.interlaced&&(r.pixels=function(n,t){for(var e=new Array(n.length),i=n.length/t,l=function(i,l){var o=n.slice(l*t,(l+1)*t);e.splice.apply(e,[i*t,t].concat(o))},o=[0,4,2,1],r=[8,8,4,2],a=0,u=0;u<4;u++)for(var s=o[u];s<i;s+=r[u])l(s,a),a++;return e}(r.pixels,r.width)),i.img&&i.img(r)}(a);break;case";":a.type="eof",i.eof&&i.eof(a);break;default:throw new Error("Unknown block: 0x"+a.sentinel.toString(16))}"eof"!==a.type&&setTimeout(r,0)}),0)}(l,W)}catch(e){j("parse")}},R=function(n,t){C.width=n*H(),C.height=t*H(),k.style.minWidth=n*H()+"px",B.width=n,B.height=t,B.style.width=n+"px",B.style.height=t+"px",B.getContext("2d").setTransform(1,0,0,1,0,0)},N=function(n,t,e){if(e&&I){var i,l,o,a=q;r.is_vp?y?(l=(r.vp_t+r.vp_h-a)/H(),a/=H(),i=r.vp_l/H()+n/t*(r.vp_w/H()),o=C.width/H()):(l=r.vp_t+r.vp_h-a,a=a,i=r.vp_l+n/t*r.vp_w,o=C.width):(l=(C.height-a)/(y?H():1),i=n/t*C.width/(y?H():1),o=C.width/(y?H():1),a/=y?H():1),x.fillStyle=z,x.fillRect(i,l,o-i,a),x.fillStyle=A,x.fillRect(0,l,i,a)}},j=function(n){u=n,o={width:w.width,height:w.height},v=[],x.fillStyle="black",x.fillRect(0,0,r.c_w?r.c_w:o.width,r.c_h?r.c_h:o.height),x.strokeStyle="red",x.lineWidth=3,x.moveTo(0,0),x.lineTo(r.c_w?r.c_w:o.width,r.c_h?r.c_h:o.height),x.moveTo(0,r.c_h?r.c_h:o.height),x.lineTo(r.c_w?r.c_w:o.width,0),x.stroke()},U=function(){g&&(v.push({data:g.getImageData(0,0,o.width,o.height),delay:d}),_.push({x:0,y:0}))},L=function(){var n,t,e,i=-1,l=0,o=function(n){i+=n,s()},a=(n=!1,t=function(){null!==T&&T(w),l++,!1!==P||l<0?e():(n=!1,m=!1)},e=function(){if(n=m){o(1);var l=10*v[i].delay;l||(l=100),0==(i+1+v.length)%v.length?(l+=O,setTimeout(t,l)):setTimeout(e,l)}},function(){n||setTimeout(e,0)}),s=function(){var n;(i=parseInt(i,10))>v.length-1&&(i=0),i<0&&(i=0),n=_[i],B.getContext("2d").putImageData(v[i].data,n.x,n.y),x.globalCompositeOperation="copy",x.drawImage(B,0,0)};return{init:function(){u||(r.c_w&&r.c_h||x.scale(H(),H()),r.auto_play?a():(i=0,s()))},step:a,play:function(){m=!0,a()},pause:function(){m=!1},playing:m,move_relative:o,current_frame:function(){return i},length:function(){return v.length},move_to:function(n){i=n,s()}}}(),G=function(n){N(l.pos,l.data.length,n)},D=function(){},M=function(n,t){return function(e){n(e),G(t)}},W={hdr:M((function(n){R((o=n).width,o.height)})),gce:M((function(n){U(),E(),c=n.transparencyGiven?n.transparencyIndex:null,d=n.delayTime,p=n.disposalMethod})),com:M(D),app:{NETSCAPE:M(D)},img:M((function(n){g||(g=B.getContext("2d"));var t=v.length,e=n.lctFlag?n.lct:o.gct;t>0&&(3===f?null!==h?g.putImageData(v[h].data,0,0):g.clearRect(b.leftPos,b.topPos,b.width,b.height):h=t-1,2===f&&g.clearRect(b.leftPos,b.topPos,b.width,b.height));var i=g.getImageData(n.leftPos,n.topPos,n.width,n.height);n.pixels.forEach((function(n,t){n!==c&&(i.data[4*t+0]=e[n][0],i.data[4*t+1]=e[n][1],i.data[4*t+2]=e[n][2],i.data[4*t+3]=255)})),g.putImageData(i,n.leftPos,n.topPos),y||(x.scale(H(),H()),y=!0),S&&(x.drawImage(B,0,0),S=r.auto_play),b=n}),!0),eof:function(n){U(),G(!1),r.c_w&&r.c_h||(C.width=o.width*H(),C.height=o.height*H()),L.init(),s=!1,V&&V(w)}},Q=function(){var n=w.parentNode,t=document.createElement("div");C=document.createElement("canvas"),x=C.getContext("2d"),k=document.createElement("div"),B=document.createElement("canvas"),t.width=C.width=w.width,t.height=C.height=w.height,k.style.minWidth=w.width+"px",t.className="jsgif",k.className="jsgif_toolbar",t.appendChild(C),t.appendChild(k),n.insertBefore(t,w),n.removeChild(w),r.c_w&&r.c_h&&R(r.c_w,r.c_h),J=!0},H=function(){return r.max_width&&o&&o.width>r.max_width?r.max_width/o.width:1},J=!1,V=!1,K=function(n){return!s&&(V=n||!1,s=!0,v=[],E(),h=null,f=null,g=null,b=null,!0)},Z=function(){return v.reduce((function(n,t){return n+t.delay}),0)};return{play:L.play,pause:L.pause,move_relative:L.move_relative,move_to:L.move_to,get_playing:function(){return m},get_canvas:function(){return C},get_canvas_scale:function(){return H()},get_loading:function(){return s},get_auto_play:function(){return r.auto_play},get_length:function(){return L.length()},get_frames:function(){return v},get_duration:function(){return Z()},get_duration_ms:function(){return 10*Z()},get_current_frame:function(){return L.current_frame()},load_url:function(n,t){if(K(t)){var i=new XMLHttpRequest;i.open("GET",n,!0),"overrideMimeType"in i?i.overrideMimeType("text/plain; charset=x-user-defined"):"responseType"in i?i.responseType="arraybuffer":i.setRequestHeader("Accept-Charset","x-user-defined"),i.onloadstart=function(){J||Q()},i.onload=function(n){200!=this.status&&j("xhr - response"),"response"in this||(this.response=new VBArray(this.responseText).toArray().map(String.fromCharCode).join(""));var t=this.response;t.toString().indexOf("ArrayBuffer")>0&&(t=new Uint8Array(t)),l=new e(t),setTimeout(F,0)},i.onprogress=function(n){n.lengthComputable&&N(n.loaded,n.total,!0)},i.onerror=function(){j("xhr")},i.send()}},load:function(n){this.load_url(w.getAttribute("rel:animated_src")||w.src,n)},load_raw:function(n,t){K(t)&&(J||Q(),l=new e(n),setTimeout(F,0))},set_frame_offset:function(n,t){_[n]?(void 0!==t.x&&(_[n].x=t.x),void 0!==t.y&&(_[n].y=t.y)):_[n]=t}}}})?i.apply(t,[]):i)||(n.exports=l)},G26R:function(n,t,e){"use strict";e.r(t);var i=e("8Y7J"),l=function n(){_classCallCheck(this,n)},o=e("pMnS"),r=e("oBZk"),a=e("ZZ/e"),u=e("SVse"),s=e("mrSG"),c=e("8OGi"),d=e("0/Bg"),p=e("3Nn5"),h=e("pn+4"),f=e("izWX"),g=e("wc7r"),b=function(n){return n[n.JUST_SELECTED=0]="JUST_SELECTED",n[n.RIGHT_OPTION=1]="RIGHT_OPTION",n[n.WRONG_OPTION=2]="WRONG_OPTION",n}({}),m=function(){function n(t,e,i,l,o){var r=this;_classCallCheck(this,n),this.route=t,this.mediaService=e,this.navCtrl=i,this.quizService=l,this.viewUtils=o,this.questions=[],this.lastBttClicked=void 0,this.answers=[],this.buttonsColors=[],this.audioUrl="",this.bgImgUrl="",this.gifUrl="",this.quizId="",this.actualTheme=window.matchMedia("(prefers-color-scheme: light)")?"light":"dark",this.loadQuizData(),this.mediaService.getAnimationUrl(d.a.PARABENS,!0).subscribe((function(n){r.gifUrl=n[0],r.audioUrl=n[1],r.audioPlayer=new Audio(r.audioUrl)}))}return _createClass(n,[{key:"ngOnInit",value:function(){this.setupGifPlayer()}},{key:"loadQuizData",value:function(){var n=this;this.quiz=f.a.empty(),this.quizId=this.route.snapshot.paramMap.get("id"),this.quizService.getById(this.quizId).subscribe((function(t){n.quiz=t,n.bgImgUrl=n.quiz.bg_img_path,n.quiz.questions.map((function(n){Object(g.b)(n.options)})),n.questions=n.quiz.questions,n.questions.map((function(t,e){n.buttonsColors[e]=[],t.options.map((function(t,i){n.buttonsColors[e][i]=n.actualTheme}))}))}))}},{key:"setupGifPlayer",value:function(){var n=this;console.log("setting up gif player");var t=document.querySelector("div.gif-container>img");this.gifPlayer=new c({gif:t,progressbar_height:0,loop_mode:!1,auto_play:0,on_end:function(){return n.slideNextOrFinish()}})}},{key:"onOptionSelected",value:function(n,t){var e=this;this.lastBttClicked={questionIndex:n,optionIndex:t},this.answers[n]=this.isCorrectOption(n,t),this.buttonsColors.map((function(n,t){return n.map((function(n,i){e.buttonsColors[t][i]=e.actualTheme}))})),this.updateButtonColor(n,t,b.JUST_SELECTED)}},{key:"isCorrectOption",value:function(n,t){return this.questions[n].options[t].correct}},{key:"updateButtonColor",value:function(n,t,e){var i=this.actualTheme;switch(e){case b.JUST_SELECTED:i="warning";break;case b.RIGHT_OPTION:i="success";break;case b.WRONG_OPTION:i="danger"}this.buttonsColors[n][t]=i}},{key:"sliderLoaded",value:function(){return s.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.slider.lockSwipes(!0),n.next=3,this.slider.length();case 3:if(n.t0=n.sent,n.t1=1===n.t0,!n.t1){n.next=7;break}this.slider.pager=!1;case 7:case"end":return n.stop()}}),n,this)})))}},{key:"onConfirmSelectedOption",value:function(){return s.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.lastBttClicked?this.showQuestionResult():this.onNoOptionSelected();case 1:case"end":return n.stop()}}),n,this)})))}},{key:"showQuestionResult",value:function(){this.isCorrectOption(this.lastBttClicked.questionIndex,this.lastBttClicked.optionIndex)?this.onRightChoiceConfirmed():this.onWrongChoiceConfirmed()}},{key:"onRightChoiceConfirmed",value:function(){var n=this;this.gifPlayer.load((function(){n.updateButtonColor(n.lastBttClicked.questionIndex,n.lastBttClicked.optionIndex,b.RIGHT_OPTION),n.gifPlayer.play(),n.audioPlayer.play()}))}},{key:"onWrongChoiceConfirmed",value:function(){var n=this,t=this.lastBttClicked.questionIndex;this.updateButtonColor(t,this.lastBttClicked.optionIndex,b.WRONG_OPTION),this.questions[t].options.map((function(e,i){e.correct&&n.updateButtonColor(t,i,b.RIGHT_OPTION)})),setTimeout((function(){return n.slideNextOrFinish()}),1500)}},{key:"onNoOptionSelected",value:function(){this.viewUtils.presentToast("Por favor, selecione uma op\xe7\xe3o antes de Confirmar")}},{key:"slideNextOrFinish",value:function(){return s.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.slider.isEnd();case 2:if(!n.sent){n.next=6;break}this.finishQuiz(),n.next=7;break;case 6:this.slider.lockSwipes(!1),this.slider.slideNext(),this.slider.lockSwipes(!0);case 7:case"end":return n.stop()}}),n,this)})))}},{key:"finishQuiz",value:function(){this.navCtrl.navigateForward("/quiz/".concat(this.quizId,"/play/results"),{state:{quiz:this.quiz,answers:this.answers}})}}]),n}(),y=e("iInd"),v=i.zb({encapsulation:0,styles:[["ion-button[_ngcontent-%COMP%]{font-size:.8em;white-space:pre-wrap;word-wrap:break-word}ion-slides[_ngcontent-%COMP%]{min-height:100%}.gif-container[_ngcontent-%COMP%]{position:absolute;right:25px;top:25px;z-index:2}.gif-container[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{visibility:hidden}.image-background[_ngcontent-%COMP%]{background-repeat:no-repeat;background-position:center;background-attachment:fixed;background-size:cover}.question-container[_ngcontent-%COMP%]{width:90%}"]],data:{}});function _(n){return i.Vb(0,[(n()(),i.Bb(0,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.onOptionSelected(n.parent.context.index,n.context.index)&&i),i}),r.L,r.d)),i.Ab(1,49152,null,0,a.j,[i.j,i.p,i.F],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),i.Tb(2,0,[" "," "]))],(function(n,t){n(t,1,0,t.component.buttonsColors[t.parent.context.index][t.context.index],"block")}),(function(n,t){n(t,2,0,t.context.$implicit.text)}))}function w(n){return i.Vb(0,[(n()(),i.Bb(0,0,null,null,23,"ion-slide",[["class","ion-padding"]],null,null,null,r.kb,r.C)),i.Ab(1,49152,null,0,a.pb,[i.j,i.p,i.F],null,null),(n()(),i.Bb(2,0,null,0,21,"div",[["class","question-container"]],null,null,null,null,null)),(n()(),i.Bb(3,0,null,null,6,"ion-card",[["class","statement"],["color","primary"]],null,null,null,r.R,r.f)),i.Ab(4,49152,null,0,a.l,[i.j,i.p,i.F],{color:[0,"color"]},null),(n()(),i.Bb(5,0,null,0,4,"ion-card-header",[],null,null,null,r.O,r.h)),i.Ab(6,49152,null,0,a.n,[i.j,i.p,i.F],null,null),(n()(),i.Bb(7,0,null,0,2,"ion-card-title",[],null,null,null,r.Q,r.j)),i.Ab(8,49152,null,0,a.p,[i.j,i.p,i.F],null,null),(n()(),i.Tb(9,0,["",""])),(n()(),i.Bb(10,0,null,null,10,"ion-card",[["class","options"],["color","primary"]],null,null,null,r.R,r.f)),i.Ab(11,49152,null,0,a.l,[i.j,i.p,i.F],{color:[0,"color"]},null),(n()(),i.Bb(12,0,null,0,4,"ion-card-header",[],null,null,null,r.O,r.h)),i.Ab(13,49152,null,0,a.n,[i.j,i.p,i.F],null,null),(n()(),i.Bb(14,0,null,0,2,"ion-card-title",[],null,null,null,r.Q,r.j)),i.Ab(15,49152,null,0,a.p,[i.j,i.p,i.F],null,null),(n()(),i.Tb(-1,0,[" Escolha a alternativa correta: "])),(n()(),i.Bb(17,0,null,0,3,"ion-card-content",[],null,null,null,r.N,r.g)),i.Ab(18,49152,null,0,a.m,[i.j,i.p,i.F],null,null),(n()(),i.qb(16777216,null,0,1,null,_)),i.Ab(20,278528,null,0,u.i,[i.W,i.S,i.x],{ngForOf:[0,"ngForOf"]},null),(n()(),i.Bb(21,0,null,null,2,"ion-button",[["class","ion-margin-top"],["color","secondary"],["expand","full"]],null,[[null,"click"]],(function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.onConfirmSelectedOption()&&i),i}),r.L,r.d)),i.Ab(22,49152,null,0,a.j,[i.j,i.p,i.F],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),i.Tb(-1,0,["Confirmar "]))],(function(n,t){n(t,4,0,"primary"),n(t,11,0,"primary"),n(t,20,0,t.context.$implicit.options),n(t,22,0,"secondary","full")}),(function(n,t){n(t,9,0,t.context.$implicit.statement)}))}function C(n){return i.Vb(0,[(n()(),i.Bb(0,0,null,null,6,"ion-slides",[["class","image-background"],["pager","true"]],null,[[null,"ionSlidesDidLoad"]],(function(n,t,e){var i=!0;return"ionSlidesDidLoad"===t&&(i=!1!==n.component.sliderLoaded()&&i),i}),r.lb,r.D)),i.Qb(512,null,u.s,u.t,[i.p,i.y,i.K]),i.Ab(2,278528,null,0,u.m,[u.s],{ngStyle:[0,"ngStyle"]},null),i.Pb(3,{"background-image":0}),i.Ab(4,49152,[[1,4],["slider",4]],0,a.qb,[i.j,i.p,i.F],{pager:[0,"pager"]},null),(n()(),i.qb(16777216,null,0,1,null,w)),i.Ab(6,278528,null,0,u.i,[i.W,i.S,i.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){var e=t.component,i=n(t,3,0,"url("+e.bgImgUrl+")");n(t,2,0,i),n(t,4,0,"true"),n(t,6,0,e.questions)}),null)}function x(n){return i.Vb(0,[i.Rb(671088640,1,{slider:0}),(n()(),i.Bb(1,0,null,null,9,"ion-header",[],null,null,null,r.Y,r.q)),i.Ab(2,49152,null,0,a.A,[i.j,i.p,i.F],null,null),(n()(),i.Bb(3,0,null,0,7,"ion-toolbar",[["color","primary"]],null,null,null,r.pb,r.H)),i.Ab(4,49152,null,0,a.Bb,[i.j,i.p,i.F],{color:[0,"color"]},null),(n()(),i.Bb(5,0,null,0,2,"ion-title",[],null,null,null,r.ob,r.G)),i.Ab(6,49152,null,0,a.zb,[i.j,i.p,i.F],null,null),(n()(),i.Tb(7,0,[""," - ",""])),(n()(),i.Bb(8,0,null,0,2,"ion-title",[["slot","end"]],null,null,null,r.ob,r.G)),i.Ab(9,49152,null,0,a.zb,[i.j,i.p,i.F],null,null),(n()(),i.Tb(10,0,["","\xb0 ano"])),(n()(),i.Bb(11,0,null,null,5,"ion-content",[],null,null,null,r.T,r.l)),i.Ab(12,49152,null,0,a.t,[i.j,i.p,i.F],null,null),(n()(),i.Bb(13,0,null,0,1,"div",[["class","gif-container"]],null,null,null,null,null)),(n()(),i.Bb(14,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),i.qb(16777216,null,0,1,null,C)),i.Ab(16,16384,null,0,u.j,[i.W,i.S],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component;n(t,4,0,"primary"),n(t,16,0,e.quiz)}),(function(n,t){var e=t.component;n(t,7,0,e.quiz.subject,e.quiz.name),n(t,10,0,e.quiz.school_year),n(t,14,0,e.gifUrl)}))}var k=i.xb("app-play-quiz",m,(function(n){return i.Vb(0,[(n()(),i.Bb(0,0,null,null,1,"app-play-quiz",[],null,null,null,x,v)),i.Ab(1,114688,null,0,m,[y.a,d.b,a.Hb,p.a,h.a],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[]),B=e("s7LF"),T=function n(){_classCallCheck(this,n)};e.d(t,"PlayQuizPageModuleNgFactory",(function(){return O}));var O=i.yb(l,[],(function(n){return i.Kb([i.Lb(512,i.m,i.jb,[[8,[o.a,k]],[3,i.m],i.D]),i.Lb(4608,u.l,u.k,[i.z,[2,u.v]]),i.Lb(4608,B.q,B.q,[]),i.Lb(4608,a.b,a.b,[i.F,i.g]),i.Lb(4608,a.Gb,a.Gb,[a.b,i.m,i.w]),i.Lb(4608,a.Kb,a.Kb,[a.b,i.m,i.w]),i.Lb(1073742336,u.b,u.b,[]),i.Lb(1073742336,B.p,B.p,[]),i.Lb(1073742336,B.g,B.g,[]),i.Lb(1073742336,a.Db,a.Db,[]),i.Lb(1073742336,y.o,y.o,[[2,y.t],[2,y.m]]),i.Lb(1073742336,T,T,[]),i.Lb(1073742336,l,l,[]),i.Lb(1024,y.k,(function(){return[[{path:"",component:m},{path:"results",loadChildren:"src/app/pages/quiz-results/quiz-results.module#QuizResultsPageModule"}]]}),[])])}))}}]);