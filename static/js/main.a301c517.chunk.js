(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var i=t(1),a=t(5),s=t.n(a),r=t(6),c=t(7),o=t(2),d=t(9),h=t(8),l=t(4),u=t.n(l),b=t(0);u.a.setOptions({breaks:!0});var j=function(e){Object(d.a)(t,e);var n=Object(h.a)(t);function t(e){var i;return Object(r.a)(this,t),(i=n.call(this,e)).state={input:"\n# Hi There, This is a heading!\n## This is a sub-heading...\n### Check This out :\n\nHeres some code, `<div>Hello World</div>`\n```\n// this is multi-line code:\n(function repeat() {\n    eat();\n    sleep();\n    code();\n    repeat();\n}) ();\n```\n\nThis text is **bold**\nThis one is _italic_.\nYou can use both of them like **_this!_**\nYou can ~~cross stuff out~~.\n\nCheck out my [github page](https://github.com/LeviaThanSr)\n\n> This is a Block Quotes!\n\nYou can also use tables:\n\nHi | Hello | Hi, again!\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\nAnd of course there are lists.\n- list 1\n  - list 2 (Some are bulleted)\n     - list 3\n        - You get the idea\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n\nThis is an embedded image:\n\n![Markdown Logo](https://i.ibb.co/MppbJFq/Markdown.png)\n\n"},i.handleChange=i.handleChange.bind(Object(o.a)(i)),i}return Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){var e=this.state.input;return Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("div",{className:"row text-center py-2 bg-primary text-white",children:Object(b.jsx)("h2",{children:"Markdown Previewer"})}),Object(b.jsxs)("div",{className:"row small justify-content-center",children:[Object(b.jsxs)("div",{className:"col-6  vh-100 window",children:[Object(b.jsx)("h4",{className:"text-center card-header py-3",children:"Editor"}),Object(b.jsx)("textarea",{className:"editor form-control",id:"editor",value:e,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"col-6  vh-100 window",children:[Object(b.jsx)("h4",{className:"text-center card-header py-3",children:"Previewer"}),Object(b.jsx)("div",{className:"preview rounded form-control",id:"preview",dangerouslySetInnerHTML:{__html:u()(e)}})]})]})]})}}]),t}(i.Component);t(15);s.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a301c517.chunk.js.map