(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[541],{5602:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},4284:function(e,t,n){"use strict";var i,r;e.exports=(null==(i=n.g.process)?void 0:i.env)&&"object"===typeof(null==(r=n.g.process)?void 0:r.env)?n.g.process:n(6118)},1528:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,i){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8337:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(5602).Z,r=n(9854).Z,o=n(3957).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,u=void 0!==a&&a,m=e.priority,v=void 0!==m&&m,b=e.loading,x=e.lazyRoot,C=void 0===x?null:x,A=e.lazyBoundary,k=e.className,E=e.quality,L=e.width,O=e.height,T=e.style,I=e.objectFit,F=e.objectPosition,M=e.onLoadingComplete,P=e.placeholder,N=void 0===P?"empty":P,q=e.blurDataURL,B=l(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),Z=c.useContext(p.ImageConfigContext),U=c.useMemo((function(){var e=y||Z||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return s({},e,{allSizes:t,deviceSizes:n})}),[Z]),D=B,H=n?"responsive":"intrinsic";"layout"in D&&(D.layout&&(H=D.layout),delete D.layout);var W=R;if("loader"in D){if(D.loader){var V=D.loader;W=function(e){e.config;var t=l(e,["config"]);return V(t)}}delete D.loader}var G="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var K=S(t)?t.default:t;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(q=q||K.blurDataURL,G=K.src,(!H||"fill"!==H)&&(O=O||K.height,L=L||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}var J=!v&&("lazy"===b||"undefined"===typeof b);((t="string"===typeof t?t:G).startsWith("data:")||t.startsWith("blob:"))&&(u=!0,J=!1);g.has(t)&&(J=!1);U.unoptimized&&(u=!0);var Q,X=r(c.useState(!1),2),Y=X[0],$=X[1],ee=r(h.useIntersection({rootRef:C,rootMargin:A||"200px",disabled:!J}),3),te=ee[0],ne=ee[1],ie=ee[2],re=!J||ne,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae=!1,ue={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:I,objectPosition:F},le=z(L),ce=z(O),de=z(E);0;var fe=Object.assign({},T,ue),he="blur"!==N||Y?{}:{backgroundSize:I||"cover",backgroundPosition:F||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(q,'")')};if("fill"===H)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof le&&"undefined"!==typeof ce){var pe=ce/le,me=isNaN(pe)?"100%":"".concat(100*pe,"%");"responsive"===H?(oe.display="block",oe.position="relative",ae=!0,se.paddingTop=me):"intrinsic"===H?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",ae=!0,se.maxWidth="100%",Q="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(le,"%27%20height=%27").concat(ce,"%27/%3e")):"fixed"===H&&(oe.display="inline-block",oe.position="relative",oe.width=le,oe.height=ce)}else 0;var ve={src:_,srcSet:void 0,sizes:void 0};re&&(ve=w({config:U,src:t,unoptimized:u,layout:H,width:le,quality:de,sizes:n,loader:W}));var ye=t;0;var ge,_e="imagesrcset",be="imagesizes";_e="imageSrcSet",be="imageSizes";var Se=(i(ge={},_e,ve.srcSet),i(ge,be,ve.sizes),ge),we=c.default.useLayoutEffect,ze=c.useRef(M),Re=c.useRef(t);c.useEffect((function(){ze.current=M}),[M]),we((function(){Re.current!==t&&(ie(),Re.current=t)}),[ie,t]);var xe=s({isLazy:J,imgAttributes:ve,heightInt:ce,widthInt:le,qualityInt:de,layout:H,className:k,imgStyle:fe,blurStyle:he,loading:b,config:U,unoptimized:u,placeholder:N,loader:W,srcString:ye,onLoadingCompleteRef:ze,setBlurComplete:$,setIntersection:te,isVisible:re,noscriptSizes:n},D);return c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{style:oe},ae?c.default.createElement("span",{style:se},Q?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Q}):null):null,c.default.createElement(j,Object.assign({},xe))),v?c.default.createElement(d.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},Se))):null)};var s=n(6516).Z,a=n(2619).Z,u=n(6808).Z,l=n(518).Z,c=u(n(7378)),d=a(n(555)),f=n(7893),h=n(1842),p=n(300),m=(n(4915),n(4810));function v(e){return"/"===e[0]?e.slice(1):e}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},g=new Set,_=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var b=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t.path).concat(v(n))),s=o.searchParams;return s.set("auto",s.getAll("auto").join(",")||"format"),s.set("fit",s.get("fit")||"max"),s.set("w",s.get("w")||i.toString()),r&&s.set("q",r.toString()),o.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(v(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(v(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function w(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,s=e.width,a=e.quality,u=e.sizes,l=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var c=function(e,t,n,i){var r=e.deviceSizes,s=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var a,u=/(^|\s)(1?\d?\d)vw/g,l=[];a=u.exec(i);a)l.push(parseInt(a[2]));if(l.length){var c,d=.01*(c=Math).min.apply(c,o(l));return{widths:s.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:s,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return s.find((function(t){return t>=e}))||s[s.length-1]})))),kind:"x"}}(t,s,r,u),d=c.widths,f=c.kind,h=d.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:d.map((function(e,i){return"".concat(l({config:t,src:n,quality:a,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:l({config:t,src:n,quality:a,width:d[h]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function R(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=b.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function x(e,t,n,i,r,o){e&&e.src!==_&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(g.add(t),"blur"===i&&o(!0),null==r?void 0:r.current)){var n=e.naturalWidth,s=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:s})}})))}var j=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,o=e.className,a=e.imgStyle,u=e.blurStyle,d=e.isLazy,f=e.placeholder,h=e.loading,p=e.srcString,m=e.config,v=e.unoptimized,y=e.loader,g=e.onLoadingCompleteRef,_=e.setBlurComplete,b=e.setIntersection,S=e.onLoad,z=e.onError,R=(e.isVisible,e.noscriptSizes),j=l(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return h=d?"lazy":h,c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},j,t,{decoding:"async","data-nimg":r,className:o,style:s({},a,u),ref:c.useCallback((function(e){b(e),(null==e?void 0:e.complete)&&x(e,p,0,f,g,_)}),[b,p,r,f,g,_]),onLoad:function(e){x(e.currentTarget,p,0,f,g,_),S&&S(e)},onError:function(e){"blur"===f&&_(!0),z&&z(e)}})),(d||"blur"===f)&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},j,w({config:m,src:p,unoptimized:v,layout:r,width:n,quality:i,sizes:R,loader:y}),{decoding:"async","data-nimg":r,style:a,className:o,loading:h}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1453:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9854).Z;n(2271).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2619).Z,o=n(518).Z,s=r(n(7378)),a=n(194),u=n(4087),l=n(9756),c=n(7868),d=n(1842),f=n(1528),h=n(1470),p="undefined"!==typeof s.default.useTransition,m={};function v(e,t,n,i){if(e&&a.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,i)).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;m[t+"%"+n+(r?"%"+r:"")]=!0}}var y=s.default.forwardRef((function(e,t){var n,r=e.href,y=e.as,g=e.children,_=e.prefetch,b=e.passHref,S=e.replace,w=e.shallow,z=e.scroll,R=e.locale,x=e.onClick,j=e.onMouseEnter,C=e.onTouchStart,A=e.legacyBehavior,k=void 0===A?!0!==Boolean(!1):A,E=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,!k||"string"!==typeof n&&"number"!==typeof n||(n=s.default.createElement("a",null,n));var L=!1!==_,O=i(p?s.default.useTransition():[],2)[1],T=s.default.useContext(l.RouterContext),I=s.default.useContext(c.AppRouterContext);I&&(T=I);var F,M=s.default.useMemo((function(){var e=i(a.resolveHref(T,r,!0),2),t=e[0],n=e[1];return{href:t,as:y?a.resolveHref(T,y):n||t}}),[T,r,y]),P=M.href,N=M.as,q=s.default.useRef(P),B=s.default.useRef(N);k&&(F=s.default.Children.only(n));var Z=k?F&&"object"===typeof F&&F.ref:t,U=i(d.useIntersection({rootMargin:"200px"}),3),D=U[0],H=U[1],W=U[2],V=s.default.useCallback((function(e){B.current===N&&q.current===P||(W(),B.current=N,q.current=P),D(e),Z&&("function"===typeof Z?Z(e):"object"===typeof Z&&(Z.current=e))}),[N,Z,P,W,D]);s.default.useEffect((function(){var e=H&&L&&a.isLocalURL(P),t="undefined"!==typeof R?R:T&&T.locale,n=m[P+"%"+N+(t?"%"+t:"")];e&&!n&&v(T,P,N,{locale:t})}),[N,P,H,R,L,T]);var G={ref:V,onClick:function(e){k||"function"!==typeof x||x(e),k&&F.props&&"function"===typeof F.props.onClick&&F.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,o,s,u,l,c){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[r?"replace":"push"](n,i,{shallow:o,locale:u,scroll:s}):t[r?"replace":"push"](n,{forceOptimisticNavigation:!c})};l?l(d):d()}}(e,T,P,N,S,w,z,R,I?O:void 0,L)},onMouseEnter:function(e){k||"function"!==typeof j||j(e),k&&F.props&&"function"===typeof F.props.onMouseEnter&&F.props.onMouseEnter(e),!L&&I||a.isLocalURL(P)&&v(T,P,N,{priority:!0})},onTouchStart:function(e){k||"function"!==typeof C||C(e),k&&F.props&&"function"===typeof F.props.onTouchStart&&F.props.onTouchStart(e),!L&&I||a.isLocalURL(P)&&v(T,P,N,{priority:!0})}};if(!k||b||"a"===F.type&&!("href"in F.props)){var K="undefined"!==typeof R?R:T&&T.locale,J=T&&T.isLocaleDomain&&f.getDomainLocale(N,K,T.locales,T.domainLocales);G.href=J||h.addBasePath(u.addLocale(N,K,T&&T.defaultLocale))}return k?s.default.cloneElement(F,G):s.default.createElement("a",Object.assign({},E,G),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1842:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9854).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!s,c=i(r.useState(!1),2),d=c[0],f=c[1],h=i(r.useState(null),2),p=h[0],m=h[1];r.useEffect((function(){if(s){if(l||d)return;if(p&&p.tagName){var e=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=a.get(i)))return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:r},u.push(n),a.set(n,t),t}(n),r=i.id,o=i.observer,s=i.elements;return s.set(e,t),o.observe(e),function(){if(s.delete(e),o.unobserve(e),0===s.size){o.disconnect(),a.delete(r);var t=u.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&u.splice(t,1)}}}(p,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){var i=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(i)}}}),[p,l,n,t,d]);var v=r.useCallback((function(){f(!1)}),[]);return[m,d,v]};var r=n(7378),o=n(2878),s="function"===typeof IntersectionObserver,a=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7868:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var i=(0,n(2619).Z)(n(7378)),r=i.default.createContext(null);t.AppRouterContext=r;var o=i.default.createContext(null);t.LayoutRouterContext=o;var s=i.default.createContext(null);t.GlobalLayoutRouterContext=s},6118:function(e){!function(){var t={229:function(e){var t,n,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(i){try{return t.call(null,e,0)}catch(i){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:r}catch(e){t=r}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var a,u=[],l=!1,c=-1;function d(){l&&a&&(l=!1,a.length?u=a.concat(u):c=-1,u.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=u.length;t;){for(a=u,u=[];++c<t;)a&&a[c].run();c=-1,t=u.length}a=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||s(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}},s=!0;try{t[e](o,o.exports,i),s=!1}finally{s&&delete n[e]}return o.exports}i.ab="//";var r=i(229);e.exports=r}()},8579:function(e,t,n){e.exports=n(8337)},9894:function(e,t,n){e.exports=n(1453)},4983:function(e,t,n){var i=n(4284),r=n(7378);function o(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=o(r);function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var u="undefined"!==typeof i&&i.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,r=t.optimizeForSpeed,o=void 0===r?u:r;d(l(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",d("boolean"===typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var s="undefined"!==typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=s?s.getAttribute("content"):null}var t,n,i,r=e.prototype;return r.setOptimizeForSpeed=function(e){d("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),d(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},r.isOptimizeForSpeed=function(){return this._optimizeForSpeed},r.inject=function(){var e=this;if(d(!this._injected,"sheet already injected"),this._injected=!0,"undefined"!==typeof window&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(u||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},r.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},r.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},r.insertRule=function(e,t){if(d(l(e),"`insertRule` accepts only strings"),"undefined"===typeof window)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(r){return u||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},r.replaceRule=function(e,t){if(this._optimizeForSpeed||"undefined"===typeof window){var n="undefined"!==typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){u||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];d(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},r.deleteRule=function(e){if("undefined"!==typeof window)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];d(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},r.flush=function(){this._injected=!1,this._rulesCount=0,"undefined"!==typeof window?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},r.cssRules=function(){var e=this;return"undefined"===typeof window?this._serverSheet.cssRules:this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[])},r.makeStyleTag=function(e,t,n){t&&d(l(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return n?r.insertBefore(i,n):r.appendChild(i),i},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&a(t.prototype,n),i&&a(t,i),e}();function d(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}var f=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},h={};function p(e,t){if(!t)return"jsx-"+e;var n=String(t),i=e+n;return h[i]||(h[i]="jsx-"+f(e+"-"+n)),h[i]}function m(e,t){"undefined"===typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var n=e+t;return h[n]||(h[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),h[n]}var v=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,i=void 0===n?null:n,r=t.optimizeForSpeed,o=void 0!==r&&r;this._sheet=i||new c({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),i&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"undefined"===typeof window||this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),i=n.styleId,r=n.rules;if(i in this._instancesCounts)this._instancesCounts[i]+=1;else{var o=r.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[i]=o,this._instancesCounts[i]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var n=e[0],i=e[1];return s.default.createElement("style",{id:"__"+n,key:"__"+n,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,i=e.id;if(n){var r=p(i,n);return{styleId:r,rules:Array.isArray(t)?t.map((function(e){return m(r,e)})):[m(r,t)]}}return{styleId:p(i),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();var y=r.createContext(null);function g(){return new v}function _(){return r.useContext(y)}var b=s.default.useInsertionEffect||s.default.useLayoutEffect,S="undefined"!==typeof window?g():void 0;function w(e){var t=S||_();return t?"undefined"===typeof window?(t.add(e),null):(b((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}w.dynamic=function(e){return e.map((function(e){return p(e[0],e[1])})).join(" ")},t.style=w},9892:function(e,t,n){e.exports=n(4983).style},3842:function(e,t,n){"use strict";function i(e,t,n,i,r,o,s){try{var a=e[o](s),u=a.value}catch(l){return void n(l)}a.done?t(u):Promise.resolve(u).then(i,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function a(e){i(s,r,o,a,u,"next",e)}function u(e){i(s,r,o,a,u,"throw",e)}a(void 0)}))}}n.d(t,{Z:function(){return r}})}}]);