(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{236:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e,t){return t.map((function(e){return e.beerId})).includes(e)}},237:function(e,t,n){"use strict";var a=n(233);t.a=function(e,t,n){var r=!0,o=e;if(t){var i,c=Object(a.a)(t);try{for(c.s();!(i=c.n()).done;){o=(0,i.value)(e)}}catch(u){c.e(u)}finally{c.f()}}if(0===n.length)return o;var s,l=Object(a.a)(n);try{for(l.s();!(s=l.n()).done;){r=(0,s.value)(o)&&r}}catch(u){l.e(u)}finally{l.f()}return t?[o,r]:r}},238:function(e,t,n){"use strict";var a=n(49),r=n(0),o=n.n(r),i=function(e){return{container:{width:"100%",padding:"10px 0",color:e.textColor,fontFamily:"Lato, ".concat(e.defaultFontStack)},inputItem:{width:"100%",display:"block",padding:"7px 10px",outline:"none",border:"1px solid #ccc",background:e.defaultBgColor,fontFamily:"inherit",borderRadius:"5px",color:e.textColor,transition:"border-color 0.5s ease-in, background 0.5s ease-in","&:focus":{background:e.inputFocusColor}},inputTextarea:{height:"100px",resize:"none"},inputInvalid:{border:"2px solid red"},errorMessage:{color:"red",margin:"2px 0"},labelItem:{fontWeight:"bold",display:"block",textTransform:"capitalize",fontFamily:"inherit",margin:"0 0 8px 0"}}},c=n(9),s=n(13),l=function(e){var t,n,r,i=e.label,c=e.classes,l=e.elementType,u=e.value,m=e.isValid,p=e.isTouched,d=e.errorMsg,f=e.config,g=e.onInput,b=null;switch(l){case"input":b=o.a.createElement("input",Object.assign({},f,{className:Object(s.a)((t={},Object(a.a)(t,c.inputItem,!0),Object(a.a)(t,c.inputInvalid,!m&&p),t)),value:u,onChange:g}));break;case"textarea":b=o.a.createElement("textarea",Object.assign({},f,{className:Object(s.a)((n={},Object(a.a)(n,c.inputItem,!0),Object(a.a)(n,c.inputTextarea,!0),Object(a.a)(n,c.inputInvalid,!m&&p),n)),value:u,onChange:g}));break;default:b=o.a.createElement("input",Object.assign({},f,{className:Object(s.a)((r={},Object(a.a)(r,c.inputItem,!0),Object(a.a)(r,c.inputInvalid,!m&&p),r)),value:u,onChange:g}))}return o.a.createElement("div",{className:c.container},o.a.createElement("label",{className:c.labelItem},i),b,!m&&p&&o.a.createElement("p",{className:c.errorMessage},d))};l.defaultProps={errorMsg:"Invalid input"};var u=Object(c.b)(i)(l);t.a=u},239:function(e,t,n){"use strict";var a=n(88),r=n(2),o=n(3),i=n.n(o),c=n(11),s=n(17),l=n(19),u=n(51),m=n(28),p=function e(){Object(s.a)(this,e)};p.getItemsCount=function(){for(var e=document.querySelector("#main_header"),t=.75*window.innerWidth,n=window.innerHeight-e.offsetHeight,a=Math.floor(t/320),r=0,o=0;o<n;)o+=353,r++;return a*r};var d=p,f=n(234),g=n.n(f),b=function e(){var t=this;Object(s.a)(this,e),Object.defineProperty(this,v,{writable:!0,value:"/api/v1/beers"}),Object.defineProperty(this,h,{writable:!0,value:null}),Object.defineProperty(this,y,{writable:!0,value:{per_page:12,page:1,beer_name:null,abv_gt:null,ibu_gt:null,ebc_gt:null}}),Object.defineProperty(this,O,{writable:!0,value:"http://pluspng.com/img-png/beer-bottle-png-hd-a-beer-bottle-beer-bottle-brown-foam-free-png-and-psd-650.jpg"}),this.resetPages=function(){Object(l.a)(t,y)[y].page=1},this.getFavouritesBeerItems=function(){var e=Object(c.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)("".concat(Object(l.a)(t,v)[v],"/favourites?page=").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Object.defineProperty(this,x,{writable:!0,value:function(e){var n=e.searchQuery,a=e.alcoholVolume,o=e.bitternetsUnits,i=e.ebcColor;Object(l.a)(t,y)[y].per_page=d.getItemsCount();var c=g()(Object(l.a)(t,h)[h],e);Object(l.a)(t,y)[y].page=c?Object(l.a)(t,y)[y].page:1,Object(l.a)(t,y)[y]=Object(r.a)(Object(r.a)({},Object(l.a)(t,y)[y]),{},{beer_name:n,abv_gt:a,ibu_gt:o,ebc_gt:i}),Object(l.a)(t,h)[h]=e}}),Object.defineProperty(this,j,{writable:!0,value:function(){for(var e=[],n=0,r=Object.entries(Object(l.a)(t,y)[y]);n<r.length;n++){var o=Object(a.a)(r[n],2),i=o[0],c=o[1];c&&("beer_name"===i&&(i=i.split(" ").join("_")),e.push("".concat(i,"=").concat(c)))}return"?".concat(e.join("&"))}}),Object.defineProperty(this,E,{writable:!0,value:function(e){return{data:e.map((function(e){return e.image_url||(e.image_url=Object(l.a)(t,O)[O]),e}))}}}),this.fetchBeerSuggestions=function(){var e=Object(c.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)("".concat(Object(l.a)(t,v)[v],"/suggestions?page=").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.fetchBeerSuggestionsByYeast=function(){var e=Object(c.a)(i.a.mark((function e(n,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.toLowerCase().split(" ").join("_"),e.next=3,Object(m.a)("".concat(Object(l.a)(t,v)[v],"/suggestions?page=").concat(n,"&yeast=").concat(r));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.fetchBeerItems=function(){var e=Object(c.a)(i.a.mark((function e(n){var a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(l.a)(t,x)[x](n),a=Object(l.a)(t,j)[j](),e.next=4,Object(m.a)("".concat(Object(l.a)(t,v)[v]).concat(a));case 4:return r=e.sent,o=Object(l.a)(t,E)[E](r),Object(l.a)(t,y)[y].page+=1,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.fetchSingleBeer=function(){var e=Object(c.a)(i.a.mark((function e(n){var a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.id,e.next=3,Object(m.a)("".concat(Object(l.a)(t,v)[v],"/").concat(a));case 3:return r=e.sent,o=Object(l.a)(t,E)[E](r),e.abrupt("return",o.data.shift());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=Object(u.a)("beerRoute"),h=Object(u.a)("prevOptions"),y=Object(u.a)("params"),O=Object(u.a)("defaultImageUrl"),x=Object(u.a)("configureRequest"),j=Object(u.a)("generateUrl"),E=Object(u.a)("replaceEmptyImages"),w=function(){var e=null;return function(){return e||(e=new b)}}();t.a=w},255:function(e,t,n){"use strict";var a=n(278),r=n.n(a);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t?r()(e).format(t):r()(e).fromNow()}},256:function(e,t,n){"use strict";var a=n(42);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(48)).default)(r.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},258:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(18),i=n.n(o),c=n(225),s=function(e){return{modal:{zIndex:"100",position:"fixed",color:e.textColor,top:"22vh",left:"10%",fontFamily:"Open Sans, sans-serif",width:"80%",background:e.bgColor,boxShadow:"0 2px 8px rgba(0, 0, 0, 0.26)",borderRadius:"8px"},modalHeader:{width:"100%",padding:"1rem 0.5rem",backgroundColor:"#3f51b5",color:"white","& h2":{margin:"0.5rem"}},modalContent:{padding:"1rem 0.5rem"},modalFooter:{padding:"1rem 0.5rem",display:"flex",justifyContent:"flex-end","& button":{margin:"0 0 0 20px"}},"@media (min-width: 768px)":{modal:{left:"calc(50% - 20rem)",width:"40rem"}},modalEnter:{transform:"translateY(-10rem)",opacity:0},modalEnterActive:{transform:"translateY(0)",opacity:1,transition:"all 200ms"},modalExit:{transform:"translateY(0)",opacity:1},modalExitActive:{transform:"translateY(-10rem)",opacity:0,transition:"all 200ms"}}},l=n(9),u=n(97),m=function(e){var t=e.headerTitle,n=e.classes,a=e.onSubmitHandler,o=e.footerContent,c=e.children,s=r.a.createElement("div",{className:n.modal},r.a.createElement("header",{className:n.modalHeader},r.a.createElement("h2",null,t)),r.a.createElement("form",{onSubmit:a||function(e){return e.preventDefault()}},r.a.createElement("div",{className:n.modalContent},c),r.a.createElement("footer",{className:n.modalFooter},o)));return i.a.createPortal(s,document.getElementById("modal-hook"))},p=Object(l.b)(s)((function(e){var t=e.classes,n=e.onCancel,o=e.show;return r.a.createElement(a.Fragment,null,o&&r.a.createElement(u.a,{onClick:n}),r.a.createElement(c.a,{in:o,mountOnEnter:!0,unmountOnExit:!0,timeout:250,classNames:{enter:t.modalEnter,enterActive:t.modalEnterActive,exit:t.modalExit,exitActive:t.modalExitActive}},r.a.createElement(m,e)))}));t.a=p},286:function(e,t,n){"use strict";var a=n(1),r=n(58),o=n(7),i=n(50),c=n(0),s=n(18),l=(n(6),n(13)),u=n(222),m=n(27),p=n(25),d=n(33),f=n(374),g=n(397),b=n(57),v=n(265),h=n(78),y=n(95),O=n(94),x=n(235);function j(e){return Math.round(1e5*e)/1e5}var E=!1,w=null;var C=c.forwardRef((function(e,t){var n=e.arrow,i=void 0!==n&&n,m=e.children,p=e.classes,j=e.disableFocusListener,C=void 0!==j&&j,k=e.disableHoverListener,I=void 0!==k&&k,T=e.disableTouchListener,N=void 0!==T&&T,S=e.enterDelay,D=void 0===S?100:S,F=e.enterNextDelay,M=void 0===F?0:F,L=e.enterTouchDelay,R=void 0===L?700:L,B=e.id,H=e.interactive,_=void 0!==H&&H,V=e.leaveDelay,P=void 0===V?0:V,A=e.leaveTouchDelay,z=void 0===A?1500:A,U=e.onClose,W=e.onOpen,Y=e.open,$=e.placement,q=void 0===$?"bottom":$,J=e.PopperComponent,Q=void 0===J?g.a:J,G=e.PopperProps,K=e.title,X=e.TransitionComponent,Z=void 0===X?f.a:X,ee=e.TransitionProps,te=Object(o.a)(e,["arrow","children","classes","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","id","interactive","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"]),ne=Object(x.a)(),ae=c.useState(),re=ae[0],oe=ae[1],ie=c.useState(null),ce=ie[0],se=ie[1],le=c.useRef(!1),ue=c.useRef(),me=c.useRef(),pe=c.useRef(),de=c.useRef(),fe=Object(O.a)({controlled:Y,default:!1,name:"Tooltip",state:"open"}),ge=Object(r.a)(fe,2),be=ge[0],ve=ge[1],he=be,ye=Object(v.a)(B);c.useEffect((function(){return function(){clearTimeout(ue.current),clearTimeout(me.current),clearTimeout(pe.current),clearTimeout(de.current)}}),[]);var Oe=function(e){clearTimeout(w),E=!0,ve(!0),W&&W(e)},xe=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){var n=m.props;"mouseover"===t.type&&n.onMouseOver&&e&&n.onMouseOver(t),le.current&&"touchstart"!==t.type||(re&&re.removeAttribute("title"),clearTimeout(me.current),clearTimeout(pe.current),D||E&&M?(t.persist(),me.current=setTimeout((function(){Oe(t)}),E?M:D)):Oe(t))}},je=Object(y.a)(),Ee=je.isFocusVisible,we=je.onBlurVisible,Ce=je.ref,ke=c.useState(!1),Ie=ke[0],Te=ke[1],Ne=function(){Ie&&(Te(!1),we())},Se=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){re||oe(t.currentTarget),Ee(t)&&(Te(!0),xe()(t));var n=m.props;n.onFocus&&e&&n.onFocus(t)}},De=function(e){clearTimeout(w),w=setTimeout((function(){E=!1}),800+P),ve(!1),U&&U(e),clearTimeout(ue.current),ue.current=setTimeout((function(){le.current=!1}),ne.transitions.duration.shortest)},Fe=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){var n=m.props;"blur"===t.type&&(n.onBlur&&e&&n.onBlur(t),Ne()),"mouseleave"===t.type&&n.onMouseLeave&&t.currentTarget===re&&n.onMouseLeave(t),clearTimeout(me.current),clearTimeout(pe.current),t.persist(),pe.current=setTimeout((function(){De(t)}),P)}},Me=function(e){le.current=!0;var t=m.props;t.onTouchStart&&t.onTouchStart(e)},Le=Object(b.a)(oe,t),Re=Object(b.a)(Ce,Le),Be=c.useCallback((function(e){Object(h.a)(Re,s.findDOMNode(e))}),[Re]),He=Object(b.a)(m.ref,Be);""===K&&(he=!1);var _e=!he&&!I,Ve=Object(a.a)({"aria-describedby":he?ye:null,title:_e&&"string"===typeof K?K:null},te,m.props,{className:Object(l.a)(te.className,m.props.className),onTouchStart:Me,ref:He}),Pe={};N||(Ve.onTouchStart=function(e){Me(e),clearTimeout(pe.current),clearTimeout(ue.current),clearTimeout(de.current),e.persist(),de.current=setTimeout((function(){xe()(e)}),R)},Ve.onTouchEnd=function(e){m.props.onTouchEnd&&m.props.onTouchEnd(e),clearTimeout(de.current),clearTimeout(pe.current),e.persist(),pe.current=setTimeout((function(){De(e)}),z)}),I||(Ve.onMouseOver=xe(),Ve.onMouseLeave=Fe(),_&&(Pe.onMouseOver=xe(!1),Pe.onMouseLeave=Fe(!1))),C||(Ve.onFocus=Se(),Ve.onBlur=Fe(),_&&(Pe.onFocus=Se(!1),Pe.onBlur=Fe(!1)));var Ae=c.useMemo((function(){return Object(u.a)({popperOptions:{modifiers:{arrow:{enabled:Boolean(ce),element:ce}}}},G)}),[ce,G]);return c.createElement(c.Fragment,null,c.cloneElement(m,Ve),c.createElement(Q,Object(a.a)({className:Object(l.a)(p.popper,_&&p.popperInteractive,i&&p.popperArrow),placement:q,anchorEl:re,open:!!re&&he,id:Ve["aria-describedby"],transition:!0},Pe,Ae),(function(e){var t=e.placement,n=e.TransitionProps;return c.createElement(Z,Object(a.a)({timeout:ne.transitions.duration.shorter},n,ee),c.createElement("div",{className:Object(l.a)(p.tooltip,p["tooltipPlacement".concat(Object(d.a)(t.split("-")[0]))],le.current&&p.touch,i&&p.tooltipArrow)},K,i?c.createElement("span",{className:p.arrow,ref:se}):null))})))}));t.a=Object(p.a)((function(e){return{popper:{zIndex:e.zIndex.tooltip,pointerEvents:"none"},popperInteractive:{pointerEvents:"auto"},popperArrow:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"0 100%"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"100% 0"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"100% 100%"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"0 0"}}},tooltip:{backgroundColor:Object(m.c)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(10),lineHeight:"".concat(j(1.4),"em"),maxWidth:300,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},tooltipArrow:{position:"relative",margin:"0"},arrow:{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:Object(m.c)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}},touch:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:"".concat(j(16/14),"em"),fontWeight:e.typography.fontWeightRegular},tooltipPlacementLeft:Object(i.a)({transformOrigin:"right center",margin:"0 24px "},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementRight:Object(i.a)({transformOrigin:"left center",margin:"0 24px"},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementTop:Object(i.a)({transformOrigin:"center bottom",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"}),tooltipPlacementBottom:Object(i.a)({transformOrigin:"center top",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"})}}),{name:"MuiTooltip",flip:!1})(C)},291:function(e,t,n){"use strict";var a=n(42);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(48)).default)(r.default.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");t.default=o},367:function(e,t,n){"use strict";var a=n(42);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(48)).default)(r.default.createElement("path",{d:"M11 8v5l4.25 2.52.77-1.28-3.52-2.09V8H11zm10 2V3l-2.64 2.64C16.74 4.01 14.49 3 12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9h-2c0 3.86-3.14 7-7 7s-7-3.14-7-7 3.14-7 7-7c1.93 0 3.68.79 4.95 2.05L14 10h7z"}),"UpdateOutlined");t.default=o},368:function(e,t,n){"use strict";var a=n(42);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(48)).default)(r.default.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=o},369:function(e,t,n){"use strict";var a=n(42);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(48)).default)(r.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},373:function(e,t,n){"use strict";var a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),r=new Uint8Array(16);function o(){if(!a)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}for(var i=[],c=0;c<256;++c)i.push((c+256).toString(16).substr(1));var s=function(e,t){var n=t||0,a=i;return(a[e[n+0]]+a[e[n+1]]+a[e[n+2]]+a[e[n+3]]+"-"+a[e[n+4]]+a[e[n+5]]+"-"+a[e[n+6]]+a[e[n+7]]+"-"+a[e[n+8]]+a[e[n+9]]+"-"+a[e[n+10]]+a[e[n+11]]+a[e[n+12]]+a[e[n+13]]+a[e[n+14]]+a[e[n+15]]).toLowerCase()};t.a=function(e,t,n){"string"===typeof e&&(t="binary"===e?new Uint8Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){for(var r=n||0,i=0;i<16;++i)t[r+i]=a[i];return t}return s(a)}},399:function(e,t,n){"use strict";n.r(t);var a=n(17),r=n(36),o=n(35),i=n(0),c=n.n(i),s=n(37),l=n(3),u=n.n(l),m=n(11),p=n(239),d=n(63),f=function(e){return{type:d.c,payload:e}},g=function(e){return function(){var t=Object(m.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:d.b}),t.next=4,Object(p.a)().fetchSingleBeer(e);case 4:a=t.sent,n(f(a)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n((r=t.t0,{type:d.a,payload:r}));case 11:case"end":return t.stop()}var r}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},b=n(91),v=n(28),h=function e(){Object(a.a)(this,e),this.getBeerRatingValueOnly=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)("/api/v1/rating/beer/".concat(t,"/value"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getBeerRatingFull=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)("/api/v1/rating/beer/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateBeerRating=function(){var e=Object(m.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)("/api/v1/rating/beer/".concat(t,"?action=").concat(n),"PATCH");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},y=function(){var e=null;return function(){return e||(e=new h)}}(),O=n(41),x=function(e){return function(){var t=Object(m.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y().getBeerRatingFull(e);case 3:a=t.sent,n({type:O.d,payload:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:O.c,payload:t.t0});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(m.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y().getBeerRatingValueOnly(e);case 3:a=t.sent,n({type:O.d,payload:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:O.c,payload:t.t0});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(m.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y().updateBeerRating(e,"inc");case 3:a=t.sent,n({type:O.f,payload:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:O.e,payload:t.t0});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(m.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y().updateBeerRating(e,"dec");case 3:a=t.sent,n({type:O.b,payload:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:O.a,payload:t.t0});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},C=n(16),k=n(9),I=function(e){return{container:{width:"60vw",maxWidth:"1150px",margin:"25px auto",padding:"25px",borderRadius:"40px",color:e.textColor,background:e.defaultBgColor,transition:"background-color 0.5s ease-in"},descriptionContainer:{display:"flex"},beerDescriptionSection:{width:"70%","& h1":{margin:"3px 0",fontFamily:"Helvetica, ".concat(e.defaultFontStack)}},brewingDescriptionSection:{display:"flex",margin:"20px 0",justifyContent:"start"},subTitle:{margin:0,fontFamily:"Helvetica, ".concat(e.defaultFontStack)},tagline:{margin:"0 0 9px 0",color:"#808080",fontFamily:"Lato, ".concat(e.defaultFontStack),fontStyle:"italic"},description:{margin:"10px 0",color:"#696969",fontFamily:"Lato, ".concat(e.defaultFontStack)},image:{width:"30%",height:"300px","& img":{borderRadius:"30%",width:"100%",height:"100%",objectFit:"contain"}},properties:{display:"flex",margin:"20px 0",justifyContent:"start",flexWrap:"wrap"},"@media (max-width: 768px)":{descriptionContainer:{flexDirection:"column",justifyContent:"center",alignItems:"center"},container:{width:"80vw",padding:"15px"},properties:{flexDirection:"column",justifyContent:"center",alignItems:"center","& div:first-child":{margin:"0 0 10px 0"},"& div:first-child li":{padding:"5px"}},brewingDescriptionSection:{flexDirection:"column",justifyContent:"center",alignItems:"center","& div:first-child":{margin:"0 0 10px 0"},"& div:first-child li":{padding:"5px"}},image:{height:"200px",width:"100%"}}}},T=n(264),N=n(90),S=n(89),D=function(e){return{title:{display:"flex",alignItems:"center","& span":{margin:"0 8px 0 0"},"& svg":{color:e.svgIconsColor}},container:{display:"flex",justifyContent:"space-between",alignSelf:"center"},value:{margin:"0 0 0 8vw",borderRadius:"30px",color:"white",backgroundColor:"gray",padding:"6px",fontWeight:"bold"}}},F=n(286),M=n(291),L=n.n(M),R=Object(k.b)(D)((function(e){var t=e.classes,n=e.title,a=e.value,r=e.name;return c.a.createElement("div",{className:t.container},c.a.createElement("span",{className:t.title},c.a.createElement("span",null,r),c.a.createElement(F.a,{title:n},c.a.createElement(L.a,{color:"action"}))),c.a.createElement("span",{className:t.value},a||"\u2014"))})),B=n(49),H=function(e){return{list:{margin:0,padding:0,width:"fit-content",transition:"background-color 0.5s ease-in"},container:{padding:"0 24px 0 0",fontFamily:"Helvetica, ".concat(e.defaultFontStack),color:e.textColor},title:{margin:"0 0 7px 0"},listItem:{padding:"12px",border:"1px solid #ccc",listStyle:"none","&:first-child":{borderRadius:"5px 5px 0 0"},"&:nth-child(n + 1)":{borderBottom:"none"},"&:last-child":{border:"1px solid #ccc",borderRadius:"0 0 5px 5px"},"&:hover":{backgroundColor:e.listItemHoveredColor}},bordersTransparent:{border:"1px solid transparent"},"@media (max-width: 768px)":{container:{padding:0}}}},_=n(373),V=n(13),P=function(e){var t=e.items,n=e.classes,a=e.transparent,r=e.title;return c.a.createElement("div",{className:n.container},c.a.createElement("h3",{className:n.title},r),c.a.createElement("ul",{className:n.list},t.map((function(e){var t;return c.a.createElement("li",{key:Object(_.a)(),className:Object(V.a)((t={},Object(B.a)(t,n.listItem,!0),Object(B.a)(t,n.bordersTransparent,a),t))},e)}))))};P.defaultProps={transparent:!1};var A=Object(k.b)(H)(P),z=function(e,t){var n=e.malt,a=e.hops,r=n.map((function(e){return'"'.concat(e.name,'" - ').concat(e.amount.value," ").concat(e.amount.unit)})),o=a.map((function(e){return'"'.concat(e.name,'" (').concat(e.attribute,") - ").concat(e.amount.value," ").concat(e.amount.unit,", ").concat(e.add)}));return[{title:"Water",data:["".concat(t.value," ").concat(t.unit)]},{title:"Malt",data:r},{title:"Hops",data:o},{title:"Yeast",data:[e.yeast]}]},U=function(e){var t=e.mash_temp,n=e.fermentation,a=e.twist,r=t.map((function(e){return"".concat(e.duration," minutes at ").concat(e.temp.value," ").concat(e.temp.unit)})),o=[n].map((function(e){return"Perform at ".concat(e.temp.value," ").concat(e.temp.unit)}));return a?[{title:"Mash",data:[r]},{title:"Fermentation",data:[o]},{title:"Twist",data:[a]}]:[{title:"Mash",data:[r]},{title:"Fermentation",data:[o]}]},W=function(e){return{item:{display:"block",margin:"3px 0",color:"#808080"},title:{margin:"8px 0",color:e.textColor}}},Y=Object(k.b)(W)((function(e){var t=e.item,n=e.classes;return c.a.createElement(i.Fragment,null,c.a.createElement("h4",{className:n.title},t.title),t.data.map((function(e){return c.a.createElement("span",{className:n.item,key:Object(_.a)()},e)})))})),$=n(236),q=n(14),J=function(){return{type:q.n}},Q=function(e,t){return{type:"socket",types:["",q.k,q.j],promise:function(n){return n.emit("deleteComment",{commentId:e,beerId:t})}}},G=function(e){return{type:"socket",types:[q.h,q.i,q.g],promise:function(t){return t.emit("sendMessage",e)}}},K=function(e){return{type:"socket",types:[q.e,q.f,q.d],promise:function(t){return t.emit("getInitialComments",e)}}},X=function(e){return e.error?{type:q.u,error:e.error}:{type:q.v,payload:e}},Z=function(e){return{type:"socket",types:["",q.m,q.l],promise:function(t){return t.on("getNewComments",e)}}},ee=function(){return{type:"socket",types:[q.p,q.q,q.o],promise:function(e){return e.connect()}}},te=function(){return{type:"socket",types:[q.s,q.t,q.r],promise:function(e){return e.disconnect()}}},ne=n(88),ae=n(2),re=n(244),oe=n(238),ie={commentInput:{height:"200px"},container:{width:"50vw",maxWidth:"960px",margin:"0 auto 30px"},actions:{display:"flex",justifyContent:"flex-end"}},ce=n(237),se=n(25),le=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={formData:{description:{elementType:"textarea",config:{placeholder:"Input you comment here..."},preValidators:[],validators:[function(e){return!Object(re.isEmpty)(e)},function(e){return e.length<900}],isValid:!1,isTouched:!1,errorMsg:"Please provide a comment (max length 900 chars)",value:""}},isFormValid:!1,isSent:!1},e.componentDidUpdate=function(){e.state.isSent&&e.setState({formData:{description:Object(ae.a)(Object(ae.a)({},e.state.formData.description),{},{isValid:!1,value:"",isTouched:!1})},isFormValid:!1,isSent:!1})},e.onSubmitHandler=function(t){if(t.preventDefault(),e.state.isFormValid){var n={id:e.props.id,description:e.state.formData.description.value,creatorId:e.props.userId};e.props.onSubmit(n),e.setState({isSent:!0})}},e.onChangeHandler=function(t){var n=t.target.value,a=e.state.formData.description.preValidators,r=e.state.formData.description.validators,o=Object(ce.a)(n,a,r),i=Object(ne.a)(o,2),c=i[0],s=i[1],l=Object(ae.a)({},e.state.formData),u=l.description=Object(ae.a)(Object(ae.a)({},l.description),{},{isValid:s,value:c||n,isTouched:!0});l.description=u;for(var m=!0,p=0,d=Object.entries(l);p<d.length;p++){m=Object(ne.a)(d[p],2)[1].isValid&&m}e.setState({formData:l,isFormValid:m})},e.render=function(){var t=e.props,n=t.classes,a=t.hasError,r=e.state.formData.description,o=r.elementType,i=r.config,s=r.value,l=r.isValid,u=r.isTouched,m=r.errorMsg,p=r.isPassVisible;return c.a.createElement("div",{className:n.container},c.a.createElement("form",{className:n.signUpForm,onSubmit:e.onSubmitHandler},c.a.createElement(oe.a,{label:"Comment",elementType:o,config:i,value:s,isValid:l,isTouched:u,errorMsg:m,isPassVisible:p,onInput:e.onChangeHandler}),a&&c.a.createElement("div",{className:n.errorMessage},a.message),c.a.createElement("div",{className:n.actions},c.a.createElement(T.a,{variant:"contained",color:"primary",className:n.submitButton,onClick:e.onSubmitHandler},"Send"))))},e}return n}(i.Component),ue=Object(se.a)(ie)(le),me=function(e){return{container:{width:"50vw",maxWidth:"960px",margin:"0 auto",color:e.textColor,fontFamily:e.defaultFontStack,"& h3":{textAlign:"left",margin:"0 0 15px 0"}},updateButtonContainer:{width:"100%",display:"flex",justifyContent:"center",margin:"20px 0"},linkContainer:{textAlign:"center",margin:"0 0 30px 0"},link:{textDecoration:"none",fontFamily:"inherit",color:"#1273eb"}}},pe=n(93),de=function(e){return{commentItem:{display:"flex",margin:"0 0 20px 0",color:e.textColor,transition:"background-color 0.5s ease-in"},stampInfo:{"& span":{display:"block"},"& span:last-child":{color:"#808080",fontSize:"0.8rem",margin:"0 0 7px 0"},"& span:first-child":{fontWeight:"bold",fontFamily:"Roboto, ".concat(e.defaultFontStack)}},imageContainer:{width:"100px",margin:"0 30px 0 0 ","& img":{width:"100%",borderRadius:"50%"}},actions:{display:"flex",justifyContent:"flex-end"},userName:{display:"inline-block",margin:"0 7px 0 0"},comment:{margin:"5px 0"},info:{width:"100%",fontFamily:e.defaultFontStack}}},fe=n(255),ge=n(256),be=n.n(ge),ve=n(45),he=Object(k.b)(de)((function(e){var t=e.id,n=e.classes,a=e.imageUrl,r=e.userName,o=e.isLoggedIn,i=e.comment,s=e.pubDate,l=e.userData,u=e.creatorId,m=e.showModalHandler,p=Object(fe.a)(s);return c.a.createElement(pe.a,{className:n.commentItem},c.a.createElement("div",{className:n.imageContainer},c.a.createElement("img",{src:"".concat(Object(ve.a)(),"/").concat(a),alt:r,title:r})),c.a.createElement("div",{className:n.info},c.a.createElement("div",{className:n.stampInfo},c.a.createElement("span",{className:n.userName},r),c.a.createElement("span",null,p)),c.a.createElement("p",{className:n.comment},i),o&&l.userId===u&&c.a.createElement("div",{className:n.actions},c.a.createElement(T.a,{variant:"contained",color:"secondary",startIcon:c.a.createElement(be.a,null),onClick:function(){return m(t)}},"Delete"))))})),ye=n(367),Oe=n.n(ye),xe=n(258),je=n(20),Ee=Object(k.b)(me)((function(e){var t=e.classes,n=e.hasError,a=e.items,r=e.isLoading,o=e.isLoggedIn,s=e.userData,l=e.hasNewComments,u=e.isModalVisible,m=e.onUpdateClick,p=e.closeModalHandler,d=e.showModalHandler,f=e.deleteCommentHandler;return c.a.createElement("div",{className:t.container},c.a.createElement(xe.a,{show:u,onCancel:p,headerTitle:"Are you sure?",footerContent:c.a.createElement(i.Fragment,null,c.a.createElement(T.a,{onClick:p,variant:"contained",color:"secondary"},"Cancel"),c.a.createElement(T.a,{onClick:f,variant:"contained",color:"primary"},"Delete"))},c.a.createElement("p",null,"Do you want to delete your comment? Please note that it cannot be undone. ")),c.a.createElement("h3",null,"Comments ".concat(a.length,":")),r&&c.a.createElement(N.a,null),l&&c.a.createElement("div",{className:t.updateButtonContainer},c.a.createElement(T.a,{variant:"contained",color:"secondary",startIcon:c.a.createElement(Oe.a,null),onClick:m},"Show new comments")),n&&c.a.createElement(S.a,{text:n.message}),a.length>0&&a.map((function(e){return c.a.createElement(he,{key:e._id,id:e._id,userName:e.creatorId.name,creatorId:e.creatorId._id,imageUrl:e.creatorId.image,comment:e.description,showModalHandler:d,pubDate:e.createdAt,userData:s,isLoggedIn:o})})),!n&&!o&&0===a.length&&c.a.createElement("div",{className:t.linkContainer},c.a.createElement(je.b,{to:"/signin",className:t.link},"Login to be able to comment.")),!n&&o&&0===a.length&&c.a.createElement("div",{className:t.linkContainer},"Be the first one to comment!"))})),we=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={isModalVisible:!1,commentId:null},e.onSelectChangeHandler=function(t){switch(t.target.value){case"FILTER_BY_DATE_DESC":e.props.filterCommentsByDateDescending();break;case"FILTER_BY_DATE_ASC":e.props.filterCommentsByDateAscending();break;case"FILTER_BY_USER":e.props.filterCommentsByUserId(e.props.userData.userId);break;default:e.props.filterCommentsByDateDescending()}},e.componentDidMount=function(){e.props.socketConnect(),e.props.socketSetNewMessageHandler(e.props.getNewComment)},e.componentDidUpdate=function(){e.props.connected&&!e.props.isLoading&&e.props.isInitialLoad&&!e.props.hasError&&e.props.socketLoadInitialComments(e.props.id)},e.deleteCommentHandler=function(){e.props.socketDeleteComment(e.state.commentId,e.props.id),e.setState({isModalVisible:!1})},e.showModalHandler=function(t){e.setState({isModalVisible:!0,commentId:t})},e.closeModalHandler=function(){e.setState({isModalVisible:!1})},e.onClickHandler=function(){e.props.showNewComments()},e.componentWillUnmount=function(){e.props.socketDisconnect()},e.render=function(){var t=e.props,n=t.isLoading,a=t.hasError,r=t.userData,o=t.isLoggedIn,s=t.items,l=t.hasNewComments;return c.a.createElement(i.Fragment,null,o&&c.a.createElement(ue,{hasError:e.props.hasError,onSubmit:e.props.socketSendMessage,userId:r.userId,id:e.props.id}),c.a.createElement(Ee,{isLoading:n,isLoggedIn:o,items:s,isModalVisible:e.state.isModalVisible,userData:r,hasNewComments:l,hasError:a,showModalHandler:e.showModalHandler,closeModalHandler:e.closeModalHandler,deleteCommentHandler:e.deleteCommentHandler,onUpdateClick:e.onClickHandler,onSelectChangeHandler:e.onSelectChangeHandler}))},e}return n}(i.Component),Ce=Object(s.b)((function(e){var t=e.comments,n=t.hasError,a=t.items,r=t.isLoading,o=t.hasNewComments,i=t.connected,c=t.isInitialLoad,s=e.signIn;return{items:a,userData:s.userData,isLoading:r,isLoggedIn:s.isLoggedIn,hasNewComments:o,hasError:n,connected:i,isInitialLoad:c}}),(function(e){return Object(C.b)({socketSendMessage:G,socketConnect:ee,socketSetNewMessageHandler:Z,socketLoadInitialComments:K,socketDeleteComment:Q,socketDisconnect:te,getNewComment:X,showNewComments:J},e)}))(we),ke=function(e){return{container:{display:"flex",alignItems:"center",color:e.textColor,fontFamily:e.defaultFontStack,fontWeight:"bold",fontSize:"1.1rem","& h2":{margin:"5px 0"}},counter:{margin:"0 7px"},error:{color:"red",margin:0}}},Ie=n(224),Te=n(369),Ne=n.n(Te),Se=n(368),De=n.n(Se),Fe=Object(k.b)(ke)((function(e){var t=e.classes,n=e.rating,a=e.ratingError,r=e.isLoggedIn,o=e.decremented,s=e.incremented,l=e.onIncrement,u=e.onDecrement,m=c.a.createElement(Ie.a,{color:"secondary",disabled:o,onClick:u},c.a.createElement(De.a,{fontSize:"large"})),p=c.a.createElement(Ie.a,{color:"primary",disabled:s,onClick:l},c.a.createElement(Ne.a,{fontSize:"large"}));return c.a.createElement(i.Fragment,null,c.a.createElement("div",{className:t.container},c.a.createElement("h2",null,"Rating:"),r&&m,c.a.createElement("div",{className:t.counter},n),r&&p),a&&r&&c.a.createElement("p",{className:t.error},a.message))})),Me=function(e){var t=e.classes,n=e.isLoggedIn,a=e.isFavourite,r=e.onClick,o=e.rating,i=e.ratingError,s=e.decremented,l=e.incremented,u=e.onIncrement,m=e.onDecrement,p=e.item,d=p.id,f=p.name,g=p.tagline,b=p.description,v=p.image_url,h=p.abv,y=p.ibu,O=p.ebc,x=p.food_pairing,j=p.brewers_tips,E=p.ingredients,w=p.method,C=p.boil_volume,k=[c.a.createElement(R,{key:Object(_.a)(),name:"ABV",title:"Alcohol By Volume",value:h}),c.a.createElement(R,{key:Object(_.a)(),name:"IBU",title:"International Bitterness Units",value:y}),c.a.createElement(R,{key:Object(_.a)(),name:"EBC",title:"European Brewery Convention",value:O})],I=z(E,C).map((function(e){return c.a.createElement(Y,{key:Object(_.a)(),item:e})})),N=U(w).map((function(e){return c.a.createElement(Y,{key:Object(_.a)(),item:e})}));return c.a.createElement("div",{className:t.container},c.a.createElement("div",{className:t.descriptionContainer},c.a.createElement("div",{className:t.beerDescriptionSection},c.a.createElement("h1",null,f),c.a.createElement("p",{className:t.tagline},g),n&&c.a.createElement(T.a,{variant:"contained",color:"primary",onClick:function(){return r(d)}},a?"Remove from favourite":"Add to favourite"),c.a.createElement("p",{className:t.description},b)),c.a.createElement("div",{className:t.image},c.a.createElement("img",{src:v,alt:f,title:f}))),c.a.createElement("div",{className:t.properties},c.a.createElement(A,{items:k,title:"Properties"}),c.a.createElement(A,{items:x,title:"Food pairing"})),c.a.createElement("h2",{className:t.subTitle},"Brewing"),c.a.createElement("p",{className:t.description},j),c.a.createElement("div",{className:t.brewingDescriptionSection},c.a.createElement(A,{items:I,title:"Ingredients"}),c.a.createElement(A,{items:N,title:"Method"})),c.a.createElement(Fe,{rating:o,ratingError:i,decremented:s,incremented:l,onIncrement:u,onDecrement:m,isLoggedIn:n}))},Le=Object(k.b)(I)((function(e){var t=e.classes,n=e.isLoading,a=e.isLoggedIn,r=e.hasError,o=e.item,s=e.favourites,l=e.onClick,u=e.rating,m=e.ratingError,p=e.decremented,d=e.incremented,f=e.onIncrement,g=e.onDecrement;return c.a.createElement(i.Fragment,null,n&&c.a.createElement(N.a,null),r&&c.a.createElement(S.a,{text:"An error was occured."}),o&&c.a.createElement(Me,{classes:t,item:o,isLoggedIn:a,isFavourite:Object($.a)(o.id,s),onClick:l,rating:u,ratingError:m,decremented:p,incremented:d,onIncrement:f,onDecrement:g}),o&&c.a.createElement(Ce,{id:o.id}))})),Re=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).fetchItem=function(t){e.props.fetchSingleBeer(t)},e.toggleFavourites=function(t){e.props.favourites.map((function(e){return e.beerId})).includes(t)?e.props.removeBeerFromFavourites(t):e.props.addBeerToFavourites(t)},e.componentDidMount=function(){var t=e.props.match.params;e.fetchItem({id:t.beerId}),e.props.isLoggedIn?e.props.fetchRatingFull(t.beerId):e.props.fetchRatingValueOnly(t.beerId)},e.onIncrementRatingHandler=function(){e.props.incrementRating(e.props.match.params.beerId)},e.onDecrementRatingHandler=function(){e.props.decrementRating(e.props.match.params.beerId)},e.render=function(){var t=e.props,n=t.isLoading,a=t.hasError,r=t.item,o=t.isLoggedIn,i=t.favourites,s=t.rating,l=t.ratingError,u=t.decremented,m=t.incremented;return c.a.createElement(Le,{isLoading:n,hasError:a,item:r,favourites:i,onClick:e.toggleFavourites,isLoggedIn:o,rating:s,ratingError:l,decremented:u,incremented:m,onIncrement:e.onIncrementRatingHandler,onDecrement:e.onDecrementRatingHandler})},e}return n}(i.Component);t.default=Object(s.b)((function(e){var t=e.beerDetails,n=t.isLoading,a=t.hasError,r=t.item,o=e.signIn,i=o.isLoggedIn,c=o.userData,s=e.profile.favourites,l=e.rating;return{isLoading:n,favourites:s,isLoggedIn:i,userData:c,hasError:a,item:r,rating:l.rating,ratingError:l.hasError,decremented:l.decremented,incremented:l.incremented}}),(function(e){return Object(C.b)({fetchSingleBeer:g,addBeerToFavourites:b.a,removeBeerFromFavourites:b.f,fetchRatingValueOnly:j,fetchRatingFull:x,incrementRating:E,decrementRating:w},e)}))(Re)}}]);
//# sourceMappingURL=7.f518f07f.chunk.js.map