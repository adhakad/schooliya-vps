"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[6031],{86031:(v,b,c)=>{c.r(b),c.d(b,{SubjectModule:()=>q});var o=c(36895),h=c(89299),u=c(24006),_=c(77579),t=c(94650),C=c(29444),M=c(62373),x=c(88153),d=c(4859),p=c(97392),i=c(59549),r=c(44144),m=c(51572),P=c(3238),O=c(80980);function j(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"p",25),t._uU(3),t.qZA()(),t.TgZ(4,"td")(5,"p",25),t._uU(6),t.qZA()(),t.TgZ(7,"td",25)(8,"mat-icon",26),t.NdJ("click",function(){const g=t.CHM(e).$implicit,f=t.oxw(2);return t.KtG(f.updateSubjectModel(g))}),t._uU(9,"edit"),t.qZA()(),t.TgZ(10,"td",25)(11,"mat-icon",26),t.NdJ("click",function(){const g=t.CHM(e).$implicit,f=t.oxw(2);return t.KtG(f.deleteSubjectModel(g._id))}),t._uU(12,"delete"),t.qZA()()()}if(2&n){const e=s.$implicit,a=s.index,l=t.oxw(2);t.xp6(3),t.Oqu(10*l.number+a+1-10),t.xp6(3),t.Oqu(e.subject)}}function T(n,s){if(1&n&&(t.TgZ(0,"tbody"),t.YNc(1,j,13,2,"tr",24),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.subjectInfo)}}function k(n,s){if(1&n&&(t.TgZ(0,"div",27)(1,"div",28)(2,"h5",29),t._uU(3,"Class"),t.qZA()(),t.TgZ(4,"div",30)(5,"p",31),t._uU(6),t.qZA()(),t.TgZ(7,"div",32),t._UZ(8,"mat-icon"),t.qZA()()),2&n){const e=t.oxw();t.xp6(6),t.Oqu(e.successMsg)}}function w(n,s){if(1&n&&(t.TgZ(0,"div")(1,"p",41),t._uU(2),t.qZA()()),2&n){const e=t.oxw(3);t.xp6(2),t.Oqu(e.errorMsg)}}function Z(n,s){1&n&&(t.TgZ(0,"mat-hint",42),t._uU(1,"Subject is required"),t.qZA())}function S(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"form",36),t.NdJ("ngSubmit",function(){t.CHM(e);const l=t.oxw(2);return t.KtG(l.subjectAddUpdate())}),t.TgZ(1,"div",30),t.YNc(2,w,3,1,"div",17),t.TgZ(3,"mat-form-field",37)(4,"mat-label"),t._uU(5,"Subject"),t.qZA(),t._UZ(6,"input",38),t.YNc(7,Z,2,0,"mat-hint",39),t.qZA()(),t.TgZ(8,"div",32)(9,"button",40),t._uU(10,"Submit"),t.qZA()()()}if(2&n){const e=t.oxw(2);let a;t.Q6J("formGroup",e.subjectForm),t.xp6(2),t.Q6J("ngIf",e.errorCheck),t.xp6(5),t.Q6J("ngIf",!(null!=(a=e.subjectForm.get("subject"))&&a.valid)&&(null==(a=e.subjectForm.get("subject"))?null:a.touched)),t.xp6(2),t.Q6J("disabled",!e.subjectForm.valid)}}function y(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"h4"),t._uU(2,"To delete class, click ok to confirm."),t.qZA(),t.TgZ(3,"div",32)(4,"button",43),t.NdJ("click",function(){t.CHM(e);const l=t.oxw(2);return t.KtG(l.subjectDelete(l.deleteById))}),t._uU(5,"Ok"),t.qZA()()()}}function N(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",27)(1,"div",28)(2,"h5",33),t._uU(3),t.qZA(),t.TgZ(4,"mat-icon",34),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.closeModal())}),t._uU(5,"close"),t.qZA()(),t.YNc(6,S,11,4,"form",35),t.YNc(7,y,6,0,"div",17),t.qZA()}if(2&n){const e=t.oxw();t.xp6(3),t.hij("",e.updateMode?"Update":e.deleteMode?"Delete":"Create New"," Subject"),t.xp6(3),t.Q6J("ngIf",!e.deleteMode),t.xp6(1),t.Q6J("ngIf",e.deleteMode)}}function A(n,s){1&n&&t._UZ(0,"mat-progress-spinner",48)}function I(n,s){if(1&n&&(t.TgZ(0,"div",46),t.YNc(1,A,1,0,"mat-progress-spinner",47),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.loader)}}function U(n,s){if(1&n&&(t.TgZ(0,"div",44),t.YNc(1,I,2,1,"div",45),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.loader)}}const J=[{path:"",component:(()=>{class n{constructor(e,a){this.fb=e,this.subjectService=a,this.showModal=!1,this.updateMode=!1,this.deleteMode=!1,this.deleteById="",this.successMsg="",this.errorMsg="",this.errorCheck=!1,this.subjectInfo=[],this.recordLimit=5,this.filters={},this.number=0,this.paginationValues=new _.x,this.loader=!0,this.subjectForm=this.fb.group({_id:[""],subject:["",u.kI.required]})}ngOnInit(){this.getSubject({page:1})&&setTimeout(()=>{this.loader=!1},1e3)}getSubject(e){return new Promise((a,l)=>{let g={filters:{},page:e.page,limit:e.limit?e.limit:this.recordLimit};this.recordLimit=g.limit,this.filters.searchText&&(g.filters.searchText=this.filters.searchText.trim()),this.subjectService.subjectPaginationList(g).subscribe(f=>{if(f)return this.subjectInfo=f.subjectList,this.number=g.page,this.paginationValues.next({type:"page-init",page:g.page,totalTableRecords:f.countSubject}),a(!0)})})}closeModal(){this.showModal=!1,this.updateMode=!1,this.deleteMode=!1,this.errorMsg=""}addSubjectModel(){this.showModal=!0,this.deleteMode=!1,this.subjectForm.reset()}updateSubjectModel(e){this.showModal=!0,this.deleteMode=!1,this.updateMode=!0,this.subjectForm.patchValue(e)}deleteSubjectModel(e){this.showModal=!0,this.updateMode=!1,this.deleteMode=!0,this.deleteById=e}successDone(){setTimeout(()=>{this.closeModal(),this.successMsg="",this.getSubject({page:1})},1e3)}subjectAddUpdate(){this.subjectForm.valid&&(this.updateMode?this.subjectService.updateSubject(this.subjectForm.value).subscribe(e=>{e&&(this.successDone(),this.successMsg=e)},e=>{this.errorCheck=!0,this.errorMsg=e.error}):this.subjectService.addSubject(this.subjectForm.value).subscribe(e=>{e&&(this.successDone(),this.successMsg=e)},e=>{this.errorCheck=!0,this.errorMsg=e.error}))}subjectDelete(e){this.subjectService.deleteSubject(e).subscribe(a=>{a&&(this.successDone(),this.successMsg=a,this.deleteById="")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.qu),t.Y36(C._))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-subject"]],decls:38,vars:8,consts:[[1,"container-fluid","dashboard-container"],[1,"row"],[1,"col-12","col-lg-2"],[1,"col-12","col-lg-10"],[1,"col-12","big-container"],[1,"col-lg-12","offset-lg-0"],[1,"main-card"],[1,"row","mt-4","mb-2"],[1,"col-8","col-lg-5"],["type","text","placeholder","Subject Search...","id","searchText","name","searchText",1,"form-control",3,"ngModel","ngModelChange","keyup"],["searchText","ngModel"],[1,"col-4","col-lg-2","offset-lg-5"],["mat-raised-button","",1,"submit-button",3,"click"],[2,"font-size","20px"],[1,"table","table-hover","align-middle","mt-2","mb-1","bg-white"],[1,"bg-light"],[1,"text-muted"],[4,"ngIf"],[1,"pagination"],[3,"paginationValues","onChange"],[1,"modal","fade","show"],["role","document",1,"modal-dialog","modal-dialog-top"],["class","modal-content",4,"ngIf"],["class","spinner-container",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"mb-0"],[3,"click"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title",2,"color","transparent"],[1,"modal-body"],[1,"success-message"],[1,"modal-footer"],[1,"modal-title"],["matRipple","",3,"click"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","text","formControlName","subject"],["class","form-text text-danger",4,"ngIf"],["type","submit","mat-raised-button","",1,"submit-button",3,"disabled"],[1,"error-message"],[1,"form-text","text-danger"],["mat-raised-button","","type","button",1,"delete-button",3,"click"],[1,"spinner-container"],["class","spinner-overlay",4,"ngIf"],[1,"spinner-overlay"],["diameter","65","mode","indeterminate","strokeWidth","3",4,"ngIf"],["diameter","65","mode","indeterminate","strokeWidth","3"]],template:function(e,a){1&e&&(t._UZ(0,"app-header-navbar"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2),t._UZ(4,"app-side-navbar"),t.qZA(),t.TgZ(5,"div",3)(6,"div",1)(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"input",9,10),t.NdJ("ngModelChange",function(g){return a.filters.searchText=g})("keyup",function(){return a.getSubject({page:1,limit:0})}),t.qZA()(),t.TgZ(14,"div",11)(15,"button",12),t.NdJ("click",function(){return a.addSubjectModel()}),t.TgZ(16,"mat-icon",13),t._uU(17,"add"),t.qZA(),t._uU(18,"Create"),t.qZA()()(),t.TgZ(19,"table",14)(20,"thead",15)(21,"tr",16)(22,"th"),t._uU(23,"No."),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Subject"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Edit"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Remove"),t.qZA()()(),t.YNc(30,T,2,1,"tbody",17),t.qZA(),t.TgZ(31,"div",18)(32,"app-pagination",19),t.NdJ("onChange",function(g){return a.getSubject(g)}),t.qZA()(),t.TgZ(33,"div",20)(34,"div",21),t.YNc(35,k,9,1,"div",22),t.YNc(36,N,8,3,"div",22),t.qZA()()()()()()()()(),t.YNc(37,U,2,1,"div",23)),2&e&&(t.xp6(12),t.Q6J("ngModel",a.filters.searchText),t.xp6(18),t.Q6J("ngIf",a.subjectInfo&&a.subjectInfo.length>0),t.xp6(2),t.Q6J("paginationValues",a.paginationValues),t.xp6(1),t.ekj("show",a.showModal),t.xp6(2),t.Q6J("ngIf",a.successMsg),t.xp6(1),t.Q6J("ngIf",!a.successMsg),t.xp6(1),t.Q6J("ngIf",a.loader))},dependencies:[o.sg,o.O5,M.R,x.A,d.lW,p.Hw,i.KE,i.bx,i.hX,r.Nt,m.Ou,P.wG,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,u.On,O.Q],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif;overflow-x:hidden}[_nghost-%COMP%]{--common-color: #fff;--header-height: 10vh}.header[_ngcontent-%COMP%]{background-color:var(--common-color);width:100%;min-height:var(--header-height);left:0;top:0;position:fixed;z-index:2;padding:0!important;display:flex;justify-content:space-around;box-shadow:0 0 1px -10px #64748d15,0 0 0 1px #4d5c7615,0 0 4px #64748d15}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:55px;margin-left:0}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8d6dff;font:1em sans-serif;letter-spacing:.5px}.main-menu[_ngcontent-%COMP%]{display:none}.hamburger-icon[_ngcontent-%COMP%]{fill:#8d6dff;width:24px;height:24px}.hamburger-menu[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:100vh;height:200vh;position:absolute;left:0;z-index:1000;top:0;display:block}.hamburger-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:large;color:#525098eb!important}.hamburger-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;margin-top:5px;color:#525098eb!important}.hamburger-menu[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{color:#525098eb!important;font-size:28px;margin-top:3.5vh;margin-left:88%}.top-hamburger-menu[_ngcontent-%COMP%]{display:none}[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;height:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#4e4caa24}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#4e4caa32}.side-navbar[_ngcontent-%COMP%]{display:none}.dashboard-container[_ngcontent-%COMP%]{background-color:transparent;min-height:90vh;width:100%}.big-container[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:70vh;margin-top:1vh}.main-card[_ngcontent-%COMP%]{min-height:70vh;width:100%;background-color:transparent}.main-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#4e4caacd;letter-spacing:.6px;font-size:18px}.modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#4e4caacd;letter-spacing:.5px;font-size:16px}h4[_ngcontent-%COMP%]{color:#4e4caacd}p[_ngcontent-%COMP%]{color:#4e4caacd;font-size:15px}.category-card[_ngcontent-%COMP%]{background:#ebebff;height:200px;border-radius:15px;cursor:pointer}.category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin-top:25%;letter-spacing:.6px;font-size:18px;color:#4e4caacd}.form-control[_ngcontent-%COMP%]{height:45px;color:#4e4caacd;border:2px solid #e1dfeed7}.form-control[_ngcontent-%COMP%]::placeholder{color:#4e4caa83;font-size:15px}.form-control[_ngcontent-%COMP%]:focus{border-color:#4e4caa46;box-shadow:0 0 0 1px #4e4caa1e}.text-danger[_ngcontent-%COMP%]{font-size:12px}.submit-button[_ngcontent-%COMP%]{height:42px;background:#8d6dff;color:#fff;box-shadow:none!important}.submit-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#ebebff;color:#4e4caacd;cursor:not-allowed}.status-active[_ngcontent-%COMP%]{color:#8d6dff;font-weight:500;cursor:pointer;text-decoration:none}.status-inactive[_ngcontent-%COMP%]{color:#4e4caacd;cursor:pointer;text-decoration:none}.table[_ngcontent-%COMP%]{height:auto;display:block;width:100%;overflow-y:auto;overflow-x:auto}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{white-space:nowrap;color:#4e4caacd}table[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#4e4caacd;cursor:pointer}.table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4e4caacd}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center}.modal.fade.show[_ngcontent-%COMP%]{display:block;z-index:10!important;background:rgba(0,0,0,.5)}.modal-header[_ngcontent-%COMP%]{background-color:#8d6dff;top:0;position:sticky;z-index:1}.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{color:#fff}.modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer;color:#fff}.modal-footer[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background-color:#fff}.modal-body[_ngcontent-%COMP%]{overflow-y:auto;max-height:calc(80vh - 2.3 * 3.5rem)}.modal-dialog[_ngcontent-%COMP%]{height:80vh}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:185%}.modal-title[_ngcontent-%COMP%]{color:#8d6dff;font-size:20px}.delete-button[_ngcontent-%COMP%]{background:#eeecf5;color:#4a4a71;box-shadow:none}.success-message[_ngcontent-%COMP%]{color:#16b978;font-size:20px}.error-message[_ngcontent-%COMP%]{color:#e4409a}  mat-form-field{width:100%!important}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#4e4caac1!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#4e4caac1!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#4e4caac1!important;opacity:.8!important}  .mat-input-element{caret-color:#4e4caac1!important}  .mat-form-field-invalid .mat-input-element, .mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#4e4caac1!important}  .mat-form-field-label{color:#4e4caac1!important}  .mat-form-field.mat-focused .mat-form-field-label{color:#4e4caac1!important}  .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#4e4caac1!important}  .mat-radio-button{color:#4e4caac1;margin-right:20px;margin-bottom:5px}  .mat-radio-outer-circle{border:1px solid #4e4caac1}  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#8d6dff}  .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#8d6dff}  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#0000001a!important}.mat-checkbox[_ngcontent-%COMP%]{color:#4e4caac1}  .mat-checkbox-frame{border-color:#4e4caac1!important}  .mat-checkbox-ripple .mat-ripple-element{background-color:#8d6dff!important}  .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#8d6dff!important}  .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#8d6dff!important}  .mat-slide-toggle-bar{height:27px!important;width:48px!important;border-radius:36px!important;background-color:#d3cde8}  .mat-slide-toggle-thumb{top:6px!important;right:-6px!important;position:relative!important;background-color:#fff!important}  .mat-slide-toggle.mat-checked .mat-ripple-element{background-color:transparent}  .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#8d6dff!important}  .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#fff!important}@media (min-width: 576px) and (max-width:991.98px){.header[_ngcontent-%COMP%], .side-navbar[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]{display:none}}@media (min-width: 992px){.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:60px;margin-left:50px;margin-right:10px}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1.1em sans-serif;letter-spacing:.5px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1em sans-serif;letter-spacing:.4px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]{display:inline-block}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#8d6dff;margin-left:20px;cursor:pointer}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{color:#8d6dff;font:1.2em sans-serif;letter-spacing:.85px}.desktop-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#525098eb}.desktop-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;margin-top:2px;color:#525098eb}.hamburger[_ngcontent-%COMP%], .hamburger-menu[_ngcontent-%COMP%], .hamburger-icon[_ngcontent-%COMP%]{display:none}.side-navbar[_ngcontent-%COMP%]{height:90vh;width:16.5%;position:fixed;left:0;padding-top:2vh;padding-bottom:10vh;display:block;justify-content:space-around;background-color:#fff;overflow-x:auto;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#8d6dff;width:100%;padding:5px;display:block;flex-direction:column}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;display:inline-block;margin-left:5px;margin-top:5px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-size:1.1em;font-weight:400;text-align:center;margin-left:15px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.active-link[_ngcontent-%COMP%]{background:#8d6dff;color:#fff}.dashboard-container[_ngcontent-%COMP%]{width:auto;background-color:#64748d15;padding-bottom:1.5vh}.big-container[_ngcontent-%COMP%]{background-color:#fff;min-height:87vh;width:98.5%;margin-top:1.5vh;margin-left:.75%;border-radius:10px;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.main-card[_ngcontent-%COMP%]{min-height:70vh;padding-left:2px;padding-right:2px}.table[_ngcontent-%COMP%]{display:inline-table;width:100%}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:100%}}.table[_ngcontent-%COMP%]{display:inline-table}"]}),n})()}];let F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.Bz.forChild(J),h.Bz]}),n})();var z=c(1293);let q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[o.ez,F,z.g]}),n})()},80980:(v,b,c)=>{c.d(b,{Q:()=>x});var o=c(94650),h=c(36895),u=c(4859),_=c(97392);function t(d,p){if(1&d){const i=o.EpF();o.TgZ(0,"button",6),o.NdJ("click",function(){o.CHM(i);const m=o.oxw().$implicit,P=o.oxw(2);return o.KtG(P.onChangePage(m,0))}),o._uU(1),o.qZA()}if(2&d){const i=o.oxw().$implicit,r=o.oxw(2);o.ekj("pagination_active",r.activePageNumber==i),o.xp6(1),o.Oqu(i)}}function C(d,p){if(1&d&&o.YNc(0,t,2,3,"button",5),2&d){const i=p.$implicit,r=o.oxw(2);o.Q6J("ngIf",r.showPages(i))}}function M(d,p){if(1&d){const i=o.EpF();o.TgZ(0,"div",1)(1,"ul",2)(2,"button",3),o.NdJ("click",function(){o.CHM(i);const m=o.oxw();return o.KtG(m.changePage(-1))}),o.TgZ(3,"mat-icon"),o._uU(4,"chevron_left"),o.qZA()(),o.YNc(5,C,1,1,"ng-template",4),o.TgZ(6,"button",3),o.NdJ("click",function(){o.CHM(i);const m=o.oxw();return o.KtG(m.changePage(1))}),o.TgZ(7,"mat-icon"),o._uU(8,"chevron_right"),o.qZA()()()()}if(2&d){const i=o.oxw();o.xp6(5),o.Q6J("ngForOf",i.pages)}}let x=(()=>{class d{constructor(){this.totalTableRecords=0,this.onChange=new o.vpe,this.recordLimit=10,this.pages=[],this.activePageNumber=0,this.iteration=0,this.filters={},this.selectedLimit=10}ngOnInit(){this.paginationValues?.subscribe(i=>{i&&"page-init"==i.type&&(this.totalTableRecords=i.totalTableRecords,this.onChangePage(i.page,0))})}calcNumberOfPage(){this.iteration=0==this.recordLimit?0:this.totalTableRecords/this.recordLimit,this.iteration=this.iteration<0?0:this.iteration>Number(this.iteration.toFixed())?Number(this.iteration.toFixed())+1:Number(this.iteration.toFixed())}onChangePage(i,r){this.calcNumberOfPage(),this.pages=[];for(var m=1;m<=this.iteration;m++)this.pages[m-1]=m;(i!=this.activePageNumber||r)&&(this.activePageNumber=i,this.onChange.emit({page:i,limit:this.recordLimit}))}queryLimitChange(i){this.recordLimit="ALL"==i?0:parseInt(i),this.onChangePage(1,1)}changePage(i){if(!(-1==i&&this.activePageNumber<=1||1==i&&this.iteration<=this.activePageNumber)){var r=this.activePageNumber+Number(i);this.calcNumberOfPage(),-1==r&&(r=0),r>this.iteration&&(r=this.iteration),this.onChangePage(r,0)}}showPages(i){if(i>this.activePageNumber-5&&this.activePageNumber+5>i)return!0}}return d.\u0275fac=function(i){return new(i||d)},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-pagination"]],inputs:{totalTableRecords:"totalTableRecords",paginationValues:"paginationValues"},outputs:{onChange:"onChange"},decls:1,vars:1,consts:[["class","pagination-wrapper mt-0",4,"ngIf"],[1,"pagination-wrapper","mt-0"],[1,"pagination"],["mat-icon-button","",3,"click"],["ngFor","",3,"ngForOf"],["class","button","mat-icon-button","",3,"pagination_active","click",4,"ngIf"],["mat-icon-button","",1,"button",3,"click"]],template:function(i,r){1&i&&o.YNc(0,M,9,1,"div",0),2&i&&o.Q6J("ngIf",r.totalTableRecords&&r.totalTableRecords>0&&r.selectedLimit<r.totalTableRecords)},dependencies:[h.sg,h.O5,u.lW,_.Hw],styles:[".flm[_ngcontent-%COMP%]{float:left;margin-top:10px}button[_ngcontent-%COMP%]{color:#8d6dff}.button[_ngcontent-%COMP%]{background-color:#e7e6f897;margin:3px}.pagination_active[_ngcontent-%COMP%]{background-color:#8d6dff;color:#fff;margin:3px}"]}),d})()}}]);