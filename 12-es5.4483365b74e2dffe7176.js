function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,n):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{TUkU:function(e,n,t){"use strict";t.r(n),t.d(n,"Tab2PageModule",(function(){return S}));var o,r,i,c=t("TEn/"),l=t("ofXK"),a=t("3Pt+"),s=t("tyNb"),u=t("fXoL"),b=t("mrSG"),f=t("nslc"),p=((r=function(){function e(n,t,o){_classCallCheck(this,e),this.navparams=n,this.modalcontroller=t,this.service=o,this.socket={}}return _createClass(e,[{key:"closeModal",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{try{this.modalcontroller.dismiss({dismissed:!0}).then((function(t){n&&e.service.setNewSocket(e.socket)}),(function(e){console.error(e)}))}catch(t){console.error(t)}}catch(t){console.error(t)}}},{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||r)(u.Kb(c.z),u.Kb(c.y),u.Kb(f.a))},r.\u0275cmp=u.Eb({type:r,selectors:[["app-createsocket"]],decls:21,vars:3,consts:[[1,"socket-creator"],["size","12",1,"header"],[3,"click"],["name","close"],["size","12"],["size","6"],["placeholder","URL",3,"ngModel","ngModelChange"],["size","3"],["placeholder","PORT",3,"ngModel","ngModelChange"],["placeholder","Controller ID",3,"ngModel","ngModelChange"],["size","12",2,"text-align","center"],["color","primary",3,"click"]],template:function(e,n){1&e&&(u.Ob(0,"ion-content",0),u.Ob(1,"ion-row"),u.Ob(2,"ion-col",1),u.Ob(3,"ion-label"),u.kc(4,"Add Socket"),u.Nb(),u.Ob(5,"ion-button",2),u.Vb("click",(function(){return n.closeModal()})),u.Lb(6,"ion-icon",3),u.Nb(),u.Nb(),u.Ob(7,"ion-col",4),u.Ob(8,"ion-row"),u.Ob(9,"ion-col",5),u.Ob(10,"ion-item"),u.Ob(11,"ion-input",6),u.Vb("ngModelChange",(function(e){return n.socket.websocketUrl=e})),u.Nb(),u.Nb(),u.Nb(),u.Ob(12,"ion-col",7),u.Ob(13,"ion-item"),u.Ob(14,"ion-input",8),u.Vb("ngModelChange",(function(e){return n.socket.websocketPort=e})),u.Nb(),u.Nb(),u.Nb(),u.Ob(15,"ion-col",7),u.Ob(16,"ion-item"),u.Ob(17,"ion-input",9),u.Vb("ngModelChange",(function(e){return n.socket.controllerId=e})),u.Nb(),u.Nb(),u.Nb(),u.Ob(18,"ion-col",10),u.Ob(19,"ion-button",11),u.Vb("click",(function(){return n.closeModal(!0)})),u.kc(20,"Add Socket"),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb()),2&e&&(u.Ab(11),u.cc("ngModel",n.socket.websocketUrl),u.Ab(3),u.cc("ngModel",n.socket.websocketPort),u.Ab(3),u.cc("ngModel",n.socket.controllerId))},directives:[c.d,c.p,c.c,c.m,c.b,c.h,c.l,c.k,c.B,a.d,a.e],styles:[".socket-creator[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:block;background:#00f;font-family:courier;padding:15px;color:#fff;font-size:20px}.socket-creator[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{position:relative;top:12px}.socket-creator[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{float:right}"]}),r),d=((o=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"transform",value:function(e,n){return e.filter((function(e){return e.MasterControllerId==n}))}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275pipe=u.Jb({name:"filter",type:o,pure:!0}),o),h=t("6NiB"),m=((i=function(){function e(){_classCallCheck(this,e),this.profile={},this.itemClick=new u.n}return _createClass(e,[{key:"image",value:function(e){try{var n=btoa(String.fromCharCode.apply(String,_toConsumableArray(new Uint8Array(e)))),t=n.split(",")[0],o="data:image/png;base64";return t!=o?o+","+n:n}catch(r){console.error(r)}}},{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=u.Eb({type:i,selectors:[["app-profile"]],inputs:{profile:"profile"},outputs:{itemClick:"itemClick"},decls:9,vars:3,consts:[["slot","start"],[3,"src"]],template:function(e,n){1&e&&(u.Ob(0,"ion-item"),u.Ob(1,"ion-thumbnail",0),u.Lb(2,"img",1),u.Nb(),u.Ob(3,"ion-label"),u.Ob(4,"h1"),u.kc(5),u.Nb(),u.Ob(6,"p"),u.kc(7),u.Nb(),u.Nb(),u.kc(8," {{profile|json}\n"),u.Nb()),2&e&&(u.Ab(2),u.cc("src",n.image(null==n.profile?null:n.profile.ImageData),u.gc),u.Ab(3),u.lc(null==n.profile?null:n.profile.UserName),u.Ab(2),u.mc("",null==n.profile?null:n.profile.UserId," "))},directives:[c.l,c.t,c.m],styles:[""]}),i);function y(e,n){1&e&&u.Lb(0,"app-profile",4),2&e&&u.cc("profile",n.profile)}var g=function(e){return{profile:e}};function k(e,n){if(1&e&&u.Mb(0,5),2&e){var t=n.$implicit;u.Xb();var o=u.fc(1);u.cc("ngTemplateOutlet",o)("ngTemplateOutletContext",u.dc(2,g,t))}}var v,C=((v=function(){function e(n,t){_classCallCheck(this,e),this.service=n,this.socketSer=t,this.profiles=[],this.list_header="Profiles",this.error={},this.connected={}}return _createClass(e,[{key:"open",value:function(e){var n=this,t="".concat(e.websocketUrl,":").concat(e.websocketPort),o=new WebSocket(t);o.onopen=function(){n.connected={connected:"opened",socket:t,error:!1}},o.onmessage=function(e){n.profiles=[].concat(_toConsumableArray(n.profiles),[e])}}},{key:"createSocket",value:function(e){this.open(e)}},{key:"ngOnChanges",value:function(e){e.hasOwnProperty("CosecDevice")&&e.CosecDevice.currentValue&&this.createSocket(e.CosecDevice.currentValue)}},{key:"doInfinite",value:function(e){return console.log("Begin async operation"),new Promise((function(e){setTimeout((function(){console.log("Async operation has ended"),e()}),500)}))}},{key:"ionViewWillEnter",value:function(){}},{key:"ngOnInit",value:function(){}},{key:"ionViewWillLeave",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||v)(u.Kb(f.a),u.Kb(h.b))},v.\u0275cmp=u.Eb({type:v,selectors:[["app-listing"]],viewQuery:function(e,n){var t;1&e&&u.nc(c.i,!0),2&e&&u.ec(t=u.Wb())&&(n.infiniteScroll=t.first)},inputs:{CosecDevice:"CosecDevice"},features:[u.zb([d]),u.yb],decls:10,vars:4,consts:[["Profile",""],["id","iframeDiv"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],[3,"ionInfinite"],[3,"profile"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,n){1&e&&(u.ic(0,y,1,1,"ng-template",null,0,u.jc),u.Ob(2,"div"),u.kc(3),u.Yb(4,"json"),u.Nb(),u.Ob(5,"ion-list"),u.Lb(6,"div",1),u.ic(7,k,1,4,"ng-container",2),u.Nb(),u.Ob(8,"ion-infinite-scroll",3),u.Vb("ionInfinite",(function(e){return n.doInfinite(e)})),u.Lb(9,"ion-infinite-scroll-content"),u.Nb()),2&e&&(u.Ab(3),u.mc(" ",u.Zb(4,2,n.connected),"\n"),u.Ab(4),u.cc("ngForOf",n.profiles))},directives:[c.n,l.i,c.i,c.j,m,l.j],pipes:[l.e],styles:[""]}),v);function O(e,n){if(1&e&&(u.Ob(0,"ion-col",5),u.Lb(1,"app-listing",6),u.Nb()),2&e){var t=n.$implicit,o=u.Xb();u.cc("size",12/o.all_devices.length),u.Ab(1),u.cc("CosecDevice",t)}}var _,w,N,A,M=((_=function(){function e(n,t){var o=this;_classCallCheck(this,e),this.modalController=n,this.service=t,this.all_devices=[];try{this.service.addSocketListner.subscribe((function(e){o.all_devices=[].concat(_toConsumableArray(o.all_devices),[e])}))}catch(r){console.error(r)}}return _createClass(e,[{key:"presentModal",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:p,cssClass:"my-custom-class"});case 2:return n=e.sent,e.next=5,n.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||_)(u.Kb(c.y),u.Kb(f.a))},_.\u0275cmp=u.Eb({type:_,selectors:[["app-device-container"]],decls:6,vars:1,consts:[["vertical","bottom","horizontal","end","slot","fixed",1,"ion-fab-create"],["name","add",3,"click"],["size","12"],[2,"margin-top","40px"],[3,"size",4,"ngFor","ngForOf"],[3,"size"],[3,"CosecDevice"]],template:function(e,n){1&e&&(u.Ob(0,"ion-fab",0),u.Ob(1,"ion-fab-button"),u.Ob(2,"ion-icon",1),u.Vb("click",(function(){return n.presentModal()})),u.Nb(),u.Nb(),u.Nb(),u.Ob(3,"ion-col",2),u.Ob(4,"ion-row",3),u.ic(5,O,2,2,"ion-col",4),u.Nb(),u.Nb()),2&e&&(u.Ab(5),u.cc("ngForOf",n.all_devices))},directives:[c.e,c.f,c.h,c.c,c.p,l.i,C],styles:["ion-fab-button[_ngcontent-%COMP%]{position:relative;top:-60px}"]}),_),I=[{path:"",component:(w=function e(){_classCallCheck(this,e)},w.\u0275fac=function(e){return new(e||w)},w.\u0275cmp=u.Eb({type:w,selectors:[["app-tab2"]],decls:6,vars:1,consts:[[3,"fullscreen"],["collapse","condense"],["size","large"]],template:function(e,n){1&e&&(u.Ob(0,"ion-content",0),u.Ob(1,"ion-header",1),u.Ob(2,"ion-toolbar"),u.Ob(3,"ion-title",2),u.kc(4,"List"),u.Nb(),u.Nb(),u.Nb(),u.Lb(5,"app-device-container"),u.Nb()),2&e&&u.cc("fullscreen",!0)},directives:[c.d,c.g,c.v,c.u,M],styles:[""]}),w)}],P=((N=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ib({type:N}),N.\u0275inj=u.Hb({factory:function(e){return new(e||N)},imports:[[s.i.forChild(I)],s.i]}),N),T=t("qtYk"),S=((A=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ib({type:A}),A.\u0275inj=u.Hb({factory:function(e){return new(e||A)},imports:[[c.w,l.b,a.a,T.a,P]]}),A)}}]);