(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10],{2705:function(t,n,r){var e=r(5639).Symbol;t.exports=e},4239:function(t,n,r){var e=r(2705),o=r(9607),u=r(2333),i=e?e.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):u(t)}},4259:function(t){t.exports=function(t,n,r){var e=-1,o=t.length;n<0&&(n=-n>o?0:o+n),(r=r>o?o:r)<0&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var u=Array(o);++e<o;)u[e]=t[e+n];return u}},7561:function(t,n,r){var e=r(7990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,e(t)+1).replace(o,""):t}},1957:function(t,n,r){var e="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=e},9607:function(t,n,r){var e=r(2705),o=Object.prototype,u=o.hasOwnProperty,i=o.toString,a=e?e.toStringTag:void 0;t.exports=function(t){var n=u.call(t,a),r=t[a];try{t[a]=void 0;var e=!0}catch(c){}var o=i.call(t);return e&&(n?t[a]=r:delete t[a]),o}},5776:function(t){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&n.test(t))&&t>-1&&t%1==0&&t<r}},6612:function(t,n,r){var e=r(7813),o=r(8612),u=r(5776),i=r(3218);t.exports=function(t,n,r){if(!i(r))return!1;var a=typeof n;return!!("number"==a?o(r)&&u(n,r.length):"string"==a&&n in r)&&e(r[n],t)}},2333:function(t){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},5639:function(t,n,r){var e=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,u=e||o||Function("return this")();t.exports=u},7990:function(t){var n=/\s/;t.exports=function(t){for(var r=t.length;r--&&n.test(t.charAt(r)););return r}},8400:function(t,n,r){var e=r(4259),o=r(6612),u=r(554),i=Math.ceil,a=Math.max;t.exports=function(t,n,r){n=(r?o(t,n,r):void 0===n)?1:a(u(n),0);var c=null==t?0:t.length;if(!c||n<1)return[];for(var s=0,f=0,l=Array(i(c/n));s<c;)l[f++]=e(t,s,s+=n);return l}},7813:function(t){t.exports=function(t,n){return t===n||t!==t&&n!==n}},8612:function(t,n,r){var e=r(3560),o=r(1780);t.exports=function(t){return null!=t&&o(t.length)&&!e(t)}},3560:function(t,n,r){var e=r(4239),o=r(3218);t.exports=function(t){if(!o(t))return!1;var n=e(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},1780:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3218:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,n,r){var e=r(4239),o=r(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==e(t)}},8601:function(t,n,r){var e=r(4841),o=1/0;t.exports=function(t){return t?(t=e(t))===o||t===-1/0?17976931348623157e292*(t<0?-1:1):t===t?t:0:0===t?t:0}},554:function(t,n,r){var e=r(8601);t.exports=function(t){var n=e(t),r=n%1;return n===n?r?n-r:n:0}},4841:function(t,n,r){var e=r(7561),o=r(3218),u=r(3448),i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(u(t))return NaN;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=e(t);var r=a.test(t);return r||c.test(t)?s(t.slice(2),r?2:8):i.test(t)?NaN:+t}},9491:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/optimistic_update",function(){return r(5176)}])},5176:function(t,n,r){"use strict";r.r(n);var e=r(4051),o=r.n(e),u=r(5893),i=r(8767),a=r(6874),c=r(7294);function s(t,n,r,e,o,u,i){try{var a=t[u](i),c=a.value}catch(s){return void r(s)}a.done?n(c):Promise.resolve(c).then(e,o)}function f(t){return function(){var n=this,r=arguments;return new Promise((function(e,o){var u=t.apply(n,r);function i(t){s(u,e,o,i,a,"next",t)}function a(t){s(u,e,o,i,a,"throw",t)}i(void 0)}))}}var l=function(){return a.ji.list()},v=function(t){return a.ji.add(t)},d=function(t){return a.ji.delete(t)},p=function(){var t="favorites",n=(0,i.useQueryClient)(),r=(0,i.useQuery)(t,l),e=r.data,u=r.isError,a=(0,i.useMutation)(v,{onMutate:function(r){n.setQueryData(t,(function(t){return void 0===t?[r]:t.concat([r])}))},onSettled:f(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.invalidateQueries(t);case 2:case"end":return r.stop()}}),r)})))}),s=(0,i.useMutation)(d,{onMutate:function(r){n.setQueryData(t,(function(t){return void 0===t?[]:t.filter((function(t){return t!==r}))}))},onSettled:f(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.invalidateQueries(t);case 2:case"end":return r.stop()}}),r)})))}),p=(0,c.useCallback)((function(t){return a.mutateAsync(t)}),[a]),x=(0,c.useCallback)((function(t){return s.mutateAsync(t)}),[s]),b=(0,c.useCallback)(f(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.invalidateQueries(t);case 2:case"end":return r.stop()}}),r)}))),[n]);return u?{data:{status:"error"},favorite:p,unFavorite:x,invalidate:b}:void 0===e?{data:{status:"processing"},favorite:p,unFavorite:x,invalidate:b}:{data:{status:"success",value:e},favorite:p,unFavorite:x,invalidate:b}},x=function(){return a._8.listAll()},b=function(t){var n=t.onClick,r=t.disabled,e=void 0!==r&&r;return(0,u.jsx)("button",{onClick:n,disabled:e,children:"Favorite"})},y=function(t){var n=t.onClick,r=t.disabled,e=void 0!==r&&r;return(0,u.jsx)("button",{onClick:n,disabled:e,children:"UnFavorite"})},h=function(t){var n=t.userId,r=p(),e=r.data,o=r.favorite,i=r.unFavorite,a="success"===e.status,s=(0,c.useMemo)((function(){return"success"===e.status&&e.value.includes(n)}),[e,n]);return a&&s?(0,u.jsx)(y,{disabled:!a,onClick:function(){return i(n)}}):(0,u.jsx)(b,{disabled:!a,onClick:function(){return o(n)}})},j=function(t){var n=t.user;return(0,u.jsxs)("div",{style:{display:"block",padding:"20px 10px",borderBottom:"1px solid black"},children:[(0,u.jsxs)("div",{children:["\u30e6\u30fc\u30b6\u30fc\u540d\uff1a",n.name]}),(0,u.jsx)(h,{userId:n.id})]})},g=function(){var t=function(){var t=(0,i.useQuery)("users",x),n=t.isError,r=t.data;return n?{status:"error"}:void 0===r?{status:"processing"}:{status:"success",value:r}}();return(0,u.jsx)("div",{children:"error"===t.status?(0,u.jsx)("div",{children:"error"}):"processing"===t.status?(0,u.jsx)("div",{children:"loading"}):t.value.map((function(t){return(0,u.jsx)(j,{user:t},t.id)}))})};n.default=function(){var t=p().invalidate;return(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"\u697d\u89b3\u7684\u66f4\u65b0\u51e6\u7406\u306e\u30b5\u30f3\u30d7\u30eb"}),(0,u.jsx)("div",{children:(0,u.jsx)("button",{onClick:t,children:"invalidate"})}),(0,u.jsx)(g,{})]})}},5934:function(t,n,r){"use strict";var e;r.d(n,{Z:function(){return l}});var o=new Uint8Array(16);function u(){if(!e&&!(e="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(o)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var a=function(t){return"string"===typeof t&&i.test(t)},c=[],s=0;s<256;++s)c.push((s+256).toString(16).substr(1));var f=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(c[t[n+0]]+c[t[n+1]]+c[t[n+2]]+c[t[n+3]]+"-"+c[t[n+4]]+c[t[n+5]]+"-"+c[t[n+6]]+c[t[n+7]]+"-"+c[t[n+8]]+c[t[n+9]]+"-"+c[t[n+10]]+c[t[n+11]]+c[t[n+12]]+c[t[n+13]]+c[t[n+14]]+c[t[n+15]]).toLowerCase();if(!a(r))throw TypeError("Stringified UUID is invalid");return r};var l=function(t,n,r){var e=(t=t||{}).random||(t.rng||u)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,n){r=r||0;for(var o=0;o<16;++o)n[r+o]=e[o];return n}return f(e)}}},function(t){t.O(0,[874,774,888,179],(function(){return n=9491,t(t.s=n);var n}));var n=t.O();_N_E=n}]);