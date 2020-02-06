function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{EpFf:function(e,t,i){"use strict";i.r(t),i.d(t,"ion_modal",(function(){return u}));var r=i("c1op"),n=(i("AfW+"),i("aiEM"),i("+4pY")),a=(i("kBU6"),i("pori")),o=i("Dl6n"),s=i("m9yc"),d=i("K6rM"),l=function(e){var t=Object(n.a)(),i=Object(n.a)(),r=Object(n.a)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.4),r.addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(100%)","translateY(0%)"),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").addAnimation([i,r])},c=function(e){var t=Object(n.a)(),i=Object(n.a)(),r=Object(n.a)(),a=e.querySelector(".modal-wrapper"),o=a.getBoundingClientRect();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.4,0),r.addElement(a).beforeStyles({opacity:1}).fromTo("transform","translateY(0%)","translateY(".concat(e.ownerDocument.defaultView.innerHeight-o.top,"px)")),t.addElement(e).easing("ease-out").duration(250).addAnimation([i,r])},m=function(e){var t=Object(n.a)(),i=Object(n.a)(),r=Object(n.a)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),r.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").addAnimation([i,r])},h=function(e){var t=Object(n.a)(),i=Object(n.a)(),r=Object(n.a)(),a=e.querySelector(".modal-wrapper");return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),r.addElement(a).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([i,r])},u=function(){function e(t){var i=this;_classCallCheck(this,e),Object(r.l)(this,t),this.presented=!1,this.mode=Object(r.d)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.onBackdropTap=function(){i.dismiss(void 0,a.a)},this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),i.dismiss()},this.onLifecycle=function(e){var t=i.usersElement,r=p[e.type];if(t&&r){var n=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}},Object(a.e)(this.el),this.didPresent=Object(r.e)(this,"ionModalDidPresent",7),this.willPresent=Object(r.e)(this,"ionModalWillPresent",7),this.willDismiss=Object(r.e)(this,"ionModalWillDismiss",7),this.didDismiss=Object(r.e)(this,"ionModalDidDismiss",7)}return _createClass(e,[{key:"present",value:function(){var e,t;return regeneratorRuntime.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(!this.presented){i.next=2;break}return i.abrupt("return");case 2:if(e=this.el.querySelector(".modal-wrapper")){i.next=5;break}throw new Error("container is undefined");case 5:return t=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),i.next=8,regeneratorRuntime.awrap(Object(s.a)(this.delegate,e,this.component,["ion-page"],t));case 8:return this.usersElement=i.sent,i.next=11,regeneratorRuntime.awrap(Object(d.a)(this.usersElement));case 11:return i.abrupt("return",Object(a.f)(this,"modalEnter",l,m));case 12:case"end":return i.stop()}}),null,this)}},{key:"dismiss",value:function(e,t){var i;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(Object(a.g)(this,e,t,"modalLeave",c,h));case 2:if(i=r.sent,r.t0=i,!r.t0){r.next=7;break}return r.next=7,regeneratorRuntime.awrap(Object(s.b)(this.delegate,this.usersElement));case 7:return r.abrupt("return",i);case 8:case"end":return r.stop()}}),null,this)}},{key:"onDidDismiss",value:function(){return Object(a.h)(this.el,"ionModalDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(a.h)(this.el,"ionModalWillDismiss")}},{key:"render",value:function(){var e=Object(r.d)(this);return Object(r.i)(r.a,{"no-router":!0,"aria-modal":"true",class:Object.assign(_defineProperty({},e,!0),Object(o.b)(this.cssClass)),style:{zIndex:"".concat(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},Object(r.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(r.i)("div",{role:"dialog",class:_defineProperty({"modal-wrapper":!0},e,!0)}))}},{key:"el",get:function(){return Object(r.f)(this)}}],[{key:"style",get:function(){return".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--border-radius:2px;--box-shadow:0 28px 48px rgba(0,0,0,0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}"}}]),e}(),p={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"}}}]);