"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{722:function(t,n,r){r.d(n,{Hg:function(){return s},IQ:function(){return p},Jh:function(){return v},pm:function(){return o},s_:function(){return f}});var e=r(861),a=r(757),c=r.n(a),u=r(340),i="25e2aa0c0d0f2efeb739a87ae42543b5";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},415:function(t,n,r){r.r(n);var e=r(439),a=r(722),c=r(791),u=r(689),i=r(87),s=r(184);n.default=function(){var t=(0,c.useState)([]),n=(0,e.Z)(t,2),r=n[0],o=n[1],f=(0,u.TH)();return(0,c.useEffect)((function(){(0,a.Hg)().then(o)}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)("ul",{children:r.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(i.rU,{to:"/movies/".concat(t.id),state:{from:f},children:t.title})},t.id)}))})]})}}}]);
//# sourceMappingURL=415.72a40e25.chunk.js.map