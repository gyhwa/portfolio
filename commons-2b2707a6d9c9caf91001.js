(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2W6z":function(e,t,n){"use strict";var a=function(){};e.exports=a},"7j6X":function(e,t,n){"use strict";var a=n("dZvc");function r(e,t){return function(e){var t=Object(a.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var i=/([A-Z])/g;var o=/^ms-/;function c(e){return function(e){return e.replace(i,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",a="";if("string"==typeof t)return e.style.getPropertyValue(c(t))||r(e).getPropertyValue(c(t));Object.keys(t).forEach((function(r){var i=t[r];i||0===i?!function(e){return!(!e||!s.test(e))}(r)?n+=c(r)+": "+i+";":a+=r+"("+i+") ":e.style.removeProperty(c(r))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n}},GEtZ:function(e,t,n){"use strict";var a=n("SJxq"),r=!1,i=!1;try{var o={get passive(){return r=!0},get once(){return i=r=!0}};a.a&&(window.addEventListener("test",o,o),window.removeEventListener("test",o,!0))}catch(l){}var c=function(e,t,n,a){if(a&&"boolean"!=typeof a&&!i){var o=a.once,c=a.capture,s=n;!i&&o&&(s=n.__once||function e(a){this.removeEventListener(t,e,c),n.call(this,a)},n.__once=s),e.addEventListener(t,s,r?a:c)}e.addEventListener(t,n,a)};var s=function(e,t,n,a){var r=a&&"boolean"!=typeof a?a.capture:a;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)};t.a=function(e,t,n,a){return c(e,t,n,a),function(){s(e,t,n,a)}}},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("wx14"),r=n("zLVn"),i=n("q1tI");n("QLaP");function o(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function s(e,t){return Object.keys(t).reduce((function(n,s){var l,u=n,d=u[o(s)],f=u[s],p=Object(r.a)(u,[o(s),s].map(c)),v=t[s],m=function(e,t,n){var a=Object(i.useRef)(void 0!==e),r=Object(i.useState)(t),o=r[0],c=r[1],s=void 0!==e,l=a.current;return a.current=s,!s&&l&&o!==t&&c(t),[s?e:o,Object(i.useCallback)((function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];n&&n.apply(void 0,[e].concat(a)),c(e)}),[n])]}(f,d,e[v]),b=m[0],g=m[1];return Object(a.a)({},p,((l={})[s]=b,l[v]=g,l))}),e)}n("dI71"),n("94VI")},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function a(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];var r=null;return t.forEach((function(e){if(null==r){var t=e.apply(void 0,n);null!=t&&(r=t)}})),r}return(0,i.default)(a)};var a,r=n("pvIh"),i=(a=r)&&a.__esModule?a:{default:a};e.exports=t.default},Qg85:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}}),null)}},SJxq:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},"VGQ/":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),r=n.n(a),i=(n("Wbzz"),n("jooN")),o=n("7vrA"),c=n("3Z9Z"),s=n("JI6e");function l(){var e=i.b.socials,t=(new Date).getFullYear();return r.a.createElement(o.a,{fluid:!0,className:"footer"},r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement("p",null," ",i.b.title," ©",t)),r.a.createElement(s.a,{md:"auto"},r.a.createElement("ul",{className:"list-unstyled list-inline text-center"},e.map((function(e){return r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:e.link},e.name))}))))))}},Wzyw:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a).a.createContext(null);r.displayName="CardContext",t.a=r},YGJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI");function r(){return Object(a.useReducer)((function(e){return!e}),!1)[1]}},YdCC:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("wx14"),r=n("zLVn"),i=n("TSYQ"),o=n.n(i),c=/-(.)/g;var s=n("q1tI"),l=n.n(s),u=n("vUet"),d=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function f(e,t){var n=void 0===t?{}:t,i=n.displayName,c=void 0===i?d(e):i,s=n.Component,f=n.defaultProps,p=l.a.forwardRef((function(t,n){var i=t.className,c=t.bsPrefix,d=t.as,f=void 0===d?s||"div":d,p=Object(r.a)(t,["className","bsPrefix","as"]),v=Object(u.a)(c,e);return l.a.createElement(f,Object(a.a)({ref:n,className:o()(i,v)},p))}));return p.defaultProps=f,p.displayName=c,p}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI");var r=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=r(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},Zeqi:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return a(e.querySelectorAll(t))}},dZvc:function(e,t,n){"use strict";function a(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return a}))},dbZe:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),i=n("q1tI"),o=n.n(i),c=n("Qg85");function s(e){return!e||"#"===e.trim()}var l=o.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"a":n,l=e.disabled,u=e.onKeyDown,d=Object(r.a)(e,["as","disabled","onKeyDown"]),f=function(e){var t=d.href,n=d.onClick;(l||s(t))&&e.preventDefault(),l?e.stopPropagation():n&&n(e)};return s(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),l&&(d.tabIndex=-1,d["aria-disabled"]=!0),o.a.createElement(i,Object(a.a)({ref:t},d,{onClick:f,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),f(e))}),u)}))}));l.displayName="SafeAnchor",t.a=l},jooN:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a={title:"Gina Hwang",links:[{link:"/cv",name:"CV"},{link:"/blog",name:"Blog"}]},r={title:"Gina Hwang",socials:[{link:"https://github.com/gyhwa",name:"github"},{link:"https://www.instagram.com/g_y_hwa/",name:"instagram"},{link:"https://www.linkedin.com/in/ginayhwang/",name:"linkedin"}]},i={skills:[{name:"Google Ads",rating:"⭐⭐⭐⭐⭐"},{name:"Facebook Ads",rating:"⭐⭐⭐⭐"},{name:"Reddit Ads",rating:"⭐⭐⭐⭐"},{name:"SQL",rating:"⭐⭐⭐⭐"},{name:"Adobe Photoshop",rating:"⭐⭐⭐⭐"},{name:"Adobe After Effects",rating:"⭐⭐⭐"},{name:"Sketch",rating:"⭐⭐⭐"},{name:"HTML/CSS",rating:"⭐⭐"},{name:"JavaScript",rating:"⭐"}],jobs:[{name:"Humble Bundle",positions:[{name:"Marketing Growth Manager",time:"Jul 2019 – Present",responsibilities:"Worked as the paid marketing arm of the marketing team, leading strategy for and managing the Facebook, Google Ads, Reddit Ads, and more. Created reports using MODE in standardsql with BigQuery. Automated catalog creation using SQL."}]},{name:"Growth Pilots",positions:[{name:"Senior Paid Search Account Manager",time:"Jul 2019 – Oct 2019",responsibilities:"Collaborated closely with 2 to 3 Paid Search analysts and the Paid Social team for full stack marketing strategies. Continued responsibilities from the Paid Search Account Manager role."},{name:"Paid Search Account Manager",time:"Jun 2018 – Jul 2019",responsibilities:"Lead client communication via Slack, email, and weekly calls. Actively managed all Paid Search accounts for 3 to 4 clients. Analyzed performance of the accounts with R Language and Microsoft Excel."}]},{name:"BroadcastDotGG",positions:[{name:"Social Media Manager",time:"October 2017 – May 2018",responsibilities:"Created assets using Adobe Photoshop, Illustrator & After Effects. Doubled @BroadcastDotGG followers  from 1,207 to 2,494."}]},{name:"HotChalk, Inc.",positions:[{name:"Digital Media Strategist",time:"May 2017 – May 2018",responsibilities:"Managed Facebook, Google Ads, Bing Ads, and LinkedIn accounts for various university clients. Analyzed performance of accounts with Tableau, R Language and Microsoft Excel."}]},{name:"LQ Digital",positions:[{name:"Digital Media Strategist",time:"Aug 2016 – May 2017",responsibilities:"Managed $15k to $500k budgets per month using Google Ads, Bing Ads, Yahoo Gemini, and Facebook Ads. Clients were mainly B2C with both desktop and mobile app products. Ran copy and landing page A/B tests to increase a food subscription conversions by 414% YoY."},{name:"Digital Media Analyst",time:"Jun 2015 – Aug 2016",responsibilities:"Provided analytic support for the account strategist. Managed Google Ads, Bing Ads, and Yahoo Gemini campaigns."}]}]}},lcWJ:function(e,t,n){"use strict";var a=n("q1tI"),r=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(a.useMemo)((function(){return function(e,t){var n=r(e),a=r(t);return function(e){n&&n(e),a&&a(e)}}(e,t)}),[e,t])}},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,a,r,i,o){var c=r||"<<anonymous>>",s=o||a;if(null==n[a])return t?new Error("Required "+i+" `"+s+"` was not specified in `"+c+"`."):null;for(var l=arguments.length,u=Array(l>6?l-6:0),d=6;d<l;d++)u[d-6]=arguments[d];return e.apply(void 0,[n,a,c,i,s].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},y7oD:function(e,t,n){"use strict";n.d(t,"a",(function(){return me}));var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),o=n("jooN"),c=n("wx14"),s=n("zLVn"),l=n("TSYQ"),u=n.n(l),d=n("JCAc"),f=n("YdCC"),p=n("vUet"),v=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.as,o=Object(s.a)(e,["bsPrefix","className","as"]);n=Object(p.a)(n,"navbar-brand");var l=i||(o.href?"a":"span");return r.a.createElement(l,Object(c.a)({},o,{ref:t,className:u()(a,n)}))}));v.displayName="NavbarBrand";var m=v,b=n("7j6X"),g=n("GEtZ");function h(e,t,n){void 0===n&&(n=5);var a=!1,r=setTimeout((function(){a||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=Object(g.a)(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(r),i()}}function x(e,t,n,a){var r,i,o;null==n&&(r=e,i=Object(b.a)(r,"transitionDuration")||"",o=-1===i.indexOf("ms")?1e3:1,n=parseFloat(i)*o||0);var c=h(e,n,a),s=Object(g.a)(e,"transitionend",t);return function(){c(),s()}}var E=n("dI71"),y=n("i8i4"),O=n.n(y),j=!1,w=r.a.createContext(null),C=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(r="exited",a.appearStatus="entering"):r="entered":r=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",a.state={status:r},a.nextCallback=null,a}Object(E.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!=typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,r=this.props.nodeRef?[a]:[O.a.findDOMNode(this),a],i=r[0],o=r[1],c=this.getTimeouts(),s=a?c.appear:c.enter;!e&&!n||j?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,o),t.onTransitionEnd(s,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:O.a.findDOMNode(this);t&&!j?(this.props.onExit(a),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:O.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],o=r[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(s.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(w.Provider,{value:null},"function"==typeof n?n(e,a):r.a.cloneElement(r.a.Children.only(n),a))},t}(r.a.Component);function k(){}C.contextType=w,C.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:k,onEntering:k,onEntered:k,onExit:k,onExiting:k,onExited:k},C.UNMOUNTED="unmounted",C.EXITED="exited",C.ENTERING="entering",C.ENTERED="entered",C.EXITING="exiting";var N,S=C,P=n("Qg85");var A={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function M(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],a=A[e];return n+parseInt(Object(b.a)(t,a[0]),10)+parseInt(Object(b.a)(t,a[1]),10)}var I=((N={}).exited="collapse",N.exiting="collapsing",N.entering="collapsing",N.entered="collapse show",N),R={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:M},T=r.a.forwardRef((function(e,t){var n=e.onEnter,i=e.onEntering,o=e.onEntered,l=e.onExit,d=e.onExiting,f=e.className,p=e.children,v=e.dimension,m=void 0===v?"height":v,b=e.getDimensionValue,g=void 0===b?M:b,h=Object(s.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),E="function"==typeof m?m():m,y=Object(a.useMemo)((function(){return Object(P.a)((function(e){e.style[E]="0"}),n)}),[E,n]),O=Object(a.useMemo)((function(){return Object(P.a)((function(e){var t="scroll"+E[0].toUpperCase()+E.slice(1);e.style[E]=e[t]+"px"}),i)}),[E,i]),j=Object(a.useMemo)((function(){return Object(P.a)((function(e){e.style[E]=null}),o)}),[E,o]),w=Object(a.useMemo)((function(){return Object(P.a)((function(e){e.style[E]=g(E,e)+"px",e.offsetHeight}),l)}),[l,g,E]),C=Object(a.useMemo)((function(){return Object(P.a)((function(e){e.style[E]=null}),d)}),[E,d]);return r.a.createElement(S,Object(c.a)({ref:t,addEndListener:x},h,{"aria-expanded":h.role?h.in:null,onEnter:y,onEntering:O,onEntered:j,onExit:w,onExiting:C}),(function(e,t){return r.a.cloneElement(p,Object(c.a)({},t,{className:u()(f,p.props.className,I[e],"width"===E&&"width")}))}))}));T.defaultProps=R;var D=T,L=r.a.createContext(null);L.displayName="NavbarContext";var K=L,G=r.a.forwardRef((function(e,t){var n=e.children,a=e.bsPrefix,i=Object(s.a)(e,["children","bsPrefix"]);return a=Object(p.a)(a,"navbar-collapse"),r.a.createElement(K.Consumer,null,(function(e){return r.a.createElement(D,Object(c.a)({in:!(!e||!e.expanded)},i),r.a.createElement("div",{ref:t,className:a},n))}))}));G.displayName="NavbarCollapse";var q=G,J=n("ZCiN"),_=r.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,o=e.children,l=e.label,d=e.as,f=void 0===d?"button":d,v=e.onClick,m=Object(s.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(p.a)(n,"navbar-toggler");var b=Object(a.useContext)(K)||{},g=b.onToggle,h=b.expanded,x=Object(J.a)((function(e){v&&v(e),g&&g()}));return"button"===f&&(m.type="button"),r.a.createElement(f,Object(c.a)({},m,{ref:t,onClick:x,"aria-label":l,className:u()(i,n,!h&&"collapsed")}),o||r.a.createElement("span",{className:n+"-icon"}))}));_.displayName="NavbarToggle",_.defaultProps={label:"Toggle navigation"};var B=_,z=r.a.createContext(null),Z=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},V=z,Y=Object(f.a)("navbar-text",{Component:"span"}),U=r.a.forwardRef((function(e,t){var n=Object(d.a)(e,{expanded:"onToggle"}),i=n.bsPrefix,o=n.expand,l=n.variant,f=n.bg,v=n.fixed,m=n.sticky,b=n.className,g=n.children,h=n.as,x=void 0===h?"nav":h,E=n.expanded,y=n.onToggle,O=n.onSelect,j=n.collapseOnSelect,w=Object(s.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),C=Object(p.a)(i,"navbar"),k=Object(a.useCallback)((function(){O&&O.apply(void 0,arguments),j&&E&&y&&y(!1)}),[O,j,E,y]);void 0===w.role&&"nav"!==x&&(w.role="navigation");var N=C+"-expand";"string"==typeof o&&(N=N+"-"+o);var S=Object(a.useMemo)((function(){return{onToggle:function(){return y&&y(!E)},bsPrefix:C,expanded:!!E}}),[C,E,y]);return r.a.createElement(K.Provider,{value:S},r.a.createElement(V.Provider,{value:k},r.a.createElement(x,Object(c.a)({ref:t},w,{className:u()(b,C,o&&N,l&&C+"-"+l,f&&"bg-"+f,m&&"sticky-"+m,v&&"fixed-"+v)}),g)))}));U.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},U.displayName="Navbar",U.Brand=m,U.Toggle=B,U.Collapse=q,U.Text=Y;var Q=U,F=(n("K9S6"),n("Wzyw")),W=n("Zeqi"),H=n("YGJp"),X=n("lcWJ"),$=r.a.createContext(null);$.displayName="NavContext";var ee=$,te=r.a.createContext(null),ne=function(){},ae=r.a.forwardRef((function(e,t){var n,i,o=e.as,l=void 0===o?"ul":o,u=e.onSelect,d=e.activeKey,f=e.role,p=e.onKeyDown,v=Object(s.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),m=Object(H.a)(),b=Object(a.useRef)(!1),g=Object(a.useContext)(V),h=Object(a.useContext)(te);h&&(f=f||"tablist",d=h.activeKey,n=h.getControlledId,i=h.getControllerId);var x=Object(a.useRef)(null),E=function(e){var t=x.current;if(!t)return null;var n=Object(W.a)(t,"[data-rb-event-key]:not(.disabled)"),a=t.querySelector(".active");if(!a)return null;var r=n.indexOf(a);if(-1===r)return null;var i=r+e;return i>=n.length&&(i=0),i<0&&(i=n.length-1),n[i]},y=function(e,t){null!=e&&(u&&u(e,t),g&&g(e,t))};Object(a.useEffect)((function(){if(x.current&&b.current){var e=x.current.querySelector("[data-rb-event-key].active");e&&e.focus()}b.current=!1}));var O=Object(X.a)(t,x);return r.a.createElement(V.Provider,{value:y},r.a.createElement(ee.Provider,{value:{role:f,activeKey:Z(d),getControlledId:n||ne,getControllerId:i||ne}},r.a.createElement(l,Object(c.a)({},v,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=E(-1);break;case"ArrowRight":case"ArrowDown":t=E(1);break;default:return}t&&(e.preventDefault(),y(t.dataset.rbEventKey,e),b.current=!0,m())},ref:O,role:f}))))})),re=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.children,o=e.as,l=void 0===o?"div":o,d=Object(s.a)(e,["bsPrefix","className","children","as"]);return n=Object(p.a)(n,"nav-item"),r.a.createElement(l,Object(c.a)({},d,{ref:t,className:u()(a,n)}),i)}));re.displayName="NavItem";var ie=re,oe=n("dbZe"),ce=(n("2W6z"),r.a.forwardRef((function(e,t){var n=e.active,i=e.className,o=e.eventKey,l=e.onSelect,d=e.onClick,f=e.as,p=Object(s.a)(e,["active","className","eventKey","onSelect","onClick","as"]),v=Z(o,p.href),m=Object(a.useContext)(V),b=Object(a.useContext)(ee),g=n;if(b){p.role||"tablist"!==b.role||(p.role="tab");var h=b.getControllerId(v),x=b.getControlledId(v);p["data-rb-event-key"]=v,p.id=h||p.id,p["aria-controls"]=x||p["aria-controls"],g=null==n&&null!=v?b.activeKey===v:n}"tab"===p.role&&(p.tabIndex=g?p.tabIndex:-1,p["aria-selected"]=g);var E=Object(J.a)((function(e){d&&d(e),null!=v&&(l&&l(v,e),m&&m(v,e))}));return r.a.createElement(f,Object(c.a)({},p,{ref:t,onClick:E,className:u()(i,g&&"active")}))})));ce.defaultProps={disabled:!1};var se=ce,le={disabled:!1,as:oe.a},ue=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.disabled,i=e.className,o=e.href,l=e.eventKey,d=e.onSelect,f=e.as,v=Object(s.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(p.a)(n,"nav-link"),r.a.createElement(se,Object(c.a)({},v,{href:o,ref:t,eventKey:l,as:f,disabled:a,onSelect:d,className:u()(i,n,a&&"disabled")}))}));ue.displayName="NavLink",ue.defaultProps=le;var de=ue,fe=r.a.forwardRef((function(e,t){var n,i,o,l=Object(d.a)(e,{activeKey:"onSelect"}),f=l.as,v=void 0===f?"div":f,m=l.bsPrefix,b=l.variant,g=l.fill,h=l.justify,x=l.navbar,E=l.className,y=l.children,O=l.activeKey,j=Object(s.a)(l,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),w=Object(p.a)(m,"nav"),C=!1,k=Object(a.useContext)(K),N=Object(a.useContext)(F.a);return k?(i=k.bsPrefix,C=null==x||x):N&&(o=N.cardHeaderBsPrefix),r.a.createElement(ae,Object(c.a)({as:v,ref:t,activeKey:O,className:u()(E,(n={},n[w]=!C,n[i+"-nav"]=C,n[o+"-"+b]=!!o,n[w+"-"+b]=!!b,n[w+"-fill"]=g,n[w+"-justified"]=h,n))},j),y)}));fe.displayName="Nav",fe.defaultProps={justify:!1,fill:!1},fe.Item=ie,fe.Link=de;var pe=fe,ve=n("JI6e");function me(){var e=o.c.links;return r.a.createElement(Q,{className:"header navbar-dark",expand:"lg"},r.a.createElement(Q.Brand,null," ",r.a.createElement(i.a,{to:"/"}," ",o.c.title," ")),r.a.createElement(Q.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(Q.Collapse,{id:"basic-navbar-nav"},r.a.createElement(pe,{className:"mr-auto"},e.map((function(e){return r.a.createElement(ve.a,null,r.a.createElement(i.a,{to:e.link},e.name))})))))}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(a){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-2b2707a6d9c9caf91001.js.map