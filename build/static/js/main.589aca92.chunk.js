(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{78:function(e,t,a){},80:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var r,n=a(0),c=a.n(n),s=a(10),i=a.n(s),o=(a(78),a(17)),u=a.n(o),l=a(26),b=a(13),j=(a(80),a(62)),d=function(){var e=Object(l.a)(u.a.mark((function e(t,a,r){var n,c,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api.php?amount=".concat(t,"&category=").concat(r,"&difficulty=").concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,s=c.results,i=s.map((function(e){return{question:e.question,answer:e.correct_answer,options:(t=e.incorrect_answers.concat(e.correct_answer),Object(j.a)(t).sort((function(){return Math.random()-.5})))};var t})),e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_category.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,r=a.trivia_categories,n=r,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=a(16),O=a(119),f=a(129),h=a(89),x=a(122),g=a(132),y=a(131),v=a(123),N=a(130),w=a(124),S=a(4),k=Object(O.a)((function(e){return{QuizStart:{height:"100vh",width:"100%",display:"flex",justifyItems:"center",alignItems:"center"},quesCard:Object(m.a)({width:"90%",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",margin:"0 auto",background:"white",borderRadius:"0.5rem"},e.breakpoints.up("md"),{width:"70%"}),primaryColor:{color:e.palette.primary.main},quesParent:{background:e.palette.primary.main,color:"#f3f3f3",borderRadius:"0.5rem"},loader:{position:"absolute",left:"50%",top:"50%",transform:"translte(-50%,-50%)"}}})),Q=function(e){var t=e.options,a=e.question,r=e.answer,c=e.username,s=e.fetchNumberOfQuestiuons,i=e.TotalScore,o=e.score,u=e.QuestionsCountProps,l=e.callback,j=Object(n.useState)(""),d=Object(b.a)(j,2),p=d[0],m=d[1],O=Object(n.useState)(!1),Q=Object(b.a)(O,2),C=Q[0],q=Q[1],F=u.questionCount,T=u.setQuestionCount,I=k(),U=function(){r===p&&(i(o+1),m("")),s!==F&&T(F+1)};return Object(n.useEffect)((function(){q(s===F)}),[F,o,s]),Object(S.jsx)("div",{className:I.QuizStart,children:Object(S.jsx)("div",{className:I.quesCard,children:Object(S.jsxs)(f.a,{py:3,px:4,children:[Object(S.jsxs)(f.a,{px:1,children:[Object(S.jsx)(h.a,{variant:"h6",style:{textTransform:"capitalize"},children:Object(S.jsxs)("b",{children:[" Student Name : ",c," "]})}),Object(S.jsx)(f.a,{py:2,px:1,children:Object(S.jsx)(x.a,{className:I.primaryColor})}),Object(S.jsx)(h.a,{variant:"h5",color:"primary",children:Object(S.jsxs)("b",{children:["Question ",F+1," of ",s+1]})})]}),Object(S.jsx)(f.a,{py:2,px:1,children:Object(S.jsx)(x.a,{className:I.primaryColor})}),Object(S.jsx)(f.a,{py:3,px:2,className:I.quesParent,children:Object(S.jsx)(h.a,{variant:"h5",children:a})}),Object(S.jsx)("form",{name:"settingForm",onSubmit:l,children:Object(S.jsx)(f.a,{px:1,pt:3,children:Object(S.jsxs)(g.a,{component:"fieldset",children:[Object(S.jsx)(y.a,{"aria-label":"gender",name:"gender1",value:p,onChange:function(e){return m(e.target.value)},children:t.map((function(e,t){return Object(S.jsx)(v.a,{value:e,control:Object(S.jsx)(N.a,{color:"primary"}),label:e,color:"primary"},t)}))}),Object(S.jsx)(f.a,{py:2,children:C?Object(S.jsx)(w.a,{variant:"contained",color:"primary",onClick:U,type:"submit",children:"Submit"}):Object(S.jsx)(w.a,{variant:"contained",color:"primary",onClick:U,disabled:""===p,children:"Next"})})]})})})]})})})},C=a(12);!function(e){e.Easy="easy",e.Medium="medium",e.Hard="hard"}(r||(r={}));var q=a(125),F=a(133),T=a(135),I=a(128),U=a(61),z=Object(O.a)((function(e){var t;return{root:{height:"100vh",width:"100%",display:"flex",justifyItems:"center",alignItems:"center"},loader:{position:"absolute",left:"50%",top:"50%",transform:"translte(-50%,-50%)"},settingHeader:{background:e.palette.primary.main,color:"white",borderRadius:"0.5rem"},form:(t={width:"90%",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",margin:"0 auto",background:"white",borderRadius:"0.5rem"},Object(m.a)(t,e.breakpoints.up("sm"),{width:"60%"}),Object(m.a)(t,e.breakpoints.up("md"),{width:"50%"}),Object(m.a)(t,e.breakpoints.up("lg"),{width:"30%"}),t),inputFields:{width:"100%",marginTop:"20px"}}})),R=function(e){var t=e.setSettings,a=e.setRequest,c=z(),s=Object(n.useState)([]),i=Object(b.a)(s,2),o=i[0],j=i[1],d=Object(n.useState)({userName:"",questionNumbers:""}),m=Object(b.a)(d,2),O=m[0],x=m[1],y=Object(n.useState)({UserName:"",numberOfQuestions:5,difficulty:"easy",category:9,categoryName:"General Knowledge"}),v=Object(b.a)(y,2),N=v[0],k=v[1];if(Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!o.length)return Object(S.jsx)("div",{children:Object(S.jsx)(q.a,{color:"secondary",className:c.loader})});var Q=o.filter((function(e){return e.id===N.category})),R={UserName:N.UserName,numberOfQuestions:N.numberOfQuestions,difficulty:N.difficulty,category:N.category,categoryName:Q[0].name};return Object(S.jsx)("div",{children:Object(S.jsx)("div",{className:c.root,children:Object(S.jsx)("form",{className:c.form,onSubmit:function(e){e.preventDefault(),t(R),""===N.UserName?x(Object(C.a)(Object(C.a)({},O),{},{userName:String("User name is required")})):N.numberOfQuestions<=3||N.numberOfQuestions>=50?x(Object(C.a)(Object(C.a)({},O),{},{questionNumbers:String("Number of Questions must be between 3 to 50")})):a(!0)},children:Object(S.jsxs)(f.a,{py:3,px:4,children:[Object(S.jsx)("div",{className:c.settingHeader,children:Object(S.jsx)(f.a,{py:2,px:1,children:Object(S.jsx)(h.a,{variant:"h4",align:"center",children:"Settings"})})}),Object(S.jsx)(F.a,{error:""!==O.userName,helperText:""===O.userName?"":O.userName,id:"standard-basic",label:"Your Name",type:"text",value:N.UserName,onChange:function(e){k(Object(C.a)(Object(C.a)({},N),{},{UserName:String(e.target.value)})),x(Object(C.a)(Object(C.a)({},O),{},{userName:""}))},className:c.inputFields}),Object(S.jsx)(F.a,{error:""!==O.questionNumbers,helperText:""===O.questionNumbers?"":O.questionNumbers,id:"standard-basic",label:"Select Number of Questions",type:"number",value:0===N.numberOfQuestions?"":N.numberOfQuestions,onChange:function(e){k(Object(C.a)(Object(C.a)({},N),{},{numberOfQuestions:Number(e.target.value)})),x(Object(C.a)(Object(C.a)({},O),{},{questionNumbers:""}))},className:c.inputFields}),Object(S.jsxs)(g.a,{className:c.inputFields,children:[Object(S.jsx)(T.a,{htmlFor:"grouped-native-select",children:"Select Difficulty"}),Object(S.jsxs)(I.a,{native:!0,id:"grouped-native-select",onChange:function(e){k(Object(C.a)(Object(C.a)({},N),{},{difficulty:String(e.target.value)}))},children:[Object(S.jsx)("option",{value:r.Easy,children:"Easy"}),Object(S.jsx)("option",{value:r.Medium,children:"Medium"}),Object(S.jsx)("option",{value:r.Hard,children:"Hard"})]})]}),Object(S.jsxs)(g.a,{className:c.inputFields,children:[Object(S.jsx)(T.a,{htmlFor:"grouped-native-select",children:"Select Category"}),Object(S.jsx)(U.a,{id:"grouped-native-select",defaultValue:"",onChange:function(e){k(Object(C.a)(Object(C.a)({},N),{},{category:Number(e.target.value)}))},children:o.map((function(e){return Object(S.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),Object(S.jsx)(f.a,{pt:4,pb:1,children:Object(S.jsx)(w.a,{variant:"contained",color:"primary",type:"submit",children:"Start Quiz"})})]})})})})},E=a(127),H=Object(O.a)((function(e){var t;return{root:{height:"100vh",width:"100%",display:"flex",justifyItems:"center",alignItems:"center"},result:(t={width:"90%",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",margin:"0 auto",background:"white",borderRadius:"0.5rem"},Object(m.a)(t,e.breakpoints.up("sm"),{width:"60%"}),Object(m.a)(t,e.breakpoints.up("md"),{width:"50%"}),Object(m.a)(t,e.breakpoints.up("lg"),{width:"30%"}),t),inputFields:{width:"100%",marginTop:"20px"},resultHeading:{background:e.palette.primary.main,color:"white",borderRadius:"0.5rem"}}})),P=function(e){var t=e.username,a=e.totalScore,r=e.numberOfQuestions,n=e.category,c=e.difficulty,s=e.callback,i=H(),o=[{name:"name",value:t},{name:"total questions",value:r},{name:"difficulty level",value:c},{name:"category",value:n},{name:"score",value:a}];return Object(S.jsx)("div",{className:i.root,children:Object(S.jsx)("div",{className:i.result,children:Object(S.jsxs)(f.a,{p:3,children:[Object(S.jsx)(f.a,{py:1,className:i.resultHeading,children:Object(S.jsx)(h.a,{variant:"h5",align:"center",children:"Result"})}),Object(S.jsxs)(f.a,{px:1,pb:1,pt:3,children:[o.map((function(e,t){return Object(S.jsxs)("div",{children:[Object(S.jsx)(f.a,{py:1,children:Object(S.jsxs)(E.a,{container:!0,children:[Object(S.jsx)(E.a,{item:!0,container:!0,xs:6,justify:"flex-start",alignItems:"center",children:Object(S.jsx)(h.a,{style:{fontWeight:550,textTransform:"capitalize"},variant:"subtitle1",align:"center",children:e.name})}),Object(S.jsx)(E.a,{item:!0,container:!0,xs:6,justify:"center",alignItems:"center",children:Object(S.jsx)(h.a,{style:{fontWeight:550,textTransform:"capitalize"},variant:"subtitle1",align:"center",color:"textSecondary",children:e.value})})]})}),Object(S.jsx)("hr",{style:{borderColor:"#259cf7",borderWidth:"1px",borderBottom:"none"}})]},t)})),Object(S.jsx)(f.a,{pt:4,children:Object(S.jsx)(w.a,{variant:"contained",color:"primary",onClick:s,children:"New Quiz"})})]})]})})})};var M=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),s=Object(b.a)(c,2),i=s[0],o=s[1],j=Object(n.useState)(!1),p=Object(b.a)(j,2),m=p[0],O=p[1],f=Object(n.useState)(0),h=Object(b.a)(f,2),x=h[0],g=h[1],y=Object(n.useState)(!1),v=Object(b.a)(y,2),N=v[0],w=v[1],k=Object(n.useState)({UserName:"",numberOfQuestions:5,difficulty:"easy",category:9,categoryName:"General Knowledge"}),C=Object(b.a)(k,2),q=C[0],F=C[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!N){e.next=5;break}return e.next=3,d(q.numberOfQuestions,q.difficulty,q.category);case 3:t=e.sent,r(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[q,N]);var T=a.length-1;return Object(S.jsx)(S.Fragment,{children:a.length?m?Object(S.jsx)(P,{username:q.UserName,totalScore:x,numberOfQuestions:q.numberOfQuestions,category:q.categoryName,difficulty:q.difficulty,callback:function(){r([]),g(0),o(0),O(!1),w(!1)}}):Object(S.jsx)(Q,{question:a[i].question,options:a[i].options,answer:a[i].answer,username:q.UserName,fetchNumberOfQuestiuons:T,TotalScore:g,score:x,QuestionsCountProps:{questionCount:i,setQuestionCount:o},callback:function(e){e.preventDefault(),O(!0)}}):Object(S.jsx)(R,{setSettings:F,setRequest:w})})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,137)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};i.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(M,{})}),document.getElementById("root")),_()}},[[87,1,2]]]);
//# sourceMappingURL=main.589aca92.chunk.js.map