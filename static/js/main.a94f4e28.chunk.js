(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(97),o=n.n(i),c=n(163),l=n(29),u=n(23),s=n(56);function f(){f=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,n){return t[e]=n}}function u(t,e,n,a){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),c=new O(a||[]);return r(o,"_invoke",{value:x(t,n,c)}),o}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var h={};function m(){}function d(){}function p(){}var y={};l(y,i,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==e&&n.call(g,i)&&(y=g);var E=p.prototype=m.prototype=Object.create(y);function w(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var a;r(this,"_invoke",{value:function(r,i){function o(){return new e(function(a,o){!function r(a,i,o,c){var l=s(t[a],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,o,c)},function(t){r("throw",t,o,c)}):e.resolve(f).then(function(t){u.value=t,o(u)},function(t){return r("throw",t,o,c)})}c(l.arg)}(r,i,a,o)})}return a=a?a.then(o,o):o()}})}function x(t,e,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return I()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var c=L(o,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var a=s(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:I}}function I(){return{value:void 0,done:!0}}return d.prototype=p,r(E,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:d,configurable:!0}),d.displayName=l(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},w(b.prototype),l(b.prototype,o,function(){return this}),t.AsyncIterator=b,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new b(u(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},w(E),l(E,c,"Generator"),l(E,i,function(){return this}),l(E,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var h=Object(s.b)("cities/fetchCityByNameStatus",function(){var t=Object(u.a)(f().mark(function t(e){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=f847b24e7d8adac7b410a9f557f6a6b3")).then(function(t){return t.json()}));case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),m=Object(s.c)({name:"citiesSlice",initialState:{cities:[],citiesInformation:{}},reducers:{setCity:function(t,e){t.cities=e.payload}},extraReducers:function(t){t.addCase(h.fulfilled,function(t,e){t.citiesInformation[e.payload.name]=e.payload})}}),d=m.actions.setCity,p=m.reducer,y=n(165),v=n(167),g=n(166),E=n(164);function w(t){var e,n,r,i,o=t.cityInformation,c=t.children;o.weather&&(n=Math.floor(o.main.temp_min-273),r=Math.floor(o.main.temp_max-273),o.weather.forEach(function(t){e=t.main,i=t.icon}));var l=new Date;return a.a.createElement(y.a,{className:"card"},a.a.createElement(g.a,{sx:{width:300}},a.a.createElement(E.a,{variant:"h5",component:"div","data-testid":"city-name"},o.name),a.a.createElement(E.a,{variant:"body2"},a.a.createElement("br",null),l.toLocaleDateString("ua-UA",{weekday:"long",month:"long",day:"numeric"})),a.a.createElement(E.a,{variant:"body2","data-testid":"city-temparature"},a.a.createElement("br",null),r," / ",n," \xbaC",a.a.createElement("br",null)),a.a.createElement("img",{"data-testid":"city-img",src:"http://openweathermap.org/img/w/".concat(i,".png"),alt:"Weather Icon"}),a.a.createElement(E.a,{variant:"body2",className:"weather-title","data-testid":"weather-title"},e)),c&&a.a.createElement(v.a,{"data-testid":"card-action"},c))}var b=n(50);function x(t){var e=t.city,n=Object(l.b)(),i=Object(l.c)(function(t){return t.citiesSlice.citiesInformation})[e];function o(){n(h(e))}return Object(r.useEffect)(function(){o()},[]),i?a.a.createElement(w,{cityInformation:i},a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement(b.b,{to:"/full-information/".concat(i.name)},"1")),a.a.createElement(c.a,{size:"small",href:"/full-information/".concat(i.name)},"Learn more"),a.a.createElement(c.a,{size:"small",onClick:function(t){t.preventDefault(),o()}},"Update"))):null}var L=["Kyiv","Kharkiv","Odesa","Dnipro","Donetsk","Lviv","Mykolaiv","Sevastopol","Mariupol","Luhansk","Chernihiv","Kherson","Poltava","Cherkasy","Zhytomyr","Sumy","Rivne","Ivano-Frankivsk","Ternopil","Kremenchuk","Lutsk","Brovary","Berdiansk"],j=n(161),k=n(157),O=n(158),S=n(156),I=n(152),_=n(153),C=n(155),N=n(160),P="cities",G={PaperProps:{style:{maxHeight:224,width:250}}};var M=function(){var t=Object(l.c)(function(t){return t.citiesSlice.cities}),e=Object(l.b)();return r.useEffect(function(){var t=localStorage.getItem(P);t&&e(d(t.split(",")))},[e]),r.createElement(N.a,{container:!0,direction:"column",textAlign:"center"},r.createElement("h1",null,"Choose City:"),r.createElement(N.a,{container:!0,direction:"column",justifyContent:"center"},r.createElement(S.a,{sx:{m:1,margin:2}},r.createElement(k.a,{id:"demo-multiple-checkbox-label"},"Cities"),r.createElement(_.a,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,value:t,onChange:function(t){var n=t.target.value,r="string"===typeof n?n.split(","):n;e(d(r)),localStorage.setItem(P,r)},input:r.createElement(j.a,{label:"Cities"}),renderValue:function(t){return t.join(", ")},MenuProps:G},L.map(function(e){return r.createElement(O.a,{key:e,value:e},r.createElement(C.a,{checked:t.indexOf(e)>-1}),r.createElement(I.a,{primary:e}))})))),r.createElement(N.a,{container:!0,textAlign:"center",spacing:2},r.createElement(N.a,{item:!0,xs:12},r.createElement(N.a,{container:!0,justifyContent:"center",spacing:2},t.map(function(t){return r.createElement(N.a,{key:t,item:!0},r.createElement(x,{city:t}))})))))},D=n(3),F=n(162);function T(t){var e,n,r,i,o,c,l=t.cityInformation;l.weather&&(n=Math.floor(l.main.temp_min-273),r=Math.floor(l.main.temp_max-273),o=l.main.humidity,c=l.wind.speed,l.weather.forEach(function(t){e=t.description,i=t.icon}));return a.a.createElement(N.a,{container:!0},a.a.createElement(N.a,{item:!0,xs:12},a.a.createElement(F.a,{className:"paper",sx:{p:2}},a.a.createElement(E.a,{variant:"h5",component:"div","data-testid":"city-name"},l.name),a.a.createElement(E.a,{variant:"body2"},a.a.createElement("br",null),(new Date).toLocaleDateString("ua-UA",{weekday:"long",month:"long",day:"numeric"})),a.a.createElement(E.a,{variant:"body2","data-testid":"city-temparature"},a.a.createElement("br",null),"The high will be ",r,"\xbaC, the low will be"," ",n,"\xbaC.",a.a.createElement("br",null)),a.a.createElement(N.a,{container:!0,alignItems:"center"},a.a.createElement("img",{"data-testid":"city-img",src:"http://openweathermap.org/img/w/".concat(i,".png"),alt:"Weather Icon"}),a.a.createElement(E.a,{variant:"body2",className:"weather-title","data-testid":"weather-title"},e)),a.a.createElement(E.a,{variant:"body2",className:"humidity","data-testid":"humidity"},"Humidity: ",o,"%"),a.a.createElement(E.a,{variant:"body2",className:"wind","data-testid":"wind"},"Wind speed: ",c))))}function A(){var t=Object(l.b)(),e=Object(D.l)(),n=Object(l.c)(function(t){return t.citiesSlice.citiesInformation});if(Object(r.useEffect)(function(){e.id&&t(h(e.id))},[]),!e.id)return null;var i=n[e.id];return i?a.a.createElement(T,{cityInformation:i}):null}var B=Object(s.a)({reducer:{citiesSlice:p}}),K=function(){return alert(4),Object(D.n)([{path:"/",element:a.a.createElement(M,null)},{path:"full-information/:id",element:a.a.createElement(A,null)}])};o.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,{store:B},a.a.createElement(b.a,{basename:"/weather"},a.a.createElement(K,null)))))},98:function(t,e,n){t.exports=n(106)}},[[98,2,1]]]);
//# sourceMappingURL=main.a94f4e28.chunk.js.map