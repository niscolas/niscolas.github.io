function _defineProperties(l,n){for(var u=0;u<n.length;u++){var i=n[u];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(l,i.key,i)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{G26R:function(l,n,u){"use strict";u.r(n);var i=u("8Y7J"),t=function l(){_classCallCheck(this,l)},e=u("pMnS"),o=u("oBZk"),r=u("ZZ/e"),a=u("s7LF"),b=u("SVse"),c=u("izWX"),s=u("3Nn5"),p=u("wc7r"),d=function(){function l(n,u,i){_classCallCheck(this,l),this.route=n,this.navCtrl=u,this.quizService=i,this.questions=[],this.answers=[],this.shouldDisplayFinishButtton=!1}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.quiz=c.a.empty();var n=this.route.snapshot.paramMap.get("id");this.quizService.getById(n).subscribe((function(n){l.quiz=c.a.fromData(n),l.quiz.questions.map((function(l){Object(p.b)(l.options)})),l.questions=l.quiz.questions}))}},{key:"onOptionSelected",value:function(l,n){this.answers[l]=this.questions[l].options[n].correct}},{key:"sliderLoaded",value:function(){var l=this;setTimeout((function(){l.slider.length().then((function(n){1===n&&(l.slider.pager=!1,l.shouldDisplayFinishButtton=!0,l.slider.lockSwipes(!0))}))}),200)}},{key:"slideChanged",value:function(){var l=this;this.slider.getActiveIndex().then((function(n){l.slider.length().then((function(u){n+1===u&&(l.shouldDisplayFinishButtton=!0)}))}))}},{key:"finishQuiz",value:function(){this.navCtrl.navigateForward("/quiz/results",{state:{quiz:this.quiz,answers:this.answers}})}}]),l}(),h=u("iInd"),f=i.zb({encapsulation:0,styles:[["ion-list[_ngcontent-%COMP%]{border-radius:4px}ion-radio-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{white-space:pre-wrap;font-size:.8em}.background-test[_ngcontent-%COMP%]{background:url(https://media.giphy.com/media/BHNfhgU63qrks/giphy.gif) center center/cover no-repeat fixed;height:100%}"]],data:{}});function g(l){return i.Ub(0,[(l()(),i.Bb(0,0,null,null,8,"ion-item",[],null,null,null,o.Z,o.t)),i.Ab(1,49152,null,0,r.G,[i.j,i.p,i.F],null,null),(l()(),i.Bb(2,0,null,0,2,"ion-label",[],null,null,null,o.ab,o.u)),i.Ab(3,49152,null,0,r.M,[i.j,i.p,i.F],null,null),(l()(),i.Sb(4,0,["",""])),(l()(),i.Bb(5,0,null,0,3,"ion-radio",[["class","ion-margin-horizontal"],["slot","start"]],null,[[null,"click"],[null,"ionBlur"],[null,"ionSelect"]],(function(l,n,u){var t=!0,e=l.component;return"ionBlur"===n&&(t=!1!==i.Nb(l,8)._handleBlurEvent(u.target)&&t),"ionSelect"===n&&(t=!1!==i.Nb(l,8)._handleIonSelect(u.target)&&t),"click"===n&&(t=!1!==e.onOptionSelected(l.parent.context.index,l.context.index)&&t),t}),o.db,o.w)),i.Pb(5120,null,a.i,(function(l){return[l]}),[r.Kb]),i.Ab(7,49152,null,0,r.Z,[i.j,i.p,i.F],null,null),i.Ab(8,16384,null,0,r.Kb,[i.p],null,null)],null,(function(l,n){l(n,4,0,n.context.$implicit.text)}))}function m(l){return i.Ub(0,[(l()(),i.Bb(0,0,null,null,25,"ion-slide",[["class","background-test ion-padding"]],null,null,null,o.hb,o.B)),i.Ab(1,49152,null,0,r.pb,[i.j,i.p,i.F],null,null),(l()(),i.Bb(2,0,null,0,6,"ion-card",[["class","w-66"],["color","primary"]],null,null,null,o.P,o.f)),i.Ab(3,49152,null,0,r.l,[i.j,i.p,i.F],{color:[0,"color"]},null),(l()(),i.Bb(4,0,null,0,4,"ion-card-header",[],null,null,null,o.M,o.h)),i.Ab(5,49152,null,0,r.n,[i.j,i.p,i.F],null,null),(l()(),i.Bb(6,0,null,0,2,"ion-card-title",[],null,null,null,o.O,o.j)),i.Ab(7,49152,null,0,r.p,[i.j,i.p,i.F],null,null),(l()(),i.Sb(8,0,["",""])),(l()(),i.Bb(9,0,null,0,16,"ion-card",[["class","w-50"],["color","primary"]],null,null,null,o.P,o.f)),i.Ab(10,49152,null,0,r.l,[i.j,i.p,i.F],{color:[0,"color"]},null),(l()(),i.Bb(11,0,null,0,4,"ion-card-header",[],null,null,null,o.M,o.h)),i.Ab(12,49152,null,0,r.n,[i.j,i.p,i.F],null,null),(l()(),i.Bb(13,0,null,0,2,"ion-card-title",[],null,null,null,o.O,o.j)),i.Ab(14,49152,null,0,r.p,[i.j,i.p,i.F],null,null),(l()(),i.Sb(-1,0,[" Escolha a alternativa correta: "])),(l()(),i.Bb(16,0,null,0,9,"ion-card-content",[],null,null,null,o.L,o.g)),i.Ab(17,49152,null,0,r.m,[i.j,i.p,i.F],null,null),(l()(),i.Bb(18,0,null,0,7,"ion-radio-group",[],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==i.Nb(l,21)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==i.Nb(l,21)._handleChangeEvent(u.target)&&t),t}),o.cb,o.x)),i.Pb(5120,null,a.i,(function(l){return[l]}),[r.Mb]),i.Ab(20,49152,null,0,r.ab,[i.j,i.p,i.F],null,null),i.Ab(21,16384,null,0,r.Mb,[i.p],null,null),(l()(),i.Bb(22,0,null,0,3,"ion-list",[["lines","none"]],null,null,null,o.bb,o.v)),i.Ab(23,49152,null,0,r.N,[i.j,i.p,i.F],{lines:[0,"lines"]},null),(l()(),i.qb(16777216,null,0,1,null,g)),i.Ab(25,278528,null,0,b.i,[i.W,i.S,i.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,"primary"),l(n,10,0,"primary"),l(n,23,0,"none"),l(n,25,0,n.context.$implicit.options)}),(function(l,n){l(n,8,0,n.context.$implicit.statement)}))}function B(l){return i.Ub(0,[(l()(),i.Bb(0,0,null,null,5,"ion-fab",[["class","ion-margin"],["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,o.T,o.m)),i.Ab(1,49152,null,0,r.v,[i.j,i.p,i.F],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),i.Bb(2,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.finishQuiz()&&i),i}),o.S,o.n)),i.Ab(3,49152,null,0,r.w,[i.j,i.p,i.F],null,null),(l()(),i.Bb(4,0,null,0,1,"ion-icon",[["name","checkmark"]],null,null,null,o.W,o.q)),i.Ab(5,49152,null,0,r.B,[i.j,i.p,i.F],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"end","bottom"),l(n,5,0,"checkmark")}),null)}function v(l){return i.Ub(0,[i.Qb(671088640,1,{slider:0}),(l()(),i.Bb(1,0,null,null,9,"ion-header",[],null,null,null,o.V,o.p)),i.Ab(2,49152,null,0,r.A,[i.j,i.p,i.F],null,null),(l()(),i.Bb(3,0,null,0,7,"ion-toolbar",[["color","primary"]],null,null,null,o.lb,o.F)),i.Ab(4,49152,null,0,r.Bb,[i.j,i.p,i.F],{color:[0,"color"]},null),(l()(),i.Bb(5,0,null,0,2,"ion-title",[],null,null,null,o.kb,o.E)),i.Ab(6,49152,null,0,r.zb,[i.j,i.p,i.F],null,null),(l()(),i.Sb(7,0,[""," - ",""])),(l()(),i.Bb(8,0,null,0,2,"ion-title",[["slot","end"]],null,null,null,o.kb,o.E)),i.Ab(9,49152,null,0,r.zb,[i.j,i.p,i.F],null,null),(l()(),i.Sb(10,0,["","\xb0 ano"])),(l()(),i.Bb(11,0,null,null,7,"ion-content",[],null,null,null,o.R,o.l)),i.Ab(12,49152,null,0,r.t,[i.j,i.p,i.F],null,null),(l()(),i.Bb(13,0,null,0,3,"ion-slides",[["class","h-100"],["pager","true"]],null,[[null,"ionSlidesDidLoad"],[null,"ionSlideDidChange"]],(function(l,n,u){var i=!0,t=l.component;return"ionSlidesDidLoad"===n&&(i=!1!==t.sliderLoaded()&&i),"ionSlideDidChange"===n&&(i=!1!==t.slideChanged()&&i),i}),o.ib,o.C)),i.Ab(14,49152,[[1,4],["slider",4]],0,r.qb,[i.j,i.p,i.F],{pager:[0,"pager"]},null),(l()(),i.qb(16777216,null,0,1,null,m)),i.Ab(16,278528,null,0,b.i,[i.W,i.S,i.x],{ngForOf:[0,"ngForOf"]},null),(l()(),i.qb(16777216,null,0,1,null,B)),i.Ab(18,16384,null,0,b.j,[i.W,i.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,4,0,"primary"),l(n,14,0,"true"),l(n,16,0,u.questions),l(n,18,0,u.shouldDisplayFinishButtton)}),(function(l,n){var u=n.component;l(n,7,0,u.quiz.subject,u.quiz.name),l(n,10,0,u.quiz.school_year)}))}var F=i.xb("app-play-quiz",d,(function(l){return i.Ub(0,[(l()(),i.Bb(0,0,null,null,1,"app-play-quiz",[],null,null,null,v,f)),i.Ab(1,114688,null,0,d,[h.a,r.Gb,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),k=function l(){_classCallCheck(this,l)};u.d(n,"PlayQuizPageModuleNgFactory",(function(){return y}));var y=i.yb(t,[],(function(l){return i.Kb([i.Lb(512,i.m,i.jb,[[8,[e.a,F]],[3,i.m],i.D]),i.Lb(4608,b.l,b.k,[i.z,[2,b.s]]),i.Lb(4608,a.q,a.q,[]),i.Lb(4608,r.b,r.b,[i.F,i.g]),i.Lb(4608,r.Fb,r.Fb,[r.b,i.m,i.w]),i.Lb(4608,r.Jb,r.Jb,[r.b,i.m,i.w]),i.Lb(1073742336,b.b,b.b,[]),i.Lb(1073742336,a.p,a.p,[]),i.Lb(1073742336,a.g,a.g,[]),i.Lb(1073742336,r.Db,r.Db,[]),i.Lb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),i.Lb(1073742336,k,k,[]),i.Lb(1073742336,t,t,[]),i.Lb(1024,h.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);