(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{L12J:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var r=t("q1tI"),n=t.n(r),l=t("7ljp"),c=t("y7oD"),i=t("VGQ/"),s=c.a;function o(e){var a=e.children;return n.a.createElement("div",null,n.a.createElement(c.a,null),n.a.createElement(l.MDXProvider,{components:s},a),n.a.createElement(i.a,null))}},twbV:function(e,a,t){"use strict";var r=t("dI71"),n=t("q1tI"),l=t.n(n),c=t("Wbzz"),i=t("7vrA"),s=t("3Z9Z"),o=t("JI6e"),m=t("wx14"),d=t("zLVn"),u=t("TSYQ"),f=t.n(u),b=t("vUet"),v=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.size,n=e.toggle,c=e.vertical,i=e.className,s=e.as,o=void 0===s?"div":s,u=Object(d.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),v=Object(b.a)(t,"btn-group"),E=v;return c&&(E=v+"-vertical"),l.a.createElement(o,Object(m.a)({},u,{ref:a,className:f()(i,E,r&&v+"-"+r,n&&v+"-toggle")}))}));v.displayName="ButtonGroup",v.defaultProps={vertical:!1,toggle:!1,role:"group"};var E=v,p=t("dbZe"),y=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,n=e.size,c=e.active,i=e.className,s=e.block,o=e.type,u=e.as,v=Object(d.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),E=Object(b.a)(t,"btn"),y=f()(i,E,c&&"active",E+"-"+r,s&&E+"-block",n&&E+"-"+n);if(v.href)return l.a.createElement(p.a,Object(m.a)({},v,{as:u,ref:a,className:f()(y,v.disabled&&"disabled")}));a&&(v.ref=a),o?v.type=o:u||(v.type="button");var g=u||"button";return l.a.createElement(g,Object(m.a)({},v,{className:y}))}));y.displayName="Button",y.defaultProps={variant:"primary",active:!1,disabled:!1};var g=y,j=t("YdCC"),N=function(e){return l.a.forwardRef((function(a,t){return l.a.createElement("div",Object(m.a)({},a,{ref:t,className:f()(a.className,e)}))}))},O=t("Wzyw"),h=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.variant,c=e.as,i=void 0===c?"img":c,s=Object(d.a)(e,["bsPrefix","className","variant","as"]),o=Object(b.a)(t,"card-img");return l.a.createElement(i,Object(m.a)({ref:a,className:f()(n?o+"-"+n:o,r)},s))}));h.displayName="CardImg",h.defaultProps={variant:null};var x=h,C=N("h5"),w=N("h6"),P=Object(j.a)("card-body"),k=Object(j.a)("card-title",{Component:C}),I=Object(j.a)("card-subtitle",{Component:w}),z=Object(j.a)("card-link",{Component:"a"}),B=Object(j.a)("card-text",{Component:"p"}),J=Object(j.a)("card-header"),R=Object(j.a)("card-footer"),T=Object(j.a)("card-img-overlay"),Z=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,c=e.bg,i=e.text,s=e.border,o=e.body,u=e.children,v=e.as,E=void 0===v?"div":v,p=Object(d.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(b.a)(t,"card"),g=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return l.a.createElement(O.a.Provider,{value:g},l.a.createElement(E,Object(m.a)({ref:a},p,{className:f()(r,y,c&&"bg-"+c,i&&"text-"+i,s&&"border-"+s)}),o?l.a.createElement(P,null,u):u))}));Z.displayName="Card",Z.defaultProps={body:!1},Z.Img=x,Z.Title=k,Z.Subtitle=I,Z.Body=P,Z.Link=z,Z.Text=B,Z.Header=J,Z.Footer=R,Z.ImgOverlay=T;var q=Z,A=(t("dmsj"),function(e){function a(a){var t;return(t=e.call(this,a)||this).handleClick=function(e){return function(){t.setState((function(){return{filter:e}}))}},t.state={filter:"all"},t}return Object(r.a)(a,e),a.prototype.render=function(){var e=this,a=this.state.filter;return l.a.createElement(c.b,{query:"2371567328",render:function(t){return l.a.createElement(i.a,{fluid:!0},l.a.createElement(i.a,{fluid:!0},l.a.createElement("div",{className:"pad"},l.a.createElement(s.a,{className:"mb-4 mt-4"},l.a.createElement(o.a,null,l.a.createElement("h1",null," Projects ")),l.a.createElement(o.a,{md:"auto"},l.a.createElement(E,{"aria-label":"Basic example"},l.a.createElement(g,{variant:"secondary",onClick:e.handleClick("all")},"All"),l.a.createElement(g,{variant:"secondary",onClick:e.handleClick("art")},"Art"),l.a.createElement(g,{variant:"secondary",onClick:e.handleClick("code")},"Code")))))),l.a.createElement(i.a,{fluid:!0},l.a.createElement("div",{className:"pad"},l.a.createElement(s.a,{xs:1,md:2},t.allMdx.edges.filter((function(e){return e.node.frontmatter.tag.includes(a)})).map((function(e){var a=e.node;return l.a.createElement(o.a,{className:"mb-2"},l.a.createElement(q,null,l.a.createElement(q.Img,{variant:"top",src:a.frontmatter.featuredImage}),l.a.createElement(q.Body,null,l.a.createElement(q.Title,null,a.frontmatter.title),l.a.createElement(q.Text,null,a.frontmatter.summary),l.a.createElement(g,{variant:"primary"},l.a.createElement(c.a,{to:a.fields.slug,style:{color:"#f6f5f5"}},"Read More")))))}))))))}})},a}(l.a.Component));a.a=A},w2l6:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return m}));var r=t("q1tI"),n=t.n(r),l=t("L12J"),c=t("7vrA"),i=t("3Z9Z"),s=t("JI6e"),o=t("twbV");function m(){return n.a.createElement(l.a,null,n.a.createElement(c.a,{fluid:!0,className:"light-grey"},n.a.createElement("div",{className:"hero"},n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement("h1",{className:"large"},"404 "),n.a.createElement("h3",null,"Check these out instead:"))))),n.a.createElement(o.a,null))}}}]);
//# sourceMappingURL=component---src-pages-404-js-f61a91964e41e8f0ab54.js.map