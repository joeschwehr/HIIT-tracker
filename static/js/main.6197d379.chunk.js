(this["webpackJsonpworkout-tracker"]=this["webpackJsonpworkout-tracker"]||[]).push([[0],{120:function(e,t,a){},121:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),l=(a(96),a(20)),s=a(29),c=a(21),u=a(44),d=a(45),p=a(49),m=(a(97),a(15)),g=a(170),b=a(169),x=a(162),v=a(161),f=a(73),h=a.n(f),E=a(74),S=a.n(E),w=a(75),k=a.n(w),C=a(70),N=a.n(C),I=a(71),O=a.n(I),y=a(72),j=a.n(y),T=a(158),W=a(68),L=a.n(W),R=a(4),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleRemove=function(){a.props.commonProps.removeExercise(a.props.item)},a.handleEdit=function(){a.setState({isEditing:!0})},a.handleChange=function(e){a.setState({editedExercise:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.commonProps.editExercise({id:a.props.item.id,name:a.state.editedExercise}),a.setState({isEditing:!1})},a.state={isEditing:!1,editedExercise:a.props.item.name},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.itemSelected,n=e.dragHandleProps,i=this.state,o=i.isEditing,l=i.editedExercise,s=this.handleChange,c=this.handleSubmit,u=this.handleEdit,d=this.handleRemove,p=.05*a+1,m=15*a+1,g=0!==a,b=this.props.classes;return o?r.a.createElement("form",{onSubmit:c,className:b.form},r.a.createElement("input",{type:"text",className:b.input,value:l,onChange:s,autoFocus:!0}),r.a.createElement("button",{className:b.updateBtn}," ",r.a.createElement(L.a,null)," ")):r.a.createElement("div",{className:g?b.itemDragged:b.item,style:{transform:"scale(".concat(p,")"),boxShadow:"rgba(0, 0, 0, 0.2) 0px ".concat(m,"px ").concat(2*m,"px 0px")}},r.a.createElement("div",Object.assign({className:b.dragHandle},n),r.a.createElement(N.a,null)),r.a.createElement("div",{className:b.title},t.name),r.a.createElement(T.a,{className:b.iconContainer},r.a.createElement(O.a,{className:b.editIcon,fontSize:"small",onClick:u}),r.a.createElement(j.a,{className:b.editIcon,fontSize:"small",onClick:d})))}}]),t}(r.a.Component),D=Object(R.a)({"@global":{"::-webkit-scrollbar":{"-webkit-appearance":"none",width:"7px"},"::-webkit-scrollbar-thumb":{borderRadius:"4px",backgroundColor:"rgba(255, 255, 255, .4)","-webkit-box-shadow":"0 0 1px rgba(255, 255, 255, .5)",boxShadow:"0 0 1px rgba(255, 255, 255, .5)"}},item:{display:"flex",alignItems:"center",justifyContent:"space-between",transition:"all .3s","&:hover":{backgroundColor:"rgba(255, 255, 255, .15)"}},itemDragged:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"rgba(255, 255, 255, .35)",border:"1px solid rgba(255, 255, 255, 0.363)"},title:{fontWeight:500,padding:"0 20px",height:"46px",display:"flex",alignItems:"center"},iconContainer:{justifyContent:"flex-end"},editIcon:{color:"rgba(255, 255, 255, 0.301)",marginRight:"20px",zIndex:"20",transition:"all .3s","&:hover":{color:"white"}},form:{display:"flex",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",margin:"2px, 0",height:"46px"},input:{width:"320px",fontWeight:400,padding:"0 20px",fontSize:"1.1rem",color:"black",border:"none","&:focus":{outline:"none"}},updateBtn:{height:"46px",width:"46px",borderRadius:0,color:"green",border:"none",transition:"all .3s",backgroundColor:"rgba(255, 255, 255, .5)","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.8)"}},dragHandle:{left:0,opacity:0,width:"100%",zIndex:10,position:"absolute","&:hover":{cursor:"all-scroll"}}})(P),A=a(159),M=Object(A.a)({list:{width:360,color:"white",padding:"0 30px"},btn:{padding:"10px 20px",textTransform:"uppercase",fontSize:".7rem",letterSpacing:".1rem",color:"var(--highlight-dim)",transition:"all .4s ease-in-out","&:hover":{backgroundColor:"rgba(0, 0, 0, 0)",color:"var(--highlight-color)",letterSpacing:".15rem"}},sidebarHeader:{display:"flex",alignItems:"center",paddingTop:"20px"},sidebarChevron:{display:"flex",alignContent:"center",marginTop:"3px",borderRadius:"20px",backgroundColor:"rgba(255, 255, 255, 0.10)",marginLeft:"auto",transition:"all .6s","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.25)",transform:"scale(1.2)"}},sidebarTitle:{cursor:"default",margin:0},sidebarSubitle:{textTransform:"uppercase",fontWeight:500,marginTop:"0px",padding:"0px 0px 10px 0px",display:"flex",alignItems:"center",fontSize:".7rem",letterSpacing:".1rem",cursor:"default"},sidebarSettings:{width:"45%",textTransform:"uppercase",fontSize:".7rem",letterSpacing:".1rem",display:"flex",alignItems:"center",padding:"5px 0 5px 0",borderRadius:1,color:"rgba(255, 255, 255, 0.5)",transition:"all .3s","&:hover":{color:"white",cursor:"pointer"}},settingsText:{paddingLeft:"10px",paddingBottom:"5px"},sidebarAddNew:{marginTop:"10px",marginBottom:"-6px",height:"46px",fontWeight:500,padding:"0 20px",display:"flex",alignItems:"center",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",textTransform:"uppercase",fontSize:".7rem",letterSpacing:".1rem",color:"rgba(255, 255, 255, 0.527)",justifyContent:"center",transition:"all .3s","&:hover":{color:"white",backgroundColor:"rgba(255, 255, 255, .15)",cursor:"pointer"}},sidebarReset:{marginTop:"40px",height:"46px",fontWeight:500,padding:"0 20px",display:"flex",alignItems:"center",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",textTransform:"uppercase",fontSize:".7rem",letterSpacing:".1rem",color:"rgba(0, 0, 0, 0.7)",justifyContent:"center",backgroundColor:"rgba(255, 255, 255, .3)",transition:"all .3s","&:hover":{color:"rgba(0, 0, 0, 0.9)",backgroundColor:"rgba(255, 255, 255, .7)",cursor:"pointer"}}});function z(e){var t=e.exerciseList,a=e.onListChange,n=e.addNew,i=e.openSettingsWindow,o=e.removeExercise,l=e.reset,s=e.editExercise,c=t.length,u=M(),d=r.a.useState(!1),p=Object(m.a)(d,2),f=p[0],E=p[1],w=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&E(e)}};return r.a.createElement("div",null,r.a.createElement(b.a,{className:u.btn,onClick:w(!0)},"Customize Your Workout"),r.a.createElement(g.a,{open:f,onClose:w(!1),onOpen:w(!0)},r.a.createElement("div",{className:u.list,role:"presentation"},r.a.createElement("div",{className:u.sidebarHeader},r.a.createElement("h1",{className:u.sidebarTitle},"Your Workout"),r.a.createElement(h.a,{className:u.sidebarChevron,onClick:w(!1),fontSize:"large"})),r.a.createElement("div",{className:u.sidebarSubitle},c," ",1===c?"Exercise":"Exercises"),r.a.createElement("div",{className:u.sidebarSettings,onClick:i},r.a.createElement("div",{className:u.settingsIcon,fontSize:"small"},r.a.createElement(S.a,null)),r.a.createElement("div",{className:u.settingsText},"Set Intervals")),r.a.createElement(v.a,null),r.a.createElement("div",{className:u.sidebarAddNew,onClick:n},"Add New Exercise"),r.a.createElement(x.a,null,r.a.createElement(k.a,{list:t,itemKey:"id",template:D,onMoveEnd:function(e){return a(e)},padding:0,constrainDrag:!0,commonProps:{removeExercise:o,editExercise:s}})),0===t.length&&r.a.createElement("div",{className:u.sidebarReset,onClick:l},"RESET EXERCISES"))))}var B=a(168),H=a(163),F=a(167),U=a(165),V=a(166),J=a(164),K=Object(A.a)({errorSuppresion:{},"@global":{".MuiDialog-paper":{color:"var(--popup-title)",backgroundColor:"var(--popup-bg)",minWidth:"360px"},".MuiInputBase-input":{color:"var(--popup-title)"},".MuiDialogContentText-root":{color:"var(--popup-text)"},".MuiInputLabel-root.Mui-focused":{color:"var(--popup-text)"},".MuiFormLabel-root":{color:"var(--popup-text)"},".MuiInput-underline":{"&:after":{borderBottom:"1px solid var(--popup-underline)"}},".MuiButton-root":{color:"var(--popup-btn-text) "}}});function X(e){var t=K(),a=r.a.useState(""),n=Object(m.a)(a,2),i=n[0],o=n[1],l=function(){e.closePopup()};return r.a.createElement("div",{className:t.errorSuppresion},r.a.createElement(H.a,{open:!0,onClose:l,"aria-labelledby":"form-dialog-title"},r.a.createElement(J.a,{id:"form-dialog-title"},"Add New Exercise"),r.a.createElement(U.a,null,r.a.createElement(V.a,null,"Reorder exercises by dragging."),r.a.createElement(B.a,{onChange:function(e){o(e.target.value)},autoFocus:!0,margin:"dense",id:"name",label:"EXERCISE NAME",type:"text",fullWidth:!0})),r.a.createElement(F.a,null,r.a.createElement(b.a,{onClick:l,color:"primary"},"Cancel"),r.a.createElement(b.a,{onClick:function(){l(),e.addNewExercise(i),o("")},color:"primary",disabled:0===i.length},"Add"))))}var Y=Object(A.a)({inputHolder:{width:"100%",display:"flex",justifyContent:"space-evenly"},formInput:{margin:"20px 10px 0px 0",padding:"25px 0",width:"33%"},"@global":{".MuiDialog-paper":{color:"var(--popup-title)",backgroundColor:"var(--popup-bg)"},".MuiInputBase-input":{color:"var(--popup-title)"},".MuiButton-root":{color:"var(--popup-btn-text)"},".MuiDialogContentText-root":{color:"var(--popup-text)"},".MuiInputLabel-root.Mui-focused":{color:"var(--popup-text)"},".MuiFormLabel-root":{color:"var(--popup-text)"},".MuiInput-underline":{"&:after":{borderBottom:"1px solid var(--popup-underline)"}}}});function q(e){var t=e.intervals.w,a=e.intervals.r,n=Y(),i=r.a.useState(t),o=Object(m.a)(i,2),l=o[0],s=o[1],c=r.a.useState(a),u=Object(m.a)(c,2),d=u[0],p=u[1],g=function(){e.closePopup()},x=function(e){"Workout Interval"!==e.target.id?p(Number(e.target.value)):s(Number(e.target.value))};return r.a.createElement("div",null,r.a.createElement(H.a,{open:!0,onClose:g,"aria-labelledby":"form-dialog-title"},r.a.createElement(J.a,{id:"form-dialog-title"},"Set Workout & Rest Intervals"),r.a.createElement(U.a,null,r.a.createElement("div",{className:n.inputHolder},r.a.createElement(B.a,{className:n.formInput,onChange:x,autoFocus:!0,id:"Workout Interval",label:"WORKOUT INTERVAL (SECONDS)",type:"number",InputProps:{inputProps:{min:5,max:1e4}},defaultValue:l,fullWidth:!0}),r.a.createElement(B.a,{className:n.formInput,onChange:x,id:"Rest Interval",label:"REST INTERVAL (SECONDS)",type:"number",InputProps:{inputProps:{min:1,max:1e3}},defaultValue:d,fullWidth:!0,onKeyDown:function(){return!1}}))),r.a.createElement(F.a,null,r.a.createElement(b.a,{onClick:g,color:"primary"},"Cancel"),r.a.createElement(b.a,{onClick:function(){g(),t===l&&a===d||e.updateIntervals({workoutInterval:l,restInterval:d})},color:"primary",disabled:Number(l)<=0||Number(d)<=0||""===l||""===d},"Update"))))}function G(e){for(var t=window.speechSynthesis.getVoices(),a="",n=0;n<t.length;n++)if("en-US"===t[n].lang){a=t[n];break}""===a&&(a=t[0]);var r=new SpeechSynthesisUtterance;r.rate=1.1,r.pitch=.9,r.text=e,r.voice=a,window.speechSynthesis.speak(r)}a(120);function $(e){var t=e.runTime,a=e.alternate,i=e.isResting,o=e.precount,l=e.setPrecount,s=e.nextExercise,c=e.currentExercise,u=e.resetWorkout,d=Object(n.useState)(!1),p=Object(m.a)(d,2),g=p[0],b=p[1],x=Object(n.useState)(0),v=Object(m.a)(x,2),f=v[0],h=v[1],E=t-f,S=Object(n.useCallback)((function(){if(o>0)return G(o>3?"three":3===o?"two":2===o?"one":"Go. ".concat(c)),void l(o-1);if("stop"!==t){if(0===E)return G(i?s:"Next up, ".concat(s)),a(),void h(0);h(f+1),E>6||(6!==E||i?5!==E||i?4===E?G("three"):3===E?G("two"):2===E?G("one"):1===E&&i&&G("go"):G("four"):G("five"))}else w()}),[f,t,a,E,o,i,l,s,c]);Object(n.useEffect)((function(){if(g){var e=setInterval(S,1e3);return function(){return clearInterval(e)}}}),[g,S]);var w=function(){b(!1)},k=function(){b(!1),h(0)};return r.a.createElement("div",{className:"timer-container"},r.a.createElement("div",{className:"timer-clock"},o>0&&g?r.a.createElement("div",null,o>3?"START":o):r.a.createElement("div",null,isNaN(t)?0:E),r.a.createElement("div",{className:"timer-buttons"},r.a.createElement("button",{onClick:function(){b(!0)}},"Start"),r.a.createElement("button",{onClick:w},"Stop"),r.a.createElement("button",{onClick:k},"Reset Timer"),r.a.createElement("button",{onClick:function(){u(),k()}},"Restart Workout"))))}a(121);function Q(e){var t=e.exerciseList,a=e.workoutInterval,i=e.restInterval,o=Object(n.useState)(!1),l=Object(m.a)(o,2),s=l[0],c=l[1],u=Object(n.useState)(0),d=Object(m.a)(u,2),p=d[0],g=d[1],b=Object(n.useState)(4),x=Object(m.a)(b,2),v=x[0],f=x[1],h="",E="",S=s?i:a,w=function(){s?(g(p+1),c(!1),S=a):(c(!0),S=i)},k=function(){g(0),f(4),c(!1)};return p<t.length?(h=t[p].name,E=1===t.length||p+1===t.length?"Celebrate":t[p+1].name):S="stop",p<t.length?r.a.createElement("div",{className:"clock-container"},r.a.createElement("div",null," ",p+1,"/",t.length),r.a.createElement("div",null,"Current: ",s?"Rest":h),r.a.createElement($,{runTime:S,alternate:w,precount:v,setPrecount:f,isResting:s,currentExercise:h,nextExercise:E,resetWorkout:k}),r.a.createElement("div",null,"Next: ",E)):r.a.createElement("div",{className:"clock-container"},r.a.createElement("div",null," ",p,"/",t.length),r.a.createElement("div",null,"Done"),r.a.createElement($,{runTime:S,alternate:w,precount:v,setPrecount:f,isResting:s,currentExercise:h,nextExercise:E,resetWorkout:k}))}var Z=a(11),_=a.n(Z),ee=[{id:_()(),name:"Jumping Jacks"},{id:_()(),name:"Wall Sit"},{id:_()(),name:"Push-ups"},{id:_()(),name:"Sit-ups"},{id:_()(),name:"Step Up Onto Chair"},{id:_()(),name:"Squats"},{id:_()(),name:"Tricep-dips"},{id:_()(),name:"Plank"},{id:_()(),name:"High-Knees Running"},{id:_()(),name:"Lunges"},{id:_()(),name:"Push-up w/rotation"},{id:_()(),name:"Side Plank 1"},{id:_()(),name:"Side Plank 2"}],te=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onListChange=function(e){a.setState({exerciseList:e})},a.openAddNew=function(){a.setState({isAddNewDialogOpen:!0})},a.openSettingsWindow=function(){a.setState({isIntervalDialogOpen:!0})},a.closeAddNewPopup=function(){a.setState({isAddNewDialogOpen:!1})},a.closeSettingsWindow=function(){a.setState({isIntervalDialogOpen:!1})},a.addNewExercise=function(e){var t=[].concat(Object(l.a)(a.state.exerciseList),[{id:_()(),name:e}]);a.setState({exerciseList:t})},a.removeExercise=function(e){var t=a.state.exerciseList.filter((function(t){return t.id!==e.id}));a.setState({exerciseList:t})},a.editExercise=function(e){console.log("editing:",e);var t=a.state.exerciseList.map((function(t){return t.id===e.id?e:t}));a.setState({exerciseList:t})},a.updateIntervals=function(e){var t=e.workoutInterval,n=e.restInterval;a.setState({workoutInterval:t,restInterval:n})},a.reset=function(){a.setState({exerciseList:ee})},a.state={exerciseList:ee,workoutInterval:30,restInterval:10,isIntervalDialogOpen:!1,isAddNewDialogOpen:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.exerciseList,a=e.isAddNewDialogOpen,n=e.isIntervalDialogOpen,i=e.workoutInterval,o=e.restInterval,l=this.onListChange,s=this.openAddNew,c=this.closeAddNewPopup,u=this.addNewExercise,d=this.openSettingsWindow,p=this.closeSettingsWindow,m=this.updateIntervals,g=this.removeExercise,b=this.reset,x=this.editExercise;return r.a.createElement("div",{className:"App"},r.a.createElement(z,{exerciseList:t,onListChange:l,addNew:s,openSettingsWindow:d,removeExercise:g,reset:b,editExercise:x}),a&&r.a.createElement(X,{closePopup:c,addNewExercise:u}),n&&r.a.createElement(q,{closePopup:p,intervals:{w:i,r:o},updateIntervals:m}),r.a.createElement(Q,{exerciseList:t,workoutInterval:i,restInterval:o}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},91:function(e,t,a){e.exports=a(124)},96:function(e,t,a){},97:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.6197d379.chunk.js.map