function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function asyncGeneratorStep(e,t,r,n,o,a,i){try{var u=e[a](i),s=u.value}catch(c){return void r(c)}u.done?t(s):Promise.resolve(s).then(n,o)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){asyncGeneratorStep(a,n,o,i,u,"next",e)}function u(e){asyncGeneratorStep(a,n,o,i,u,"throw",e)}i(void 0)}))}}function _createForOfIteratorHelper(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{k5eQ:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_route",(function(){return u})),r.d(t,"ion_route_redirect",(function(){return s})),r.d(t,"ion_router",(function(){return P})),r.d(t,"ion_router_link",(function(){return j}));var n=r("OVxw"),o=r("vO0Z"),a=r("gHap"),i=r("hcCc"),u=function(){function e(t){_classCallCheck(this,e),Object(n.q)(this,t),this.ionRouteDataChanged=Object(n.i)(this,"ionRouteDataChanged",7),this.url=""}return _createClass(e,[{key:"onUpdate",value:function(e){this.ionRouteDataChanged.emit(e)}},{key:"onComponentProps",value:function(e,t){if(e!==t){var r=e?Object.keys(e):[],n=t?Object.keys(t):[];if(r.length===n.length){var o,a=_createForOfIteratorHelper(r);try{for(a.s();!(o=a.n()).done;){var i=o.value;if(e[i]!==t[i])return void this.onUpdate(e)}}catch(u){a.e(u)}finally{a.f()}}else this.onUpdate(e)}}},{key:"connectedCallback",value:function(){this.ionRouteDataChanged.emit()}}],[{key:"watchers",get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}]),e}(),s=function(){function e(t){_classCallCheck(this,e),Object(n.q)(this,t),this.ionRouteRedirectChanged=Object(n.i)(this,"ionRouteRedirectChanged",7)}return _createClass(e,[{key:"propDidChange",value:function(){this.ionRouteRedirectChanged.emit()}},{key:"connectedCallback",value:function(){this.ionRouteRedirectChanged.emit()}}],[{key:"watchers",get:function(){return{from:["propDidChange"],to:["propDidChange"]}}}]),e}(),c=function(e){return"/"+e.filter((function(e){return e.length>0})).join("/")},l=function(e){if(null==e)return[""];var t=e.split("?")[0].split("/").map((function(e){return e.trim()})).filter((function(e){return e.length>0}));return 0===t.length?[""]:t},h=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r,n,o){var a,i,u,s,c,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=l.length>4&&void 0!==l[4]&&l[4],i=l.length>5?l[5]:void 0,e.prev=2,u=p(t),!(o>=r.length)&&u){e.next=6;break}return e.abrupt("return",a);case 6:return e.next=8,u.componentOnReady();case 8:return s=r[o],e.next=11,u.setRouteId(s.id,s.params,n,i);case 11:return(c=e.sent).changed&&(n="root",a=!0),e.next=15,h(c.element,r,n,o+1,a,i);case 15:if(a=e.sent,e.t0=c.markVisible,!e.t0){e.next=20;break}return e.next=20,c.markVisible();case 20:return e.abrupt("return",a);case 23:return e.prev=23,e.t1=e.catch(2),e.abrupt("return",(console.error(e.t1),!1));case 26:case"end":return e.stop()}}),e,null,[[2,23]])})));return function(t,r,n,o){return e.apply(this,arguments)}}(),f=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",p=function(e){if(e)return e.matches(f)?e:e.querySelector(f)||void 0},d=function(e,t){return t.find((function(t){return function(e,t){var r=t.from;if(void 0===t.to)return!1;if(r.length>e.length)return!1;for(var n=0;n<r.length;n++){var o=r[n];if("*"===o)return!0;if(o!==e[n])return!1}return r.length===e.length}(e,t)}))},v=function(e,t){for(var r=Math.min(e.length,t.length),n=0;n<r&&e[n].toLowerCase()===t[n].id;n++);return n},y=function(e,t){for(var r,n=new w(e),o=!1,a=0;a<t.length;a++){var i=t[a].path;if(""===i[0])o=!0;else{var u,s=_createForOfIteratorHelper(i);try{for(s.s();!(u=s.n()).done;){var c=u.value,l=n.next();if(":"===c[0]){if(""===l)return null;((r=r||[])[a]||(r[a]={}))[c.slice(1)]=l}else if(l!==c)return null}}catch(h){s.e(h)}finally{s.f()}o=!1}}return o&&o!==(""===n.next())?null:r?t.map((function(e,t){return{id:e.id,path:e.path,params:b(e.params,r[t])}})):t},b=function(e,t){return!e&&t?t:e&&!t?e:e&&t?Object.assign(Object.assign({},e),t):void 0},g=function(e,t){var r,n=null,o=0,a=_createForOfIteratorHelper(t);try{for(a.s();!(r=a.n()).done;){var i=r.value,u=y(e,i);if(null!==u){var s=m(u);s>o&&(o=s,n=u)}}}catch(c){a.e(c)}finally{a.f()}return n},m=function(e){var t,r=1,n=1,o=_createForOfIteratorHelper(e);try{for(o.s();!(t=o.n()).done;){var a,i=_createForOfIteratorHelper(t.value.path);try{for(i.s();!(a=i.n()).done;){var u=a.value;":"===u[0]?r+=Math.pow(1,n):""!==u&&(r+=Math.pow(2,n)),n++}}catch(s){i.e(s)}finally{i.f()}}}catch(s){o.e(s)}finally{o.f()}return r},w=function(){function e(t){_classCallCheck(this,e),this.path=t.slice()}return _createClass(e,[{key:"next",value:function(){return this.path.length>0?this.path.shift():""}}]),e}(),k=function(e){return Array.from(e.children).filter((function(e){return"ION-ROUTE-REDIRECT"===e.tagName})).map((function(e){var t=C(e,"to");return{from:l(C(e,"from")),to:null==t?void 0:l(t)}}))},R=function(e){return x(_(e))},_=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return Array.from(r.children).filter((function(e){return"ION-ROUTE"===e.tagName&&e.component})).map((function(r){var n=C(r,"component");if(null==n)throw new Error("component missing in ion-route");return{path:l(C(r,"url")),id:n.toLowerCase(),params:r.componentProps,beforeLeave:r.beforeLeave,beforeEnter:r.beforeEnter,children:e(t,r)}}))},C=function(e,t){return t in e?e[t]:e.hasAttribute(t)?e.getAttribute(t):null},x=function(e){var t,r=[],n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;O([],r,o)}}catch(a){n.e(a)}finally{n.f()}return r},O=function e(t,r,n){var o=t.slice();if(o.push({id:n.id,path:n.path,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}),0!==n.children.length){var a,i=_createForOfIteratorHelper(n.children);try{for(i.s();!(a=i.n()).done;){e(o,r,a.value)}}catch(u){i.e(u)}finally{i.f()}}else r.push(o)},P=function(){function e(t){_classCallCheck(this,e),Object(n.q)(this,t),this.ionRouteWillChange=Object(n.i)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(n.i)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}var t,r,o,i,u,s,f,y,m,w,_;return _createClass(e,[{key:"componentWillLoad",value:(_=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.debug("[ion-router] router will load"),e.next=3,p(document.body)?Promise.resolve():new Promise((function(e){window.addEventListener("ionNavWillLoad",e,{once:!0})}));case 3:return console.debug("[ion-router] found nav"),e.next=6,this.onRoutesChanged();case 6:case"end":return e.stop()}}),e,this)}))),function(){return _.apply(this,arguments)})},{key:"componentDidLoad",value:function(){window.addEventListener("ionRouteRedirectChanged",Object(a.e)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(a.e)(this.onRoutesChanged.bind(this),100))}},{key:"onPopState",value:(w=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.historyDirection(),r=this.getPath(),e.next=4,this.runGuards(r);case 4:return n=e.sent,e.abrupt("return",!0!==n?("object"==typeof n&&(r=l(n.redirect)),!1):(console.debug("[ion-router] URL changed -> update nav",r,t),this.writeNavStateRoot(r,t)));case 6:case"end":return e.stop()}}),e,this)}))),function(){return w.apply(this,arguments)})},{key:"onBackButton",value:function(e){var t=this;e.detail.register(0,(function(e){t.back(),e()}))}},{key:"canTransition",value:(m=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.runGuards();case 2:return t=e.sent,e.abrupt("return",!0===t||"object"==typeof t&&t.redirect);case 4:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)})},{key:"push",value:(y=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,n,o,a,i,u=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"forward",n=u.length>2?u[2]:void 0,t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,r),o=l(t),a=t.split("?")[1],e.next=6,this.runGuards(o);case 6:if(!0===(i=e.sent)){e.next=11;break}if("object"==typeof i){e.next=10;break}return e.abrupt("return",!1);case 10:o=l(i.redirect),a=i.redirect.split("?")[1];case 11:return e.abrupt("return",(this.setPath(o,r,a),this.writeNavStateRoot(o,r,n)));case 12:case"end":return e.stop()}}),e,this)}))),function(e){return y.apply(this,arguments)})},{key:"back",value:function(){return window.history.back(),Promise.resolve(this.waitPromise)}},{key:"printDebug",value:(f=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),function(e){console.group("[ion-core] ROUTES[".concat(e.length,"]"));var t,r=_createForOfIteratorHelper(e);try{var n=function(){var e=t.value,r=[];e.forEach((function(e){return r.push.apply(r,_toConsumableArray(e.path))}));var n=e.map((function(e){return e.id}));console.debug("%c "+c(r),"font-weight: bold; padding-left: 20px","=>\t","(".concat(n.join(", "),")"))};for(r.s();!(t=r.n()).done;)n()}catch(o){r.e(o)}finally{r.f()}console.groupEnd()}(R(this.el)),function(e){console.group("[ion-core] REDIRECTS[".concat(e.length,"]"));var t,r=_createForOfIteratorHelper(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;n.to&&console.debug("FROM: ","$c "+c(n.from),"font-weight: bold"," TO: ","$c "+c(n.to),"font-weight: bold")}}catch(o){r.e(o)}finally{r.f()}console.groupEnd()}(k(this.el));case 1:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{key:"navChanged",value:(s=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,n,o,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.busy){e.next=2;break}return e.abrupt("return",(console.warn("[ion-router] router is busy, navChanged was cancelled"),!1));case 2:return e.next=4,function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,n,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],o=window.document.body;case 2:if(!(n=p(o))){e.next=11;break}return e.next=5,n.getRouteId();case 5:if(a=e.sent){e.next=8;break}return e.abrupt("break",11);case 8:o=a.element,a.element=void 0,r.push(a);case 9:e.next=2;break;case 11:return e.abrupt("return",{ids:r,outlet:n});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()();case 4:if(r=e.sent,n=r.ids,o=r.outlet,a=function(e,t){var r,n=null,o=0,a=e.map((function(e){return e.id})),i=_createForOfIteratorHelper(t);try{for(i.s();!(r=i.n()).done;){var u=r.value,s=v(a,u);s>o&&(n=u,o=s)}}catch(c){i.e(c)}finally{i.f()}return n?n.map((function(t,r){return{id:t.id,path:t.path,params:b(t.params,e[r]&&e[r].params)}})):null}(n,R(this.el))){e.next=10;break}return e.abrupt("return",(console.warn("[ion-router] no matching URL for ",n.map((function(e){return e.id}))),!1));case 10:if(!(i=function(e){var t,r=[],n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var o,a=t.value,i=_createForOfIteratorHelper(a.path);try{for(i.s();!(o=i.n()).done;){var u=o.value;if(":"===u[0]){var s=a.params&&a.params[u.slice(1)];if(!s)return null;r.push(s)}else""!==u&&r.push(u)}}catch(c){i.e(c)}finally{i.f()}}}catch(c){n.e(c)}finally{n.f()}return r}(a))){e.next=19;break}return console.debug("[ion-router] nav changed -> update URL",n,i),this.setPath(i,t),e.next=16,this.safeWriteNavState(o,a,"root",i,null,n.length);case 16:e.t0=!0,e.next=20;break;case 19:e.t0=(console.warn("[ion-router] router could not match path because some required param is missing"),!1);case 20:return e.abrupt("return",e.t0);case 21:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)})},{key:"onRedirectChanged",value:function(){var e=this.getPath();e&&d(e,k(this.el))&&this.writeNavStateRoot(e,"root")}},{key:"onRoutesChanged",value:function(){return this.writeNavStateRoot(this.getPath(),"root")}},{key:"historyDirection",value:function(){var e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,e.document.location&&e.document.location.href));var t=e.history.state,r=this.lastState;return this.lastState=t,t>r||t>=r&&r>0?"forward":t<r?"back":"root"}},{key:"writeNavStateRoot",value:(u=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r,n){var o,a,i,u,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",(console.error("[ion-router] URL is not part of the routing set"),!1));case 2:return o=k(this.el),a=d(t,o),i=null,a&&(this.setPath(a.to,r),i=a.from,t=a.to),u=R(this.el),s=g(t,u),e.abrupt("return",s?this.safeWriteNavState(document.body,s,r,t,i,0,n):(console.error("[ion-router] the path does not match any route"),!1));case 7:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return u.apply(this,arguments)})},{key:"safeWriteNavState",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r,n,o,a){var i,u,s,c,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>5&&void 0!==l[5]?l[5]:0,u=l.length>6?l[6]:void 0,e.next=4,this.lock();case 4:return s=e.sent,c=!1,e.prev=6,e.next=9,this.writeNavState(t,r,n,o,a,i,u);case 9:c=e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.error(e.t0);case 15:return e.abrupt("return",(s(),c));case 16:case"end":return e.stop()}}),e,this,[[6,12]])}))),function(e,t,r,n,o){return i.apply(this,arguments)})},{key:"lock",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.waitPromise,this.waitPromise=new Promise((function(e){return r=e})),e.t0=void 0!==t,!e.t0){e.next=6;break}return e.next=6,t;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"runGuards",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,r,n,o,a,i,u,s,c,h=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=h.length>0&&void 0!==h[0]?h[0]:this.getPath(),r=h.length>1&&void 0!==h[1]?h[1]:l(this.previousPath),t&&r){e.next=4;break}return e.abrupt("return",!0);case 4:if(n=R(this.el),o=g(t,n),a=g(r,n),i=o&&o[o.length-1].beforeEnter,u=a&&a[a.length-1].beforeLeave,e.t0=!u,e.t0){e.next=14;break}return e.next=13,u();case 13:e.t0=e.sent;case 14:if(!1!==(s=e.t0)&&"object"!=typeof s){e.next=17;break}return e.abrupt("return",s);case 17:if(e.t1=!i,e.t1){e.next=22;break}return e.next=21,i();case 21:e.t1=e.sent;case 22:return c=e.t1,e.abrupt("return",!1!==c&&"object"!=typeof c||c);case 24:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"writeNavState",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r,n,o,a){var i,u,s,c,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=l.length>5&&void 0!==l[5]?l[5]:0,u=l.length>6?l[6]:void 0,!this.busy){e.next=4;break}return e.abrupt("return",(console.warn("[ion-router] router is busy, transition was cancelled"),!1));case 4:return this.busy=!0,(s=this.routeChangeEvent(o,a))&&this.ionRouteWillChange.emit(s),e.next=9,h(t,r,n,i,!1,u);case 9:return c=e.sent,e.abrupt("return",(this.busy=!1,c&&console.debug("[ion-router] route changed",o),s&&this.ionRouteDidChange.emit(s),c));case 11:case"end":return e.stop()}}),e,this)}))),function(e,r,n,o,a){return t.apply(this,arguments)})},{key:"setPath",value:function(e,t,r){var n=this;this.state++,function(e,t,r,o,a,i,u){var s=c([].concat(_toConsumableArray(l(n.root)),_toConsumableArray(o)));r&&(s="#"+s),void 0!==u&&(s=s+"?"+u),"forward"===a?e.pushState(i,"",s):e.replaceState(i,"",s)}(window.history,0,this.useHash,e,t,this.state,r)}},{key:"getPath",value:function(){var e=this;return function(t,r,n){var o=t.pathname;if(e.useHash){var a=t.hash;o="#"===a[0]?a.slice(1):""}return function(e,t){if(e.length>t.length)return null;if(e.length<=1&&""===e[0])return t;for(var r=0;r<e.length;r++)if(e[r].length>0&&e[r]!==t[r])return null;return t.length===e.length?[""]:t.slice(e.length)}(l(r),l(o))}(window.location,this.root)}},{key:"routeChangeEvent",value:function(e,t){var r=this.previousPath,n=c(e);return this.previousPath=n,n===r?null:{from:r,redirectedFrom:t?c(t):null,to:n}}},{key:"el",get:function(){return Object(n.m)(this)}}]),e}(),j=function(){function e(t){var r=this;_classCallCheck(this,e),Object(n.q)(this,t),this.routerDirection="forward",this.onClick=function(e){Object(i.d)(r.href,e,r.routerDirection,r.routerAnimation)}}return _createClass(e,[{key:"render",value:function(){var e,t=Object(o.b)(this),r={href:this.href,rel:this.rel,target:this.target};return Object(n.l)(n.c,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(i.a)(this.color)),(e={},_defineProperty(e,t,!0),_defineProperty(e,"ion-activatable",!0),e))},Object(n.l)("a",Object.assign({},r),Object(n.l)("slot",null)))}}]),e}();j.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}]);