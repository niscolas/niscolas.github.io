(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{P8Ls:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{}var b=u("pMnS"),i=u("oBZk"),s=u("ZZ/e");class e{constructor(l,n){this.navCtrl=l,this.router=n,this.quizResults={hits:0,misses:0};const u=this.router.getCurrentNavigation().extras.state;u&&(this.quiz=u.quiz,this.quizResults.hits=this.getHits(u.answers),this.quizResults.misses=this.quiz.questions.length-this.quizResults.hits)}ngOnInit(){}getHits(l){let n=0;return l.map(l=>{l&&n++}),n}goToHome(){this.navCtrl.navigateRoot("/quizzes",{replaceUrl:!0})}}var r=u("iInd"),a=t.zb({encapsulation:0,styles:[[""]],data:{}});function c(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,6,"ion-header",[],null,null,null,i.ab,i.q)),t.Ab(1,49152,null,0,s.A,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,i.tb,i.J)),t.Ab(3,49152,null,0,s.Bb,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Bb(4,0,null,0,2,"ion-title",[],null,null,null,i.sb,i.I)),t.Ab(5,49152,null,0,s.zb,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Resultados do Quiz"])),(l()(),t.Bb(7,0,null,null,32,"ion-content",[],null,null,null,i.V,i.l)),t.Ab(8,49152,null,0,s.t,[t.j,t.p,t.F],null,null),(l()(),t.Bb(9,0,null,0,24,"ion-card",[["color","primary"]],null,null,null,i.T,i.f)),t.Ab(10,49152,null,0,s.l,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Bb(11,0,null,0,4,"ion-card-header",[],null,null,null,i.Q,i.h)),t.Ab(12,49152,null,0,s.n,[t.j,t.p,t.F],null,null),(l()(),t.Bb(13,0,null,0,2,"ion-card-title",[],null,null,null,i.S,i.j)),t.Ab(14,49152,null,0,s.p,[t.j,t.p,t.F],null,null),(l()(),t.Tb(15,0,[" "," "])),(l()(),t.Bb(16,0,null,0,17,"ion-card-content",[],null,null,null,i.P,i.g)),t.Ab(17,49152,null,0,s.m,[t.j,t.p,t.F],null,null),(l()(),t.Bb(18,0,null,0,7,"ion-item",[],null,null,null,i.db,i.t)),t.Ab(19,49152,null,0,s.G,[t.j,t.p,t.F],null,null),(l()(),t.Bb(20,0,null,0,2,"ion-label",[],null,null,null,i.eb,i.u)),t.Ab(21,49152,null,0,s.M,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Acertos"])),(l()(),t.Bb(23,0,null,0,2,"ion-badge",[["color","success"],["slot","end"]],null,null,null,i.M,i.c)),t.Ab(24,49152,null,0,s.i,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Tb(25,0,["",""])),(l()(),t.Bb(26,0,null,0,7,"ion-item",[],null,null,null,i.db,i.t)),t.Ab(27,49152,null,0,s.G,[t.j,t.p,t.F],null,null),(l()(),t.Bb(28,0,null,0,2,"ion-label",[],null,null,null,i.eb,i.u)),t.Ab(29,49152,null,0,s.M,[t.j,t.p,t.F],null,null),(l()(),t.Tb(-1,0,["Erros"])),(l()(),t.Bb(31,0,null,0,2,"ion-badge",[["color","danger"],["slor","end"]],null,null,null,i.M,i.c)),t.Ab(32,49152,null,0,s.i,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Tb(33,0,["",""])),(l()(),t.Bb(34,0,null,0,5,"ion-fab",[["class","ion-margin"],["horizontal","start"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.Y,i.m)),t.Ab(35,49152,null,0,s.v,[t.j,t.p,t.F],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.Bb(36,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToHome()&&t),t}),i.W,i.n)),t.Ab(37,49152,null,0,s.w,[t.j,t.p,t.F],null,null),(l()(),t.Bb(38,0,null,0,1,"ion-icon",[["name","home"]],null,null,null,i.bb,i.r)),t.Ab(39,49152,null,0,s.B,[t.j,t.p,t.F],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"primary"),l(n,10,0,"primary"),l(n,24,0,"success"),l(n,32,0,"danger"),l(n,35,0,"start","bottom"),l(n,39,0,"home")}),(function(l,n){var u=n.component;l(n,15,0,u.quiz.name),l(n,25,0,u.quizResults.hits),l(n,33,0,u.quizResults.misses)}))}function p(l){return t.Vb(0,[(l()(),t.Bb(0,0,null,null,1,"app-quiz-results",[],null,null,null,c,a)),t.Ab(1,114688,null,0,e,[s.Hb,r.m],null,null)],(function(l,n){l(n,1,0)}),null)}var m=t.xb("app-quiz-results",e,p,{},{},[]),h=u("SVse"),d=u("s7LF");class z{}u.d(n,"QuizResultsPageModuleNgFactory",(function(){return B}));var B=t.yb(o,[],(function(l){return t.Kb([t.Lb(512,t.m,t.jb,[[8,[b.a,m]],[3,t.m],t.D]),t.Lb(4608,h.l,h.k,[t.z,[2,h.v]]),t.Lb(4608,d.q,d.q,[]),t.Lb(4608,s.b,s.b,[t.F,t.g]),t.Lb(4608,s.Gb,s.Gb,[s.b,t.m,t.w]),t.Lb(4608,s.Kb,s.Kb,[s.b,t.m,t.w]),t.Lb(1073742336,h.b,h.b,[]),t.Lb(1073742336,d.p,d.p,[]),t.Lb(1073742336,d.g,d.g,[]),t.Lb(1073742336,s.Db,s.Db,[]),t.Lb(1073742336,r.o,r.o,[[2,r.t],[2,r.m]]),t.Lb(1073742336,z,z,[]),t.Lb(1073742336,o,o,[]),t.Lb(1024,r.k,(function(){return[[{path:"",component:e}]]}),[])])}))}}]);