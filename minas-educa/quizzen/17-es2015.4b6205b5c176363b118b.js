(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"6LGL":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class i{}var t=u("pMnS"),o=u("oBZk"),r=u("ZZ/e"),s=u("s7LF"),a=u("SVse"),b=u("mrSG"),g=u("Kxr4"),c=u("f5UU"),d=u("pn+4"),h=u("izWX"),m=u("3Nn5");class p{constructor(l,n,u,e){this._id=l,this.name=n,this.subject=u,this.header_img_url=e}static fromData(l){return new p(l._id,l.name,l.subject,l.header_img_url)}}var f=u("pFfs"),q=u("IheW");let C=(()=>{class l extends f.a{constructor(l){super("theme","themes","/themes",l),this.httpClient=l}}return l.ngInjectableDef=e.Yb({factory:function(){return new l(e.Zb(q.c))},token:l,providedIn:"root"}),l})();class v{constructor(l,n,u,e,i,t,o,r,s){this.route=l,this.alertCtrl=n,this.formBuilder=u,this.cameraUtils=e,this.navCtrl=i,this.platform=t,this.quizService=o,this.themeService=r,this.viewUtils=s,this.nQuestionsRange={min:1,max:9},this.schoolYears=[1,2,3,4,5,6,7,8,9],this.subjects=["Matem\xe1tica","Ci\xeancias","Hist\xf3ria","Geografia"],this.quizErrorMsgs={n_questions:`Deve haver no m\xednimo ${this.nQuestionsRange.min} quest\xe3o e no m\xe1ximo ${this.nQuestionsRange.max}`},this.quiz=null,this.mode=this.route.snapshot.paramMap.get("mode"),this.isSubmitted=!1,this.pageTexts="edit"===this.mode?{headerIcon:"create",headerText:"Edi\xe7\xe3o",buttonText:"Confirmar Dados Editados"}:{headerIcon:"add",headerText:"Cria\xe7\xe3o",buttonText:"Confirmar Dados"},this.getFormSelectableData(),this.setupForm(),l.queryParams.subscribe(l=>{l.id&&this.quizService.getById(l.id).subscribe(l=>{this.quiz=l,console.log(this.quiz),this.fillQuizSettings()})})}ngOnInit(){}get errorControl(){return this.quizForm.controls}hasErrors(l){return this.isSubmitted&&(!l.errors||l.errors.required)||l.invalid&&l.dirty}getFormSelectableData(){this.schoolYears=[1,2,3,4,5,6,7,8,9],this.subjects=["Matem\xe1tica","Ci\xeancias","Hist\xf3ria","Geografia"],this.themeService.getAll().subscribe(l=>{this.themes=l.map(l=>p.fromData(l))})}setupForm(){this.quizForm=this.formBuilder.group({name:["",s.o.required],subject:["",s.o.required],school_year:["",s.o.required],theme:["",s.o.required],n_questions:["",[s.o.required,s.o.min(this.nQuestionsRange.min),s.o.max(this.nQuestionsRange.max)]]})}fillQuizSettings(){const{name:l,subject:n,school_year:u,theme:e,questions:i}=this.quiz;this.quizForm.setValue({name:l,subject:n,school_year:u.toString(),theme:e,n_questions:i.length}),this.bgImg=new c.a("","",this.quiz.bg_img_path,!1)}chooseBg(){return b.b(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({header:"Escolher a imagem do:",buttons:[{text:"Armazenamento Local",handler:()=>b.b(this,void 0,void 0,(function*(){return this.bgImg=yield this.cameraUtils.chooseImgFromLocalStorage()}))},{text:"Banco de Imagens",handler:()=>this.cameraUtils.chooseImgFromServer().then(l=>this.bgImg=l).catch(l=>this.viewUtils.presentToast(l))}]});yield l.present()}))}onSubmit(){if(this.isSubmitted=!0,this.quizForm.valid){const l=this.quizForm.value,n=l.n_questions;let u;if(delete l.n_questions,this.quiz){const{_id:n,questions:e}=this.quiz;u=new h.a(n,l.name,l.subject,l.school_year,this.quiz.bg_img_path,e,l.theme)}else u=h.a.fromData(l);console.log(u),this.navCtrl.navigateForward(`quiz/${this.mode}/questions`,{state:{quiz:u,bgImg:this.bgImg,n_questions:n}})}}}var N=u("iInd"),A=e.zb({encapsulation:0,styles:[[".bg-img-preview[_ngcontent-%COMP%]{border-radius:6px;margin:0 auto;max-width:75%}"]],data:{}});function B(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,2,"ion-select-option",[],null,null,null,o.ib,o.B)),e.Ab(1,49152,null,0,r.nb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Tb(2,0,["",""]))],(function(l,n){l(n,1,0,e.Fb(1,"",n.context.$implicit,""))}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function F(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,2,"ion-select-option",[],null,null,null,o.ib,o.B)),e.Ab(1,49152,null,0,r.nb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Tb(2,0,["","\xb0 ano "]))],(function(l,n){l(n,1,0,e.Fb(1,"",n.context.$implicit,""))}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function j(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,2,"ion-select-option",[],null,null,null,o.ib,o.B)),e.Ab(1,49152,null,0,r.nb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Tb(2,0,["",""]))],(function(l,n){l(n,1,0,e.Fb(1,"",n.context.$implicit._id,""))}),(function(l,n){l(n,2,0,n.context.$implicit.name)}))}function _(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,1,"span",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Tb(1,null,[" ",""]))],null,(function(l,n){l(n,1,0,n.component.quizErrorMsgs.n_questions)}))}function y(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,0,"img",[["class","bg-img-preview"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.component.bgImg.webFullPath)}))}function x(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,13,"ion-header",[],null,null,null,o.Y,o.q)),e.Ab(1,49152,null,0,r.A,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,11,"ion-toolbar",[["color","primary"]],null,null,null,o.pb,o.H)),e.Ab(3,49152,null,0,r.Bb,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Bb(4,0,null,0,6,"ion-buttons",[["slot","start"]],null,null,null,o.M,o.e)),e.Ab(5,49152,null,0,r.k,[e.j,e.p,e.F],null,null),(l()(),e.Bb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e.Nb(l,8).onClick(u)&&i),i}),o.J,o.b)),e.Ab(7,49152,null,0,r.f,[e.j,e.p,e.F],null,null),e.Ab(8,16384,null,0,r.g,[[2,r.hb],r.Hb],null,null),(l()(),e.Bb(9,0,null,0,1,"ion-icon",[["slot","icon-only"]],null,null,null,o.Z,o.r)),e.Ab(10,49152,null,0,r.B,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Bb(11,0,null,0,2,"ion-title",[],null,null,null,o.ob,o.G)),e.Ab(12,49152,null,0,r.zb,[e.j,e.p,e.F],null,null),(l()(),e.Tb(13,0,[""," - Dados do Quiz"])),(l()(),e.Bb(14,0,null,null,98,"ion-content",[],null,null,null,o.T,o.l)),e.Ab(15,49152,null,0,r.t,[e.j,e.p,e.F],null,null),(l()(),e.Bb(16,0,null,0,96,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0,t=l.component;return"submit"===n&&(i=!1!==e.Nb(l,18).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Nb(l,18).onReset()&&i),"ngSubmit"===n&&(i=!1!==t.onSubmit()&&i),i}),null,null)),e.Ab(17,16384,null,0,s.s,[],null,null),e.Ab(18,540672,null,0,s.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Qb(2048,null,s.a,null,[s.f]),e.Ab(20,16384,null,0,s.l,[[4,s.a]],null,null),(l()(),e.Bb(21,0,null,null,13,"ion-item",[],null,null,null,o.bb,o.t)),e.Ab(22,49152,null,0,r.G,[e.j,e.p,e.F],null,null),(l()(),e.Bb(23,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.cb,o.u)),e.Ab(24,49152,null,0,r.M,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["Nome do Quiz"])),(l()(),e.Bb(26,0,null,0,8,"ion-input",[["formControlName","name"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Nb(l,29)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Nb(l,29)._handleInputEvent(u.target)&&i),i}),o.ab,o.s)),e.Ab(27,16384,null,0,s.n,[],{required:[0,"required"]},null),e.Qb(1024,null,s.h,(function(l){return[l]}),[s.n]),e.Ab(29,16384,null,0,r.Nb,[e.p],null,null),e.Qb(1024,null,s.i,(function(l){return[l]}),[r.Nb]),e.Ab(31,671744,null,0,s.e,[[3,s.a],[6,s.h],[8,null],[6,s.i],[2,s.r]],{name:[0,"name"]},null),e.Qb(2048,null,s.j,null,[s.e]),e.Ab(33,16384,null,0,s.k,[[4,s.j]],null,null),e.Ab(34,49152,null,0,r.F,[e.j,e.p,e.F],{required:[0,"required"]},null),(l()(),e.Bb(35,0,null,null,15,"ion-item",[],null,null,null,o.bb,o.t)),e.Ab(36,49152,null,0,r.G,[e.j,e.p,e.F],null,null),(l()(),e.Bb(37,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.cb,o.u)),e.Ab(38,49152,null,0,r.M,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["Mat\xe9ria"])),(l()(),e.Bb(40,0,null,0,10,"ion-select",[["formControlName","subject"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Nb(l,43)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Nb(l,43)._handleChangeEvent(u.target)&&i),i}),o.jb,o.A)),e.Ab(41,16384,null,0,s.n,[],{required:[0,"required"]},null),e.Qb(1024,null,s.h,(function(l){return[l]}),[s.n]),e.Ab(43,16384,null,0,r.Mb,[e.p],null,null),e.Qb(1024,null,s.i,(function(l){return[l]}),[r.Mb]),e.Ab(45,671744,null,0,s.e,[[3,s.a],[6,s.h],[8,null],[6,s.i],[2,s.r]],{name:[0,"name"]},null),e.Qb(2048,null,s.j,null,[s.e]),e.Ab(47,16384,null,0,s.k,[[4,s.j]],null,null),e.Ab(48,49152,null,0,r.mb,[e.j,e.p,e.F],null,null),(l()(),e.qb(16777216,null,0,1,null,B)),e.Ab(50,278528,null,0,a.i,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Bb(51,0,null,null,15,"ion-item",[],null,null,null,o.bb,o.t)),e.Ab(52,49152,null,0,r.G,[e.j,e.p,e.F],null,null),(l()(),e.Bb(53,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.cb,o.u)),e.Ab(54,49152,null,0,r.M,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["Ano Escolar"])),(l()(),e.Bb(56,0,null,0,10,"ion-select",[["formControlName","school_year"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Nb(l,59)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Nb(l,59)._handleChangeEvent(u.target)&&i),i}),o.jb,o.A)),e.Ab(57,16384,null,0,s.n,[],{required:[0,"required"]},null),e.Qb(1024,null,s.h,(function(l){return[l]}),[s.n]),e.Ab(59,16384,null,0,r.Mb,[e.p],null,null),e.Qb(1024,null,s.i,(function(l){return[l]}),[r.Mb]),e.Ab(61,671744,null,0,s.e,[[3,s.a],[6,s.h],[8,null],[6,s.i],[2,s.r]],{name:[0,"name"]},null),e.Qb(2048,null,s.j,null,[s.e]),e.Ab(63,16384,null,0,s.k,[[4,s.j]],null,null),e.Ab(64,49152,null,0,r.mb,[e.j,e.p,e.F],null,null),(l()(),e.qb(16777216,null,0,1,null,F)),e.Ab(66,278528,null,0,a.i,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Bb(67,0,null,null,15,"ion-item",[],null,null,null,o.bb,o.t)),e.Ab(68,49152,null,0,r.G,[e.j,e.p,e.F],null,null),(l()(),e.Bb(69,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.cb,o.u)),e.Ab(70,49152,null,0,r.M,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["Tema"])),(l()(),e.Bb(72,0,null,0,10,"ion-select",[["formControlName","theme"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Nb(l,75)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Nb(l,75)._handleChangeEvent(u.target)&&i),i}),o.jb,o.A)),e.Ab(73,16384,null,0,s.n,[],{required:[0,"required"]},null),e.Qb(1024,null,s.h,(function(l){return[l]}),[s.n]),e.Ab(75,16384,null,0,r.Mb,[e.p],null,null),e.Qb(1024,null,s.i,(function(l){return[l]}),[r.Mb]),e.Ab(77,671744,null,0,s.e,[[3,s.a],[6,s.h],[8,null],[6,s.i],[2,s.r]],{name:[0,"name"]},null),e.Qb(2048,null,s.j,null,[s.e]),e.Ab(79,16384,null,0,s.k,[[4,s.j]],null,null),e.Ab(80,49152,null,0,r.mb,[e.j,e.p,e.F],null,null),(l()(),e.qb(16777216,null,0,1,null,j)),e.Ab(82,278528,null,0,a.i,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Bb(83,0,null,null,15,"ion-item",[],null,null,null,o.bb,o.t)),e.Ab(84,49152,null,0,r.G,[e.j,e.p,e.F],null,null),(l()(),e.Bb(85,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.cb,o.u)),e.Ab(86,49152,null,0,r.M,[e.j,e.p,e.F],{position:[0,"position"]},null),(l()(),e.Tb(-1,0,["N\xfamero de Quest\xf5es"])),(l()(),e.Bb(88,0,null,0,8,"ion-input",[["formControlName","n_questions"],["required",""],["type","number"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Nb(l,91)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Nb(l,91)._handleIonChange(u.target)&&i),i}),o.ab,o.s)),e.Ab(89,16384,null,0,s.n,[],{required:[0,"required"]},null),e.Qb(1024,null,s.h,(function(l){return[l]}),[s.n]),e.Ab(91,16384,null,0,r.Ib,[e.p],null,null),e.Qb(1024,null,s.i,(function(l){return[l]}),[r.Ib]),e.Ab(93,671744,null,0,s.e,[[3,s.a],[6,s.h],[8,null],[6,s.i],[2,s.r]],{name:[0,"name"]},null),e.Qb(2048,null,s.j,null,[s.e]),e.Ab(95,16384,null,0,s.k,[[4,s.j]],null,null),e.Ab(96,49152,null,0,r.F,[e.j,e.p,e.F],{required:[0,"required"],type:[1,"type"]},null),(l()(),e.qb(16777216,null,0,1,null,_)),e.Ab(98,16384,null,0,a.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Bb(99,0,null,null,10,"ion-card",[["class","ion-text-center ion-margin"]],null,null,null,o.R,o.f)),e.Ab(100,49152,null,0,r.l,[e.j,e.p,e.F],null,null),(l()(),e.Bb(101,0,null,0,8,"ion-card-content",[],null,null,null,o.N,o.g)),e.Ab(102,49152,null,0,r.m,[e.j,e.p,e.F],null,null),(l()(),e.Bb(103,0,null,0,4,"ion-button",[["fill","outline"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.chooseBg()&&e),e}),o.L,o.d)),e.Ab(104,49152,null,0,r.j,[e.j,e.p,e.F],{fill:[0,"fill"]},null),(l()(),e.Bb(105,0,null,0,1,"ion-icon",[["name","image"],["slot","start"]],null,null,null,o.Z,o.r)),e.Ab(106,49152,null,0,r.B,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Tb(-1,0,[" Foto / gif de fundo "])),(l()(),e.qb(16777216,null,0,1,null,y)),e.Ab(109,16384,null,0,a.j,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Bb(110,0,null,null,2,"ion-button",[["class","ion-margin-top"],["expand","block"],["type","submit"]],null,null,null,o.L,o.d)),e.Ab(111,49152,null,0,r.j,[e.j,e.p,e.F],{expand:[0,"expand"],type:[1,"type"]},null),(l()(),e.Tb(112,0,["",""]))],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,10,0,e.Fb(1,"",u.pageTexts.headerIcon,"")),l(n,18,0,u.quizForm),l(n,24,0,"floating"),l(n,27,0,""),l(n,31,0,"name"),l(n,34,0,""),l(n,38,0,"floating"),l(n,41,0,""),l(n,45,0,"subject"),l(n,50,0,u.subjects),l(n,54,0,"floating"),l(n,57,0,""),l(n,61,0,"school_year"),l(n,66,0,u.schoolYears),l(n,70,0,"floating"),l(n,73,0,""),l(n,77,0,"theme"),l(n,82,0,u.themes),l(n,86,0,"floating"),l(n,89,0,""),l(n,93,0,"n_questions"),l(n,96,0,"","number"),l(n,98,0,u.hasErrors(u.errorControl.n_questions)),l(n,104,0,"outline"),l(n,106,0,"image"),l(n,109,0,u.bgImg),l(n,111,0,"block","submit")}),(function(l,n){var u=n.component;l(n,13,0,u.pageTexts.headerText),l(n,16,0,e.Nb(n,20).ngClassUntouched,e.Nb(n,20).ngClassTouched,e.Nb(n,20).ngClassPristine,e.Nb(n,20).ngClassDirty,e.Nb(n,20).ngClassValid,e.Nb(n,20).ngClassInvalid,e.Nb(n,20).ngClassPending),l(n,26,0,e.Nb(n,27).required?"":null,e.Nb(n,33).ngClassUntouched,e.Nb(n,33).ngClassTouched,e.Nb(n,33).ngClassPristine,e.Nb(n,33).ngClassDirty,e.Nb(n,33).ngClassValid,e.Nb(n,33).ngClassInvalid,e.Nb(n,33).ngClassPending),l(n,40,0,e.Nb(n,41).required?"":null,e.Nb(n,47).ngClassUntouched,e.Nb(n,47).ngClassTouched,e.Nb(n,47).ngClassPristine,e.Nb(n,47).ngClassDirty,e.Nb(n,47).ngClassValid,e.Nb(n,47).ngClassInvalid,e.Nb(n,47).ngClassPending),l(n,56,0,e.Nb(n,57).required?"":null,e.Nb(n,63).ngClassUntouched,e.Nb(n,63).ngClassTouched,e.Nb(n,63).ngClassPristine,e.Nb(n,63).ngClassDirty,e.Nb(n,63).ngClassValid,e.Nb(n,63).ngClassInvalid,e.Nb(n,63).ngClassPending),l(n,72,0,e.Nb(n,73).required?"":null,e.Nb(n,79).ngClassUntouched,e.Nb(n,79).ngClassTouched,e.Nb(n,79).ngClassPristine,e.Nb(n,79).ngClassDirty,e.Nb(n,79).ngClassValid,e.Nb(n,79).ngClassInvalid,e.Nb(n,79).ngClassPending),l(n,88,0,e.Nb(n,89).required?"":null,e.Nb(n,95).ngClassUntouched,e.Nb(n,95).ngClassTouched,e.Nb(n,95).ngClassPristine,e.Nb(n,95).ngClassDirty,e.Nb(n,95).ngClassValid,e.Nb(n,95).ngClassInvalid,e.Nb(n,95).ngClassPending),l(n,112,0,u.pageTexts.buttonText)}))}function I(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,1,"app-quiz-settings",[],null,null,null,x,A)),e.Ab(1,114688,null,0,v,[N.a,r.a,s.b,g.a,r.Hb,r.Jb,m.a,C,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}var z=e.xb("app-quiz-settings",v,I,{},{},[]);class T{}u.d(n,"QuizSettingsPageModuleNgFactory",(function(){return S}));var S=e.yb(i,[],(function(l){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[t.a,z]],[3,e.m],e.D]),e.Lb(4608,a.l,a.k,[e.z,[2,a.v]]),e.Lb(4608,s.b,s.b,[]),e.Lb(4608,s.q,s.q,[]),e.Lb(4608,r.b,r.b,[e.F,e.g]),e.Lb(4608,r.Gb,r.Gb,[r.b,e.m,e.w]),e.Lb(4608,r.Kb,r.Kb,[r.b,e.m,e.w]),e.Lb(1073742336,a.b,a.b,[]),e.Lb(1073742336,s.p,s.p,[]),e.Lb(1073742336,s.m,s.m,[]),e.Lb(1073742336,r.Db,r.Db,[]),e.Lb(1073742336,N.o,N.o,[[2,N.t],[2,N.m]]),e.Lb(1073742336,T,T,[]),e.Lb(1073742336,i,i,[]),e.Lb(1024,N.k,(function(){return[[{path:"",component:v},{path:"questions",loadChildren:"src/app/pages/questions-details/questions-details.module#QuestionsDetailsPageModule"}]]}),[])])}))}}]);