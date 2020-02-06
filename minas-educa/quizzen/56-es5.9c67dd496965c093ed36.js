function _defineProperty(i,e,n){return e in i?Object.defineProperty(i,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[e]=n,i}function _classCallCheck(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(i,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(i,t.key,t)}}function _createClass(i,e,n){return e&&_defineProperties(i.prototype,e),n&&_defineProperties(i,n),i}(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{J3Yu:function(i,e,n){"use strict";n.r(e),n.d(e,"ion_loading",(function(){return g}));var t=n("c1op"),o=n("AfW+"),a=(n("aiEM"),n("+4pY")),r=n("pori"),s=n("Dl6n"),c=n("YtD4"),l=function(i){var e=Object(a.a)(),n=Object(a.a)(),t=Object(a.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,.3),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),e.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,t])},d=function(i){var e=Object(a.a)(),n=Object(a.a)(),t=Object(a.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.3,0),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),e.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,t])},p=function(i){var e=Object(a.a)(),n=Object(a.a)(),t=Object(a.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),e.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,t])},u=function(i){var e=Object(a.a)(),n=Object(a.a)(),t=Object(a.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.32,0),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),e.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,t])},g=function(){function i(e){var n=this;_classCallCheck(this,i),Object(t.l)(this,e),this.presented=!1,this.mode=Object(t.d)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){n.dismiss(void 0,r.a)},Object(r.e)(this.el),this.didPresent=Object(t.e)(this,"ionLoadingDidPresent",7),this.willPresent=Object(t.e)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(t.e)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(t.e)(this,"ionLoadingDidDismiss",7)}return _createClass(i,[{key:"componentWillLoad",value:function(){if(void 0===this.spinner){var i=Object(t.d)(this);this.spinner=o.b.get("loadingSpinner",o.b.get("spinner","ios"===i?"lines":"crescent"))}}},{key:"present",value:function(){var i=this;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(Object(r.f)(this,"loadingEnter",l,p,void 0));case 2:this.duration>0&&(this.durationTimeout=setTimeout((function(){return i.dismiss()}),this.duration+10));case 3:case"end":return e.stop()}}),null,this)}},{key:"dismiss",value:function(i,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(r.g)(this,i,e,"loadingLeave",d,u)}},{key:"onDidDismiss",value:function(){return Object(r.h)(this.el,"ionLoadingDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(r.h)(this.el,"ionLoadingWillDismiss")}},{key:"render",value:function(){var i,e=this.message,n=this.spinner,o=Object(t.d)(this);return Object(t.i)(t.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:"".concat(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(s.b)(this.cssClass)),(i={},_defineProperty(i,o,!0),_defineProperty(i,"loading-translucent",this.translucent),i))},Object(t.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(t.i)("div",{class:"loading-wrapper",role:"dialog"},n&&Object(t.i)("div",{class:"loading-spinner"},Object(t.i)("ion-spinner",{name:n})),e&&Object(t.i)("div",{class:"loading-content",innerHTML:Object(c.a)(e)})))}},{key:"el",get:function(){return Object(t.f)(this)}}],[{key:"style",get:function(){return".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}]),i}()}}]);