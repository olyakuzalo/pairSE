!function(){var t=function(t){var e={exports:{}};return t.call(e.exports,e,e.exports),e.exports},e=(window,function(){function t(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){i=!0,o=u}finally{try{!r&&s["return"]&&s["return"]()}finally{if(i)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),n=function(t){return t&&t.__esModule?t:{"default":t}},r=t(function(t,e){(function(){var e=[].slice;!function(e,n){return"function"==typeof e.define&&e.define.amd?e.define([],n):t.exports?t.exports=n():e.Twine=n()}(this,function(){var t,n,r,i,o,a,s,u,l,c,d,h,p,f,m,g,y,v,_,b,S,w,C,A,E,T,x,D,k,R,P,M,N,L,O,I,B,F,H,U;for(t={},t.shouldDiscardEvent={},u={},P={},E=0,N=null,S=/^[a-z]\w*(\.[a-z]\w*|\[\d+\])*$/i,R=!1,L=null,a=null,t.getAttribute=function(t,e){return t.getAttribute("data-"+e)||t.getAttribute(e)},t.reset=function(t,e){var n,r,i,o,a,s;null==e&&(e=document.documentElement);for(i in u)if(n=null!=(s=u[i])?s.bindings:void 0)for(r=0,o=n.length;o>r;r++)a=n[r],a.teardown&&a.teardown();return u={},N=t,L=e,L.bindingId=E=1,this},t.bind=function(e,n){return null==e&&(e=L),null==n&&(n=t.context(e)),i(n,e,p(e),!0)},t.afterBound=function(t){return a?a.push(t):t()},i=function(e,n,r,u){var l,d,h,p,g,y,v,_,S,w,C,A,T,x,D,k,R,P,M,L,I,B,F,$,H,U,z,j,q,V;if(a=[],C=null,n.bindingId&&t.unbind(n),S=t.getAttribute(n,"define-array")){F=s(n,e,S),null==r&&(r={});for(x in r)V=r[x],F.hasOwnProperty(x)||(F[x]=V);r=F,C=c(n),C.indexes=r}for(p=null,$=n.attributes,A=0,R=$.length;R>A;A++)d=$[A],q=d.name,m(q)&&(q=q.slice(5)),_=t.bindingTypes[q],_&&(null==p&&(p=[]),w=d.value,p.push([q,_,w]));if(p)for(null==C&&(C=c(n)),null==C.bindings&&(C.bindings=[]),null==C.indexes&&(C.indexes=r),H=p.sort(o),T=0,P=H.length;P>T;T++)U=H[T],l=U[0],_=U[1],w=U[2],h=_(n,e,w,C),h&&C.bindings.push(h);for((B=t.getAttribute(n,"context"))&&(D=b(n,B),"$root"===D[0]&&(e=N,D=D.slice(1)),e=f(e,D)||O(e,D,{})),(C||B||u)&&(null==C&&(C=c(n)),C.childContext=e,null!=r&&null==C.indexes&&(C.indexes=r)),y=a,z=n.children||[],k=0,M=z.length;M>k;k++)v=z[k],i(e,v,null!=B?null:r);for(t.count=E,j=y||[],I=0,L=j.length;L>I;I++)(g=j[I])();return a=null,t},c=function(t){var e;return null==t.bindingId&&(t.bindingId=++E),null!=u[e=t.bindingId]?u[e]:u[e]={}},t.refresh=function(){return R?void 0:(R=!0,setTimeout(t.refreshImmediately,0))},k=function(t){var e,n,r,i;if(t.bindings)for(i=t.bindings,e=0,n=i.length;n>e;e++)r=i[e],null!=r.refresh&&r.refresh()},t.refreshImmediately=function(){var t,e;R=!1;for(e in u)t=u[e],k(t)},t.register=function(t,e){if(P[t])throw new Error("Twine error: '"+t+"' is already registered with Twine");return P[t]=e},t.change=function(t,e){var n;return null==e&&(e=!1),n=document.createEvent("HTMLEvents"),n.initEvent("change",e,!0),t.dispatchEvent(n)},t.unbind=function(e){var n,r,i,o,a,s,l,c,d,h;if(i=e.bindingId){if(n=null!=(d=u[i])?d.bindings:void 0)for(o=0,s=n.length;s>o;o++)c=n[o],c.teardown&&c.teardown();delete u[i],delete e.bindingId}for(h=e.children||[],a=0,l=h.length;l>a;a++)r=h[a],t.unbind(r);return this},t.context=function(t){return h(t,!1)},t.childContext=function(t){return h(t,!0)},h=function(t,e){for(var n,r,i;t;){if(t===L)return N;if(e||(t=t.parentNode),!t)return console.warn("Unable to find context; please check that the node is attached to the DOM that Twine has bound, or that bindings have been initiated on this node's DOM"),null;if((r=t.bindingId)&&(n=null!=(i=u[r])?i.childContext:void 0))return n;e&&(t=t.parentNode)}},p=function(t){var e,n,r;for(e=null;t;){if(n=t.bindingId)return null!=(r=u[n])?r.indexes:void 0;t=t.parentNode}},t.contextKey=function(t,e){var n,r,i,o,a;for(o=[],n=function(t){var n,r;for(n in t)if(r=t[n],e===r){o.unshift(n);break}return e=t};t&&t!==L&&(t=t.parentNode);)(i=t.bindingId)&&(r=null!=(a=u[i])?a.childContext:void 0)&&n(r);return t===L&&n(N),o.join(".")},H=function(t){var e,n;return e=t.nodeName.toLowerCase(),"input"===e||"textarea"===e||"select"===e?"checkbox"===(n=t.getAttribute("type"))||"radio"===n?"checked":"value":"textContent"},b=function(t,e){var n,r,i,o,a,s,u;for(o=[],s=e.split("."),r=i=0,a=s.length;a>i;r=++i)if(e=s[r],-1!==(u=e.indexOf("[")))for(0===r?o.push.apply(o,_(e.substr(0,u),t)):o.push(e.substr(0,u)),e=e.substr(u);-1!==(n=e.indexOf("]"));)o.push(parseInt(e.substr(1,n),10)),e=e.substr(n+1);else 0===r?o.push.apply(o,_(e,t)):o.push(e);return o},_=function(t,e){var n,r,i;return n=null!=(r=u[e.bindingId])&&null!=(i=r.indexes)?i[t]:void 0,null!=n?[t,n]:[t]},f=function(t,e){var n,r,i;for(n=0,i=e.length;i>n;n++)r=e[n],null!=t&&(t=t[r]);return t},O=function(t,n,r){var i,o,a,s,u,l;for(l=n,n=2<=l.length?e.call(l,0,i=l.length-1):(i=0,[]),s=l[i++],o=0,u=n.length;u>o;o++)a=n[o],t=null!=t[a]?t[a]:t[a]={};return t[s]=r},F=function(t){return[].map.call(t.attributes,function(t){return t.name+"="+JSON.stringify(t.value)}).join(" ")},U=function(t,e,n){var r,i,o;if(g(t)&&(o=b(n,t)))return"$root"===o[0]?function(t,e){return f(e,o)}:function(t,e){return f(t,o)};t="return "+t,A(n)&&(t="with($arrayPointers) { "+t+" }"),M(e)&&(t="with($registry) { "+t+" }");try{return new Function(e,"with($context) { "+t+" }")}catch(i){throw r=i,"Twine error: Unable to create function on "+n.nodeName+" node with attributes "+F(n)}},M=function(t){return/\$registry/.test(t)},A=function(t){var e;return null!=t.bindingId&&(null!=(e=u[t.bindingId])?e.indexes:void 0)},n=function(t,e){var n,r,i,o;if(r=A(t),!r)return{};o={};for(i in r)n=r[i],o[i]=e[i][n];return o},g=function(t){return"true"!==t&&"false"!==t&&"null"!==t&&"undefined"!==t&&S.test(t)},m=function(t){return"d"===t[0]&&"a"===t[1]&&"t"===t[2]&&"a"===t[3]&&"-"===t[4]},d=function(t){var e;return e=document.createEvent("CustomEvent"),e.initCustomEvent("bindings:change",!0,!1,{}),t.dispatchEvent(e)},o=function(t,e){var n,r,i;return r=t[0],i=e[0],n={define:1,bind:2,eval:3},n[r]?n[i]?n[r]-n[i]:-1:1},t.bindingTypes={bind:function(e,r,i){var o,a,s,u,l,c,h,p,m,y,v,_;return _=H(e),v=e[_],l=void 0,m=void 0,a="radio"===e.getAttribute("type"),s=U(i,"$context,$root,$arrayPointers",e),h=function(){var t;return t=s.call(e,r,N,n(e,r)),t!==l&&(l=t,t!==e[_])?(e[_]=a?t===e.value:t,d(e)):void 0},g(i)?(p=function(){if(a){if(!e.checked)return;return O(r,u,e.value)}return O(r,u,e[_])},u=b(e,i),y="textContent"!==_&&"hidden"!==e.type,"$root"===u[0]&&(r=N,u=u.slice(1)),null==v||!y&&""===v||null!=(c=f(r,u))||p(),y&&(o=function(){return f(r,u)!==this[_]?(p(),t.refreshImmediately()):void 0},$(e).on("input keyup change",o),m=function(){return $(e).off("input keyup change",o)}),{refresh:h,teardown:m}):{refresh:h}},"bind-show":function(t,e,r){var i,o;return i=U(r,"$context,$root,$arrayPointers",t),o=void 0,{refresh:function(){var r;return r=!i.call(t,e,N,n(t,e)),r!==o?$(t).toggleClass("hide",o=r):void 0}}},"bind-class":function(t,e,r){var i,o;return i=U(r,"$context,$root,$arrayPointers",t),o={},{refresh:function(){var r,a,s;a=i.call(t,e,N,n(t,e));for(r in a)s=a[r],!o[r]!=!s&&$(t).toggleClass(r,!!s);return o=a}}},"bind-attribute":function(t,e,r){var i,o;return i=U(r,"$context,$root,$arrayPointers",t),o={},{refresh:function(){var r,a,s;a=i.call(t,e,N,n(t,e));for(r in a)s=a[r],o[r]!==s&&$(t).attr(r,s||null);return o=a}}},define:function(t,e,r){var i,o,a,s;i=U(r,"$context,$root,$registry,$arrayPointers",t),a=i.call(t,e,N,P,n(t,e));for(o in a)s=a[o],e[o]=s},eval:function(t,e,r){var i;i=U(r,"$context,$root,$registry,$arrayPointers",t),i.call(t,e,N,P,n(t,e))}},s=function(t,e,n){var r,i,o,a,s;r=U(n,"$context,$root",t),a=r.call(t,e,N),i={};for(o in a){if(s=a[o],null==e[o]&&(e[o]=[]),!(e[o]instanceof Array))throw"Twine error: expected '"+o+"' to be an array";i[o]=e[o].length,e[o].push(s)}return i},B=function(e,r){var i;return i="checked"===e||"indeterminate"===e||"disabled"===e||"readOnly"===e||"draggable"===e,t.bindingTypes["bind-"+r.toLowerCase()]=function(t,r,o){var a,s;return a=U(o,"$context,$root,$arrayPointers",t),s=void 0,{refresh:function(){var o;return o=a.call(t,r,N,n(t,r)),i&&(o=!!o),o!==s?(t[e]=s=o,"checked"===e?d(t):void 0):void 0}}}},x=["placeholder","checked","indeterminate","disabled","href","title","readOnly","src","draggable"],y=0,w=x.length;w>y;y++)r=x[y],B(r,r);for(B("innerHTML","unsafe-html"),T=function(e){var n;return!("submit"!==e.type&&"a"!==e.currentTarget.nodeName.toLowerCase()||"false"!==(n=t.getAttribute(e.currentTarget,"allow-default"))&&n!==!1&&0!==n&&void 0!==n&&null!==n)},I=function(e){return t.bindingTypes["bind-event-"+e]=function(r,i,o){var a;return a=function(a,s){var u,l;return l="function"==typeof(u=t.shouldDiscardEvent)[e]?u[e](a):void 0,(l||T(a))&&a.preventDefault(),l?void 0:(U(o,"$context,$root,$arrayPointers,event,data",r).call(r,i,N,n(r,i),a,s),t.refreshImmediately())},$(r).on(e,a),{teardown:function(){return $(r).off(e,a)}}}},D=["click","dblclick","mouseenter","mouseleave","mouseover","mouseout","mousedown","mouseup","submit","dragenter","dragleave","dragover","drop","drag","change","keypress","keydown","keyup","input","error","done","success","fail","blur","focus","load","paste"],v=0,C=D.length;C>v;v++)l=D[v],I(l);return t})}).call(this)});t(function(t,e){window.Twine=r}),t(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=window.Twine,window.Bindings=null!=e["default"]?e["default"]:e}),t(function(t,r){"use strict";function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return{}};h=t}function o(t){location.href!==l&&(c={});var n=void 0;if(null!=h&&(n=h()||{},u["default"].reset(n),t||u["default"].bind(),h=null),t){var r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var p=a.value;u["default"].bind(p)}}catch(f){i=!0,o=f}finally{try{!r&&s["return"]&&s["return"]()}finally{if(i)throw o}}}var m=!0,g=!1,y=void 0;try{for(var v,_=d[Symbol.iterator]();!(m=(v=_.next()).done);m=!0){var b=e(v.value,2),S=b[0],w=b[1];w(S)}}catch(f){g=!0,y=f}finally{try{!m&&_["return"]&&_["return"]()}finally{if(g)throw y}}d.length=0,u["default"].refreshImmediately(),n&&"function"==typeof n.pageLoaded&&n.pageLoaded()}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=i;var a=n($),s=n(_),u=n(Twine),l=location.href,c={},d=[],h=void 0;i.getLastUrl=function(){return l},i.processMessage=function(t,e){var n=u["default"].context(document.querySelector("body"));n&&"function"==typeof n.processMessage&&n.processMessage(t,e)},i.onRefresh=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;e>r;r++)n[r-1]=arguments[r];var i=void 0,o=void 0;n[1]?(i=n[0],o=n[1]):o=n[0],i&&u["default"].afterBound(function(){var e=u["default"].contextKey(i,t),n=c[e];n&&d.push([n,o]),c[e]=t})},i.pushState=function(t){window.history.pushState({turbolinks:!0,url:t},null,t)},i.replaceState=function(t){window.history.replaceState({turbolinks:!0,url:t},null,t)},i.openPopup=function(t,e,n){var r={width:500,height:500,directories:"no",location:"no",menubar:"no",resizeable:"yes",scrollbars:"yes",toolbar:"no",status:"no"},o=s["default"].defaults(n,r),a=s["default"].map(o,function(t,e){return e+"="+t}).toString();i.open(t,e,a)},document.addEventListener("DOMContentLoaded",function(){return o()}),document.addEventListener("page:load",function(t){o(t.data),l=location.href}),document.addEventListener("page:before-partial-replace",function(t){var e=t.data,n=!0,r=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;u["default"].unbind(s)}}catch(l){r=!0,i=l}finally{try{!n&&a["return"]&&a["return"]()}finally{if(r)throw i}}}),document.addEventListener("page:after-node-removed",function(t){return a["default"](t.data).remove()}),a["default"](document).ajaxComplete(function(){return u["default"].refresh()}),window.Page=null!=r["default"]?r["default"]:r});(function(){null==window.TurboGraft&&(window.TurboGraft={handlers:{}}),TurboGraft.tgAttribute=function(t){var e;return e="tg-"===t.slice(0,3)?"data-"+t:"data-tg-"+t},TurboGraft.getTGAttribute=function(t,e){var n;return n=TurboGraft.tgAttribute(e),t.getAttribute(n)||t.getAttribute(e)},TurboGraft.removeTGAttribute=function(t,e){var n;return n=TurboGraft.tgAttribute(e),t.removeAttribute(n),t.removeAttribute(e)},TurboGraft.hasTGAttribute=function(t,e){var n;return n=TurboGraft.tgAttribute(e),t.hasAttribute(n)||t.hasAttribute(e)},TurboGraft.querySelectorAllTGAttribute=function(t,e,n){var r;return null==n&&(n=null),r=TurboGraft.tgAttribute(e),n?t.querySelectorAll("["+r+"="+n+"], ["+e+"="+n+"]"):t.querySelectorAll("["+r+"], ["+e+"]")}}).call(this),function(){window.Click=function(){function t(t){this.event=t,this.event.defaultPrevented||(this._extractLink(),this._validForTurbolinks()&&(Turbolinks.visit(this.link.href),this.event.preventDefault()))}return t.installHandlerLast=function(e){return e.defaultPrevented?void 0:(document.removeEventListener("click",t.handle,!1),document.addEventListener("click",t.handle,!1))},t.handle=function(e){return new t(e)},t.prototype._extractLink=function(){var t;for(t=this.event.target;t.parentNode&&"A"!==t.nodeName;)t=t.parentNode;return"A"===t.nodeName&&0!==t.href.length?this.link=new Link(t):void 0},t.prototype._validForTurbolinks=function(){return null!=this.link&&!(this.link.shouldIgnore()||this._nonStandardClick())},t.prototype._nonStandardClick=function(){return this.event.which>1||this.event.metaKey||this.event.ctrlKey||this.event.shiftKey||this.event.altKey},t}()}.call(this),function(){window.ComponentUrl=function(){function t(e){return this.original=null!=e?e:document.location.href,this.original.constructor===t?this.original:void this._parse()}return t.prototype.withoutHash=function(){return this.href.replace(this.hash,"")},t.prototype.withoutHashForIE10compatibility=function(){return this.withoutHash()},t.prototype.hasNoHash=function(){return 0===this.hash.length},t.prototype._parse=function(){var t;return(null!=this.link?this.link:this.link=document.createElement("a")).href=this.original,t=this.link,this.href=t.href,this.protocol=t.protocol,this.host=t.host,this.hostname=t.hostname,this.port=t.port,this.pathname=t.pathname,this.search=t.search,this.hash=t.hash,this.origin=[this.protocol,"//",this.hostname].join(""),0!==this.port.length&&(this.origin+=":"+this.port),this.relative=[this.pathname,this.search,this.hash].join(""),this.absolute=this.href},t}()}.call(this),function(){window.CSRFToken=function(){function t(){}return t.get=function(t){var e;return null==t&&(t=document),{node:e=t.querySelector('meta[name="csrf-token"]'),token:null!=e&&"function"==typeof e.getAttribute?e.getAttribute("content"):void 0}},t.update=function(t){var e;return e=this.get(),null!=e.token&&null!=t&&e.token!==t?e.node.setAttribute("content",t):void 0},t}()}.call(this),function(){var t,e,n,r;e=function(t,e){return t.classList.contains(e)},n=function(t){return t.getAttribute("disabled")||e(t,"disabled")},r=function(t,e,n){var r,i;if(null==n&&(n=null),r=t.getAttribute("href")||t.getAttribute("action"),!r)throw new Error("Turbograft developer error: You did not provide a URL ('"+urlAttribute+"' attribute) for data-tg-remote");return TurboGraft.getTGAttribute(t,"remote-once")&&(TurboGraft.removeTGAttribute(t,"remote-once"),TurboGraft.removeTGAttribute(t,"tg-remote")),i={httpRequestType:e,httpUrl:r,fullRefresh:null!=TurboGraft.getTGAttribute(t,"full-refresh"),refreshOnSuccess:TurboGraft.getTGAttribute(t,"refresh-on-success"),refreshOnSuccessExcept:TurboGraft.getTGAttribute(t,"full-refresh-on-success-except"),refreshOnError:TurboGraft.getTGAttribute(t,"refresh-on-error"),refreshOnErrorExcept:TurboGraft.getTGAttribute(t,"full-refresh-on-error-except")},new TurboGraft.Remote(i,n,t)},TurboGraft.handlers.remoteMethodHandler=function(t){var e,n,i;i=t.clickTarget,e=TurboGraft.getTGAttribute(i,"tg-remote"),e&&(t.preventDefault(),n=r(i,e),n.submit())},TurboGraft.handlers.remoteFormHandler=function(t){var e,n,i;i=t.target,e=i.getAttribute("method"),TurboGraft.hasTGAttribute(i,"tg-remote")&&(t.preventDefault(),n=r(i,e,i),n.submit())},t=function(t,e,r){return null==r&&(r=!1),document.addEventListener(t,function(t){var r,i;for(i=t.target;i!==document&&null!=i;){if(("A"===i.nodeName||"BUTTON"===i.nodeName)&&(r=n(i),r&&t.preventDefault(),!r))return t.clickTarget=i,void e(t);i=i.parentNode}})},t("click",TurboGraft.handlers.remoteMethodHandler,!0),document.addEventListener("submit",function(t){return TurboGraft.handlers.remoteFormHandler(t)})}.call(this),function(){var t=function(t,n){function r(){this.constructor=t}for(var i in n)e.call(n,i)&&(t[i]=n[i]);return r.prototype=n.prototype,t.prototype=new r,t.__super__=n.prototype,t},e={}.hasOwnProperty,n=[].slice;window.Link=function(e){function r(t){return this.link=t,this.link.constructor===r?this.link:(this.original=this.link.href,void r.__super__.constructor.apply(this,arguments))}return t(r,e),r.HTML_EXTENSIONS=["html"],r.allowExtensions=function(){var t,e,i,o;for(e=1<=arguments.length?n.call(arguments,0):[],i=0,o=e.length;o>i;i++)t=e[i],r.HTML_EXTENSIONS.push(t);return r.HTML_EXTENSIONS},r.prototype.shouldIgnore=function(){return this._crossOrigin()||this._anchored()||this._nonHtml()||this._optOut()||this._target()},r.prototype._crossOrigin=function(){return this.origin!==(new ComponentUrl).origin},r.prototype._anchored=function(){var t;return(this.hash&&this.withoutHash())===(t=new ComponentUrl).withoutHash()||this.href===t.href+"#"},r.prototype._nonHtml=function(){return this.pathname.match(/\.[a-z]+$/g)&&!this.pathname.match(new RegExp("\\.(?:"+r.HTML_EXTENSIONS.join("|")+")?$","g"))},r.prototype._optOut=function(){var t,e;for(e=this.link;!t&&e!==document&&null!==e;)t=null!=e.getAttribute("data-no-turbolink"),e=e.parentNode;return t},r.prototype._target=function(){return 0!==this.link.target.length},r}(ComponentUrl)}.call(this),function(){var t,e,n;window.Page||(window.Page={}),Page.visit=function(t,e){return null==e&&(e={}),e.reload?window.location=t:Turbolinks.visit(t)},Page.refresh=function(t,e){var n,r,i;return null==t&&(t={}),n=t.url?t.url:t.queryParams?(r=$.param(t.queryParams),r?r="?"+r:void 0,location.pathname+r):location.href,t.response?(t.partialReplace=!0,t.onLoadFunction=e,i=t.response,delete t.response,Turbolinks.loadPage(null,i,t)):(t.partialReplace=!0,e&&(t.callback=e),Turbolinks.visit(n,t))},Page.open=function(){return window.open.apply(window,arguments)},n=[],Page.onReplace=function(t,r){if(!t||!r)throw new Error("Page.onReplace: Node and callback must both be specified");if(!e(r))throw new Error("Page.onReplace: Callback must be a function");return n.push({node:t,callback:r})},e=function(t){return!!(t&&t.constructor&&t.call&&t.apply)},t=function(t,e){return t.contains?t.contains(e):!!(t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY)},document.addEventListener("page:before-partial-replace",function(e){var r,i,o,a,s,u,l,c,d;for(c=e.data,d=[],o=0,s=n.length;s>o;o++){for(r=n[o],i=!1,a=0,u=c.length;u>a;a++)if(l=c[a],t(l,r.node)){r.callback(),i=!0;break}i||d.push(r)}return n=d}),document.addEventListener("page:before-replace",function(t){var e,r,i;for(r=0,i=n.length;i>r;r++)e=n[r],e.callback();return n=[]})}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};TurboGraft.Remote=function(){function e(e,n,r){var i,o,a,s;this.opts=e,this.onError=t(this.onError,this),this.onSuccess=t(this.onSuccess,this),this.initiator=n||r,this.actualRequestType="get"===(null!=(o=this.opts.httpRequestType)?o.toLowerCase():void 0)?"GET":"POST",this.useNativeEncoding=this.opts.useNativeEncoding,this.formData=this.createPayload(n),this.opts.refreshOnSuccess&&(this.refreshOnSuccess=this.opts.refreshOnSuccess.split(" ")),this.opts.refreshOnSuccessExcept&&(this.refreshOnSuccessExcept=this.opts.refreshOnSuccessExcept.split(" ")),this.opts.refreshOnError&&(this.refreshOnError=this.opts.refreshOnError.split(" ")),this.opts.refreshOnErrorExcept&&(this.refreshOnErrorExcept=this.opts.refreshOnErrorExcept.split(" ")),s=new XMLHttpRequest,"GET"===this.actualRequestType?(a=this.formData?this.opts.httpUrl+("?"+this.formData):this.opts.httpUrl,s.open(this.actualRequestType,a,!0)):s.open(this.actualRequestType,this.opts.httpUrl,!0),s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("Accept","text/html, application/xhtml+xml, application/xml"),this.contentType&&s.setRequestHeader("Content-Type",this.contentType),s.setRequestHeader("X-XHR-Referer",document.location.href),i=CSRFToken.get().token,i&&s.setRequestHeader("X-CSRF-Token",i),triggerEventFor("turbograft:remote:init",this.initiator,{xhr:s,initiator:this.initiator}),s.addEventListener("loadstart",function(t){return function(){return triggerEventFor("turbograft:remote:start",t.initiator,{xhr:s})}}(this)),s.addEventListener("error",this.onError),s.addEventListener("load",function(t){return function(e){return s.status<400?t.onSuccess(e):t.onError(e)}}(this)),s.addEventListener("loadend",function(t){return function(){var e;return"function"==typeof(e=t.opts).done&&e.done(),triggerEventFor("turbograft:remote:always",t.initiator,{initiator:t.initiator,xhr:s})}}(this)),this.xhr=s}return e.prototype.submit=function(){return this.xhr.send(this.formData)},e.prototype.createPayload=function(t){var e;return e=t?this.useNativeEncoding||t.querySelectorAll("[type='file'][name]").length>0?this.nativeEncodeForm(t):this.uriEncodeForm(t):"",e instanceof FormData||(this.contentType="application/x-www-form-urlencoded; charset=UTF-8",-1===e.indexOf("_method")&&this.opts.httpRequestType&&"GET"!==this.actualRequestType&&(e=this.formAppend(e,"_method",this.opts.httpRequestType))),e},e.prototype.formAppend=function(t,e,n){return t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(n)},e.prototype.uriEncodeForm=function(t){var e;return e="",this._iterateOverFormInputs(t,function(t){return function(n){return e=t.formAppend(e,n.name,n.value)}}(this)),e},e.prototype.formDataAppend=function(t,e){var n,r,i,o;if("file"===e.type)for(o=e.files,r=0,i=o.length;i>r;r++)n=o[r],t.append(e.name,n);else t.append(e.name,e.value);return t},e.prototype.nativeEncodeForm=function(t){var e;return e=new FormData,this._iterateOverFormInputs(t,function(t){return function(n){return e=t.formDataAppend(e,n)}}(this)),e},e.prototype._iterateOverFormInputs=function(t,e){var n,r,i,o,a,s,u;for(o=this._enabledInputs(t),u=[],n=0,a=o.length;a>n;n++)r=o[n],i=!r.disabled,s="checkbox"===r.type||"radio"===r.type,i&&r.name&&(s&&r.checked||!s)?u.push(e(r)):u.push(void 0);return u},e.prototype._enabledInputs=function(t){var e,n,r,i,o,a,s,u,l,c,d;if(d="input:not([type='reset']):not([type='button']):not([type='submit']):not([type='image']), select, textarea",a=Array.prototype.slice.call(t.querySelectorAll(d)),n=Array.prototype.slice.call(TurboGraft.querySelectorAllTGAttribute(t,"tg-remote-noserialize")),!n.length)return a;for(e=n,i=0,u=n.length;u>i;i++)c=n[i],e=e.concat(Array.prototype.slice.call(c.querySelectorAll(d)));for(r=[],s=0,l=a.length;l>s;s++)o=a[s],e.indexOf(o)<0&&r.push(o);return r},e.prototype.onSuccess=function(t){var e,n,r;return"function"==typeof(e=this.opts).success&&e.success(),r=t.target,triggerEventFor("turbograft:remote:success",this.initiator,{initiator:this.initiator,xhr:r}),(n=r.getResponseHeader("X-Next-Redirect"))?void Page.visit(n,{reload:!0}):TurboGraft.hasTGAttribute(this.initiator,"tg-remote-norefresh")?void 0:this.opts.fullRefresh&&this.refreshOnSuccess?Page.refresh({onlyKeys:this.refreshOnSuccess}):this.opts.fullRefresh?Page.refresh():this.refreshOnSuccess?Page.refresh({response:r,onlyKeys:this.refreshOnSuccess}):this.refreshOnSuccessExcept?Page.refresh({response:r,exceptKeys:this.refreshOnSuccessExcept}):Page.refresh({response:r})},e.prototype.onError=function(t){var e,n;return"function"==typeof(e=this.opts).fail&&e.fail(),n=t.target,triggerEventFor("turbograft:remote:fail",this.initiator,{initiator:this.initiator,xhr:n}),TurboGraft.hasTGAttribute(this.initiator,"tg-remote-norefresh")?triggerEventFor("turbograft:remote:fail:unhandled",this.initiator,{xhr:n}):this.opts.fullRefresh&&this.refreshOnError?Page.refresh({onlyKeys:this.refreshOnError}):this.opts.fullRefresh?Page.refresh():this.refreshOnError?Page.refresh({response:n,onlyKeys:this.refreshOnError}):this.refreshOnErrorExcept?Page.refresh({response:n,exceptKeys:this.refreshOnErrorExcept}):triggerEventFor("turbograft:remote:fail:unhandled",this.initiator,{xhr:n})},e}()}.call(this),function(){var t,e,n,r,i,o,a,s,u,l,c,d,h,p,f,m,g,y=function(t,e){return function(){return t.apply(e,arguments)}};e="[data-turbolinks-track]",n="turbolinksTrack",t="true",p={},h=null,g=function(){var t;return t=Object.keys(p).map(function(t){return p[t]}),Promise.all(t)},window.TurboHead=function(){function e(t,e){this.activeDocument=t,this.upstreamDocument=e,this._insertNewAssets=y(this._insertNewAssets,this),this.activeAssets=s(this.activeDocument),this.upstreamAssets=s(this.upstreamDocument),this.newScripts=this.upstreamAssets.filter(r("nodeName","SCRIPT")).filter(l("src",this.activeAssets)),this.newLinks=this.upstreamAssets.filter(r("nodeName","LINK")).filter(l("href",this.activeAssets))}return e._testAPI={reset:function(){return p={},h=null}},e.prototype.hasChangedAnonymousAssets=function(){var e,r,i,a;return r=this.upstreamAssets.filter(o(n,t)),e=this.activeAssets.filter(o(n,t)),e.length!==r.length?!0:(a=l("src",r),i=l("href",r),e.some(function(t){return a(t)||i(t)}))},e.prototype.hasNamedAssetConflicts=function(){return this.newScripts.concat(this.newLinks).filter(c(n,t)).some(a(n,this.activeAssets))},e.prototype.hasAssetConflicts=function(){return this.hasNamedAssetConflicts()||this.hasChangedAnonymousAssets()},e.prototype.waitForAssets=function(){return"function"==typeof h&&h({isCanceled:!0}),new Promise(function(t){return function(e){return h=e,g().then(t._insertNewAssets).then(g).then(e)}}(this))},e.prototype._insertNewAssets=function(){return f(this.activeDocument,this.newLinks),m(this.activeDocument,this.newScripts)},e}(),s=function(t){return[].slice.call(t.querySelectorAll(e))},r=function(t,e){return function(n){return n[t]===e}},i=function(t,e){return function(n){return e.some(function(e){return n[t]===e[t]})}},l=function(t,e){return function(n){return!e.some(function(e){return n[t]===e[t]})}},o=function(t,e){return function(n){return n.dataset[t]===e}},c=function(t,e){return function(n){return n.dataset[t]!==e}},a=function(t,e){return function(n){var r;return r=n.dataset[t],e.some(o(t,r))}},d=function(t,e){return function(n){var r;return r=n.dataset[t],!e.some(o(t,r))}},f=function(t,e){return e.forEach(function(e){var n;return n=e.cloneNode(),t.head.appendChild(n),triggerEvent("page:after-link-inserted",n)})},m=function(t,e){var n;return n=Promise.resolve(),e.forEach(function(e){return n=n.then(function(){return u(t,e)})}),n},u=function(t,e){var n,r,i,o,a,s;if(s=e.src,p[s])return p[s];for(o=t.createElement("SCRIPT"),a=e.attributes,r=0,i=a.length;i>r;r++)n=a[r],o.setAttribute(n.name,n.value);return o.appendChild(t.createTextNode(e.innerHTML)),p[s]=new Promise(function(e){var n;return n=function(t){return"error"===t.type&&triggerEvent("page:#script-error",t),o.removeEventListener("load",n),o.removeEventListener("error",n),e()},o.addEventListener("load",n),o.addEventListener("error",n),t.head.appendChild(o),triggerEvent("page:after-script-inserted",o)})}}.call(this),function(){var t,e,n,r,i,o,a,s,u,l,c,d;d=null,i=function(){return document.addEventListener("DOMContentLoaded",function(){return triggerEvent("page:change"),triggerEvent("page:update")},!0)},o=function(){return"undefined"!=typeof jQuery?jQuery(document).on("ajaxSuccess",function(t,e,n){return jQuery.trim(e.responseText)?triggerEvent("page:update"):void 0}):void 0},r=void 0!==window.history.state||navigator.userAgent.match(/Firefox\/2[6|7]/),e=window.history&&window.history.pushState&&window.history.replaceState&&r,window.triggerEvent=function(t,e){var n;return n=document.createEvent("Events"),e&&(n.data=e),n.initEvent(t,!0,!0),document.dispatchEvent(n)},window.triggerEventFor=function(t,e,n){var r;return r=document.createEvent("Events"),n&&(r.data=n),r.initEvent(t,!0,!0),e.dispatchEvent(r)},a=function(t){var e,n;return n=(null!=(e=document.cookie.match(new RegExp(t+"=(\\w+)")))?e[1].toUpperCase():void 0)||"",document.cookie=t+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/",n},c="GET"===(s=a("request_method"))||""===s,n=e&&c,t=document.addEventListener&&document.createEvent,t&&(i(),o()),l=function(t,e){var n;return n=e.parentNode.replaceChild(t,e),triggerEvent("page:after-node-removed",n)},u=function(t){var e;return e=t.parentNode.removeChild(t),triggerEvent("page:after-node-removed",e)},window.Turbolinks=function(){function t(){}var e,r,i,o,a,s,c,h,p,f,m,g,y,v,_,b,S,w,C,A,E,T,x,D,k,R,P,M;return o=null,a=null,C=null,p=function(t,e){return null==e&&(e={}),_(t)?void 0:(t=new ComponentUrl(t),D(),null==e.partialReplace&&(e.partialReplace=!1),null==e.onlyKeys&&(e.onlyKeys=[]),e.onLoadFunction=function(){return e.onlyKeys.length||R(),"function"==typeof e.callback?e.callback():void 0},f(t,e))},t.fullPageNavigate=function(t){return triggerEvent("page:before-full-refresh",{url:t}),document.location.href=t},t.pushState=function(t,e,n){return window.history.pushState(t,e,n)},t.replaceState=function(t,e,n){return window.history.replaceState(t,e,n)},f=function(e,n){var r,i,o;triggerEvent("page:fetch",{url:e.absolute}),null!=d&&(d.readyState=0,d.statusText="abort",d.abort()),d=new XMLHttpRequest,d.open("GET",e.withoutHashForIE10compatibility(),!0),d.setRequestHeader("Accept","text/html, application/xhtml+xml, application/xml"),d.setRequestHeader("X-XHR-Referer",C),null==n.headers&&(n.headers={}),i=n.headers;for(r in i)o=i[r],d.setRequestHeader(r,o);d.onload=function(){return d.status>=500?t.fullPageNavigate(e.absolute):t.loadPage(e,d,n),d=null},d.onerror=function(){return"abort"===d.statusText?void(d=null):t.fullPageNavigate(e.absolute)},d.send()},t.loadPage=function(e,n,r){var i,o;return null==r&&(r={}),triggerEvent("page:receive"),null==r.updatePushState&&(r.updatePushState=!0),(o=S(n))?r.partialReplace?(r.updatePushState&&A(e),M(o,n,r)):(i=new TurboHead(document,o),i.hasAssetConflicts()?t.fullPageNavigate(e.absolute):(r.updatePushState&&A(e),i.waitForAssets().then(function(t){return(null!=t?t.isCanceled:void 0)?void 0:M(o,n,r)}))):(triggerEvent("page:error",n),null!=e?t.fullPageNavigate(e.absolute):void 0)},M=function(t,e,n){var r,o;return r=i(null!=(o=t.querySelector("title"))?o.textContent:void 0,k(t.querySelector("body")),CSRFToken.get(t).token,"runScripts",n),n.updatePushState&&E(e),"function"==typeof n.onLoadFunction&&n.onLoadFunction(),triggerEvent("page:load",r)},i=function(t,n,r,i,o){var u,c;return null==o&&(o={}),t&&(document.title=t),null==o.onlyKeys&&(o.onlyKeys=[]),null==o.exceptKeys&&(o.exceptKeys=[]),o.onlyKeys.length?(c=[].concat(g(),m(o.onlyKeys)),u=x(c,n),e(u)&&P(),u):(x(g(),n),b(n),o.exceptKeys.length?T(o.exceptKeys,n):s(n),triggerEvent("page:before-replace"),l(n,document.body),null!=r&&CSRFToken.update(r),P(),i&&h(),a=window.history.state,triggerEvent("page:change"),triggerEvent("page:update"),void 0)},m=function(t){var e,n,r,i,o,a,s,u;for(a=[],e=0,i=t.length;i>e;e++)for(r=t[e],u=TurboGraft.querySelectorAllTGAttribute(document,"refresh",r),n=0,o=u.length;o>n;n++)s=u[n],a.push(s);return a},g=function(){var t,e,n,r,i;for(n=[],i=TurboGraft.querySelectorAllTGAttribute(document,"refresh-always"),t=0,e=i.length;e>t;t++)r=i[t],n.push(r);return n},e=function(t){var e,n,r;for(e=0,n=t.length;n>e;e++)if(r=t[e],r.querySelectorAll("input[autofocus], textarea[autofocus]").length>0)return!0;return!1},P=function(){var t,e;return t=(e=document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length-1],t&&document.activeElement!==t?t.focus():void 0},s=function(t){var e,n,r,i;for(i=TurboGraft.querySelectorAllTGAttribute(t,"refresh-never"),e=0,n=i.length;n>e;e++)r=i[e],u(r)},x=function(t,e){var n,r,i,o,a,s,d;for(triggerEvent("page:before-partial-replace",t),s=function(e){var n,r,i;for(n=0,r=t.length;r>n;n++)if(i=t[n],e!==i&&i.contains(e))return!0;return!1},d=[],r=0,i=t.length;i>r;r++)if(n=t[r],!s(n)){if(!(a=n.getAttribute("id")))throw new Error("Turbolinks refresh: Refresh key elements must have an id.");(o=e.querySelector("#"+a))?(o=o.cloneNode(!0),l(o,n),"SCRIPT"===o.nodeName&&"false"!==o.dataset.turbolinksEval?c(o):d.push(o)):TurboGraft.hasTGAttribute(n,"refresh-always")||u(n)}return d},v=function(t,e){var n,r,i,o,a,s;for(s=[],r=0,i=e.length;i>r;r++){if(n=e[r],!(o=n.getAttribute("id")))throw new Error("TurboGraft refresh: Kept nodes must have an id.");(a=t.querySelector("#"+o))?s.push(l(n,a)):s.push(void 0)}return s},b=function(t){var e,n,r,i,o;
for(e=[],o=TurboGraft.querySelectorAllTGAttribute(document,"tg-static"),n=0,r=o.length;r>n;n++)i=o[n],e.push(i);v(t,e)},T=function(t,e){var n,r,i,o,a,s,u,l;for(n=[],r=0,a=t.length;a>r;r++)for(o=t[r],l=TurboGraft.querySelectorAllTGAttribute(document,"refresh",o),i=0,s=l.length;s>i;i++)u=l[i],n.push(u);v(e,n)},h=function(){var t,e,n,r,i;for(i=Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')),t=0,e=i.length;e>t;t++)r=i[t],(""===(n=r.type)||"text/javascript"===n)&&c(r)},c=function(t){var e,n,r,i,o,a,s;for(n=document.createElement("script"),s=t.attributes,r=0,i=s.length;i>r;r++)e=s[r],n.setAttribute(e.name,e.value);n.appendChild(document.createTextNode(t.innerHTML)),a=t.parentNode,o=t.nextSibling,a.removeChild(t),a.insertBefore(n,o)},k=function(t){return t.innerHTML=t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi,""),t},A=function(e){(e=new ComponentUrl(e)).absolute!==C&&t.pushState({turbolinks:!0,url:e.absolute},"",e.absolute)},E=function(e){var n,r;(n=e.getResponseHeader("X-XHR-Redirected-To"))&&(n=new ComponentUrl(n),r=n.hasNoHash()?document.location.hash:"",t.replaceState(a,"",n.href+r))},D=function(){return C=document.location.href},t.rememberCurrentUrl=function(){return t.replaceState({turbolinks:!0,url:document.location.href},"",document.location.href)},t.rememberCurrentState=function(){return a=window.history.state},w=function(t){return window.scrollTo(t.positionX,t.positionY)},R=function(){return document.location.hash?document.location.href=document.location.href:window.scrollTo(0,0)},_=function(t){return!triggerEvent("page:before-change",t)},S=function(t){var e,n,r;return e=function(){var e;return 422===t.status?!1:400<=(e=t.status)&&600>e},r=function(){return t.getResponseHeader("Content-Type").match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)},!e()&&r()?n=o(t.responseText):void 0},y=function(e){var n;return(null!=(n=e.state)?n.turbolinks:void 0)?t.visit(e.target.location.href):void 0},r=function(t){return setTimeout(t,500)},o=function(t){var e;return/<(html|body)/i.test(t)?(e=document.documentElement.cloneNode(),e.innerHTML=t):(e=document.documentElement.cloneNode(!0),e.querySelector("body").innerHTML=t),e.head=e.querySelector("head"),e.body=e.querySelector("body"),e},n?(t.visit=p,t.rememberCurrentUrl(),t.rememberCurrentState(),document.addEventListener("click",Click.installHandlerLast,!0),r(function(){return window.addEventListener("popstate",y,!1)})):t.visit=function(t){return document.location.href=t},t}()}.call(this);t(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=window.Turbograft,window.Turbograft=null!=e["default"]?e["default"]:e}),t(function(t,e){"use strict";window.__admin_bundles=window.__admin_bundles||{},window.__admin_bundles.tnt=!0})}();