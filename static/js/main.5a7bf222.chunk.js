(this["webpackJsonphiit-app"]=this["webpackJsonphiit-app"]||[]).push([[0],{160:function(e,t,a){e.exports=a(339)},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},337:function(e,t,a){},338:function(e,t,a){},339:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),r=a.n(i),l=(a(165),a(147)),s=a(68),c=a(69),p=a(75),u=a(73),d=(a(166),a(10)),m=a(384),g=a(375),x=a(386),f=a(376),v=a(138),b=a.n(v),h=a(139),S=a.n(h),E=a(140),w=a.n(E),y=a(133),C=a.n(y),N=a(134),O=a.n(N),I=a(135),k=a.n(I),M=a(131),j=a.n(M),T=a(136),R=a.n(T),P=a(137),D=a.n(P),L=(a(167),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleRemove=function(){n.props.commonProps.removeExercise(n.props.item)},n.handleEdit=function(){n.setState({isEditing:!0})},n.handleChange=function(e){n.setState({editedExercise:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.commonProps.editExercise({alert:n.props.item.alert,id:n.props.item.id,name:n.state.editedExercise}),n.setState({isEditing:!1})},n.handleVoxPopup=function(){n.props.commonProps.openVoxPopup(n.props.item)},n.state={isEditing:!1,editedExercise:n.props.item.name},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.itemSelected,n=e.dragHandleProps,i=this.state,r=i.isEditing,l=i.editedExercise,s=this.handleChange,c=this.handleSubmit,p=this.handleEdit,u=this.handleRemove,d=this.handleVoxPopup,m=.05*a+1,g=15*a+1,x=0!==a;return r?o.a.createElement("form",{onSubmit:c,className:"list-element-form"},o.a.createElement("input",{type:"text",className:"list-element-input",value:l,onChange:s,autoFocus:!0}),o.a.createElement("button",{className:"list-element-update-btn"}," ",o.a.createElement(j.a,null)," ")):o.a.createElement("div",{className:x?"itemDragged":"item",style:{transform:"scale(".concat(m,")"),boxShadow:"rgba(0, 0, 0, 0.2) 0px ".concat(g,"px ").concat(2*g,"px 0px")}},o.a.createElement("div",Object.assign({className:"dragHandle"},n),o.a.createElement(C.a,{fontSize:"small"})),o.a.createElement("div",{className:"list-element-title"},t.name),o.a.createElement("div",{className:"list-element-icon-container"},o.a.createElement("div",{className:"list-element-icon",onClick:p},o.a.createElement(O.a,{fontSize:"small"})),o.a.createElement("div",{className:"list-element-icon",onClick:u},o.a.createElement(k.a,{fontSize:"small"})),o.a.createElement("div",{className:"list-element-icon alert-icon",onClick:d},t.alert?o.a.createElement(R.a,{fontSize:"small"}):o.a.createElement(D.a,{fontSize:"small"}))))}}]),a}(o.a.Component)),B=a(374),A=Object(B.a)({list:{width:360,color:"white",padding:"0 30px 10px 30px","@media (max-width: 425px)":{width:350},"@media (max-width: 405px)":{width:300},"@media (max-width: 350px)":{width:260},"@media (max-width: 300px)":{width:220},"@media (max-width: 250px)":{width:170}},btn:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",padding:"10px 20px",textTransform:"uppercase",fontSize:".7rem",letterSpacing:".1rem",color:"var(--highlight-dim)",transition:"all .4s ease-in-out",position:"relative",zIndex:"2","&:hover":{backgroundColor:"rgba(0, 0, 0, 0)",color:"var(--highlight-color)",letterSpacing:".15rem"}},sidebarHeader:{display:"flex",alignItems:"center",paddingTop:"15px"},sidebarChevron:{display:"flex",alignContent:"center",marginTop:"3px",borderRadius:"20px",backgroundColor:"rgba(255, 255, 255, 0.10)",marginLeft:"auto",transition:"all .6s","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.25)",transform:"scale(1.2)"}},sidebarTitle:{cursor:"default",margin:0,marginRight:5,whiteSpace:"nowrap","@media (max-width: 300px)":{marginRight:10,fontSize:30},"@media (max-width: 250px)":{marginRight:5,fontSize:24}},sidebarSubitle:{textTransform:"uppercase",fontWeight:500,marginTop:"0px",padding:"0px 0px 10px 0px",display:"flex",alignItems:"center",fontSize:".7rem",letterSpacing:".1rem",cursor:"default"},sidebarSettings:{width:"45%",textTransform:"uppercase",fontSize:".7rem",letterSpacing:".1rem",display:"flex",alignItems:"center",padding:"5px 0 5px 0",borderRadius:1,color:"rgba(255, 255, 255, 0.5)",transition:"all .3s","&:hover":{color:"white",cursor:"pointer"}},sidebarSettingsRight:{textTransform:"uppercase",fontSize:".7rem",letterSpacing:".1rem",display:"flex",alignItems:"center",padding:"5px 12px 5px 0",borderRadius:1,color:"rgba(255, 255, 255, 0.5)",transition:"all .3s","&:hover":{color:"white",cursor:"pointer"}},settingsContainer:{display:"flex",justifyContent:"space-between"},settingsText:{paddingLeft:"10px",paddingBottom:"5px",whiteSpace:"nowrap"},sidebarAddNew:{marginTop:"10px",marginBottom:"-6px",height:"44px",fontWeight:500,padding:"0 20px",display:"flex",alignItems:"center",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",textTransform:"uppercase",fontSize:".7rem",letterSpacing:".1rem",color:"rgba(255, 255, 255, 0.527)",justifyContent:"center",transition:"all .3s","&:hover":{color:"white",backgroundColor:"rgba(255, 255, 255, .15)",cursor:"pointer"}},sidebarAddNew2:{marginTop:"0px",marginBottom:"3px",height:"44px",fontWeight:500,padding:"0 20px",display:"flex",alignItems:"center",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",textTransform:"uppercase",fontSize:".7rem",letterSpacing:".1rem",color:"rgba(255, 255, 255, 0.527)",justifyContent:"center",transition:"all .3s","&:hover":{color:"white",backgroundColor:"rgba(255, 255, 255, .15)",cursor:"pointer"}},sidebarReset:{height:"44px",fontWeight:500,padding:"0 20px",display:"flex",alignItems:"center",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",textTransform:"uppercase",fontSize:".7rem",letterSpacing:".1rem",color:"rgba(0, 0, 0, 0.7)",justifyContent:"center",backgroundColor:"rgba(255, 255, 255, .3)",opacity:".5",transition:"all .3s","&:hover":{opacity:"1",color:"rgba(0, 0, 0, 0.9)",backgroundColor:"rgba(255, 255, 255, .7)",cursor:"pointer"}}});function F(e){var t=e.exerciseList,a=e.onListChange,i=e.addNew,r=e.openSettingsWindow,l=e.openConfirmPopup,s=e.openVoxPopup,c=e.removeExercise,p=e.editExercise,u=t.length,v=A(),h=Object(n.useState)(!1),E=Object(d.a)(h,2),y=E[0],C=E[1],N=Object(n.useState)(0),O=Object(d.a)(N,2),I=O[0],k=O[1];Object(n.useEffect)((function(){187+44*t.length+44>window.innerHeight?k(1):k(0)}),[k,t]);var M=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&C(e)}};return o.a.createElement("div",null,o.a.createElement(g.a,{className:v.btn,onClick:M(!0)},"Customize Your Workout"),o.a.createElement(m.a,{open:y,onClose:M(!1),onOpen:M(!0)},o.a.createElement("div",{id:"exercise-list",className:v.list,role:"presentation"},o.a.createElement("div",{className:v.sidebarHeader},o.a.createElement("h1",{className:v.sidebarTitle},"Your Workout"),o.a.createElement(b.a,{className:v.sidebarChevron,onClick:M(!1),fontSize:"large"})),o.a.createElement("div",{className:v.sidebarSubitle},u," ",1===u?"Exercise":"Exercises"),o.a.createElement("div",{className:v.settingsContainer},o.a.createElement("div",{className:v.sidebarSettings,onClick:r},o.a.createElement("div",{className:v.settingsIcon,fontSize:"small"},o.a.createElement(S.a,null)),o.a.createElement("div",{className:v.settingsText},"Set Intervals"))),o.a.createElement(f.a,null),o.a.createElement("div",{className:v.sidebarAddNew,onClick:i},"Add New Exercise"),o.a.createElement(x.a,null,o.a.createElement(w.a,{list:t,itemKey:"id",template:L,onMoveEnd:function(e){return a(e)},padding:0,constrainDrag:!0,commonProps:{removeExercise:c,editExercise:p,openVoxPopup:s}})),I?o.a.createElement("div",{className:v.sidebarAddNew2,onClick:i},"Add New Exercise"):null,o.a.createElement("div",{className:v.sidebarReset,onClick:l},"RESET EXERCISES"))))}var U=a(383),z=a(377),W=a(381),H=a(379),V=a(380),J=a(378),G=Object(B.a)({errorSuppresion:{},"@global":{".MuiDialog-paper":{color:"var(--popup-title)",backgroundColor:"var(--popup-bg)",minWidth:"360px"},".MuiTypography-h6":{lineHeight:"1rem",letterSpacing:"-.3px",fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"},".MuiDialogTitle-root":{paddingTop:"25px",paddingBottom:"0px"},".MuiDialogContentText-root":{color:"var(--popup-text)",marginTop:"-6px",marginBottom:"30px",letterSpacing:".3px",fontSize:"12px",textTransform:"uppercase"},".MuiInputBase-input":{color:"var(--popup-title)",caretColor:"var(--popup-underline)",letterSpacing:".3px"},".MuiInputLabel-root.Mui-focused":{color:"var(--popup-text)"},".MuiFormLabel-root":{color:"var(--popup-text)"},".MuiInput-underline":{"&:after":{borderBottom:"1px solid var(--popup-underline)"}},".MuiButton-root":{color:"var(--popup-btn-text) "}}});function X(e){var t=G(),a=o.a.useState(""),n=Object(d.a)(a,2),i=n[0],r=n[1],l=function(){e.closePopup()};return o.a.createElement("div",{className:t.errorSuppresion},o.a.createElement(z.a,{open:!0,onClose:l,"aria-labelledby":"form-dialog-title"},o.a.createElement(J.a,{id:"form-dialog-title"},"ADD NEW EXERCISE"),o.a.createElement(H.a,null,o.a.createElement(V.a,null,"Drag to reorder"),o.a.createElement(U.a,{onChange:function(e){r(e.target.value)},autoFocus:!0,margin:"dense",id:"name",label:"EXERCISE NAME",type:"text",fullWidth:!0})),o.a.createElement(W.a,null,o.a.createElement(g.a,{onClick:l,color:"primary"},"Cancel"),o.a.createElement(g.a,{onClick:function(){l(),e.addNewExercise(i),r("")},color:"primary",disabled:0===i.length},"Add"))))}var _=Object(B.a)({root:{display:"flex",justifyContent:"center"},inputHolder:{display:"flex",justifyContent:"space-evenly",width:"300px"},formInput:{margin:"20px 10px 0px 0",padding:"25px 0"},"@global":{".MuiTypography-root":{textAlign:"center",fontSize:"14px",color:"var(--popup-text)",letterSpacing:"1px",fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"},".MuiDialog-paper":{color:"var(--popup-title)",backgroundColor:"var(--popup-bg)"},".MuiDialogContent-root > div":{paddingTop:"15px",paddingBottom:"0px",paddingLeft:"5px","@media (max-width: 400px)":{paddingLeft:"0px",paddingBottom:"10px",transform:"scale(0.85)"}},".MuiDialogContent-root":{padding:"0px",overflow:"hidden"},".MuiInputBase-input":{fontSize:"70px",fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",fontWeight:"700",textAlign:"center",color:"var(--popup-title)",padding:"0px"},".MuiButton-root":{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",opacity:".7",transition:".4s all",color:"var(--popup-btn-text)",transform:"scale(1)","&:hover":{transform:"scale(1.05)",opacity:"1",color:"var(--popup-btn-text)"}},".MuiDialogContentText-root":{color:"var(--popup-text)"},".MuiFormLabel-root, .MuiInputLabel-root.Mui-focused":{top:"57px",left:"9px",paddingLeft:"5px",fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",fontSize:"18px",letterSpacing:"1.2px",textAlign:"center",width:"100%",color:"var(--popup-text)"},".MuiInput-root":{top:"-15px"},".MuiInput-underline":{"&:hover":{"&:not(.Mui-disabled)":{"&:before":{borderBottom:"1px solid rgba(60, 60, 60, 0)"}}},"&:before":{borderBottom:"1px solid rgba(60, 60, 60, 0)"},"&:after":{borderBottom:"1px solid rgba(60, 60, 60, 0)"}},"label + .MuiInput-formControl":{marginTop:"0px",marginLeft:"0px",caretColor:"var(--popup-underline)"},".MuiFormControl-root":{margin:"0px",padding:"0 0",width:"40%",paddingBottom:"10px"},".MuiInputBase-root input":{height:"68px",width:"110px",paddingLeft:"10px",borderBottom:"1px solid var(--popup-underline)"}}});function q(e){var t=e.intervals.w,a=e.intervals.r,n=_(),i=o.a.useState(t),r=Object(d.a)(i,2),l=r[0],s=r[1],c=o.a.useState(a),p=Object(d.a)(c,2),u=p[0],m=p[1],x=function(){e.closePopup()},f=function(e){"Workout Interval"!==e.target.id?m(Number(e.target.value)):s(Number(e.target.value))};return o.a.createElement("div",null,o.a.createElement(z.a,{open:!0,onClose:x,"aria-labelledby":"form-dialog-title"},o.a.createElement(J.a,{id:"form-dialog-title"},"SET INTERVALS"),o.a.createElement(H.a,{className:n.root},o.a.createElement("div",{className:n.inputHolder},o.a.createElement(U.a,{className:n.formInput,onChange:f,id:"Workout Interval",label:"EXERCISING",type:"number",InputProps:{inputProps:{min:5,max:1e4}},defaultValue:l}),o.a.createElement(U.a,{className:n.formInput,onChange:f,id:"Rest Interval",label:"RESTING",type:"number",InputProps:{inputProps:{min:1,max:1e3}},defaultValue:u,onKeyDown:function(){return!1}}))),o.a.createElement(W.a,null,o.a.createElement(g.a,{onClick:function(){x(),t===l&&a===u||e.updateIntervals({workoutInterval:l,restInterval:u})},color:"primary",disabled:Number(l)<=0||Number(u)<=0||""===l||""===u},"Save"))))}var K=Object(B.a)({confirmRoot:{display:"flex"},"@global":{".MuiTypography-root":{lineHeight:"20px",textAlign:"center",fontSize:"14px",color:"white",letterSpacing:".4px",fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"},".MuiDialogTitle-root":{padding:"6px 0 10px 0"},".MuiDialog-paper":{color:"var(--popup-title)",backgroundColor:"var(--popup-bg)",width:"240px",padding:"20px",overflow:"hidden"},".MuiDialogActions-root":{padding:"0",justifyContent:"center"},".MuiButton-root":{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",opacity:".7",transition:".4s all",color:"var(--popup-btn-text)","&:hover":{transform:"scale(1.05)",opacity:"1",color:"var(--popup-btn-text)"}}}});function Y(e){var t=K(),a=function(){e.closePopup()};return o.a.createElement("div",{className:t.confirmRoot},o.a.createElement(z.a,{open:!0,onClose:a,"aria-labelledby":"form-dialog-title"},o.a.createElement(J.a,{id:"form-dialog-title"},"RESET EXERCISES TO ",o.a.createElement("br",null),"7-MINUTE-WORKOUT?"),o.a.createElement(W.a,null,o.a.createElement(g.a,{onClick:a,color:"primary"},"Cancel"),o.a.createElement(g.a,{onClick:function(){a(),e.resetExercises()},color:"primary"},"Reset Exercises"))))}var $=Object(B.a)({errorSuppresion:{},"@global":{".MuiDialog-paper":{color:"var(--popup-title)",backgroundColor:"var(--popup-bg)",minWidth:"360px"},".MuiTypography-h6":{lineHeight:"1rem",letterSpacing:"-.3px",fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"},".MuiDialogTitle-root":{paddingTop:"25px",paddingBottom:"0px"},".MuiDialogContentText-root":{color:"var(--popup-text)",marginTop:"1px",marginBottom:"0px",letterSpacing:".3px",fontSize:"12px",textTransform:"uppercase"},".MuiInputBase-input":{color:"var(--popup-title)",caretColor:"var(--popup-underline)",letterSpacing:".3px"},".MuiInputLabel-root.Mui-focused":{color:"var(--popup-text)"},".MuiFormLabel-root":{color:"var(--popup-text)"},".MuiInput-underline":{"&:after":{borderBottom:"1px solid var(--popup-underline)"}},".MuiButton-root":{color:"var(--popup-btn-text) "},".MuiDialogContent-root":{padding:"8px 17px"}}}),Q=a(141),Z=a.n(Q),ee=a(149),te=a(382),ae=a(4);function ne(e){var t=$(),a=Object(n.useState)(""),i=Object(d.a)(a,2),r=i[0],l=i[1],s=function(){e.closePopup()},c=e.item,p=Object(ae.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:3,top:3,color:e.palette.grey[500],transition:".3s all ease-in-out",padding:7,"&:hover":{backgroundColor:e.palette.grey[700]}}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose;return o.a.createElement(J.a,{disableTypography:!0,className:a.root},o.a.createElement(ee.a,{variant:"h6"},t),n?o.a.createElement(te.a,{"aria-label":"close",className:a.closeButton,onClick:n},o.a.createElement(Z.a,null)):null)}));return Object(n.useEffect)((function(){l(c.alert?!1===c.alert?"Switch Sides":c.alert:"Switch Sides")}),[c]),o.a.createElement("div",{className:t.errorSuppresion},o.a.createElement(z.a,{open:!0,onClose:s,"aria-labelledby":"form-dialog-title"},o.a.createElement(p,{id:"customized-dialog-title",onClose:s},c.name.toUpperCase(),o.a.createElement(V.a,null,"Halfway Prompt")),o.a.createElement(H.a,null,o.a.createElement(U.a,{onChange:function(e){l(e.target.value)},autoFocus:!0,margin:"dense",id:"name",label:"VOICE OUTPUT",value:r,type:"text",fullWidth:!0})),o.a.createElement(W.a,null,o.a.createElement(g.a,{onClick:function(){s(),e.updatePrompt(c.id,!1)},color:"primary"},c.alert?"Deactivate Prompt":"Cancel"),o.a.createElement(g.a,{onClick:function(){s(),e.updatePrompt(c.id,r)},color:"primary",disabled:!r.length},c.alert?"Update PROMPT":"Turn ON Prompt"))))}function oe(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!e){var o=new SpeechSynthesisUtterance;o.rate=n,o.pitch=1,o.volume=.9,o.text=t,o.voice=a,console.log(t),window.speechSynthesis.speak(o)}}function ie(){var e=null,t=null,a=window.speechSynthesis.getVoices(),n=a.filter((function(e){return!e.voiceURI.includes("Microsoft")&&e.lang.startsWith("en")}));return n.length&&((e=n.find((function(e){return e.name.includes("Alex")})))||(e=n[0]),t=e),e||(e=a[0]),t||(t=a[0]),[e,t]}var re=a(144),le=a.n(re),se=a(143),ce=a.n(se),pe=a(142),ue=a.n(pe);a(337);function de(e){var t=e.runTime,a=e.alternate,i=e.isResting,r=e.precount,l=e.setPrecount,s=e.nextExercise,c=e.currentExercise,p=e.currentAlert,u=e.workoutInterval,m=e.isMuted,g=e.reset,x=e.updateRestarting,f=Object(n.useState)(!1),v=Object(d.a)(f,2),b=v[0],h=v[1],S=Object(n.useState)(0),E=Object(d.a)(S,2),w=E[0],y=E[1],C=Object(n.useState)(null),N=Object(d.a)(C,2),O=N[0],I=N[1],k=Object(n.useState)(null),M=Object(d.a)(k,2),j=M[0],T=M[1],R=Object(n.useState)(!1),P=Object(d.a)(R,2),D=P[0],L=P[1],B=t-w,A=Object(n.useCallback)((function(){D?r<4||oe(m,"3! 2! 1! Go, ".concat(c),O):1===r?oe(m,"Go. ".concat(c,"."),O):r>0&&oe(m,r-1,O);l(r-1)}),[c,r,l,m,O,D]),F=Object(n.useCallback)((function(){null===s?(h(!1),y(w+1),window.navigator.userAgent.includes("Edge")||oe(m,"Great job.",j)):(i&&!window.navigator.userAgent.includes("Edge")?oe(m,"Go. ".concat(s,"."),O):window.navigator.userAgent.includes("Edge")||oe(m,"Rest. Next up, ".concat(s.toLowerCase(),"."),j),a(),y(0))}),[i,s,a,w,m,O,j]),U=Object(n.useCallback)((function(){if(r>=0)A();else if("stop"!==t){if(B===Math.ceil(u/2)+2&&!i&&p)return oe(m,p,O),void y(w+1);if(B<=1)F();else{if(7===B&&D&&(i||s&&setTimeout((function(){oe(m,"5! 4! 3! 2! 1! Rest, Next Up, ".concat(s,"!"),O,1.1)}),720)),5===B&&D)if(i){if(s){var e=s;setTimeout((function(){oe(m,"3! 2! 1! Go, ".concat(e),O,1.1)}),700)}}else s||setTimeout((function(){oe(m,"3! 2! 1! Great Job!",O)}),700);B<=6&&!D&&(i?B<=4&&oe(m,B-1,O):oe(m,B-1,j)),y(w+1)}}else z()}),[w,p,t,B,r,u,i,m,A,F,O,j,s,D]);Object(n.useEffect)((function(){if(g)W();else{if(b){var e=setInterval(U,1e3);return function(){return clearInterval(e)}}if(null===O&&null===j)if(console.log("vox init"),0===window.speechSynthesis.getVoices().length)console.log("wait"),window.speechSynthesis.addEventListener("voiceschanged",(function(){var e=ie();I(e[0]),T(e[1])}));else{console.log("bypass");var t=ie();I(t[0]),T(t[1])}window.navigator.appVersion.includes("Edge")&&L(!0)}}),[b,U,g,O,j,m,D,L]);var z=function(){h(!1)},W=function(){h(!1),y(0)},H=o.a.createElement("div",{className:"icon-button"},b?o.a.createElement(le.a,{fontSize:"large",onClick:z}):o.a.createElement(ce.a,{fontSize:"large",onClick:function(){h(!0),x()}})),V=0===B&&null!==s&&i||b&&!i&&r<=0&&B>=1;return o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{className:"timer-gradient-wrapper",style:V?{background:"linear-gradient(200deg, var(--highlight-color), var(--deeper-color))",animation:"flare 2s ease-in-out 0s alternate infinite"}:null},o.a.createElement("div",{className:"timer-container"},r>=0&&b?0===r?o.a.createElement("div",{className:"timer-font"},"GO",H):r<=3?o.a.createElement("div",{className:"timer-font"},r,H):g?o.a.createElement("div",{className:"timer-font"},B,H):o.a.createElement("div",{className:"timer-fancy"},"Let's go!"):isNaN(t)?o.a.createElement("div",{className:"timer-font"},"0 ",H):0!==B?o.a.createElement("div",{className:"timer-font"},B,H):null===s?o.a.createElement("div",{className:"timer-fancy"},"GREAT JOB!"):i?o.a.createElement("div",{className:"timer-font"},"GO",H):o.a.createElement("div",{className:"timer-font"},"0",H))),o.a.createElement(ue.a,{className:"particles",params:{backgroundMask:{cover:{color:{value:{r:40,g:44,b:52}},opacity:1},enable:!0},particles:{number:{value:100,density:{enable:!0,value_area:1500}},line_linked:{enable:!0,opacity:.06,width:1},move:{direction:"random",speed:.5},size:{value:1.3},opacity:{anim:{enable:!0,speed:1,opacity_min:.85,opacity_max:1}}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}},retina_detect:!0}}))}a(338);var me=a(146),ge=a.n(me),xe=a(145),fe=a.n(xe);function ve(e){var t=e.exerciseList,a=e.workoutInterval,i=e.restInterval,r=e.isMuted,l=e.toggleMute,s=e.isRestarting,c=e.updateRestarting,p=Object(n.useState)(!1),u=Object(d.a)(p,2),m=u[0],g=u[1],x=Object(n.useState)(0),f=Object(d.a)(x,2),v=f[0],b=f[1],h=Object(n.useState)(4),S=Object(d.a)(h,2),E=S[0],w=S[1],y=Object(n.useState)(!1),C=Object(d.a)(y,2),N=C[0],O=C[1],I="",k="",M="",j=m?i:a;Object(n.useEffect)((function(){s&&T()}),[s]);var T=function(){b(0),w(4),g(!1),O(!0),setTimeout((function(){return O(!1)}),250)};v<t.length?(I=t[v].name,k=t[v].alert,M=1===t.length||v+1===t.length?null:t[v+1].name):j="stop";var R="".concat(v+1,"/").concat(t.length),P=o.a.createElement("div",{className:"clock-exercise"},m?"Rest":I);v>=t.length&&(R="".concat(v,"/").concat(t.length),P="");var D=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&window.orientation>-90;return o.a.createElement("div",{className:"clock",style:D?{flexGrow:.75}:null},o.a.createElement("div",{className:"clock-container"},o.a.createElement("div",{style:{zIndex:2}},R),o.a.createElement("div",{className:"clock-current-exercise"},P),o.a.createElement(de,{runTime:j,alternate:function(){m?(b(v+1),g(!1),j=a):(g(!0),j=i)},precount:E,setPrecount:w,isResting:m,currentExercise:I,currentAlert:k,nextExercise:M,workoutInterval:a,isMuted:r,reset:N,updateRestarting:c}),o.a.createElement("div",{className:"clock-up-next"},null===M?" ":o.a.createElement("div",null,"Next Up",o.a.createElement("div",{className:"clock-next-exercise"},M))),o.a.createElement("div",{className:"volume-btn",onClick:l,style:null===M?{opacity:0}:null},r?o.a.createElement(fe.a,null):o.a.createElement(ge.a,null))),o.a.createElement("div",{className:"clock-start-over-container"},o.a.createElement("button",{className:"clock-button",onClick:T},"Restart Workout")),o.a.createElement("div",{className:"clock-dummy"},"invisible-font-preloader"))}var be=a(385),he=[{id:Object(be.a)(),name:"Jumping Jacks"},{id:Object(be.a)(),name:"Wall Sit"},{id:Object(be.a)(),name:"Push-ups"},{id:Object(be.a)(),name:"Sit-ups"},{alert:"Switch Sides",id:Object(be.a)(),name:"Step Up Onto Chair"},{id:Object(be.a)(),name:"Squats"},{id:Object(be.a)(),name:"Tricep-dips"},{id:Object(be.a)(),name:"Plank"},{id:Object(be.a)(),name:"High-Knees Running"},{id:Object(be.a)(),name:"Lunges"},{id:Object(be.a)(),name:"Push-ups With Rotation"},{id:Object(be.a)(),name:"Side Plank 1"},{id:Object(be.a)(),name:"Side Plank 2"}],Se=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onListChange=function(e){n.setState({exerciseList:e}),window.localStorage.setItem("exerciseList",JSON.stringify(e))},n.openAddNew=function(){n.setState({isAddNewDialogOpen:!0})},n.closeAddNewPopup=function(){n.setState({isAddNewDialogOpen:!1})},n.openSettingsWindow=function(){n.setState({isIntervalDialogOpen:!0})},n.closeSettingsWindow=function(){n.setState({isIntervalDialogOpen:!1})},n.openConfirmPopup=function(){n.setState({isConfirmDialogOpen:!0})},n.closeConfirmPopup=function(){n.setState({isConfirmDialogOpen:!1})},n.openVoxPopup=function(e){n.setState({voxItem:e}),n.setState({isVoxDialogOpen:!0})},n.closeVoxPopup=function(){n.setState({isVoxDialogOpen:!1})},n.updatePrompt=function(e,t){var a=n.state.exerciseList.map((function(a){return a.id===e?{alert:t,id:a.id,name:a.name}:a}));n.setState({exerciseList:a}),window.localStorage.setItem("exerciseList",JSON.stringify(a))},n.addNewExercise=function(e){var t=[].concat(Object(l.a)(n.state.exerciseList),[{alert:!1,id:Object(be.a)(),name:e}]);n.setState({exerciseList:t}),window.localStorage.setItem("exerciseList",JSON.stringify(t)),window.navigator.userAgent.includes("Edge")?document.querySelector(".MuiPaper-root").scrollTop+=50:document.querySelector(".MuiPaper-root").scroll({top:document.querySelector("#exercise-list").clientHeight,behavior:"smooth"})},n.removeExercise=function(e){var t=n.state.exerciseList.filter((function(t){return t.id!==e.id}));n.setState({exerciseList:t}),window.localStorage.setItem("exerciseList",JSON.stringify(t))},n.editExercise=function(e){var t=n.state.exerciseList.map((function(t){return t.id===e.id?e:t}));n.setState({exerciseList:t}),window.localStorage.setItem("exerciseList",JSON.stringify(t))},n.updateIntervals=function(e){var t=e.workoutInterval,a=e.restInterval;n.setState({workoutInterval:t,restInterval:a}),window.localStorage.setItem("workoutInterval",JSON.stringify(t)),window.localStorage.setItem("restInterval",JSON.stringify(a))},n.resetExercises=function(){n.setState({exerciseList:he}),window.localStorage.setItem("exerciseList",JSON.stringify(he)),n.setState({isRestarting:!0})},n.updateRestarting=function(){n.setState({isRestarting:!1})},n.toggleMute=function(){var e=n.state.isMuted;n.setState({isMuted:!e})},n.state={exerciseList:JSON.parse(window.localStorage.getItem("exerciseList"))||he,workoutInterval:JSON.parse(window.localStorage.getItem("workoutInterval"))||30,restInterval:JSON.parse(window.localStorage.getItem("restInterval"))||10,isIntervalDialogOpen:!1,isAddNewDialogOpen:!1,isConfirmDialogOpen:!1,isVoxDialogOpen:!1,voxItem:null,isMuted:!1,isRestarting:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.orientation>=-90&&function(){function e(){var t=new SpeechSynthesisUtterance;window.speechSynthesis.speak(t),document.getElementsByClassName("App")[0].removeEventListener("click",e)}console.log("iosVoices"),window.addEventListener("load",(function(){document.getElementsByClassName("App")[0].addEventListener("click",e)}));var t,a=window.AudioContext||window.webkitAudioContext,n=a.prototype;(a=function(){return t}).prototype=n,window.navigator.getUserMedia=function(e,a,o){t=new n.constructor,t.createScriptProcessor(1024,1,1).connect(t.destination),window.navigator.mediaDevices.getUserMedia(e).then((function(e){a(e)})).catch((function(e){o(e)}))}}(),setTimeout((function(){window.scrollTo({top:0,left:0,behavior:"smooth"}),window.speechSynthesis.speak(new SpeechSynthesisUtterance(" "))}),200)}},{key:"render",value:function(){var e=this.state,t=e.exerciseList,a=e.isAddNewDialogOpen,n=e.isIntervalDialogOpen,i=e.isConfirmDialogOpen,r=e.isVoxDialogOpen,l=e.voxItem,s=e.workoutInterval,c=e.restInterval,p=e.isMuted,u=e.isRestarting,d=this.onListChange,m=this.openAddNew,g=this.closeAddNewPopup,x=this.addNewExercise,f=this.openSettingsWindow,v=this.closeSettingsWindow,b=this.openConfirmPopup,h=this.closeConfirmPopup,S=this.openVoxPopup,E=this.closeVoxPopup,w=this.updatePrompt,y=this.updateIntervals,C=this.removeExercise,N=this.resetExercises,O=this.editExercise,I=this.toggleMute,k=this.updateRestarting,M=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&window.orientation>-90;return o.a.createElement("div",{className:"App",style:M?{justifyContent:"flex-start"}:null},o.a.createElement(F,{exerciseList:t,onListChange:d,addNew:m,openSettingsWindow:f,openConfirmPopup:b,openVoxPopup:S,removeExercise:C,resetExercises:N,editExercise:O}),a&&o.a.createElement(X,{closePopup:g,addNewExercise:x}),n&&o.a.createElement(q,{closePopup:v,intervals:{w:s,r:c},updateIntervals:y}),i&&o.a.createElement(Y,{closePopup:h,resetExercises:N}),r&&o.a.createElement(ne,{closePopup:E,resetExercises:N,item:l,updatePrompt:w}),o.a.createElement(ve,{style:{zIndex:1},exerciseList:t,workoutInterval:s,restInterval:c,isMuted:p,toggleMute:I,isRestarting:u,updateRestarting:k}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[160,1,2]]]);
//# sourceMappingURL=main.5a7bf222.chunk.js.map