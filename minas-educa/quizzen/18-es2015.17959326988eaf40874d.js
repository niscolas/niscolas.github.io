(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{RKDb:function(l,n,u){"use strict";u.r(n);var i=u("8Y7J");class o{}var e=u("pMnS"),t=u("oBZk"),r=u("ZZ/e"),b=u("iInd"),c=u("SVse"),a=u("mrSG"),s=u("0/Bg"),p=u("3Nn5"),d=u("Kxr4");class m{constructor(l,n,u,i){this.alertController=l,this.cameraUtils=n,this.fileUpload=u,this.quizService=i,console.log("app started")}ngOnInit(){this.loadQuizzesList()}loadQuizzesList(){this.quizService.getAll().subscribe(l=>this.quizzes=l)}doRefresh(l){this.loadQuizzesList(),l.target.complete()}removeQuiz(l,n){return a.b(this,void 0,void 0,(function*(){const u=yield this.alertController.create({header:"Apagar este Quiz?",buttons:[{text:"Sim",handler:()=>{this.quizService.removeById(l._id).subscribe(),this.quizzes.splice(n,1)}},{text:"N\xe3o",role:"cancel"}]});yield u.present()}))}uploadImg(){return a.b(this,void 0,void 0,(function*(){const l=yield this.cameraUtils.chooseImgFromLocalStorage();l&&this.fileUpload.upload(l.fullPath())}))}}var f=i.zb({encapsulation:0,styles:[[""]],data:{}});function A(l){return i.Vb(0,[(l()(),i.Bb(0,0,null,null,36,"ion-card",[],null,null,null,t.R,t.f)),i.Ab(1,49152,null,0,r.l,[i.j,i.p,i.F],null,null),(l()(),i.Bb(2,0,null,0,7,"ion-card-header",[],null,null,null,t.O,t.h)),i.Ab(3,49152,null,0,r.n,[i.j,i.p,i.F],null,null),(l()(),i.Bb(4,0,null,0,2,"ion-card-title",[],null,null,null,t.Q,t.j)),i.Ab(5,49152,null,0,r.p,[i.j,i.p,i.F],null,null),(l()(),i.Tb(6,0,["",""])),(l()(),i.Bb(7,0,null,0,2,"ion-card-subtitle",[],null,null,null,t.P,t.i)),i.Ab(8,49152,null,0,r.o,[i.j,i.p,i.F],null,null),(l()(),i.Tb(9,0,["","\xb0 ano - ",""])),(l()(),i.Bb(10,0,null,0,26,"ion-grid",[["class","ion-text-center"]],null,null,null,t.X,t.p)),i.Ab(11,49152,null,0,r.z,[i.j,i.p,i.F],null,null),(l()(),i.Bb(12,0,null,0,24,"ion-row",[],null,null,null,t.hb,t.z)),i.Ab(13,49152,null,0,r.ib,[i.j,i.p,i.F],null,null),(l()(),i.Bb(14,0,null,0,7,"ion-col",[],null,null,null,t.S,t.k)),i.Ab(15,49152,null,0,r.s,[i.j,i.p,i.F],null,null),(l()(),i.Bb(16,0,null,0,5,"ion-button",[["class","w-100"],["color","success"],["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==i.Nb(l,18).onClick()&&o),"click"===n&&(o=!1!==i.Nb(l,19).onClick(u)&&o),o}),t.L,t.d)),i.Ab(17,49152,null,0,r.j,[i.j,i.p,i.F],{color:[0,"color"],fill:[1,"fill"]},null),i.Ab(18,16384,null,0,b.n,[b.m,b.a,[8,null],i.K,i.p],{routerLink:[0,"routerLink"]},null),i.Ab(19,737280,null,0,r.Lb,[c.h,r.Hb,i.p,b.m,[2,b.n]],null,null),(l()(),i.Bb(20,0,null,0,1,"ion-icon",[["name","play"],["slot","icon-only"]],null,null,null,t.Z,t.r)),i.Ab(21,49152,null,0,r.B,[i.j,i.p,i.F],{name:[0,"name"]},null),(l()(),i.Bb(22,0,null,0,8,"ion-col",[],null,null,null,t.S,t.k)),i.Ab(23,49152,null,0,r.s,[i.j,i.p,i.F],null,null),(l()(),i.Bb(24,0,null,0,6,"ion-button",[["class","w-100"],["fill","clear"],["routerLink","/quiz/edit"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==i.Nb(l,26).onClick()&&o),"click"===n&&(o=!1!==i.Nb(l,28).onClick(u)&&o),o}),t.L,t.d)),i.Ab(25,49152,null,0,r.j,[i.j,i.p,i.F],{fill:[0,"fill"]},null),i.Ab(26,16384,null,0,b.n,[b.m,b.a,[8,null],i.K,i.p],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),i.Pb(27,{id:0}),i.Ab(28,737280,null,0,r.Lb,[c.h,r.Hb,i.p,b.m,[2,b.n]],null,null),(l()(),i.Bb(29,0,null,0,1,"ion-icon",[["name","create"],["slot","icon-only"]],null,null,null,t.Z,t.r)),i.Ab(30,49152,null,0,r.B,[i.j,i.p,i.F],{name:[0,"name"]},null),(l()(),i.Bb(31,0,null,0,5,"ion-col",[],null,null,null,t.S,t.k)),i.Ab(32,49152,null,0,r.s,[i.j,i.p,i.F],null,null),(l()(),i.Bb(33,0,null,0,3,"ion-button",[["class","w-100"],["color","danger"],["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.removeQuiz(l.context.$implicit,l.context.index)&&i),i}),t.L,t.d)),i.Ab(34,49152,null,0,r.j,[i.j,i.p,i.F],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),i.Bb(35,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,t.Z,t.r)),i.Ab(36,49152,null,0,r.B,[i.j,i.p,i.F],{name:[0,"name"]},null)],(function(l,n){l(n,17,0,"success","clear"),l(n,18,0,i.Fb(1,"/quiz/",n.context.$implicit._id,"/play")),l(n,19,0),l(n,21,0,"play"),l(n,25,0,"clear");var u=l(n,27,0,n.context.$implicit._id);l(n,26,0,u,"/quiz/edit"),l(n,28,0),l(n,30,0,"create"),l(n,34,0,"danger","clear"),l(n,36,0,"trash")}),(function(l,n){l(n,6,0,n.context.$implicit.name),l(n,9,0,n.context.$implicit.school_year,n.context.$implicit.subject)}))}function B(l){return i.Vb(0,[(l()(),i.Bb(0,0,null,null,6,"ion-header",[],null,null,null,t.Y,t.q)),i.Ab(1,49152,null,0,r.A,[i.j,i.p,i.F],null,null),(l()(),i.Bb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,t.pb,t.H)),i.Ab(3,49152,null,0,r.Bb,[i.j,i.p,i.F],{color:[0,"color"]},null),(l()(),i.Bb(4,0,null,0,2,"ion-title",[],null,null,null,t.ob,t.G)),i.Ab(5,49152,null,0,r.zb,[i.j,i.p,i.F],null,null),(l()(),i.Tb(-1,0,["Quizzes"])),(l()(),i.Bb(7,0,null,null,27,"ion-content",[],null,null,null,t.T,t.l)),i.Ab(8,49152,null,0,r.t,[i.j,i.p,i.F],null,null),(l()(),i.Bb(9,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,u){var i=!0;return"ionRefresh"===n&&(i=!1!==l.component.doRefresh(u)&&i),i}),t.fb,t.w)),i.Ab(10,49152,null,0,r.cb,[i.j,i.p,i.F],null,null),(l()(),i.Bb(11,0,null,0,1,"ion-refresher-content",[],null,null,null,t.eb,t.x)),i.Ab(12,49152,null,0,r.db,[i.j,i.p,i.F],null,null),(l()(),i.Bb(13,0,null,0,3,"ion-list",[],null,null,null,t.db,t.v)),i.Ab(14,49152,null,0,r.N,[i.j,i.p,i.F],null,null),(l()(),i.qb(16777216,null,0,1,null,A)),i.Ab(16,278528,null,0,c.i,[i.W,i.S,i.x],{ngForOf:[0,"ngForOf"]},null),(l()(),i.Bb(17,0,null,0,17,"ion-fab",[["class","ion-margin"],["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,t.W,t.m)),i.Ab(18,49152,null,0,r.v,[i.j,i.p,i.F],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),i.Bb(19,0,null,0,3,"ion-fab-button",[],null,null,null,t.U,t.n)),i.Ab(20,49152,null,0,r.w,[i.j,i.p,i.F],null,null),(l()(),i.Bb(21,0,null,0,1,"ion-icon",[["name","arrow-up"]],null,null,null,t.Z,t.r)),i.Ab(22,49152,null,0,r.B,[i.j,i.p,i.F],{name:[0,"name"]},null),(l()(),i.Bb(23,0,null,0,11,"ion-fab-list",[["side","top"]],null,null,null,t.V,t.o)),i.Ab(24,49152,null,0,r.x,[i.j,i.p,i.F],{side:[0,"side"]},null),(l()(),i.Bb(25,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.uploadImg()&&i),i}),t.U,t.n)),i.Ab(26,49152,null,0,r.w,[i.j,i.p,i.F],null,null),(l()(),i.Bb(27,0,null,0,1,"ion-icon",[["name","cloud-upload"]],null,null,null,t.Z,t.r)),i.Ab(28,49152,null,0,r.B,[i.j,i.p,i.F],{name:[0,"name"]},null),(l()(),i.Bb(29,0,null,0,5,"ion-fab-button",[["color","primary"],["routerLink","/quiz/new"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==i.Nb(l,31).onClick()&&o),"click"===n&&(o=!1!==i.Nb(l,32).onClick(u)&&o),o}),t.U,t.n)),i.Ab(30,49152,null,0,r.w,[i.j,i.p,i.F],{color:[0,"color"]},null),i.Ab(31,16384,null,0,b.n,[b.m,b.a,[8,null],i.K,i.p],{routerLink:[0,"routerLink"]},null),i.Ab(32,737280,null,0,r.Lb,[c.h,r.Hb,i.p,b.m,[2,b.n]],null,null),(l()(),i.Bb(33,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,t.Z,t.r)),i.Ab(34,49152,null,0,r.B,[i.j,i.p,i.F],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,16,0,u.quizzes),l(n,18,0,"end","bottom"),l(n,22,0,"arrow-up"),l(n,24,0,"top"),l(n,28,0,"cloud-upload"),l(n,30,0,"primary"),l(n,31,0,"/quiz/new"),l(n,32,0),l(n,34,0,"add")}),null)}function h(l){return i.Vb(0,[(l()(),i.Bb(0,0,null,null,1,"app-view-quizzes",[],null,null,null,B,f)),i.Ab(1,114688,null,0,m,[r.a,d.a,s.b,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var z=i.xb("app-view-quizzes",m,h,{},{},[]),F=u("s7LF");class j{}u.d(n,"ViewQuizzesPageModuleNgFactory",(function(){return k}));var k=i.yb(o,[],(function(l){return i.Kb([i.Lb(512,i.m,i.jb,[[8,[e.a,z]],[3,i.m],i.D]),i.Lb(4608,c.l,c.k,[i.z,[2,c.v]]),i.Lb(4608,F.q,F.q,[]),i.Lb(4608,r.b,r.b,[i.F,i.g]),i.Lb(4608,r.Gb,r.Gb,[r.b,i.m,i.w]),i.Lb(4608,r.Kb,r.Kb,[r.b,i.m,i.w]),i.Lb(1073742336,c.b,c.b,[]),i.Lb(1073742336,F.p,F.p,[]),i.Lb(1073742336,F.g,F.g,[]),i.Lb(1073742336,r.Db,r.Db,[]),i.Lb(1073742336,b.o,b.o,[[2,b.t],[2,b.m]]),i.Lb(1073742336,j,j,[]),i.Lb(1073742336,o,o,[]),i.Lb(1024,b.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);