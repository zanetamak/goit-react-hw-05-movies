"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{722:function(t,e,n){n.d(e,{Hg:function(){return o},IQ:function(){return f},Jh:function(){return l},s_:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(340),i="25e2aa0c0d0f2efeb739a87ae42543b5",s="https://api.themoviedb.org/3/",o=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"trending/all/week?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(i)),t.abrupt("return",n.data.results);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},76:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(439),a=n(791),c=n(689),u=n(722),i="Cast_wrapper__XmIBi",s="Cast_item__a0CDL",o="Cast_image__mOsuM",p=n(184),f=function(){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),n=e[0],f=e[1],l=(0,c.UO)().movieId;return(0,a.useEffect)((function(){l&&(0,u.IQ)(l).then(f)}),[l]),n?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{className:i,children:n.map((function(t){return(0,p.jsxs)("li",{className:s,children:[(0,p.jsx)("img",{className:o,src:t.profile_path?"https://www.themoviedb.org/t/p/w500/".concat(t.profile_path):"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:t.original_name}),(0,p.jsx)("h3",{children:t.name}),(0,p.jsxs)("p",{children:["As: ",t.character]})]},t.id)}))})}):null}}}]);
//# sourceMappingURL=76.4e10a4f0.chunk.js.map