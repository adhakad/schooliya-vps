"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[8592],{23312:(h,i,r)=>{r.d(i,{S:()=>s});var l=r(94650);let s=(()=>{class u{transform(e,n){if(!e||!Array.isArray(e))return e;const t=[];for(let o=0;o<e.length;o+=n)t.push(e.slice(o,o+n));return t}}return u.\u0275fac=function(e){return new(e||u)},u.\u0275pipe=l.Yjl({name:"chunk",type:u,pure:!0}),u})()},32389:(h,i,r)=>{r.d(i,{k:()=>a});var l=r(92340),s=r(94650),u=r(80529);let a=(()=>{class e{constructor(t){this.http=t,this.url=`${l.N.API_URL}/v1/admit-card-structure`}addAdmitCardStructure(t){return this.http.post(`${this.url}`,t)}admitCardStructureByClass(t){return this.http.get(`${this.url}/${t}`)}changeAdmitCardPublishStatus(t){return this.http.put(`${this.url}/admitcard-publish-status/${t.id}`,t)}deleteAdmitCardStructure(t){return this.http.delete(`${this.url}/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(u.eN))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4153:(h,i,r)=>{r.d(i,{G:()=>a});var l=r(92340),s=r(94650),u=r(80529);let a=(()=>{class e{constructor(t){this.http=t,this.url=`${l.N.API_URL}/v1/admit-card`}admitCardStudentByClass(t){return this.http.get(`${this.url}/${t}`)}getAllStudentAdmitCardByClass(t){return this.http.get(`${this.url}/class/${t}`)}singleStudentAdmitCardById(t){return this.http.get(`${this.url}/student/${t}`)}singleStudentAdmitCard(t){return this.http.post(`${this.url}`,t)}changeStatus(t){return this.http.put(`${this.url}/status/${t.id}`,t)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(u.eN))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},28889:(h,i,r)=>{r.d(i,{r:()=>a});var l=r(92340),s=r(94650),u=r(80529);let a=(()=>{class e{constructor(t){this.http=t,this.url=`${l.N.API_URL}/v1/exam-result-structure`}addExamResultStructure(t){return console.log(t),this.http.post(`${this.url}`,t)}examResultStructureByClass(t){return this.http.get(`${this.url}/${t}`)}getSingleClassResultStrucByStream(t){return this.http.get(`${this.url}/class/${t.cls}/stream/${t.stream}/exam/${t.examType}`)}changeResultPublishStatus(t){return this.http.put(`${this.url}/result-publish-status/${t.id}`,t)}deleteResultStructure(t){return this.http.delete(`${this.url}/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(u.eN))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},87258:(h,i,r)=>{r.d(i,{k:()=>a});var l=r(92340),s=r(94650),u=r(80529);let a=(()=>{class e{constructor(t){this.http=t,this.url=`${l.N.API_URL}/v1/exam-result`}addExamResult(t){return this.http.post(`${this.url}`,t)}addBulkExamResult(t){return this.http.post(`${this.url}/bulk-exam-result`,t)}singleStudentExamResult(t){return this.http.post(`${this.url}/result`,t)}singleStudentExamResultById(t){return this.http.get(`${this.url}/student/${t}`)}getAllStudentExamResultByClass(t){return this.http.get(`${this.url}/class/${t}`)}updateExamResult(t){return this.http.put(`${this.url}`,t)}resultsByClass(t){return this.http.get(`${this.url}/student-results/${t}`)}deleteExamResult(t){return this.http.delete(`${this.url}/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(u.eN))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},11005:(h,i,r)=>{r.d(i,{t:()=>a});var l=r(92340),s=r(94650),u=r(80529);let a=(()=>{class e{constructor(t){this.http=t,this.url=`${l.N.API_URL}/v1/fees-structure`}addFeesStructure(t){return this.http.post(`${this.url}`,t)}feesStructureByClass(t){return this.http.get(`${this.url}/${t}`)}addBulkFees(t){return this.http.post(`${this.url}/bulk-fees`,t)}deleteFeesStructure(t){return this.http.delete(`${this.url}/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(u.eN))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},86898:(h,i,r)=>{r.d(i,{$:()=>a});var l=r(92340),s=r(94650),u=r(80529);let a=(()=>{class e{constructor(t){this.http=t,this.url=`${l.N.API_URL}/v1/fees`}addFees(t){return this.http.post(`${this.url}`,t)}addAdmissionFees(t){return this.http.post(`${this.url}/admission-fees`,t)}addBulkFees(t){return this.http.post(`${this.url}/bulk-fees`,t)}getAllStudentFeesCollectionByClass(t){return this.http.get(`${this.url}/class/${t}`)}singleStudentFeesCollectionById(t){return this.http.get(`${this.url}/student/${t}`)}feesPaginationList(t){return this.http.post(`${this.url}/fees-pagination`,t)}updateFees(t){return this.http.put(`${this.url}`,t)}resultsByClass(t){return this.http.get(`${this.url}/student-results/${t}`)}deleteFees(t){return this.http.delete(`${this.url}/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(u.eN))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},14743:(h,i,r)=>{r.d(i,{K:()=>a});var l=r(92340),s=r(94650),u=r(80529);let a=(()=>{class e{constructor(t){this.http=t,this.url=`${l.N.API_URL}/v1/issued-transfer-certificate`}createTransferCertificate(t){return this.http.post(this.url,t)}issuedTransferCertificatePagination(t){return this.http.post(`${this.url}/issued-transfer-certificate-pagination`,t)}deleteIssuedTransferCertificate(t){return this.http.delete(`${this.url}/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(u.eN))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);