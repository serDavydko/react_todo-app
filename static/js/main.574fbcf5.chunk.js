(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(8),r=n.n(l),c=(n(16),n(17),n(9)),s=n(6),i=n(1),u=n(2),d=n(4),m=n(3),f=n(5),h=function(e){var t=e.todo,n=e.toggle,o=e.destroy,l=t.id,r=t.title,c=t.isDone;return a.a.createElement("li",{className:"todo"},a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",id:l,onClick:function(){return n(l)},checked:c}),a.a.createElement("label",{htmlFor:l,className:c&&"completed-item"},r,a.a.createElement("input",{type:"checkbox",className:"toggle",id:l,onClick:function(){return n(l)},checked:c})),a.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return o(l)}})))};h.defaultProps={toggle:null,destroy:null};var g=h,p=function(e){var t=e.todoes,n=e.filterBy,o=e.isDoneTodoes,l=e.changeFilter,r=e.destroyCompleted;return a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"todo-count"},"".concat(t.filter(function(e){return!e.isDone}).length," items left")),a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{href:"#/",className:"All"===n&&"selected",onClick:function(){return l("All")}},"All")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/active",className:"Active"===n&&"selected",onClick:function(){return l("Active")}},"Active")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/completed",className:"Completed"===n&&"selected",onClick:function(){return l("Completed")}},"Completed"))),o&&a.a.createElement("button",{type:"button",onClick:r,className:"clear-completed"},"Clear completed"))};p.defaultProps={changeFilter:null,destroyCompleted:null};var b=p,E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={value:""},n.handleChange=function(e){n.setState({value:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.addTask(n.state.value),n.setState({value:""})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("input",{className:"new-todo",onChange:this.handleChange,value:this.state.value,placeholder:"What needs to be done?"}),a.a.createElement("button",{type:"submit",className:"input-button"})))}}]),t}(a.a.Component);E.defaultProps={addTask:""};var v=E,y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={allToggled:!1,showContent:!1,isDoneTodoes:!1,todoes:[],filterBy:"All"},n.changeFilter=function(e){n.setState({filterBy:e})},n.filter=function(e,t){switch(t){case"All":return e;case"Active":return e.filter(function(e){return!e.isDone});case"Completed":return e.filter(function(e){return e.isDone});default:return e}},n.toggle=function(e){n.setState(function(t){return{todoes:t.todoes.map(function(t){return t.id!==e?t:Object(s.a)({},t,{isDone:!t.isDone})}),isDoneTodoes:!t.todoes.filter(function(e){return e.isDone}).length>0}})},n.toggleAll=function(){n.setState(function(e){return{todoes:e.todoes.map(function(t){return!1===e.allToggled?Object(s.a)({},t,{isDone:!0}):Object(s.a)({},t,{isDone:!1})}),allToggled:!e.allToggled,isDoneTodoes:!e.todoes.filter(function(e){return e.isDone}).length>0}})},n.addTask=function(e){n.setState(function(t){return{todoes:[].concat(Object(c.a)(t.todoes),[{id:Date.now(),title:e,isDone:!1}]),showContent:!0}})},n.destroy=function(e){n.setState(function(t){return{todoes:t.todoes.filter(function(t){return t.id!==e}),showContent:!(t.todoes.length<2),isDoneTodoes:!t.todoes.filter(function(e){return e.isDone}).length>0}})},n.destroyCompleted=function(){n.setState(function(e){return{todoes:e.todoes.filter(function(e){return!1===e.isDone}),isDoneTodoes:!1}})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.showContent,o=t.isDoneTodoes,l=t.todoes,r=t.filterBy,c=this.filter(l,r),s=0!==l.length?c.map(function(t){return a.a.createElement(g,{todo:t,toggle:e.toggle,destroy:e.destroy})}):"";return a.a.createElement("section",{className:"todoapp"},a.a.createElement(v,{addTask:this.addTask}),n&&a.a.createElement("div",{className:"content-group"},a.a.createElement("section",{className:"main"},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onClick:this.toggleAll}),a.a.createElement("label",{htmlFor:"toggle-all",id:"label"},"Mark all as complete"),a.a.createElement("ul",{className:"todo-list"},s)),a.a.createElement(b,{todoes:l,filterBy:r,isDoneTodoes:o,changeFilter:this.changeFilter,destroyCompleted:this.destroyCompleted})))}}]),t}(a.a.Component);r.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.574fbcf5.chunk.js.map