(this["webpackJsonptask-mngmt"]=this["webpackJsonptask-mngmt"]||[]).push([[0],{27:function(e,t,a){e.exports=a(40)},32:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),i=(a(32),a(12)),o=a(13),s=a(16),d=a(14),u=a(17),m=a(8),p=a(43),f=a(41),E=a(26),b=a(7),h=function(e){return{type:"ADD",data:e}},D=function(e){return{type:"EDIT",id:e}},O=function(e){return{type:"DELETE",id:e}},v=function(e,t){return{type:"UPDATE",id:e,data:t}},y=a(42),k=Object(b.b)((function(e){return{task:e}}))((function(e){var t;return t=e.task.length>0?r.a.createElement("div",{id:"viewTable"},r.a.createElement("table",{id:"myTab",className:"table table-bordered table-hover table-responsive "},r.a.createElement("tr",null,r.a.createElement("th",{id:"noCol"},"Row#"),r.a.createElement("th",{id:"titlCol"},"Title"),r.a.createElement("th",{id:"descCol"},"Description"),r.a.createElement("th",{id:"DDateCol"},"Due Date"),r.a.createElement("th",{id:"edtCol"},"Edit"),r.a.createElement("th",{id:"delCol"},"Delete")),r.a.createElement("tbody",null,e.task.map((function(t,a){return r.a.createElement("tr",{id:"addr0",key:a},r.a.createElement("td",null,a+1),r.a.createElement("td",null," ",e.task[a].title),r.a.createElement("td",null," ",e.task[a].description," "),r.a.createElement("td",null,e.task[a].theDate),r.a.createElement("td",null,r.a.createElement(p.a,{onClick:function(){return e.editT(a)},id:"btnEdt"},r.a.createElement("i",{className:"fa fa-pencil-square-o"}),"  Edit")),r.a.createElement("td",null,r.a.createElement(p.a,{onClick:function(){return e.deleteT(a)},id:"btnDel",className:"btn-danger"},r.a.createElement("i",{className:"fa fa-trash"}),"   Delete")))}))))):r.a.createElement("h1",{id:"empty"},"No task added"),r.a.createElement("div",null,t)})),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();for(var t=a.refs.title.value,n=a.refs.desc.value,r=a.refs.dDate.value,l=new Date,c=!1,i=0;i<a.props.task.length;i++)1==a.props.task[i].isEdit&&(l=a.props.task[i].id,i=a.props.task.length,c=!0);var o={id:l,title:t,description:n,theDate:r,isEdit:!1};1==c?(a.props.update(l,o),document.getElementById("addUpd").innerHTML="Add"):a.props.add(o),a.refs.title.value="",a.refs.desc.value="",a.refs.dDate.value=""},a.editRow=function(e){document.getElementById("addUpd").innerHTML="Update",a.refs.title.value=a.props.task[e].title,a.refs.desc.value=a.props.task[e].description,a.refs.dDate.value=a.props.task[e].theDate,a.props.edit(a.props.task[e].id)},a.deleteRow=function(e){a.props.del(a.props.task[e].id)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("h1",{id:"head"}," Task management"),r.a.createElement(y.a,{onSubmit:this.handleSubmit,id:"myForm"},r.a.createElement("br",null),r.a.createElement(y.a.Group,{as:f.a,controlId:"formHorizontalText"},r.a.createElement(y.a.Label,{column:!0,sm:2,className:"lbl"},"Task"),r.a.createElement(E.a,{sm:9},r.a.createElement(y.a.Control,(e={type:"text",placeholder:"add task",ref:"title",required:!0},Object(m.a)(e,"ref","title"),Object(m.a)(e,"className","inp"),e)))),r.a.createElement(y.a.Group,{as:f.a,controlId:"formHorizontalDesc"},r.a.createElement(y.a.Label,{column:!0,sm:2,className:"lbl"},"Description"),r.a.createElement(E.a,{sm:9},r.a.createElement(y.a.Control,{as:"textarea",rows:"3",placeholder:"descripe task",required:!0,ref:"desc",className:"inp"}))),r.a.createElement(y.a.Group,{as:f.a,controlId:"formHorizontalDue"},r.a.createElement(y.a.Label,{column:!0,sm:2,className:"lbl"},"Due Date"),r.a.createElement(E.a,{sm:4},r.a.createElement(y.a.Control,{type:"date",required:!0,ref:"dDate"}))),r.a.createElement(y.a.Group,{as:f.a},r.a.createElement(E.a,{sm:{span:10,offset:2}},r.a.createElement(p.a,{id:"addUpd",type:"submit"},"Add")))),r.a.createElement(k,{editT:this.editRow,deleteT:this.deleteRow}))}}]),t}(n.Component),g=Object(b.b)((function(e){return{task:e}}),(function(e){return{add:function(t){e(h(t))},del:function(t){e(O(t))},edit:function(t){e(D(t))},update:function(t,a){e(v(t,a))}}}))(j),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null))}}]),t}(n.Component),T=a(15),C=a(9);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return[].concat(Object(C.a)(e),[t.data]);case"DELETE":return Object(C.a)(e).filter((function(e){return e.id!==t.id}));case"EDIT":return Object(C.a)(e).map((function(e){return e.id===t.id?P({},e,{isEdit:!0}):e}));case"UPDATE":return Object(C.a)(e).map((function(e){return e.id===t.id?P({},e,{isEdit:!1,title:t.data.title,description:t.data.description,theDate:t.data.theDate}):e}));default:return e}},I=Object(T.b)(A);c.a.render(r.a.createElement(b.a,{store:I},r.a.createElement(w,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.a15278e8.chunk.js.map