(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},L6Je:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r),o=n("7ljp"),c=n("y7oD"),u=n("VGQ/"),l=c.a;function i(e){var t=e.children;return a.a.createElement("div",null,a.a.createElement(c.a,null),a.a.createElement(o.MDXProvider,{components:l},t),a.a.createElement(u.a,null))}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},X8hv:function(e,t,n){var r=n("sXyB"),a=n("RIqP"),o=n("lSNA"),c=n("8OQS");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=n("q1tI"),f=n("7ljp"),p=f.useMDXComponents,s=f.mdx,m=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,u=c(e,["scope","components","children"]),f=p(n),y=m(t),b=i.useMemo((function(){if(!o)return null;var e=l({React:i,mdx:s},y),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+o])).apply(void 0,[{}].concat(a(n)))}),[o,t]);return i.createElement(b,l({components:f},u))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},c851:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s})),n.d(t,"pageQuery",(function(){return m}));var r=n("q1tI"),a=n.n(r),o=(n("7ljp"),n("A2+M"),n("Wbzz")),c=n("L6Je"),u=n("7vrA"),l=n("3Z9Z"),i=n("JI6e"),f=function(e){var t=e.num,n=(e.current,1===t?"":t);return a.a.createElement(o.a,{to:"/blogt/"+n},t)},p=function(e){var t=e.numPages,n=e.currentPage;if(0===t)return"";var r=Array.from(Array(t).keys()).map((function(e,t){return t+1})),c=n-1<=1?"":n-1,u=n===t?n:n+1;return a.a.createElement("div",null,a.a.createElement(o.a,{to:"/blogt/"+c},"<"),r.map((function(e){return a.a.createElement(f,{key:e,num:e,current:e===n})})),a.a.createElement(o.a,{to:"/blogt/"+u},">"))};o.a;function s(e){var t=e.data,n=e.pageContext,r=n.numPages,f=n.currentPage;return a.a.createElement(c.a,null,a.a.createElement(u.a,{fluid:!0},a.a.createElement("div",{className:"pad"},a.a.createElement(l.a,null,a.a.createElement(i.a,null,a.a.createElement("h1",null," Blog "))))),a.a.createElement(u.a,{fluid:!0},a.a.createElement("div",{className:"pad"},a.a.createElement(l.a,{xs:1,md:1},t.allMdx.edges.map((function(e,t){return a.a.createElement(i.a,{className:"mb-2",ey:t},a.a.createElement("h2",null,a.a.createElement(o.a,{to:e.node.fields.slug},e.node.frontmatter.title)),a.a.createElement("p",null,e.node.frontmatter.summary," "))})),a.a.createElement(p,{numPages:r,currentPage:f})))))}var m="67779663"},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},sXyB:function(e,t,n){var r=n("SksO"),a=n("b48C");function o(t,n,c){return a()?e.exports=o=Reflect.construct:e.exports=o=function(e,t,n){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return n&&r(o,n.prototype),o},o.apply(null,arguments)}e.exports=o}}]);
//# sourceMappingURL=component---src-templates-blog-js-ad046c9daba3f6d50b1f.js.map