(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/eHF":function(e,t,i){"use strict";function n(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}function a(e,t){var i=t.distance,n=t.left,a=t.right,o=t.up,r=t.down,s=t.top,c=t.bottom,d=t.big,u=t.mirror,p=t.opposite,h=(i?i.toString():0)+((n?1:0)|(a?2:0)|(s||r?4:0)|(c||o?8:0)|(u?16:0)|(p?32:0)|(e?64:0)|(d?128:0));if(f.hasOwnProperty(h))return f[h];var v=n||a||o||r||s||c,m=void 0,b=void 0;if(v){if(!u!=!(e&&p)){var y=[a,n,c,s,r,o];n=y[0],a=y[1],s=y[2],c=y[3],o=y[4],r=y[5]}var w=i||(d?"2000px":"100%");m=n?"-"+w:a?w:"0",b=r||s?"-"+w:o||c?w:"0"}return f[h]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),f[h]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,o=(e.out,e.forever),r=e.timeout,s=e.duration,c=void 0===s?l.defaults.duration:s,u=e.delay,f=void 0===u?l.defaults.delay:u,p=e.count,h=void 0===p?l.defaults.count:p,v=n(e,["children","out","forever","timeout","duration","delay","count"]),m={make:a,duration:void 0===r?c:r,delay:f,forever:o,count:h,style:{animationFillMode:"both"},reverse:v.left};return t?(0,d.default)(v,m,m,i):m}Object.defineProperty(t,"__esModule",{value:!0});var r,s=i("17x9"),l=i("ar19"),c=i("eH+L"),d=(r=c)&&r.__esModule?r:{default:r},u={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},f={};o.propTypes=u,t.default=o,e.exports=t.default},"28nh":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,a=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done)&&(i.push(r.value),!t||i.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i("q1tI"),c=(n=l)&&n.__esModule?n:{default:n},d=i("17x9"),u=i("ar19"),f=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),p={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:f.isRequired,outEffect:(0,d.oneOfType)([f,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},h={transitionGroup:d.object},v=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,u.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?r({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,a=i.forever,o=i.count,r=i.delay,s=i.duration;if(!a){this.animationEndTimeout=window.setTimeout((function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))}),r+(s+(t?s:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),a=this.isOn?this.getDimensionValue():0,o=void 0,r=void 0;if(t.collapseOnly)o=i.duration/3,r=i.delay;else{var s=n>>2,l=s>>1;o=s,r=i.delay+(this.isOn?0:n-s-l),e.style.animationDuration=n-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:a,transition:"height "+o+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,a=void 0;e.collapseOnly?a={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),a={hasAppeared:!0,hasExited:!1,collapse:void 0,style:r({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(a,e,i):a),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):i||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=n.duration,s=n.reverse,l=i.length,d=2*o;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),o=d/2);var f=s?l:0;return i.map((function(e){return"object"===(void 0===e?"undefined":a(e))&&e?c.default.cloneElement(e,{style:r({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(s?f--:f++,0,l,o,d))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===a(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,n=t.props,a=n.style,o=n.className,s=n.children,l=this.props.disabled?o:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(i=this.cascade(s),d=r({},a,{opacity:1})):d=this.props.disabled?a:r({},a,this.state.style);var f=r({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:d},this.props.refProp,this.saveRef)),p=c.default.cloneElement(t,f,e?i||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:r({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),a=Math.min(i,window.innerHeight)*(u.globalHide?e.fraction:0);return n>a-window.innerHeight&&n<i-a}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);v.propTypes=p,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=h,v.displayName="RevealBase",t.default=v,e.exports=t.default},L12J:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i("q1tI"),a=i.n(n),o=i("7ljp"),r=i("y7oD"),s=i("VGQ/"),l=r.a;function c(e){var t=e.children;return a.a.createElement("div",null,a.a.createElement(r.a,null),a.a.createElement(o.MDXProvider,{components:l},t),a.a.createElement(s.a,null))}},RXBc:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return f}));var n=i("q1tI"),a=i.n(n),o=i("L12J"),r=i("7vrA"),s=i("3Z9Z"),l=i("JI6e"),c=i("/eHF"),d=i.n(c),u=i("twbV");function f(){var e=Object(n.useState)(!1),t=e[0],i=e[1],c=Object(n.useState)(!1),f=c[0],p=c[1];return Object(n.useEffect)((function(){window.innerWidth>769?(i(!0),p(!1)):(p(!0),i(!1))}),[]),a.a.createElement(o.a,null,a.a.createElement(r.a,{fluid:!0,className:"light-grey"},a.a.createElement("div",{className:"hero"},a.a.createElement(s.a,null,a.a.createElement(l.a,null,a.a.createElement(d.a,{left:t,bottom:f,duration:1e3,delay:500,distance:"30px"},a.a.createElement("h1",null," The name is Gina "),a.a.createElement("h3",null," Forever Student, Marketer, and more ")))))),a.a.createElement(u.a,null))}},ar19:function(e,t,i){"use strict";function n(e){try{return h.insertRule(e,h.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function a(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",a,!0),n("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",a,!0),window.document.removeEventListener("visibilitychange",a))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,i,n,a){var o=Math.log(n),r=(Math.log(a)-o)/(i-t);return Math.exp(o+r*(e-t))},t.animation=function(e){if(!h)return"";var t="@keyframes "+(v+f)+"{"+e+"}",i=p[e];return i?""+v+i:(h.insertRule(t,h.cssRules.length),p[e]=f,""+v+f++)},t.hideAll=a,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var o=t.namespace="react-reveal",r=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=r=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),f=1,p={},h=!1,v=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=r=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),r&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=r=!1),r&&window.setTimeout(c,1500),s||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(h=m.sheet,window.addEventListener("scroll",a,!0),window.addEventListener("orientationchange",a,!0),window.document.addEventListener("visibilitychange",a))}},"eH+L":function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),o.default.Children.count(n)<2?o.default.createElement(r.default,a({},e,{inEffect:t,outEffect:i,children:n})):(n=o.default.Children.map(n,(function(n){return o.default.createElement(r.default,a({},e,{inEffect:t,outEffect:i,children:n}))})),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,n):o.default.createElement("span",null,n))};var o=n(i("q1tI")),r=n(i("28nh"));e.exports=t.default},twbV:function(e,t,i){"use strict";var n=i("dI71"),a=i("q1tI"),o=i.n(a),r=i("Wbzz"),s=i("7vrA"),l=i("3Z9Z"),c=i("JI6e"),d=i("wx14"),u=i("zLVn"),f=i("TSYQ"),p=i.n(f),h=i("vUet"),v=o.a.forwardRef((function(e,t){var i=e.bsPrefix,n=e.size,a=e.toggle,r=e.vertical,s=e.className,l=e.as,c=void 0===l?"div":l,f=Object(u.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),v=Object(h.a)(i,"btn-group"),m=v;return r&&(m=v+"-vertical"),o.a.createElement(c,Object(d.a)({},f,{ref:t,className:p()(s,m,n&&v+"-"+n,a&&v+"-toggle")}))}));v.displayName="ButtonGroup",v.defaultProps={vertical:!1,toggle:!1,role:"group"};var m=v,b=i("dbZe"),y=o.a.forwardRef((function(e,t){var i=e.bsPrefix,n=e.variant,a=e.size,r=e.active,s=e.className,l=e.block,c=e.type,f=e.as,v=Object(u.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),m=Object(h.a)(i,"btn"),y=p()(s,m,r&&"active",m+"-"+n,l&&m+"-block",a&&m+"-"+a);if(v.href)return o.a.createElement(b.a,Object(d.a)({},v,{as:f,ref:t,className:p()(y,v.disabled&&"disabled")}));t&&(v.ref=t),c?v.type=c:f||(v.type="button");var w=f||"button";return o.a.createElement(w,Object(d.a)({},v,{className:y}))}));y.displayName="Button",y.defaultProps={variant:"primary",active:!1,disabled:!1};var w=y,E=i("YdCC"),g=function(e){return o.a.forwardRef((function(t,i){return o.a.createElement("div",Object(d.a)({},t,{ref:i,className:p()(t.className,e)}))}))},O=i("Wzyw"),R=o.a.forwardRef((function(e,t){var i=e.bsPrefix,n=e.className,a=e.variant,r=e.as,s=void 0===r?"img":r,l=Object(u.a)(e,["bsPrefix","className","variant","as"]),c=Object(h.a)(i,"card-img");return o.a.createElement(s,Object(d.a)({ref:t,className:p()(a?c+"-"+a:c,n)},l))}));R.displayName="CardImg",R.defaultProps={variant:null};var k=R,j=g("h5"),x=g("h6"),T=Object(E.a)("card-body"),S=Object(E.a)("card-title",{Component:j}),C=Object(E.a)("card-subtitle",{Component:x}),N=Object(E.a)("card-link",{Component:"a"}),P=Object(E.a)("card-text",{Component:"p"}),H=Object(E.a)("card-header"),M=Object(E.a)("card-footer"),L=Object(E.a)("card-img-overlay"),I=o.a.forwardRef((function(e,t){var i=e.bsPrefix,n=e.className,r=e.bg,s=e.text,l=e.border,c=e.body,f=e.children,v=e.as,m=void 0===v?"div":v,b=Object(u.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(h.a)(i,"card"),w=Object(a.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return o.a.createElement(O.a.Provider,{value:w},o.a.createElement(m,Object(d.a)({ref:t},b,{className:p()(n,y,r&&"bg-"+r,s&&"text-"+s,l&&"border-"+l)}),c?o.a.createElement(T,null,f):f))}));I.displayName="Card",I.defaultProps={body:!1},I.Img=k,I.Title=S,I.Subtitle=C,I.Body=T,I.Link=N,I.Text=P,I.Header=H,I.Footer=M,I.ImgOverlay=L;var _=I,A=function(e){function t(t){var i;return(i=e.call(this,t)||this).handleClick=function(e){return function(){i.setState((function(){return{filter:e}}))}},i.state={filter:"all"},i}return Object(n.a)(t,e),t.prototype.render=function(){var e=this,t=this.state.filter;return o.a.createElement(r.b,{query:"2371567328",render:function(i){return o.a.createElement(s.a,{fluid:!0},o.a.createElement(s.a,{fluid:!0},o.a.createElement("div",{className:"pad"},o.a.createElement(l.a,{className:"mb-4 mt-4"},o.a.createElement(c.a,null,o.a.createElement("h1",null," Projects ")),o.a.createElement(c.a,{md:"auto"},o.a.createElement(m,{"aria-label":"Basic example"},o.a.createElement(w,{variant:"secondary",onClick:e.handleClick("all")},"All"),o.a.createElement(w,{variant:"secondary",onClick:e.handleClick("art")},"Art"),o.a.createElement(w,{variant:"secondary",onClick:e.handleClick("code")},"Code")))))),o.a.createElement(s.a,{fluid:!0},o.a.createElement("div",{className:"pad"},o.a.createElement(l.a,{xs:1,md:2},i.allMdx.edges.filter((function(e){return e.node.frontmatter.tag.includes(t)})).map((function(e){var t=e.node;return o.a.createElement(c.a,{className:"mb-2"},o.a.createElement(_,null,o.a.createElement(_.Img,{variant:"top",src:t.frontmatter.featuredImage}),o.a.createElement(_.Body,null,o.a.createElement(_.Title,null,t.frontmatter.title),o.a.createElement(_.Text,null,t.frontmatter.summary),o.a.createElement(w,{variant:"primary"},o.a.createElement(r.a,{to:t.fields.slug,style:{color:"#f6f5f5"}},"Read More")))))}))))))}})},t}(o.a.Component);t.a=A}}]);
//# sourceMappingURL=component---src-pages-index-js-6a27bf706a7f81426984.js.map