(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[15],{228:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(10),l=function(e){return{card:{margin:0,boxShadow:"0 2px 8px rgba(0, 0, 0, 0.26)",borderRadius:"6px",padding:"1rem",overflow:"hidden",background:e.defaultBgColor,border:"1px solid transparent",transition:"background-color 0.5s ease-in"}}},c=t(14),o=function(e){var a=e.classes,t=e.className,n=e.children;return r.a.createElement("div",{className:Object(c.a)(a.card,t)},n)};o.defaultProps={className:{}};var s=Object(i.b)(l)(o);a.a=s},231:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(228),l=t(10),c=function(e){return{header:{fontFamily:"Helvetica, ".concat(e.defaultFontStack),margin:"10px 0"},container:{width:"40vw",maxWidth:"768px",margin:"20px auto",textAlign:"center","& a":{fontFamily:"Helvetica, ".concat(e.defaultFontStack),color:"#696969"}}}},o=function(e){var a=e.text,t=e.children,n=e.classes;return r.a.createElement(i.a,{className:n.container},r.a.createElement("h2",{className:n.header},a),t)};o.defaultProps={text:"Nothing to show here."};var s=Object(l.b)(c)(o);a.a=s},250:function(e,a){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},255:function(e,a,t){"use strict";var n=t(278),r=t.n(n);a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a?r()(e).format(a):r()(e).fromNow()}},408:function(e,a,t){"use strict";t.r(a);var n=t(17),r=t(36),i=t(35),l=t(0),c=t.n(l),o=t(37),s=t(16),m=t(90),u=t(10),p=function(e){return{container:{width:"50vw",maxWidth:"960px",margin:"20px auto",color:e.textColor,"& span":{display:"inline-block"},"& p":{margin:"10px 0"},"& p:first-child":{margin:"0 0 10,px 0"},"& p span:first-child":{fontWeight:"bold",margin:"0 7px 0 0",fontFamily:"Roboto, ".concat(e.defaultFontStack)},"& p span:last-child":{fontFamily:e.defaultFontStack}},info:{padding:"2px"},profileContainer:{display:"flex",justifyContent:"center",margin:"0 0 20px 0"},imageContainer:{width:"150px",margin:"0 30px 0 0 ","& img":{width:"100%",borderRadius:"50%"}},"@media (max-width: 768px)":{container:{width:"80vw",flexWrap:"wrap"}},"@media (max-width: 560px)":{profileContainer:{flexDirection:"column",alignItems:"center"},imageContainer:{margin:0}}}},d=t(228),f=t(89),h=t(231),g=t(255),b=t(45),x=Object(u.b)(p)((function(e){var a=e.classes,t=e.isLoading,n=e.hasError,r=e.profileData;return c.a.createElement("div",{className:a.container},t&&c.a.createElement(f.a,null),n&&c.a.createElement(h.a,{text:n.message}),!t&&!n&&c.a.createElement(d.a,{className:a.profileContainer},c.a.createElement("div",{className:a.imageContainer},c.a.createElement("img",{src:"".concat(Object(b.a)(),"/").concat(r.image),alt:r.name,title:r.name})),c.a.createElement("div",{className:a.info},c.a.createElement("p",null,c.a.createElement("span",null,"Name:"),c.a.createElement("span",null,r.name)),c.a.createElement("p",null,c.a.createElement("span",null,"Email:"),c.a.createElement("span",null,r.email)),c.a.createElement("p",null,c.a.createElement("span",null,"Favourites beer:"),c.a.createElement("span",null,r.favourites)),c.a.createElement("p",null,c.a.createElement("span",null,"Comments:"),c.a.createElement("span",null,r.comments)),c.a.createElement("p",null,c.a.createElement("span",null,"Registered:"),c.a.createElement("span",null,Object(g.a)(r.createdAt,"LL"))))))})),E=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).componentDidMount=function(){e.props.fetchProfileData()},e.render=function(){var a=e.props,t=a.isLoading,n=a.hasError,r=a.profileData;return c.a.createElement(x,{isLoading:t,hasError:n,profileData:r})},e}return t}(l.PureComponent);a.default=Object(o.b)((function(e){var a=e.profile;return{hasError:a.hasError,isLoading:a.isLoading,profileData:a.profileData}}),(function(e){return Object(s.b)({fetchProfileData:m.e},e)}))(E)}}]);
//# sourceMappingURL=15.44120bb0.chunk.js.map