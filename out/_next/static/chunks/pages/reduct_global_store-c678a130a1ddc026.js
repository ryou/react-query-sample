(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[165],{1120:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reduct_global_store",function(){return r(920)}])},920:function(n,e,r){"use strict";r.r(e);var t=r(4051),u=r.n(t),i=r(5893),c=r(6445),s=r(7294),a=r(6874),o=r(8767);function l(n,e,r,t,u,i,c){try{var s=n[i](c),a=s.value}catch(o){return void r(o)}s.done?e(a):Promise.resolve(a).then(t,u)}function d(n){return function(){var e=this,r=arguments;return new Promise((function(t,u){var i=n.apply(e,r);function c(n){l(i,t,u,c,s,"next",n)}function s(n){l(i,t,u,c,s,"throw",n)}c(void 0)}))}}var f="loginUser",h=function(){var n=d(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.ON.fetchLoginUser();case 3:return n.abrupt("return",n.sent);case 6:return n.prev=6,n.t0=n.catch(0),n.abrupt("return",void 0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=d(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ON.editLoginUser({name:e});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,o.useQueryClient)(),e=(0,o.useQuery)(f,h).data,r=(0,o.useMutation)(p,{onSuccess:d(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.invalidateQueries(f);case 2:case"end":return e.stop()}}),e)})))}),t=(0,s.useCallback)((function(n){return r.mutateAsync(n)}),[r]),i=(0,s.useCallback)(function(){var e=d(u().mark((function e(r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.ON.login(r);case 2:return e.next=4,n.invalidateQueries(f);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[n]);return{loginUser:e,edit:t,login:i,logout:(0,s.useCallback)(d(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.ON.logout();case 2:return e.next=4,n.invalidateQueries(f);case 4:case"end":return e.stop()}}),e)}))),[n])}},x=function(){var n=v(),e=n.loginUser,r=n.login,t=n.logout,c=(0,s.useCallback)(d(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r({email:"hoge",password:"fuga"});case 2:case"end":return n.stop()}}),n)}))),[r]);return(0,i.jsxs)("div",{style:{backgroundColor:"#eee"},children:[(0,i.jsx)("h3",{children:"\u30d8\u30c3\u30c0\u30fc"}),void 0!==e?(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"\u30e6\u30fc\u30b6\u30fc\u540d\uff1a"}),(0,i.jsx)("span",{children:e.name})]}),(0,i.jsx)("button",{onClick:t,children:"logout"})]}):(0,i.jsx)("div",{children:(0,i.jsx)("button",{onClick:c,children:"login"})})]})},w=function(){var n=v(),e=n.loginUser,r=n.edit,t=(0,s.useCallback)(function(){var n=d(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r(e);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[r]);return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"\u30b3\u30f3\u30c6\u30f3\u30c4"}),void 0!==e&&(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{children:"\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u7de8\u96c6"}),(0,i.jsx)(c.m,{onSubmit:t})]})]})};e.default=function(){return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"\u8a8d\u8a3c\u306b\u95a2\u3059\u308b\u72b6\u614b\u3092ReactQuery\u3067\u7ba1\u7406\u3059\u308b\u30b5\u30f3\u30d7\u30eb"}),(0,i.jsx)("p",{children:"\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u72b6\u614b\u306e\u3046\u3061\u3001\u30b5\u30fc\u30d0\u30fc\u306e\u8fd4\u5374\u5024\u3092\u305d\u306e\u307e\u307e\u4fdd\u5b58\u3057\u3066\u308b\u3060\u3051\u306e\u3088\u3046\u306a\u3082\u306e\u306fReactQuery\u4f7f\u3048\u3070\u30b3\u30fc\u30c9\u524a\u6e1b\u51fa\u6765\u308b\u3088\u3068\u3044\u3046\u3084\u3064\u3002"})]}),(0,i.jsx)(x,{}),(0,i.jsx)(w,{})]})}}},function(n){n.O(0,[874,476,774,888,179],(function(){return e=1120,n(n.s=e);var e}));var e=n.O();_N_E=e}]);