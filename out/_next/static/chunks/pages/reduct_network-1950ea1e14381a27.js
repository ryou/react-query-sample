(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{2705:function(t,n,r){var e=r(5639).Symbol;t.exports=e},4239:function(t,n,r){var e=r(2705),o=r(9607),u=r(2333),i=e?e.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):u(t)}},4259:function(t){t.exports=function(t,n,r){var e=-1,o=t.length;n<0&&(n=-n>o?0:o+n),(r=r>o?o:r)<0&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var u=Array(o);++e<o;)u[e]=t[e+n];return u}},7561:function(t,n,r){var e=r(7990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,e(t)+1).replace(o,""):t}},1957:function(t,n,r){var e="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=e},9607:function(t,n,r){var e=r(2705),o=Object.prototype,u=o.hasOwnProperty,i=o.toString,c=e?e.toStringTag:void 0;t.exports=function(t){var n=u.call(t,c),r=t[c];try{t[c]=void 0;var e=!0}catch(a){}var o=i.call(t);return e&&(n?t[c]=r:delete t[c]),o}},5776:function(t){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&n.test(t))&&t>-1&&t%1==0&&t<r}},6612:function(t,n,r){var e=r(7813),o=r(8612),u=r(5776),i=r(3218);t.exports=function(t,n,r){if(!i(r))return!1;var c=typeof n;return!!("number"==c?o(r)&&u(n,r.length):"string"==c&&n in r)&&e(r[n],t)}},2333:function(t){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},5639:function(t,n,r){var e=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,u=e||o||Function("return this")();t.exports=u},7990:function(t){var n=/\s/;t.exports=function(t){for(var r=t.length;r--&&n.test(t.charAt(r)););return r}},8400:function(t,n,r){var e=r(4259),o=r(6612),u=r(554),i=Math.ceil,c=Math.max;t.exports=function(t,n,r){n=(r?o(t,n,r):void 0===n)?1:c(u(n),0);var a=null==t?0:t.length;if(!a||n<1)return[];for(var s=0,f=0,l=Array(i(a/n));s<a;)l[f++]=e(t,s,s+=n);return l}},7813:function(t){t.exports=function(t,n){return t===n||t!==t&&n!==n}},8612:function(t,n,r){var e=r(3560),o=r(1780);t.exports=function(t){return null!=t&&o(t.length)&&!e(t)}},3560:function(t,n,r){var e=r(4239),o=r(3218);t.exports=function(t){if(!o(t))return!1;var n=e(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},1780:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3218:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,n,r){var e=r(4239),o=r(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==e(t)}},8601:function(t,n,r){var e=r(4841),o=1/0;t.exports=function(t){return t?(t=e(t))===o||t===-1/0?17976931348623157e292*(t<0?-1:1):t===t?t:0:0===t?t:0}},554:function(t,n,r){var e=r(8601);t.exports=function(t){var n=e(t),r=n%1;return n===n?r?n-r:n:0}},4841:function(t,n,r){var e=r(7561),o=r(3218),u=r(3448),i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(u(t))return NaN;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=e(t);var r=c.test(t);return r||a.test(t)?s(t.slice(2),r?2:8):i.test(t)?NaN:+t}},4427:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reduct_network",function(){return r(1225)}])},1225:function(t,n,r){"use strict";r.r(n),r.d(n,{useUserList:function(){return d}});var e=r(4051),o=r.n(e),u=r(5893),i=r(8767),c=r(6874),a=r(1664),s=r.n(a);function f(t,n,r,e,o,u,i){try{var c=t[u](i),a=c.value}catch(s){return void r(s)}c.done?n(a):Promise.resolve(a).then(e,o)}function l(t){return function(){var n=this,r=arguments;return new Promise((function(e,o){var u=t.apply(n,r);function i(t){f(u,e,o,i,c,"next",t)}function c(t){f(u,e,o,i,c,"throw",t)}i(void 0)}))}}var p=function(){return c._8.listAll()},v=function(t){return c._8.create(t)},d=function(){var t="users",n=(0,i.useQueryClient)(),r=(0,i.useMutation)(v,{onSuccess:l(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.resetQueries(t);case 2:case"end":return r.stop()}}),r)})))}),e=(0,i.useQuery)(t,p,{staleTime:1/0}),u=e.isError,c=e.data,a=function(){var t=l(o().mark((function t(n){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.mutateAsync(n);case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return u?{data:{status:"error"},createUser:a}:void 0===c?{data:{status:"processing"},createUser:a}:{data:{status:"success",value:c},createUser:a}},x=function(t){var n=t.user;return(0,u.jsxs)("div",{style:{padding:"20px 10px",borderBottom:"1px solid black"},children:["\u30e6\u30fc\u30b6\u30fc\u540d\uff1a",n.name]})},y=function(){var t=d().data;return(0,u.jsx)("div",{children:"error"===t.status?(0,u.jsx)("div",{children:"error"}):"processing"===t.status?(0,u.jsx)("div",{children:"loading"}):t.value.map((function(t){return(0,u.jsx)(x,{user:t},t.id)}))})};n.default=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"\u901a\u4fe1\u524a\u6e1b\u306e\u30b5\u30f3\u30d7\u30eb"}),(0,u.jsx)("p",{children:"\u521d\u671f\u8868\u793a\u5f8c\u3001\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210\u753b\u9762\u3068\u884c\u304d\u6765\u3057\u3066\u3082\u901a\u4fe1\u304c\u767a\u751f\u3057\u306a\u3044\u3002\uff08\u30b3\u30f3\u30bd\u30fc\u30eb\u306e\u300ccall list all\u300d\u3068\u3044\u3046\u30ed\u30b0\u304c\u51fa\u306a\u3044\uff09"}),(0,u.jsx)("p",{children:"\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210\u5f8cinvalidate\u3057\u3066\u308b\u306e\u3067\u3001\u6700\u65b0\u30c7\u30fc\u30bf\u53d6\u5f97\u306e\u305f\u3081\u306b\u901a\u4fe1\u3059\u308b"}),(0,u.jsx)("div",{children:(0,u.jsx)(s(),{href:"/reduct_network/create",children:(0,u.jsx)("a",{children:"\u30e6\u30fc\u30b6\u30fc\u4f5c\u6210"})})}),(0,u.jsx)(y,{})]})}},5934:function(t,n,r){"use strict";var e;r.d(n,{Z:function(){return l}});var o=new Uint8Array(16);function u(){if(!e&&!(e="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(o)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(t){return"string"===typeof t&&i.test(t)},a=[],s=0;s<256;++s)a.push((s+256).toString(16).substr(1));var f=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(a[t[n+0]]+a[t[n+1]]+a[t[n+2]]+a[t[n+3]]+"-"+a[t[n+4]]+a[t[n+5]]+"-"+a[t[n+6]]+a[t[n+7]]+"-"+a[t[n+8]]+a[t[n+9]]+"-"+a[t[n+10]]+a[t[n+11]]+a[t[n+12]]+a[t[n+13]]+a[t[n+14]]+a[t[n+15]]).toLowerCase();if(!c(r))throw TypeError("Stringified UUID is invalid");return r};var l=function(t,n,r){var e=(t=t||{}).random||(t.rng||u)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,n){r=r||0;for(var o=0;o<16;++o)n[r+o]=e[o];return n}return f(e)}}},function(t){t.O(0,[874,774,888,179],(function(){return n=4427,t(t.s=n);var n}));var n=t.O();_N_E=n}]);