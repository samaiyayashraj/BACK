(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2b8bf53d1fcd9a2a2c81":function(e,t,r){"use strict";r.r(t);var n,o=r("8af190b70a6bc55c6f1b"),c=r("0d7f0986bcd2f33d8a2a"),i=r("ab039aecd4a1d4fedc0e"),a=r("e95a63b25fb92ed15721"),f=r("0d939196e59ed73c94e6"),u=r("f995f408038b073fa62d"),s=r("307bc763ddd01b6c70af"),l=r("14fe06d809ce8c80d35b"),p=r("776f7b15d44f70e7504d"),d=r.n(p),b=r("8f2e40f1d3c6b08b20da"),y=r.n(b),m=(r("08d58f7c002b05855632"),r("30aa8a25e35667139b51")),v=Object(i.defineMessages)({pageTitle:{id:"".concat("app.components.ConfirmCodePage",".pageTitle"),defaultMessage:"Confirm Code"}});function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,r,o){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var a=new Array(i),f=0;f<i;f++)a[f]=arguments[f+3];t.children=a}if(t&&c)for(var u in c)void 0===t[u]&&(t[u]=c[u]);else t||(t=c||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=_(e);if(t){var o=_(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===h(t)||"function"===typeof t))return t;return S(e)}(this,r)}}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=g(f.Grid,{item:!0,lg:6,xs:12},void 0,g(f.Grid,{className:"accountImage"},void 0,g(s.a,{src:d.a,alt:"logo"}))),k=g(f.Typography,{variant:"h3"},void 0,"Code varification"),D=g(f.Typography,{className:"text",paragraph:!0},void 0,"Enter the varification code which was"," ",g(f.Typography,{component:"span"},void 0,"sent to your email.")),N=g(f.Button,{type:"submit",className:"submitButton"},void 0,"Send"),R=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,o["Component"]);var t,r,n,i=P(a);function a(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return C(S(e=i.call.apply(i,[this].concat(r))),"state",{code:"1234"}),C(S(e),"submitHandler",function(t){t.preventDefault(),m.toast.success("Successfully confirmed"),e.props.history.push("/login")}),e}return t=a,(r=[{key:"t",value:function(e,t){return this.props.intl.formatMessage(e,t)}},{key:"render",value:function(){return g(o.Fragment,{},void 0,g(c.Helmet,{},void 0,g(u.a,{},void 0,this.t(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(t){C(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},v.pageTitle)))),g(f.Grid,{className:"accountArea"},void 0,g(f.Grid,{className:"container",container:!0},void 0,T,g(f.Grid,{item:!0,lg:6,xs:12},void 0,g(f.Grid,{className:"accountContent"},void 0,k,D,g(l.a,{onSubmit:this.submitHandler},void 0,g(y.a,{className:"codeVarificationInput",value:this.state.code,type:"text",autoFocus:!1,name:"code",isValid:!0,fields:4}),N))))))}}])&&w(t.prototype,r),n&&w(t,n),a}();t.default=Object(i.injectIntl)(Object(a.withRouter)(R))}}]);