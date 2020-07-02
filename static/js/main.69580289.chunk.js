(this["webpackJsonpreading-list"]=this["webpackJsonpreading-list"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),l=(n(13),n(2)),u=n(6),i=n(15),s=function(e,t){switch(t.type){case"ADD_BOOK":return[].concat(Object(u.a)(e),[{title:t.book.title,author:t.book.author,id:Object(i.a)()}]);case"REMOVE_BOOK":return e.filter((function(e){return e.id!==t.id}));default:return e}},m=Object(a.createContext)(),d=function(e){var t=Object(a.useReducer)(s,[],(function(){var e=localStorage.getItem("books");return e?JSON.parse(e):[]})),n=Object(l.a)(t,2),o=n[0],c=n[1];return Object(a.useEffect)((function(){localStorage.setItem("books",JSON.stringify(o))}),[o]),r.a.createElement(m.Provider,{value:{books:o,dispatch:c}},e.children)},b=function(){var e=Object(a.useContext)(m).books;return r.a.createElement("div",{className:"navbar"},r.a.createElement("h1",null,"My Reading List"),r.a.createElement("p",null,"Currently you have ",e.length," books to get through..."))},h=function(e){var t=e.book,n=Object(a.useContext)(m).dispatch;return r.a.createElement("li",{onClick:function(){return n({type:"REMOVE_BOOK",id:t.id})}},r.a.createElement("div",{className:"title"},t.title),r.a.createElement("div",{className:"author"},t.author))},E=function(){var e=Object(a.useContext)(m).books;return e.length?r.a.createElement("div",{className:"book-list"},r.a.createElement("ul",null,e.map((function(e){return r.a.createElement(h,{book:e,key:e.id})})))):r.a.createElement("div",{className:"empty"},"Finished reading all books!!  ",r.a.createElement("hr",null),r.a.createElement("span",null," Add books to get started \ud83d\udcda Or consider going out for a walk \ud83c\udfc3... "))},f=function(){var e=Object(a.useContext)(m).dispatch,t=Object(a.useState)(""),n=Object(l.a)(t,2),o=n[0],c=n[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),s=i[0],d=i[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_BOOK",book:{title:o,author:s}}),c(""),d("")}},r.a.createElement("input",{type:"text",placeholder:"Book Title",value:o,onChange:function(e){return c(e.target.value)},required:!0}),r.a.createElement("input",{type:"text",placeholder:"Author Name",value:s,onChange:function(e){return d(e.target.value)},required:!0}),r.a.createElement("input",{type:"submit",value:"Add Book"}))};var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null,r.a.createElement(b,null),r.a.createElement(E,null),r.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.69580289.chunk.js.map