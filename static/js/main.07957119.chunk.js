(this["webpackJsonphiit-app"]=this["webpackJsonphiit-app"]||[]).push([[0],{154:function(e,t,a){e.exports=a(333)},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},331:function(e,t,a){},332:function(e,t,a){},333:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(8),r=a.n(o),l=(a(159),a(141)),s=a(66),c=a(67),p=a(73),d=a(71),u=(a(160),a(12)),m=a(378),g=a(377),f=a(380),v=a(370),x=a(133),b=a.n(x),E=a(134),h=a.n(E),S=a(135),w=a.n(S),y=a(130),N=a.n(y),C=a(131),O=a.n(C),I=a(132),k=a.n(I),j=a(128),M=a.n(j),L=(a(161),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleRemove=function(){n.props.commonProps.removeExercise(n.props.item)},n.handleEdit=function(){n.setState({isEditing:!0})},n.handleChange=function(e){n.setState({editedExercise:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.commonProps.editExercise({id:n.props.item.id,name:n.state.editedExercise}),n.setState({isEditing:!1})},n.state={isEditing:!1,editedExercise:n.props.item.name},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.itemSelected,n=e.dragHandleProps,o=this.state,r=o.isEditing,l=o.editedExercise,s=this.handleChange,c=this.handleSubmit,p=this.handleEdit,d=this.handleRemove,u=.05*a+1,m=15*a+1,g=0!==a;return r?i.a.createElement("form",{onSubmit:c,className:"list-element-form"},i.a.createElement("input",{type:"text",className:"list-element-input",value:l,onChange:s,autoFocus:!0}),i.a.createElement("button",{className:"list-element-update-btn"}," ",i.a.createElement(M.a,null)," ")):i.a.createElement("div",{className:g?"itemDragged":"item",style:{transform:"scale(".concat(u,")"),boxShadow:"rgba(0, 0, 0, 0.2) 0px ".concat(m,"px ").concat(2*m,"px 0px")}},i.a.createElement("div",Object.assign({className:"dragHandle"},n),i.a.createElement(N.a,{fontSize:"small"})),i.a.createElement("div",{className:"list-element-title"},t.name),i.a.createElement("div",{className:"list-element-icon-container"},i.a.createElement("div",{className:"list-element-icon",onClick:p},i.a.createElement(O.a,{fontSize:"small"})),i.a.createElement("div",{className:"list-element-icon",onClick:d},i.a.createElement(k.a,{fontSize:"small"}))))}}]),a}(i.a.Component)),R=a(369),T=Object(R.a)({list:{width:360,color:"white",padding:"0 30px 10px 30px","@media (max-width: 425px)":{width:350},"@media (max-width: 405px)":{width:300},"@media (max-width: 350px)":{width:260},"@media (max-width: 300px)":{width:220},"@media (max-width: 250px)":{width:170}},btn:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",padding:"10px 20px",textTransform:"uppercase",fontSize:".7rem",letterSpacing:".1rem",color:"var(--highlight-dim)",transition:"all .4s ease-in-out",position:"relative",zIndex:"2","&:hover":{backgroundColor:"rgba(0, 0, 0, 0)",color:"var(--highlight-color)",letterSpacing:".15rem"}},sidebarHeader:{display:"flex",alignItems:"center",paddingTop:"15px"},sidebarChevron:{display:"flex",alignContent:"center",marginTop:"3px",borderRadius:"20px",backgroundColor:"rgba(255, 255, 255, 0.10)",marginLeft:"auto",transition:"all .6s","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.25)",transform:"scale(1.2)"}},sidebarTitle:{cursor:"default",margin:0},sidebarSubitle:{textTransform:"uppercase",fontWeight:500,marginTop:"0px",padding:"0px 0px 10px 0px",display:"flex",alignItems:"center",fontSize:".7rem",letterSpacing:".1rem",cursor:"default"},sidebarSettings:{width:"45%",textTransform:"uppercase",fontSize:".7rem",letterSpacing:".1rem",display:"flex",alignItems:"center",padding:"5px 0 5px 0",borderRadius:1,color:"rgba(255, 255, 255, 0.5)",transition:"all .3s","&:hover":{color:"white",cursor:"pointer"}},sidebarSettingsRight:{textTransform:"uppercase",fontSize:".7rem",letterSpacing:".1rem",display:"flex",alignItems:"center",padding:"5px 12px 5px 0",borderRadius:1,color:"rgba(255, 255, 255, 0.5)",transition:"all .3s","&:hover":{color:"white",cursor:"pointer"}},settingsContainer:{display:"flex",justifyContent:"space-between"},settingsText:{paddingLeft:"10px",paddingBottom:"5px",whiteSpace:"nowrap"},sidebarAddNew:{marginTop:"10px",marginBottom:"-6px",height:"44px",fontWeight:500,padding:"0 20px",display:"flex",alignItems:"center",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",textTransform:"uppercase",fontSize:".7rem",letterSpacing:".1rem",color:"rgba(255, 255, 255, 0.527)",justifyContent:"center",transition:"all .3s","&:hover":{color:"white",backgroundColor:"rgba(255, 255, 255, .15)",cursor:"pointer"}},sidebarReset:{height:"44px",fontWeight:500,padding:"0 20px",display:"flex",alignItems:"center",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",textTransform:"uppercase",fontSize:".7rem",letterSpacing:".1rem",color:"rgba(0, 0, 0, 0.7)",justifyContent:"center",backgroundColor:"rgba(255, 255, 255, .3)",opacity:".5",transition:"all .3s","&:hover":{opacity:"1",color:"rgba(0, 0, 0, 0.9)",backgroundColor:"rgba(255, 255, 255, .7)",cursor:"pointer"}}});function D(e){var t=e.exerciseList,a=e.onListChange,n=e.addNew,o=e.openSettingsWindow,r=e.openConfirmPopup,l=e.removeExercise,s=e.editExercise,c=t.length,p=T(),d=i.a.useState(!1),x=Object(u.a)(d,2),E=x[0],S=x[1],y=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&S(e)}};return i.a.createElement("div",null,i.a.createElement(g.a,{className:p.btn,onClick:y(!0)},"Customize Your Workout"),i.a.createElement(m.a,{open:E,onClose:y(!1),onOpen:y(!0)},i.a.createElement("div",{className:p.list,role:"presentation"},i.a.createElement("div",{className:p.sidebarHeader},i.a.createElement("h1",{className:p.sidebarTitle},"Your Workout"),i.a.createElement(b.a,{className:p.sidebarChevron,onClick:y(!1),fontSize:"large"})),i.a.createElement("div",{className:p.sidebarSubitle},c," ",1===c?"Exercise":"Exercises"),i.a.createElement("div",{className:p.settingsContainer},i.a.createElement("div",{className:p.sidebarSettings,onClick:o},i.a.createElement("div",{className:p.settingsIcon,fontSize:"small"},i.a.createElement(h.a,null)),i.a.createElement("div",{className:p.settingsText},"Set Intervals"))),i.a.createElement(v.a,null),i.a.createElement("div",{className:p.sidebarAddNew,onClick:n},"Add New Exercise"),i.a.createElement(f.a,null,i.a.createElement(w.a,{list:t,itemKey:"id",template:L,onMoveEnd:function(e){return a(e)},padding:0,constrainDrag:!0,commonProps:{removeExercise:l,editExercise:s}})),i.a.createElement("div",{className:p.sidebarReset,onClick:r},"RESET EXERCISES"))))}var A=a(376),B=a(371),F=a(375),P=a(373),U=a(374),W=a(372),z=Object(R.a)({errorSuppresion:{},"@global":{".MuiDialog-paper":{color:"var(--popup-title)",backgroundColor:"var(--popup-bg)",minWidth:"360px"},".MuiTypography-h6":{lineHeight:"1rem",letterSpacing:"-.3px",fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"},".MuiDialogTitle-root":{paddingTop:"25px",paddingBottom:"0px"},".MuiDialogContentText-root":{color:"var(--popup-text)",marginTop:"-6px",marginBottom:"30px",letterSpacing:".3px",fontSize:"12px",textTransform:"uppercase"},".MuiInputBase-input":{color:"var(--popup-title)",caretColor:"var(--popup-underline)",letterSpacing:".3px"},".MuiInputLabel-root.Mui-focused":{color:"var(--popup-text)"},".MuiFormLabel-root":{color:"var(--popup-text)"},".MuiInput-underline":{"&:after":{borderBottom:"1px solid var(--popup-underline)"}},".MuiButton-root":{color:"var(--popup-btn-text) "}}});function H(e){var t=z(),a=i.a.useState(""),n=Object(u.a)(a,2),o=n[0],r=n[1],l=function(){e.closePopup()};return i.a.createElement("div",{className:t.errorSuppresion},i.a.createElement(B.a,{open:!0,onClose:l,"aria-labelledby":"form-dialog-title"},i.a.createElement(W.a,{id:"form-dialog-title"},"ADD NEW EXERCISE"),i.a.createElement(P.a,null,i.a.createElement(U.a,null,"Drag to reorder"),i.a.createElement(A.a,{onChange:function(e){r(e.target.value)},autoFocus:!0,margin:"dense",id:"name",label:"EXERCISE NAME",type:"text",fullWidth:!0})),i.a.createElement(F.a,null,i.a.createElement(g.a,{onClick:l,color:"primary"},"Cancel"),i.a.createElement(g.a,{onClick:function(){l(),e.addNewExercise(o),r("")},color:"primary",disabled:0===o.length},"Add"))))}var J=Object(R.a)({root:{display:"flex",justifyContent:"center"},inputHolder:{display:"flex",justifyContent:"space-evenly",width:"300px"},formInput:{margin:"20px 10px 0px 0",padding:"25px 0"},"@global":{".MuiTypography-root":{textAlign:"center",fontSize:"14px",color:"var(--popup-text)",letterSpacing:"1px",fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"},".MuiDialog-paper":{color:"var(--popup-title)",backgroundColor:"var(--popup-bg)"},".MuiDialogContent-root > div":{paddingTop:"15px",paddingBottom:"0px",paddingLeft:"5px","@media (max-width: 400px)":{paddingLeft:"0px",paddingBottom:"10px",transform:"scale(0.85)"}},".MuiDialogContent-root":{padding:"0px",overflow:"hidden"},".MuiInputBase-input":{fontSize:"70px",fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",fontWeight:"700",textAlign:"center",color:"var(--popup-title)",padding:"0px"},".MuiButton-root":{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",opacity:".7",transition:".4s all",color:"var(--popup-btn-text)",transform:"scale(1)","&:hover":{transform:"scale(1.05)",opacity:"1",color:"var(--popup-btn-text)"}},".MuiDialogContentText-root":{color:"var(--popup-text)"},".MuiFormLabel-root, .MuiInputLabel-root.Mui-focused":{top:"57px",left:"9px",paddingLeft:"5px",fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",fontSize:"18px",letterSpacing:"1.2px",textAlign:"center",width:"100%",color:"var(--popup-text)"},".MuiInput-root":{top:"-15px"},".MuiInput-underline":{"&:hover":{"&:not(.Mui-disabled)":{"&:before":{borderBottom:"1px solid rgba(60, 60, 60, 0)"}}},"&:before":{borderBottom:"1px solid rgba(60, 60, 60, 0)"},"&:after":{borderBottom:"1px solid rgba(60, 60, 60, 0)"}},"label + .MuiInput-formControl":{marginTop:"0px",marginLeft:"0px",caretColor:"var(--popup-underline)"},".MuiFormControl-root":{margin:"0px",padding:"0 0",width:"40%",paddingBottom:"10px"},".MuiInputBase-root input":{height:"68px",width:"110px",paddingLeft:"10px",borderBottom:"1px solid var(--popup-underline)"}}});function G(e){var t=e.intervals.w,a=e.intervals.r,n=J(),o=i.a.useState(t),r=Object(u.a)(o,2),l=r[0],s=r[1],c=i.a.useState(a),p=Object(u.a)(c,2),d=p[0],m=p[1],f=function(){e.closePopup()},v=function(e){"Workout Interval"!==e.target.id?m(Number(e.target.value)):s(Number(e.target.value))};return i.a.createElement("div",null,i.a.createElement(B.a,{open:!0,onClose:f,"aria-labelledby":"form-dialog-title"},i.a.createElement(W.a,{id:"form-dialog-title"},"SET INTERVALS"),i.a.createElement(P.a,{className:n.root},i.a.createElement("div",{className:n.inputHolder},i.a.createElement(A.a,{className:n.formInput,onChange:v,id:"Workout Interval",label:"EXERCISING",type:"number",InputProps:{inputProps:{min:5,max:1e4}},defaultValue:l}),i.a.createElement(A.a,{className:n.formInput,onChange:v,id:"Rest Interval",label:"RESTING",type:"number",InputProps:{inputProps:{min:1,max:1e3}},defaultValue:d,onKeyDown:function(){return!1}}))),i.a.createElement(F.a,null,i.a.createElement(g.a,{onClick:function(){f(),t===l&&a===d||e.updateIntervals({workoutInterval:l,restInterval:d})},color:"primary",disabled:Number(l)<=0||Number(d)<=0||""===l||""===d},"Save"))))}var V=Object(R.a)({confirmRoot:{display:"flex"},"@global":{".MuiTypography-root":{lineHeight:"20px",textAlign:"center",fontSize:"14px",color:"white",letterSpacing:".4px",fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"},".MuiDialogTitle-root":{padding:"6px 0 10px 0"},".MuiDialog-paper":{color:"var(--popup-title)",backgroundColor:"var(--popup-bg)",width:"240px",padding:"20px",overflow:"hidden"},".MuiDialogActions-root":{padding:"0",justifyContent:"center"},".MuiButton-root":{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",opacity:".7",transition:".4s all",color:"var(--popup-btn-text)","&:hover":{transform:"scale(1.05)",opacity:"1",color:"var(--popup-btn-text)"}}}});function X(e){var t=V(),a=function(){e.closePopup()};return i.a.createElement("div",{className:t.confirmRoot},i.a.createElement(B.a,{open:!0,onClose:a,"aria-labelledby":"form-dialog-title"},i.a.createElement(W.a,{id:"form-dialog-title"},"REVERT ALL EXERCISES TO ",i.a.createElement("br",null),"7-MINUTE-WORKOUT?"),i.a.createElement(F.a,null,i.a.createElement(g.a,{onClick:a,color:"primary"},"Cancel"),i.a.createElement(g.a,{onClick:function(){a(),e.resetExercises()},color:"primary"},"Reset Exercises"))))}var _=a(138),K=a.n(_),Y=a(137),q=a.n(Y);function $(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!e){var i=new SpeechSynthesisUtterance;i.rate=n,i.pitch=1,i.volume=.9,i.text=t,i.voice=a,window.speechSynthesis.speak(i)}}function Q(){console.log("getting voices");var e=null,t=null,a=window.speechSynthesis.getVoices(),n=a.filter((function(e){return!e.voiceURI.includes("Microsoft")&&e.lang.startsWith("en")}));return n.length&&(e=n.find((function(e){return e.name.includes("Alex")})),t=n.find((function(e){return e.name.includes("Samantha")})),e||(e=n[0]),t||(t=n.find((function(e){return e.name.includes("Female")})))),e||(e=a[0]),t||(t=a[0]),[e,t]}var Z=a(136),ee=a.n(Z);a(331);function te(e){var t=e.runTime,a=e.alternate,o=e.isResting,r=e.precount,l=e.setPrecount,s=e.nextExercise,c=e.currentExercise,p=e.workoutInterval,d=e.isMuted,m=e.reset,g=Object(n.useState)(!1),f=Object(u.a)(g,2),v=f[0],x=f[1],b=Object(n.useState)(0),E=Object(u.a)(b,2),h=E[0],S=E[1],w=Object(n.useState)(null),y=Object(u.a)(w,2),N=y[0],C=y[1],O=Object(n.useState)(null),I=Object(u.a)(O,2),k=I[0],j=I[1],M=t-h,L=Object(n.useCallback)((function(){window.navigator.appVersion.includes("Edge")?r<4||$(d,"3, 2, 1, Go, ".concat(c),N,.95):1===r?$(d,"Go. ".concat(c,"."),N):r>0&&$(d,r-1+".",N);l(r-1)}),[c,r,l,d,N]),R=Object(n.useCallback)((function(){null===s?(x(!1),S(h+1),window.navigator.userAgent.includes("Edge")||$(d,"Great job.",k)):(o&&!window.navigator.userAgent.includes("Edge")?$(d,"Go. ".concat(s,"."),N):window.navigator.userAgent.includes("Edge")||$(d,"Rest. Next up, ".concat(s.toLowerCase(),"."),k),a(),S(0))}),[o,s,a,h,d,N,k]),T=Object(n.useCallback)((function(){if(r>=0)L();else if("stop"!==t){if(!o&&"step up onto chair"===c.toLowerCase()&&M===Math.ceil(p/2)+2)return $(d,"Switch sides.",N),void S(h+1);if(M<=1)R();else{if(7===M&&window.navigator.appVersion.includes("Edge")&&(o||s&&$(d," . 5, 4, 3, 2, 1, Rest, Next Up ".concat(s),N,.85)),5===M&&window.navigator.appVersion.includes("Edge"))if(o){if(s)$(d,"3, 2, 1, Go, ".concat(s),N,.8)}else s||$(d,"3, 2, 1, Great Job.",N,1);M<=6&&!window.navigator.appVersion.includes("Edge")&&(o?M<=4&&$(d,M-1+".",N):$(d,M-1+".",k)),S(h+1)}}else D()}),[h,c,t,M,r,p,o,d,L,R,N,k,s]);Object(n.useEffect)((function(){if(m)A();else{if(v){var e=setInterval(T,1e3);return function(){return clearInterval(e)}}if(window.orientation>=-90&&function(){function e(){var t=new SpeechSynthesisUtterance;window.speechSynthesis.speak(t),document.getElementsByClassName("App")[0].removeEventListener("click",e)}console.log("iosVoices"),window.addEventListener("load",(function(){document.getElementsByClassName("App")[0].addEventListener("click",e)}));var t,a=window.AudioContext||window.webkitAudioContext,n=a.prototype;(a=function(){return t}).prototype=n,window.navigator.getUserMedia=function(e,a,i){t=new n.constructor,t.createScriptProcessor(1024,1,1).connect(t.destination),window.navigator.mediaDevices.getUserMedia(e).then((function(e){a(e)})).catch((function(e){i(e)}))}}(),null===N||null===k)if(0===window.speechSynthesis.getVoices().length)window.speechSynthesis.addEventListener("voiceschanged",(function(){var e=Q();C(e[0]),j(e[1]),$(d," ",N)}));else{var t=Q();C(t[0]),j(t[1]),$(d," ",N)}}}),[v,T,m,N,k,d]);var D=function(){x(!1)},A=function(){x(!1),S(0)},B=i.a.createElement("div",{className:"icon-button"},v?i.a.createElement(K.a,{fontSize:"large",onClick:D}):i.a.createElement(q.a,{fontSize:"large",onClick:function(){x(!0)}})),F=0===M&&null!==s&&o||v&&!o&&r<=0&&M>=1;return i.a.createElement("div",{className:"timer-gradient-wrapper",style:F?{background:"linear-gradient(200deg, var(--highlight-color), var(--deeper-color))",animation:"flare 2s ease-in-out 0s alternate infinite"}:null},i.a.createElement("div",{className:"timer-container"},r>=0&&v?0===r?i.a.createElement("div",{className:"timer-font"},"GO",B):r<=3?i.a.createElement("div",{className:"timer-font"},r,B):m?i.a.createElement("div",{className:"timer-font"},M,B):i.a.createElement("div",{className:"timer-fancy"},"Let's go!"):isNaN(t)?i.a.createElement("div",{className:"timer-font"},"0 ",B):0!==M?i.a.createElement("div",{className:"timer-font"},M,B):null===s?i.a.createElement("div",{className:"timer-fancy"},"GREAT JOB!"):o?i.a.createElement("div",{className:"timer-font"},"GO",B):i.a.createElement("div",{className:"timer-font"},"0",B)),i.a.createElement(ee.a,{className:"particles",params:{particles:{number:{value:100,density:{enable:!0,value_area:1500}},line_linked:{enable:!0,opacity:.06},move:{direction:"random",speed:.5},size:{value:1.2},opacity:{anim:{enable:!0,speed:1,opacity_min:.15}}},interactivity:{events:{onclick:{enable:!1,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}}))}a(332);var ae=a(140),ne=a.n(ae),ie=a(139),oe=a.n(ie);function re(e){var t=e.exerciseList,a=e.workoutInterval,o=e.restInterval,r=e.isMuted,l=e.toggleMute,s=Object(n.useState)(!1),c=Object(u.a)(s,2),p=c[0],d=c[1],m=Object(n.useState)(0),g=Object(u.a)(m,2),f=g[0],v=g[1],x=Object(n.useState)(4),b=Object(u.a)(x,2),E=b[0],h=b[1],S=Object(n.useState)(!1),w=Object(u.a)(S,2),y=w[0],N=w[1],C="",O="",I=p?o:a;f<t.length?(C=t[f].name,O=1===t.length||f+1===t.length?null:t[f+1].name):I="stop";var k="".concat(f+1,"/").concat(t.length),j=i.a.createElement("div",{className:"clock-exercise"},p?"Rest":C);f>=t.length&&(k="".concat(f,"/").concat(t.length),j="");var M=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&window.orientation>-90;return i.a.createElement("div",{className:"clock",style:M?{flexGrow:.75}:null},i.a.createElement("div",{className:"clock-container"},i.a.createElement("div",null,k),i.a.createElement("div",{className:"clock-current-exercise"},j),i.a.createElement(te,{runTime:I,alternate:function(){p?(v(f+1),d(!1),I=a):(d(!0),I=o)},precount:E,setPrecount:h,isResting:p,currentExercise:C,nextExercise:O,workoutInterval:a,isMuted:r,reset:y}),i.a.createElement("div",{className:"clock-up-next"},null===O?" ":i.a.createElement("div",null,"Next Up",i.a.createElement("div",{className:"clock-next-exercise"},O))),i.a.createElement("div",{className:"volume-btn",onClick:l,style:null===O?{opacity:0}:null},r?i.a.createElement(oe.a,null):i.a.createElement(ne.a,null))),i.a.createElement("div",{className:"clock-start-over-container"},i.a.createElement("button",{className:"clock-button",onClick:function(){v(0),h(4),d(!1),N(!0),setTimeout((function(){return N(!1)}),250)}},"Restart Workout")),i.a.createElement("div",{className:"clock-dummy"},"invisible-font-preloader"))}var le=a(379),se=[{id:Object(le.a)(),name:"Jumping Jacks"},{id:Object(le.a)(),name:"Wall Sit"},{id:Object(le.a)(),name:"Push-ups"},{id:Object(le.a)(),name:"Sit-ups"},{id:Object(le.a)(),name:"Step Up Onto Chair"},{id:Object(le.a)(),name:"Squats"},{id:Object(le.a)(),name:"Tricep-dips"},{id:Object(le.a)(),name:"Plank"},{id:Object(le.a)(),name:"High-Knees Running"},{id:Object(le.a)(),name:"Lunges"},{id:Object(le.a)(),name:"Push-ups With Rotation"},{id:Object(le.a)(),name:"Side Plank 1"},{id:Object(le.a)(),name:"Side Plank 2"}],ce=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onListChange=function(e){n.setState({exerciseList:e}),window.localStorage.setItem("exerciseList",JSON.stringify(e))},n.openAddNew=function(){n.setState({isAddNewDialogOpen:!0})},n.closeAddNewPopup=function(){n.setState({isAddNewDialogOpen:!1})},n.openSettingsWindow=function(){n.setState({isIntervalDialogOpen:!0})},n.closeSettingsWindow=function(){n.setState({isIntervalDialogOpen:!1})},n.openConfirmPopup=function(){n.setState({isConfirmDialogOpen:!0})},n.closeConfirmPopup=function(){n.setState({isConfirmDialogOpen:!1})},n.addNewExercise=function(e){var t=[].concat(Object(l.a)(n.state.exerciseList),[{id:Object(le.a)(),name:e}]);n.setState({exerciseList:t}),window.localStorage.setItem("exerciseList",JSON.stringify(t))},n.removeExercise=function(e){var t=n.state.exerciseList.filter((function(t){return t.id!==e.id}));n.setState({exerciseList:t}),window.localStorage.setItem("exerciseList",JSON.stringify(t))},n.editExercise=function(e){var t=n.state.exerciseList.map((function(t){return t.id===e.id?e:t}));n.setState({exerciseList:t}),window.localStorage.setItem("exerciseList",JSON.stringify(t))},n.updateIntervals=function(e){var t=e.workoutInterval,a=e.restInterval;n.setState({workoutInterval:t,restInterval:a}),window.localStorage.setItem("workoutInterval",JSON.stringify(t)),window.localStorage.setItem("restInterval",JSON.stringify(a))},n.resetExercises=function(){n.setState({exerciseList:se}),window.localStorage.setItem("exerciseList",JSON.stringify(se))},n.toggleMute=function(){var e=n.state.isMuted;n.setState({isMuted:!e})},n.state={exerciseList:JSON.parse(window.localStorage.getItem("exerciseList"))||se,workoutInterval:JSON.parse(window.localStorage.getItem("workoutInterval"))||30,restInterval:JSON.parse(window.localStorage.getItem("restInterval"))||10,isIntervalDialogOpen:!1,isAddNewDialogOpen:!1,isConfirmDialogOpen:!1,isMuted:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.exerciseList,a=e.isAddNewDialogOpen,n=e.isIntervalDialogOpen,o=e.isConfirmDialogOpen,r=e.workoutInterval,l=e.restInterval,s=e.isMuted,c=this.onListChange,p=this.openAddNew,d=this.closeAddNewPopup,u=this.addNewExercise,m=this.openSettingsWindow,g=this.closeSettingsWindow,f=this.openConfirmPopup,v=this.closeConfirmPopup,x=this.updateIntervals,b=this.removeExercise,E=this.resetExercises,h=this.editExercise,S=this.toggleMute,w=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&window.orientation>-90;return i.a.createElement("div",{className:"App",style:w?{justifyContent:"flex-start"}:null},i.a.createElement(D,{exerciseList:t,onListChange:c,addNew:p,openSettingsWindow:m,openConfirmPopup:f,removeExercise:b,resetExercises:E,editExercise:h}),a&&i.a.createElement(H,{closePopup:d,addNewExercise:u}),n&&i.a.createElement(G,{closePopup:g,intervals:{w:r,r:l},updateIntervals:x}),o&&i.a.createElement(X,{closePopup:v,resetExercises:E}),i.a.createElement(re,{style:{zIndex:1},exerciseList:t,workoutInterval:r,restInterval:l,isMuted:s,toggleMute:S}))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[154,1,2]]]);
//# sourceMappingURL=main.07957119.chunk.js.map