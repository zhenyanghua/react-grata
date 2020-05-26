(this["webpackJsonpreact-grata-example"]=this["webpackJsonpreact-grata-example"]||[]).push([[0],{171:function(n,e,t){n.exports=t(375)},373:function(n,e,t){},374:function(n,e,t){},375:function(n,e,t){"use strict";t.r(e);t(172),t(182);var r,a=t(3),c=t.n(a),o=t(169),l=t.n(o),i=t(78),u=t(62),m=function(){var n=Math.random().toString(36).substr(2,5);return"".concat("grata","-").concat(n)},s=function(n){return n.join(" ")},d=function(n,e){for(var t=[],r=0,a=0;a<2*n.length-1;)a++%2===0?t.push(n[r++]):t.push(e.toString());return s(t)};!function(n){n.FitHeight="fit-height"}(r||(r={}));var p,f=function(n){var e=n.rows,t=n.rowGap,a=Object(i.a)(n,["rows","rowGap"]),c=Array(e.length-1).fill(t).join(" - "),o="0";e.includes(r.FitHeight)&&(o=e.filter((function(n){return n!==r.FitHeight})).join(" - "));var l=e.map((function(n){return n===r.FitHeight?"calc(100% - ".concat(o," - ").concat(c,")"):n}));return Object(u.a)({rows:l,rowGap:t},a)},h=function(){var n=document.createElement("style");return document.head.appendChild(n),n},g=function(n){n&&document.head.removeChild(n)},w=function(n,e){var t=n.sheet;if(!t)throw new Error("Failed to find CSSStyleSheet from the style element");t.insertRule(e,t.cssRules.length)};!function(n){n.GRID="grata-grid",n.CELL="grata-cell"}(p||(p={}));var E=function(n){var e=n.rows,t=n.columns,r=Object(i.a)(n,["rows","columns"]),o=r.rowGap,l=void 0===o?0:o,u=r.columnGap,E=void 0===u?0:u,v=r.children,C=r.className,x=function(n){var e=0,t=0;return n&&c.a.Children.forEach(n,(function(n){var r=n.props,a=r.row,c=void 0===a?1:a,o=r.column,l=void 0===o?1:o,i=r.rowSpan,u=void 0===i?1:i,m=r.columnSpan,s=void 0===m?1:m;c+u-1>t&&(t=c+u-1),l+s-1>e&&(e=l+s-1)})),{columns:Array(e).fill("1fr"),rows:Array(t).fill("auto")}}(v);e||(e=x.rows),t||(t=x.columns);var y=f({rows:e,columns:t,rowGap:l,columnGap:E});e=y.rows,t=y.columns;var G=d(e,l),b=d(t,E),j="\n    grid-row-gap: ".concat(l,";\n    grid-column-gap: ").concat(E,";\n    grid-template-rows: ").concat(s(e),";\n    grid-template-columns: ").concat(s(t),";\n\n    -ms-grid-rows: ").concat(G,";\n    -ms-grid-columns: ").concat(b,";\n  "),S=m(),O="\n  .".concat(S," {\n    display: grid;\n    display: -ms-grid;\n  ").concat(j,"\n  }\n "),N="".concat(S," ").concat(C||p.GRID);return Object(a.useLayoutEffect)((function(){var n=h();return w(n,O),function(){g(n)}}),[]),c.a.createElement("div",{className:N},v)},v=function(n){var e=n.layout,t=n.children,r=n.matrix,a=Object(i.a)(n,["children","matrix"]),o=t;return r&&(e=function(n){var e={};return n.forEach((function(n,t){n.forEach((function(n,r){e[n]?e[n].row===t+1?e[n].columnSpan++:e[n].column===r+1&&e[n].rowSpan++:n&&(e[n]={id:n,row:t+1,column:r+1,rowSpan:1,columnSpan:1})}))})),Object.keys(e).map((function(n){return e[n]}))}(r)),e&&(o=function(n,e){var t=function(n,e){var t={};return n.forEach((function(n){return t[n[e]]=n})),t}(e,"id");return c.a.Children.map(n,(function(n){return c.a.cloneElement(n,Object(u.a)(Object(u.a)({},t[n.props.id]),n.props))}))}(t,e)),c.a.createElement(E,Object(u.a)({},a),o)},C=function(n){var e=n.row,t=n.rowSpan,r=void 0===t?1:t,o=n.column,l=n.columnSpan,i=void 0===l?1:l,u=n.children,s=n.className;if(!e||!o)return null;var d=2*e-1,f=2*r-1,E=2*o-1,v=2*i-1,C="\n    grid-row: ".concat(e," / span ").concat(r,";\n    grid-column: ").concat(o," / span ").concat(i,";\n\n    -ms-grid-row: ").concat(d,";\n    -ms-grid-row-span: ").concat(f,";\n    -ms-grid-column: ").concat(E,";\n    -ms-grid-column-span: ").concat(v,";\n  "),x=m(),y="\n  .".concat(x," {\n  ").concat(C,"\n  }"),G="".concat(x," ").concat(s||p.CELL);return Object(a.useLayoutEffect)((function(){var n=h();return w(n,y),function(){g(n)}}),[]),c.a.createElement("div",{className:G},u)},x=t(170),y=(t(373),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"react-grata"),c.a.createElement("small",null,"Light weight react grid layout component that support IE 11. What you draw is what you get."))}),G=function(){return c.a.createElement("pre",null,"\n    const App = () => {\n      const matrix = [\n        [1, 1, 1],\n        [2, 3, 3],\n        [2, 5, 6],\n        [7, 7, 6],\n        [8, 8, 8],\n      ];\n\n      return (\n        <Grid rowGap=\"12px\" \n              columnGap=\"12px\" \n              matrix={matrix}\n              rows={['2rem', '2rem', 'fit-height', '2rem', '2rem']}>\n          <Cell id={1}>1</Cell>\n          <Cell id={2}>2</Cell>\n          <Cell id={3}>3</Cell>\n          <Cell id={5}>5</Cell>\n          <Cell id={6}>6</Cell>\n          <Cell id={7}>7</Cell>\n          <Cell id={8}>8</Cell>\n        </Grid>\n      );\n    }")},b=function(){return c.a.createElement(v,{className:"grid-inside",rowGap:"12px",columnGap:"12px",matrix:[[1,1,1],[2,3,3],[2,5,6],[7,7,6],[8,8,8]],rows:["2rem","2rem","fit-height","2rem","2rem"]},c.a.createElement(C,{id:1},"1"),c.a.createElement(C,{id:2},"2"),c.a.createElement(C,{id:3},"3"),c.a.createElement(C,{id:5},"5"),c.a.createElement(C,{id:6},"6"),c.a.createElement(C,{id:7},"7"),c.a.createElement(C,{id:8},"8"))},j=function(){var n=Object(x.useMediaQuery)({query:"(max-width: 500px)"})?[["hd"],["cd"],["eg"]]:[["hd","hd"],["cd","eg"]];return c.a.createElement(v,{className:"grid-outside",rowGap:"10px",columnGap:"10px",matrix:n},c.a.createElement(C,{className:"cell",id:"hd"},c.a.createElement(y,null)),c.a.createElement(C,{className:"cell",id:"cd"},c.a.createElement(G,null)),c.a.createElement(C,{className:"cell",id:"eg"},c.a.createElement(b,null)))};t(374);l.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[171,1,2]]]);
//# sourceMappingURL=main.80c71302.chunk.js.map