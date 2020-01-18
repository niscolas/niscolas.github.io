(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"nIz/":function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class i{}var u=t("pMnS"),o=t("oBZk"),s=t("ZZ/e"),r=t("s7LF"),a=t("SVse"),b=t("Pn9U"),c=t("t8sF"),g=t("iWj2"),d=t("Yttj");class h{constructor(n,l,t,e,i){this.statement=n,this.options=l,this.bg_img_path=t,this.quiz=e,this._id=i}static fromData(n){return new this(n.statement,n.options,n.bg_img_path,n.quiz,n._id)}}var p=t("pFfs"),m=t("IheW");let f=(()=>{class n extends p.a{constructor(n){super("/api/questions","question",n)}}return n.ngInjectableDef=e.Xb({factory:function(){return new n(e.Yb(m.c))},token:n,providedIn:"root"}),n})();var v=t("3Nn5"),N=t("izWX");const q=(n,l)=>null===n?"":l.convertFileSrc(n),C=n=>(new Date).getTime()+n.substr(n.lastIndexOf("."));var A=t("mrSG"),B=t("wc7r");const F="questions_imgs";class y{constructor(n,l,t,e,i,u,o,s,a,b,c,g,d,h){this.alertController=n,this.camera=l,this.cdRef=t,this.file=e,this.filePath=i,this.formBuilder=u,this.storage=o,this.navCtrl=s,this.platform=a,this.questionService=b,this.quizService=c,this.router=g,this.toastCtrl=d,this.webview=h,this.nWrongOptions=new r.c(3,[r.o.required,r.o.min(3),r.o.max(9)]),this.questionsData=[],this.questionsImgs=[],this.slideOpts={},this.wrongQuestionNamePrefix="wrong_question_",this.slides=[],this.wrongOptionsCounter=[],this.initializeQuestionForm(0),this.router.getCurrentNavigation().extras.state&&(this.quizData=this.router.getCurrentNavigation().extras.state.quizData,this.totalQuestions=this.quizData.n_questions),this.alertController.create({header:"Confirmar cria\xe7\xe3o do Quiz?",buttons:[{text:"Sim",handler:()=>{this.createQuiz(),this.navCtrl.navigateRoot("/quizzes")}},{text:"N\xe3o",role:"cancel"}]}).then(n=>this.alert=n)}cleanImgsStorageData(){console.log("cleaning: imgs storage data"),this.storage.remove(F),console.log("cleaning finished")}cleanAppFiles(){this.file.listDir(this.file.dataDirectory,".").then(n=>{console.log("cleaning: app files"),console.log(n),n.forEach(n=>{n.isFile&&(console.log("removing: "+n.name),this.file.removeFile(this.file.dataDirectory,n.name))}),console.log("app files is now clean")})}ngOnInit(){this.createQuestionsSlides(1)}initializeQuestionForm(n){this.questionsData[n]=this.formBuilder.group({statement:["",r.o.required],answer:["",r.o.required],options:this.formBuilder.group({})}),this.wrongOptionsCounter[n]=0}createQuestionsSlides(n){this.slides=Object(B.a)(n)}setWrongOptions(n,l){let t=n-this.wrongOptionsCounter[l];if(0!==t){const n=t>0;t<0&&(t*=-1),[...Array(t)].map(t=>{n?this.createWrongOption(l):this.removeWrongOption(l)})}}createWrongOption(n){this.questionsData[n].controls.options.addControl(this.wrongQuestionNamePrefix+this.wrongOptionsCounter[n],new r.c("",r.o.required)),this.wrongOptionsCounter[n]++}removeWrongOption(n){this.wrongOptionsCounter[n]--,this.questionsData[n].controls.options.removeControl(this.wrongQuestionNamePrefix+this.wrongOptionsCounter[n])}onConfirmWrongOptionsNumber(){this.nWrongOptions.valid&&this.slider.getActiveIndex().then(n=>this.setWrongOptions(this.nWrongOptions.value,n))}chooseBgImg(n=b.b.PHOTOLIBRARY){const l={quality:100,sourceType:n,saveToPhotoAlbum:!1,correctOrientation:!0};console.log("choosing image"),this.camera.getPicture(l).then(n=>{this.platform.is("android")&&(n="file://"+n),this.filePath.resolveNativePath(n).then(n=>{const l=n.substr(0,n.lastIndexOf("/")+1),t=n.substr(n.lastIndexOf("/")+1);console.log("the image has been chosen"),this.copyFileToLocalDir(l,t,C(t))})})}copyFileToLocalDir(n,l,t){console.log("copying to app data folder"),this.file.copyFile(n,l,this.file.dataDirectory,t).then(n=>{console.log("image copied successfully"),this.updateStoredImages(t)},n=>{console.error("an error ocurred while copying the image: "+n),function(n,l,t={message:n,position:"bottom",duration:3e3}){A.b(this,void 0,void 0,(function*(){(yield l.create(t)).present()}))}("Erro ao salvar a Imagem",this.toastCtrl)})}updateStoredImages(n){console.log("updating storage"),this.storage.get(F).then(l=>{const t=JSON.parse(l);console.log(t),t?(t.push(n),this.storage.set(F,JSON.stringify(t))):this.storage.set(F,JSON.stringify([n]));const e=q(this.file.dataDirectory+n,this.webview),i={name:n,path:this.file.dataDirectory,resFullPath:e};this.slider.getActiveIndex().then(n=>{this.questionsImgs[n]&&(console.log("this question had it's image already been set"),this.deleteImg(this.questionsImgs[n])),console.log("setting the question image"),this.questionsImgs[n]=i})})}deleteImg(n){console.log("deleting the previous image"),this.storage.get(F).then(l=>{const t=JSON.parse(l).filter(l=>l!==n.name);this.storage.set(F,JSON.stringify(t)),console.log("removing img from file system: "+(n.path+n.name)),this.file.removeFile(n.path,n.name).then(n=>console.log("the image has been removed and replaced by the new one"))})}onConfirmQuestionData(){this.slider.getActiveIndex().then(n=>{n+1<this.totalQuestions?(this.initializeQuestionForm(n+1),this.createQuestionsSlides(n+2),setTimeout(()=>this.slider.slideNext(),50)):this.alert.present()})}createQuiz(){this.quiz=new N.a(this.quizData.name,this.quizData.subject,this.quizData.school_year),this.createQuestions()}createQuestions(){this.questionsData.map((n,l)=>{const t=[{text:n.controls.answer.value,correct:!0},...Object.values(n.controls.options.value).map((n,l)=>({text:n,correct:!1}))],e=new h(n.controls.statement.value,t);this.questionsImgs[l]&&(e.bg_img_path=this.questionsImgs[l].resFullPath),this.saveQuestion(e,l+1===this.questionsData.length)})}saveQuestion(n,l){this.quiz.questions=[],this.questionService.create(n).subscribe(n=>{this.quiz.questions.push(n._id),l&&this.quizService.create(this.quiz).subscribe(n=>{console.log(n)})})}}var j=t("xgBC"),O=t("iInd"),P=e.zb({encapsulation:0,styles:[["ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{display:block}input[type=file][_ngcontent-%COMP%]{z-index:2}"]],data:{}});function I(n){return e.Ub(0,[(n()(),e.Bb(0,0,null,null,13,"ion-item",[],null,null,null,o.V,o.r)),e.Ab(1,49152,null,0,s.G,[e.j,e.p,e.F],null,null),(n()(),e.Bb(2,0,null,0,2,"ion-label",[["color","secondary"],["position","stacked"]],null,null,null,o.W,o.s)),e.Ab(3,49152,null,0,s.M,[e.j,e.p,e.F],{color:[0,"color"],position:[1,"position"]},null),(n()(),e.Sb(4,0,["Resposta Incorreta n\xba ",""])),(n()(),e.Bb(5,0,null,0,8,"ion-textarea",[["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var i=!0;return"ionBlur"===l&&(i=!1!==e.Nb(n,8)._handleBlurEvent(t.target)&&i),"ionChange"===l&&(i=!1!==e.Nb(n,8)._handleInputEvent(t.target)&&i),i}),o.fb,o.B)),e.Ab(6,16384,null,0,r.n,[],{required:[0,"required"]},null),e.Pb(1024,null,r.h,(function(n){return[n]}),[r.n]),e.Ab(8,16384,null,0,s.Nb,[e.p],null,null),e.Pb(1024,null,r.i,(function(n){return[n]}),[s.Nb]),e.Ab(10,671744,null,0,r.e,[[3,r.a],[6,r.h],[8,null],[6,r.i],[2,r.r]],{name:[0,"name"]},null),e.Pb(2048,null,r.j,null,[r.e]),e.Ab(12,16384,null,0,r.k,[[4,r.j]],null,null),e.Ab(13,49152,null,0,s.xb,[e.j,e.p,e.F],{required:[0,"required"]},null)],(function(n,l){n(l,3,0,"secondary","stacked"),n(l,6,0,""),n(l,10,0,l.context.$implicit.key),n(l,13,0,"")}),(function(n,l){n(l,4,0,l.context.index+1),n(l,5,0,e.Nb(l,6).required?"":null,e.Nb(l,12).ngClassUntouched,e.Nb(l,12).ngClassTouched,e.Nb(l,12).ngClassPristine,e.Nb(l,12).ngClassDirty,e.Nb(l,12).ngClassValid,e.Nb(l,12).ngClassInvalid,e.Nb(l,12).ngClassPending)}))}function w(n){return e.Ub(0,[(n()(),e.Bb(0,0,null,null,1,"ion-img",[],null,null,null,o.T,o.p)),e.Ab(1,49152,null,0,s.C,[e.j,e.p,e.F],{src:[0,"src"]},null)],(function(n,l){n(l,1,0,l.component.questionsImgs[l.parent.context.$implicit].resFullPath)}),null)}function D(n){return e.Ub(0,[(n()(),e.Bb(0,0,null,null,71,"ion-slide",[],null,null,null,o.db,o.z)),e.Ab(1,49152,null,0,s.pb,[e.j,e.p,e.F],null,null),(n()(),e.Bb(2,0,null,0,1,"h1",[],null,null,null,null,null)),(n()(),e.Sb(3,null,["Quest\xe3o n\xba ",""])),(n()(),e.Bb(4,0,null,0,65,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,t){var i=!0;return"submit"===l&&(i=!1!==e.Nb(n,6).onSubmit(t)&&i),"reset"===l&&(i=!1!==e.Nb(n,6).onReset()&&i),i}),null,null)),e.Ab(5,16384,null,0,r.s,[],null,null),e.Ab(6,540672,null,0,r.f,[[8,null],[8,null]],{form:[0,"form"]},null),e.Pb(2048,null,r.a,null,[r.f]),e.Ab(8,16384,null,0,r.l,[[4,r.a]],null,null),(n()(),e.Bb(9,0,null,null,13,"ion-item",[["class","ion-margin-vertical"]],null,null,null,o.V,o.r)),e.Ab(10,49152,null,0,s.G,[e.j,e.p,e.F],null,null),(n()(),e.Bb(11,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.W,o.s)),e.Ab(12,49152,null,0,s.M,[e.j,e.p,e.F],{position:[0,"position"]},null),(n()(),e.Sb(-1,0,["Pergunta da Quest\xe3o"])),(n()(),e.Bb(14,0,null,0,8,"ion-input",[["formControlName","statement"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var i=!0;return"ionBlur"===l&&(i=!1!==e.Nb(n,17)._handleBlurEvent(t.target)&&i),"ionChange"===l&&(i=!1!==e.Nb(n,17)._handleInputEvent(t.target)&&i),i}),o.U,o.q)),e.Ab(15,16384,null,0,r.n,[],{required:[0,"required"]},null),e.Pb(1024,null,r.h,(function(n){return[n]}),[r.n]),e.Ab(17,16384,null,0,s.Nb,[e.p],null,null),e.Pb(1024,null,r.i,(function(n){return[n]}),[s.Nb]),e.Ab(19,671744,null,0,r.e,[[3,r.a],[6,r.h],[8,null],[6,r.i],[2,r.r]],{name:[0,"name"]},null),e.Pb(2048,null,r.j,null,[r.e]),e.Ab(21,16384,null,0,r.k,[[4,r.j]],null,null),e.Ab(22,49152,null,0,s.F,[e.j,e.p,e.F],{required:[0,"required"]},null),(n()(),e.Bb(23,0,null,null,13,"ion-item",[["class","ion-margin-vertical"]],null,null,null,o.V,o.r)),e.Ab(24,49152,null,0,s.G,[e.j,e.p,e.F],null,null),(n()(),e.Bb(25,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,o.W,o.s)),e.Ab(26,49152,null,0,s.M,[e.j,e.p,e.F],{position:[0,"position"]},null),(n()(),e.Sb(-1,0,["N\xfamero de Alternativas Erradas"])),(n()(),e.Bb(28,0,null,0,8,"ion-input",[["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var i=!0;return"ionBlur"===l&&(i=!1!==e.Nb(n,31)._handleBlurEvent(t.target)&&i),"ionChange"===l&&(i=!1!==e.Nb(n,31)._handleIonChange(t.target)&&i),i}),o.U,o.q)),e.Ab(29,16384,null,0,r.n,[],{required:[0,"required"]},null),e.Pb(1024,null,r.h,(function(n){return[n]}),[r.n]),e.Ab(31,16384,null,0,s.Hb,[e.p],null,null),e.Pb(1024,null,r.i,(function(n){return[n]}),[s.Hb]),e.Ab(33,540672,null,0,r.d,[[6,r.h],[8,null],[6,r.i],[2,r.r]],{form:[0,"form"]},null),e.Pb(2048,null,r.j,null,[r.d]),e.Ab(35,16384,null,0,r.k,[[4,r.j]],null,null),e.Ab(36,49152,null,0,s.F,[e.j,e.p,e.F],{required:[0,"required"],type:[1,"type"]},null),(n()(),e.Bb(37,0,null,null,2,"ion-button",[["class","ion-margin-vertical mar-l-25 mar-r-25"],["fill","outline"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onConfirmWrongOptionsNumber()&&e),e}),o.H,o.d)),e.Ab(38,49152,null,0,s.j,[e.j,e.p,e.F],{fill:[0,"fill"]},null),(n()(),e.Sb(-1,0,[" Gerar Alternativas "])),(n()(),e.Bb(40,0,null,null,23,"ion-list",[],null,null,null,o.Y,o.t)),e.Ab(41,49152,null,0,s.N,[e.j,e.p,e.F],null,null),(n()(),e.Bb(42,0,null,0,13,"ion-item",[],null,null,null,o.V,o.r)),e.Ab(43,49152,null,0,s.G,[e.j,e.p,e.F],null,null),(n()(),e.Bb(44,0,null,0,2,"ion-label",[["color","secondary"],["position","stacked"]],null,null,null,o.W,o.s)),e.Ab(45,49152,null,0,s.M,[e.j,e.p,e.F],{color:[0,"color"],position:[1,"position"]},null),(n()(),e.Sb(-1,0,["Resposta Correta"])),(n()(),e.Bb(47,0,null,0,8,"ion-textarea",[["formControlName","answer"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var i=!0;return"ionBlur"===l&&(i=!1!==e.Nb(n,50)._handleBlurEvent(t.target)&&i),"ionChange"===l&&(i=!1!==e.Nb(n,50)._handleInputEvent(t.target)&&i),i}),o.fb,o.B)),e.Ab(48,16384,null,0,r.n,[],{required:[0,"required"]},null),e.Pb(1024,null,r.h,(function(n){return[n]}),[r.n]),e.Ab(50,16384,null,0,s.Nb,[e.p],null,null),e.Pb(1024,null,r.i,(function(n){return[n]}),[s.Nb]),e.Ab(52,671744,null,0,r.e,[[3,r.a],[6,r.h],[8,null],[6,r.i],[2,r.r]],{name:[0,"name"]},null),e.Pb(2048,null,r.j,null,[r.e]),e.Ab(54,16384,null,0,r.k,[[4,r.j]],null,null),e.Ab(55,49152,null,0,s.xb,[e.j,e.p,e.F],{required:[0,"required"]},null),(n()(),e.Bb(56,0,null,0,7,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,t){var i=!0;return"submit"===l&&(i=!1!==e.Nb(n,58).onSubmit(t)&&i),"reset"===l&&(i=!1!==e.Nb(n,58).onReset()&&i),i}),null,null)),e.Ab(57,16384,null,0,r.s,[],null,null),e.Ab(58,540672,null,0,r.f,[[8,null],[8,null]],{form:[0,"form"]},null),e.Pb(2048,null,r.a,null,[r.f]),e.Ab(60,16384,null,0,r.l,[[4,r.a]],null,null),(n()(),e.qb(16777216,null,null,2,null,I)),e.Ab(62,278528,null,0,a.i,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),e.Ob(0,a.e,[e.y]),(n()(),e.Bb(64,0,null,null,5,"div",[["class","pos-relative"]],null,null,null,null,null)),(n()(),e.Bb(65,0,null,null,4,"ion-button",[["fill","outline"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.chooseBgImg()&&e),e}),o.H,o.d)),e.Ab(66,49152,null,0,s.j,[e.j,e.p,e.F],{fill:[0,"fill"]},null),(n()(),e.Bb(67,0,null,0,1,"ion-icon",[["name","photos"],["slot","start"]],null,null,null,o.S,o.o)),e.Ab(68,49152,null,0,s.B,[e.j,e.p,e.F],{name:[0,"name"]},null),(n()(),e.Sb(-1,0,[" Foto / gif de fundo "])),(n()(),e.qb(16777216,null,0,1,null,w)),e.Ab(71,16384,null,0,a.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,6,0,t.questionsData[l.context.$implicit]),n(l,12,0,"stacked"),n(l,15,0,""),n(l,19,0,"statement"),n(l,22,0,""),n(l,26,0,"stacked"),n(l,29,0,""),n(l,33,0,t.nWrongOptions),n(l,36,0,"","number"),n(l,38,0,"outline"),n(l,45,0,"secondary","stacked"),n(l,48,0,""),n(l,52,0,"answer"),n(l,55,0,""),n(l,58,0,t.questionsData[l.context.$implicit].controls.options),n(l,62,0,e.Tb(l,62,0,e.Nb(l,63).transform(t.questionsData[l.context.$implicit].controls.options.controls))),n(l,66,0,"outline"),n(l,68,0,"photos"),n(l,71,0,t.questionsImgs[l.context.$implicit])}),(function(n,l){n(l,3,0,l.context.$implicit+1),n(l,4,0,e.Nb(l,8).ngClassUntouched,e.Nb(l,8).ngClassTouched,e.Nb(l,8).ngClassPristine,e.Nb(l,8).ngClassDirty,e.Nb(l,8).ngClassValid,e.Nb(l,8).ngClassInvalid,e.Nb(l,8).ngClassPending),n(l,14,0,e.Nb(l,15).required?"":null,e.Nb(l,21).ngClassUntouched,e.Nb(l,21).ngClassTouched,e.Nb(l,21).ngClassPristine,e.Nb(l,21).ngClassDirty,e.Nb(l,21).ngClassValid,e.Nb(l,21).ngClassInvalid,e.Nb(l,21).ngClassPending),n(l,28,0,e.Nb(l,29).required?"":null,e.Nb(l,35).ngClassUntouched,e.Nb(l,35).ngClassTouched,e.Nb(l,35).ngClassPristine,e.Nb(l,35).ngClassDirty,e.Nb(l,35).ngClassValid,e.Nb(l,35).ngClassInvalid,e.Nb(l,35).ngClassPending),n(l,47,0,e.Nb(l,48).required?"":null,e.Nb(l,54).ngClassUntouched,e.Nb(l,54).ngClassTouched,e.Nb(l,54).ngClassPristine,e.Nb(l,54).ngClassDirty,e.Nb(l,54).ngClassValid,e.Nb(l,54).ngClassInvalid,e.Nb(l,54).ngClassPending),n(l,56,0,e.Nb(l,60).ngClassUntouched,e.Nb(l,60).ngClassTouched,e.Nb(l,60).ngClassPristine,e.Nb(l,60).ngClassDirty,e.Nb(l,60).ngClassValid,e.Nb(l,60).ngClassInvalid,e.Nb(l,60).ngClassPending)}))}function x(n){return e.Ub(0,[e.Qb(671088640,1,{slider:0}),(n()(),e.Bb(1,0,null,null,11,"ion-header",[],null,null,null,o.R,o.n)),e.Ab(2,49152,null,0,s.A,[e.j,e.p,e.F],null,null),(n()(),e.Bb(3,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,o.hb,o.D)),e.Ab(4,49152,null,0,s.Bb,[e.j,e.p,e.F],{color:[0,"color"]},null),(n()(),e.Bb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.I,o.e)),e.Ab(6,49152,null,0,s.k,[e.j,e.p,e.F],null,null),(n()(),e.Bb(7,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.Nb(n,9).onClick(t)&&i),i}),o.F,o.b)),e.Ab(8,49152,null,0,s.f,[e.j,e.p,e.F],null,null),e.Ab(9,16384,null,0,s.g,[[2,s.hb],s.Gb],null,null),(n()(),e.Bb(10,0,null,0,2,"ion-title",[],null,null,null,o.gb,o.C)),e.Ab(11,49152,null,0,s.zb,[e.j,e.p,e.F],null,null),(n()(),e.Sb(-1,0,["Cria\xe7\xe3o de Quiz"])),(n()(),e.Bb(13,0,null,null,11,"ion-content",[["class","ion-padding"]],null,null,null,o.O,o.k)),e.Ab(14,49152,null,0,s.t,[e.j,e.p,e.F],null,null),(n()(),e.Bb(15,0,null,0,3,"ion-slides",[["class","pad-b-15"],["pager","true"]],null,null,null,o.eb,o.A)),e.Ab(16,49152,[[1,4],["slider",4]],0,s.qb,[e.j,e.p,e.F],{options:[0,"options"],pager:[1,"pager"]},null),(n()(),e.qb(16777216,null,0,1,null,D)),e.Ab(18,278528,null,0,a.i,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),(n()(),e.Bb(19,0,null,0,5,"ion-fab",[["class","ion-margin"],["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,o.Q,o.l)),e.Ab(20,49152,null,0,s.v,[e.j,e.p,e.F],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.Bb(21,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onConfirmQuestionData()&&e),e}),o.P,o.m)),e.Ab(22,49152,null,0,s.w,[e.j,e.p,e.F],null,null),(n()(),e.Bb(23,0,null,0,1,"ion-icon",[["name","checkmark"]],null,null,null,o.S,o.o)),e.Ab(24,49152,null,0,s.B,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(n,l){var t=l.component;n(l,4,0,"primary"),n(l,16,0,t.slideOpts,"true"),n(l,18,0,t.slides),n(l,20,0,"end","bottom"),n(l,24,0,"checkmark")}),null)}function k(n){return e.Ub(0,[(n()(),e.Bb(0,0,null,null,1,"app-create-quiz",[],null,null,null,x,P)),e.Ab(1,114688,null,0,y,[s.a,b.a,e.j,c.a,g.a,r.b,j.b,s.Gb,s.Ib,f,v.a,O.m,s.Ob,d.a],null,null)],(function(n,l){n(l,1,0)}),null)}var z=e.xb("app-create-quiz",y,k,{},{},[]);class S{}t.d(l,"CreateQuizPageModuleNgFactory",(function(){return Q}));var Q=e.yb(i,[],(function(n){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[u.a,z]],[3,e.m],e.D]),e.Lb(4608,a.l,a.k,[e.z,[2,a.s]]),e.Lb(4608,r.b,r.b,[]),e.Lb(4608,r.q,r.q,[]),e.Lb(4608,s.b,s.b,[e.F,e.g]),e.Lb(4608,s.Fb,s.Fb,[s.b,e.m,e.w]),e.Lb(4608,s.Jb,s.Jb,[s.b,e.m,e.w]),e.Lb(1073742336,a.b,a.b,[]),e.Lb(1073742336,r.p,r.p,[]),e.Lb(1073742336,r.m,r.m,[]),e.Lb(1073742336,s.Db,s.Db,[]),e.Lb(1073742336,O.o,O.o,[[2,O.t],[2,O.m]]),e.Lb(1073742336,S,S,[]),e.Lb(1073742336,i,i,[]),e.Lb(1024,O.k,(function(){return[[{path:"",component:y}]]}),[])])}))}}]);