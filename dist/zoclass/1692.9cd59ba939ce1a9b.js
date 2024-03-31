"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[1692],{1692:(E,s,a)=>{a.r(s),a.d(s,{AdmitCardModule:()=>Q});var l=a(36895),p=a(89299),c=a(24006),t=a(94650),f=a(87129),u=a(38283),h=a(4153),C=a(22759),_=a(462),b=a(97496),x=a(3238),O=a(4859),m=a(59549),M=a(44144),P=a(51572),v=a(84385),A=a(88789);const Z=["content"];function T(o,e){1&o&&(t.TgZ(0,"mat-hint",17),t._uU(1,"Please enter admission number."),t.qZA())}function w(o,e){if(1&o&&(t.TgZ(0,"div")(1,"mat-option",18),t._uU(2),t.ALo(3,"classSuffix"),t.qZA()()),2&o){const n=e.$implicit;t.xp6(1),t.s9C("value",n.class),t.xp6(1),t.Oqu(t.lcZ(3,2,n.class))}}function y(o,e){1&o&&(t.TgZ(0,"mat-hint",17),t._uU(1,"Class is required"),t.qZA())}function I(o,e){1&o&&(t.TgZ(0,"mat-hint",17),t._uU(1,"Please enter roll number."),t.qZA())}function k(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"div",6)(1,"div",4)(2,"div",7)(3,"h3"),t._uU(4,"Admit Card"),t.qZA(),t.TgZ(5,"div",8)(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"form",9),t.NdJ("ngSubmit",function(){t.CHM(n);const r=t.oxw(2);return t.KtG(r.admitCard())}),t.TgZ(9,"mat-form-field",10)(10,"mat-label"),t._uU(11,"Admission No."),t.qZA(),t._UZ(12,"input",11),t.YNc(13,T,2,0,"mat-hint",12),t.qZA(),t.TgZ(14,"mat-form-field",10)(15,"mat-label"),t._uU(16,"class"),t.qZA(),t.TgZ(17,"mat-select",13),t.YNc(18,w,4,4,"div",14),t.qZA(),t.YNc(19,y,2,0,"mat-hint",12),t.qZA(),t.TgZ(20,"mat-form-field",10)(21,"mat-label"),t._uU(22,"Roll Number"),t.qZA(),t._UZ(23,"input",15),t.YNc(24,I,2,0,"mat-hint",12),t.qZA(),t.TgZ(25,"button",16),t._uU(26,"Submit"),t.qZA()()()()()()}if(2&o){const n=t.oxw(2);let i,r,d;t.xp6(7),t.Oqu(n.errorMsg),t.xp6(1),t.Q6J("formGroup",n.admitCardForm),t.xp6(5),t.Q6J("ngIf",!(null!=(i=n.admitCardForm.get("admissionNo"))&&i.valid)&&(null==(i=n.admitCardForm.get("admissionNo"))?null:i.touched)),t.xp6(5),t.Q6J("ngForOf",n.classInfo),t.xp6(1),t.Q6J("ngIf",!(null!=(r=n.admitCardForm.get("class"))&&r.valid)&&(null==(r=n.admitCardForm.get("class"))?null:r.touched)),t.xp6(5),t.Q6J("ngIf",!(null!=(d=n.admitCardForm.get("rollNumber"))&&d.valid)&&(null==(d=n.admitCardForm.get("rollNumber"))?null:d.touched)),t.xp6(1),t.Q6J("disabled",!n.admitCardForm.valid)}}function U(o,e){if(1&o&&(t.TgZ(0,"div",3)(1,"div",4),t.YNc(2,k,27,7,"div",5),t.qZA()()),2&o){const n=t.oxw();t.xp6(2),t.Q6J("ngIf",!n.studentAdmitCardInfo)}}function q(o,e){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"titlecase"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA()()),2&o){const n=e.$implicit,i=e.index;t.xp6(2),t.hij(" ",i+1," "),t.xp6(2),t.hij(" ",t.lcZ(5,4,n.subject)," "),t.xp6(3),t.hij(" ",n.date," "),t.xp6(2),t.hij(" ",n.timing," ")}}function N(o,e){if(1&o&&(t.ynx(0),t.YNc(1,q,10,6,"tr",14),t.BQk()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.processedData)}}function z(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"div",19)(1,"div",4)(2,"div",20,21)(4,"div",22)(5,"table",23)(6,"tr")(7,"td"),t._UZ(8,"img",24),t._uU(9),t.ALo(10,"uppercase"),t.ALo(11,"uppercase"),t.qZA()()(),t.TgZ(12,"table",25)(13,"tr")(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.ALo(18,"titlecase"),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA()()(),t.TgZ(21,"table",25)(22,"tr")(23,"th"),t._uU(24,"Admission No. :"),t.qZA(),t.TgZ(25,"td"),t._uU(26),t.qZA(),t.TgZ(27,"td",26),t._uU(28,"Roll Number :"),t.qZA(),t.TgZ(29,"td"),t._uU(30),t.qZA(),t.TgZ(31,"td",26),t._uU(32,"Class :"),t.qZA(),t.TgZ(33,"td"),t._uU(34),t.ALo(35,"classSuffix"),t.qZA()(),t.TgZ(36,"tr")(37,"td",26),t._uU(38,"Student Name :"),t.qZA(),t.TgZ(39,"td"),t._uU(40),t.ALo(41,"titlecase"),t.qZA(),t.TgZ(42,"td",26),t._uU(43,"Father Name :"),t.qZA(),t.TgZ(44,"td"),t._uU(45),t.ALo(46,"titlecase"),t.qZA(),t.TgZ(47,"td",26),t._uU(48,"Mother Name :"),t.qZA(),t.TgZ(49,"td"),t._uU(50),t.ALo(51,"titlecase"),t.qZA()()(),t.TgZ(52,"table",27)(53,"tr")(54,"th"),t._uU(55,"S.No."),t.qZA(),t.TgZ(56,"th"),t._uU(57,"Subject"),t.qZA(),t.TgZ(58,"th"),t._uU(59,"Exam Date"),t.qZA(),t.TgZ(60,"th"),t._uU(61,"Exam Timing"),t.qZA()(),t.YNc(62,N,2,1,"ng-container",28),t.qZA(),t.TgZ(63,"table",29)(64,"tr")(65,"td",30),t._uU(66,"Class Teacher (Signature)"),t.qZA(),t.TgZ(67,"td",31),t._uU(68,"Principal (Sign. with official seal)"),t.qZA()()(),t.TgZ(69,"div")(70,"h4",26),t._uU(71,"Disclaimer:"),t.qZA(),t.TgZ(72,"p"),t._uU(73,"This is your online admit card, issued in accordance with our institution's policies. Please take note of the following:"),t.qZA(),t.TgZ(74,"p"),t._uU(75),t.qZA(),t.TgZ(76,"p"),t._uU(77,"2. Verify Details: Review the admit card for accuracy, including your name, exam details, and date. Report any discrepancies to the Examination Office for correction."),t.qZA(),t.TgZ(78,"p"),t._uU(79,"3. Non-Transferable: This admit card is for your use only; it should not be shared or used by others."),t.qZA(),t.TgZ(80,"p"),t._uU(81,"4. Keep Secure: Maintain this admit card in a secure place. You'll need it for admission on the examination or event day."),t.qZA(),t.TgZ(82,"p"),t._uU(83,"5. Lost or Damaged: In case of loss or damage to the admit card, please contact the Examination Office for a duplicate or replacement. A fee may apply."),t.qZA(),t.TgZ(84,"p"),t._uU(85,"6. Exam Rules: Follow the rules and instructions provided by the examination authorities. Any violation may lead to disqualification."),t.qZA(),t.TgZ(86,"p"),t._uU(87,"Your acceptance and retention of this admit card indicate your understanding and agreement with the terms and conditions outlined in this document."),t.qZA()()()()(),t.TgZ(88,"div",4)(89,"div",32)(90,"button",33),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.downloadPDF())}),t._uU(91,"PDF"),t.qZA(),t.TgZ(92,"button",34),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.printContent())}),t._uU(93,"Print"),t.qZA()()(),t._UZ(94,"app-footer"),t.qZA()}if(2&o){const n=t.oxw();t.xp6(9),t.AsE(" ",t.lcZ(10,14,null==n.schoolInfo?null:n.schoolInfo.schoolName),", ",t.lcZ(11,16,null==n.schoolInfo?null:n.schoolInfo.city)," "),t.xp6(6),t.hij(" School Code : ",null==n.schoolInfo?null:n.schoolInfo.schoolCode," "),t.xp6(2),t.AsE(" ",t.lcZ(18,18,null==n.studentAdmitCardInfo?null:n.studentAdmitCardInfo.examType)," Exam Admit Card - ",null==n.studentAdmitCardInfo?null:n.studentAdmitCardInfo.session," "),t.xp6(3),t.hij(" Affiliation No. : ",null==n.schoolInfo?null:n.schoolInfo.affiliationNumber," "),t.xp6(6),t.Oqu(null==n.studentAdmitCardInfo?null:n.studentAdmitCardInfo.admissionNo),t.xp6(4),t.Oqu(null==n.studentAdmitCardInfo?null:n.studentAdmitCardInfo.rollNumber),t.xp6(4),t.Oqu(t.lcZ(35,20,null==n.studentAdmitCardInfo?null:n.studentAdmitCardInfo.class)),t.xp6(6),t.Oqu(t.lcZ(41,22,null==n.studentAdmitCardInfo?null:n.studentAdmitCardInfo.name)),t.xp6(5),t.Oqu(t.lcZ(46,24,null==n.studentAdmitCardInfo?null:n.studentAdmitCardInfo.fatherName)),t.xp6(5),t.Oqu(t.lcZ(51,26,null==n.studentAdmitCardInfo?null:n.studentAdmitCardInfo.motherName)),t.xp6(12),t.Q6J("ngIf",n.processedData&&n.processedData.length>0),t.xp6(13),t.hij("1. Identification: This admit card serves as your identification for the examination or event at ",null==n.schoolInfo?null:n.schoolInfo.schoolName,".")}}function S(o,e){1&o&&t._UZ(0,"mat-progress-spinner",39)}function F(o,e){if(1&o&&(t.TgZ(0,"div",37),t.YNc(1,S,1,0,"mat-progress-spinner",38),t.qZA()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.loader)}}function J(o,e){if(1&o&&(t.TgZ(0,"div",35),t.YNc(1,F,2,1,"div",36),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.loader)}}const j=[{path:"",component:(()=>{class o{constructor(n,i,r,d,g){this.fb=n,this.schoolService=i,this.printPdfService=r,this.admitCardService=d,this.classService=g,this.errorMsg="",this.processedData=[],this.loader=!1,this.admitCardForm=this.fb.group({admissionNo:["",c.kI.required],class:["",c.kI.required],rollNumber:["",c.kI.required]})}ngOnInit(){this.getClass(),this.getSchool()}printContent(){this.printPdfService.printElement(this.content.nativeElement)}downloadPDF(){this.printPdfService.generatePDF(this.content.nativeElement,"Admitcard.pdf")}getSchool(){this.schoolService.getSchool().subscribe(n=>{n&&(this.schoolInfo=n)})}getClass(){this.classService.getClassList().subscribe(n=>{n&&(this.classInfo=n)})}admitCard(){this.admitCardService.singleStudentAdmitCard(this.admitCardForm.value).subscribe(n=>{n&&(this.loader=!0,(!this.processedData||!this.studentAdmitCardInfo||!this.admitCardInfo)&&(this.studentAdmitCardInfo={...n.studentInfo,...n.admitCard},this.admitCardInfo=n.admitCardStructure,this.processData()))},n=>{this.errorMsg=n.error.errorMsg})}processData(){for(let n=0;n<this.admitCardInfo.examDate.length;n++){const i=Object.keys(this.admitCardInfo.examDate[n])[0],r=Object.values(this.admitCardInfo.examDate[n])[0],d=Object.values(this.admitCardInfo.examStartTime[n])[0],g=Object.values(this.admitCardInfo.examEndTime[n])[0];this.processedData.push({subject:i,date:r,timing:`${d} to ${g}`})}setTimeout(()=>{this.loader=!1},1500)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(c.qu),t.Y36(f.E),t.Y36(u.Z),t.Y36(h.G),t.Y36(C.j))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-admit-card"]],viewQuery:function(n,i){if(1&n&&t.Gf(Z,5),2&n){let r;t.iGM(r=t.CRH())&&(i.content=r.first)}},decls:4,vars:3,consts:[["class","login",4,"ngIf"],["class","container-fluid",4,"ngIf"],["class","spinner-container",4,"ngIf"],[1,"login"],[1,"row"],["class","col-12 col-lg-5 offset-lg-3 login-card",4,"ngIf"],[1,"col-12","col-lg-5","offset-lg-3","login-card"],[1,"col-12","col-lg-10","offset-lg-1"],[1,"col-12"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","text","formControlName","admissionNo"],["class","form-text text-danger",4,"ngIf"],["type","number","matInput","","formControlName","class"],[4,"ngFor","ngForOf"],["matInput","","type","text","formControlName","rollNumber"],["type","submit","mat-raised-button","",1,"submit-button",3,"disabled"],[1,"form-text","text-danger"],[3,"value"],[1,"container-fluid"],[1,"col-lg-10","offset-lg-1","custom-container"],["content",""],[1,"table-container"],[1,"logo-table","text-bold"],["src","../../../../assets/logo.png","alt",""],[1,"info-table"],[1,"text-bold"],[1,"custom-table"],[4,"ngIf"],[1,"custom-table",2,"border","none","margin-top","20px","margin-bottom","75px"],[1,"text-bold",2,"width","50%","padding-left","10%","text-align","left","border","none"],[1,"text-bold",2,"width","50%","padding-right","10%","text-align","right","border","none"],[1,"col-lg-10","offset-lg-1","mt-4","mb-4"],["mat-raised-button","",1,"submit-button","print-pdf","mx-4",3,"click"],["mat-raised-button","",1,"submit-button","print-pdf",3,"click"],[1,"spinner-container"],["class","spinner-overlay",4,"ngIf"],[1,"spinner-overlay"],["diameter","65","mode","indeterminate","strokeWidth","3",4,"ngIf"],["diameter","65","mode","indeterminate","strokeWidth","3"]],template:function(n,i){1&n&&(t._UZ(0,"app-header"),t.YNc(1,U,3,1,"div",0),t.YNc(2,z,95,28,"div",1),t.YNc(3,J,2,1,"div",2)),2&n&&(t.xp6(1),t.Q6J("ngIf",!i.admitCardInfo),t.xp6(1),t.Q6J("ngIf",i.admitCardInfo&&i.studentAdmitCardInfo),t.xp6(1),t.Q6J("ngIf",i.loader))},dependencies:[l.sg,l.O5,_.G,b.c,x.ey,O.lW,m.KE,m.bx,m.hX,M.Nt,P.Ou,v.gD,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,l.gd,l.rS,A.N],styles:[".login[_ngcontent-%COMP%]{background-color:#fff;padding-top:10vh;padding-left:2%;padding-right:2%}.login-card[_ngcontent-%COMP%]{background-color:#fff;padding-top:5vh;padding-bottom:5vh;box-shadow:none}.login-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}h3[_ngcontent-%COMP%]{color:#4e4caacd;padding-bottom:2vh;letter-spacing:.6px;font-size:18px;font-weight:500;margin-bottom:5px;text-align:center}h2[_ngcontent-%COMP%]{color:#e4409a;font-size:16px;letter-spacing:.5px}p[_ngcontent-%COMP%]{color:#4e4caac1;margin-top:2vh;letter-spacing:.25px;font-size:16px;margin-bottom:5px}a[_ngcontent-%COMP%]{color:#4e4caac1;font-size:16px;font-weight:500;letter-spacing:.25px;text-decoration:none}@media (min-width:1200px){.login[_ngcontent-%COMP%]{min-height:90vh;padding-top:5vh;background-color:#64748d15;padding-left:2%;padding-right:2%}.login-card[_ngcontent-%COMP%]{margin-top:2vh;margin-left:30%;margin-bottom:10vh;border-radius:15px;border:1px solid rgba(218,218,224,.858)}.login-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:48px;margin-bottom:15px}}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif;overflow-x:hidden}[_nghost-%COMP%]{--common-color: #fff;--header-height: 10vh}.header[_ngcontent-%COMP%]{background-color:var(--common-color);width:100%;min-height:var(--header-height);left:0;top:0;position:fixed;z-index:2;padding:0!important;display:flex;justify-content:space-around;box-shadow:0 0 1px -10px #64748d15,0 0 0 1px #4d5c7615,0 0 4px #64748d15}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:55px;margin-left:0}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8d6dff;font:1em sans-serif;letter-spacing:.5px}.main-menu[_ngcontent-%COMP%]{display:none}.hamburger-icon[_ngcontent-%COMP%]{fill:#8d6dff;width:24px;height:24px}.hamburger-menu[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:100vh;height:200vh;position:absolute;left:0;z-index:1000;top:0;display:block}.hamburger-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:large;color:#525098eb!important}.hamburger-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;margin-top:5px;color:#525098eb!important}.hamburger-menu[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{color:#525098eb!important;font-size:28px;margin-top:3.5vh;margin-left:88%}.top-hamburger-menu[_ngcontent-%COMP%]{display:none}[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;height:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#4e4caa24}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#4e4caa32}.side-navbar[_ngcontent-%COMP%]{display:none}.dashboard-container[_ngcontent-%COMP%]{background-color:transparent;min-height:90vh;width:100%}.big-container[_ngcontent-%COMP%]{background-color:#fff;width:100%;min-height:70vh;margin-top:1vh}.main-card[_ngcontent-%COMP%]{min-height:70vh;width:100%;background-color:transparent}.main-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#4e4caacd;letter-spacing:.6px;font-size:18px}.modal-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#4e4caacd;letter-spacing:.5px;font-size:16px}h4[_ngcontent-%COMP%]{color:#4e4caacd}p[_ngcontent-%COMP%]{color:#4e4caacd;font-size:15px}.category-card[_ngcontent-%COMP%]{background:#ebebff;height:200px;border-radius:15px;cursor:pointer}.category-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;margin-top:25%;letter-spacing:.6px;font-size:18px;color:#4e4caacd}.form-control[_ngcontent-%COMP%]{height:45px;color:#4e4caacd;border:2px solid #e1dfeed7}.form-control[_ngcontent-%COMP%]::placeholder{color:#4e4caa83;font-size:15px}.form-control[_ngcontent-%COMP%]:focus{border-color:#4e4caa46;box-shadow:0 0 0 1px #4e4caa1e}.text-danger[_ngcontent-%COMP%]{font-size:12px}.submit-button[_ngcontent-%COMP%]{height:42px;background:#8d6dff;color:#fff;box-shadow:none!important}.submit-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){background:#ebebff;color:#4e4caacd;cursor:not-allowed}.status-active[_ngcontent-%COMP%]{color:#8d6dff;font-weight:500;cursor:pointer;text-decoration:none}.status-inactive[_ngcontent-%COMP%]{color:#4e4caacd;cursor:pointer;text-decoration:none}.table[_ngcontent-%COMP%]{height:auto;display:block;width:100%;overflow-y:auto;overflow-x:auto}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{white-space:nowrap;color:#4e4caacd}table[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#4e4caacd;cursor:pointer}.table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4e4caacd}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center}.modal.fade.show[_ngcontent-%COMP%]{display:block;z-index:10!important;background:rgba(0,0,0,.5)}.modal-header[_ngcontent-%COMP%]{background-color:#8d6dff;top:0;position:sticky;z-index:1}.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{color:#fff}.modal-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{cursor:pointer;color:#fff}.modal-footer[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background-color:#fff}.modal-body[_ngcontent-%COMP%]{overflow-y:auto;max-height:calc(80vh - 2.3 * 3.5rem)}.modal-dialog[_ngcontent-%COMP%]{height:80vh}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:185%}.modal-title[_ngcontent-%COMP%]{color:#8d6dff;font-size:20px}.delete-button[_ngcontent-%COMP%]{background:#eeecf5;color:#4a4a71;box-shadow:none}.success-message[_ngcontent-%COMP%]{color:#16b978;font-size:20px}.error-message[_ngcontent-%COMP%]{color:#e4409a}  mat-form-field{width:100%!important}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#4e4caac1!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#4e4caac1!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#4e4caac1!important;opacity:.8!important}  .mat-input-element{caret-color:#4e4caac1!important}  .mat-form-field-invalid .mat-input-element, .mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#4e4caac1!important}  .mat-form-field-label{color:#4e4caac1!important}  .mat-form-field.mat-focused .mat-form-field-label{color:#4e4caac1!important}  .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#4e4caac1!important}  .mat-radio-button{color:#4e4caac1;margin-right:20px;margin-bottom:5px}  .mat-radio-outer-circle{border:1px solid #4e4caac1}  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#8d6dff}  .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#8d6dff}  .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#0000001a!important}.mat-checkbox[_ngcontent-%COMP%]{color:#4e4caac1}  .mat-checkbox-frame{border-color:#4e4caac1!important}  .mat-checkbox-ripple .mat-ripple-element{background-color:#8d6dff!important}  .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#8d6dff!important}  .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#8d6dff!important}  .mat-slide-toggle-bar{height:27px!important;width:48px!important;border-radius:36px!important;background-color:#d3cde8}  .mat-slide-toggle-thumb{top:6px!important;right:-6px!important;position:relative!important;background-color:#fff!important}  .mat-slide-toggle.mat-checked .mat-ripple-element{background-color:transparent}  .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{background-color:#8d6dff!important}  .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{background-color:#fff!important}@media (min-width: 576px) and (max-width:991.98px){.header[_ngcontent-%COMP%], .side-navbar[_ngcontent-%COMP%], .dashboard-container[_ngcontent-%COMP%]{display:none}}@media (min-width: 992px){.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:60px;margin-left:50px;margin-right:10px}.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1.1em sans-serif;letter-spacing:.5px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font:1em sans-serif;letter-spacing:.4px}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]{display:inline-block}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#8d6dff;margin-left:20px;cursor:pointer}.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{color:#8d6dff;font:1.2em sans-serif;letter-spacing:.85px}.desktop-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#525098eb}.desktop-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;margin-top:2px;color:#525098eb}.hamburger[_ngcontent-%COMP%], .hamburger-menu[_ngcontent-%COMP%], .hamburger-icon[_ngcontent-%COMP%]{display:none}.side-navbar[_ngcontent-%COMP%]{height:90vh;width:16.5%;position:fixed;left:0;padding-top:2vh;padding-bottom:10vh;display:block;justify-content:space-around;background-color:#fff;overflow-x:auto;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#8d6dff;width:100%;padding:5px;display:block;flex-direction:column}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:medium;display:inline-block;margin-left:5px;margin-top:5px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-size:1.1em;font-weight:400;text-align:center;margin-left:15px}.side-navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.active-link[_ngcontent-%COMP%]{background:#8d6dff;color:#fff}.dashboard-container[_ngcontent-%COMP%]{width:auto;background-color:#64748d15;padding-bottom:1.5vh}.big-container[_ngcontent-%COMP%]{background-color:#fff;min-height:87vh;width:98.5%;margin-top:1.5vh;margin-left:.75%;border-radius:10px;box-shadow:0 0 1px -10px #64748d15,0 0 #64748d15,0 0 4px #64748d15}.main-card[_ngcontent-%COMP%]{min-height:70vh;padding-left:2px;padding-right:2px}.table[_ngcontent-%COMP%]{display:inline-table;width:100%}.scroll-content[_ngcontent-%COMP%]{overflow-x:auto}.wide-content[_ngcontent-%COMP%]{min-width:100%}}.custom-container[_ngcontent-%COMP%]{font-family:Arial,sans-serif;overflow:auto}.table-container[_ngcontent-%COMP%]{background-color:#fff;border:none;padding:25px;margin-top:2vh}.logo-table[_ngcontent-%COMP%]{width:800px;border:none;font-size:1.3em;margin-top:2vh;margin-bottom:5vh;letter-spacing:.5px;display:inline-table}.logo-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px;border:none;text-align:center}.info-table[_ngcontent-%COMP%]{width:800px;border:none;font-size:1em;letter-spacing:.25px;margin-bottom:5vh;display:inline-table}img[_ngcontent-%COMP%]{height:35px}.info-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px;border:none}.custom-table[_ngcontent-%COMP%]{width:800px;font-size:1em;letter-spacing:.25px;margin-bottom:20px;border:1px solid #ccc;display:inline-table}.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px;border:1px solid rgb(218,218,222);text-align:center}.receipt-table[_ngcontent-%COMP%]{width:800px;font-size:1em;letter-spacing:.25px;margin-bottom:20px;border:1px solid rgb(218,218,222);display:inline-table}.receipt-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:40px}.receipt-table[_ngcontent-%COMP%]   .receipt-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{height:5px;padding-top:5px}.text-right[_ngcontent-%COMP%]{text-align:right}.border[_ngcontent-%COMP%]{border:1px solid #ccc}.text-center[_ngcontent-%COMP%]{text-align:center}.text-bold[_ngcontent-%COMP%]{font-weight:700}.print-pdf[_ngcontent-%COMP%]{display:none}@media (min-width: 576px) and (max-width:991.98px){.table-container[_ngcontent-%COMP%]{margin-top:1vh;border:1px solid #ccc}.logo-table[_ngcontent-%COMP%], .info-table[_ngcontent-%COMP%]{width:100%}.custom-table[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]{width:100%;font-size:10px}.print-pdf[_ngcontent-%COMP%]{display:inline-block}}@media (min-width: 992px){.table-container[_ngcontent-%COMP%]{margin-top:1vh;margin-bottom:2vh;border-radius:5px}.logo-table[_ngcontent-%COMP%], .info-table[_ngcontent-%COMP%]{width:100%}.custom-container[_ngcontent-%COMP%]{font-family:Arial,sans-serif;overflow:auto}.custom-table[_ngcontent-%COMP%], .receipt-table[_ngcontent-%COMP%]{width:100%}.print-pdf[_ngcontent-%COMP%]{display:inline-block}}.info-table[_ngcontent-%COMP%]{text-align:center}@media (min-width: 992px){.container-fluid[_ngcontent-%COMP%]{padding-top:3vh;background-color:#64748d15}.table-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;border:1px solid rgba(218,218,224,.858)}}"]}),o})()}];let D=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(j),p.Bz]}),o})();var Y=a(11160);let Q=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,D,Y.S]}),o})()}}]);