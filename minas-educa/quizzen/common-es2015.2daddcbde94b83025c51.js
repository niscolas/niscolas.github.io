(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/Bg":function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return m}));var i=n("mrSG"),o=n("t8sF"),r=n("ZZ/e"),s=n("LRne"),a=n("nYR2"),l=n("vkgz"),c=n("JIr8"),u=n("pn+4"),h=n("AytR"),d=n("8Y7J"),p=n("IheW"),f=function(t){return t.PARABENS="parabens",t}({});let m=(()=>{class t{constructor(t,e,n,i){this.file=t,this.http=e,this.loadingCtrl=n,this.toastUtils=i,this.fullApiPath=`${h.a}/medias`}upload(t){return i.b(this,void 0,void 0,(function*(){return console.log("starting file upload: "+t),new Promise((e,n)=>i.b(this,void 0,void 0,(function*(){try{(yield this.file.resolveLocalFilesystemUrl(t)).file(t=>i.b(this,void 0,void 0,(function*(){const n=yield this.uploadFormData(yield this.fileToForm(t));e(n)})))}catch(o){const t="Erro ao fazer upload do Arquivo";this.toastUtils.presentToast(t),n(t)}})))}))}fileToForm(t){return i.b(this,void 0,void 0,(function*(){const e=new FileReader;return new Promise((n,i)=>{e.onload=()=>{const i=new Blob([e.result],{type:t.type}),o=new FormData;o.append("file",i,t.name),n(o)},e.readAsArrayBuffer(t)})}))}uploadFormData(t){return i.b(this,void 0,void 0,(function*(){const e=yield this.loadingCtrl.create({message:"Fazendo Upload do Arquivo..."});return yield e.present(),new Promise((n,i)=>{this.http.post(`${this.fullApiPath}/images`,t).pipe(Object(a.a)(()=>e.dismiss())).subscribe(t=>{n(t);let e="Upload de Arquivo: ";this.toastUtils.presentToast(e+=t?"Sucesso":"Falha")})})}))}getFilesUrls(){return this.http.get(`${this.fullApiPath}/images`).pipe(Object(l.a)(t=>console.log("file url fetched: "+t)),Object(c.a)(this.handleError("-Get All Images URLs-")))}getAnimationUrl(t,e=!1){return this.http.get(`${this.fullApiPath}/animations/${t.toString()}?audio=${e}`).pipe(Object(l.a)(t=>console.log("animation url fetched")),Object(c.a)(this.handleError("-Get Animation-")))}handleError(t="op",e){return n=>(console.error(n),console.log(`${t} failed: ${n.message}`),Object(s.a)(e))}}return t.ngInjectableDef=d.Yb({factory:function(){return new t(d.Zb(o.a),d.Zb(p.c),d.Zb(r.Fb),d.Zb(u.a))},token:t,providedIn:"root"}),t})()},"3Nn5":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("pFfs"),o=n("8Y7J"),r=n("IheW");let s=(()=>{class t extends i.a{constructor(t){super("quiz","quizzes","/quizzes",t),this.httpClient=t}}return t.ngInjectableDef=o.Yb({factory:function(){return new t(o.Zb(r.c))},token:t,providedIn:"root"}),t})()},Dl6n:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a}));const i=(t,e)=>null!==e.closest(t),o=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,r=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n)}return!1}},K6rM:function(t,e,n){"use strict";n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return b})),n.d(e,"d",(function(){return w})),n.d(e,"e",(function(){return r}));var i=n("c1op"),o=n("kBU6");const r=t=>new Promise((e,n)=>{Object(i.m)(()=>{s(t),a(t).then(n=>{n.animation&&n.animation.destroy(),l(t),e(n)},e=>{l(t),n(e)})})}),s=t=>{const e=t.enteringEl,n=t.leavingEl;E(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),w(e,!1),n&&w(n,!1)},a=async t=>{const e=await c(t);return e?u(e,t):h(t)},l=t=>{const e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},c=async t=>{if(t.leavingEl&&t.animated&&0!==t.duration)return t.animationBuilder?t.animationBuilder:"ios"===t.mode?(await(()=>n.e(99).then(n.bind(null,"5+Pq")))()).iosTransitionAnimation:(await(()=>n.e(100).then(n.bind(null,"RRi8")))()).mdTransitionAnimation},u=async(t,e)=>{let i;await d(e,!0);try{const o=await n.e(5).then(n.bind(null,"gHMO"));i=await o.create(t,e.baseEl,e)}catch(r){i=t(e.baseEl,e)}m(e.enteringEl,e.leavingEl);const o=await f(i,e);return e.progressCallback&&e.progressCallback(void 0),o&&g(e.enteringEl,e.leavingEl),{hasCompleted:o,animation:i}},h=async t=>{const e=t.enteringEl,n=t.leavingEl;return await d(t,!1),m(e,n),g(e,n),{hasCompleted:!0}},d=async(t,e)=>{const n=(void 0!==t.deepWait?t.deepWait:e)?[y(t.enteringEl),y(t.leavingEl)]:[v(t.enteringEl),v(t.leavingEl)];await Promise.all(n),await p(t.viewIsReady,t.enteringEl)},p=async(t,e)=>{t&&await t(e)},f=(t,e)=>{const n=e.progressCallback,i=new Promise(e=>{t.onFinish(n=>{"number"==typeof n?e(1===n):void 0!==t.hasCompleted&&e(t.hasCompleted)})});return n?(t.progressStart(!0),n(t)):t.play(),i},m=(t,e)=>{b(e,o.c),b(t,o.a)},g=(t,e)=>{b(t,o.b),b(e,o.d)},b=(t,e)=>{if(t){const n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}},v=t=>t&&t.componentOnReady?t.componentOnReady():Promise.resolve(),y=async t=>{const e=t;if(e){if(null!=e.componentOnReady&&null!=await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(y))}},w=(t,e)=>{e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},E=(t,e,n)=>{void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")},O=t=>t.classList.contains("ion-page")?t:t.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||t},Kxr4:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var i=n("mrSG"),o=n("Pn9U"),r=n("iWj2"),s=n("t8sF"),a=n("ZZ/e"),l=n("6YNw"),c=n("0/Bg"),u=n("f5UU"),h=n("pn+4"),d=n("8Y7J"),p=n("xgBC");const f="questions_imgs";let m=(()=>{class t{constructor(t,e,n,i,o,r,s,a,l){this.camera=t,this.file=e,this.filePath=n,this.fileUtils=i,this.fileUpload=o,this.modalCtrl=r,this.platform=s,this.storage=a,this.viewUtils=l}chooseImgFromLocalStorage(){return i.b(this,void 0,void 0,(function*(){if(this.platform.is("cordova"))return yield this.getImgAndMoveToAppData();this.viewUtils.presentToast("Esse recurso ainda n\xe3o est\xe1 presente nessa vers\xe3o do app")}))}chooseImgFromServer(){return i.b(this,void 0,void 0,(function*(){const t=yield this.fileUpload.getFilesUrls().toPromise(),e=yield this.modalCtrl.create({component:l.a,componentProps:{imgsPaths:t}});return new Promise((t,n)=>{e.onDidDismiss().then(e=>{(e=e.data)?t(u.a.fromWebPath(e)):n("Nenhuma imagem foi escolhida")}),e.present()})}))}getImgAndMoveToAppData(){return i.b(this,void 0,void 0,(function*(){try{const{imgPath:t,imgName:e}=yield this.takePicture(),n=yield this.fileUtils.copyFileToAppData(t,e,this.fileUtils.createFileName(e));return this.updateStoredImages(n)}catch(t){this.viewUtils.presentToast(t)}}))}takePicture(t=o.b.PHOTOLIBRARY,e={quality:100,sourceType:t,saveToPhotoAlbum:!1,correctOrientation:!0}){return i.b(this,void 0,void 0,(function*(){console.log("choosing image");try{let n,i,r=yield this.camera.getPicture(e);return this.platform.is("android")&&t===o.b.PHOTOLIBRARY&&(r=yield this.filePath.resolveNativePath(r)),n=r.substr(0,r.lastIndexOf("/")+1),i=r.substr(r.lastIndexOf("/")+1),console.log("the image has been chosen"),{imgPath:n,imgName:i}}catch(n){throw n}}))}updateStoredImages(t){return i.b(this,void 0,void 0,(function*(){console.log("updating storage");const e=JSON.parse(yield this.storage.get(f));e?(e.push(t),this.storage.set(f,JSON.stringify(e))):this.storage.set(f,JSON.stringify([t]));const n=this.fileUtils.webviewFullPath(this.file.dataDirectory+t);return new u.a(this.file.dataDirectory,t,n,!0)}))}deleteImg(t){return i.b(this,void 0,void 0,(function*(){console.log("deleting image");const e=yield this.storage.get(f),n=JSON.parse(e).filter(e=>e!==t.name);this.storage.set(f,JSON.stringify(n)),console.log("removing img from file system: "+(t.path+t.name)),yield this.file.removeFile(t.path,t.name)}))}cleanImgsStorageData(){console.log("cleaning: imgs storage data"),this.storage.remove(f),console.log("cleaning finished")}}return t.ngInjectableDef=d.Yb({factory:function(){return new t(d.Zb(o.a),d.Zb(s.a),d.Zb(r.a),d.Zb(u.b),d.Zb(c.b),d.Zb(a.Gb),d.Zb(a.Jb),d.Zb(p.b),d.Zb(h.a))},token:t,providedIn:"root"}),t})()},YtD4:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i=t=>{try{if("string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,a.forEach(t=>{const n=e.querySelectorAll(t);for(let i=n.length-1;i>=0;i--){const t=n[i];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const s=r(t);for(let e=0;e<s.length;e++)o(s[e])}});const i=r(e);for(let t=0;t<i.length;t++)o(i[t]);const s=document.createElement("div");s.appendChild(e);const l=s.querySelector("div");return null!==l?l.innerHTML:s.innerHTML}catch(e){return console.error(e),""}},o=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),i=e.name;if(!s.includes(i.toLowerCase())){t.removeAttribute(i);continue}const o=e.value;null!=o&&o.toLowerCase().includes("javascript:")&&t.removeAttribute(i)}const e=r(t);for(let n=0;n<e.length;n++)o(e[n])},r=t=>null!=t.children?t.children:t.childNodes,s=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},f5UU:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c}));var i=n("mrSG"),o=n("t8sF"),r=n("Yttj"),s=n("pn+4"),a=n("8Y7J");class l{constructor(t,e,n,i=!1){this.isFromLocalStorage=!1,this.path=t,this.name=e,this.webFullPath=n,this.isFromLocalStorage=i}static fromWebPath(t,e=!1){return new l(t.substr(0,t.lastIndexOf("/")),t.substr(t.lastIndexOf("/")),t,e)}fullPath(){return this.path+this.name}}let c=(()=>{class t{constructor(t,e,n){this.file=t,this.viewUtils=e,this.webview=n}copyFileToAppData(t,e,n){return i.b(this,void 0,void 0,(function*(){console.log("copying to app data folder");try{yield this.file.copyFile(t,e,this.file.dataDirectory,n),console.log("file copied successfully")}catch(i){console.error("an error ocurred while copying the file: "+i),this.viewUtils.presentToast("Erro ao salvar o Arquivo")}return n}))}webviewFullPath(t){return null===t?"":this.webview.convertFileSrc(t)}createFileName(t){return(new Date).getTime()+t.substr(t.lastIndexOf("."))}cleanAppFiles(){return i.b(this,void 0,void 0,(function*(){const t=yield this.file.listDir(this.file.dataDirectory,".");console.log("cleaning: app files"),console.log(t),t.forEach(t=>{t.isFile&&(console.log("removing: "+t.name),this.file.removeFile(this.file.dataDirectory,t.name))}),console.log("app files is now clean")}))}}return t.ngInjectableDef=a.Yb({factory:function(){return new t(a.Zb(o.a),a.Zb(s.a),a.Zb(r.a))},token:t,providedIn:"root"}),t})()},izWX:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));class i{constructor(t,e,n,i,o,r,s){this._id=t,this.name=e,this.subject=n,this.school_year=i,this.bg_img_path=o,this.questions=r,this.theme=s}static empty(){return new i(void 0,void 0,void 0,void 0,void 0,void 0,void 0)}static fromData(t){return new i(t._id,t.name,t.subject,t.school_year,t.bg_img_path,t.questions,t.theme)}asFormattedData(){return{name:this.name,subject:this.subject,school_year:this.school_year,bg_img_path:this.bg_img_path,questions:this.questions.map(t=>t._id),theme:this.theme}}}},m9yc:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));const i=async(t,e,n,i,o)=>{if(t)return t.attachViewToDom(e,n,o,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>r.classList.add(t)),o&&Object.assign(r,o),e.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},o=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"nN+u":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));const i=(t,e,n)=>{const i=new MutationObserver(t=>{n(o(t,e))});return i.observe(t,{childList:!0,subtree:!0}),i},o=(t,e)=>{let n;return t.forEach(t=>{for(let i=0;i<t.addedNodes.length;i++)n=r(t.addedNodes[i],e)||n}),n},r=(t,e)=>{if(1===t.nodeType)return(t.tagName===e.toUpperCase()?[t]:Array.from(t.querySelectorAll(e))).find(t=>!0===t.checked)}},opz7:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return i}));const i=()=>{const t=window.TapticEngine;t&&t.selection()},o=()=>{const t=window.TapticEngine;t&&t.gestureSelectionStart()},r=()=>{const t=window.TapticEngine;t&&t.gestureSelectionChanged()},s=()=>{const t=window.TapticEngine;t&&t.gestureSelectionEnd()}},pFfs:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("IheW"),o=n("LRne"),r=n("vkgz"),s=n("JIr8"),a=n("AytR");class l{constructor(t,e,n,o){this.singularModelName=t,this.pluralModelName=e,this.apiSuffix=n,this.http=o,this.httpOptions={headers:new i.g({"Content-Type":"application/json"})},this.apiPath=`${a.a}${this.apiSuffix}`}create(t){return this.http.post(this.apiPath,t,this.httpOptions).pipe(Object(r.a)(t=>console.log(`${this.singularModelName} created`)),Object(s.a)(this.handleError("-Create-")))}getById(t){return this.http.get(`${this.apiPath}/${t}`,this.httpOptions).pipe(Object(r.a)(t=>console.log(`${this.singularModelName} get: success`),Object(s.a)(this.handleError("-Get By ID-"))))}getAll(){return this.http.get(this.apiPath,this.httpOptions).pipe(Object(r.a)(t=>console.log(`${this.pluralModelName} get all: success`),Object(s.a)(this.handleError("-Get All-"))))}update(t,e){return this.http.put(`${this.apiPath}/${t}`,e,this.httpOptions).pipe(Object(r.a)(t=>console.log(`${this.singularModelName} update: success`),Object(s.a)(this.handleError("-Update-"))))}removeById(t){return this.http.delete(`${this.apiPath}/${t}`,this.httpOptions).pipe(Object(r.a)(e=>console.log(`${this.singularModelName} removed: ${t}`)),Object(s.a)(this.handleError("-Remove By ID-")))}handleError(t="op",e){return n=>(console.error(n),console.log(`${t} failed: ${n.message}`),Object(o.a)(e))}}},"pn+4":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("mrSG"),o=n("ZZ/e"),r=n("8Y7J");let s=(()=>{class t{constructor(t){this.toastCtrl=t}presentToast(t,e={message:t,position:"bottom",duration:3e3}){return i.b(this,void 0,void 0,(function*(){(yield this.toastCtrl.create(e)).present()}))}}return t.ngInjectableDef=r.Yb({factory:function(){return new t(r.Zb(o.Ob))},token:t,providedIn:"root"}),t})()},qaSm:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));class i{constructor(t,e){this.x=t,this.y=e}}const o=(t,e,n,i,o)=>{const a=s(t.y,e.y,n.y,i.y,o);return r(t.x,e.x,n.x,i.x,a[0])},r=(t,e,n,i,o)=>o*(3*e*Math.pow(o-1,2)+o*(-3*n*o+3*n+i*o))-t*Math.pow(o-1,3),s=(t,e,n,i,o)=>a((i-=o)-3*(n-=o)+3*(e-=o)-(t-=o),3*n-6*e+3*t,3*e-3*t,t).filter(t=>t>=0&&t<=1),a=(t,e,n,i)=>{if(0===t)return((t,e,n)=>{const i=e*e-4*t*n;return i<0?[]:[(-e+Math.sqrt(i))/(2*t),(-e-Math.sqrt(i))/(2*t)]})(e,n,i);const o=(3*(n/=t)-(e/=t)*e)/3,r=(2*e*e*e-9*e*n+27*(i/=t))/27;if(0===o)return[Math.pow(-r,1/3)];if(0===r)return[Math.sqrt(-o),-Math.sqrt(-o)];const s=Math.pow(r/2,2)+Math.pow(o/3,3);if(0===s)return[Math.pow(r/2,.5)-e/3];if(s>0)return[Math.pow(-r/2+Math.sqrt(s),1/3)-Math.pow(r/2+Math.sqrt(s),1/3)-e/3];const a=Math.sqrt(Math.pow(-o/3,3)),l=Math.acos(-r/(2*Math.sqrt(Math.pow(-o/3,3)))),c=2*Math.pow(a,1/3);return[c*Math.cos(l/3)-e/3,c*Math.cos((l+2*Math.PI)/3)-e/3,c*Math.cos((l+4*Math.PI)/3)-e/3]}},wc7r:function(t,e,n){"use strict";function i(t){return[...Array(t).keys()]}function o(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}))}}]);