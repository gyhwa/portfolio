(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{L12J:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var r=t("q1tI"),n=t.n(r),l=t("7ljp"),c=t("y7oD"),i=t("VGQ/"),s=c.a;function o(e){var a=e.children;return n.a.createElement("div",null,n.a.createElement(c.a,null),n.a.createElement(l.MDXProvider,{components:s},a),n.a.createElement(i.a,null))}},twbV:function(e,a,t){"use strict";t.d(a,"a",(function(){return q}));var r=t("q1tI"),n=t.n(r),l=t("Wbzz"),c=t("7vrA"),i=t("3Z9Z"),s=t("JI6e"),o=t("wx14"),m=t("zLVn"),d=t("TSYQ"),u=t.n(d),f=t("vUet"),b=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.size,l=e.toggle,c=e.vertical,i=e.className,s=e.as,d=void 0===s?"div":s,b=Object(m.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),v=Object(f.a)(t,"btn-group"),E=v;return c&&(E=v+"-vertical"),n.a.createElement(d,Object(o.a)({},b,{ref:a,className:u()(i,E,r&&v+"-"+r,l&&v+"-toggle")}))}));b.displayName="ButtonGroup",b.defaultProps={vertical:!1,toggle:!1,role:"group"};var v=b,E=t("dbZe"),p=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,l=e.size,c=e.active,i=e.className,s=e.block,d=e.type,b=e.as,v=Object(m.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),p=Object(f.a)(t,"btn"),g=u()(i,p,c&&"active",p+"-"+r,s&&p+"-block",l&&p+"-"+l);if(v.href)return n.a.createElement(E.a,Object(o.a)({},v,{as:b,ref:a,className:u()(g,v.disabled&&"disabled")}));a&&(v.ref=a),d?v.type=d:b||(v.type="button");var y=b||"button";return n.a.createElement(y,Object(o.a)({},v,{className:g}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};var g=p,y=t("YdCC"),j=function(e){return n.a.forwardRef((function(a,t){return n.a.createElement("div",Object(o.a)({},a,{ref:t,className:u()(a.className,e)}))}))},N=t("Wzyw"),O=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.variant,c=e.as,i=void 0===c?"img":c,s=Object(m.a)(e,["bsPrefix","className","variant","as"]),d=Object(f.a)(t,"card-img");return n.a.createElement(i,Object(o.a)({ref:a,className:u()(l?d+"-"+l:d,r)},s))}));O.displayName="CardImg",O.defaultProps={variant:null};var x=O,h=j("h5"),w=j("h6"),P=Object(y.a)("card-body"),C=Object(y.a)("card-title",{Component:h}),k=Object(y.a)("card-subtitle",{Component:w}),I=Object(y.a)("card-link",{Component:"a"}),z=Object(y.a)("card-text",{Component:"p"}),B=Object(y.a)("card-header"),J=Object(y.a)("card-footer"),R=Object(y.a)("card-img-overlay"),T=n.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.bg,i=e.text,s=e.border,d=e.body,b=e.children,v=e.as,E=void 0===v?"div":v,p=Object(m.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(f.a)(t,"card"),y=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return n.a.createElement(N.a.Provider,{value:y},n.a.createElement(E,Object(o.a)({ref:a},p,{className:u()(l,g,c&&"bg-"+c,i&&"text-"+i,s&&"border-"+s)}),d?n.a.createElement(P,null,b):b))}));T.displayName="Card",T.defaultProps={body:!1},T.Img=x,T.Title=C,T.Subtitle=k,T.Body=P,T.Link=I,T.Text=z,T.Header=B,T.Footer=J,T.ImgOverlay=R;var Z=T;function q(){var e=Object(r.useState)("all"),a=e[0],t=e[1];function o(e){t(e.target.value)}return n.a.createElement(l.b,{query:"2371567328",render:function(e){return n.a.createElement(c.a,{fluid:!0},n.a.createElement(c.a,{fluid:!0},n.a.createElement("div",{className:"pad"},n.a.createElement(i.a,{className:"mb-4 mt-4"},n.a.createElement(s.a,null,n.a.createElement("h1",null," Projects ")),n.a.createElement(s.a,{md:"auto"},n.a.createElement(v,{"aria-label":"Basic example"},n.a.createElement(g,{variant:"secondary",value:"all",onClick:o},"All"),n.a.createElement(g,{variant:"secondary",value:"art",onClick:o},"Art"),n.a.createElement(g,{variant:"secondary",value:"code",onClick:o},"Code")))))),n.a.createElement(c.a,{fluid:!0},n.a.createElement("div",{className:"pad"},n.a.createElement(i.a,{xs:1,md:2},e.allMdx.edges.filter((function(e){return e.node.frontmatter.tag.includes(a)})).map((function(e){var a=e.node;return n.a.createElement(s.a,{className:"mb-2"},n.a.createElement(Z,null,n.a.createElement(Z.Img,{variant:"top",src:a.frontmatter.featuredImage}),n.a.createElement(Z.Body,null,n.a.createElement(Z.Title,null,a.frontmatter.title),n.a.createElement(Z.Text,null,a.frontmatter.summary),n.a.createElement(g,{variant:"primary"},n.a.createElement(l.a,{to:a.fields.slug,style:{color:"#f6f5f5"}},"Read More")))))}))))))}})}},w2l6:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return m}));var r=t("q1tI"),n=t.n(r),l=t("L12J"),c=t("7vrA"),i=t("3Z9Z"),s=t("JI6e"),o=t("twbV");function m(){return n.a.createElement(l.a,null,n.a.createElement(c.a,{fluid:!0,className:"light-grey"},n.a.createElement("div",{className:"hero"},n.a.createElement(i.a,null,n.a.createElement(s.a,null,n.a.createElement("h1",{className:"large"},"404 "),n.a.createElement("h3",null,"Check these out instead:"))))),n.a.createElement(o.a,null))}}}]);
//# sourceMappingURL=component---src-pages-404-js-aa5d749aedd52dd7974e.js.map