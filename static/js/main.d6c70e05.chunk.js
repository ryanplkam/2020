(this.webpackJsonp2020=this.webpackJsonp2020||[]).push([[0],{87:function(e,t,a){},88:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(0),o=a.n(c),r=a(10),i=a.n(r),s=(a(87),a(32)),l=a(11),d=a(71),u=a(24),h=a(25),p=a(29),j=a(27),b=(a(88),a(72)),m=a(155),O=a(140),f=a(142),v=a(153),x=a(141),g=a(60),C=a(69),y=a.n(C),S=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).onClick=function(t){e.props.onAccordionSelect(e.props.id)},e.onComplete=function(t){e.props.onAccordionComplete(e.props.id)},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(m.a,{onClick:this.onClick,children:[Object(n.jsx)(O.a,{"aria-label":"Select",expandIcon:Object(n.jsx)(y.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(n.jsx)(x.a,{"aria-label":"Acknowledge",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},control:Object(n.jsx)(v.a,{onChange:this.onComplete}),label:this.props.summary})}),Object(n.jsx)(f.a,{children:Object(n.jsx)(g.a,{children:this.props.details})})]})}}]),a}(c.Component),A=(a(93),function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).getDisplayPercent=function(){var t=e.getPercentComplete();return isNaN(t)?"":t},e.getPercentComplete=function(){return Math.round(Object.values(e.props.accordions).filter((function(e){return e.complete})).length/Object.keys(e.props.accordions).length*100)},e.getMessage=function(){var t=e.getPercentComplete();if(isNaN(t))return"Oops, all out of boxes! Add some boxes or refresh the page to start again";switch(t){case 100:return":)";default:return"Check the boxes to get started."}},e}return Object(h.a)(a,[{key:"render",value:function(){for(var e=[],t=0,a=Object.entries(this.props.accordions);t<a.length;t++){var c=Object(b.a)(a[t],2),o=c[0],r=c[1];e.push(Object(n.jsx)(S,{id:o,summary:r.summary,details:r.details,onAccordionSelect:this.props.onAccordionSelect,onAccordionComplete:this.props.onAccordionComplete,onAccordionDelete:this.props.onAccordionDelete},o))}return Object(n.jsxs)("div",{className:"panel-container",children:[this.getMessage(),Object(n.jsxs)("div",{className:"panel-container-header",children:[Object(n.jsx)("div",{className:"panel-container-header-left",children:Object(n.jsx)("b",{children:"Topics"})}),Object(n.jsxs)("div",{className:"panel-container-header-right",children:["Completion: ",this.getDisplayPercent(),"%"]})]}),e]})}}]),a}(o.a.Component)),k=a(150),P=a(151),w=a(154),D=a(149),N=a(147),F=a(148),T=a(146),B=a(144),I=a(143),M=a(145),L=a(70),E=a.n(L);a(94);function J(e){var t,a=Object(I.a)("(max-width: 600px)"),c=Object(B.a)({fabBase:{position:"absolute",bottom:a?"20px":"40px"},fabLeft:{left:a?"16px":"10%"},fabRight:{right:a?"16px":"10%"}})();switch(e.alignment){case"right":case"left":t=c.fabRight;break;default:t=""}return Object(n.jsx)(M.a,{onClick:e.onClick,className:"".concat(c.fabBase," ").concat(t),children:Object(n.jsx)(E.a,{})})}var R=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),Object.values(n.state.errors).some((function(e){return""!==e}))||(n.props.onCreateAccordion({summary:n.state.summary,details:n.state.details}),n.setState(n.defaultState))},n.validateField=function(e,t){n.setState(Object(l.a)(Object(l.a)({},n.state),{},{errors:Object(l.a)(Object(l.a)({},n.state.errors),{},Object(s.a)({},e,t))}))},n.handleSummaryChange=function(e){var t=e.target.value,a=t?"":"Summary cannot be blank",c=Object(l.a)(Object(l.a)({},n.state),{},{summary:t});n.setState(c,(function(){this.validateField("summary",a)}))},n.handleDetailsChange=function(e){var t=e.target.value,a=t?"":"Details cannot be blank",c=Object(l.a)(Object(l.a)({},n.state),{},{details:t});n.setState(c,(function(){this.validateField("details",a)}))},n.handleClickOpen=function(e){var t=Object(l.a)(Object(l.a)({},n.state),{},{open:!0});n.setState(t)},n.handleClose=function(e){var t=Object(l.a)(Object(l.a)({},n.state),{},{open:!1});n.setState(t)},n.defaultState={open:!1,summary:"",details:"",errors:{summary:"",details:""}},n.state=n.defaultState,n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.errors,a=e.open,c=e.summary,o=e.details;return Object(n.jsxs)("div",{children:[Object(n.jsx)(J,{alignment:"right",onClick:this.handleClickOpen}),Object(n.jsxs)(w.a,{open:a,onClose:this.handleClose,"aria-labelledby":"form-dialog-title",children:[Object(n.jsx)(T.a,{id:"form-dialog-title",children:"Add a topic"}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsxs)(N.a,{children:[Object(n.jsx)(F.a,{children:"To add a new topic, please enter the topic summary and details here."}),Object(n.jsx)(P.a,{autoFocus:!0,margin:"dense",id:"summary",label:"Summary",type:"text",fullWidth:!0,value:c,onChange:this.handleSummaryChange,error:Boolean(t.summary),helperText:t.summary}),Object(n.jsx)(P.a,{margin:"dense",id:"details",label:"Details",type:"text",fullWidth:!0,value:o,onChange:this.handleDetailsChange,error:Boolean(t.details),helperText:t.details})]}),Object(n.jsxs)(D.a,{children:[Object(n.jsx)(k.a,{onClick:this.handleClose,color:"primary",children:"Cancel"}),Object(n.jsx)(k.a,{color:"primary",type:"submit",children:"Add"})]})]})]})]})}}]),a}(o.a.Component),W=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).nextAccordionId=function(){return Math.max.apply(Math,Object(d.a)(Object.keys(e.state.accordions)))+1},e.onCreateAccordion=function(t){e.setState({accordions:Object(l.a)(Object(l.a)({},e.state.accordions),{},Object(s.a)({},e.nextAccordionId(),{summary:t.summary,details:t.details,complete:!1,active:!1}))})},e.onCreateNewEmptyPanel=function(){e.setState({accordions:Object(l.a)(Object(l.a)({},e.state.accordions),{},Object(s.a)({},e.nextAccordionId(),{summary:"Lorem ipsum",details:"Lorem ipsum",complete:!1,active:!1}))})},e.onPanelComplete=function(t){var a=Object(l.a)({},e.state.accordions);a[t].complete=!a[t].complete,e.setState({accordions:a})},e.onPanelDelete=function(t){var a=Object(l.a)({},e.state.accordions);delete a[t],e.setState({accordions:a})},e.onPanelSelect=function(t){var a=Object(l.a)({},e.state.accordions);a[t].active=!a[t].active,e.setState({accordions:a})},e.state={accordions:{1:{summary:"First panel",details:"Hello there",complete:!1,active:!1},2:{summary:"Second panel",details:"Another happy landing",complete:!1,active:!1},3:{summary:"Third panel",details:"The negotiations were short",complete:!1,active:!1}}},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(A,{onCreateNewEmptyPanel:this.onCreateNewEmptyPanel,onAccordionDelete:this.onPanelDelete,onAccordionComplete:this.onPanelComplete,onAccordionSelect:this.onPanelSelect,accordions:this.state.accordions}),Object(n.jsx)(R,{onCreateAccordion:this.onCreateAccordion})]})}}]),a}(o.a.Component),H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,157)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)}))};i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(W,{})}),document.getElementById("root")),H()}},[[95,1,2]]]);
//# sourceMappingURL=main.d6c70e05.chunk.js.map