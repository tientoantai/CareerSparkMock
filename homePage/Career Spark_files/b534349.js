/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}return null};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}return null}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false);return null}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){if(J[a7]){return J[a7].distance}return undefined}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}}));
var console = console || {};
console.log = console.log || function() {};

// detect IE version without jQuery
var _ie = (function(){
    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');
    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );
    return v > 4 ? v : undef;
}());

var s4 = function() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};

var guid = function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};

// load required JavaScript files
/*
head.load(
    (_ie && _ie < 9) ? "vendor/excanvas/excanvas.compiled.js" : "",
    {modernizr: "vendor/modernizr/modernizr.min.js"},
    {jquery: "vendor/jquery/jquery-1.10.2.min.js"},
    "vendor/jquery/jquery-ui-1.10.3.custom.min.js",
    "vendor/jquery/jquery.knob.min.js",
    "vendor/jquery/jquery.flexText.min.js",
    "vendor/jquery/jvfloat.js",
    "vendor/jquery/select2.min.js",
    "vendor/jquery/opentip-jquery.min.js",
    "vendor/jquery/jquery.pikaday.min.js",
    "vendor/angular/angular.min.js",
    "vendor/angular/angular-route.min.js",
    "vendor/angular/ui-select2/select2.js",
    "vendor/angular/ui-sortable/sortable.js",
    "vendor/angular/ui-utils/modules/mask/mask.js",
    "vendor/vex/vex.combined.min.js",
    "vendor/classie/classie.js",
    "vendor/codrops/progressButton.js",
    "app/common/controllers/main.js",
    "app/landing/landing.js",
    "app/landing/category.js",
    "app/personal_info/personal_info.js",
    "app/education/education.js",
    "app/work_experience/work_experience.js",
    "app/work_experience/volunteer.js",
    "app/work_experience/volunteer_custom.js",
    "app/certifications/certifications.js",
    "app/personal_skills/personal_skills.js",
    "app/summary/summary.js",
    //"app/preview/preview.js",
    "app/app.js",

    function() {
        console.log('yo');
        // handle :checked support for ie8
        Modernizr.addTest('checked', function(){
        return Modernizr.testStyles(
            '#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}',
            function( elem ){
                var cb = document.createElement('input');
                cb.setAttribute("type", "checkbox");
                cb.setAttribute("checked", "checked");
                elem.appendChild(cb);
                return cb.offsetLeft === 20;
            });
        });
        Modernizr.load([
            {
                test: Modernizr.checked,
                nope: 'vendor/jquery/checked-polyfill.js',
                callback: function() {}
            }
        ]);

    }
);/**/
/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-csstransitions-inlinesvg-svg-svgclippaths-touch-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-ie8compat-load
 */
;window.Modernizr=function(a,b,c){function B(a){j.cssText=a}function C(a,b){return B(m.join(a+";")+(b||""))}function D(a,b){return typeof a===b}function E(a,b){return!!~(""+a).indexOf(b)}function F(a,b){for(var d in a){var e=a[d];if(!E(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function G(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:D(f,"function")?f.bind(d||b):f}return!1}function H(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return D(b,"string")||D(b,"undefined")?F(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),G(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return x("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},z={}.hasOwnProperty,A;!D(z,"undefined")&&!D(z.call,"undefined")?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:x(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},r.csstransforms3d=function(){var a=!!H("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return H("transition")},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(l.call(b.createElementNS(q.svg,"clipPath")))};for(var I in r)A(r,I)&&(w=I.toLowerCase(),e[w]=r[I](),u.push((e[w]?"":"no-")+w));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)A(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},B(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.mq=y,e.testProp=function(a){return F([a])},e.testAllProps=H,e.testStyles=x,e.prefixed=function(a,b,c){return b?H(a,b,c):H(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&document.documentMode===7});
/*
 AngularJS v1.2.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Q,T,s){'use strict';function z(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.15/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function $a(b){if(null==b||Aa(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:x(b)||M(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(D(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else if($a(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Ob(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Qc(b,
a,c){for(var d=Ob(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Pb(b){return function(a,c){b(c,a)}}function ab(){for(var b=ia.length,a;b;){b--;a=ia[b].charCodeAt(0);if(57==a)return ia[b]="A",ia.join("");if(90==a)ia[b]="0";else return ia[b]=String.fromCharCode(a+1),ia.join("")}ia.unshift("0");return ia.join("")}function Qb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function v(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});Qb(b,a);return b}function R(b){return parseInt(b,
10)}function Rb(b,a){return v(new (v(function(){},{prototype:b})),a)}function B(){}function Ba(b){return b}function Y(b){return function(){return b}}function E(b){return"undefined"===typeof b}function u(b){return"undefined"!==typeof b}function W(b){return null!=b&&"object"===typeof b}function x(b){return"string"===typeof b}function ub(b){return"number"===typeof b}function Ma(b){return"[object Date]"===ta.call(b)}function M(b){return"[object Array]"===ta.call(b)}function D(b){return"function"===typeof b}
function bb(b){return"[object RegExp]"===ta.call(b)}function Aa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Rc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Sc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function cb(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Na(b,a){var c=cb(b,a);0<=c&&b.splice(c,1);return a}function $(b,a){if(Aa(b)||b&&b.$evalAsync&&b.$watch)throw Oa("cpws");
if(a){if(b===a)throw Oa("cpi");if(M(b))for(var c=a.length=0;c<b.length;c++)a.push($(b[c]));else{c=a.$$hashKey;r(a,function(b,c){delete a[c]});for(var d in b)a[d]=$(b[d]);Qb(a,c)}}else(a=b)&&(M(b)?a=$(b,[]):Ma(b)?a=new Date(b.getTime()):bb(b)?a=RegExp(b.source):W(b)&&(a=$(b,{})));return a}function Sb(b,a){a=a||{};for(var c in b)!b.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a}function ua(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;
var c=typeof b,d;if(c==typeof a&&"object"==c)if(M(b)){if(!M(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ua(b[d],a[d]))return!1;return!0}}else{if(Ma(b))return Ma(a)&&b.getTime()==a.getTime();if(bb(b)&&bb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Aa(b)||Aa(a)||M(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!D(b[d])){if(!ua(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!D(a[d]))return!1;
return!0}return!1}function Tb(){return T.securityPolicy&&T.securityPolicy.isActive||T.querySelector&&!(!T.querySelector("[ng-csp]")&&!T.querySelector("[data-ng-csp]"))}function db(b,a){var c=2<arguments.length?va.call(arguments,2):[];return!D(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(va.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Tc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=
s:Aa(a)?c="$WINDOW":a&&T===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function oa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Tc,a?"  ":null)}function Ub(b){return x(b)?JSON.parse(b):b}function Pa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=O(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function fa(b){b=w(b).clone();try{b.empty()}catch(a){}var c=w("<div>").append(b).html();try{return 3===b[0].nodeType?O(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+O(b)})}catch(d){return O(c)}}function Vb(b){try{return decodeURIComponent(b)}catch(a){}}function Wb(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.split("="),d=Vb(c[0]),u(d)&&(b=u(c[1])?Vb(c[1]):!0,a[d]?M(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Xb(b){var a=[];r(b,function(b,d){M(b)?r(b,function(b){a.push(wa(d,!0)+(!0===b?"":"="+wa(b,!0)))}):a.push(wa(d,!0)+(!0===b?"":"="+wa(b,!0)))});return a.length?a.join("&"):""}function vb(b){return wa(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function wa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Uc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(g,function(a){g[a]=!0;c(T.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+
a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function Yb(b,a){var c=function(){b=w(b);if(b.injector()){var c=b[0]===T?"document":fa(b);throw Oa("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=Zb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",
function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(Q&&!d.test(Q.name))return c();Q.name=Q.name.replace(d,"");Ca.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function eb(b,a){a=a||"_";return b.replace(Vc,function(b,d){return(d?a:"")+b.toLowerCase()})}function wb(b,a,c){if(!b)throw Oa("areq",a||"?",c||"required");return b}function Qa(b,a,c){c&&M(b)&&(b=b[b.length-1]);wb(D(b),a,"not a function, got "+(b&&"object"==typeof b?
b.constructor.name||"Object":typeof b));return b}function xa(b,a){if("hasOwnProperty"===b)throw Oa("badname",a);}function $b(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&D(b)?db(e,b):b}function xb(b){var a=b[0];b=b[b.length-1];if(a===b)return w(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return w(c)}function Wc(b){var a=z("$injector"),c=z("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||z;return b.module||
(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide",
"constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n}())}}())}function Xc(b){v(b,{bootstrap:Yb,copy:$,extend:v,equals:ua,element:w,forEach:r,injector:Zb,noop:B,bind:db,toJson:oa,fromJson:Ub,identity:Ba,isUndefined:E,isDefined:u,isString:x,isFunction:D,isObject:W,isNumber:ub,isElement:Rc,isArray:M,
version:Yc,isDate:Ma,lowercase:O,uppercase:Da,callbacks:{counter:0},$$minErr:z,$$csp:Tb});Ra=Wc(Q);try{Ra("ngLocale")}catch(a){Ra("ngLocale",[]).provider("$locale",Zc)}Ra("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:$c});a.provider("$compile",ac).directive({a:ad,input:bc,textarea:bc,form:bd,script:cd,select:dd,style:ed,option:fd,ngBind:gd,ngBindHtml:hd,ngBindTemplate:id,ngClass:jd,ngClassEven:kd,ngClassOdd:ld,ngCloak:md,ngController:nd,ngForm:od,ngHide:pd,ngIf:qd,ngInclude:rd,
ngInit:sd,ngNonBindable:td,ngPluralize:ud,ngRepeat:vd,ngShow:wd,ngStyle:xd,ngSwitch:yd,ngSwitchWhen:zd,ngSwitchDefault:Ad,ngOptions:Bd,ngTransclude:Cd,ngModel:Dd,ngList:Ed,ngChange:Fd,required:cc,ngRequired:cc,ngValue:Gd}).directive({ngInclude:Hd}).directive(yb).directive(dc);a.provider({$anchorScroll:Id,$animate:Jd,$browser:Kd,$cacheFactory:Ld,$controller:Md,$document:Nd,$exceptionHandler:Od,$filter:ec,$interpolate:Pd,$interval:Qd,$http:Rd,$httpBackend:Sd,$location:Td,$log:Ud,$parse:Vd,$rootScope:Wd,
$q:Xd,$sce:Yd,$sceDelegate:Zd,$sniffer:$d,$templateCache:ae,$timeout:be,$window:ce,$$rAF:de,$$asyncCallback:ee})}])}function Sa(b){return b.replace(fe,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ge,"Moz$1")}function zb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,k,l,n,q,p,t;if(!d||null!=b)for(;e.length;)for(k=e.shift(),l=0,n=k.length;l<n;l++)for(q=w(k[l]),m?q.triggerHandler("$destroy"):m=!m,p=0,q=(t=q.children()).length;p<q;p++)e.push(Ea(t[p]));return f.apply(this,arguments)}
var f=Ea.fn[b],f=f.$original||f;e.$original=f;Ea.fn[b]=e}function L(b){if(b instanceof L)return b;x(b)&&(b=aa(b));if(!(this instanceof L)){if(x(b)&&"<"!=b.charAt(0))throw Ab("nosel");return new L(b)}if(x(b)){var a=T.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);Bb(this,a.childNodes);w(T.createDocumentFragment()).append(this)}else Bb(this,b)}function Cb(b){return b.cloneNode(!0)}function Fa(b){fc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Fa(b[a])}function gc(b,
a,c,d){if(u(d))throw Ab("offargs");var e=ja(b,"events");ja(b,"handle")&&(E(a)?r(e,function(a,c){Db(b,c,a);delete e[c]}):r(a.split(" "),function(a){E(c)?(Db(b,a,e[a]),delete e[a]):Na(e[a]||[],c)}))}function fc(b,a){var c=b[fb],d=Ta[c];d&&(a?delete Ta[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),gc(b)),delete Ta[c],b[fb]=s))}function ja(b,a,c){var d=b[fb],d=Ta[d||-1];if(u(c))d||(b[fb]=d=++he,d=Ta[d]={}),d[a]=c;else return d&&d[a]}function hc(b,a,c){var d=ja(b,"data"),e=u(c),f=!e&&
u(a),g=f&&!W(a);d||g||ja(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];v(d,a)}else return d}function Eb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function gb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+aa(a)+" "," ")))})}function hb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ");r(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function Bb(b,a){if(a){a=a.nodeName||!u(a.length)||Aa(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function ic(b,a){return ib(b,"$"+(a||"ngController")+"Controller")}function ib(b,a,c){b=w(b);9==b[0].nodeType&&(b=b.find("html"));for(a=M(a)?a:[a];b.length;){for(var d=b[0],e=0,f=a.length;e<f;e++)if((c=b.data(a[e]))!==s)return c;b=w(d.parentNode||11===d.nodeType&&d.host)}}function jc(b){for(var a=
0,c=b.childNodes;a<c.length;a++)Fa(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function kc(b,a){var c=jb[a.toLowerCase()];return c&&lc[b.nodeName]&&c}function ie(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||T);if(E(c.defaultPrevented)){var f=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=
function(){return c.defaultPrevented||!1===c.returnValue};var g=Sb(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=P?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ga(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===s&&(c=b.$$hashKey=ab()):c=b;return a+":"+c}function Ua(b){r(b,this.put,this)}function mc(b){var a,c;"function"==
typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(je,""),c=c.match(ke),r(c[1].split(le),function(b){b.replace(me,function(b,c,d){a.push(d)})})),b.$inject=a):M(b)?(c=b.length-1,Qa(b[c],"fn"),a=b.slice(0,c)):Qa(b,"fn",!0);return a}function Zb(b){function a(a){return function(b,c){if(W(b))r(b,Pb(a));else return a(b,c)}}function c(a,b){xa(a,"service");if(D(b)||M(b))b=n.instantiate(b);if(!b.$get)throw Va("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],
c,d,f,h;r(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(x(a))for(c=Ra(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,h=d.length;f<h;f++){var g=d[f],m=n.get(g[0]);m[g[1]].apply(m,g[2])}else D(a)?b.push(n.invoke(a)):M(a)?b.push(n.invoke(a)):Qa(a,"module")}catch(l){throw M(a)&&(a=a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&(l=l.message+"\n"+l.stack),Va("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===
g)throw Va("cdep",m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var f=[],h=mc(a),g,k,m;k=0;for(g=h.length;k<g;k++){m=h[k];if("string"!==typeof m)throw Va("itkn",m);f.push(e&&e.hasOwnProperty(m)?e[m]:c(m))}a.$inject||(a=a[g]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(M(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return W(e)||D(e)?e:c},get:c,
annotate:mc,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var g={},h="Provider",m=[],k=new Ua,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,Y(b))}),constant:a(function(a,b){xa(a,"constant");l[a]=b;q[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw Va("unpr",
m.join(" <- "));}),q={},p=q.$injector=f(q,function(a){a=n.get(a+h);return p.invoke(a.$get,a)});r(e(b),function(a){p.invoke(a||B)});return p}function Id(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;r(a,function(a){b||"a"!==O(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):
a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function ee(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function ne(b,a,c,d){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(t--,0===t)for(;H.length;)try{H.pop()()}catch(b){c.error(b)}}}function f(a,b){(function kb(){r(C,function(a){a()});A=b(kb,a)})()}function g(){y=null;J!=h.url()&&(J=h.url(),
r(ba,function(a){a(h.url())}))}var h=this,m=a[0],k=b.location,l=b.history,n=b.setTimeout,q=b.clearTimeout,p={};h.isMock=!1;var t=0,H=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){t++};h.notifyWhenNoOutstandingRequests=function(a){r(C,function(a){a()});0===t?a():H.push(a)};var C=[],A;h.addPollFn=function(a){E(A)&&f(100,n);C.push(a);return a};var J=k.href,F=a.find("base"),y=null;h.url=function(a,c){k!==b.location&&(k=b.location);l!==b.history&&(l=b.history);if(a){if(J!=
a)return J=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),F.attr("href",F.attr("href"))):(y=a,c?k.replace(a):k.href=a),h}else return y||k.href.replace(/%27/g,"'")};var ba=[],S=!1;h.onUrlChange=function(a){if(!S){if(d.history)w(b).on("popstate",g);if(d.hashchange)w(b).on("hashchange",g);else h.addPollFn(g);S=!0}ba.push(a);return a};h.baseHref=function(){var a=F.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var N={},Z="",U=h.baseHref();h.cookies=function(a,b){var d,
e,f,h;if(a)b===s?m.cookie=escape(a)+"=;path="+U+";expires=Thu, 01 Jan 1970 00:00:00 GMT":x(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+U).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==Z)for(Z=m.cookie,d=Z.split("; "),N={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),N[a]===s&&(N[a]=unescape(e.substring(h+1))));return N}};h.defer=function(a,b){var c;t++;c=n(function(){delete p[c];
e(a)},b||0);p[c]=!0;return c};h.defer.cancel=function(a){return p[a]?(delete p[a],q(a),e(B),!0):!1}}function Kd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new ne(b,d,a,c)}]}function Ld(){this.$get=function(){function b(b,d){function e(a){a!=n&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw z("$cacheFactory")("iid",b);var g=0,h=v({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},n=null,q=null;
return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!E(b))return a in m||g++,m[a]=b,g>k&&this.remove(q.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;b==n&&(n=b.p);b==q&&(q=b.n);f(b.n,b.p);delete l[a]}delete m[a];g--},removeAll:function(){m={};g=0;l={};n=q=null},destroy:function(){l=h=m=null;delete a[b]},info:function(){return v({},h,{size:g})}}}var a={};
b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function ae(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function ac(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,f=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g=/^<\s*(tr|th|td|thead|tbody|tfoot)(\s+[^>]*)?>/i,h=/^(on[a-z]+|formaction)$/;this.directive=function k(a,e){xa(a,"directive");x(a)?(wb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+
d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var h=b.invoke(c);D(h)?h={compile:Y(h)}:!h.compile&&h.link&&(h.compile=Y(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"A";e.push(h)}catch(g){d(g)}});return e}])),c[a].push(e)):r(a,Pb(k));return this};this.aHrefSanitizationWhitelist=function(b){return u(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(b){return u(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,n,q,p,t,H,C,A,J,F,y){function ba(a,b,c,d,e){a instanceof w||(a=w(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});var f=N(a,b,a,c,d,e);S(a,"ng-scope");return function(b,
c,d){wb(b,"scope");var e=c?Ha.clone.call(a):a;r(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var h=e.length;d<h;d++){var g=e[d].nodeType;1!==g&&9!==g||e.eq(d).data("$scope",b)}c&&c(e,b);f&&f(b,e,e);return e}}function S(a,b){try{a.addClass(b)}catch(c){}}function N(a,b,c,d,e,f){function h(a,c,d,e){var f,k,l,n,p,t,q;f=c.length;var ca=Array(f);for(p=0;p<f;p++)ca[p]=c[p];q=p=0;for(t=g.length;p<t;q++)k=ca[q],c=g[p++],f=g[p++],l=w(k),c?(c.scope?(n=a.$new(),l.data("$scope",n)):n=a,(l=c.transclude)||
!e&&b?c(f,n,k,d,Z(a,l||b)):c(f,n,k,d,e)):f&&f(a,k.childNodes,s,e)}for(var g=[],k,l,n,p,t=0;t<a.length;t++)k=new Fb,l=U(a[t],[],k,0===t?d:s,e),(f=l.length?Wa(l,a[t],k,b,c,null,[],[],f):null)&&f.scope&&S(w(a[t]),"ng-scope"),k=f&&f.terminal||!(n=a[t].childNodes)||!n.length?null:N(n,f?f.transclude:b),g.push(f,k),p=p||f||k,f=null;return p?h:null}function Z(a,b){return function(c,d,e){var f=!1;c||(c=a.$new(),f=c.$$transcluded=!0);d=b(c,d,e);if(f)d.on("$destroy",db(c,c.$destroy));return d}}function U(a,
b,c,d,h){var g=c.$attr,k;switch(a.nodeType){case 1:u(b,ka(Ia(a).toLowerCase()),"E",d,h);var l,n,p;k=a.attributes;for(var t=0,q=k&&k.length;t<q;t++){var H=!1,C=!1;l=k[t];if(!P||8<=P||l.specified){n=l.name;p=ka(n);la.test(p)&&(n=eb(p.substr(6),"-"));var J=p.replace(/(Start|End)$/,"");p===J+"Start"&&(H=n,C=n.substr(0,n.length-5)+"end",n=n.substr(0,n.length-6));p=ka(n.toLowerCase());g[p]=n;c[p]=l=aa(l.value);kc(a,p)&&(c[p]=!0);ga(a,b,l,p);u(b,p,"A",d,h,H,C)}}a=a.className;if(x(a)&&""!==a)for(;k=f.exec(a);)p=
ka(k[2]),u(b,p,"C",d,h)&&(c[p]=aa(k[3])),a=a.substr(k.index+k[0].length);break;case 3:L(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))p=ka(k[1]),u(b,p,"M",d,h)&&(c[p]=aa(k[2]))}catch(y){}}b.sort(z);return b}function I(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return w(d)}function ya(a,b,c){return function(d,e,f,h,g){e=I(e[0],
b,c);return a(d,e,f,h,g)}}function Wa(a,c,d,e,f,h,g,k,p){function q(a,b,c,d){if(a){c&&(a=ya(a,c,d));a.require=G.require;if(N===G||G.$$isolateScope)a=nc(a,{isolateScope:!0});g.push(a)}if(b){c&&(b=ya(b,c,d));b.require=G.require;if(N===G||G.$$isolateScope)b=nc(b,{isolateScope:!0});k.push(b)}}function C(a,b,c){var d,e="data",f=!1;if(x(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),f=f||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!f)throw ha("ctreq",
a,ga);}else M(a)&&(d=[],r(a,function(a){d.push(C(a,b,c))}));return d}function J(a,e,f,h,p){function q(a,b){var c;2>arguments.length&&(b=a,a=s);Ja&&(c=ya);return p(a,b,c)}var y,ca,A,I,ba,U,ya={},u;y=c===f?d:Sb(d,new Fb(w(f),d.$attr));ca=y.$$element;if(N){var oe=/^\s*([@=&])(\??)\s*(\w*)\s*$/;h=w(f);U=e.$new(!0);Z&&Z===N.$$originalDirective?h.data("$isolateScope",U):h.data("$isolateScopeNoTemplate",U);S(h,"ng-isolate-scope");r(N.scope,function(a,c){var d=a.match(oe)||[],f=d[3]||c,h="?"==d[2],d=d[1],
g,k,p,n;U.$$isolateBindings[c]=d+f;switch(d){case "@":y.$observe(f,function(a){U[c]=a});y.$$observers[f].$$scope=e;y[f]&&(U[c]=b(y[f])(e));break;case "=":if(h&&!y[f])break;k=t(y[f]);n=k.literal?ua:function(a,b){return a===b};p=k.assign||function(){g=U[c]=k(e);throw ha("nonassign",y[f],N.name);};g=U[c]=k(e);U.$watch(function(){var a=k(e);n(a,U[c])||(n(a,g)?p(e,a=U[c]):U[c]=a);return g=a},null,k.literal);break;case "&":k=t(y[f]);U[c]=function(a){return k(e,a)};break;default:throw ha("iscp",N.name,c,
a);}})}u=p&&q;F&&r(F,function(a){var b={$scope:a===N||a.$$isolateScope?U:e,$element:ca,$attrs:y,$transclude:u},c;ba=a.controller;"@"==ba&&(ba=y[a.name]);c=H(ba,b);ya[a.name]=c;Ja||ca.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});h=0;for(A=g.length;h<A;h++)try{I=g[h],I(I.isolateScope?U:e,ca,y,I.require&&C(I.require,ca,ya),u)}catch(v){n(v,fa(ca))}h=e;N&&(N.template||null===N.templateUrl)&&(h=U);a&&a(h,f.childNodes,s,p);for(h=k.length-1;0<=h;h--)try{I=k[h],I(I.isolateScope?
U:e,ca,y,I.require&&C(I.require,ca,ya),u)}catch(K){n(K,fa(ca))}}p=p||{};for(var y=-Number.MAX_VALUE,A,F=p.controllerDirectives,N=p.newIsolateScopeDirective,Z=p.templateDirective,u=p.nonTlbTranscludeDirective,Wa=!1,Ja=p.hasElementTranscludeDirective,K=d.$$element=w(c),G,ga,v,z=e,L,la=0,P=a.length;la<P;la++){G=a[la];var R=G.$$start,V=G.$$end;R&&(K=I(c,R,V));v=s;if(y>G.priority)break;if(v=G.scope)A=A||G,G.templateUrl||(Q("new/isolated scope",N,G,K),W(v)&&(N=G));ga=G.name;!G.templateUrl&&G.controller&&
(v=G.controller,F=F||{},Q("'"+ga+"' controller",F[ga],G,K),F[ga]=G);if(v=G.transclude)Wa=!0,G.$$tlb||(Q("transclusion",u,G,K),u=G),"element"==v?(Ja=!0,y=G.priority,v=I(c,R,V),K=d.$$element=w(T.createComment(" "+ga+": "+d[ga]+" ")),c=K[0],lb(f,w(va.call(v,0)),c),z=ba(v,e,y,h&&h.name,{nonTlbTranscludeDirective:u})):(v=w(Cb(c)).contents(),K.empty(),z=ba(v,e));if(G.template)if(Q("template",Z,G,K),Z=G,v=D(G.template)?G.template(K,d):G.template,v=oc(v),G.replace){h=G;v=E(v);c=v[0];if(1!=v.length||1!==c.nodeType)throw ha("tplrt",
ga,"");lb(f,K,c);P={$attr:{}};v=U(c,[],P);var X=a.splice(la+1,a.length-(la+1));N&&kb(v);a=a.concat(v).concat(X);B(d,P);P=a.length}else K.html(v);if(G.templateUrl)Q("template",Z,G,K),Z=G,G.replace&&(h=G),J=O(a.splice(la,a.length-la),K,d,f,z,g,k,{controllerDirectives:F,newIsolateScopeDirective:N,templateDirective:Z,nonTlbTranscludeDirective:u}),P=a.length;else if(G.compile)try{L=G.compile(K,d,z),D(L)?q(null,L,R,V):L&&q(L.pre,L.post,R,V)}catch(Y){n(Y,fa(K))}G.terminal&&(J.terminal=!0,y=Math.max(y,G.priority))}J.scope=
A&&!0===A.scope;J.transclude=Wa&&z;p.hasElementTranscludeDirective=Ja;return J}function kb(a){for(var b=0,c=a.length;b<c;b++)a[b]=Rb(a[b],{$$isolateScope:!0})}function u(b,e,f,h,g,l,p){if(e===g)return null;g=null;if(c.hasOwnProperty(e)){var t;e=a.get(e+d);for(var q=0,H=e.length;q<H;q++)try{t=e[q],(h===s||h>t.priority)&&-1!=t.restrict.indexOf(f)&&(l&&(t=Rb(t,{$$start:l,$$end:p})),b.push(t),g=t)}catch(y){n(y)}}return g}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&
(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(S(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function E(a){var b;a=aa(a);if(b=g.exec(a)){b=b[1].toLowerCase();a=w("<table>"+a+"</table>");if(/(thead|tbody|tfoot)/.test(b))return a.children(b);a=a.children("tbody");return"tr"===b?a.children("tr"):a.children("tr").contents()}return w("<div>"+
a+"</div>").contents()}function O(a,b,c,d,e,f,h,g){var k=[],l,n,t=b[0],H=a.shift(),y=v({},H,{templateUrl:null,transclude:null,replace:null,$$originalDirective:H}),C=D(H.templateUrl)?H.templateUrl(b,c):H.templateUrl;b.empty();q.get(J.getTrustedResourceUrl(C),{cache:p}).success(function(p){var q,J;p=oc(p);if(H.replace){p=E(p);q=p[0];if(1!=p.length||1!==q.nodeType)throw ha("tplrt",H.name,C);p={$attr:{}};lb(d,b,q);var A=U(q,[],p);W(H.scope)&&kb(A);a=A.concat(a);B(c,p)}else q=t,b.html(p);a.unshift(y);
l=Wa(a,q,c,e,b,H,f,h,g);r(d,function(a,c){a==q&&(d[c]=b[0])});for(n=N(b[0].childNodes,e);k.length;){p=k.shift();J=k.shift();var I=k.shift(),F=k.shift(),A=b[0];if(J!==t){var ba=J.className;g.hasElementTranscludeDirective&&H.replace||(A=Cb(q));lb(I,w(J),A);S(w(A),ba)}J=l.transclude?Z(p,l.transclude):F;l(n,p,A,d,J)}k=null}).error(function(a,b,c,d){throw ha("tpload",d.url);});return function(a,b,c,d,e){k?(k.push(b),k.push(c),k.push(d),k.push(e)):l(n,b,c,d,e)}}function z(a,b){var c=b.priority-a.priority;
return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Q(a,b,c,d){if(b)throw ha("multidir",b.name,c.name,a,fa(d));}function L(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:Y(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);S(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function Ja(a,b){if("srcdoc"==b)return J.HTML;var c=Ia(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return J.RESOURCE_URL}
function ga(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===Ia(a))throw ha("selmulti",fa(a));c.push({priority:100,compile:function(){return{pre:function(c,d,g){d=g.$$observers||(g.$$observers={});if(h.test(e))throw ha("nodomevents");if(f=b(g[e],!0,Ja(a,e)))g[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)})}}}})}}function lb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,h,g;if(a)for(h=
0,g=a.length;h<g;h++)if(a[h]==d){a[h++]=c;g=h+e-1;for(var k=a.length;h<k;h++,g++)g<k?a[h]=a[g]:delete a[h];a.length-=e-1;break}f&&f.replaceChild(c,d);a=T.createDocumentFragment();a.appendChild(d);c[w.expando]=d[w.expando];d=1;for(e=b.length;d<e;d++)f=b[d],w(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function nc(a,b){return v(function(){return a.apply(null,arguments)},a,b)}var Fb=function(a,b){this.$$element=a;this.$attr=b||{}};Fb.prototype={$normalize:ka,$addClass:function(a){a&&0<
a.length&&F.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&F.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=pc(a,b),d=pc(b,a);0===c.length?F.removeClass(this.$$element,d):0===d.length?F.addClass(this.$$element,c):F.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=kc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=eb(a,"-"));e=Ia(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&
"src"===a)this[a]=b=y(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){n(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);C.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var R=b.startSymbol(),V=b.endSymbol(),oc="{{"==R||"}}"==V?Ba:function(a){return a.replace(/\{\{/g,R).replace(/}}/g,V)},la=/^ngAttr[A-Z]/;return ba}]}function ka(b){return Sa(b.replace(pe,
""))}function pc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Md(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){xa(a,"controller");W(a)?v(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,m;x(e)&&(g=e.match(a),h=g[1],m=g[3],e=b.hasOwnProperty(h)?b[h]:$b(f.$scope,h,!0)||$b(d,h,!0),Qa(e,h,!0));g=c.instantiate(e,f);
if(m){if(!f||"object"!=typeof f.$scope)throw z("$controller")("noscp",h||e.name,m);f.$scope[m]=g}return g}}]}function Nd(){this.$get=["$window",function(b){return w(b.document)}]}function Od(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function qc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=O(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function rc(b){var a=W(b)?b:s;return function(c){a||
(a=qc(b));return c?a[O(c)]||null:a}}function sc(b,a,c){if(D(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function Rd(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){x(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Ub(d)));return d}],transformRequest:[function(a){return W(a)&&"[object File]"!==ta.call(a)&&"[object Blob]"!==ta.call(a)?oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:$(d),put:$(d),patch:$(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,q){function p(a){function c(a){var b=v({},a,{data:sc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:n.reject(b)}var d={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},f=function(a){function b(a){var c;
r(a,function(b,d){D(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=v({},a.headers),f,h,c=v({},c.common,c[O(a.method)]);b(c);b(d);a:for(f in c){a=O(f);for(h in d)if(O(h)===a)continue a;d[f]=c[f]}return d}(a);v(d,a);d.headers=f;d.method=Da(d.method);(a=Gb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(f[d.xsrfHeaderName||e.xsrfHeaderName]=a);var h=[function(a){f=a.headers;var b=sc(a.data,rc(f),a.transformRequest);E(a.data)&&r(f,function(a,b){"content-type"===O(b)&&delete f[b]});
E(a.withCredentials)&&!E(e.withCredentials)&&(a.withCredentials=e.withCredentials);return t(a,b,f).then(c,c)},s],g=n.when(d);for(r(A,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&h.push(a.response,a.responseError)});h.length;){a=h.shift();var k=h.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,d)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,d)});return g};
return g}function t(b,c,f){function g(a,b,c){A&&(200<=a&&300>a?A.put(s,[a,b,qc(c)]):A.remove(s));k(b,a,c);d.$$phase||d.$apply()}function k(a,c,d){c=Math.max(c,0);(200<=c&&300>c?t.resolve:t.reject)({data:a,status:c,headers:rc(d),config:b})}function m(){var a=cb(p.pendingRequests,b);-1!==a&&p.pendingRequests.splice(a,1)}var t=n.defer(),q=t.promise,A,r,s=H(b.url,b.params);p.pendingRequests.push(b);q.then(m,m);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(A=W(b.cache)?b.cache:W(e.cache)?e.cache:
C);if(A)if(r=A.get(s),u(r)){if(r.then)return r.then(m,m),r;M(r)?k(r[1],r[0],$(r[2])):k(r,200,{})}else A.put(s,q);E(r)&&a(b.method,s,c,g,f,b.timeout,b.withCredentials,b.responseType);return q}function H(a,b){if(!b)return a;var c=[];Qc(b,function(a,b){null===a||E(a)||(M(a)||(a=[a]),r(a,function(a){W(a)&&(a=oa(a));c.push(wa(b)+"="+wa(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var C=c("$http"),A=[];r(f,function(a){A.unshift(x(a)?q.get(a):q.invoke(a))});r(g,function(a,
b){var c=x(a)?q.get(a):q.invoke(a);A.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});p.pendingRequests=[];(function(a){r(arguments,function(a){p[a]=function(b,c){return p(v(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){p[a]=function(b,c,d){return p(v(d||{},{method:a,url:b,data:c}))}})})("post","put");p.defaults=e;return p}]}function qe(b){if(8>=P&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!Q.XMLHttpRequest))return new Q.ActiveXObject("Microsoft.XMLHTTP");if(Q.XMLHttpRequest)return new Q.XMLHttpRequest;throw z("$httpBackend")("noxhr");}function Sd(){this.$get=["$browser","$window","$document",function(b,a,c){return re(b,qe,b.defer,a.angular.callbacks,c[0])}]}function re(b,a,c,d,e){function f(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;P&&8>=P?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&
d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var g=-1;return function(e,m,k,l,n,q,p,t){function H(){A=g;F&&F();y&&y.abort()}function C(a,d,e,f){S&&c.cancel(S);F=y=null;0===d&&(d=e?200:"file"==pa(m).protocol?404:0);a(1223==d?204:d,e,f);b.$$completeOutstandingRequest(B)}var A;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==O(e)){var J="_"+(d.counter++).toString(36);d[J]=function(a){d[J].data=a};var F=f(m.replace("JSON_CALLBACK","angular.callbacks."+J),function(){d[J].data?
C(l,200,d[J].data):C(l,A||-2);d[J]=Ca.noop})}else{var y=a(e);y.open(e,m,!0);r(n,function(a,b){u(a)&&y.setRequestHeader(b,a)});y.onreadystatechange=function(){if(y&&4==y.readyState){var a=null,b=null;A!==g&&(a=y.getAllResponseHeaders(),b="response"in y?y.response:y.responseText);C(l,A||y.status,b,a)}};p&&(y.withCredentials=!0);if(t)try{y.responseType=t}catch(s){if("json"!==t)throw s;}y.send(k||null)}if(0<q)var S=c(H,q);else q&&q.then&&q.then(H)}}function Pd(){var b="{{",a="}}";this.startSymbol=function(a){return a?
(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,k,l){for(var n,q,p=0,t=[],H=f.length,C=!1,A=[];p<H;)-1!=(n=f.indexOf(b,p))&&-1!=(q=f.indexOf(a,n+g))?(p!=n&&t.push(f.substring(p,n)),t.push(p=c(C=f.substring(n+g,q))),p.exp=C,p=q+h,C=!0):(p!=H&&t.push(f.substring(p)),p=H);(H=t.length)||(t.push(""),H=1);if(l&&1<t.length)throw tc("noconcat",f);if(!k||C)return A.length=H,p=function(a){try{for(var b=0,c=H,h;b<c;b++)"function"==
typeof(h=t[b])&&(h=h(a),h=l?e.getTrusted(l,h):e.valueOf(h),null===h||E(h)?h="":"string"!=typeof h&&(h=oa(h))),A[b]=h;return A.join("")}catch(g){a=tc("interr",f,g.toString()),d(a)}},p.exp=f,p.parts=t,p}var g=b.length,h=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Qd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,m){var k=a.setInterval,l=a.clearInterval,n=c.defer(),q=n.promise,p=0,t=u(m)&&!m;h=u(h)?h:0;q.then(null,null,d);
q.$$intervalId=k(function(){n.notify(p++);0<h&&p>=h&&(n.resolve(p),l(q.$$intervalId),delete e[q.$$intervalId]);t||b.$apply()},g);e[q.$$intervalId]=n;return q}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function Zc(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",
gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",
"short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function uc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=vb(b[a]);return b.join("/")}function vc(b,a,c){b=pa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=R(b.port)||se[b.protocol]||null}function wc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=pa(b,c);a.$$path=decodeURIComponent(d&&
"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=Wb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ma(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Xa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Hb(b){return b.substr(0,Xa(b).lastIndexOf("/")+1)}function xc(b,a){this.$$html5=!0;a=a||"";var c=Hb(b);vc(b,this,b);this.$$parse=function(a){var e=ma(c,a);if(!x(e))throw Ib("ipthprfx",
a,c);wc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Xb(this.$$search),b=this.$$hash?"#"+vb(this.$$hash):"";this.$$url=uc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=ma(b,d))!==s)return d=e,(e=ma(a,e))!==s?c+(ma("/",e)||e):b+d;if((e=ma(c,d))!==s)return c+e;if(c==d+"/")return c}}function Jb(b,a){var c=Hb(b);vc(b,this,b);this.$$parse=function(d){var e=ma(b,d)||ma(c,d),e="#"==e.charAt(0)?ma(a,e):
this.$$html5?e:"";if(!x(e))throw Ib("ihshprfx",d,a);wc(e,this,b);d=this.$$path;var f=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Xb(this.$$search),e=this.$$hash?"#"+vb(this.$$hash):"";this.$$url=uc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Xa(b)==Xa(a))return a}}function yc(b,a){this.$$html5=!0;Jb.apply(this,arguments);var c=Hb(b);
this.$$rewrite=function(d){var e;if(b==Xa(d))return d;if(e=ma(c,d))return b+a+e;if(c===d+"/")return c}}function mb(b){return function(){return this[b]}}function zc(b,a){return function(c){if(E(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Td(){var b="",a=!1;this.hashPrefix=function(a){return u(a)?(b=a,this):b};this.html5Mode=function(b){return u(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",
h.absUrl(),a)}var h,m=d.baseHref(),k=d.url();a?(m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/"),e=e.history?xc:yc):(m=Xa(k),e=Jb);h=new e(m,"#"+b);h.$$parse(h.$$rewrite(k));f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=w(a.target);"a"!==O(b[0].nodeName);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href");W(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=pa(e.animVal).href);var g=h.$$rewrite(e);e&&(!b.attr("target")&&g&&!a.isDefaultPrevented())&&
(a.preventDefault(),g!=d.url()&&(h.$$parse(g),c.$apply(),Q.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var l=0;c.$watch(function(){var a=d.url(),b=h.$$replace;l&&a==h.absUrl()||(l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?
h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return l});return h}]}function Ud(){var b=!0,a=this;this.debugEnabled=function(a){return u(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||B;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=
[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function da(b,a){if("constructor"===b)throw za("isecfld",a);return b}function Ya(b,a){if(b){if(b.constructor===b)throw za("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw za("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw za("isecdom",
a);}return b}function nb(b,a,c,d,e){e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=da(a.shift(),d);var h=b[f];h||(h={},b[f]=h);b=h;b.then&&e.unwrapPromises&&(qa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}f=da(a.shift(),d);return b[f]=c}function Ac(b,a,c,d,e,f,g){da(b,f);da(a,f);da(c,f);da(d,f);da(e,f);return g.unwrapPromises?function(h,g){var k=g&&g.hasOwnProperty(b)?g:h,l;if(null==k)return k;(k=k[b])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=
a})),k=k.$$v);if(!a)return k;if(null==k)return s;(k=k[a])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return s;(k=k[c])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d)return k;if(null==k)return s;(k=k[d])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return s;(k=k[e])&&k.then&&(qa(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);
return k}:function(f,g){var k=g&&g.hasOwnProperty(b)?g:f;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function te(b,a){da(b,a);return function(a,d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function ue(b,a,c){da(b,c);da(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?s:c[a]}}function Bc(b,a,c){if(Kb.hasOwnProperty(b))return Kb[b];
var d=b.split("."),e=d.length,f;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)f=6>e?Ac(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var h=0,g;do g=Ac(d[h++],d[h++],d[h++],d[h++],d[h++],c,a)(b,f),f=s,b=g;while(h<e);return g};else{var g="var p;\n";r(d,function(b,d){da(b,c);g+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':
"")});var g=g+"return s;",h=new Function("s","k","pw",g);h.toString=Y(g);f=a.unwrapPromises?function(a,b){return h(a,b,qa)}:h}else f=ue(d[0],d[1],c);else f=te(d[0],c);"hasOwnProperty"!==b&&(Kb[b]=f);return f}function Vd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return u(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return u(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer",
"$log",function(c,d,e){a.csp=d.csp;qa=function(b){a.logPromiseWarnings&&!Cc.hasOwnProperty(b)&&(Cc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Lb(a);e=(new Za(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return B}}}]}function Xd(){this.$get=["$rootScope","$exceptionHandler",
function(b,a){return ve(function(a){b.$evalAsync(a)},a)}]}function ve(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],k,l;return l={resolve:function(a){if(g){var c=g;g=s;k=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(h(a))},notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,h){var l=e(),H=function(d){try{l.resolve((D(b)?
b:c)(d))}catch(e){l.reject(e),a(e)}},C=function(b){try{l.resolve((D(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},A=function(b){try{l.notify((D(h)?h:c)(b))}catch(d){a(d)}};g?g.push([H,C,A]):k.then(H,C,A);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var h=null;try{h=(a||c)()}catch(g){return b(g,!1)}return h&&D(h.then)?h.then(function(){return b(e,f)},function(a){return b(a,!1)}):
b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&D(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(f,h){var g=e();b(function(){try{g.resolve((D(h)?h:d)(c))}catch(b){g.reject(b),a(b)}});return g.promise}}};return{defer:e,reject:g,when:function(h,k,l,n){var q=e(),p,t=function(b){try{return(D(k)?k:c)(b)}catch(d){return a(d),
g(d)}},H=function(b){try{return(D(l)?l:d)(b)}catch(c){return a(c),g(c)}},C=function(b){try{return(D(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){p||(p=!0,q.resolve(f(a).then(t,H,C)))},function(a){p||(p=!0,q.resolve(H(a)))},function(a){p||q.notify(C(a))})});return q.promise},all:function(a){var b=e(),c=0,d=M(a)?[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}
function de(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Wd(){var b=10,a=z("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&
(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function h(){this.$id=ab();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(q.$$phase)throw a("inprog",q.$$phase);q.$$phase=b}function k(a,b){var c=f(a);
Qa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=ab());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;
this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),f=this.$$watchers,h={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!D(b)){var g=k(b||B,"listener");h.fn=function(a,b,c){g(c)}}if("string"==typeof a&&e.constant){var m=h.fn;h.fn=function(a,b,c){m.call(this,a,b,c);Na(f,h)}}f||(f=this.$$watchers=[]);f.unshift(h);return function(){Na(f,h);c=null}},$watchCollection:function(a,b){var c=this,d,e,h,g=1<b.length,
k=0,m=f(a),l=[],n={},q=!0,r=0;return this.$watch(function(){d=m(c);var a,b;if(W(d))if($a(d))for(e!==l&&(e=l,r=e.length=0,k++),a=d.length,r!==a&&(k++,e.length=r=a),b=0;b<a;b++)e[b]!==e[b]&&d[b]!==d[b]||e[b]===d[b]||(k++,e[b]=d[b]);else{e!==n&&(e=n={},r=0,k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==d[b]&&(k++,e[b]=d[b]):(r++,e[b]=d[b],k++));if(r>a)for(b in k++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,k++);return k},function(){q?(q=
!1,b(d,d,c)):b(d,h,c);if(g)if(W(d))if($a(d)){h=Array(d.length);for(var a=0;a<d.length;a++)h[a]=d[a]}else for(a in h={},d)Dc.call(d,a)&&(h[a]=d[a]);else h=d})},$digest:function(){var d,f,h,g,k=this.$$asyncQueue,l=this.$$postDigestQueue,r,y,s=b,S,N=[],u,v,I;m("$digest");c=null;do{y=!1;for(S=this;k.length;){try{I=k.shift(),I.scope.$eval(I.expression)}catch(w){q.$$phase=null,e(w)}c=null}a:do{if(g=S.$$watchers)for(r=g.length;r--;)try{if(d=g[r])if((f=d.get(S))!==(h=d.last)&&!(d.eq?ua(f,h):"number"==typeof f&&
"number"==typeof h&&isNaN(f)&&isNaN(h)))y=!0,c=d,d.last=d.eq?$(f):f,d.fn(f,h===n?f:h,S),5>s&&(u=4-s,N[u]||(N[u]=[]),v=D(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,v+="; newVal: "+oa(f)+"; oldVal: "+oa(h),N[u].push(v));else if(d===c){y=!1;break a}}catch(x){q.$$phase=null,e(x)}if(!(g=S.$$childHead||S!==this&&S.$$nextSibling))for(;S!==this&&!(g=S.$$nextSibling);)S=S.$parent}while(S=g);if((y||k.length)&&!s--)throw q.$$phase=null,a("infdig",b,oa(N));}while(y||k.length);for(q.$$phase=null;l.length;)try{l.shift()()}catch(B){e(B)}},
$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==q&&(r(this.$$listenerCount,db(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=
null)}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){q.$$phase||q.$$asyncQueue.length||g.defer(function(){q.$$asyncQueue.length&&q.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{q.$$phase=null;try{q.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[cb(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,h=!1,g={name:a,targetScope:f,stopPropagation:function(){h=!0},preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},k=[g].concat(va.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;g.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(h)break;f=f.$parent}while(f);
return g},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},h=[f].concat(va.call(arguments,1)),g,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];g=0;for(k=d.length;g<k;g++)if(d[g])try{d[g].apply(null,h)}catch(l){e(l)}else d.splice(g,1),g--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var q=new h;return q}]}function $c(){var b=
/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return u(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return u(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!P||8<=P)if(f=pa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function we(b){if("self"===b)return b;if(x(b)){if(-1<b.indexOf("***"))throw ra("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,
"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(bb(b))return RegExp("^"+b.source+"$");throw ra("imatcher");}function Ec(b){var a=[];u(b)&&r(b,function(b){a.push(we(b))});return a}function Zd(){this.SCE_CONTEXTS=ea;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Ec(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Ec(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ra("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[ea.HTML]=d(f);g[ea.CSS]=d(f);g[ea.URL]=d(f);g[ea.JS]=d(f);g[ea.RESOURCE_URL]=d(g[ea.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||b===
s||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===ea.RESOURCE_URL){var f=pa(d.toString()),l,n,q=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Gb(f):b[l].exec(f.href)){q=!0;break}if(q)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Gb(f):a[l].exec(f.href)){q=!1;break}if(q)return d;throw ra("insecurl",d.toString());}if(c===
ea.HTML)return e(d);throw ra("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function Yd(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ra("iequirks");var e=$(ea);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Ba);e.parseAs=
function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;r(ea,function(a,b){var c=O(b);e[Sa("parse_as_"+c)]=function(b){return f(a,b)};e[Sa("get_trusted_"+c)]=function(b){return g(a,b)};e[Sa("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function $d(){this.$get=["$window","$document",function(b,a){var c={},d=R((/android (\d+)/.exec(O((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
{}).userAgent),f=a[0]||{},g=f.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,n=!1;if(k){for(var q in k)if(l=m.exec(q)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in k);!d||l&&n||(l=x(f.body.style.webkitTransition),n=x(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<
g),hasEvent:function(a){if("input"==a&&9==P)return!1;if(E(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Tb(),vendorPrefix:h,transitions:l,animations:n,android:d,msie:P,msieDocumentMode:g}}]}function be(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,m){var k=c.defer(),l=k.promise,n=u(m)&&!m;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},h);l.$$timeoutId=h;f[h]=k;
return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function pa(b,a){var c=b;P&&(V.setAttribute("href",c),c=V.href);V.setAttribute("href",c);return{href:V.href,protocol:V.protocol?V.protocol.replace(/:$/,""):"",host:V.host,search:V.search?V.search.replace(/^\?/,""):"",hash:V.hash?V.hash.replace(/^#/,""):"",hostname:V.hostname,port:V.port,pathname:"/"===V.pathname.charAt(0)?V.pathname:
"/"+V.pathname}}function Gb(b){b=x(b)?pa(b):b;return b.protocol===Fc.protocol&&b.host===Fc.host}function ce(){this.$get=Y(Q)}function ec(b){function a(d,e){if(W(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Gc);a("date",Hc);a("filter",xe);a("json",ye);a("limitTo",ze);a("lowercase",Ae);a("number",Ic);a("orderBy",Jc);a("uppercase",Be)}function xe(){return function(b,
a,c){if(!M(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ca.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Dc.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=
b[g];e.check(h)&&d.push(h)}return d}}function Gc(b){var a=b.NUMBER_FORMATS;return function(b,d){E(d)&&(d=a.CURRENCY_SYM);return Kc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Ic(b){var a=b.NUMBER_FORMATS;return function(b,d){return Kc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Kc(b,a,c,d,e){if(null==b||!isFinite(b)||W(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",m=[],k=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&
l[3]>e+1?g="0":(h=g,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Lc)[1]||"").length;E(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));g=Math.pow(10,e);b=Math.round(b*g)/g;b=(""+b).split(Lc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,q=a.gSize;if(g.length>=n+q)for(l=g.length-n,k=0;k<l;k++)0===(l-k)%q&&0!==k&&(h+=c),h+=g.charAt(k);for(k=l;k<g.length;k++)0===(g.length-k)%n&&0!==k&&(h+=c),h+=g.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);
m.push(h);m.push(f?a.negSuf:a.posSuf);return m.join("")}function Mb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function X(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Mb(e,a,d)}}function ob(b,a){return function(c,d){var e=c["get"+b](),f=Da(a?"SHORT"+b:b);return d[f][e]}}function Hc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=
b[8]?a.setUTCHours:a.setHours;b[9]&&(f=R(b[9]+b[10]),g=R(b[9]+b[11]));h.call(a,R(b[1]),R(b[2])-1,R(b[3]));f=R(b[4]||0)-f;g=R(b[5]||0)-g;h=R(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],h,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;x(c)&&(c=Ce.test(c)?R(c):a(c));ub(c)&&(c=new Date(c));if(!Ma(c))return c;for(;e;)(m=De.exec(e))?
(g=g.concat(va.call(m,1)),e=g.pop()):(g.push(e),e=null);r(g,function(a){h=Ee[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function ye(){return function(b){return oa(b,!0)}}function ze(){return function(b,a){if(!M(b)&&!x(b))return b;a=R(a);if(x(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Jc(b){return function(a,
c,d){function e(a,b){return Pa(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!M(a)||!c)return a;c=M(c)?c:[c];c=Sc(c,function(a){var c=!1,d=a||Ba;if(x(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var h=d();return e(function(a,b){return f(a[h],b[h])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);
return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function sa(b){D(b)&&(b={link:b});b.restrict=b.restrict||"AC";return Y(b)}function Mc(b,a,c,d){function e(a,c){c=c?"-"+eb(c,"-"):"";d.removeClass(b,(a?pb:qb)+c);d.addClass(b,(a?qb:pb)+c)}var f=this,g=b.parent().controller("form")||rb,h=0,m=f.$error={},k=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Ka);e(!0);f.$addControl=function(a){xa(a.$name,
"input");k.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(m,function(b,c){f.$setValidity(c,!0,a)});Na(k,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Na(d,c),d.length||(h--,h||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{h||e(b);if(d){if(-1!=cb(d,c))return}else m[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Ka);d.addClass(b,
sb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,sb);d.addClass(b,Ka);f.$dirty=!1;f.$pristine=!0;r(k,function(a){a.$setPristine()})}}function na(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Fe(b,a,c){var d=c.prop("validity");W(d)&&(c=function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)},b.$parsers.push(c),b.$formatters.push(c))}function tb(b,a,c,d,e,f){var g=a.prop("validity");if(!e.android){var h=
!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;m()})}var m=function(){if(!h){var e=a.val();Pa(c.ngTrim||"T")&&(e=aa(e));if(d.$viewValue!==e||g&&""===e&&!g.valueMissing)b.$$phase?d.$setViewValue(e):b.$apply(function(){d.$setViewValue(e)})}};if(e.hasEvent("input"))a.on("input",m);else{var k,l=function(){k||(k=f.defer(function(){m();k=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||l()});if(e.hasEvent("paste"))a.on("paste cut",
l)}a.on("change",m);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var n=c.ngPattern;n&&((e=n.match(/^\/(.*)\/([gim]*)$/))?(n=RegExp(e[1],e[2]),e=function(a){return na(d,"pattern",d.$isEmpty(a)||n.test(a),a)}):e=function(c){var e=b.$eval(n);if(!e||!e.test)throw z("ngPattern")("noregexp",n,e,fa(a));return na(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var q=R(c.ngMinlength);e=function(a){return na(d,"minlength",d.$isEmpty(a)||
a.length>=q,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var p=R(c.ngMaxlength);e=function(a){return na(d,"maxlength",d.$isEmpty(a)||a.length<=p,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Nb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function f(b){if(!0===a||c.$index%2===a){var d=g(b||"");h?ua(b,h)||e.$updateClass(d,g(h)):e.$addClass(d)}h=$(b)}function g(a){if(M(a))return a.join(" ");if(W(a)){var b=[];r(a,function(a,c){a&&b.push(c)});
return b.join(" ")}return a}var h;c.$watch(e[b],f,!0);e.$observe("class",function(a){f(c.$eval(e[b]))});"ngClass"!==b&&c.$watch("$index",function(d,f){var h=d&1;if(h!==f&1){var n=g(c.$eval(e[b]));h===a?e.$addClass(n):e.$removeClass(n)}})}}}}var O=function(b){return x(b)?b.toLowerCase():b},Dc=Object.prototype.hasOwnProperty,Da=function(b){return x(b)?b.toUpperCase():b},P,w,Ea,va=[].slice,Ge=[].push,ta=Object.prototype.toString,Oa=z("ng"),Ca=Q.angular||(Q.angular={}),Ra,Ia,ia=["0","0","0"];P=R((/msie (\d+)/.exec(O(navigator.userAgent))||
[])[1]);isNaN(P)&&(P=R((/trident\/.*; rv:(\d+)/.exec(O(navigator.userAgent))||[])[1]));B.$inject=[];Ba.$inject=[];var aa=function(){return String.prototype.trim?function(b){return x(b)?b.trim():b}:function(b){return x(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ia=9>P?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Da(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Vc=/[A-Z]/g,Yc={full:"1.2.15",major:1,minor:2,dot:15,
codeName:"beer-underestimating"},Ta=L.cache={},fb=L.expando="ng-"+(new Date).getTime(),he=1,Nc=Q.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Db=Q.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};L._data=function(b){return this.cache[b[this.expando]]||{}};var fe=/([\:\-\_]+(.))/g,ge=/^moz([A-Z])/,Ab=z("jqLite"),Ha=L.prototype={ready:function(b){function a(){c||(c=!0,
b())}var c=!1;"complete"===T.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),L(Q).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?w(this[b]):w(this[this.length+b])},length:0,push:Ge,sort:[].sort,splice:[].splice},jb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){jb[O(b)]=b});var lc={};r("input select option textarea button form details".split(" "),function(b){lc[Da(b)]=
!0});r({data:hc,inheritedData:ib,scope:function(b){return w(b).data("$scope")||ib(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return w(b).data("$isolateScope")||w(b).data("$isolateScopeNoTemplate")},controller:ic,injector:function(b){return ib(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Eb,css:function(b,a,c){a=Sa(a);if(u(c))b.style[a]=c;else{var d;8>=P&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=P&&(d=""===d?s:
d);return d}},attr:function(b,a,c){var d=O(a);if(jb[d])if(u(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||B).specified?d:s;else if(u(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(u(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(E(d))return e?b[e]:"";b[e]=d}var a=[];9>P?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";
b.$dv="";return b}(),val:function(b,a){if(E(a)){if("SELECT"===Ia(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(E(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Fa(d[c]);b.innerHTML=a},empty:jc},function(b,a){L.prototype[a]=function(a,d){var e,f;if(b!==jc&&(2==b.length&&b!==Eb&&b!==ic?a:d)===s){if(W(a)){for(e=0;e<this.length;e++)if(b===hc)b(this[e],a);else for(f in a)b(this[e],
f,a[f]);return this}e=b.$dv;f=e===s?Math.min(this.length,1):this.length;for(var g=0;g<f;g++){var h=b(this[g],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});r({removeData:fc,dealoc:Fa,on:function a(c,d,e,f){if(u(f))throw Ab("onargs");var g=ja(c,"events"),h=ja(c,"handle");g||ja(c,"events",g={});h||ja(c,"handle",h=ie(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=T.body.contains||T.body.compareDocumentPosition?function(a,
c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else Nc(c,d,h),g[d]=[];f=g[d]}f.push(e)})},off:gc,one:function(a,c,d){a=w(a);a.on(c,function f(){a.off(c,d);a.off(c,
f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Fa(a);r(new L(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new L(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new L(c),function(c){a.insertBefore(c,
d)})}},wrap:function(a,c){c=w(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Fa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new L(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:hb,removeClass:gb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;E(f)&&(f=!Eb(a,c));(f?hb:gb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;
for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Cb,triggerHandler:function(a,c,d){c=(ja(a,"events")||{})[c];d=d||[];var e=[{preventDefault:B,stopPropagation:B}];r(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){L.prototype[c]=function(c,e,f){for(var g,h=0;h<this.length;h++)E(g)?(g=a(this[h],c,e,f),u(g)&&(g=w(g))):Bb(g,a(this[h],c,e,f));return u(g)?g:this};L.prototype.bind=L.prototype.on;
L.prototype.unbind=L.prototype.off});Ua.prototype={put:function(a,c){this[Ga(a)]=c},get:function(a){return this[Ga(a)]},remove:function(a){var c=this[a=Ga(a)];delete this[a];return c}};var ke=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,le=/,/,me=/^\s*(_?)(\S+?)\1\s*$/,je=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Va=z("$injector"),He=z("$animate"),Jd=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw He("notcsel",c);this.$$selectors[c.substr(1)]=
e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,h){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));h&&d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,g){c=x(c)?c:M(c)?c.join(" "):"";r(a,function(a){hb(a,c)});g&&d(g)},removeClass:function(a,c,g){c=
x(c)?c:M(c)?c.join(" "):"";r(a,function(a){gb(a,c)});g&&d(g)},setClass:function(a,c,g,h){r(a,function(a){hb(a,c);gb(a,g)});h&&d(h)},enabled:B}}]}],ha=z("$compile");ac.$inject=["$provide","$$sanitizeUriProvider"];var pe=/^(x[\:\-_]|data[\:\-_])/i,tc=z("$interpolate"),Ie=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,se={http:80,https:443,ftp:21},Ib=z("$location");yc.prototype=Jb.prototype=xc.prototype={$$html5:!1,$$replace:!1,absUrl:mb("$$absUrl"),url:function(a,c){if(E(a))return this.$$url;var d=Ie.exec(a);d[1]&&
this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:mb("$$protocol"),host:mb("$$host"),port:mb("$$port"),path:zc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(x(a))this.$$search=Wb(a);else if(W(a))this.$$search=a;else throw Ib("isrcharg");break;default:E(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:zc("$$hash",
Ba),replace:function(){this.$$replace=!0;return this}};var za=z("$parse"),Cc={},qa,La={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:B,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return u(d)?u(e)?d+e:d:u(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(u(d)?d:0)-(u(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,
c)},"=":B,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,
c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Je={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Lb=function(a){this.options=a};Lb.prototype={constructor:Lb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),f=La[this.ch],g=La[d],h=La[e];h?(this.tokens.push({index:this.index,
text:e,fn:h}),this.index+=3):g?(this.tokens.push({index:this.index,text:d,fn:g}),this.index+=2):f?(this.tokens.push({index:this.index,text:this.ch,fn:f,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+
a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=u(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw za("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=
O(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=
this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}d={index:d,text:c};if(La.hasOwnProperty(c))d.fn=La[c],d.json=La[c];else{var m=Bc(c,this.options,this.text);d.fn=v(function(a,c){return m(a,c)},{assign:function(d,e){return nb(d,c,e,a.text,a.options)}})}this.tokens.push(d);
g&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:g,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(g=this.text.substring(this.index+1,this.index+5),g.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,d+=String.fromCharCode(parseInt(g,16))):d=(f=Je[g])?d+f:d+g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;
this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var Za=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Za.ZERO=function(){return 0};Za.prototype={constructor:Za,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,
index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(",
"[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw za("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw za("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},
expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return v(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return v(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return v(function(e,f){return c(e,
f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());
else{var e=function(a,e,h){h=[h];for(var m=0;m<d.length;m++)h.push(d[m](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Za.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Bc(d,this.options,this.text);return v(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){return nb(a(e,h),d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return v(function(e,f){var g=a(e,f),h=d(e,f),m;if(!g)return s;(g=Ya(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&(m=g,"$$v"in g||(m.$$v=s,m.then(function(a){m.$$v=
a})),g=g.$$v);return g},{assign:function(e,f,g){var h=d(e,g);return Ya(a(e,g),c.text)[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],m=c?c(f,g):f,k=0;k<d.length;k++)h.push(d[k](f,g));k=a(f,g,m)||B;Ya(m,e.text);Ya(k,e.text);h=k.apply?k.apply(m,h):k(h[0],h[1],h[2],h[3],h[4]);return Ya(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return v(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return v(function(c,d){for(var e={},m=0;m<
a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Kb={},ra=z("$sce"),ea={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},V=T.createElement("a"),Fc=pa(Q.location.href,!0);ec.$inject=["$provide"];Gc.$inject=["$locale"];Ic.$inject=["$locale"];var Lc=".",Ee={yyyy:X("FullYear",4),yy:X("FullYear",2,0,!0),y:X("FullYear",1),MMMM:ob("Month"),MMM:ob("Month",!0),MM:X("Month",2,1),M:X("Month",1,1),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",
1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:ob("Day"),EEE:ob("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Mb(Math[0<a?"floor":"ceil"](a/60),2)+Mb(Math.abs(a%60),2))}},De=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Ce=/^\-?\d+$/;Hc.$inject=["$locale"];var Ae=Y(O),Be=Y(Da);Jc.$inject=
["$parse"];var ad=Y({restrict:"E",compile:function(a,c){8>=P&&(c.href||c.name||c.$set("href",""),a.append(T.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===ta.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),yb={};r(jb,function(a,c){if("multiple"!=a){var d=ka("ng-"+c);yb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src",
"srcset","href"],function(a){var c=ka("ng-"+a);yb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===ta.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(a){a&&(f.$set(h,a),P&&g&&e.prop(g,f[h]))})}}}});var rb={$addControl:B,$removeControl:B,$setValidity:B,$setDirty:B,$setPristine:B};Mc.$inject=["$element","$attrs","$scope","$animate"];var Oc=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:Mc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Nc(e[0],"submit",h);e.on("$destroy",function(){c(function(){Db(e[0],"submit",h)},0,!1)})}var m=e.parent().controller("form"),k=f.name||f.ngForm;k&&nb(a,k,g,k);if(m)e.on("$destroy",function(){m.$removeControl(g);k&&nb(a,k,s,k);v(g,rb)})}}}}}]},bd=Oc(),od=Oc(!0),Ke=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Le=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,Me=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Pc={text:tb,number:function(a,c,d,e,f,g){tb(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Me.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Fe(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return na(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),
e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return na(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return na(e,"number",e.$isEmpty(a)||ub(a),a)})},url:function(a,c,d,e,f,g){tb(a,c,d,e,f,g);a=function(a){return na(e,"url",e.$isEmpty(a)||Ke.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){tb(a,c,d,e,f,g);a=function(a){return na(e,"email",e.$isEmpty(a)||Le.test(a),a)};e.$formatters.push(a);
e.$parsers.push(a)},radio:function(a,c,d,e){E(d.name)&&c.attr("name",ab());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;x(f)||(f=!0);x(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};
e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:B,button:B,submit:B,reset:B,file:B},bc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,f,g){g&&(Pc[O(f.type)]||Pc.text)(d,e,f,g,c,a)}}}],qb="ng-valid",pb="ng-invalid",Ka="ng-pristine",sb="ng-dirty",Ne=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function h(a,c){c=c?"-"+eb(c,"-"):"";g.removeClass(e,(a?pb:qb)+c);
g.addClass(e,(a?qb:pb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var m=f(d.ngModel),k=m.assign;if(!k)throw z("ngModel")("nonassign",d.ngModel,fa(e));this.$render=B;this.$isEmpty=function(a){return E(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||rb,n=0,q=this.$error={};e.addClass(Ka);h(!0);this.$setValidity=function(a,c){q[a]!==
!c&&(c?(q[a]&&n--,n||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=!0,this.$valid=!1,n++),q[a]=!c,h(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;g.removeClass(e,sb);g.addClass(e,Ka)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Ka),g.addClass(e,sb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,k(a,d),r(this.$viewChangeListeners,
function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=m(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=c,p.$render())}return c})}],Dd=function(){return{require:["ngModel","^?form"],controller:Ne,link:function(a,c,d,e){var f=e[0],g=e[1]||rb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Fd=Y({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
cc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Ed=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!E(a)){var c=[];a&&r(a.split(f),function(a){a&&
c.push(aa(a))});return c}});e.$formatters.push(function(a){return M(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},Oe=/^(true|false|\d+)$/,Gd=function(){return{priority:100,compile:function(a,c){return Oe.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},gd=sa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),id=["$interpolate",
function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],hd=["$sce","$parse",function(a,c){return function(d,e,f){e.addClass("ng-binding").data("$binding",f.ngBindHtml);var g=c(f.ngBindHtml);d.$watch(function(){return(g(d)||"").toString()},function(c){e.html(a.getTrustedHtml(g(d))||"")})}}],jd=Nb("",!0),ld=Nb("Odd",0),kd=Nb("Even",1),md=sa({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),
nd=[function(){return{scope:!0,controller:"@",priority:500}}],dc={};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ka("ng-"+a);dc[c]=["$parse",function(d){return{compile:function(e,f){var g=d(f[c]);return function(c,d,e){d.on(O(a),function(a){c.$apply(function(){g(c,{$event:a})})})}}}}]});var qd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",
$$tlb:!0,link:function(c,d,e,f,g){var h,m,k;c.$watch(e.ngIf,function(f){Pa(f)?m||(m=c.$new(),g(m,function(c){c[c.length++]=T.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(k&&(k.remove(),k=null),m&&(m.$destroy(),m=null),h&&(k=xb(h.clone),a.leave(k,function(){k=null}),h=null))})}}}],rd=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ca.noop,compile:function(g,
h){var m=h.ngInclude||h.src,k=h.onload||"",l=h.autoscroll;return function(g,h,p,r,s){var v=0,A,w,F,y=function(){w&&(w.remove(),w=null);A&&(A.$destroy(),A=null);F&&(e.leave(F,function(){w=null}),w=F,F=null)};g.$watch(f.parseAsResourceUrl(m),function(f){var m=function(){!u(l)||l&&!g.$eval(l)||d()},p=++v;f?(a.get(f,{cache:c}).success(function(a){if(p===v){var c=g.$new();r.template=a;a=s(c,function(a){y();e.enter(a,null,h,m)});A=c;F=a;A.$emit("$includeContentLoaded");g.$eval(k)}}).error(function(){p===
v&&y()}),g.$emit("$includeContentRequested")):(y(),r.template=null)})}}}}],Hd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],sd=sa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),td=sa({terminal:!0,priority:1E3}),ud=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,m=g.$attr.when&&f.attr(g.$attr.when),k=g.offset||
0,l=e.$eval(m)||{},n={},q=c.startSymbol(),p=c.endSymbol(),t=/^when(Minus)?(.+)$/;r(g,function(a,c){t.test(c)&&(l[O(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,q+h+"-"+k+p))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return n[c](e,f,!0)},function(a){f.text(a)})}}}],vd=["$parse","$animate",function(a,c){var d=z("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,
link:function(e,f,g,h,m){var k=g.ngRepeat,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,q,p,t,s,v,u={$id:Ga};if(!l)throw d("iexp",k);g=l[1];h=l[2];(l=l[3])?(n=a(l),q=function(a,c,d){v&&(u[v]=a);u[s]=c;u.$index=d;return n(e,u)}):(p=function(a,c){return Ga(c)},t=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);s=l[3]||l[1];v=l[2];var J={};e.$watchCollection(h,function(a){var g,h,l=f[0],n,u={},A,I,x,B,E,K,
z=[];if($a(a))E=a,n=q||p;else{n=q||t;E=[];for(x in a)a.hasOwnProperty(x)&&"$"!=x.charAt(0)&&E.push(x);E.sort()}A=E.length;h=z.length=E.length;for(g=0;g<h;g++)if(x=a===E?g:E[g],B=a[x],B=n(x,B,g),xa(B,"`track by` id"),J.hasOwnProperty(B))K=J[B],delete J[B],u[B]=K,z[g]=K;else{if(u.hasOwnProperty(B))throw r(z,function(a){a&&a.scope&&(J[a.id]=a)}),d("dupes",k,B);z[g]={id:B};u[B]=!1}for(x in J)J.hasOwnProperty(x)&&(K=J[x],g=xb(K.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),K.scope.$destroy());
g=0;for(h=E.length;g<h;g++){x=a===E?g:E[g];B=a[x];K=z[g];z[g-1]&&(l=z[g-1].clone[z[g-1].clone.length-1]);if(K.scope){I=K.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);K.clone[0]!=n&&c.move(xb(K.clone),null,w(l));l=K.clone[K.clone.length-1]}else I=e.$new();I[s]=B;v&&(I[v]=x);I.$index=g;I.$first=0===g;I.$last=g===A-1;I.$middle=!(I.$first||I.$last);I.$odd=!(I.$even=0===(g&1));K.scope||m(I,function(a){a[a.length++]=T.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,w(l));l=a;K.scope=I;K.clone=
a;u[K.id]=K})}J=u})}}}],wd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Pa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],pd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Pa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],xd=sa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),yd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(c,d,e,f){var g,h,m,k=[];c.$watch(e.ngSwitch||e.on,function(d){var n,q=k.length;if(0<q){if(m){for(n=0;n<q;n++)m[n].remove();m=null}m=[];for(n=0;n<q;n++){var p=h[n];k[n].$destroy();m[n]=p;a.leave(p,function(){m.splice(n,1);0===m.length&&(m=null)})}}h=[];k=[];if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();k.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],zd=sa({transclude:"element",priority:800,require:"^ngSwitch",
link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Ad=sa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Cd=sa({link:function(a,c,d,e,f){if(!f)throw z("ngTransclude")("orphan",fa(c));f(function(a){c.empty();c.append(a)})}}),cd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,
d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Pe=z("ngOptions"),Bd=Y({terminal:!0}),dd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:B};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},l=e,n;m.databound=
d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){xa(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ga(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=B})}],link:function(e,g,h,m){function k(a,
c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(z.parent()&&z.remove(),c.val(a),""===a&&x.prop("selected",!0)):E(a)&&x?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){z.parent()&&z.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Ua(d.$viewValue);r(c.find("option"),function(c){c.selected=u(a.get(c.value))})};a.$watch(function(){ua(e,d.$viewValue)||(e=$(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=
[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,t,z;t=g.$modelValue;z=y(e)||[];var E=n?Ob(z):z,I,C,D;C={};s=!1;var F,L;if(p)if(w&&M(t))for(s=new Ua([]),D=0;D<t.length;D++)C[m]=t[D],s.put(w(e,C),t[D]);else s=new Ua(t);for(D=0;I=E.length,D<I;D++){k=D;if(n){k=E[D];if("$"===k.charAt(0))continue;C[n]=k}C[m]=z[k];d=q(e,C)||"";(k=a[d])||(k=a[d]=[],c.push(d));p?d=u(s.remove(w?w(e,C):r(e,C))):(w?(d={},d[m]=t,d=
w(e,d)===w(e,C)):d=t===r(e,C),s=s||d);F=l(e,C);F=u(F)?F:"";k.push({id:w?w(e,C):n?E[D]:D,label:F,selected:d})}p||(v||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));C=0;for(E=c.length;C<E;C++){d=c[C];k=a[d];x.length<=C?(t={element:B.clone().attr("label",d),label:k.label},z=[t],x.push(z),f.append(t.element)):(z=x[C],t=z[0],t.label!=d&&t.element.attr("label",t.label=d));F=null;D=0;for(I=k.length;D<I;D++)s=k[D],(d=z[D+1])?(F=d.element,d.label!==s.label&&
F.text(d.label=s.label),d.id!==s.id&&F.val(d.id=s.id),d.selected!==s.selected&&F.prop("selected",d.selected=s.selected)):(""===s.id&&v?L=v:(L=A.clone()).val(s.id).attr("selected",s.selected).text(s.label),z.push({element:L,label:s.label,id:s.id,selected:s.selected}),F?F.after(L):t.element.append(L),F=L);for(D++;z.length>D;)z.pop().element.remove()}for(;x.length>C;)x.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Pe("iexp",t,fa(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],q=c(k[3]||""),r=
c(k[2]?k[1]:m),y=c(k[7]),w=k[8]?c(k[8]):null,x=[[{element:f,label:""}]];v&&(a(v)(e),v.removeClass("ng-scope"),v.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=y(e)||[],d={},h,k,l,q,t,v,u;if(p)for(k=[],q=0,v=x.length;q<v;q++)for(a=x[q],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(u=0;u<c.length&&(d[m]=c[u],w(e,d)!=h);u++);else d[m]=c[h];k.push(r(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(w)for(u=0;u<c.length;u++){if(d[m]=
c[u],w(e,d)==h){k=r(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=r(e,d);1<x[0].length&&x[0][1].id!==h&&(x[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var q=m[0];m=m[1];var p=h.multiple,t=h.ngOptions,v=!1,x,A=w(T.createElement("option")),B=w(T.createElement("optgroup")),z=A.clone();h=0;for(var y=g.children(),D=y.length;h<D;h++)if(""===y[h].value){x=v=y.eq(h);break}q.init(m,v,z);p&&(m.$isEmpty=function(a){return!a||0===a.length});t?n(e,g,m):p?l(e,g,m):k(e,g,m,q)}}}}],fd=["$interpolate",
function(a){var c={addOption:B,removeOption:B};return{restrict:"E",priority:100,compile:function(d,e){if(E(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],ed=Y({restrict:"E",terminal:!0});
Q.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ea=Q.jQuery)?(w=Ea,v(Ea.fn,{scope:Ha.scope,isolateScope:Ha.isolateScope,controller:Ha.controller,injector:Ha.injector,inheritedData:Ha.inheritedData}),zb("remove",!0,!0,!1),zb("empty",!1,!1,!1),zb("html",!1,!1,!0)):w=L,Ca.element=w,Xc(Ca),w(T).ready(function(){Uc(T,Yb)}))})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * @license AngularJS v1.2.15
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngRoute
 * @description
 *
 * # ngRoute
 *
 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 *
 * <div doc-module-components="ngRoute"></div>
 */
 /* global -ngRouteModule */
var ngRouteModule = angular.module('ngRoute', ['ng']).
                        provider('$route', $RouteProvider);

/**
 * @ngdoc provider
 * @name $routeProvider
 * @function
 *
 * @description
 *
 * Used for configuring routes.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 * ## Dependencies
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 */
function $RouteProvider(){
  function inherit(parent, extra) {
    return angular.extend(new (angular.extend(function() {}, {prototype:parent}))(), extra);
  }

  var routes = {};

  /**
   * @ngdoc method
   * @name $routeProvider#when
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain named groups starting with a colon and ending with a star:
   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
   *
   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
   *
   *    * `color: brown`
   *    * `largecode: code/with/slashes`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` – `{(string|function()=}` – Controller fn that should be associated with
   *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
   *    - `controllerAs` – `{string=}` – A controller alias name. If present the controller will be
   *      published to scope under the `controllerAs` name.
   *    - `template` – `{string=|function()=}` – html template as a string or a function that
   *      returns an html template as a string which should be used by {@link
   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `templateUrl` – `{string=|function()=}` – path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the router
   *      will wait for them all to be resolved or one to be rejected before the controller is
   *      instantiated.
   *      If all the promises are resolved successfully, the values of the resolved promises are
   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
   *      fired. If any of the promises are rejected the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired. The map object
   *      is:
   *
   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is
   *        resolved before its value is injected into the controller. Be aware that
   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
   *
   *    - `redirectTo` – {(string|function())=} – value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.path()` and `$location.search()`.
   *
   *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only `$location.search()`
   *      or `$location.hash()` changes.
   *
   *      If the option is set to `false` and url in the browser changes, then
   *      `$routeUpdate` event is broadcasted on the root scope.
   *
   *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    routes[path] = angular.extend(
      {reloadOnSearch: true},
      route,
      path && pathRegExp(path, route)
    );

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length-1] == '/')
            ? path.substr(0, path.length-1)
            : path +'/';

      routes[redirectPath] = angular.extend(
        {redirectTo: path},
        pathRegExp(redirectPath, route)
      );
    }

    return this;
  };

   /**
    * @param path {string} path
    * @param opts {Object} options
    * @return {?Object}
    *
    * @description
    * Normalizes the given path, returning a regular expression
    * and the original path.
    *
    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
    */
  function pathRegExp(path, opts) {
    var insensitive = opts.caseInsensitiveMatch,
        ret = {
          originalPath: path,
          regexp: path
        },
        keys = ret.keys = [];

    path = path
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option){
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([\/$\*])/g, '\\$1');

    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
    return ret;
  }

  /**
   * @ngdoc method
   * @name $routeProvider#otherwise
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object} params Mapping information to be assigned to `$route.current`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    this.when(null, params);
    return this;
  };


  this.$get = ['$rootScope',
               '$location',
               '$routeParams',
               '$q',
               '$injector',
               '$http',
               '$templateCache',
               '$sce',
      function($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache, $sce) {

    /**
     * @ngdoc service
     * @name $route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as define in route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     * @property {Object} routes Object with all route configuration Objects as its properties.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the
     * {@link ngRoute.directive:ngView `ngView`} directive and the
     * {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
     * This example shows how changing the URL hash causes the `$route` to match a route against the
     * URL, and the `ngView` pulls in the partial.
     *
     * Note that this example is using {@link ng.directive:script inlined templates}
     * to get it working on jsfiddle as well.
     *
     * <example name="$route-service" module="ngRouteExample"
     *          deps="angular-route.js" fixBase="true">
     *   <file name="index.html">
     *     <div ng-controller="MainController">
     *       Choose:
     *       <a href="Book/Moby">Moby</a> |
     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     *       <a href="Book/Gatsby">Gatsby</a> |
     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
     *
     *       <div ng-view></div>
     *
     *       <hr />
     *
     *       <pre>$location.path() = {{$location.path()}}</pre>
     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
     *       <pre>$route.current.params = {{$route.current.params}}</pre>
     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
     *       <pre>$routeParams = {{$routeParams}}</pre>
     *     </div>
     *   </file>
     *
     *   <file name="book.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *   </file>
     *
     *   <file name="chapter.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *     Chapter Id: {{params.chapterId}}
     *   </file>
     *
     *   <file name="script.js">
     *     angular.module('ngRouteExample', ['ngRoute'])
     *
     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
     *
     *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = "BookController";
     *          $scope.params = $routeParams;
     *      })
     *
     *      .controller('ChapterController', function($scope, $routeParams) {
     *          $scope.name = "ChapterController";
     *          $scope.params = $routeParams;
     *      })
     *
     *     .config(function($routeProvider, $locationProvider) {
     *       $routeProvider
     *        .when('/Book/:bookId', {
     *         templateUrl: 'book.html',
     *         controller: 'BookController',
     *         resolve: {
     *           // I will cause a 1 second delay
     *           delay: function($q, $timeout) {
     *             var delay = $q.defer();
     *             $timeout(delay.resolve, 1000);
     *             return delay.promise;
     *           }
     *         }
     *       })
     *       .when('/Book/:bookId/ch/:chapterId', {
     *         templateUrl: 'chapter.html',
     *         controller: 'ChapterController'
     *       });
     *
     *       // configure html5 to get links working on jsfiddle
     *       $locationProvider.html5Mode(true);
     *     });
     *
     *   </file>
     *
     *   <file name="protractor.js" type="protractor">
     *     it('should load and compile correct template', function() {
     *       element(by.linkText('Moby: Ch1')).click();
     *       var content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: ChapterController/);
     *       expect(content).toMatch(/Book Id\: Moby/);
     *       expect(content).toMatch(/Chapter Id\: 1/);
     *
     *       element(by.partialLinkText('Scarlet')).click();
     *
     *       content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: BookController/);
     *       expect(content).toMatch(/Book Id\: Scarlet/);
     *     });
     *   </file>
     * </example>
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeStart
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occur.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeSuccess
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route dependencies are resolved.
     * {@link ngRoute.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is
     * first route entered.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeError
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if any of the resolve promises are rejected.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
     */

    /**
     * @ngdoc event
     * @name $route#$routeUpdate
     * @eventType broadcast on root scope
     * @description
     *
     * The `reloadOnSearch` property has been set to false, and we are reusing the same
     * instance of the Controller.
     */

    var forceReload = false,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name $route#reload
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ngRoute.directive:ngView ngView}
           * creates new scope, reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;
            $rootScope.$evalAsync(updateRoute);
          }
        };

    $rootScope.$on('$locationChangeSuccess', updateRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param route {Object} route regexp to match the url against
     * @return {?Object}
     *
     * @description
     * Check if the route matches the current url.
     *
     * Inspired by match in
     * visionmedia/express/lib/router/router.js.
     */
    function switchRouteMatcher(on, route) {
      var keys = route.keys,
          params = {};

      if (!route.regexp) return null;

      var m = route.regexp.exec(on);
      if (!m) return null;

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];

        var val = 'string' == typeof m[i]
              ? decodeURIComponent(m[i])
              : m[i];

        if (key && val) {
          params[key.name] = val;
        }
      }
      return params;
    }

    function updateRoute() {
      var next = parseRoute(),
          last = $route.current;

      if (next && last && next.$$route === last.$$route
          && angular.equals(next.pathParams, last.pathParams)
          && !next.reloadOnSearch && !forceReload) {
        last.params = next.params;
        angular.copy(last.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', last);
      } else if (next || last) {
        forceReload = false;
        $rootScope.$broadcast('$routeChangeStart', next, last);
        $route.current = next;
        if (next) {
          if (next.redirectTo) {
            if (angular.isString(next.redirectTo)) {
              $location.path(interpolate(next.redirectTo, next.params)).search(next.params)
                       .replace();
            } else {
              $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search()))
                       .replace();
            }
          }
        }

        $q.when(next).
          then(function() {
            if (next) {
              var locals = angular.extend({}, next.resolve),
                  template, templateUrl;

              angular.forEach(locals, function(value, key) {
                locals[key] = angular.isString(value) ?
                    $injector.get(value) : $injector.invoke(value);
              });

              if (angular.isDefined(template = next.template)) {
                if (angular.isFunction(template)) {
                  template = template(next.params);
                }
              } else if (angular.isDefined(templateUrl = next.templateUrl)) {
                if (angular.isFunction(templateUrl)) {
                  templateUrl = templateUrl(next.params);
                }
                templateUrl = $sce.getTrustedResourceUrl(templateUrl);
                if (angular.isDefined(templateUrl)) {
                  next.loadedTemplateUrl = templateUrl;
                  template = $http.get(templateUrl, {cache: $templateCache}).
                      then(function(response) { return response.data; });
                }
              }
              if (angular.isDefined(template)) {
                locals['$template'] = template;
              }
              return $q.all(locals);
            }
          }).
          // after route change
          then(function(locals) {
            if (next == $route.current) {
              if (next) {
                next.locals = locals;
                angular.copy(next.params, $routeParams);
              }
              $rootScope.$broadcast('$routeChangeSuccess', next, last);
            }
          }, function(error) {
            if (next == $route.current) {
              $rootScope.$broadcast('$routeChangeError', next, last, error);
            }
          });
      }
    }


    /**
     * @returns {Object} the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @returns {string} interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      angular.forEach((string||'').split(':'), function(segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


/**
 * @ngdoc service
 * @name $routeParams
 * @requires $route
 *
 * @description
 * The `$routeParams` service allows you to retrieve the current set of route parameters.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * The route parameters are a combination of {@link ng.$location `$location`}'s
 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
 * Instead you can use `$route.current.params` to access the new route's parameters.
 *
 * @example
 * ```js
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:1, sectionId:2, search:'moby'}
 * ```
 */
function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);
ngRouteModule.directive('ngView', ngViewFillContentFactory);


/**
 * @ngdoc directive
 * @name ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * enter - animation is used to bring new content into the browser.
 * leave - animation is used to animate existing content away.
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @param {string=} onload Expression to evaluate whenever the view updates.
 *
 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
 *                    as an expression yields a truthy value.
 * @example
    <example name="ngView-directive" module="ngViewExample"
             deps="angular-route.js;angular-animate.js"
             animations="true" fixBase="true">
      <file name="index.html">
        <div ng-controller="MainCtrl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="view-animate-container">
            <div ng-view class="view-animate"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$route.current.scope.name = {{main.$route.current.scope.name}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .view-animate-container {
          position:relative;
          height:100px!important;
          position:relative;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .view-animate {
          padding:10px;
        }

        .view-animate.ng-enter, .view-animate.ng-leave {
          -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .view-animate.ng-enter {
          left:100%;
        }
        .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
        .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
          .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              // configure html5 to get links working on jsfiddle
              $locationProvider.html5Mode(true);
          }])
          .controller('MainCtrl', ['$route', '$routeParams', '$location',
            function($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
          .controller('BookCtrl', ['$routeParams', function($routeParams) {
            this.name = "BookCtrl";
            this.params = $routeParams;
          }])
          .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
            this.name = "ChapterCtrl";
            this.params = $routeParams;
          }]);

      </file>

      <file name="protractor.js" type="protractor">
        it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: ChapterCtrl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: BookCtrl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ngView#$viewContentLoaded
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
function ngViewFactory(   $route,   $anchorScroll,   $animate) {
  return {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    link: function(scope, $element, attr, ctrl, $transclude) {
        var currentScope,
            currentElement,
            previousElement,
            autoScrollExp = attr.autoscroll,
            onloadExp = attr.onload || '';

        scope.$on('$routeChangeSuccess', update);
        update();

        function cleanupLastView() {
          if(previousElement) {
            previousElement.remove();
            previousElement = null;
          }
          if(currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if(currentElement) {
            $animate.leave(currentElement, function() {
              previousElement = null;
            });
            previousElement = currentElement;
            currentElement = null;
          }
        }

        function update() {
          var locals = $route.current && $route.current.locals,
              template = locals && locals.$template;

          if (angular.isDefined(template)) {
            var newScope = scope.$new();
            var current = $route.current;

            // Note: This will also link all children of ng-view that were contained in the original
            // html. If that content contains controllers, ... they could pollute/change the scope.
            // However, using ng-view on an element with additional content does not make sense...
            // Note: We can't remove them in the cloneAttchFn of $transclude as that
            // function is called before linking the content, which would apply child
            // directives to non existing elements.
            var clone = $transclude(newScope, function(clone) {
              $animate.enter(clone, null, currentElement || $element, function onNgViewEnter () {
                if (angular.isDefined(autoScrollExp)
                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                  $anchorScroll();
                }
              });
              cleanupLastView();
            });

            currentElement = clone;
            currentScope = current.scope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          } else {
            cleanupLastView();
          }
        }
    }
  };
}

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
function ngViewFillContentFactory($compile, $controller, $route) {
  return {
    restrict: 'ECA',
    priority: -400,
    link: function(scope, $element) {
      var current = $route.current,
          locals = current.locals;

      $element.html(locals.$template);

      var link = $compile($element.contents());

      if (current.controller) {
        locals.$scope = scope;
        var controller = $controller(current.controller, locals);
        if (current.controllerAs) {
          scope[current.controllerAs] = controller;
        }
        $element.data('$ngControllerController', controller);
        $element.children().data('$ngControllerController', controller);
      }

      link(scope);
    }
  };
}


})(window, window.angular);

/*
 AngularJS v1.2.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y,w,z){'use strict';function u(f,a,c){r.directive(f,["$parse","$swipe",function(m,p){var q=75,g=0.3,e=30;return function(h,n,l){function k(d){if(!b)return!1;var s=Math.abs(d.y-b.y);d=(d.x-b.x)*a;return v&&s<q&&0<d&&d>e&&s/d<g}var s=m(l[f]),b,v;p.bind(n,{start:function(d,s){b=d;v=!0},cancel:function(b){v=!1},end:function(b,a){k(b)&&h.$apply(function(){n.triggerHandler(c);s(h,{$event:a})})}})}}])}var r=w.module("ngTouch",[]);r.factory("$swipe",[function(){function f(a){var c=a.touches&&a.touches.length?
a.touches:[a];a=a.changedTouches&&a.changedTouches[0]||a.originalEvent&&a.originalEvent.changedTouches&&a.originalEvent.changedTouches[0]||c[0].originalEvent||c[0];return{x:a.clientX,y:a.clientY}}return{bind:function(a,c){var m,p,q,g,e=!1;a.on("touchstart mousedown",function(a){q=f(a);e=!0;p=m=0;g=q;c.start&&c.start(q,a)});a.on("touchcancel",function(a){e=!1;c.cancel&&c.cancel(a)});a.on("touchmove mousemove",function(a){if(e&&q){var n=f(a);m+=Math.abs(n.x-g.x);p+=Math.abs(n.y-g.y);g=n;10>m&&10>p||
(p>m?(e=!1,c.cancel&&c.cancel(a)):(a.preventDefault(),c.move&&c.move(n,a)))}});a.on("touchend mouseup",function(a){e&&(e=!1,c.end&&c.end(f(a),a))})}}}]);r.config(["$provide",function(f){f.decorator("ngClickDirective",["$delegate",function(a){a.shift();return a}])}]);r.directive("ngClick",["$parse","$timeout","$rootElement",function(f,a,c){function m(a,b,c){for(var d=0;d<a.length;d+=2)if(Math.abs(a[d]-b)<e&&Math.abs(a[d+1]-c)<e)return a.splice(d,d+2),!0;return!1}function p(a){if(!(Date.now()-n>g)){var b=
a.touches&&a.touches.length?a.touches:[a],c=b[0].clientX,b=b[0].clientY;1>c&&1>b||k&&k[0]===c&&k[1]===b||(k&&(k=null),"label"===a.target.tagName.toLowerCase()&&(k=[c,b]),m(l,c,b)||(a.stopPropagation(),a.preventDefault(),a.target&&a.target.blur()))}}function q(c){c=c.touches&&c.touches.length?c.touches:[c];var b=c[0].clientX,e=c[0].clientY;l.push(b,e);a(function(){for(var a=0;a<l.length;a+=2)if(l[a]==b&&l[a+1]==e){l.splice(a,a+2);break}},g,!1)}var g=2500,e=25,h="ng-click-active",n,l,k;return function(a,
b,e){function d(){k=!1;b.removeClass(h)}var g=f(e.ngClick),k=!1,t,r,u,x;b.on("touchstart",function(a){k=!0;t=a.target?a.target:a.srcElement;3==t.nodeType&&(t=t.parentNode);b.addClass(h);r=Date.now();a=a.touches&&a.touches.length?a.touches:[a];a=a[0].originalEvent||a[0];u=a.clientX;x=a.clientY});b.on("touchmove",function(a){d()});b.on("touchcancel",function(a){d()});b.on("touchend",function(a){var g=Date.now()-r,f=a.changedTouches&&a.changedTouches.length?a.changedTouches:a.touches&&a.touches.length?
a.touches:[a],h=f[0].originalEvent||f[0],f=h.clientX,h=h.clientY,s=Math.sqrt(Math.pow(f-u,2)+Math.pow(h-x,2));k&&(750>g&&12>s)&&(l||(c[0].addEventListener("click",p,!0),c[0].addEventListener("touchstart",q,!0),l=[]),n=Date.now(),m(l,f,h),t&&t.blur(),w.isDefined(e.disabled)&&!1!==e.disabled||b.triggerHandler("click",[a]));d()});b.onclick=function(a){};b.on("click",function(b,c){a.$apply(function(){g(a,{$event:c||b})})});b.on("mousedown",function(a){b.addClass(h)});b.on("mousemove mouseup",function(a){b.removeClass(h)})}}]);
u("ngSwipeLeft",-1,"swipeleft");u("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map

/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.0
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

/*jslint browser:true, node:true*/
/*global define, Event, Node*/


/**
 * Instantiate fast-clicking listeners on the specificed layer.
 *
 * @constructor
 * @param {Element} layer The layer to listen on
 */
function FastClick(layer) {
	'use strict';
	var oldOnClick;


	/**
	 * Whether a click is currently being tracked.
	 *
	 * @type boolean
	 */
	this.trackingClick = false;


	/**
	 * Timestamp for when when click tracking started.
	 *
	 * @type number
	 */
	this.trackingClickStart = 0;


	/**
	 * The element being tracked for a click.
	 *
	 * @type EventTarget
	 */
	this.targetElement = null;


	/**
	 * X-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartX = 0;


	/**
	 * Y-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartY = 0;


	/**
	 * ID of the last touch, retrieved from Touch.identifier.
	 *
	 * @type number
	 */
	this.lastTouchIdentifier = 0;


	/**
	 * Touchmove boundary, beyond which a click will be cancelled.
	 *
	 * @type number
	 */
	this.touchBoundary = 10;


	/**
	 * The FastClick layer.
	 *
	 * @type Element
	 */
	this.layer = layer;

	if (FastClick.notNeeded(layer)) {
		return;
	}

	// Some old versions of Android don't have Function.prototype.bind
	function bind(method, context) {
		return function() { return method.apply(context, arguments); };
	}

	// Set up event handlers as required
	if (deviceIsAndroid) {
		layer.addEventListener('mouseover', bind(this.onMouse, this), true);
		layer.addEventListener('mousedown', bind(this.onMouse, this), true);
		layer.addEventListener('mouseup', bind(this.onMouse, this), true);
	}

	layer.addEventListener('click', bind(this.onClick, this), true);
	layer.addEventListener('touchstart', bind(this.onTouchStart, this), false);
	layer.addEventListener('touchmove', bind(this.onTouchMove, this), false);
	layer.addEventListener('touchend', bind(this.onTouchEnd, this), false);
	layer.addEventListener('touchcancel', bind(this.onTouchCancel, this), false);

	// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
	// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
	// layer when they are cancelled.
	if (!Event.prototype.stopImmediatePropagation) {
		layer.removeEventListener = function(type, callback, capture) {
			var rmv = Node.prototype.removeEventListener;
			if (type === 'click') {
				rmv.call(layer, type, callback.hijacked || callback, capture);
			} else {
				rmv.call(layer, type, callback, capture);
			}
		};

		layer.addEventListener = function(type, callback, capture) {
			var adv = Node.prototype.addEventListener;
			if (type === 'click') {
				adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
					if (!event.propagationStopped) {
						callback(event);
					}
				}), capture);
			} else {
				adv.call(layer, type, callback, capture);
			}
		};
	}

	// If a handler is already declared in the element's onclick attribute, it will be fired before
	// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
	// adding it as listener.
	if (typeof layer.onclick === 'function') {

		// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
		// - the old one won't work if passed to addEventListener directly.
		oldOnClick = layer.onclick;
		layer.addEventListener('click', function(event) {
			oldOnClick(event);
		}, false);
		layer.onclick = null;
	}
}


/**
 * Android requires exceptions.
 *
 * @type boolean
 */
var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;


/**
 * iOS requires exceptions.
 *
 * @type boolean
 */
var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);


/**
 * iOS 4 requires an exception for select elements.
 *
 * @type boolean
 */
var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


/**
 * iOS 6.0(+?) requires the target element to be manually derived
 *
 * @type boolean
 */
var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);


/**
 * Determine whether a given element requires a native click.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element needs a native click
 */
FastClick.prototype.needsClick = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {

	// Don't send a synthetic click to disabled inputs (issue #62)
	case 'button':
	case 'select':
	case 'textarea':
		if (target.disabled) {
			return true;
		}

		break;
	case 'input':

		// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
		if ((deviceIsIOS && target.type === 'file') || target.disabled) {
			return true;
		}

		break;
	case 'label':
	case 'video':
		return true;
	}

	return (/\bneedsclick\b/).test(target.className);
};


/**
 * Determine whether a given element requires a call to focus to simulate click into element.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
 */
FastClick.prototype.needsFocus = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {
	case 'textarea':
		return true;
	case 'select':
		return !deviceIsAndroid;
	case 'input':
		switch (target.type) {
		case 'button':
		case 'checkbox':
		case 'file':
		case 'image':
		case 'radio':
		case 'submit':
			return false;
		}

		// No point in attempting to focus disabled inputs
		return !target.disabled && !target.readOnly;
	default:
		return (/\bneedsfocus\b/).test(target.className);
	}
};


/**
 * Send a click event to the specified element.
 *
 * @param {EventTarget|Element} targetElement
 * @param {Event} event
 */
FastClick.prototype.sendClick = function(targetElement, event) {
	'use strict';
	var clickEvent, touch;

	// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
	if (document.activeElement && document.activeElement !== targetElement) {
		document.activeElement.blur();
	}

	touch = event.changedTouches[0];

	// Synthesise a click event, with an extra attribute so it can be tracked
	clickEvent = document.createEvent('MouseEvents');
	clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
	clickEvent.forwardedTouchEvent = true;
	targetElement.dispatchEvent(clickEvent);
};

FastClick.prototype.determineEventType = function(targetElement) {
	'use strict';

	//Issue #159: Android Chrome Select Box does not open with a synthetic click event
	if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
		return 'mousedown';
	}

	return 'click';
};


/**
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.focus = function(targetElement) {
	'use strict';
	var length;

	// Issue #160: on iOS 7, some input elements (e.g. date datetime) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
	if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time') {
		length = targetElement.value.length;
		targetElement.setSelectionRange(length, length);
	} else {
		targetElement.focus();
	}
};


/**
 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
 *
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.updateScrollParent = function(targetElement) {
	'use strict';
	var scrollParent, parentElement;

	scrollParent = targetElement.fastClickScrollParent;

	// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
	// target element was moved to another parent.
	if (!scrollParent || !scrollParent.contains(targetElement)) {
		parentElement = targetElement;
		do {
			if (parentElement.scrollHeight > parentElement.offsetHeight) {
				scrollParent = parentElement;
				targetElement.fastClickScrollParent = parentElement;
				break;
			}

			parentElement = parentElement.parentElement;
		} while (parentElement);
	}

	// Always update the scroll top tracker if possible.
	if (scrollParent) {
		scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
	}
};


/**
 * @param {EventTarget} targetElement
 * @returns {Element|EventTarget}
 */
FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
	'use strict';

	// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
	if (eventTarget.nodeType === Node.TEXT_NODE) {
		return eventTarget.parentNode;
	}

	return eventTarget;
};


/**
 * On touch start, record the position and scroll offset.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchStart = function(event) {
	'use strict';
	var targetElement, touch, selection;

	// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
	if (event.targetTouches.length > 1) {
		return true;
	}

	targetElement = this.getTargetElementFromEventTarget(event.target);
	touch = event.targetTouches[0];

	if (deviceIsIOS) {

		// Only trusted events will deselect text on iOS (issue #49)
		selection = window.getSelection();
		if (selection.rangeCount && !selection.isCollapsed) {
			return true;
		}

		if (!deviceIsIOS4) {

			// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
			// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
			// with the same identifier as the touch event that previously triggered the click that triggered the alert.
			// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
			// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
			if (touch.identifier === this.lastTouchIdentifier) {
				event.preventDefault();
				return false;
			}

			this.lastTouchIdentifier = touch.identifier;

			// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
			// 1) the user does a fling scroll on the scrollable layer
			// 2) the user stops the fling scroll with another tap
			// then the event.target of the last 'touchend' event will be the element that was under the user's finger
			// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
			// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
			this.updateScrollParent(targetElement);
		}
	}

	this.trackingClick = true;
	this.trackingClickStart = event.timeStamp;
	this.targetElement = targetElement;

	this.touchStartX = touch.pageX;
	this.touchStartY = touch.pageY;

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < 200) {
		event.preventDefault();
	}

	return true;
};


/**
 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.touchHasMoved = function(event) {
	'use strict';
	var touch = event.changedTouches[0], boundary = this.touchBoundary;

	if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
		return true;
	}

	return false;
};


/**
 * Update the last position.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchMove = function(event) {
	'use strict';
	if (!this.trackingClick) {
		return true;
	}

	// If the touch has moved, cancel the click tracking
	if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
		this.trackingClick = false;
		this.targetElement = null;
	}

	return true;
};


/**
 * Attempt to find the labelled control for the given label element.
 *
 * @param {EventTarget|HTMLLabelElement} labelElement
 * @returns {Element|null}
 */
FastClick.prototype.findControl = function(labelElement) {
	'use strict';

	// Fast path for newer browsers supporting the HTML5 control attribute
	if (labelElement.control !== undefined) {
		return labelElement.control;
	}

	// All browsers under test that support touch events also support the HTML5 htmlFor attribute
	if (labelElement.htmlFor) {
		return document.getElementById(labelElement.htmlFor);
	}

	// If no for attribute exists, attempt to retrieve the first labellable descendant element
	// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
	return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
};


/**
 * On touch end, determine whether to send a click event at once.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchEnd = function(event) {
	'use strict';
	var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

	if (!this.trackingClick) {
		return true;
	}

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < 200) {
		this.cancelNextClick = true;
		return true;
	}

	// Reset to prevent wrong click cancel on input (issue #156).
	this.cancelNextClick = false;

	this.lastClickTime = event.timeStamp;

	trackingClickStart = this.trackingClickStart;
	this.trackingClick = false;
	this.trackingClickStart = 0;

	// On some iOS devices, the targetElement supplied with the event is invalid if the layer
	// is performing a transition or scroll, and has to be re-detected manually. Note that
	// for this to function correctly, it must be called *after* the event target is checked!
	// See issue #57; also filed as rdar://13048589 .
	if (deviceIsIOSWithBadTarget) {
		touch = event.changedTouches[0];

		// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
		targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
		targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
	}

	targetTagName = targetElement.tagName.toLowerCase();
	if (targetTagName === 'label') {
		forElement = this.findControl(targetElement);
		if (forElement) {
			this.focus(targetElement);
			if (deviceIsAndroid) {
				return false;
			}

			targetElement = forElement;
		}
	} else if (this.needsFocus(targetElement)) {

		// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
		// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
		if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
			this.targetElement = null;
			return false;
		}

		this.focus(targetElement);
		this.sendClick(targetElement, event);

		// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
		if (!deviceIsIOS4 || targetTagName !== 'select') {
			this.targetElement = null;
			event.preventDefault();
		}

		return false;
	}

	if (deviceIsIOS && !deviceIsIOS4) {

		// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
		// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
		scrollParent = targetElement.fastClickScrollParent;
		if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
			return true;
		}
	}

	// Prevent the actual click from going though - unless the target node is marked as requiring
	// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
	if (!this.needsClick(targetElement)) {
		event.preventDefault();
		this.sendClick(targetElement, event);
	}

	return false;
};


/**
 * On touch cancel, stop tracking the click.
 *
 * @returns {void}
 */
FastClick.prototype.onTouchCancel = function() {
	'use strict';
	this.trackingClick = false;
	this.targetElement = null;
};


/**
 * Determine mouse events which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onMouse = function(event) {
	'use strict';

	// If a target element was never set (because a touch event was never fired) allow the event
	if (!this.targetElement) {
		return true;
	}

	if (event.forwardedTouchEvent) {
		return true;
	}

	// Programmatically generated events targeting a specific element should be permitted
	if (!event.cancelable) {
		return true;
	}

	// Derive and check the target element to see whether the mouse event needs to be permitted;
	// unless explicitly enabled, prevent non-touch click events from triggering actions,
	// to prevent ghost/doubleclicks.
	if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

		// Prevent any user-added listeners declared on FastClick element from being fired.
		if (event.stopImmediatePropagation) {
			event.stopImmediatePropagation();
		} else {

			// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			event.propagationStopped = true;
		}

		// Cancel the event
		event.stopPropagation();
		event.preventDefault();

		return false;
	}

	// If the mouse event is permitted, return true for the action to go through.
	return true;
};


/**
 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
 * an actual click which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onClick = function(event) {
	'use strict';
	var permitted;

	// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
	if (this.trackingClick) {
		this.targetElement = null;
		this.trackingClick = false;
		return true;
	}

	// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
	if (event.target.type === 'submit' && event.detail === 0) {
		return true;
	}

	permitted = this.onMouse(event);

	// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
	if (!permitted) {
		this.targetElement = null;
	}

	// If clicks are permitted, return true for the action to go through.
	return permitted;
};


/**
 * Remove all FastClick's event listeners.
 *
 * @returns {void}
 */
FastClick.prototype.destroy = function() {
	'use strict';
	var layer = this.layer;

	if (deviceIsAndroid) {
		layer.removeEventListener('mouseover', this.onMouse, true);
		layer.removeEventListener('mousedown', this.onMouse, true);
		layer.removeEventListener('mouseup', this.onMouse, true);
	}

	layer.removeEventListener('click', this.onClick, true);
	layer.removeEventListener('touchstart', this.onTouchStart, false);
	layer.removeEventListener('touchmove', this.onTouchMove, false);
	layer.removeEventListener('touchend', this.onTouchEnd, false);
	layer.removeEventListener('touchcancel', this.onTouchCancel, false);
};


/**
 * Check whether FastClick is needed.
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.notNeeded = function(layer) {
	'use strict';
	var metaViewport;
	var chromeVersion;

	// Devices that don't support touch don't need FastClick
	if (typeof window.ontouchstart === 'undefined') {
		return true;
	}

	// Chrome version - zero for other browsers
	chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

	if (chromeVersion) {

		if (deviceIsAndroid) {
			metaViewport = document.querySelector('meta[name=viewport]');

			if (metaViewport) {
				// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
				if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
					return true;
				}
				// Chrome 32 and above with width=device-width or less don't need FastClick
				if (chromeVersion > 31 && window.innerWidth <= window.screen.width) {
					return true;
				}
			}

		// Chrome desktop doesn't need FastClick (issue #15)
		} else {
			return true;
		}
	}

	// IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
	if (layer.style.msTouchAction === 'none') {
		return true;
	}

	return false;
};


/**
 * Factory method for creating a FastClick object
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.attach = function(layer) {
	'use strict';
	return new FastClick(layer);
};


if (typeof define !== 'undefined' && define.amd) {

	// AMD. Register as an anonymous module.
	define(function() {
		'use strict';
		return FastClick;
	});
} else if (typeof module !== 'undefined' && module.exports) {
	module.exports = FastClick.attach;
	module.exports.FastClick = FastClick;
} else {
	window.FastClick = FastClick;
}

(function($) {
  // @todo Document this.
  $.extend($,{ placeholder: {
      browser_supported: function() {
        return this._supported !== undefined ?
          this._supported :
          ( this._supported = !!('placeholder' in $('<input type="text">')[0]) );
      },
      shim: function(opts) {
        var config = {
          color: '#888',
          cls: 'placeholder',
          selector: 'input[placeholder], textarea[placeholder]'
        };
        $.extend(config,opts);
        return !this.browser_supported() && $(config.selector)._placeholder_shim(config);
      }
  }});

  $.extend($.fn,{
    _placeholder_shim: function(config) {
      function calcPositionCss(target)
      {
        var op = $(target).offsetParent().offset();
        var ot = $(target).offset();

        return {
          top: ot.top - op.top,
          left: ot.left - op.left,
          width: $(target).width()
        };
      }
      function adjustToResizing(label) {
      	var $target = label.data('target');
      	if(typeof $target !== "undefined") {
          label.css(calcPositionCss($target));
          $(window).one("resize", function () { adjustToResizing(label); });
        }
      }
      return this.each(function() {
        var $this = $(this);

        if( $this.is(':visible') ) {

          if( $this.data('placeholder') ) {
            var $ol = $this.data('placeholder');
            $ol.css(calcPositionCss($this));
            return true;
          }

          var possible_line_height = {};
          if( !$this.is('textarea') && $this.css('height') != 'auto') {
            possible_line_height = { lineHeight: $this.css('height'), whiteSpace: 'nowrap' };
          }

          var isBorderBox = ($this.css('box-sizing') === 'border-box');
          var isTextarea = $this.is('textarea');

          var ol = $('<label />')
            .text($this.attr('placeholder'))
            .addClass(config.cls)
            .css($.extend({
              position:'absolute',
              display: 'inline',
              'float':'none',
              overflow:'hidden',
              textAlign: 'left',
              color: config.color,
              cursor: 'text',
              paddingTop: !isTextarea && isBorderBox ? '0' : $this.css('padding-top'),
              paddingRight: $this.css('padding-right'),
              paddingBottom: !isTextarea && isBorderBox ? '0' : $this.css('padding-bottom'),
              paddingLeft: $this.css('padding-left'),
              fontSize: $this.css('font-size'),
              fontFamily: $this.css('font-family'),
              fontStyle: $this.css('font-style'),
              fontWeight: $this.css('font-weight'),
              textTransform: $this.css('text-transform'),
              backgroundColor: 'transparent',
              zIndex: 99
            }, possible_line_height))
            .css(calcPositionCss(this))
            .attr('for', this.id)
            .data('target',$this)
            .click(function(){
                if (!$(this).data('target').is(':disabled')) {
                    $(this).data('target').focus();
                }
            })
            .insertBefore(this);
            $this
                .data('placeholder', ol)
                .on('keydown', function () {
                    ol.hide();
                })
                .on('blur change', function () {
                    ol[$this.val().length ? 'hide' : 'show']();
                })
                .triggerHandler('blur');
          $(window).one("resize", function () { adjustToResizing(ol); });
        }
      });
    }
  });
})(jQuery);

jQuery(document).add(window).bind('ready load', function() {
  if (jQuery.placeholder) {
    jQuery.placeholder.shim();
  }
});


/* angular-placeholder-shim version 0.3.0
 * License: MIT.
 * Copyright (C) 2013, Uri Shaked.
 */

'use strict';

angular.module('placeholderShim', [])
	.directive('placeholder', ['$interpolate', '$timeout', function ($interpolate, $timeout) {
		if (jQuery.placeholder.browser_supported()) {
			return {};
		}

		return function (scope, element) {
			var config = {
				color: '#888',
				cls: 'placeholder'
			};

			var interpolatedPlaceholder = $interpolate(element.attr('placeholder'));
			var placeholderText = null;

			var overlay = null;
			var pendingTimer = null;

			function addPlaceholder() {
				pendingTimer = $timeout(function () {
					element._placeholder_shim(config);
					overlay = element.data('placeholder');
					pendingTimer = null;
				});
			}

			if (element.is(':visible')) {
				addPlaceholder();
			}

			// The following code accounts for value changes from within the code
			// and for dynamic changes in placeholder text
			scope.$watch(function () {
				if (!overlay && element.is(':visible') && !pendingTimer) {
					addPlaceholder();
				}
				if (overlay && (element.get(0) !== document.activeElement)) {
					if (element.val().length) {
						overlay.hide();
					} else {
						overlay.show();
					}
				}
				if (overlay) {
					var newText = interpolatedPlaceholder(scope);
					if (newText !== placeholderText) {
						placeholderText = newText;
						overlay.text(placeholderText);
					}
				}
			});

			scope.$on('$destroy', function() {
				if (pendingTimer) {
					$timeout.cancel(pendingTimer);
					pendingTimer = null;
				}
			});
		};
	}]);

/**
 * @license Angulartics v0.14.15
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * License: MIT
 */
(function(angular, analytics) {
'use strict';

var angulartics = window.angulartics || (window.angulartics = {});
angulartics.waitForVendorApi = function (objectName, delay, registerFn) {
  if (!Object.prototype.hasOwnProperty.call(window, objectName)) {
    setTimeout(function () { angulartics.waitForVendorApi(objectName, delay, registerFn); }, delay);
  }
  else {
    registerFn(window[objectName]);
  }
};

/**
 * @ngdoc overview
 * @name angulartics
 */
angular.module('angulartics', [])
.provider('$analytics', function () {
  var settings = {
    pageTracking: {
      autoTrackFirstPage: true,
      autoTrackVirtualPages: true,
      trackRelativePath: false,
      basePath: '',
      bufferFlushDelay: 1000
    },
    eventTracking: {
      bufferFlushDelay: 1000
    }
  };

  var cache = {
    pageviews: [],
    events: []
  };

  var bufferedPageTrack = function (path) {
    cache.pageviews.push(path);
  };
  var bufferedEventTrack = function (event, properties) {
    cache.events.push({name: event, properties: properties});
  };

  var api = {
    settings: settings,
    pageTrack: bufferedPageTrack,
    eventTrack: bufferedEventTrack
  };

  var registerPageTrack = function (fn) {
    api.pageTrack = fn;
    angular.forEach(cache.pageviews, function (path, index) {
      setTimeout(function () { api.pageTrack(path); }, index * settings.pageTracking.bufferFlushDelay);
    });
  };
  var registerEventTrack = function (fn) {
    api.eventTrack = fn;
    angular.forEach(cache.events, function (event, index) {
      setTimeout(function () { api.eventTrack(event.name, event.properties); }, index * settings.eventTracking.bufferFlushDelay);
    });
  };

  return {
    $get: function() { return api; },
    settings: settings,
    virtualPageviews: function (value) { this.settings.pageTracking.autoTrackVirtualPages = value; },
    firstPageview: function (value) { this.settings.pageTracking.autoTrackFirstPage = value; },
    withBase: function (value) { this.settings.pageTracking.basePath = (value) ? angular.element('base').attr('href').slice(0, -1) : ''; },
    registerPageTrack: registerPageTrack,
    registerEventTrack: registerEventTrack
  };
})

.run(['$rootScope', '$location', '$analytics', function ($rootScope, $location, $analytics) {
  if ($analytics.settings.pageTracking.autoTrackFirstPage) {
    if ($analytics.settings.trackRelativePath) {
        $analytics.pageTrack($location.url());
    } else {
	$analytics.pageTrack($location.absUrl());
    }
  }
  if ($analytics.settings.pageTracking.autoTrackVirtualPages) {
    $rootScope.$on('$locationChangeSuccess', function (event, current) {
      if (current && (current.$$route||current).redirectTo) return;
      var url = $analytics.settings.pageTracking.basePath + $location.url();
      $analytics.pageTrack(url);
    });
  }
}])

.directive('analyticsOn', ['$analytics', function ($analytics) {
  function isCommand(element) {
    return ['a:','button:','button:button','button:submit','input:button','input:submit'].indexOf(
      element.tagName.toLowerCase()+':'+(element.type||'')) >= 0;
  }

  function inferEventType(element) {
    if (isCommand(element)) return 'click';
    return 'click';
  }

  function inferEventName(element) {
    if (isCommand(element)) return element.innerText || element.value;
    return element.id || element.name || element.tagName;
  }

  function isProperty(name) {
    return name.substr(0, 9) === 'analytics' && ['on', 'event'].indexOf(name.substr(10)) === -1;
  }

  return {
    restrict: 'A',
    scope: false,
    link: function ($scope, $element, $attrs) {
      var eventType = $attrs.analyticsOn || inferEventType($element[0]);

      angular.element($element[0]).bind(eventType, function () {
        var eventName = $attrs.analyticsEvent || inferEventName($element[0]);
        var properties = {};
        angular.forEach($attrs.$attr, function(attr, name) {
            if (isProperty(name)) {
                properties[name.slice(9).toLowerCase()] = $attrs[name];
            }
        });

        $analytics.eventTrack(eventName, properties);
      });
    }
  };
}]);
})(angular);

/**
 * @license Angulartics v0.14.15
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Universal Analytics update contributed by http://github.com/willmcclellan
 * License: MIT
 */
(function(angular) {
'use strict';

/**
 * @ngdoc overview
 * @name angulartics.google.analytics
 * Enables analytics support for Google Analytics (http://google.com/analytics)
 */
angular.module('angulartics.google.analytics', ['angulartics'])
.config(['$analyticsProvider', function ($analyticsProvider) {

  // GA already supports buffered invocations so we don't need
  // to wrap these inside angulartics.waitForVendorApi

  $analyticsProvider.settings.trackRelativePath = true;

  $analyticsProvider.registerPageTrack(function (path) {
    if (window._gaq) _gaq.push(['_trackPageview', path]);
    if (window.ga) ga('send', 'pageview', path);
  });

  /**
   * Track Event in GA
   * @name eventTrack
   *
   * @param {string} action Required 'action' (string) associated with the event
   * @param {object} properties Comprised of the mandatory field 'category' (string) and optional  fields 'label' (string), 'value' (integer) and 'noninteraction' (boolean)
   *
   * @link https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#SettingUpEventTracking
   *
   * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/events
   */
  $analyticsProvider.registerEventTrack(function (action, properties) {
    if (window._gaq) {
      _gaq.push(['_trackEvent', properties.category, action, properties.label, properties.value, properties.noninteraction]);
    }
    else if (window.ga) {
      if (properties.noninteraction) {
        ga('send', 'event', properties.category, action, properties.label, properties.value, {nonInteraction: 1});
      } else {
        ga('send', 'event', properties.category, action, properties.label, properties.value);
      }
    }
  });
  
}]);
})(angular);

/*! jQuery UI - v1.10.3 - 2013-12-13
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.sortable.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var s,n,r,o=t.nodeName.toLowerCase();return"area"===o?(s=t.parentNode,n=s.name,t.href&&n&&"map"===s.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&a(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&a(t)}function a(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,a){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),a&&a.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var a,s,n=e(this[0]);n.length&&n[0]!==document;){if(a=n.css("position"),("absolute"===a||"relative"===a||"fixed"===a)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,a){return!!e.data(t,a[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var a=e.attr(t,"tabindex"),s=isNaN(a);return(s||a>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,a){function s(t,i,a,s){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,a&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===a?["Left","Right"]:["Top","Bottom"],r=a.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+a]=function(i){return i===t?o["inner"+a].call(this):this.each(function(){e(this).css(r,s(this,i)+"px")})},e.fn["outer"+a]=function(t,i){return"number"!=typeof t?o["outer"+a].call(this,t):this.each(function(){e(this).css(r,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,a){var s,n=e.ui[t].prototype;for(s in a)n.plugins[s]=n.plugins[s]||[],n.plugins[s].push([i,a[s]])},call:function(e,t,i){var a,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(a=0;s.length>a;a++)e.options[s[a][0]]&&s[a][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var a=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[a]>0?!0:(t[a]=1,s=t[a]>0,t[a]=0,s)}})})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,a=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(n){}a(t)},e.widget=function(i,s,a){var n,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],n=u+"-"+i,a||(a=s,s=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:a.version,_proto:e.extend({},a),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(a,function(i,a){return e.isFunction(a)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,n=this._superApply;return this._super=e,this._superApply=t,i=a.apply(this,arguments),this._super=s,this._superApply=n,i}}(),t):(l[i]=a,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:n}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var a,n,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(a in r[o])n=r[o][a],r[o].hasOwnProperty(a)&&n!==t&&(i[a]=e.isPlainObject(n)?e.isPlainObject(i[a])?e.widget.extend({},i[a],n):e.widget.extend({},n):n);return i},e.widget.bridge=function(i,a){var n=a.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,a=e.data(this,n);return a?e.isFunction(a[r])&&"_"!==r.charAt(0)?(s=a[r].apply(a,h),s!==a&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,n);t?t.option(r||{})._init():e.data(this,n,new a(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var a,n,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},a=i.split("."),i=a.shift(),a.length){for(n=o[i]=e.widget.extend({},this.options[i]),r=0;a.length-1>r;r++)n[a[r]]=n[a[r]]||{},n=n[a[r]];if(i=a.pop(),s===t)return n[i]===t?null:n[i];n[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,a){var n,r=this;"boolean"!=typeof i&&(a=s,s=i,i=!1),a?(s=n=e(s),this.bindings=this.bindings.add(s)):(a=s,s=this.element,n=this.widget()),e.each(a,function(a,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=a.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?n.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var a,n,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],n=i.originalEvent)for(a in n)a in i||(i[a]=n[a]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,a,n){"string"==typeof a&&(a={effect:a});var r,o=a?a===!0||"number"==typeof a?i:a.effect||i:t;a=a||{},"number"==typeof a&&(a={duration:a}),r=!e.isEmptyObject(a),a.complete=n,a.delay&&s.delay(a.delay),r&&e.effects&&e.effects.effect[o]?s[t](a):o!==t&&s[o]?s[o](a.duration,a.easing,n):s.queue(function(i){e(this)[t](),n&&n.call(s[0]),i()})}})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,a=1===i.which,n="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return a&&!n&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var a=this._uiHash();if(this._trigger("drag",t,a)===!1)return this._mouseUp({}),!1;this.position=a.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,a=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(a=e.ui.ddmanager.drop(this,t)),this.dropped&&(a=this.dropped,this.dropped=!1),"original"!==this.options.helper||e.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!a||"valid"===this.options.revert&&a||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,a)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,a=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return a.parents("body").length||a.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),a[0]===this.element[0]||/(fixed|absolute)/.test(a.css("position"))||a.css("position","absolute"),a},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,a,s=this.options;return s.containment?"window"===s.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===s.containment?(this.containment=[0,0,e(document).width()-this.helperProportions.width-this.margins.left,(e(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):s.containment.constructor===Array?(this.containment=s.containment,undefined):("parent"===s.containment&&(s.containment=this.helper[0].parentNode),i=e(s.containment),a=i[0],a&&(t="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(a.scrollWidth,a.offsetWidth):a.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(a.scrollHeight,a.offsetHeight):a.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(t,i){i||(i=this.position);var a="absolute"===t?1:-1,s="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:s.scrollTop(),left:s.scrollLeft()}),{top:i.top+this.offset.relative.top*a+this.offset.parent.top*a-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*a,left:i.left+this.offset.relative.left*a+this.offset.parent.left*a-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*a}},_generatePosition:function(t){var i,a,s,n,r=this.options,o="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=t.pageX,h=t.pageY;return this.offset.scroll||(this.offset.scroll={top:o.scrollTop(),left:o.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(a=this.relative_container.offset(),i=[this.containment[0]+a.left,this.containment[1]+a.top,this.containment[2]+a.left,this.containment[3]+a.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),r.grid&&(s=r.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY,h=i?s-this.offset.click.top>=i[1]||s-this.offset.click.top>i[3]?s:s-this.offset.click.top>=i[1]?s-r.grid[1]:s+r.grid[1]:s,n=r.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX,l=i?n-this.offset.click.left>=i[0]||n-this.offset.click.left>i[2]?n:n-this.offset.click.left>=i[0]?n-r.grid[0]:n+r.grid[0]:n)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,a){return a=a||this._uiHash(),e.ui.plugin.call(this,t,[i,a]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,a)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var a=e(this).data("ui-draggable"),s=a.options,n=e.extend({},i,{item:a.element});a.sortables=[],e(s.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(a.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i){var a=e(this).data("ui-draggable"),s=e.extend({},i,{item:a.element});e.each(a.sortables,function(){this.instance.isOver?(this.instance.isOver=0,a.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===a.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,s))})},drag:function(t,i){var a=e(this).data("ui-draggable"),s=this;e.each(a.sortables,function(){var n=!1,r=this;this.instance.positionAbs=a.positionAbs,this.instance.helperProportions=a.helperProportions,this.instance.offset.click=a.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(n=!0,e.each(a.sortables,function(){return this.instance.positionAbs=a.positionAbs,this.instance.helperProportions=a.helperProportions,this.instance.offset.click=a.offset.click,this!==r&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(r.instance.element[0],this.instance.element[0])&&(n=!1),n})),n?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(s).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=a.offset.click.top,this.instance.offset.click.left=a.offset.click.left,this.instance.offset.parent.left-=a.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=a.offset.parent.top-this.instance.offset.parent.top,a._trigger("toSortable",t),a.dropped=this.instance.element,a.currentItem=a.element,this.instance.fromOutside=a),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),a._trigger("fromSortable",t),a.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var a=e(i.helper),s=e(this).data("ui-draggable").options;a.css("opacity")&&(s._opacity=a.css("opacity")),a.css("opacity",s.opacity)},stop:function(t,i){var a=e(this).data("ui-draggable").options;a._opacity&&e(i.helper).css("opacity",a._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),a=i.options,s=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(a.axis&&"x"===a.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<a.scrollSensitivity?i.scrollParent[0].scrollTop=s=i.scrollParent[0].scrollTop+a.scrollSpeed:t.pageY-i.overflowOffset.top<a.scrollSensitivity&&(i.scrollParent[0].scrollTop=s=i.scrollParent[0].scrollTop-a.scrollSpeed)),a.axis&&"y"===a.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<a.scrollSensitivity?i.scrollParent[0].scrollLeft=s=i.scrollParent[0].scrollLeft+a.scrollSpeed:t.pageX-i.overflowOffset.left<a.scrollSensitivity&&(i.scrollParent[0].scrollLeft=s=i.scrollParent[0].scrollLeft-a.scrollSpeed))):(a.axis&&"x"===a.axis||(t.pageY-e(document).scrollTop()<a.scrollSensitivity?s=e(document).scrollTop(e(document).scrollTop()-a.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<a.scrollSensitivity&&(s=e(document).scrollTop(e(document).scrollTop()+a.scrollSpeed))),a.axis&&"y"===a.axis||(t.pageX-e(document).scrollLeft()<a.scrollSensitivity?s=e(document).scrollLeft(e(document).scrollLeft()-a.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<a.scrollSensitivity&&(s=e(document).scrollLeft(e(document).scrollLeft()+a.scrollSpeed)))),s!==!1&&e.ui.ddmanager&&!a.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),a=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:a.top,left:a.left})})},drag:function(t,i){var a,s,n,r,o,l,h,u,d,c,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,y=i.offset.top,b=y+p.helperProportions.height;for(d=p.snapElements.length-1;d>=0;d--)o=p.snapElements[d].left,l=o+p.snapElements[d].width,h=p.snapElements[d].top,u=h+p.snapElements[d].height,o-m>v||g>l+m||h-m>b||y>u+m||!e.contains(p.snapElements[d].item.ownerDocument,p.snapElements[d].item)?(p.snapElements[d].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[d].item})),p.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(a=m>=Math.abs(h-b),s=m>=Math.abs(u-y),n=m>=Math.abs(o-v),r=m>=Math.abs(l-g),a&&(i.position.top=p._convertPositionTo("relative",{top:h-p.helperProportions.height,left:0}).top-p.margins.top),s&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),n&&(i.position.left=p._convertPositionTo("relative",{top:0,left:o-p.helperProportions.width}).left-p.margins.left),r&&(i.position.left=p._convertPositionTo("relative",{top:0,left:l}).left-p.margins.left)),c=a||s||n||r,"outer"!==f.snapMode&&(a=m>=Math.abs(h-y),s=m>=Math.abs(u-b),n=m>=Math.abs(o-g),r=m>=Math.abs(l-v),a&&(i.position.top=p._convertPositionTo("relative",{top:h,left:0}).top-p.margins.top),s&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.left=p._convertPositionTo("relative",{top:0,left:o}).left-p.margins.left),r&&(i.position.left=p._convertPositionTo("relative",{top:0,left:l-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[d].snapping&&(a||s||n||r||c)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[d].item})),p.snapElements[d].snapping=a||s||n||r||c)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,a=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});a.length&&(t=parseInt(e(a[0]).css("zIndex"),10)||0,e(a).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+a.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var a=e(i.helper),s=e(this).data("ui-draggable").options;a.css("zIndex")&&(s._zIndex=a.css("zIndex")),a.css("zIndex",s.zIndex)},stop:function(t,i){var a=e(this).data("ui-draggable").options;a._zIndex&&e(i.helper).css("zIndex",a._zIndex)}})})(jQuery);(function(e){function t(e,t,i){return e>t&&t+i>e}e.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this.options,i=t.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(i)?i:function(e){return e.is(i)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var t=0,i=e.ui.ddmanager.droppables[this.options.scope];i.length>t;t++)i[t]===this&&i.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){"accept"===t&&(this.accept=e.isFunction(i)?i:function(e){return e.is(i)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var a=i||e.ui.ddmanager.current,s=!1;return a&&(a.currentItem||a.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");return t.options.greedy&&!t.options.disabled&&t.options.scope===a.options.scope&&t.accept.call(t.element[0],a.currentItem||a.element)&&e.ui.intersect(a,e.extend(t,{offset:t.element.offset()}),t.options.tolerance)?(s=!0,!1):undefined}),s?!1:this.accept.call(this.element[0],a.currentItem||a.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(a)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(e,i,a){if(!i.offset)return!1;var s,n,r=(e.positionAbs||e.position.absolute).left,o=r+e.helperProportions.width,l=(e.positionAbs||e.position.absolute).top,h=l+e.helperProportions.height,u=i.offset.left,d=u+i.proportions.width,c=i.offset.top,p=c+i.proportions.height;switch(a){case"fit":return r>=u&&d>=o&&l>=c&&p>=h;case"intersect":return r+e.helperProportions.width/2>u&&d>o-e.helperProportions.width/2&&l+e.helperProportions.height/2>c&&p>h-e.helperProportions.height/2;case"pointer":return s=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,n=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,t(n,c,i.proportions.height)&&t(s,u,i.proportions.width);case"touch":return(l>=c&&p>=l||h>=c&&p>=h||c>l&&h>p)&&(r>=u&&d>=r||o>=u&&d>=o||u>r&&o>d);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var a,s,n=e.ui.ddmanager.droppables[t.options.scope]||[],r=i?i.type:null,o=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(a=0;n.length>a;a++)if(!(n[a].options.disabled||t&&!n[a].accept.call(n[a].element[0],t.currentItem||t.element))){for(s=0;o.length>s;s++)if(o[s]===n[a].element[0]){n[a].proportions.height=0;continue e}n[a].visible="none"!==n[a].element.css("display"),n[a].visible&&("mousedown"===r&&n[a]._activate.call(n[a],i),n[a].offset=n[a].element.offset(),n[a].proportions={width:n[a].element[0].offsetWidth,height:n[a].element[0].offsetHeight})}},drop:function(t,i){var a=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(a=this._drop.call(this,i)||a),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),a},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var a,s,n,r=e.ui.intersect(t,this,this.options.tolerance),o=!r&&this.isover?"isout":r&&!this.isover?"isover":null;o&&(this.options.greedy&&(s=this.options.scope,n=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===s}),n.length&&(a=e.data(n[0],"ui-droppable"),a.greedyChild="isover"===o)),a&&"isover"===o&&(a.isover=!1,a.isout=!0,a._out.call(a,i)),this[o]=!0,this["isout"===o?"isover":"isout"]=!1,this["isover"===o?"_over":"_out"].call(this,i),a&&"isout"===o&&(a.isout=!1,a.isover=!0,a._over.call(a,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}}})(jQuery);(function(e){function t(e,t,i){return e>t&&t+i>e}function i(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))}e.widget("ui.sortable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===e.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,i){"disabled"===t?(this.options[t]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,i){var s=null,a=!1,n=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,n.widgetName+"-item")===n?(s=e(this),!1):undefined}),e.data(t.target,n.widgetName+"-item")===n&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(a=!0)}),a)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var a,n,r=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,r.cursorAt&&this._adjustOffsetFromHelper(r.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),r.containment&&this._setContainment(),r.cursor&&"auto"!==r.cursor&&(n=this.document.find("body"),this.storedCursor=n.css("cursor"),n.css("cursor",r.cursor),this.storedStylesheet=e("<style>*{ cursor: "+r.cursor+" !important; }</style>").appendTo(n)),r.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",r.opacity)),r.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",r.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(a=this.containers.length-1;a>=0;a--)this.containers[a]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,a,n,r=this.options,o=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<r.scrollSensitivity?this.scrollParent[0].scrollTop=o=this.scrollParent[0].scrollTop+r.scrollSpeed:t.pageY-this.overflowOffset.top<r.scrollSensitivity&&(this.scrollParent[0].scrollTop=o=this.scrollParent[0].scrollTop-r.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity?this.scrollParent[0].scrollLeft=o=this.scrollParent[0].scrollLeft+r.scrollSpeed:t.pageX-this.overflowOffset.left<r.scrollSensitivity&&(this.scrollParent[0].scrollLeft=o=this.scrollParent[0].scrollLeft-r.scrollSpeed)):(t.pageY-e(document).scrollTop()<r.scrollSensitivity?o=e(document).scrollTop(e(document).scrollTop()-r.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<r.scrollSensitivity&&(o=e(document).scrollTop(e(document).scrollTop()+r.scrollSpeed)),t.pageX-e(document).scrollLeft()<r.scrollSensitivity?o=e(document).scrollLeft(e(document).scrollLeft()-r.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<r.scrollSensitivity&&(o=e(document).scrollLeft(e(document).scrollLeft()+r.scrollSpeed))),o!==!1&&e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],a=s.item[0],n=this._intersectsWithPointer(s),n&&s.instance===this.currentContainer&&a!==this.currentItem[0]&&this.placeholder[1===n?"next":"prev"]()[0]!==a&&!e.contains(this.placeholder[0],a)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],a):!0)){if(this.direction=1===n?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,a=this.placeholder.offset(),n=this.options.axis,r={};n&&"x"!==n||(r.left=a.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),n&&"y"!==n||(r.top=a.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(r,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,a=s+this.helperProportions.height,n=e.left,r=n+e.width,o=e.top,h=o+e.height,l=this.offset.click.top,u=this.offset.click.left,c="x"===this.options.axis||s+l>o&&h>s+l,d="y"===this.options.axis||t+u>n&&r>t+u,p=c&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>n&&r>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>o&&h>a-this.helperProportions.height/2},_intersectsWithPointer:function(e){var i="x"===this.options.axis||t(this.positionAbs.top+this.offset.click.top,e.top,e.height),s="y"===this.options.axis||t(this.positionAbs.left+this.offset.click.left,e.left,e.width),a=i&&s,n=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection();return a?this.floating?r&&"right"===r||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var i=t(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),s=t(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),a=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&s||"left"===n&&!s:a&&("down"===a&&i||"up"===a&&!i)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var i,s,a,n,r=[],o=[],h=this._connectWith();if(h&&t)for(i=h.length-1;i>=0;i--)for(a=e(h[i]),s=a.length-1;s>=0;s--)n=e.data(a[s],this.widgetFullName),n&&n!==this&&!n.options.disabled&&o.push([e.isFunction(n.options.items)?n.options.items.call(n.element):e(n.options.items,n.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),n]);for(o.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),i=o.length-1;i>=0;i--)o[i][0].each(function(){r.push(this)});return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,a,n,r,o,h,l,u=this.items,c=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(a=e(d[i]),s=a.length-1;s>=0;s--)n=e.data(a[s],this.widgetFullName),n&&n!==this&&!n.options.disabled&&(c.push([e.isFunction(n.options.items)?n.options.items.call(n.element[0],t,{item:this.currentItem}):e(n.options.items,n.element),n]),this.containers.push(n));for(i=c.length-1;i>=0;i--)for(r=c[i][1],o=c[i][0],s=0,l=o.length;l>s;s++)h=e(o[s]),h.data(this.widgetName+"-item",r),u.push({item:h,instance:r,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,a,n;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(a=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=a.outerWidth(),s.height=a.outerHeight()),n=a.offset(),s.left=n.left,s.top=n.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)n=this.containers[i].element.offset(),this.containers[i].containerCache.left=n.left,this.containers[i].containerCache.top=n.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),a=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?t.currentItem.children().each(function(){e("<td>&#160;</td>",t.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(a)}):"img"===s&&a.attr("src",t.currentItem.attr("src")),i||a.css("visibility","hidden"),a},update:function(e,a){(!i||s.forcePlaceholderSize)&&(a.height()||a.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),a.width()||a.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_contactContainers:function(s){var a,n,r,o,h,l,u,c,d,p,f=null,m=null;for(a=this.containers.length-1;a>=0;a--)if(!e.contains(this.currentItem[0],this.containers[a].element[0]))if(this._intersectsWith(this.containers[a].containerCache)){if(f&&e.contains(this.containers[a].element[0],f.element[0]))continue;f=this.containers[a],m=a}else this.containers[a].containerCache.over&&(this.containers[a]._trigger("out",s,this._uiHash(this)),this.containers[a].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[m].containerCache.over||(this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1);else{for(r=1e4,o=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",u=this.positionAbs[h]+this.offset.click[h],n=this.items.length-1;n>=0;n--)e.contains(this.containers[m].element[0],this.items[n].item[0])&&this.items[n].item[0]!==this.currentItem[0]&&(!p||t(this.positionAbs.top+this.offset.click.top,this.items[n].top,this.items[n].height))&&(c=this.items[n].item.offset()[h],d=!1,Math.abs(c-u)>Math.abs(c+this.items[n][l]-u)&&(d=!0,c+=this.items[n][l]),r>Math.abs(c-u)&&(r=Math.abs(c-u),o=this.items[n],this.direction=d?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[m])return;o?this._rearrange(s,o,null,!0):this._rearrange(s,null,this.containers[m].element,!0),this._trigger("change",s,this._uiHash()),this.containers[m]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[m],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,a=this.options;"parent"===a.containment&&(a.containment=this.helper[0].parentNode),("document"===a.containment||"window"===a.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e("document"===a.containment?document:window).width()-this.helperProportions.width-this.margins.left,(e("document"===a.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(a.containment)||(t=e(a.containment)[0],i=e(a.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,a="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,n=/(html|body)/i.test(a[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():n?0:a.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():n?0:a.scrollLeft())*s}},_generatePosition:function(t){var i,s,a=this.options,n=t.pageX,r=t.pageY,o="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(o[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(n=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(r=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(n=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(r=this.containment[3]+this.offset.click.top)),a.grid&&(i=this.originalPageY+Math.round((r-this.originalPageY)/a.grid[1])*a.grid[1],r=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-a.grid[1]:i+a.grid[1]:i,s=this.originalPageX+Math.round((n-this.originalPageX)/a.grid[0])*a.grid[0],n=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-a.grid[0]:s+a.grid[0]:s)),{top:r-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:o.scrollTop()),left:n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:o.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var a=this.counter;this._delay(function(){a===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){this.reverting=!1;var i,s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)("auto"===this._storedCSS[i]||"static"===this._storedCSS[i])&&(this._storedCSS[i]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&s.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||s.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(s.push(function(e){this._trigger("remove",e,this._uiHash())}),s.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)t||s.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(s.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!t){for(this._trigger("beforeStop",e,this._uiHash()),i=0;s.length>i;i++)s[i].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!1}if(t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!t){for(i=0;s.length>i;i++)s[i].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}})})(jQuery);
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);
/*!jQuery Knob*/
/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.0 (15/07/2012)
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
(function(e){"use strict";var t={},n=Math.max,r=Math.min;t.c={};t.c.d=e(document);t.c.t=function(e){return e.originalEvent.touches.length-1};t.o=function(){var n=this;this.o=null;this.$=null;this.i=null;this.g=null;this.v=null;this.cv=null;this.x=0;this.y=0;this.w=0;this.h=0;this.$c=null;this.c=null;this.t=0;this.isInit=false;this.fgColor=null;this.pColor=null;this.dH=null;this.cH=null;this.eH=null;this.rH=null;this.scale=1;this.relative=false;this.relativeWidth=false;this.relativeHeight=false;this.$div=null;this.run=function(){var t=function(e,t){var r;for(r in t){n.o[r]=t[r]}n.init();n._configure()._draw()};if(this.$.data("kontroled"))return;this.$.data("kontroled",true);this.extend();this.o=e.extend({min:this.$.data("min")||0,max:this.$.data("max")||100,stopper:true,readOnly:this.$.data("readonly")||this.$.attr("readonly")=="readonly",cursor:this.$.data("cursor")===true&&30||this.$.data("cursor")||0,thickness:this.$.data("thickness")&&Math.max(Math.min(this.$.data("thickness"),1),.01)||.35,lineCap:this.$.data("linecap")||"butt",width:this.$.data("width")||200,height:this.$.data("height")||200,displayInput:this.$.data("displayinput")==null||this.$.data("displayinput"),displayPrevious:this.$.data("displayprevious"),fgColor:this.$.data("fgcolor")||"#87CEEB",inputColor:this.$.data("inputcolor"),font:this.$.data("font")||"Arial",fontWeight:this.$.data("font-weight")||"bold",inline:false,step:this.$.data("step")||1,draw:null,change:null,cancel:null,release:null,error:null},this.o);if(!this.o.inputColor){this.o.inputColor=this.o.fgColor}if(this.$.is("fieldset")){this.v={};this.i=this.$.find("input");this.i.each(function(t){var r=e(this);n.i[t]=r;n.v[t]=r.val();r.bind("change",function(){var e={};e[t]=r.val();n.val(e)})});this.$.find("legend").remove()}else{this.i=this.$;this.v=this.$.val();this.v==""&&(this.v=this.o.min);this.$.bind("change",function(){n.val(n._validate(n.$.val()))})}!this.o.displayInput&&this.$.hide();this.$c=e(document.createElement("canvas"));if(typeof G_vmlCanvasManager!=="undefined"){G_vmlCanvasManager.initElement(this.$c[0])}this.c=this.$c[0].getContext?this.$c[0].getContext("2d"):null;if(!this.c){this.o.error&&this.o.error();return}this.scale=(window.devicePixelRatio||1)/(this.c.webkitBackingStorePixelRatio||this.c.mozBackingStorePixelRatio||this.c.msBackingStorePixelRatio||this.c.oBackingStorePixelRatio||this.c.backingStorePixelRatio||1);this.relativeWidth=this.o.width%1!==0&&this.o.width.indexOf("%");this.relativeHeight=this.o.height%1!==0&&this.o.height.indexOf("%");this.relative=this.relativeWidth||this.relativeHeight;this.$div=e('<div style="'+(this.o.inline?"display:inline;":"")+'"></div>');this.$.wrap(this.$div).before(this.$c);this.$div=this.$.parent();this._carve();if(this.v instanceof Object){this.cv={};this.copy(this.v,this.cv)}else{this.cv=this.v}this.$.bind("configure",t).parent().bind("configure",t);this._listen()._configure()._xy().init();this.isInit=true;this._draw();return this};this._carve=function(){if(this.relative){var e=this.relativeWidth?this.$div.parent().width()*parseInt(this.o.width)/100:this.$div.parent().width(),t=this.relativeHeight?this.$div.parent().height()*parseInt(this.o.height)/100:this.$div.parent().height();this.w=this.h=Math.min(e,t)}else{this.w=this.o.width;this.h=this.o.height}this.$div.css({width:this.w+"px",height:this.h+"px"});this.$c.attr({width:this.w,height:this.h});if(this.scale!==1){this.$c[0].width=this.$c[0].width*this.scale;this.$c[0].height=this.$c[0].height*this.scale;this.$c.width(this.w);this.$c.height(this.h)}return this};this._draw=function(){var e=true;n.g=n.c;n.clear();n.dH&&(e=n.dH());e!==false&&n.draw()};this._touch=function(e){var r=function(e){var t=n.xy2val(e.originalEvent.touches[n.t].pageX,e.originalEvent.touches[n.t].pageY);if(t==n.cv)return;if(n.cH&&n.cH(t)===false)return;n.change(n._validate(t));n._draw()};this.t=t.c.t(e);r(e);t.c.d.bind("touchmove.k",r).bind("touchend.k",function(){t.c.d.unbind("touchmove.k touchend.k");if(n.rH&&n.rH(n.cv)===false)return;n.val(n.cv)});return this};this._mouse=function(e){var r=function(e){var t=n.xy2val(e.pageX,e.pageY);if(t==n.cv)return;if(n.cH&&n.cH(t)===false)return;n.change(n._validate(t));n._draw()};r(e);t.c.d.bind("mousemove.k",r).bind("keyup.k",function(e){if(e.keyCode===27){t.c.d.unbind("mouseup.k mousemove.k keyup.k");if(n.eH&&n.eH()===false)return;n.cancel()}}).bind("mouseup.k",function(e){t.c.d.unbind("mousemove.k mouseup.k keyup.k");if(n.rH&&n.rH(n.cv)===false)return;n.val(n.cv)});return this};this._xy=function(){var e=this.$c.offset();this.x=e.left;this.y=e.top;return this};this._listen=function(){if(!this.o.readOnly){this.$c.bind("mousedown",function(e){e.preventDefault();n._xy()._mouse(e)}).bind("touchstart",function(e){e.preventDefault();n._xy()._touch(e)});this.listen()}else{this.$.attr("readonly","readonly")}if(this.relative){e(window).resize(function(){n._carve().init();n._draw()})}return this};this._configure=function(){if(this.o.draw)this.dH=this.o.draw;if(this.o.change)this.cH=this.o.change;if(this.o.cancel)this.eH=this.o.cancel;if(this.o.release)this.rH=this.o.release;if(this.o.displayPrevious){this.pColor=this.h2rgba(this.o.fgColor,"0.4");this.fgColor=this.h2rgba(this.o.fgColor,"0.6")}else{this.fgColor=this.o.fgColor}return this};this._clear=function(){this.$c[0].width=this.$c[0].width};this._validate=function(e){return~~((e<0?-.5:.5)+e/this.o.step)*this.o.step};this.listen=function(){};this.extend=function(){};this.init=function(){};this.change=function(e){};this.val=function(e){};this.xy2val=function(e,t){};this.draw=function(){};this.clear=function(){this._clear()};this.h2rgba=function(e,t){var n;e=e.substring(1,7);n=[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16)];return"rgba("+n[0]+","+n[1]+","+n[2]+","+t+")"};this.copy=function(e,t){for(var n in e){t[n]=e[n]}}};t.Dial=function(){t.o.call(this);this.startAngle=null;this.xy=null;this.radius=null;this.lineWidth=null;this.cursorExt=null;this.w2=null;this.PI2=2*Math.PI;this.extend=function(){this.o=e.extend({bgColor:this.$.data("bgcolor")||"#EEEEEE",angleOffset:this.$.data("angleoffset")||0,angleArc:this.$.data("anglearc")||360,inline:true},this.o)};this.val=function(e){if(null!=e){this.cv=this.o.stopper?n(r(e,this.o.max),this.o.min):e;this.v=this.cv;this.$.val(this.v);this._draw()}else{return this.v}};this.xy2val=function(e,t){var i,s;i=Math.atan2(e-(this.x+this.w2),-(t-this.y-this.w2))-this.angleOffset;if(this.angleArc!=this.PI2&&i<0&&i>-.5){i=0}else if(i<0){i+=this.PI2}s=~~(.5+i*(this.o.max-this.o.min)/this.angleArc)+this.o.min;this.o.stopper&&(s=n(r(s,this.o.max),this.o.min));return s};this.listen=function(){var t=this,i=function(e){e.preventDefault();var n=e.originalEvent,r=n.detail||n.wheelDeltaX,i=n.detail||n.wheelDeltaY,s=parseInt(t.$.val())+(r>0||i>0?t.o.step:r<0||i<0?-t.o.step:0);if(t.cH&&t.cH(s)===false)return;t.val(s)},s,o,u=1,a={37:-t.o.step,38:t.o.step,39:t.o.step,40:-t.o.step};this.$.bind("keydown",function(i){var f=i.keyCode;if(f>=96&&f<=105){f=i.keyCode=f-48}s=parseInt(String.fromCharCode(f));if(isNaN(s)){f!==13&&f!==8&&f!==9&&f!==189&&i.preventDefault();if(e.inArray(f,[37,38,39,40])>-1){i.preventDefault();var l=parseInt(t.$.val())+a[f]*u;t.o.stopper&&(l=n(r(l,t.o.max),t.o.min));t.change(l);t._draw();o=window.setTimeout(function(){u*=2},30)}}}).bind("keyup",function(e){if(isNaN(s)){if(o){window.clearTimeout(o);o=null;u=1;t.val(t.$.val())}}else{t.$.val()>t.o.max&&t.$.val(t.o.max)||t.$.val()<t.o.min&&t.$.val(t.o.min)}});this.$c.bind("mousewheel DOMMouseScroll",i);this.$.bind("mousewheel DOMMouseScroll",i)};this.init=function(){if(this.v<this.o.min||this.v>this.o.max)this.v=this.o.min;this.$.val(this.v);this.w2=this.w/2;this.cursorExt=this.o.cursor/100;this.xy=this.w2*this.scale;this.lineWidth=this.xy*this.o.thickness;this.lineCap=this.o.lineCap;this.radius=this.xy-this.lineWidth/2;this.o.angleOffset&&(this.o.angleOffset=isNaN(this.o.angleOffset)?0:this.o.angleOffset);this.o.angleArc&&(this.o.angleArc=isNaN(this.o.angleArc)?this.PI2:this.o.angleArc);this.angleOffset=this.o.angleOffset*Math.PI/180;this.angleArc=this.o.angleArc*Math.PI/180;this.startAngle=1.5*Math.PI+this.angleOffset;this.endAngle=1.5*Math.PI+this.angleOffset+this.angleArc;var e=n(String(Math.abs(this.o.max)).length,String(Math.abs(this.o.min)).length,2)+2;this.o.displayInput&&this.i.css({width:(this.w/2+4>>0)+"px",height:(this.w/3>>0)+"px",position:"absolute","vertical-align":"middle","margin-top":(this.w/3>>0)+"px","margin-left":"-"+(this.w*3/4+2>>0)+"px",border:0,background:"none",font:this.o.fontWeight+" "+(this.w/e>>0)+"px "+this.o.font,"text-align":"center",color:this.o.inputColor||this.o.fgColor,padding:"0px","-webkit-appearance":"none"})||this.i.css({width:"0px",visibility:"hidden"})};this.change=function(e){this.cv=e;this.$.val(e)};this.angle=function(e){return(e-this.o.min)*this.angleArc/(this.o.max-this.o.min)};this.draw=function(){var e=this.g,t=this.angle(this.cv),n=this.startAngle,r=n+t,i,s,o=1;e.lineWidth=this.lineWidth;e.lineCap=this.lineCap;this.o.cursor&&(n=r-this.cursorExt)&&(r=r+this.cursorExt);e.beginPath();e.strokeStyle=this.o.bgColor;e.arc(this.xy,this.xy,this.radius,this.endAngle,this.startAngle,true);e.stroke();if(this.o.displayPrevious){s=this.startAngle+this.angle(this.v);i=this.startAngle;this.o.cursor&&(i=s-this.cursorExt)&&(s=s+this.cursorExt);e.beginPath();e.strokeStyle=this.pColor;e.arc(this.xy,this.xy,this.radius,i,s,false);e.stroke();o=this.cv==this.v}e.beginPath();e.strokeStyle=o?this.o.fgColor:this.fgColor;e.arc(this.xy,this.xy,this.radius,n,r,false);e.stroke()};this.cancel=function(){this.val(this.v)}};e.fn.dial=e.fn.knob=function(n){return this.each(function(){var r=new t.Dial;r.o=n;r.$=e(this);r.run()}).parent()}})(jQuery)
/**
 * jQuery flexText: Auto-height textareas
 * --------------------------------------
 * Requires: jQuery 1.7+
 * Usage example: $('textarea').flexText()
 * Info: https://github.com/alexdunphy/flexible-textareas
 */
 ;(function(b){function a(c){this.$textarea=b(c);this._init()}a.prototype={_init:function(){var c=this;this.$textarea.wrap('<div class="flex-text-wrap" />').before("<pre><span /><br /><br /></pre>");this.$span=this.$textarea.prev().find("span");this.$textarea.on("input propertychange keyup change",function(){c._mirror()});b.valHooks.textarea={get:function(d){return d.value.replace(/\r?\n/g,"\r\n")}};this._mirror()},_mirror:function(){this.$span.text(this.$textarea.val())}};b.fn.flexText=function(){return this.each(function(){if(!b.data(this,"flexText")){b.data(this,"flexText",new a(this))}})}})(jQuery);
/*
 * JVFloat.js
 * modified on: 11/14/2013
 */

(function($) {
	// Init Plugin Functions
	$.fn.jvFloat = function() {
		if (_ie && _ie < 9) return false;
		// Check input type - filter submit buttons.
		return this.filter('input:not([type=submit]), textarea').each(function() {
			// store placeholder text in placeHolder Variable
			var placeholderText = $(this).attr('placeholder');
			// Wrap the input in div.jvFloat
			$(this).wrap('<div class=jvFloat>');
			// Store the placeholder text in span.placeHolder
			// added `required` input detection and state
			if ($(this).attr('required')) {
				$(this).before("<span class='placeHolder required'>" + placeholderText);
			} else {
				$(this).before('<span class=placeHolder>' + placeholderText);
			}
			// checks to see if inputs are pre-populated and adds active to span.placeholder
			if ($(this).val() !== '') {
				$(this).siblings('.placeHolder').addClass('active');
				$(this).parent().addClass('active');
			}
			// change span.placeHolder to span.placeHolder.active
			$(this).bind('keyup blur', function() {
				if ($(this).val() === '') {
					$(this).siblings('.placeHolder').removeClass('active');
				} else {
					$(this).siblings('.placeHolder').addClass('active');
				}
			});
		});
	};
// Make Zeptojs & jQuery Compatible
})(window.jQuery || window.Zepto || window.$);
/*
Copyright 2014 Igor Vaynberg

Version: 3.4.8 Timestamp: Thu May  1 09:50:32 EDT 2014

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

http://www.apache.org/licenses/LICENSE-2.0
http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the Apache License
or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
either express or implied. See the Apache License and the GPL License for the specific language governing
permissions and limitations under the Apache License and the GPL License.
*/
!function(a){"undefined"==typeof a.fn.each2&&a.extend(a.fn,{each2:function(b){for(var c=a([0]),d=-1,e=this.length;++d<e&&(c.context=c[0]=this[d])&&b.call(c[0],d,c)!==!1;);return this}})}(jQuery),function(a,b){"use strict";function n(b){var c=a(document.createTextNode(""));b.before(c),c.before(b),c.remove()}function o(a){function b(a){return m[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function p(a,b){for(var c=0,d=b.length;d>c;c+=1)if(r(a,b[c]))return c;return-1}function q(){var b=a(l);b.appendTo("body");var c={width:b.width()-b[0].clientWidth,height:b.height()-b[0].clientHeight};return b.remove(),c}function r(a,c){return a===c?!0:a===b||c===b?!1:null===a||null===c?!1:a.constructor===String?a+""==c+"":c.constructor===String?c+""==a+"":!1}function s(b,c){var d,e,f;if(null===b||b.length<1)return[];for(d=b.split(c),e=0,f=d.length;f>e;e+=1)d[e]=a.trim(d[e]);return d}function t(a){return a.outerWidth(!1)-a.width()}function u(c){var d="keyup-change-value";c.on("keydown",function(){a.data(c,d)===b&&a.data(c,d,c.val())}),c.on("keyup",function(){var e=a.data(c,d);e!==b&&c.val()!==e&&(a.removeData(c,d),c.trigger("keyup-change"))})}function v(c){c.on("mousemove",function(c){var d=i;(d===b||d.x!==c.pageX||d.y!==c.pageY)&&a(c.target).trigger("mousemove-filtered",c)})}function w(a,c,d){d=d||b;var e;return function(){var b=arguments;window.clearTimeout(e),e=window.setTimeout(function(){c.apply(d,b)},a)}}function x(a,b){var c=w(a,function(a){b.trigger("scroll-debounced",a)});b.on("scroll",function(a){p(a.target,b.get())>=0&&c(a)})}function y(a){a[0]!==document.activeElement&&window.setTimeout(function(){var d,b=a[0],c=a.val().length;a.focus();var e=b.offsetWidth>0||b.offsetHeight>0;e&&b===document.activeElement&&(b.setSelectionRange?b.setSelectionRange(c,c):b.createTextRange&&(d=b.createTextRange(),d.collapse(!1),d.select()))},0)}function z(b){b=a(b)[0];var c=0,d=0;if("selectionStart"in b)c=b.selectionStart,d=b.selectionEnd-c;else if("selection"in document){b.focus();var e=document.selection.createRange();d=document.selection.createRange().text.length,e.moveStart("character",-b.value.length),c=e.text.length-d}return{offset:c,length:d}}function A(a){a.preventDefault(),a.stopPropagation()}function B(a){a.preventDefault(),a.stopImmediatePropagation()}function C(b){if(!h){var c=b[0].currentStyle||window.getComputedStyle(b[0],null);h=a(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:c.fontSize,fontFamily:c.fontFamily,fontStyle:c.fontStyle,fontWeight:c.fontWeight,letterSpacing:c.letterSpacing,textTransform:c.textTransform,whiteSpace:"nowrap"}),h.attr("class","select2-sizer"),a("body").append(h)}return h.text(b.val()),h.width()}function D(b,c,d){var e,g,f=[];e=b.attr("class"),e&&(e=""+e,a(e.split(" ")).each2(function(){0===this.indexOf("select2-")&&f.push(this)})),e=c.attr("class"),e&&(e=""+e,a(e.split(" ")).each2(function(){0!==this.indexOf("select2-")&&(g=d(this),g&&f.push(g))})),b.attr("class",f.join(" "))}function E(a,b,c,d){var e=o(a.toUpperCase()).indexOf(o(b.toUpperCase())),f=b.length;return 0>e?(c.push(d(a)),void 0):(c.push(d(a.substring(0,e))),c.push("<span class='select2-match'>"),c.push(d(a.substring(e,e+f))),c.push("</span>"),c.push(d(a.substring(e+f,a.length))),void 0)}function F(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})}function G(c){var d,e=null,f=c.quietMillis||100,g=c.url,h=this;return function(i){window.clearTimeout(d),d=window.setTimeout(function(){var d=c.data,f=g,j=c.transport||a.fn.select2.ajaxDefaults.transport,k={type:c.type||"GET",cache:c.cache||!1,jsonpCallback:c.jsonpCallback||b,dataType:c.dataType||"json"},l=a.extend({},a.fn.select2.ajaxDefaults.params,k);d=d?d.call(h,i.term,i.page,i.context):null,f="function"==typeof f?f.call(h,i.term,i.page,i.context):f,e&&"function"==typeof e.abort&&e.abort(),c.params&&(a.isFunction(c.params)?a.extend(l,c.params.call(h)):a.extend(l,c.params)),a.extend(l,{url:f,dataType:c.dataType,data:d,success:function(a){var b=c.results(a,i.page);i.callback(b)}}),e=j.call(h,l)},f)}}function H(b){var d,e,c=b,f=function(a){return""+a.text};a.isArray(c)&&(e=c,c={results:e}),a.isFunction(c)===!1&&(e=c,c=function(){return e});var g=c();return g.text&&(f=g.text,a.isFunction(f)||(d=g.text,f=function(a){return a[d]})),function(b){var g,d=b.term,e={results:[]};return""===d?(b.callback(c()),void 0):(g=function(c,e){var h,i;if(c=c[0],c.children){h={};for(i in c)c.hasOwnProperty(i)&&(h[i]=c[i]);h.children=[],a(c.children).each2(function(a,b){g(b,h.children)}),(h.children.length||b.matcher(d,f(h),c))&&e.push(h)}else b.matcher(d,f(c),c)&&e.push(c)},a(c().results).each2(function(a,b){g(b,e.results)}),b.callback(e),void 0)}}function I(c){var d=a.isFunction(c);return function(e){var f=e.term,g={results:[]},h=d?c(e):c;a.isArray(h)&&(a(h).each(function(){var a=this.text!==b,c=a?this.text:this;(""===f||e.matcher(f,c))&&g.results.push(a?this:{id:this,text:this})}),e.callback(g))}}function J(b,c){if(a.isFunction(b))return!0;if(!b)return!1;if("string"==typeof b)return!0;throw new Error(c+" must be a string, function, or falsy value")}function K(b){if(a.isFunction(b)){var c=Array.prototype.slice.call(arguments,1);return b.apply(null,c)}return b}function L(b){var c=0;return a.each(b,function(a,b){b.children?c+=L(b.children):c++}),c}function M(a,c,d,e){var h,i,j,k,l,f=a,g=!1;if(!e.createSearchChoice||!e.tokenSeparators||e.tokenSeparators.length<1)return b;for(;;){for(i=-1,j=0,k=e.tokenSeparators.length;k>j&&(l=e.tokenSeparators[j],i=a.indexOf(l),!(i>=0));j++);if(0>i)break;if(h=a.substring(0,i),a=a.substring(i+l.length),h.length>0&&(h=e.createSearchChoice.call(this,h,c),h!==b&&null!==h&&e.id(h)!==b&&null!==e.id(h))){for(g=!1,j=0,k=c.length;k>j;j++)if(r(e.id(h),e.id(c[j]))){g=!0;break}g||d(h)}}return f!==a?a:void 0}function N(){var a=this;Array.prototype.forEach.call(arguments,function(b){a[b].remove(),a[b]=null})}function O(b,c){var d=function(){};return d.prototype=new b,d.prototype.constructor=d,d.prototype.parent=b.prototype,d.prototype=a.extend(d.prototype,c),d}if(window.Select2===b){var c,d,e,f,g,h,j,k,i={x:0,y:0},c={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(a){switch(a=a.which?a.which:a){case c.LEFT:case c.RIGHT:case c.UP:case c.DOWN:return!0}return!1},isControl:function(a){var b=a.which;switch(b){case c.SHIFT:case c.CTRL:case c.ALT:return!0}return a.metaKey?!0:!1},isFunctionKey:function(a){return a=a.which?a.which:a,a>=112&&123>=a}},l="<div class='select2-measure-scrollbar'></div>",m={"\u24b6":"A","\uff21":"A","\xc0":"A","\xc1":"A","\xc2":"A","\u1ea6":"A","\u1ea4":"A","\u1eaa":"A","\u1ea8":"A","\xc3":"A","\u0100":"A","\u0102":"A","\u1eb0":"A","\u1eae":"A","\u1eb4":"A","\u1eb2":"A","\u0226":"A","\u01e0":"A","\xc4":"A","\u01de":"A","\u1ea2":"A","\xc5":"A","\u01fa":"A","\u01cd":"A","\u0200":"A","\u0202":"A","\u1ea0":"A","\u1eac":"A","\u1eb6":"A","\u1e00":"A","\u0104":"A","\u023a":"A","\u2c6f":"A","\ua732":"AA","\xc6":"AE","\u01fc":"AE","\u01e2":"AE","\ua734":"AO","\ua736":"AU","\ua738":"AV","\ua73a":"AV","\ua73c":"AY","\u24b7":"B","\uff22":"B","\u1e02":"B","\u1e04":"B","\u1e06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24b8":"C","\uff23":"C","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\xc7":"C","\u1e08":"C","\u0187":"C","\u023b":"C","\ua73e":"C","\u24b9":"D","\uff24":"D","\u1e0a":"D","\u010e":"D","\u1e0c":"D","\u1e10":"D","\u1e12":"D","\u1e0e":"D","\u0110":"D","\u018b":"D","\u018a":"D","\u0189":"D","\ua779":"D","\u01f1":"DZ","\u01c4":"DZ","\u01f2":"Dz","\u01c5":"Dz","\u24ba":"E","\uff25":"E","\xc8":"E","\xc9":"E","\xca":"E","\u1ec0":"E","\u1ebe":"E","\u1ec4":"E","\u1ec2":"E","\u1ebc":"E","\u0112":"E","\u1e14":"E","\u1e16":"E","\u0114":"E","\u0116":"E","\xcb":"E","\u1eba":"E","\u011a":"E","\u0204":"E","\u0206":"E","\u1eb8":"E","\u1ec6":"E","\u0228":"E","\u1e1c":"E","\u0118":"E","\u1e18":"E","\u1e1a":"E","\u0190":"E","\u018e":"E","\u24bb":"F","\uff26":"F","\u1e1e":"F","\u0191":"F","\ua77b":"F","\u24bc":"G","\uff27":"G","\u01f4":"G","\u011c":"G","\u1e20":"G","\u011e":"G","\u0120":"G","\u01e6":"G","\u0122":"G","\u01e4":"G","\u0193":"G","\ua7a0":"G","\ua77d":"G","\ua77e":"G","\u24bd":"H","\uff28":"H","\u0124":"H","\u1e22":"H","\u1e26":"H","\u021e":"H","\u1e24":"H","\u1e28":"H","\u1e2a":"H","\u0126":"H","\u2c67":"H","\u2c75":"H","\ua78d":"H","\u24be":"I","\uff29":"I","\xcc":"I","\xcd":"I","\xce":"I","\u0128":"I","\u012a":"I","\u012c":"I","\u0130":"I","\xcf":"I","\u1e2e":"I","\u1ec8":"I","\u01cf":"I","\u0208":"I","\u020a":"I","\u1eca":"I","\u012e":"I","\u1e2c":"I","\u0197":"I","\u24bf":"J","\uff2a":"J","\u0134":"J","\u0248":"J","\u24c0":"K","\uff2b":"K","\u1e30":"K","\u01e8":"K","\u1e32":"K","\u0136":"K","\u1e34":"K","\u0198":"K","\u2c69":"K","\ua740":"K","\ua742":"K","\ua744":"K","\ua7a2":"K","\u24c1":"L","\uff2c":"L","\u013f":"L","\u0139":"L","\u013d":"L","\u1e36":"L","\u1e38":"L","\u013b":"L","\u1e3c":"L","\u1e3a":"L","\u0141":"L","\u023d":"L","\u2c62":"L","\u2c60":"L","\ua748":"L","\ua746":"L","\ua780":"L","\u01c7":"LJ","\u01c8":"Lj","\u24c2":"M","\uff2d":"M","\u1e3e":"M","\u1e40":"M","\u1e42":"M","\u2c6e":"M","\u019c":"M","\u24c3":"N","\uff2e":"N","\u01f8":"N","\u0143":"N","\xd1":"N","\u1e44":"N","\u0147":"N","\u1e46":"N","\u0145":"N","\u1e4a":"N","\u1e48":"N","\u0220":"N","\u019d":"N","\ua790":"N","\ua7a4":"N","\u01ca":"NJ","\u01cb":"Nj","\u24c4":"O","\uff2f":"O","\xd2":"O","\xd3":"O","\xd4":"O","\u1ed2":"O","\u1ed0":"O","\u1ed6":"O","\u1ed4":"O","\xd5":"O","\u1e4c":"O","\u022c":"O","\u1e4e":"O","\u014c":"O","\u1e50":"O","\u1e52":"O","\u014e":"O","\u022e":"O","\u0230":"O","\xd6":"O","\u022a":"O","\u1ece":"O","\u0150":"O","\u01d1":"O","\u020c":"O","\u020e":"O","\u01a0":"O","\u1edc":"O","\u1eda":"O","\u1ee0":"O","\u1ede":"O","\u1ee2":"O","\u1ecc":"O","\u1ed8":"O","\u01ea":"O","\u01ec":"O","\xd8":"O","\u01fe":"O","\u0186":"O","\u019f":"O","\ua74a":"O","\ua74c":"O","\u01a2":"OI","\ua74e":"OO","\u0222":"OU","\u24c5":"P","\uff30":"P","\u1e54":"P","\u1e56":"P","\u01a4":"P","\u2c63":"P","\ua750":"P","\ua752":"P","\ua754":"P","\u24c6":"Q","\uff31":"Q","\ua756":"Q","\ua758":"Q","\u024a":"Q","\u24c7":"R","\uff32":"R","\u0154":"R","\u1e58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1e5a":"R","\u1e5c":"R","\u0156":"R","\u1e5e":"R","\u024c":"R","\u2c64":"R","\ua75a":"R","\ua7a6":"R","\ua782":"R","\u24c8":"S","\uff33":"S","\u1e9e":"S","\u015a":"S","\u1e64":"S","\u015c":"S","\u1e60":"S","\u0160":"S","\u1e66":"S","\u1e62":"S","\u1e68":"S","\u0218":"S","\u015e":"S","\u2c7e":"S","\ua7a8":"S","\ua784":"S","\u24c9":"T","\uff34":"T","\u1e6a":"T","\u0164":"T","\u1e6c":"T","\u021a":"T","\u0162":"T","\u1e70":"T","\u1e6e":"T","\u0166":"T","\u01ac":"T","\u01ae":"T","\u023e":"T","\ua786":"T","\ua728":"TZ","\u24ca":"U","\uff35":"U","\xd9":"U","\xda":"U","\xdb":"U","\u0168":"U","\u1e78":"U","\u016a":"U","\u1e7a":"U","\u016c":"U","\xdc":"U","\u01db":"U","\u01d7":"U","\u01d5":"U","\u01d9":"U","\u1ee6":"U","\u016e":"U","\u0170":"U","\u01d3":"U","\u0214":"U","\u0216":"U","\u01af":"U","\u1eea":"U","\u1ee8":"U","\u1eee":"U","\u1eec":"U","\u1ef0":"U","\u1ee4":"U","\u1e72":"U","\u0172":"U","\u1e76":"U","\u1e74":"U","\u0244":"U","\u24cb":"V","\uff36":"V","\u1e7c":"V","\u1e7e":"V","\u01b2":"V","\ua75e":"V","\u0245":"V","\ua760":"VY","\u24cc":"W","\uff37":"W","\u1e80":"W","\u1e82":"W","\u0174":"W","\u1e86":"W","\u1e84":"W","\u1e88":"W","\u2c72":"W","\u24cd":"X","\uff38":"X","\u1e8a":"X","\u1e8c":"X","\u24ce":"Y","\uff39":"Y","\u1ef2":"Y","\xdd":"Y","\u0176":"Y","\u1ef8":"Y","\u0232":"Y","\u1e8e":"Y","\u0178":"Y","\u1ef6":"Y","\u1ef4":"Y","\u01b3":"Y","\u024e":"Y","\u1efe":"Y","\u24cf":"Z","\uff3a":"Z","\u0179":"Z","\u1e90":"Z","\u017b":"Z","\u017d":"Z","\u1e92":"Z","\u1e94":"Z","\u01b5":"Z","\u0224":"Z","\u2c7f":"Z","\u2c6b":"Z","\ua762":"Z","\u24d0":"a","\uff41":"a","\u1e9a":"a","\xe0":"a","\xe1":"a","\xe2":"a","\u1ea7":"a","\u1ea5":"a","\u1eab":"a","\u1ea9":"a","\xe3":"a","\u0101":"a","\u0103":"a","\u1eb1":"a","\u1eaf":"a","\u1eb5":"a","\u1eb3":"a","\u0227":"a","\u01e1":"a","\xe4":"a","\u01df":"a","\u1ea3":"a","\xe5":"a","\u01fb":"a","\u01ce":"a","\u0201":"a","\u0203":"a","\u1ea1":"a","\u1ead":"a","\u1eb7":"a","\u1e01":"a","\u0105":"a","\u2c65":"a","\u0250":"a","\ua733":"aa","\xe6":"ae","\u01fd":"ae","\u01e3":"ae","\ua735":"ao","\ua737":"au","\ua739":"av","\ua73b":"av","\ua73d":"ay","\u24d1":"b","\uff42":"b","\u1e03":"b","\u1e05":"b","\u1e07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24d2":"c","\uff43":"c","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\xe7":"c","\u1e09":"c","\u0188":"c","\u023c":"c","\ua73f":"c","\u2184":"c","\u24d3":"d","\uff44":"d","\u1e0b":"d","\u010f":"d","\u1e0d":"d","\u1e11":"d","\u1e13":"d","\u1e0f":"d","\u0111":"d","\u018c":"d","\u0256":"d","\u0257":"d","\ua77a":"d","\u01f3":"dz","\u01c6":"dz","\u24d4":"e","\uff45":"e","\xe8":"e","\xe9":"e","\xea":"e","\u1ec1":"e","\u1ebf":"e","\u1ec5":"e","\u1ec3":"e","\u1ebd":"e","\u0113":"e","\u1e15":"e","\u1e17":"e","\u0115":"e","\u0117":"e","\xeb":"e","\u1ebb":"e","\u011b":"e","\u0205":"e","\u0207":"e","\u1eb9":"e","\u1ec7":"e","\u0229":"e","\u1e1d":"e","\u0119":"e","\u1e19":"e","\u1e1b":"e","\u0247":"e","\u025b":"e","\u01dd":"e","\u24d5":"f","\uff46":"f","\u1e1f":"f","\u0192":"f","\ua77c":"f","\u24d6":"g","\uff47":"g","\u01f5":"g","\u011d":"g","\u1e21":"g","\u011f":"g","\u0121":"g","\u01e7":"g","\u0123":"g","\u01e5":"g","\u0260":"g","\ua7a1":"g","\u1d79":"g","\ua77f":"g","\u24d7":"h","\uff48":"h","\u0125":"h","\u1e23":"h","\u1e27":"h","\u021f":"h","\u1e25":"h","\u1e29":"h","\u1e2b":"h","\u1e96":"h","\u0127":"h","\u2c68":"h","\u2c76":"h","\u0265":"h","\u0195":"hv","\u24d8":"i","\uff49":"i","\xec":"i","\xed":"i","\xee":"i","\u0129":"i","\u012b":"i","\u012d":"i","\xef":"i","\u1e2f":"i","\u1ec9":"i","\u01d0":"i","\u0209":"i","\u020b":"i","\u1ecb":"i","\u012f":"i","\u1e2d":"i","\u0268":"i","\u0131":"i","\u24d9":"j","\uff4a":"j","\u0135":"j","\u01f0":"j","\u0249":"j","\u24da":"k","\uff4b":"k","\u1e31":"k","\u01e9":"k","\u1e33":"k","\u0137":"k","\u1e35":"k","\u0199":"k","\u2c6a":"k","\ua741":"k","\ua743":"k","\ua745":"k","\ua7a3":"k","\u24db":"l","\uff4c":"l","\u0140":"l","\u013a":"l","\u013e":"l","\u1e37":"l","\u1e39":"l","\u013c":"l","\u1e3d":"l","\u1e3b":"l","\u017f":"l","\u0142":"l","\u019a":"l","\u026b":"l","\u2c61":"l","\ua749":"l","\ua781":"l","\ua747":"l","\u01c9":"lj","\u24dc":"m","\uff4d":"m","\u1e3f":"m","\u1e41":"m","\u1e43":"m","\u0271":"m","\u026f":"m","\u24dd":"n","\uff4e":"n","\u01f9":"n","\u0144":"n","\xf1":"n","\u1e45":"n","\u0148":"n","\u1e47":"n","\u0146":"n","\u1e4b":"n","\u1e49":"n","\u019e":"n","\u0272":"n","\u0149":"n","\ua791":"n","\ua7a5":"n","\u01cc":"nj","\u24de":"o","\uff4f":"o","\xf2":"o","\xf3":"o","\xf4":"o","\u1ed3":"o","\u1ed1":"o","\u1ed7":"o","\u1ed5":"o","\xf5":"o","\u1e4d":"o","\u022d":"o","\u1e4f":"o","\u014d":"o","\u1e51":"o","\u1e53":"o","\u014f":"o","\u022f":"o","\u0231":"o","\xf6":"o","\u022b":"o","\u1ecf":"o","\u0151":"o","\u01d2":"o","\u020d":"o","\u020f":"o","\u01a1":"o","\u1edd":"o","\u1edb":"o","\u1ee1":"o","\u1edf":"o","\u1ee3":"o","\u1ecd":"o","\u1ed9":"o","\u01eb":"o","\u01ed":"o","\xf8":"o","\u01ff":"o","\u0254":"o","\ua74b":"o","\ua74d":"o","\u0275":"o","\u01a3":"oi","\u0223":"ou","\ua74f":"oo","\u24df":"p","\uff50":"p","\u1e55":"p","\u1e57":"p","\u01a5":"p","\u1d7d":"p","\ua751":"p","\ua753":"p","\ua755":"p","\u24e0":"q","\uff51":"q","\u024b":"q","\ua757":"q","\ua759":"q","\u24e1":"r","\uff52":"r","\u0155":"r","\u1e59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1e5b":"r","\u1e5d":"r","\u0157":"r","\u1e5f":"r","\u024d":"r","\u027d":"r","\ua75b":"r","\ua7a7":"r","\ua783":"r","\u24e2":"s","\uff53":"s","\xdf":"s","\u015b":"s","\u1e65":"s","\u015d":"s","\u1e61":"s","\u0161":"s","\u1e67":"s","\u1e63":"s","\u1e69":"s","\u0219":"s","\u015f":"s","\u023f":"s","\ua7a9":"s","\ua785":"s","\u1e9b":"s","\u24e3":"t","\uff54":"t","\u1e6b":"t","\u1e97":"t","\u0165":"t","\u1e6d":"t","\u021b":"t","\u0163":"t","\u1e71":"t","\u1e6f":"t","\u0167":"t","\u01ad":"t","\u0288":"t","\u2c66":"t","\ua787":"t","\ua729":"tz","\u24e4":"u","\uff55":"u","\xf9":"u","\xfa":"u","\xfb":"u","\u0169":"u","\u1e79":"u","\u016b":"u","\u1e7b":"u","\u016d":"u","\xfc":"u","\u01dc":"u","\u01d8":"u","\u01d6":"u","\u01da":"u","\u1ee7":"u","\u016f":"u","\u0171":"u","\u01d4":"u","\u0215":"u","\u0217":"u","\u01b0":"u","\u1eeb":"u","\u1ee9":"u","\u1eef":"u","\u1eed":"u","\u1ef1":"u","\u1ee5":"u","\u1e73":"u","\u0173":"u","\u1e77":"u","\u1e75":"u","\u0289":"u","\u24e5":"v","\uff56":"v","\u1e7d":"v","\u1e7f":"v","\u028b":"v","\ua75f":"v","\u028c":"v","\ua761":"vy","\u24e6":"w","\uff57":"w","\u1e81":"w","\u1e83":"w","\u0175":"w","\u1e87":"w","\u1e85":"w","\u1e98":"w","\u1e89":"w","\u2c73":"w","\u24e7":"x","\uff58":"x","\u1e8b":"x","\u1e8d":"x","\u24e8":"y","\uff59":"y","\u1ef3":"y","\xfd":"y","\u0177":"y","\u1ef9":"y","\u0233":"y","\u1e8f":"y","\xff":"y","\u1ef7":"y","\u1e99":"y","\u1ef5":"y","\u01b4":"y","\u024f":"y","\u1eff":"y","\u24e9":"z","\uff5a":"z","\u017a":"z","\u1e91":"z","\u017c":"z","\u017e":"z","\u1e93":"z","\u1e95":"z","\u01b6":"z","\u0225":"z","\u0240":"z","\u2c6c":"z","\ua763":"z"};j=a(document),g=function(){var a=1;return function(){return a++}}(),j.on("mousemove",function(a){i.x=a.pageX,i.y=a.pageY}),d=O(Object,{bind:function(a){var b=this;return function(){a.apply(b,arguments)}},init:function(c){var d,e,f=".select2-results";this.opts=c=this.prepareOpts(c),this.id=c.id,c.element.data("select2")!==b&&null!==c.element.data("select2")&&c.element.data("select2").destroy(),this.container=this.createContainer(),this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("select2-hidden-accessible").appendTo(document.body),this.containerId="s2id_"+(c.element.attr("id")||"autogen"+g()),this.containerEventName=this.containerId.replace(/([.])/g,"_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.container.attr("title",c.element.attr("title")),this.body=a("body"),D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.attr("style",c.element.attr("style")),this.container.css(K(c.containerCss)),this.container.addClass(K(c.containerCssClass)),this.elementTabIndex=this.opts.element.attr("tabindex"),this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container).on("click.select2",A),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(K(c.dropdownCssClass)),this.dropdown.data("select2",this),this.dropdown.on("click",A),this.results=d=this.container.find(f),this.search=e=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,this.context=null,this.initContainer(),this.container.on("click",A),v(this.results),this.dropdown.on("mousemove-filtered",f,this.bind(this.highlightUnderEvent)),this.dropdown.on("touchstart touchmove touchend",f,this.bind(function(a){this._touchEvent=!0,this.highlightUnderEvent(a)})),this.dropdown.on("touchmove",f,this.bind(this.touchMoved)),this.dropdown.on("touchstart touchend",f,this.bind(this.clearTouchMoved)),this.dropdown.on("click",this.bind(function(){this._touchEvent&&(this._touchEvent=!1,this.selectHighlighted())})),x(80,this.results),this.dropdown.on("scroll-debounced",f,this.bind(this.loadMoreIfNeeded)),a(this.container).on("change",".select2-input",function(a){a.stopPropagation()}),a(this.dropdown).on("change",".select2-input",function(a){a.stopPropagation()}),a.fn.mousewheel&&d.mousewheel(function(a,b,c,e){var f=d.scrollTop();e>0&&0>=f-e?(d.scrollTop(0),A(a)):0>e&&d.get(0).scrollHeight-d.scrollTop()+e<=d.height()&&(d.scrollTop(d.get(0).scrollHeight-d.height()),A(a))}),u(e),e.on("keyup-change input paste",this.bind(this.updateResults)),e.on("focus",function(){e.addClass("select2-focused")}),e.on("blur",function(){e.removeClass("select2-focused")}),this.dropdown.on("mouseup",f,this.bind(function(b){a(b.target).closest(".select2-result-selectable").length>0&&(this.highlightUnderEvent(b),this.selectHighlighted(b))})),this.dropdown.on("click mouseup mousedown touchstart touchend focusin",function(a){a.stopPropagation()}),this.nextSearchTerm=b,a.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),null!==c.maximumInputLength&&this.search.attr("maxlength",c.maximumInputLength);var h=c.element.prop("disabled");h===b&&(h=!1),this.enable(!h);var i=c.element.prop("readonly");i===b&&(i=!1),this.readonly(i),k=k||q(),this.autofocus=c.element.prop("autofocus"),c.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.search.attr("placeholder",c.searchInputPlaceholder)},destroy:function(){var a=this.opts.element,c=a.data("select2");this.close(),this.propertyObserver&&(this.propertyObserver.disconnect(),this.propertyObserver=null),c!==b&&(c.container.remove(),c.liveRegion.remove(),c.dropdown.remove(),a.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus",this.autofocus||!1),this.elementTabIndex?a.attr({tabindex:this.elementTabIndex}):a.removeAttr("tabindex"),a.show()),N.call(this,"container","liveRegion","dropdown","results","search")},optionToData:function(a){return a.is("option")?{id:a.prop("value"),text:a.text(),element:a.get(),css:a.attr("class"),disabled:a.prop("disabled"),locked:r(a.attr("locked"),"locked")||r(a.data("locked"),!0)}:a.is("optgroup")?{text:a.attr("label"),children:[],element:a.get(),css:a.attr("class")}:void 0},prepareOpts:function(c){var d,e,f,h,i=this;if(d=c.element,"select"===d.get(0).tagName.toLowerCase()&&(this.select=e=c.element),e&&a.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in c)throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}),c=a.extend({},{populateResults:function(d,e,f){var h,j=this.opts.id,k=this.liveRegion;h=function(d,e,l){var m,n,o,p,q,r,s,t,u,v;for(d=c.sortResults(d,e,f),m=0,n=d.length;n>m;m+=1)o=d[m],q=o.disabled===!0,p=!q&&j(o)!==b,r=o.children&&o.children.length>0,s=a("<li></li>"),s.addClass("select2-results-dept-"+l),s.addClass("select2-result"),s.addClass(p?"select2-result-selectable":"select2-result-unselectable"),q&&s.addClass("select2-disabled"),r&&s.addClass("select2-result-with-children"),s.addClass(i.opts.formatResultCssClass(o)),s.attr("role","presentation"),t=a(document.createElement("div")),t.addClass("select2-result-label"),t.attr("id","select2-result-label-"+g()),t.attr("role","option"),v=c.formatResult(o,t,f,i.opts.escapeMarkup),v!==b&&(t.html(v),s.append(t)),r&&(u=a("<ul></ul>"),u.addClass("select2-result-sub"),h(o.children,u,l+1),s.append(u)),s.data("select2-data",o),e.append(s);k.text(c.formatMatches(d.length))},h(e,d,0)}},a.fn.select2.defaults,c),"function"!=typeof c.id&&(f=c.id,c.id=function(a){return a[f]}),a.isArray(c.element.data("select2Tags"))){if("tags"in c)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+c.element.attr("id");c.tags=c.element.data("select2Tags")}if(e?(c.query=this.bind(function(a){var f,g,h,c={results:[],more:!1},e=a.term;h=function(b,c){var d;b.is("option")?a.matcher(e,b.text(),b)&&c.push(i.optionToData(b)):b.is("optgroup")&&(d=i.optionToData(b),b.children().each2(function(a,b){h(b,d.children)}),d.children.length>0&&c.push(d))},f=d.children(),this.getPlaceholder()!==b&&f.length>0&&(g=this.getPlaceholderOption(),g&&(f=f.not(g))),f.each2(function(a,b){h(b,c.results)}),a.callback(c)}),c.id=function(a){return a.id}):"query"in c||("ajax"in c?(h=c.element.data("ajax-url"),h&&h.length>0&&(c.ajax.url=h),c.query=G.call(c.element,c.ajax)):"data"in c?c.query=H(c.data):"tags"in c&&(c.query=I(c.tags),c.createSearchChoice===b&&(c.createSearchChoice=function(b){return{id:a.trim(b),text:a.trim(b)}}),c.initSelection===b&&(c.initSelection=function(b,d){var e=[];a(s(b.val(),c.separator)).each(function(){var b={id:this,text:this},d=c.tags;a.isFunction(d)&&(d=d()),a(d).each(function(){return r(this.id,b.id)?(b=this,!1):void 0}),e.push(b)}),d(e)}))),"function"!=typeof c.query)throw"query function not defined for Select2 "+c.element.attr("id");if("top"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.unshift(b)};else if("bottom"===c.createSearchChoicePosition)c.createSearchChoicePosition=function(a,b){a.push(b)};else if("function"!=typeof c.createSearchChoicePosition)throw"invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";return c},monitorSource:function(){var c,d,a=this.opts.element;a.on("change.select2",this.bind(function(){this.opts.element.data("select2-change-triggered")!==!0&&this.initSelection()})),c=this.bind(function(){var c=a.prop("disabled");c===b&&(c=!1),this.enable(!c);var d=a.prop("readonly");d===b&&(d=!1),this.readonly(d),D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.addClass(K(this.opts.containerCssClass)),D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(K(this.opts.dropdownCssClass))}),a.length&&a[0].attachEvent&&a.each(function(){this.attachEvent("onpropertychange",c)}),d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,d!==b&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new d(function(a){a.forEach(c)}),this.propertyObserver.observe(a.get(0),{attributes:!0,subtree:!1}))},triggerSelect:function(b){var c=a.Event("select2-selecting",{val:this.id(b),object:b});return this.opts.element.trigger(c),!c.isDefaultPrevented()},triggerChange:function(b){b=b||{},b=a.extend({},b,{type:"change",val:this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(b),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()},isInterfaceEnabled:function(){return this.enabledInterface===!0},enableInterface:function(){var a=this._enabled&&!this._readonly,b=!a;return a===this.enabledInterface?!1:(this.container.toggleClass("select2-container-disabled",b),this.close(),this.enabledInterface=a,!0)},enable:function(a){a===b&&(a=!0),this._enabled!==a&&(this._enabled=a,this.opts.element.prop("disabled",!a),this.enableInterface())},disable:function(){this.enable(!1)},readonly:function(a){a===b&&(a=!1),this._readonly!==a&&(this._readonly=a,this.opts.element.prop("readonly",a),this.enableInterface())},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var t,u,v,w,x,b=this.dropdown,c=this.container.offset(),d=this.container.outerHeight(!1),e=this.container.outerWidth(!1),f=b.outerHeight(!1),g=a(window),h=g.width(),i=g.height(),j=g.scrollLeft()+h,l=g.scrollTop()+i,m=c.top+d,n=c.left,o=l>=m+f,p=c.top-f>=g.scrollTop(),q=b.outerWidth(!1),r=j>=n+q,s=b.hasClass("select2-drop-above");s?(u=!0,!p&&o&&(v=!0,u=!1)):(u=!1,!o&&p&&(v=!0,u=!0)),v&&(b.hide(),c=this.container.offset(),d=this.container.outerHeight(!1),e=this.container.outerWidth(!1),f=b.outerHeight(!1),j=g.scrollLeft()+h,l=g.scrollTop()+i,m=c.top+d,n=c.left,q=b.outerWidth(!1),r=j>=n+q,b.show(),this.focusSearch()),this.opts.dropdownAutoWidth?(x=a(".select2-results",b)[0],b.addClass("select2-drop-auto-width"),b.css("width",""),q=b.outerWidth(!1)+(x.scrollHeight===x.clientHeight?0:k.width),q>e?e=q:q=e,f=b.outerHeight(!1),r=j>=n+q):this.container.removeClass("select2-drop-auto-width"),"static"!==this.body.css("position")&&(t=this.body.offset(),m-=t.top,n-=t.left),r||(n=c.left+this.container.outerWidth(!1)-q),w={left:n,width:e},u?(w.top=c.top-f,w.bottom="auto",this.container.addClass("select2-drop-above"),b.addClass("select2-drop-above")):(w.top=m,w.bottom="auto",this.container.removeClass("select2-drop-above"),b.removeClass("select2-drop-above")),w=a.extend(w,K(this.opts.dropdownCss)),b.css(w)},shouldOpen:function(){var b;return this.opened()?!1:this._enabled===!1||this._readonly===!0?!1:(b=a.Event("select2-opening"),this.opts.element.trigger(b),!b.isDefaultPrevented())},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")},open:function(){return this.shouldOpen()?(this.opening(),!0):!1},opening:function(){var f,b=this.containerEventName,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body.children().last()[0]&&this.dropdown.detach().appendTo(this.body),f=a("#select2-drop-mask"),0==f.length&&(f=a(document.createElement("div")),f.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),f.hide(),f.appendTo(this.body),f.on("mousedown touchstart click",function(b){n(f);var d,c=a("#select2-drop");c.length>0&&(d=c.data("select2"),d.opts.selectOnBlur&&d.selectHighlighted({noFocus:!0}),d.close(),b.preventDefault(),b.stopPropagation())})),this.dropdown.prev()[0]!==f[0]&&this.dropdown.before(f),a("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),f.show(),this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");var g=this;this.container.parents().add(window).each(function(){a(this).on(d+" "+c+" "+e,function(){g.opened()&&g.positionDropdown()})})},close:function(){if(this.opened()){var b=this.containerEventName,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.parents().add(window).each(function(){a(this).off(c).off(d).off(e)}),this.clearDropdownAlignmentPreference(),a("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"),this.results.empty(),this.clearSearch(),this.search.removeClass("select2-active"),this.opts.element.trigger(a.Event("select2-close"))}},externalSearch:function(a){this.open(),this.search.val(a),this.updateResults(!1)},clearSearch:function(){},getMaximumSelectionSize:function(){return K(this.opts.maximumSelectionSize)},ensureHighlightVisible:function(){var c,d,e,f,g,h,i,b=this.results;if(d=this.highlight(),!(0>d)){if(0==d)return b.scrollTop(0),void 0;c=this.findHighlightableChoices().find(".select2-result-label"),e=a(c[d]),f=e.offset().top+e.outerHeight(!0),d===c.length-1&&(i=b.find("li.select2-more-results"),i.length>0&&(f=i.offset().top+i.outerHeight(!0))),g=b.offset().top+b.outerHeight(!0),f>g&&b.scrollTop(b.scrollTop()+(f-g)),h=e.offset().top-b.offset().top,0>h&&"none"!=e.css("display")&&b.scrollTop(b.scrollTop()+h)}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")},moveHighlight:function(b){for(var c=this.findHighlightableChoices(),d=this.highlight();d>-1&&d<c.length;){d+=b;var e=a(c[d]);if(e.hasClass("select2-result-selectable")&&!e.hasClass("select2-disabled")&&!e.hasClass("select2-selected")){this.highlight(d);break}}},highlight:function(b){var d,e,c=this.findHighlightableChoices();return 0===arguments.length?p(c.filter(".select2-highlighted")[0],c.get()):(b>=c.length&&(b=c.length-1),0>b&&(b=0),this.removeHighlight(),d=a(c[b]),d.addClass("select2-highlighted"),this.search.attr("aria-activedescendant",d.find(".select2-result-label").attr("id")),this.ensureHighlightVisible(),this.liveRegion.text(d.text()),e=d.data("select2-data"),e&&this.opts.element.trigger({type:"select2-highlight",val:this.id(e),choice:e}),void 0)},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")},touchMoved:function(){this._touchMoved=!0},clearTouchMoved:function(){this._touchMoved=!1},countSelectableResults:function(){return this.findHighlightableChoices().length
},highlightUnderEvent:function(b){var c=a(b.target).closest(".select2-result-selectable");if(c.length>0&&!c.is(".select2-highlighted")){var d=this.findHighlightableChoices();this.highlight(d.index(c))}else 0==c.length&&this.removeHighlight()},loadMoreIfNeeded:function(){var c,a=this.results,b=a.find("li.select2-more-results"),d=this.resultsPage+1,e=this,f=this.search.val(),g=this.context;0!==b.length&&(c=b.offset().top-a.offset().top-a.height(),c<=this.opts.loadMorePadding&&(b.addClass("select2-active"),this.opts.query({element:this.opts.element,term:f,page:d,context:g,matcher:this.opts.matcher,callback:this.bind(function(c){e.opened()&&(e.opts.populateResults.call(this,a,c.results,{term:f,page:d,context:g}),e.postprocessResults(c,!1,!1),c.more===!0?(b.detach().appendTo(a).text(K(e.opts.formatLoadMore,d+1)),window.setTimeout(function(){e.loadMoreIfNeeded()},10)):b.remove(),e.positionDropdown(),e.resultsPage=d,e.context=c.context,this.opts.element.trigger({type:"select2-loaded",items:c}))})})))},tokenize:function(){},updateResults:function(c){function m(){d.removeClass("select2-active"),h.positionDropdown(),e.find(".select2-no-results,.select2-selection-limit,.select2-searching").length?h.liveRegion.text(e.text()):h.liveRegion.text(h.opts.formatMatches(e.find(".select2-result-selectable").length))}function n(a){e.html(a),m()}var g,i,l,d=this.search,e=this.results,f=this.opts,h=this,j=d.val(),k=a.data(this.container,"select2-last-term");if((c===!0||!k||!r(j,k))&&(a.data(this.container,"select2-last-term",j),c===!0||this.showSearchInput!==!1&&this.opened())){l=++this.queryCount;var o=this.getMaximumSelectionSize();if(o>=1&&(g=this.data(),a.isArray(g)&&g.length>=o&&J(f.formatSelectionTooBig,"formatSelectionTooBig")))return n("<li class='select2-selection-limit'>"+K(f.formatSelectionTooBig,o)+"</li>"),void 0;if(d.val().length<f.minimumInputLength)return J(f.formatInputTooShort,"formatInputTooShort")?n("<li class='select2-no-results'>"+K(f.formatInputTooShort,d.val(),f.minimumInputLength)+"</li>"):n(""),c&&this.showSearch&&this.showSearch(!0),void 0;if(f.maximumInputLength&&d.val().length>f.maximumInputLength)return J(f.formatInputTooLong,"formatInputTooLong")?n("<li class='select2-no-results'>"+K(f.formatInputTooLong,d.val(),f.maximumInputLength)+"</li>"):n(""),void 0;f.formatSearching&&0===this.findHighlightableChoices().length&&n("<li class='select2-searching'>"+K(f.formatSearching)+"</li>"),d.addClass("select2-active"),this.removeHighlight(),i=this.tokenize(),i!=b&&null!=i&&d.val(i),this.resultsPage=1,f.query({element:f.element,term:d.val(),page:this.resultsPage,context:null,matcher:f.matcher,callback:this.bind(function(g){var i;if(l==this.queryCount){if(!this.opened())return this.search.removeClass("select2-active"),void 0;if(this.context=g.context===b?null:g.context,this.opts.createSearchChoice&&""!==d.val()&&(i=this.opts.createSearchChoice.call(h,d.val(),g.results),i!==b&&null!==i&&h.id(i)!==b&&null!==h.id(i)&&0===a(g.results).filter(function(){return r(h.id(this),h.id(i))}).length&&this.opts.createSearchChoicePosition(g.results,i)),0===g.results.length&&J(f.formatNoMatches,"formatNoMatches"))return n("<li class='select2-no-results'>"+K(f.formatNoMatches,d.val())+"</li>"),void 0;e.empty(),h.opts.populateResults.call(this,e,g.results,{term:d.val(),page:this.resultsPage,context:null}),g.more===!0&&J(f.formatLoadMore,"formatLoadMore")&&(e.append("<li class='select2-more-results'>"+h.opts.escapeMarkup(K(f.formatLoadMore,this.resultsPage))+"</li>"),window.setTimeout(function(){h.loadMoreIfNeeded()},10)),this.postprocessResults(g,c),m(),this.opts.element.trigger({type:"select2-loaded",items:g})}})})}},cancel:function(){this.close()},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){y(this.search)},selectHighlighted:function(a){if(this._touchMoved)return this.clearTouchMoved(),void 0;var b=this.highlight(),c=this.results.find(".select2-highlighted"),d=c.closest(".select2-result").data("select2-data");d?(this.highlight(b),this.onSelect(d,a)):a&&a.noFocus&&this.close()},getPlaceholder:function(){var a;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((a=this.getPlaceholderOption())!==b?a.text():b)},getPlaceholderOption:function(){if(this.select){var c=this.select.children("option").first();if(this.opts.placeholderOption!==b)return"first"===this.opts.placeholderOption&&c||"function"==typeof this.opts.placeholderOption&&this.opts.placeholderOption(this.select);if(""===a.trim(c.text())&&""===c.val())return c}},initContainerWidth:function(){function c(){var c,d,e,f,g,h;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";if("copy"===this.opts.width||"resolve"===this.opts.width){if(c=this.opts.element.attr("style"),c!==b)for(d=c.split(";"),f=0,g=d.length;g>f;f+=1)if(h=d[f].replace(/\s/g,""),e=h.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),null!==e&&e.length>=1)return e[1];return"resolve"===this.opts.width?(c=this.opts.element.css("width"),c.indexOf("%")>0?c:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px"):null}return a.isFunction(this.opts.width)?this.opts.width():this.opts.width}var d=c.call(this);null!==d&&this.container.css("width",d)}}),e=O(d,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>","</a>","<label for='' class='select2-offscreen'></label>","<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <label for='' class='select2-offscreen'></label>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'","       aria-autocomplete='list' />","   </div>","   <ul class='select2-results' role='listbox'>","   </ul>","</div>"].join(""));return b},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())},opening:function(){var c,d,e;this.opts.minimumResultsForSearch>=0&&this.showSearch(!0),this.parent.opening.apply(this,arguments),this.showSearchInput!==!1&&this.search.val(this.focusser.val()),this.opts.shouldFocusInput(this)&&(this.search.focus(),c=this.search.get(0),c.createTextRange?(d=c.createTextRange(),d.collapse(!1),d.select()):c.setSelectionRange&&(e=this.search.val().length,c.setSelectionRange(e,e))),""===this.search.val()&&this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.search.select()),this.focusser.prop("disabled",!0).val(""),this.updateResults(!0),this.opts.element.trigger(a.Event("select2-open"))},close:function(){this.opened()&&(this.parent.close.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},focus:function(){this.opened()?this.close():(this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus())},isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:function(){this.parent.cancel.apply(this,arguments),this.focusser.prop("disabled",!1),this.opts.shouldFocusInput(this)&&this.focusser.focus()},destroy:function(){a("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),N.call(this,"selection","focusser")},initContainer:function(){var b,h,d=this.container,e=this.dropdown,f=g();this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),this.selection=b=d.find(".select2-choice"),this.focusser=d.find(".select2-focusser"),b.find(".select2-chosen").attr("id","select2-chosen-"+f),this.focusser.attr("aria-labelledby","select2-chosen-"+f),this.results.attr("id","select2-results-"+f),this.search.attr("aria-owns","select2-results-"+f),this.focusser.attr("id","s2id_autogen"+f),h=a("label[for='"+this.opts.element.attr("id")+"']"),this.focusser.prev().text(h.text()).attr("for",this.focusser.attr("id"));var i=this.opts.element.attr("title");this.opts.element.attr("title",i||h.text()),this.focusser.attr("tabindex",this.elementTabIndex),this.search.attr("id",this.focusser.attr("id")+"_search"),this.search.prev().text(a("label[for='"+this.focusser.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()){if(a.which===c.PAGE_UP||a.which===c.PAGE_DOWN)return A(a),void 0;switch(a.which){case c.UP:case c.DOWN:return this.moveHighlight(a.which===c.UP?-1:1),A(a),void 0;case c.ENTER:return this.selectHighlighted(),A(a),void 0;case c.TAB:return this.selectHighlighted({noFocus:!0}),void 0;case c.ESC:return this.cancel(a),A(a),void 0}}})),this.search.on("blur",this.bind(function(){document.activeElement===this.body.get(0)&&window.setTimeout(this.bind(function(){this.opened()&&this.search.focus()}),0)})),this.focusser.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&a.which!==c.TAB&&!c.isControl(a)&&!c.isFunctionKey(a)&&a.which!==c.ESC){if(this.opts.openOnEnter===!1&&a.which===c.ENTER)return A(a),void 0;if(a.which==c.DOWN||a.which==c.UP||a.which==c.ENTER&&this.opts.openOnEnter){if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return;return this.open(),A(a),void 0}return a.which==c.DELETE||a.which==c.BACKSPACE?(this.opts.allowClear&&this.clear(),A(a),void 0):void 0}})),u(this.focusser),this.focusser.on("keyup-change input",this.bind(function(a){if(this.opts.minimumResultsForSearch>=0){if(a.stopPropagation(),this.opened())return;this.open()}})),b.on("mousedown touchstart","abbr",this.bind(function(a){this.isInterfaceEnabled()&&(this.clear(),B(a),this.close(),this.selection.focus())})),b.on("mousedown touchstart",this.bind(function(c){n(b),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),A(c)})),e.on("mousedown touchstart",this.bind(function(){this.opts.shouldFocusInput(this)&&this.search.focus()})),b.on("focus",this.bind(function(a){A(a)})),this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){this.opened()||(this.container.removeClass("select2-container-active"),this.opts.element.trigger(a.Event("select2-blur")))})),this.search.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.setPlaceholder()},clear:function(b){var c=this.selection.data("select2-data");if(c){var d=a.Event("select2-clearing");if(this.opts.element.trigger(d),d.isDefaultPrevented())return;var e=this.getPlaceholderOption();this.opts.element.val(e?e.val():""),this.selection.find(".select2-chosen").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),b!==!1&&(this.opts.element.trigger({type:"select2-removed",val:this.id(c),choice:c}),this.triggerChange({removed:c}))}},initSelection:function(){if(this.isPlaceholderOptionSelected())this.updateSelection(null),this.close(),this.setPlaceholder();else{var c=this;this.opts.initSelection.call(null,this.opts.element,function(a){a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.setPlaceholder(),c.nextSearchTerm=c.opts.nextSearchTerm(a,c.search.val()))})}},isPlaceholderOptionSelected:function(){var a;return this.getPlaceholder()===b?!1:(a=this.getPlaceholderOption())!==b&&a.prop("selected")||""===this.opts.element.val()||this.opts.element.val()===b||null===this.opts.element.val()},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=a.find("option").filter(function(){return this.selected&&!this.disabled});b(c.optionToData(d))}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=c.val(),f=null;b.query({matcher:function(a,c,d){var g=r(e,b.id(d));return g&&(f=d),g},callback:a.isFunction(d)?function(){d(f)}:a.noop})}),b},getPlaceholder:function(){return this.select&&this.getPlaceholderOption()===b?b:this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var a=this.getPlaceholder();if(this.isPlaceholderOptionSelected()&&a!==b){if(this.select&&this.getPlaceholderOption()===b)return;this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)),this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear")}},postprocessResults:function(a,b,c){var d=0,e=this;if(this.findHighlightableChoices().each2(function(a,b){return r(e.id(b.data("select2-data")),e.opts.element.val())?(d=a,!1):void 0}),c!==!1&&(b===!0&&d>=0?this.highlight(d):this.highlight(0)),b===!0){var g=this.opts.minimumResultsForSearch;g>=0&&this.showSearch(L(a.results)>=g)}},showSearch:function(b){this.showSearchInput!==b&&(this.showSearchInput=b,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!b),this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!b),a(this.dropdown,this.container).toggleClass("select2-with-searchbox",b))},onSelect:function(a,b){if(this.triggerSelect(a)){var c=this.opts.element.val(),d=this.data();this.opts.element.val(this.id(a)),this.updateSelection(a),this.opts.element.trigger({type:"select2-selected",val:this.id(a),choice:a}),this.nextSearchTerm=this.opts.nextSearchTerm(a,this.search.val()),this.close(),b&&b.noFocus||!this.opts.shouldFocusInput(this)||this.focusser.focus(),r(c,this.id(a))||this.triggerChange({added:a,removed:d})}},updateSelection:function(a){var d,e,c=this.selection.find(".select2-chosen");this.selection.data("select2-data",a),c.empty(),null!==a&&(d=this.opts.formatSelection(a,c,this.opts.escapeMarkup)),d!==b&&c.append(d),e=this.opts.formatSelectionCssClass(a,c),e!==b&&c.addClass(e),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==b&&this.container.addClass("select2-allowclear")},val:function(){var a,c=!1,d=null,e=this,f=this.data();if(0===arguments.length)return this.opts.element.val();if(a=arguments[0],arguments.length>1&&(c=arguments[1]),this.select)this.select.val(a).find("option").filter(function(){return this.selected}).each2(function(a,b){return d=e.optionToData(b),!1}),this.updateSelection(d),this.setPlaceholder(),c&&this.triggerChange({added:d,removed:f});else{if(!a&&0!==a)return this.clear(c),void 0;if(this.opts.initSelection===b)throw new Error("cannot call val() if initSelection() is not defined");this.opts.element.val(a),this.opts.initSelection(this.opts.element,function(a){e.opts.element.val(a?e.id(a):""),e.updateSelection(a),e.setPlaceholder(),c&&e.triggerChange({added:a,removed:f})})}},clearSearch:function(){this.search.val(""),this.focusser.val("")},data:function(a){var c,d=!1;return 0===arguments.length?(c=this.selection.data("select2-data"),c==b&&(c=null),c):(arguments.length>1&&(d=arguments[1]),a?(c=this.data(),this.opts.element.val(a?this.id(a):""),this.updateSelection(a),d&&this.triggerChange({added:a,removed:c})):this.clear(d),void 0)}}),f=O(d,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <label for='' class='select2-offscreen'></label>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return b},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=[];a.find("option").filter(function(){return this.selected&&!this.disabled}).each2(function(a,b){d.push(c.optionToData(b))}),b(d)}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=s(c.val(),b.separator),f=[];b.query({matcher:function(c,d,g){var h=a.grep(e,function(a){return r(a,b.id(g))}).length;return h&&f.push(g),h},callback:a.isFunction(d)?function(){for(var a=[],c=0;c<e.length;c++)for(var g=e[c],h=0;h<f.length;h++){var i=f[h];if(r(g,b.id(i))){a.push(i),f.splice(h,1);break}}d(a)}:a.noop})}),b},selectChoice:function(a){var b=this.container.find(".select2-search-choice-focus");b.length&&a&&a[0]==b[0]||(b.length&&this.opts.element.trigger("choice-deselected",b),b.removeClass("select2-search-choice-focus"),a&&a.length&&(this.close(),a.addClass("select2-search-choice-focus"),this.opts.element.trigger("choice-selected",a)))},destroy:function(){a("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments),N.call(this,"searchContainer","selection")},initContainer:function(){var d,b=".select2-choices";this.searchContainer=this.container.find(".select2-search-field"),this.selection=d=this.container.find(b);var e=this;this.selection.on("click",".select2-search-choice:not(.select2-locked)",function(){e.search[0].focus(),e.selectChoice(a(this))}),this.search.attr("id","s2id_autogen"+g()),this.search.prev().text(a("label[for='"+this.opts.element.attr("id")+"']").text()).attr("for",this.search.attr("id")),this.search.on("input paste",this.bind(function(){this.isInterfaceEnabled()&&(this.opened()||this.open())})),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()){++this.keydowns;var b=d.find(".select2-search-choice-focus"),e=b.prev(".select2-search-choice:not(.select2-locked)"),f=b.next(".select2-search-choice:not(.select2-locked)"),g=z(this.search);if(b.length&&(a.which==c.LEFT||a.which==c.RIGHT||a.which==c.BACKSPACE||a.which==c.DELETE||a.which==c.ENTER)){var h=b;return a.which==c.LEFT&&e.length?h=e:a.which==c.RIGHT?h=f.length?f:null:a.which===c.BACKSPACE?this.unselect(b.first())&&(this.search.width(10),h=e.length?e:f):a.which==c.DELETE?this.unselect(b.first())&&(this.search.width(10),h=f.length?f:null):a.which==c.ENTER&&(h=null),this.selectChoice(h),A(a),h&&h.length||this.open(),void 0}if((a.which===c.BACKSPACE&&1==this.keydowns||a.which==c.LEFT)&&0==g.offset&&!g.length)return this.selectChoice(d.find(".select2-search-choice:not(.select2-locked)").last()),A(a),void 0;if(this.selectChoice(null),this.opened())switch(a.which){case c.UP:case c.DOWN:return this.moveHighlight(a.which===c.UP?-1:1),A(a),void 0;case c.ENTER:return this.selectHighlighted(),A(a),void 0;case c.TAB:return this.selectHighlighted({noFocus:!0}),this.close(),void 0;case c.ESC:return this.cancel(a),A(a),void 0}if(a.which!==c.TAB&&!c.isControl(a)&&!c.isFunctionKey(a)&&a.which!==c.BACKSPACE&&a.which!==c.ESC){if(a.which===c.ENTER){if(this.opts.openOnEnter===!1)return;if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return}this.open(),(a.which===c.PAGE_UP||a.which===c.PAGE_DOWN)&&A(a),a.which===c.ENTER&&A(a)}}})),this.search.on("keyup",this.bind(function(){this.keydowns=0,this.resizeSearch()})),this.search.on("blur",this.bind(function(b){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.selectChoice(null),this.opened()||this.clearSearch(),b.stopImmediatePropagation(),this.opts.element.trigger(a.Event("select2-blur"))})),this.container.on("click",b,this.bind(function(b){this.isInterfaceEnabled()&&(a(b.target).closest(".select2-search-choice").length>0||(this.selectChoice(null),this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.open(),this.focusSearch(),b.preventDefault()))})),this.container.on("focus",b,this.bind(function(){this.isInterfaceEnabled()&&(this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())})),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.clearSearch()},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled())},initSelection:function(){if(""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch()),this.select||""!==this.opts.element.val()){var c=this;this.opts.initSelection.call(null,this.opts.element,function(a){a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.clearSearch())})}},clearSearch:function(){var a=this.getPlaceholder(),c=this.getMaxSearchWidth();a!==b&&0===this.getVal().length&&this.search.hasClass("select2-focused")===!1?(this.search.val(a).addClass("select2-default"),this.search.width(c>0?c:this.container.css("width"))):this.search.val("").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default")},opening:function(){this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),this.focusSearch(),""===this.search.val()&&this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.search.select()),this.updateResults(!0),this.opts.shouldFocusInput(this)&&this.search.focus(),this.opts.element.trigger(a.Event("select2-open"))},close:function(){this.opened()&&this.parent.close.apply(this,arguments)},focus:function(){this.close(),this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(b){var c=[],d=[],e=this;a(b).each(function(){p(e.id(this),c)<0&&(c.push(e.id(this)),d.push(this))}),b=d,this.selection.find(".select2-search-choice").remove(),a(b).each(function(){e.addSelectedChoice(this)}),e.postprocessResults()},tokenize:function(){var a=this.search.val();a=this.opts.tokenizer.call(this,a,this.data(),this.bind(this.onSelect),this.opts),null!=a&&a!=b&&(this.search.val(a),a.length>0&&this.open())},onSelect:function(a,c){this.triggerSelect(a)&&(this.addSelectedChoice(a),this.opts.element.trigger({type:"selected",val:this.id(a),choice:a}),this.nextSearchTerm=this.opts.nextSearchTerm(a,this.search.val()),this.clearSearch(),this.updateResults(),(this.select||!this.opts.closeOnSelect)&&this.postprocessResults(a,!1,this.opts.closeOnSelect===!0),this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),this.resizeSearch(),this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()?this.updateResults(!0):this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.updateResults(),this.search.select()),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({added:a}),c&&c.noFocus||this.focusSearch())},cancel:function(){this.close(),this.focusSearch()},addSelectedChoice:function(c){var j,k,d=!c.locked,e=a("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),f=a("<li class='select2-search-choice select2-locked'><div></div></li>"),g=d?e:f,h=this.id(c),i=this.getVal();j=this.opts.formatSelection(c,g.find("div"),this.opts.escapeMarkup),j!=b&&g.find("div").replaceWith("<div>"+j+"</div>"),k=this.opts.formatSelectionCssClass(c,g.find("div")),k!=b&&g.addClass(k),d&&g.find(".select2-search-choice-close").on("mousedown",A).on("click dblclick",this.bind(function(b){this.isInterfaceEnabled()&&(this.unselect(a(b.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),A(b),this.close(),this.focusSearch())})).on("focus",this.bind(function(){this.isInterfaceEnabled()&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))})),g.data("select2-data",c),g.insertBefore(this.searchContainer),i.push(h),this.setVal(i)},unselect:function(b){var d,e,c=this.getVal();if(b=b.closest(".select2-search-choice"),0===b.length)throw"Invalid argument: "+b+". Must be .select2-search-choice";if(d=b.data("select2-data")){var f=a.Event("select2-removing");if(f.val=this.id(d),f.choice=d,this.opts.element.trigger(f),f.isDefaultPrevented())return!1;for(;(e=p(this.id(d),c))>=0;)c.splice(e,1),this.setVal(c),this.select&&this.postprocessResults();return b.remove(),this.opts.element.trigger({type:"select2-removed",val:this.id(d),choice:d}),this.triggerChange({removed:d}),!0}},postprocessResults:function(a,b,c){var d=this.getVal(),e=this.results.find(".select2-result"),f=this.results.find(".select2-result-with-children"),g=this;e.each2(function(a,b){var c=g.id(b.data("select2-data"));p(c,d)>=0&&(b.addClass("select2-selected"),b.find(".select2-result-selectable").addClass("select2-selected"))}),f.each2(function(a,b){b.is(".select2-result-selectable")||0!==b.find(".select2-result-selectable:not(.select2-selected)").length||b.addClass("select2-selected")}),-1==this.highlight()&&c!==!1&&g.highlight(0),!this.opts.createSearchChoice&&!e.filter(".select2-result:not(.select2-selected)").length>0&&(!a||a&&!a.more&&0===this.results.find(".select2-no-results").length)&&J(g.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+K(g.opts.formatNoMatches,g.search.val())+"</li>")},getMaxSearchWidth:function(){return this.selection.width()-t(this.search)},resizeSearch:function(){var a,b,c,d,e,f=t(this.search);a=C(this.search)+10,b=this.search.offset().left,c=this.selection.width(),d=this.selection.offset().left,e=c-(b-d)-f,a>e&&(e=c-f),40>e&&(e=c-f),0>=e&&(e=a),this.search.width(Math.floor(e))},getVal:function(){var a;return this.select?(a=this.select.val(),null===a?[]:a):(a=this.opts.element.val(),s(a,this.opts.separator))},setVal:function(b){var c;this.select?this.select.val(b):(c=[],a(b).each(function(){p(this,c)<0&&c.push(this)}),this.opts.element.val(0===c.length?"":c.join(this.opts.separator)))},buildChangeDetails:function(a,b){for(var b=b.slice(0),a=a.slice(0),c=0;c<b.length;c++)for(var d=0;d<a.length;d++)r(this.opts.id(b[c]),this.opts.id(a[d]))&&(b.splice(c,1),c>0&&c--,a.splice(d,1),d--);return{added:b,removed:a}},val:function(c,d){var e,f=this;if(0===arguments.length)return this.getVal();if(e=this.data(),e.length||(e=[]),!c&&0!==c)return this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),d&&this.triggerChange({added:this.data(),removed:e}),void 0;if(this.setVal(c),this.select)this.opts.initSelection(this.select,this.bind(this.updateSelection)),d&&this.triggerChange(this.buildChangeDetails(e,this.data()));else{if(this.opts.initSelection===b)throw new Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(b){var c=a.map(b,f.id);f.setVal(c),f.updateSelection(b),f.clearSearch(),d&&f.triggerChange(f.buildChangeDetails(e,f.data()))})}this.clearSearch()},onSortStart:function(){if(this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0),this.searchContainer.hide()},onSortEnd:function(){var b=[],c=this;this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){b.push(c.opts.id(a(this).data("select2-data")))}),this.setVal(b),this.triggerChange()},data:function(b,c){var e,f,d=this;return 0===arguments.length?this.selection.children(".select2-search-choice").map(function(){return a(this).data("select2-data")}).get():(f=this.data(),b||(b=[]),e=a.map(b,function(a){return d.opts.id(a)}),this.setVal(e),this.updateSelection(b),this.clearSearch(),c&&this.triggerChange(this.buildChangeDetails(f,this.data())),void 0)}}),a.fn.select2=function(){var d,e,f,g,h,c=Array.prototype.slice.call(arguments,0),i=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],j=["opened","isFocused","container","dropdown"],k=["val","data"],l={search:"externalSearch"};return this.each(function(){if(0===c.length||"object"==typeof c[0])d=0===c.length?{}:a.extend({},c[0]),d.element=a(this),"select"===d.element.get(0).tagName.toLowerCase()?h=d.element.prop("multiple"):(h=d.multiple||!1,"tags"in d&&(d.multiple=h=!0)),e=h?new window.Select2["class"].multi:new window.Select2["class"].single,e.init(d);else{if("string"!=typeof c[0])throw"Invalid arguments to select2 plugin: "+c;if(p(c[0],i)<0)throw"Unknown method: "+c[0];if(g=b,e=a(this).data("select2"),e===b)return;if(f=c[0],"container"===f?g=e.container:"dropdown"===f?g=e.dropdown:(l[f]&&(f=l[f]),g=e[f].apply(e,c.slice(1))),p(c[0],j)>=0||p(c[0],k)>=0&&1==c.length)return!1}}),g===b?this:g},a.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(a,b,c,d){var e=[];return E(a.text,c.term,e,d),e.join("")},formatSelection:function(a,c,d){return a?d(a.text):b},sortResults:function(a){return a},formatResultCssClass:function(a){return a.css},formatSelectionCssClass:function(){return b},formatMatches:function(a){return a+" results are available, use up and down arrow keys to navigate."},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(a,b){var c=b-a.length;return"Please enter "+c+" or more character"+(1==c?"":"s")},formatInputTooLong:function(a,b){var c=a.length-b;return"Please delete "+c+" character"+(1==c?"":"s")},formatSelectionTooBig:function(a){return"You can only select "+a+" item"+(1==a?"":"s")},formatLoadMore:function(){return"Loading more results\u2026"},formatSearching:function(){return"Searching\u2026"},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(a){return a==b?null:a.id},matcher:function(a,b){return o(""+b).toUpperCase().indexOf(o(""+a).toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:M,escapeMarkup:F,blurOnChange:!1,selectOnBlur:!1,adaptContainerCssClass:function(a){return a},adaptDropdownCssClass:function(){return null},nextSearchTerm:function(){return b},searchInputPlaceholder:"",createSearchChoicePosition:"top",shouldFocusInput:function(a){var b="ontouchstart"in window||navigator.msMaxTouchPoints>0;return b?a.opts.minimumResultsForSearch<0?!1:!0:!0}},a.fn.select2.ajaxDefaults={transport:a.ajax,params:{type:"GET",cache:!1,dataType:"json"}},window.Select2={query:{ajax:G,local:H,tags:I},util:{debounce:w,markMatch:E,escapeMarkup:F,stripDiacritics:o},"class":{"abstract":d,single:e,multi:f}}}}(jQuery);
// Opentip v2.4.6
// Copyright (c) 2009-2012
// www.opentip.org
// MIT Licensed
var Opentip,firstAdapter,i,mouseMoved,mousePosition,mousePositionObservers,position,vendors,_i,_len,_ref,__slice=[].slice,__indexOf=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1},__hasProp={}.hasOwnProperty;for(Opentip=function(){function t(e,i,o,s){var n,r,a,h,p,d,l,u,c,g,f,m,v,b,w=this;if(this.id=++t.lastId,this.debug("Creating Opentip."),t.tips.push(this),this.adapter=t.adapter,n=this.adapter.data(e,"opentips")||[],n.push(this),this.adapter.data(e,"opentips",n),this.triggerElement=this.adapter.wrap(e),this.triggerElement.length>1)throw Error("You can't call Opentip on multiple elements.");if(1>this.triggerElement.length)throw Error("Invalid element.");this.loaded=!1,this.loading=!1,this.visible=!1,this.waitingToShow=!1,this.waitingToHide=!1,this.currentPosition={left:0,top:0},this.dimensions={width:100,height:50},this.content="",this.redraw=!0,this.currentObservers={showing:!1,visible:!1,hiding:!1,hidden:!1},s=this.adapter.clone(s),typeof i=="object"?(s=i,i=o=void 0):typeof o=="object"&&(s=o,o=void 0),o!=null&&(s.title=o),i!=null&&this.setContent(i),s["extends"]==null&&(s["extends"]=s.style!=null?s.style:t.defaultStyle),h=[s],b=s;while(b["extends"]){if(d=b["extends"],b=t.styles[d],b==null)throw Error("Invalid style: "+d);h.unshift(b),b["extends"]==null&&d!=="standard"&&(b["extends"]="standard")}for(s=(f=this.adapter).extend.apply(f,[{}].concat(__slice.call(h))),s.hideTriggers=function(){var t,e,i,o;for(i=s.hideTriggers,o=[],t=0,e=i.length;e>t;t++)r=i[t],o.push(r);return o}(),s.hideTrigger&&s.hideTriggers.length===0&&s.hideTriggers.push(s.hideTrigger),m=["tipJoint","targetJoint","stem"],l=0,c=m.length;c>l;l++)p=m[l],s[p]&&typeof s[p]=="string"&&(s[p]=new t.Joint(s[p]));for(!s.ajax||s.ajax!==!0&&s.ajax||(s.ajax=this.adapter.tagName(this.triggerElement)==="A"?this.adapter.attr(this.triggerElement,"href"):!1),s.showOn==="click"&&this.adapter.tagName(this.triggerElement)==="A"&&this.adapter.observe(this.triggerElement,"click",function(t){return t.preventDefault(),t.stopPropagation(),t.stopped=!0}),s.target&&(s.fixed=!0),s.stem===!0&&(s.stem=new t.Joint(s.tipJoint)),s.target===!0?s.target=this.triggerElement:s.target&&(s.target=this.adapter.wrap(s.target)),this.currentStem=s.stem,s.delay==null&&(s.delay=s.showOn==="mouseover"?.2:0),s.targetJoint==null&&(s.targetJoint=new t.Joint(s.tipJoint).flip()),this.showTriggers=[],this.showTriggersWhenVisible=[],this.hideTriggers=[],s.showOn&&s.showOn!=="creation"&&this.showTriggers.push({element:this.triggerElement,event:s.showOn}),s.ajaxCache!=null&&(s.cache=s.ajaxCache,delete s.ajaxCache),this.options=s,this.bound={},v=["prepareToShow","prepareToHide","show","hide","reposition"],u=0,g=v.length;g>u;u++)a=v[u],this.bound[a]=function(t){return function(){return w[t].apply(w,arguments)}}(a);this.adapter.domReady(function(){return w.activate(),w.options.showOn==="creation"?w.prepareToShow():void 0})}return t.prototype.STICKS_OUT_TOP=1,t.prototype.STICKS_OUT_BOTTOM=2,t.prototype.STICKS_OUT_LEFT=1,t.prototype.STICKS_OUT_RIGHT=2,t.prototype["class"]={container:"opentip-container",opentip:"opentip",header:"ot-header",content:"ot-content",loadingIndicator:"ot-loading-indicator",close:"ot-close",goingToHide:"ot-going-to-hide",hidden:"ot-hidden",hiding:"ot-hiding",goingToShow:"ot-going-to-show",showing:"ot-showing",visible:"ot-visible",loading:"ot-loading",ajaxError:"ot-ajax-error",fixed:"ot-fixed",showEffectPrefix:"ot-show-effect-",hideEffectPrefix:"ot-hide-effect-",stylePrefix:"style-"},t.prototype._setup=function(){var t,e,i,o,s,n,r,a,h,p,d;for(this.debug("Setting up the tooltip."),this._buildContainer(),this.hideTriggers=[],h=this.options.hideTriggers,o=s=0,r=h.length;r>s;o=++s){if(e=h[o],i=null,t=this.options.hideOn instanceof Array?this.options.hideOn[o]:this.options.hideOn,typeof e=="string")switch(e){case"trigger":t=t||"mouseout",i=this.triggerElement;break;case"tip":t=t||"mouseover",i=this.container;break;case"target":t=t||"mouseover",i=this.options.target;break;case"closeButton":break;default:throw Error("Unknown hide trigger: "+e+".")}else t=t||"mouseover",i=this.adapter.wrap(e);i&&this.hideTriggers.push({element:i,event:t,original:e})}for(p=this.hideTriggers,d=[],n=0,a=p.length;a>n;n++)e=p[n],d.push(this.showTriggersWhenVisible.push({element:e.element,event:"mouseover"}));return d},t.prototype._buildContainer=function(){return this.container=this.adapter.create('<div id="opentip-'+this.id+'" class="'+this["class"].container+" "+this["class"].hidden+" "+this["class"].stylePrefix+this.options.className+'"></div>'),this.adapter.css(this.container,{position:"absolute"}),this.options.ajax&&this.adapter.addClass(this.container,this["class"].loading),this.options.fixed&&this.adapter.addClass(this.container,this["class"].fixed),this.options.showEffect&&this.adapter.addClass(this.container,""+this["class"].showEffectPrefix+this.options.showEffect),this.options.hideEffect?this.adapter.addClass(this.container,""+this["class"].hideEffectPrefix+this.options.hideEffect):void 0},t.prototype._buildElements=function(){var t,e;return this.tooltipElement=this.adapter.create('<div class="'+this["class"].opentip+'"><div class="'+this["class"].header+'"></div><div class="'+this["class"].content+'"></div></div>'),this.backgroundCanvas=this.adapter.wrap(document.createElement("canvas")),this.adapter.css(this.backgroundCanvas,{position:"absolute"}),typeof G_vmlCanvasManager!="undefined"&&G_vmlCanvasManager!==null&&G_vmlCanvasManager.initElement(this.adapter.unwrap(this.backgroundCanvas)),t=this.adapter.find(this.tooltipElement,"."+this["class"].header),this.options.title&&(e=this.adapter.create("<h1></h1>"),this.adapter.update(e,this.options.title,this.options.escapeTitle),this.adapter.append(t,e)),this.options.ajax&&!this.loaded&&this.adapter.append(this.tooltipElement,this.adapter.create('<div class="'+this["class"].loadingIndicator+'"><span>↻</span></div>')),__indexOf.call(this.options.hideTriggers,"closeButton")>=0&&(this.closeButtonElement=this.adapter.create('<a href="javascript:undefined;" class="'+this["class"].close+'"><span>Close</span></a>'),this.adapter.append(t,this.closeButtonElement)),this.adapter.append(this.container,this.backgroundCanvas),this.adapter.append(this.container,this.tooltipElement),this.adapter.append(document.body,this.container),this._newContent=!0,this.redraw=!0},t.prototype.setContent=function(t){return this.content=t,this._newContent=!0,typeof this.content=="function"?(this._contentFunction=this.content,this.content=""):this._contentFunction=null,this.visible?this._updateElementContent():void 0},t.prototype._updateElementContent=function(){var t;return(this._newContent||!this.options.cache&&this._contentFunction)&&(t=this.adapter.find(this.container,"."+this["class"].content),t!=null&&(this._contentFunction&&(this.debug("Executing content function."),this.content=this._contentFunction(this)),this.adapter.update(t,this.content,this.options.escapeContent)),this._newContent=!1),this._storeAndLockDimensions(),this.reposition()},t.prototype._storeAndLockDimensions=function(){var t;if(this.container)return t=this.dimensions,this.adapter.css(this.container,{width:"auto",left:"0px",top:"0px"}),this.dimensions=this.adapter.dimensions(this.container),this.dimensions.width+=1,this.adapter.css(this.container,{width:""+this.dimensions.width+"px",top:""+this.currentPosition.top+"px",left:""+this.currentPosition.left+"px"}),this._dimensionsEqual(this.dimensions,t)?void 0:(this.redraw=!0,this._draw())},t.prototype.activate=function(){return this._setupObservers("hidden","hiding")},t.prototype.deactivate=function(){return this.debug("Deactivating tooltip."),this.hide(),this._setupObservers("-showing","-visible","-hidden","-hiding")},t.prototype._setupObservers=function(){var t,e,i,o,s,n,r,a,h,p,d,l,u,c,g,f,m=this;for(o=arguments.length>=1?__slice.call(arguments,0):[],n=0,p=o.length;p>n;n++)if(i=o[n],e=!1,i.charAt(0)==="-"&&(e=!0,i=i.substr(1)),this.currentObservers[i]!==!e)switch(this.currentObservers[i]=!e,t=function(){var t,i,o;return t=arguments.length>=1?__slice.call(arguments,0):[],e?(i=m.adapter).stopObserving.apply(i,t):(o=m.adapter).observe.apply(o,t)},i){case"showing":for(c=this.hideTriggers,r=0,d=c.length;d>r;r++)s=c[r],t(s.element,s.event,this.bound.prepareToHide);t(document.onresize!=null?document:window,"resize",this.bound.reposition),t(window,"scroll",this.bound.reposition);break;case"visible":for(g=this.showTriggersWhenVisible,a=0,l=g.length;l>a;a++)s=g[a],t(s.element,s.event,this.bound.prepareToShow);break;case"hiding":for(f=this.showTriggers,h=0,u=f.length;u>h;h++)s=f[h],t(s.element,s.event,this.bound.prepareToShow);break;case"hidden":break;default:throw Error("Unknown state: "+i)}return null},t.prototype.prepareToShow=function(){return this._abortHiding(),this._abortShowing(),this.visible?void 0:(this.debug("Showing in "+this.options.delay+"s."),this.container==null&&this._setup(),this.options.group&&t._abortShowingGroup(this.options.group,this),this.preparingToShow=!0,this._setupObservers("-hidden","-hiding","showing"),this._followMousePosition(),this.options.fixed&&!this.options.target&&(this.initialMousePosition=mousePosition),this.reposition(),this._showTimeoutId=this.setTimeout(this.bound.show,this.options.delay||0))},t.prototype.show=function(){var e=this;return this._abortHiding(),this.visible?void 0:(this._clearTimeouts(),this._triggerElementExists()?(this.debug("Showing now."),this.container==null&&this._setup(),this.options.group&&t._hideGroup(this.options.group,this),this.visible=!0,this.preparingToShow=!1,this.tooltipElement==null&&this._buildElements(),this._updateElementContent(),!this.options.ajax||this.loaded&&this.options.cache||this._loadAjax(),this._searchAndActivateCloseButtons(),this._startEnsureTriggerElement(),this.adapter.css(this.container,{zIndex:t.lastZIndex++}),this._setupObservers("-hidden","-hiding","-showing","-visible","showing","visible"),this.options.fixed&&!this.options.target&&(this.initialMousePosition=mousePosition),this.reposition(),this.adapter.removeClass(this.container,this["class"].hiding),this.adapter.removeClass(this.container,this["class"].hidden),this.adapter.addClass(this.container,this["class"].goingToShow),this.setCss3Style(this.container,{transitionDuration:"0s"}),this.defer(function(){var t;if(e.visible&&!e.preparingToHide)return e.adapter.removeClass(e.container,e["class"].goingToShow),e.adapter.addClass(e.container,e["class"].showing),t=0,e.options.showEffect&&e.options.showEffectDuration&&(t=e.options.showEffectDuration),e.setCss3Style(e.container,{transitionDuration:""+t+"s"}),e._visibilityStateTimeoutId=e.setTimeout(function(){return e.adapter.removeClass(e.container,e["class"].showing),e.adapter.addClass(e.container,e["class"].visible)},t),e._activateFirstInput()}),this._draw()):this.deactivate())},t.prototype._abortShowing=function(){return this.preparingToShow?(this.debug("Aborting showing."),this._clearTimeouts(),this._stopFollowingMousePosition(),this.preparingToShow=!1,this._setupObservers("-showing","-visible","hiding","hidden")):void 0},t.prototype.prepareToHide=function(){return this._abortShowing(),this._abortHiding(),this.visible?(this.debug("Hiding in "+this.options.hideDelay+"s"),this.preparingToHide=!0,this._setupObservers("-showing","visible","-hidden","hiding"),this._hideTimeoutId=this.setTimeout(this.bound.hide,this.options.hideDelay)):void 0},t.prototype.hide=function(){var t=this;return this._abortShowing(),this.visible&&(this._clearTimeouts(),this.debug("Hiding!"),this.visible=!1,this.preparingToHide=!1,this._stopEnsureTriggerElement(),this._setupObservers("-showing","-visible","-hiding","-hidden","hiding","hidden"),this.options.fixed||this._stopFollowingMousePosition(),this.container)?(this.adapter.removeClass(this.container,this["class"].visible),this.adapter.removeClass(this.container,this["class"].showing),this.adapter.addClass(this.container,this["class"].goingToHide),this.setCss3Style(this.container,{transitionDuration:"0s"}),this.defer(function(){var e;return t.adapter.removeClass(t.container,t["class"].goingToHide),t.adapter.addClass(t.container,t["class"].hiding),e=0,t.options.hideEffect&&t.options.hideEffectDuration&&(e=t.options.hideEffectDuration),t.setCss3Style(t.container,{transitionDuration:""+e+"s"}),t._visibilityStateTimeoutId=t.setTimeout(function(){return t.adapter.removeClass(t.container,t["class"].hiding),t.adapter.addClass(t.container,t["class"].hidden),t.setCss3Style(t.container,{transitionDuration:"0s"}),t.options.removeElementsOnHide?(t.debug("Removing HTML elements."),t.adapter.remove(t.container),delete t.container,delete t.tooltipElement):void 0},e)})):void 0},t.prototype._abortHiding=function(){return this.preparingToHide?(this.debug("Aborting hiding."),this._clearTimeouts(),this.preparingToHide=!1,this._setupObservers("-hiding","showing","visible")):void 0},t.prototype.reposition=function(){var t,e,i,o=this;return t=this.getPosition(),t==null||(e=this.options.stem,this.options.containInViewport&&(i=this._ensureViewportContainment(t),t=i.position,e=i.stem),this._positionsEqual(t,this.currentPosition))?void 0:(this.options.stem&&!e.eql(this.currentStem)&&(this.redraw=!0),this.currentPosition=t,this.currentStem=e,this._draw(),this.adapter.css(this.container,{left:""+t.left+"px",top:""+t.top+"px"}),this.defer(function(){var t,e;return t=o.adapter.unwrap(o.container),t.style.visibility="hidden",e=t.offsetHeight,t.style.visibility="visible"}))},t.prototype.getPosition=function(t,e,i){var o,s,n,r,a,h,p,d,l;if(this.container)return t==null&&(t=this.options.tipJoint),e==null&&(e=this.options.targetJoint),r={},this.options.target?(p=this.adapter.offset(this.options.target),h=this.adapter.dimensions(this.options.target),r=p,e.right?(d=this.adapter.unwrap(this.options.target),d.getBoundingClientRect!=null?r.left=d.getBoundingClientRect().right+((l=window.pageXOffset)!=null?l:document.body.scrollLeft):r.left+=h.width):e.center&&(r.left+=Math.round(h.width/2)),e.bottom?r.top+=h.height:e.middle&&(r.top+=Math.round(h.height/2)),this.options.borderWidth&&(this.options.tipJoint.left&&(r.left+=this.options.borderWidth),this.options.tipJoint.right&&(r.left-=this.options.borderWidth),this.options.tipJoint.top?r.top+=this.options.borderWidth:this.options.tipJoint.bottom&&(r.top-=this.options.borderWidth))):r=this.initialMousePosition?{top:this.initialMousePosition.y,left:this.initialMousePosition.x}:{top:mousePosition.y,left:mousePosition.x},this.options.autoOffset&&(a=this.options.stem?this.options.stemLength:0,n=a&&this.options.fixed?2:10,o=t.middle&&!this.options.fixed?15:0,s=t.center&&!this.options.fixed?15:0,t.right?r.left-=n+o:t.left&&(r.left+=n+o),t.bottom?r.top-=n+s:t.top&&(r.top+=n+s),a&&(i==null&&(i=this.options.stem),i.right?r.left-=a:i.left&&(r.left+=a),i.bottom?r.top-=a:i.top&&(r.top+=a))),r.left+=this.options.offset[0],r.top+=this.options.offset[1],t.right?r.left-=this.dimensions.width:t.center&&(r.left-=Math.round(this.dimensions.width/2)),t.bottom?r.top-=this.dimensions.height:t.middle&&(r.top-=Math.round(this.dimensions.height/2)),r},t.prototype._ensureViewportContainment=function(e){var i,o,s,n,r,a,h,p,d,l,u,c;if(h=this.options.stem,s={position:e,stem:h},!this.visible||!e)return s;if(p=this._sticksOut(e),!p[0]&&!p[1])return s;if(l=new t.Joint(this.options.tipJoint),this.options.targetJoint&&(d=new t.Joint(this.options.targetJoint)),a=this.adapter.scrollOffset(),u=this.adapter.viewportDimensions(),c=[e.left-a[0],e.top-a[1]],i=!1,u.width>=this.dimensions.width&&p[0])switch(i=!0,p[0]){case this.STICKS_OUT_LEFT:l.setHorizontal("left"),this.options.targetJoint&&d.setHorizontal("right");break;case this.STICKS_OUT_RIGHT:l.setHorizontal("right"),this.options.targetJoint&&d.setHorizontal("left")}if(u.height>=this.dimensions.height&&p[1])switch(i=!0,p[1]){case this.STICKS_OUT_TOP:l.setVertical("top"),this.options.targetJoint&&d.setVertical("bottom");break;case this.STICKS_OUT_BOTTOM:l.setVertical("bottom"),this.options.targetJoint&&d.setVertical("top")}return i?(this.options.stem&&(h=l),e=this.getPosition(l,d,h),o=this._sticksOut(e),n=!1,r=!1,o[0]&&o[0]!==p[0]&&(n=!0,l.setHorizontal(this.options.tipJoint.horizontal),this.options.targetJoint&&d.setHorizontal(this.options.targetJoint.horizontal)),o[1]&&o[1]!==p[1]&&(r=!0,l.setVertical(this.options.tipJoint.vertical),this.options.targetJoint&&d.setVertical(this.options.targetJoint.vertical)),n&&r?s:((n||r)&&(this.options.stem&&(h=l),e=this.getPosition(l,d,h)),{position:e,stem:h})):s},t.prototype._sticksOut=function(t){var e,i,o,s;return i=this.adapter.scrollOffset(),s=this.adapter.viewportDimensions(),e=[t.left-i[0],t.top-i[1]],o=[!1,!1],0>e[0]?o[0]=this.STICKS_OUT_LEFT:e[0]+this.dimensions.width>s.width&&(o[0]=this.STICKS_OUT_RIGHT),0>e[1]?o[1]=this.STICKS_OUT_TOP:e[1]+this.dimensions.height>s.height&&(o[1]=this.STICKS_OUT_BOTTOM),o},t.prototype._draw=function(){var e,i,o,s,n,r,a,h,p,d,l,u,c,g,f,m,v,b,w,_=this;if(this.backgroundCanvas&&this.redraw){if(this.debug("Drawing background."),this.redraw=!1,this.currentStem){for(v=["top","right","bottom","left"],f=0,m=v.length;m>f;f++)u=v[f],this.adapter.removeClass(this.container,"stem-"+u);this.adapter.addClass(this.container,"stem-"+this.currentStem.horizontal),this.adapter.addClass(this.container,"stem-"+this.currentStem.vertical)}return r=[0,0],a=[0,0],__indexOf.call(this.options.hideTriggers,"closeButton")>=0&&(n=new t.Joint(((b=this.currentStem)!=null?b+"":void 0)==="top right"?"top left":"top right"),r=[this.options.closeButtonRadius+this.options.closeButtonOffset[0],this.options.closeButtonRadius+this.options.closeButtonOffset[1]],a=[this.options.closeButtonRadius-this.options.closeButtonOffset[0],this.options.closeButtonRadius-this.options.closeButtonOffset[1]]),o=this.adapter.clone(this.dimensions),s=[0,0],this.options.borderWidth&&(o.width+=this.options.borderWidth*2,o.height+=this.options.borderWidth*2,s[0]-=this.options.borderWidth,s[1]-=this.options.borderWidth),this.options.shadow&&(o.width+=this.options.shadowBlur*2,o.width+=Math.max(0,this.options.shadowOffset[0]-this.options.shadowBlur*2),o.height+=this.options.shadowBlur*2,o.height+=Math.max(0,this.options.shadowOffset[1]-this.options.shadowBlur*2),s[0]-=Math.max(0,this.options.shadowBlur-this.options.shadowOffset[0]),s[1]-=Math.max(0,this.options.shadowBlur-this.options.shadowOffset[1])),i={left:0,right:0,top:0,bottom:0},this.currentStem&&(this.currentStem.left?i.left=this.options.stemLength:this.currentStem.right&&(i.right=this.options.stemLength),this.currentStem.top?i.top=this.options.stemLength:this.currentStem.bottom&&(i.bottom=this.options.stemLength)),n&&(n.left?i.left=Math.max(i.left,a[0]):n.right&&(i.right=Math.max(i.right,a[0])),n.top?i.top=Math.max(i.top,a[1]):n.bottom&&(i.bottom=Math.max(i.bottom,a[1]))),o.width+=i.left+i.right,o.height+=i.top+i.bottom,s[0]-=i.left,s[1]-=i.top,this.currentStem&&this.options.borderWidth&&(w=this._getPathStemMeasures(this.options.stemBase,this.options.stemLength,this.options.borderWidth),g=w.stemLength,c=w.stemBase),e=this.adapter.unwrap(this.backgroundCanvas),e.width=o.width,e.height=o.height,this.adapter.css(this.backgroundCanvas,{width:""+e.width+"px",height:""+e.height+"px",left:""+s[0]+"px",top:""+s[1]+"px"}),h=e.getContext("2d"),h.setTransform(1,0,0,1,0,0),h.clearRect(0,0,e.width,e.height),h.beginPath(),h.fillStyle=this._getColor(h,this.dimensions,this.options.background,this.options.backgroundGradientHorizontal),h.lineJoin="miter",h.miterLimit=500,l=this.options.borderWidth/2,this.options.borderWidth?(h.strokeStyle=this.options.borderColor,h.lineWidth=this.options.borderWidth):(g=this.options.stemLength,c=this.options.stemBase),c==null&&(c=0),d=function(t,e,i){return i&&h.moveTo(Math.max(c,_.options.borderRadius,r[0])+1-l,-l),e?(h.lineTo(t/2-c/2,-l),h.lineTo(t/2,-g-l),h.lineTo(t/2+c/2,-l)):void 0},p=function(t,e,i){var o,s,n,a;return t?(h.lineTo(-c+l,0-l),h.lineTo(g+l,-g-l),h.lineTo(l,c-l)):e?(a=_.options.closeButtonOffset,n=r[0],i%2!==0&&(a=[a[1],a[0]],n=r[1]),o=Math.acos(a[1]/_.options.closeButtonRadius),s=Math.acos(a[0]/_.options.closeButtonRadius),h.lineTo(-n+l,-l),h.arc(l-a[0],-l+a[1],_.options.closeButtonRadius,-(Math.PI/2+o),s,!1)):(h.lineTo(-_.options.borderRadius+l,-l),h.quadraticCurveTo(l,-l,l,_.options.borderRadius-l))},h.translate(-s[0],-s[1]),h.save(),function(){var e,i,o,s,r,a,l,u,c,g,f;for(f=[],i=c=0,g=t.positions.length/2;g>=0?g>c:c>g;i=g>=0?++c:--c)r=i*2,a=i===0||i===3?0:_.dimensions.width,l=2>i?0:_.dimensions.height,u=Math.PI/2*i,o=i%2===0?_.dimensions.width:_.dimensions.height,s=new t.Joint(t.positions[r]),e=new t.Joint(t.positions[r+1]),h.save(),h.translate(a,l),h.rotate(u),d(o,s.eql(_.currentStem),i===0),h.translate(o,0),p(e.eql(_.currentStem),e.eql(n),i),f.push(h.restore());return f}(),h.closePath(),h.save(),this.options.shadow&&(h.shadowColor=this.options.shadowColor,h.shadowBlur=this.options.shadowBlur,h.shadowOffsetX=this.options.shadowOffset[0],h.shadowOffsetY=this.options.shadowOffset[1]),h.fill(),h.restore(),this.options.borderWidth&&h.stroke(),h.restore(),n?function(){var t,e,i,o,s;return i=e=_.options.closeButtonRadius*2,n+""=="top right"?(s=[_.dimensions.width-_.options.closeButtonOffset[0],_.options.closeButtonOffset[1]],t=[s[0]+l,s[1]-l]):(s=[_.options.closeButtonOffset[0],_.options.closeButtonOffset[1]],t=[s[0]-l,s[1]-l]),h.translate(t[0],t[1]),o=_.options.closeButtonCrossSize/2,h.save(),h.beginPath(),h.strokeStyle=_.options.closeButtonCrossColor,h.lineWidth=_.options.closeButtonCrossLineWidth,h.lineCap="round",h.moveTo(-o,-o),h.lineTo(o,o),h.stroke(),h.beginPath(),h.moveTo(o,-o),h.lineTo(-o,o),h.stroke(),h.restore(),_.adapter.css(_.closeButtonElement,{left:""+(s[0]-o-_.options.closeButtonLinkOverscan)+"px",top:""+(s[1]-o-_.options.closeButtonLinkOverscan)+"px",width:""+(_.options.closeButtonCrossSize+_.options.closeButtonLinkOverscan*2)+"px",height:""+(_.options.closeButtonCrossSize+_.options.closeButtonLinkOverscan*2)+"px"})}():void 0}},t.prototype._getPathStemMeasures=function(t,e,i){var o,s,n,r,a,h,p;if(r=i/2,n=Math.atan(t/2/e),o=n*2,a=r/Math.sin(o),s=2*a*Math.cos(n),p=r+e-s,0>p)throw Error("Sorry but your stemLength / stemBase ratio is strange.");return h=Math.tan(n)*p*2,{stemLength:p,stemBase:h}},t.prototype._getColor=function(t,e,i,o){var s,n,r,a,h;if(o==null&&(o=!1),typeof i=="string")return i;for(n=o?t.createLinearGradient(0,0,e.width,0):t.createLinearGradient(0,0,0,e.height),r=a=0,h=i.length;h>a;r=++a)s=i[r],n.addColorStop(s[0],s[1]);return n},t.prototype._searchAndActivateCloseButtons=function(){var t,e,i,o;for(o=this.adapter.findAll(this.container,"."+this["class"].close),e=0,i=o.length;i>e;e++)t=o[e],this.hideTriggers.push({element:this.adapter.wrap(t),event:"click"});return this.currentObservers.showing&&this._setupObservers("-showing","showing"),this.currentObservers.visible?this._setupObservers("-visible","visible"):void 0},t.prototype._activateFirstInput=function(){var t;return t=this.adapter.unwrap(this.adapter.find(this.container,"input, textarea")),t!=null?typeof t.focus=="function"?t.focus():void 0:void 0},t.prototype._followMousePosition=function(){return this.options.fixed?void 0:t._observeMousePosition(this.bound.reposition)},t.prototype._stopFollowingMousePosition=function(){return this.options.fixed?void 0:t._stopObservingMousePosition(this.bound.reposition)},t.prototype._clearShowTimeout=function(){return clearTimeout(this._showTimeoutId)},t.prototype._clearHideTimeout=function(){return clearTimeout(this._hideTimeoutId)},t.prototype._clearTimeouts=function(){return clearTimeout(this._visibilityStateTimeoutId),this._clearShowTimeout(),this._clearHideTimeout()},t.prototype._triggerElementExists=function(){var t;t=this.adapter.unwrap(this.triggerElement);while(t.parentNode){if(t.parentNode.tagName==="BODY")return!0;t=t.parentNode}return!1},t.prototype._loadAjax=function(){var t=this;if(!this.loading)return this.loaded=!1,this.loading=!0,this.adapter.addClass(this.container,this["class"].loading),this.setContent(""),this.debug("Loading content from "+this.options.ajax),this.adapter.ajax({url:this.options.ajax,method:this.options.ajaxMethod,onSuccess:function(e){return t.debug("Loading successful."),t.adapter.removeClass(t.container,t["class"].loading),t.setContent(e)},onError:function(e){var i;return i=t.options.ajaxErrorMessage,t.debug(i,e),t.setContent(i),t.adapter.addClass(t.container,t["class"].ajaxError)},onComplete:function(){return t.adapter.removeClass(t.container,t["class"].loading),t.loading=!1,t.loaded=!0,t._searchAndActivateCloseButtons(),t._activateFirstInput(),t.reposition()}})},t.prototype._ensureTriggerElement=function(){return this._triggerElementExists()?void 0:(this.deactivate(),this._stopEnsureTriggerElement())},t.prototype._ensureTriggerElementInterval=1e3,t.prototype._startEnsureTriggerElement=function(){var t=this;return this._ensureTriggerElementTimeoutId=setInterval(function(){return t._ensureTriggerElement()},this._ensureTriggerElementInterval)},t.prototype._stopEnsureTriggerElement=function(){return clearInterval(this._ensureTriggerElementTimeoutId)},t}(),vendors=["khtml","ms","o","moz","webkit"],Opentip.prototype.setCss3Style=function(t,e){var i,o,s,n,r;t=this.adapter.unwrap(t),r=[];for(i in e)__hasProp.call(e,i)&&(o=e[i],t.style[i]!=null?r.push(t.style[i]=o):r.push(function(){var e,r,a;for(a=[],e=0,r=vendors.length;r>e;e++)s=vendors[e],n=""+this.ucfirst(s)+this.ucfirst(i),t.style[n]!=null?a.push(t.style[n]=o):a.push(void 0);return a}.call(this)));return r},Opentip.prototype.defer=function(t){return setTimeout(t,0)},Opentip.prototype.setTimeout=function(t,e){return setTimeout(t,e?e*1e3:0)},Opentip.prototype.ucfirst=function(t){return t==null?"":t.charAt(0).toUpperCase()+t.slice(1)},Opentip.prototype.dasherize=function(t){return t.replace(/([A-Z])/g,function(t,e){return"-"+e.toLowerCase()})},mousePositionObservers=[],mousePosition={x:0,y:0},mouseMoved=function(t){var e,i,o,s;for(mousePosition=Opentip.adapter.mousePosition(t),s=[],i=0,o=mousePositionObservers.length;o>i;i++)e=mousePositionObservers[i],s.push(e());return s},Opentip.followMousePosition=function(){return Opentip.adapter.observe(document.body,"mousemove",mouseMoved)},Opentip._observeMousePosition=function(t){return mousePositionObservers.push(t)},Opentip._stopObservingMousePosition=function(t){var e;return mousePositionObservers=function(){var i,o,s;for(s=[],i=0,o=mousePositionObservers.length;o>i;i++)e=mousePositionObservers[i],e!==t&&s.push(e);return s}()},Opentip.Joint=function(){function t(t){t!=null&&(t instanceof Opentip.Joint&&(t+=""),this.set(t))}return t.prototype.set=function(t){return t=t.toLowerCase(),this.setHorizontal(t),this.setVertical(t),this},t.prototype.setHorizontal=function(t){var e,i,o,s,n,r,a;for(i=["left","center","right"],o=0,n=i.length;n>o;o++)e=i[o],~t.indexOf(e)&&(this.horizontal=e.toLowerCase());for(this.horizontal==null&&(this.horizontal="center"),a=[],s=0,r=i.length;r>s;s++)e=i[s],a.push(this[e]=this.horizontal===e?e:void 0);return a},t.prototype.setVertical=function(t){var e,i,o,s,n,r,a;for(i=["top","middle","bottom"],o=0,n=i.length;n>o;o++)e=i[o],~t.indexOf(e)&&(this.vertical=e.toLowerCase());for(this.vertical==null&&(this.vertical="middle"),a=[],s=0,r=i.length;r>s;s++)e=i[s],a.push(this[e]=this.vertical===e?e:void 0);return a},t.prototype.eql=function(t){return t!=null&&this.horizontal===t.horizontal&&this.vertical===t.vertical},t.prototype.flip=function(){var t,e;return e=Opentip.position[this.toString(!0)],t=(e+4)%8,this.set(Opentip.positions[t]),this},t.prototype.toString=function(t){var e,i;return t==null&&(t=!1),i=this.vertical==="middle"?"":this.vertical,e=this.horizontal==="center"?"":this.horizontal,i&&e&&(e=t?Opentip.prototype.ucfirst(e):" "+e),""+i+e},t}(),Opentip.prototype._positionsEqual=function(t,e){return t!=null&&e!=null&&t.left===e.left&&t.top===e.top},Opentip.prototype._dimensionsEqual=function(t,e){return t!=null&&e!=null&&t.width===e.width&&t.height===e.height},Opentip.prototype.debug=function(){var t;return t=arguments.length>=1?__slice.call(arguments,0):[],Opentip.debug&&(typeof console!="undefined"&&console!==null?console.debug:void 0)!=null?(t.unshift("#"+this.id+" |"),console.debug.apply(console,t)):void 0},Opentip.findElements=function(){var t,e,i,o,s,n,r,a,h,p;for(t=Opentip.adapter,h=t.findAll(document.body,"[data-ot]"),p=[],r=0,a=h.length;a>r;r++){i=h[r],n={},e=t.data(i,"ot"),(e===""||e==="true"||e==="yes")&&(e=t.attr(i,"title"),t.attr(i,"title","")),e=e||"";for(o in Opentip.styles.standard)s=t.data(i,"ot"+Opentip.prototype.ucfirst(o)),s!=null&&(s==="yes"||s==="true"||s==="on"?s=!0:(s==="no"||s==="false"||s==="off")&&(s=!1),n[o]=s);p.push(new Opentip(i,e,n))}return p},Opentip.version="2.4.6",Opentip.debug=!1,Opentip.lastId=0,Opentip.lastZIndex=100,Opentip.tips=[],Opentip._abortShowingGroup=function(t,e){var i,o,s,n,r;for(n=Opentip.tips,r=[],o=0,s=n.length;s>o;o++)i=n[o],i!==e&&i.options.group===t?r.push(i._abortShowing()):r.push(void 0);return r},Opentip._hideGroup=function(t,e){var i,o,s,n,r;for(n=Opentip.tips,r=[],o=0,s=n.length;s>o;o++)i=n[o],i!==e&&i.options.group===t?r.push(i.hide()):r.push(void 0);return r},Opentip.adapters={},Opentip.adapter=null,firstAdapter=!0,Opentip.addAdapter=function(t){return Opentip.adapters[t.name]=t,firstAdapter?(Opentip.adapter=t,t.domReady(Opentip.findElements),t.domReady(Opentip.followMousePosition),firstAdapter=!1):void 0},Opentip.positions=["top","topRight","right","bottomRight","bottom","bottomLeft","left","topLeft"],Opentip.position={},_ref=Opentip.positions,i=_i=0,_len=_ref.length;_len>_i;i=++_i)position=_ref[i],Opentip.position[position]=i;Opentip.styles={standard:{"extends":null,title:void 0,escapeTitle:!0,escapeContent:!1,className:"standard",stem:!0,delay:null,hideDelay:.1,fixed:!1,showOn:"mouseover",hideTrigger:"trigger",hideTriggers:[],hideOn:null,removeElementsOnHide:!1,offset:[0,0],containInViewport:!0,autoOffset:!0,showEffect:"appear",hideEffect:"fade",showEffectDuration:.3,hideEffectDuration:.2,stemLength:5,stemBase:8,tipJoint:"top left",target:null,targetJoint:null,cache:!0,ajax:!1,ajaxMethod:"GET",ajaxErrorMessage:"There was a problem downloading the content.",group:null,style:null,background:"#fff18f",backgroundGradientHorizontal:!1,closeButtonOffset:[5,5],closeButtonRadius:7,closeButtonCrossSize:4,closeButtonCrossColor:"#d2c35b",closeButtonCrossLineWidth:1.5,closeButtonLinkOverscan:6,borderRadius:5,borderWidth:1,borderColor:"#f2e37b",shadow:!0,shadowBlur:10,shadowOffset:[3,3],shadowColor:"rgba(0, 0, 0, 0.1)"},glass:{"extends":"standard",className:"glass",background:[[0,"rgba(252, 252, 252, 0.8)"],[.5,"rgba(255, 255, 255, 0.8)"],[.5,"rgba(250, 250, 250, 0.9)"],[1,"rgba(245, 245, 245, 0.9)"]],borderColor:"#eee",closeButtonCrossColor:"rgba(0, 0, 0, 0.2)",borderRadius:15,closeButtonRadius:10,closeButtonOffset:[8,8]},dark:{"extends":"standard",className:"dark",borderRadius:13,borderColor:"#444",closeButtonCrossColor:"rgba(240, 240, 240, 1)",shadowColor:"rgba(0, 0, 0, 0.3)",shadowOffset:[2,2],background:[[0,"rgba(30, 30, 30, 0.7)"],[.5,"rgba(30, 30, 30, 0.8)"],[.5,"rgba(10, 10, 10, 0.8)"],[1,"rgba(10, 10, 10, 0.9)"]]},alert:{"extends":"standard",className:"alert",borderRadius:1,borderColor:"#AE0D11",closeButtonCrossColor:"rgba(255, 255, 255, 1)",shadowColor:"rgba(0, 0, 0, 0.3)",shadowOffset:[2,2],background:[[0,"rgba(203, 15, 19, 0.7)"],[.5,"rgba(203, 15, 19, 0.8)"],[.5,"rgba(189, 14, 18, 0.8)"],[1,"rgba(179, 14, 17, 0.9)"]]}},Opentip.defaultStyle="standard",typeof module!="undefined"&&module!==null?module.exports=Opentip:window.Opentip=Opentip;var __slice=[].slice;(function(t){var e;return t.fn.opentip=function(t,e,i){return new Opentip(this,t,e,i)},e=function(){function e(){}return e.prototype.name="jquery",e.prototype.domReady=function(e){return t(e)},e.prototype.create=function(e){return t(e)},e.prototype.wrap=function(e){if(e=t(e),e.length>1)throw Error("Multiple elements provided.");return e},e.prototype.unwrap=function(e){return t(e)[0]
},e.prototype.tagName=function(t){return this.unwrap(t).tagName},e.prototype.attr=function(){var e,i,o;return i=arguments[0],e=arguments.length>=2?__slice.call(arguments,1):[],(o=t(i)).attr.apply(o,e)},e.prototype.data=function(){var e,i,o;return i=arguments[0],e=arguments.length>=2?__slice.call(arguments,1):[],(o=t(i)).data.apply(o,e)},e.prototype.find=function(e,i){return t(e).find(i).get(0)},e.prototype.findAll=function(e,i){return t(e).find(i)},e.prototype.update=function(e,i,o){return e=t(e),o?e.text(i):e.html(i)},e.prototype.append=function(e,i){return t(e).append(i)},e.prototype.remove=function(e){return t(e).remove()},e.prototype.addClass=function(e,i){return t(e).addClass(i)},e.prototype.removeClass=function(e,i){return t(e).removeClass(i)},e.prototype.css=function(e,i){return t(e).css(i)},e.prototype.dimensions=function(e){return{width:t(e).outerWidth(),height:t(e).outerHeight()}},e.prototype.scrollOffset=function(){return[window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop]},e.prototype.viewportDimensions=function(){return{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}},e.prototype.mousePosition=function(t){return t==null?null:{x:t.pageX,y:t.pageY}},e.prototype.offset=function(e){var i;return i=t(e).offset(),{left:i.left,top:i.top}},e.prototype.observe=function(e,i,o){return t(e).bind(i,o)},e.prototype.stopObserving=function(e,i,o){return t(e).unbind(i,o)},e.prototype.ajax=function(e){var i,o;if(e.url==null)throw Error("No url provided");return t.ajax({url:e.url,type:(i=(o=e.method)!=null?o.toUpperCase():void 0)!=null?i:"GET"}).done(function(t){return typeof e.onSuccess=="function"?e.onSuccess(t):void 0}).fail(function(t){return typeof e.onError=="function"?e.onError("Server responded with status "+t.status):void 0}).always(function(){return typeof e.onComplete=="function"?e.onComplete():void 0})},e.prototype.clone=function(e){return t.extend({},e)},e.prototype.extend=function(){var e,i;return i=arguments[0],e=arguments.length>=2?__slice.call(arguments,1):[],t.extend.apply(t,[i].concat(__slice.call(e)))},e}(),Opentip.addAdapter(new e)})(jQuery);

/*! vex.js, vex.dialog.js 1.3.5 */
;(function(){var a;a=function(a){var b,c;return b=!1,a(function(){var d;return d=(document.body||document.documentElement).style,b=void 0!==d.animation||void 0!==d.WebkitAnimation||void 0!==d.MozAnimation||void 0!==d.MsAnimation||void 0!==d.OAnimation,a(window).bind("keyup.vex",function(a){return 27===a.keyCode?c.closeByEscape():void 0})}),c={globalID:1,animationEndEvent:"animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend",baseClassNames:{vex:"vex",content:"vex-content",overlay:"vex-overlay",close:"vex-close",closing:"vex-closing",open:"vex-open"},defaultOptions:{content:"",showCloseButton:!0,escapeButtonCloses:!0,overlayClosesOnClick:!0,appendLocation:"body",className:"",css:{},overlayClassName:"",overlayCSS:{},contentClassName:"",contentCSS:{},closeClassName:"",closeCSS:{}},open:function(b){return b=a.extend({},c.defaultOptions,b),b.id=c.globalID,c.globalID+=1,b.$vex=a("<div>").addClass(c.baseClassNames.vex).addClass(b.className).css(b.css).data({vex:b}),b.$vexOverlay=a("<div>").addClass(c.baseClassNames.overlay).addClass(b.overlayClassName).css(b.overlayCSS).data({vex:b}),b.overlayClosesOnClick&&b.$vexOverlay.bind("click.vex",function(b){return b.target===this?c.close(a(this).data().vex.id):void 0}),b.$vex.append(b.$vexOverlay),b.$vexContent=a("<div>").addClass(c.baseClassNames.content).addClass(b.contentClassName).css(b.contentCSS).append(b.content).data({vex:b}),b.$vex.append(b.$vexContent),b.showCloseButton&&(b.$closeButton=a("<div>").addClass(c.baseClassNames.close).addClass(b.closeClassName).css(b.closeCSS).data({vex:b}).bind("click.vex",function(){return c.close(a(this).data().vex.id)}),b.$vexContent.append(b.$closeButton)),a(b.appendLocation).append(b.$vex),c.setupBodyClassName(b.$vex),b.afterOpen&&b.afterOpen(b.$vexContent,b),setTimeout(function(){return b.$vexContent.trigger("vexOpen",b)},0),b.$vexContent},getAllVexes:function(){return a("."+c.baseClassNames.vex+':not(".'+c.baseClassNames.closing+'") .'+c.baseClassNames.content)},getVexByID:function(b){return c.getAllVexes().filter(function(){return a(this).data().vex.id===b})},close:function(a){var b;if(!a){if(b=c.getAllVexes().last(),!b.length)return!1;a=b.data().vex.id}return c.closeByID(a)},closeAll:function(){var b;return b=c.getAllVexes().map(function(){return a(this).data().vex.id}).toArray(),(null!=b?b.length:void 0)?(a.each(b.reverse(),function(a,b){return c.closeByID(b)}),!0):!1},closeByID:function(d){var e,f,g,h,i;return f=c.getVexByID(d),f.length?(e=f.data().vex.$vex,i=a.extend({},f.data().vex),g=function(){return i.beforeClose?i.beforeClose(f,i):void 0},h=function(){return f.trigger("vexClose",i),e.remove(),i.afterClose?i.afterClose(f,i):void 0},b?(g(),e.unbind(c.animationEndEvent).bind(c.animationEndEvent,function(){return h()}).addClass(c.baseClassNames.closing)):(g(),h()),!0):void 0},closeByEscape:function(){var b,d,e;return e=c.getAllVexes().map(function(){return a(this).data().vex.id}).toArray(),(null!=e?e.length:void 0)?(d=Math.max.apply(Math,e),b=c.getVexByID(d),b.data().vex.escapeButtonCloses!==!0?!1:c.closeByID(d)):!1},setupBodyClassName:function(b){return b.bind("vexOpen.vex",function(){return a("body").addClass(c.baseClassNames.open)}).bind("vexClose.vex",function(){return c.getAllVexes().length?void 0:a("body").removeClass(c.baseClassNames.open)})},hideLoading:function(){return a(".vex-loading-spinner").remove()},showLoading:function(){return c.hideLoading(),a("body").append('<div class="vex-loading-spinner '+c.defaultOptions.className+'"></div>')}}},"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):window.vex=a(jQuery)}).call(this),function(){var a;a=function(a,b){var c,d;return null==b?a.error("Vex is required to use vex.dialog"):(c=function(b){var c;return c={},a.each(b.serializeArray(),function(){return c[this.name]?(c[this.name].push||(c[this.name]=[c[this.name]]),c[this.name].push(this.value||"")):c[this.name]=this.value||""}),c},d={},d.buttons={YES:{text:"OK",type:"submit",className:"vex-dialog-button-primary"},NO:{text:"Cancel",type:"button",className:"vex-dialog-button-secondary",click:function(a){return a.data().vex.value=!1,b.close(a.data().vex.id)}}},d.defaultOptions={callback:function(){},afterOpen:function(){},message:"Message",input:'<input name="vex" type="hidden" value="_vex-empty-value" />',value:!1,buttons:[d.buttons.YES,d.buttons.NO],showCloseButton:!1,onSubmit:function(e){var f,g;return f=a(this),g=f.parent(),e.preventDefault(),e.stopPropagation(),g.data().vex.value=d.getFormValueOnSubmit(c(f)),b.close(g.data().vex.id)},focusFirstInput:!0},d.defaultAlertOptions={message:"Alert",buttons:[d.buttons.YES]},d.defaultConfirmOptions={message:"Confirm"},d.open=function(c){var e;return c=a.extend({},b.defaultOptions,d.defaultOptions,c),c.content=d.buildDialogForm(c),c.beforeClose=function(a){return c.callback(a.data().vex.value)},e=b.open(c),c.focusFirstInput&&e.find('input[type="text"], input[type="submit"]').first().focus(),e},d.alert=function(b){return"string"==typeof b&&(b={message:b}),b=a.extend({},d.defaultAlertOptions,b),d.open(b)},d.confirm=function(b){return"string"==typeof b?a.error("dialog.confirm(options) requires options.callback."):(b=a.extend({},d.defaultConfirmOptions,b),d.open(b))},d.prompt=function(b){var c;return"string"==typeof b?a.error("dialog.prompt(options) requires options.callback."):(c={message:'<label for="vex">'+(b.label||"Prompt:")+"</label>",input:'<input name="vex" type="text" class="vex-dialog-prompt-input" placeholder="'+(b.placeholder||"")+'"  value="'+(b.value||"")+'" />'},b=a.extend({},c,b),d.open(b))},d.buildDialogForm=function(b){var c,e,f;return c=a('<form class="vex-dialog-form" />'),f=a('<div class="vex-dialog-message" />'),e=a('<div class="vex-dialog-input" />'),c.append(f.append(b.message)).append(e.append(b.input)).append(d.buttonsToDOM(b.buttons)).bind("submit.vex",b.onSubmit),c},d.getFormValueOnSubmit=function(a){return a.vex?"_vex-empty-value"===a.vex?!0:a.vex:a},d.buttonsToDOM=function(c){var d;return d=a('<div class="vex-dialog-buttons" />'),a.each(c,function(e,f){return d.append(a('<input type="'+f.type+'" />').val(f.text).addClass(f.className+" vex-dialog-button "+(0===e?"vex-first ":"")+(e===c.length-1?"vex-last ":"")).bind("click.vex",function(c){return f.click?f.click(a(this).parents("."+b.baseClassNames.content),c):void 0}))}),d},d)},"function"==typeof define&&define.amd?define(["jquery","vex"],a):"object"==typeof exports?module.exports=a(require("jquery"),require("vex")):window.vex.dialog=a(window.jQuery,window.vex)}.call(this);

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

/**
 * progressButton.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
	
	'use strict';

	// https://gist.github.com/edankwan/4389601
	Modernizr.addTest('csstransformspreserve3d', function () {
		var prop = Modernizr.prefixed('transformStyle');
		var val = 'preserve-3d';
		var computedStyle;
		if(!prop) return false;

		prop = prop.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

		Modernizr.testStyles('#modernizr{' + prop + ':' + val + ';}', function (el, rule) {
			computedStyle = window.getComputedStyle ? getComputedStyle(el, null).getPropertyValue(prop) : '';
		});

		return (computedStyle === val);
	});

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	// support
	var support = { transitions : Modernizr.csstransitions, transforms3d : Modernizr.csstransforms3d && Modernizr.csstransformspreserve3d },
		// transition end event name
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];

	function ProgressButton( el, options ) {
		this.button = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	ProgressButton.prototype.options = {
		// time in ms that the status (success or error will be displayed)
		// during this time the button will be disabled
		statusTime : 1500
	};

	ProgressButton.prototype._init = function() {
		this._validate();
		// create structure
		this._create();
		// init events
		this._initEvents();
	};

	ProgressButton.prototype._validate = function() {
		// we will consider the fill/horizontal as default
		if( this.button.getAttribute( 'data-style' ) === null ) {
			this.button.setAttribute( 'data-style', 'fill' );
		}
		if( this.button.getAttribute( 'data-vertical' ) === null && this.button.getAttribute( 'data-horizontal' ) === null ) {
			this.button.setAttribute( 'data-horizontal', '' );
		}
		if( !support.transforms3d && this.button.getAttribute( 'data-perspective' ) !== null ) {
			this.button.removeAttribute( 'data-perspective' );
			this.button.setAttribute( 'data-style', 'fill' );
			this.button.removeAttribute( 'data-vertical' );
			this.button.setAttribute( 'data-horizontal', '' );
		}
	};

	ProgressButton.prototype._create = function() {
		/*var textEl = document.createElement( 'span' );
		textEl.className = 'content';
		textEl.innerHTML = this.button.innerHTML;
		var progressEl = document.createElement( 'span' );
		progressEl.className = 'progress';

		var progressInnerEl = document.createElement( 'span' );
		progressInnerEl.className = 'progress-inner';
		progressEl.appendChild( progressInnerEl );
		// clear content
		this.button.innerHTML = '';

		if( this.button.getAttribute( 'data-perspective' ) !== null ) {
			var progressWrapEl = document.createElement( 'span' );
			progressWrapEl.className = 'progress-wrap';
			progressWrapEl.appendChild( textEl );
			progressWrapEl.appendChild( progressEl );
			this.button.appendChild( progressWrapEl );
		}
		else {
			this.button.appendChild( textEl );
			this.button.appendChild( progressEl );
		}
		*/
		// the element that serves as the progress bar
		this.progress = $(this.button).find('.progress-inner')[0];

		// property to change on the progress element
		//if( this.button.getAttribute( 'data-horizontal' ) !== null ) {
			this.progressProp = 'width';
		/*}
		else if( this.button.getAttribute( 'data-vertical' ) !== null ) {
			this.progressProp = 'height';
		}*/
		this._enable();
	};

	ProgressButton.prototype._setProgress = function( val ) {
		this.progress.style[ this.progressProp ] = 100 * val + '%';
	};

	ProgressButton.prototype._initEvents = function() {
		var self = this;
		this.button.addEventListener( 'click', function() {
			// disable the button
			self.button.setAttribute( 'disabled', '' );
			// add class state-loading to the button (applies a specific transform to the button depending which data-style is defined - defined in the stylesheets)
			classie.remove( self.progress, 'notransition' );
			classie.add( this, 'state-loading' );

			setTimeout( function() {
				if( typeof self.options.callback === 'function' ) {
					self.options.callback( self );
				}
				else {
					self._setProgress( 1 );
					var onEndTransFn = function( ev ) {
						if( support.transitions && ev.propertyName !== self.progressProp ) return;
						this.removeEventListener( transEndEventName, onEndTransFn );
						self._stop();
					};
					
					if( support.transitions ) {
						self.progress.addEventListener( transEndEventName, onEndTransFn );
					}
					else {
						onEndTransFn.call();
					}
					
				}
			}, 
			self.button.getAttribute( 'data-style' ) === 'fill' || 
			self.button.getAttribute( 'data-style' ) === 'top-line' ||
			self.button.getAttribute( 'data-style' ) === 'lateral-lines' ? 0 : 200 ); // TODO: change timeout to transitionend event callback
		} );
	};

	ProgressButton.prototype._stop = function( status ) {
		var self = this;

		setTimeout( function() {
			// fade out progress bar
			self.progress.style.opacity = 0;
			var onEndTransFn = function( ev ) {
				if( support.transitions && ev.propertyName !== 'opacity' ) return;
				this.removeEventListener( transEndEventName, onEndTransFn );
				classie.add( self.progress, 'notransition' );
				self.progress.style[ self.progressProp ] = '0%';
				self.progress.style.opacity = 1;
			};

			if( support.transitions ) {
				self.progress.addEventListener( transEndEventName, onEndTransFn );
			}
			else {
				onEndTransFn.call();
			}
			
			
			// add class state-success to the button
			if( typeof status === 'number' ) {
				var statusClass = status >= 0 ? 'state-success' : 'state-error';
				classie.add( self.button, statusClass );
				// after options.statusTime remove status
				setTimeout( function() {
					classie.remove( self.button, statusClass );
					self._enable();
				}, self.options.statusTime );
			}
			else {
				self._enable();
			}

			// remove class state-loading from the button
			classie.remove( self.button, 'state-loading' );
		}, 100 );
	};

	// enable button
	ProgressButton.prototype._enable = function() {
		this.button.removeAttribute( 'disabled' );
	}

	// add to global namespace
	window.ProgressButton = ProgressButton;

})( window );
/**
 * @name jQuery Fullscreener
 * @license MIT 
 * @version 1.0
 */
!(function(window, document, $, undefined){

	/**
	 * plugin variables
	 */
	var $win = $(window),
		$doc = $(document),
		cssClasses = {
			container: 'fsr-container',
			element: 'fsr-element',
			hidden: 'fsr-hidden'
		},
		Fullscreener, defaults, supportBgSize;

	/**
	 * plugin defaults
	 */
	defaults = {
		useCSS: true,
		container: 'parent',
		position: {
			x: 'center',
			y: 'center'
		},
		throttleTimeout: 100
	};

	/**
	 * check background size support
	 */
	supportBgSize = 'backgroundSize' in document.createElement('div').style;

	/**
	 * @constructor
	 * @param {jQuery Object} element 
	 * @param {Object} options 
	 */
	Fullscreener = function(element, options){

		// save reference to element
		this.element = element;
		this.$element = $(element);

		// extend defaults
		this.settings = $.extend({}, defaults, options);

		// create params
		this.params = {
			element: {
				width: null,
				height: null
			},
			container: {
				width: null,
				height: null
			},
			ratios: {
				container: null,
				element: null
			}
		};

		// save reference to container
		if (this.settings.container == 'parent') {
			this.$container = this.$element.parent();
		} else {
			if (this.settings.container instanceof jQuery && this.settings.container.length) {
				this.$container = this.settings.container;
			}
		}

		// throw error for missing container
		if (!this.$container.length) {

			this.notify('The container was not found!');
			return;

		}

		// call init method
		this.init();

	};

	Fullscreener.fn = Fullscreener.prototype;
	Fullscreener.fn.constructor = Fullscreener;

	/**
	 * @method init
	 */
	Fullscreener.fn.init = function(){

		// add class to element
		this.$element.addClass(cssClasses.element);
		this.$container.addClass(cssClasses.container);

		// set image as background and use background size
		if (supportBgSize && this.settings.useCSS) {
			this.setBackground();
		} else {
			if (!supportBgSize || !this.settings.useCSS) {

				this.listen();
				this.resize();
				
			}
		}

	};

	/**
	 * @method listen
	 */
	Fullscreener.fn.listen = function(){

		// save reference to constructor
		var _this = this;

		$win.on('resize.fullscreener orientationchange.fullscreener', this.throttle(function(){

			_this.resize();

		}, this.settings.throttleTimeout));

	};

	/**
	 * @method setBackground
	 */
	Fullscreener.fn.setBackground = function(){

		// shortcuts
		var $element = this.$element,
			$container = this.$container;

		// update classes
		$element.addClass(cssClasses.hidden);

		// update container background
		$container.css('background-image', 'url(' + $element[0].src + ')');

	};

	/**
	 * @method calcRatios
	 */
	Fullscreener.fn.calcRatios = function(){

		// shortcuts
		var $element = this.$element,
			$container = this.$container,
			params = this.params;

		if (!params.ratios.element) {

			// check for width & height attributes
			if (!$element.attr('width') || !$element.attr('height')) {

				this.notify('The image should have width/height attributes!');
				return;

			}

			// dimensions
			var elementWidth = parseInt($element.attr('width'), 10),
				elementHeight = parseInt($element.attr('height'), 10);

			// calculate
			params.ratios.element = elementHeight/elementWidth;

			params.element.width = elementWidth;
			params.element.height = elementHeight;

		} 

		// dimensions
		var containerWidth = $container.width(),
			containerHeight = $container.height();

		// calculate
		params.ratios.container = containerHeight/containerWidth;

		params.container.width = containerWidth;
		params.container.height = containerHeight;

	};

	/**
	 * @method update
	 */
	Fullscreener.fn.update = function(){

		// shortcuts
		var $element = this.$element,
			params = this.params,
			settings = this.settings,
			props = {
				width: 0,
				height: 0,
				top: 'auto',
				right: 'auto',
				bottom: 'auto',
				left: 'auto'
			};

		// calculate dimensions
		if (params.ratios.element < params.ratios.container) {

			props.height = params.container.height;
			props.width = params.container.height / params.ratios.element;

		} else {

			props.height = params.container.width * params.ratios.element;
			props.width = params.container.width;

		}

		// calculate position
		switch (settings.position.y) {

			case 'top':
				props.top = 0;
			break;

			case 'bottom': 
				props.bottom = 0;
			break;

			case 'center': 
			default:
				props.top = (params.container.height - props.height)/2;
			break;

		}

		switch (settings.position.x) {

			case 'left':
				props.left = 0;
			break;

			case 'right': 
				props.right = 0;
			break;

			case 'center': 
			default:
				props.left = (params.container.width - props.width)/2;
			break;

		}

		// update css properties 
		$element.css(props);

	};

	/**
	 * @method throttle
	 * @param {Function} func 
	 * @param {Number} wait 
	 * @param {Object} options 
	 */
	Fullscreener.fn.throttle = function (func, wait, options){

		var context, args, result;
		var timeout = null,
			previous = 0;

		options || (options = {});

		function later(){

			previous = options.leading == false ? 0 : new Date;
			timeout = null;
			result = func.apply(context, args);

		};

		return function(){

			var now = new Date;

			if (!previous && options.leading == false) {
				previous = now;
			}

			var remaining = wait - (now - previous);

			context = this;
			args = arguments;

			if (remaining <= 0) {

				clearTimeout(timeout);
				timeout = null;
				previous = now;
				result = func.apply(context, args);

			} else {
				if (!timeout && options.trailing != false) {
					timeout = setTimeout(later, remaining);
				}
			}

			return result;

		};

	};

	/**
	 * @method resize
	 */
	Fullscreener.fn.resize = function(){

		this.calcRatios();
		this.update();

	};

	/**
	 * @method destroy
	 */
	Fullscreener.fn.destroy = function(){

		this.$element.removeClass(cssClasses.hidden).removeClass(cssClasses.element).removeAttr('style');
		this.$container.removeClass(cssClasses.container).removeAttr('style');
		this.$element.removeData('fullscreener');

	};

	/**
	 * @method notify
	 * @param {String} message 
	 */
	Fullscreener.fn.notify = function(message){
		alert('Fullscreener: ' + message);
	};

	/**
	 * @extends jQuery.fn
	 * @param {Object|String} args 
	 */
	$.fn.fullscreener = function(args){

		return this.each(function(){

			// save reference to the element and plugin instance
			var $this = $(this),
				instance = $this.data('fullscreener');

			if (!instance) {
				$this.data('fullscreener', new Fullscreener(this, args));
			} else {

				if (typeof args == 'string') {

					if (instance[args]) {
						instance[args]()
					} else {
						Fullscreener.fn.notify('This is not a valid method!');
					}

				}

			}

		});

	};

})(window, document, jQuery);
(function(window){

  if (typeof console === 'undefined') {
    /**
     * @see http://getfirebug.com/wiki/index.php/Console_API
     */
    window.console = {
      toString: function (){
        return 'Console.js version 0.9';
      }
    };
  }

  console._output = console.log || window.opera && opera.postError || function dump (message) {
    console.history = console.history || [];
    return console.history.push(message);
  };

  /**
   * Limit of objects dimensions
   * console.dimensions_limit = 1
   * console.dir({a:{b:1}}) ==> {a: {?}}
   * console.dimensions_limit = 2
   * console.dir({a:{b:1}}) ==> {a: {b: 1}}
   */
  console.dimensions_limit = 3;

  /**
   * repeatString("Ha ", 2) ==> "Ha Ha "
   * @param {String} string
   * @param {Number} times
   */
  function repeatString (string, times) {
    if (times < 1) {
      return '';
    }
    var result = string;
    for (var i=times; --i;) {
      result += string;
    }
    return result;
  }

  console._indent = '  ';

  /**
   * @param {Object} object
   * @return {String}
   */
  function primitiveOf(object) {
    var value = object.valueOf();
    switch (typeof value) {
      case "object":
        return "";
      case "string":
        return '"' + value +'"';
      default:
        return String(value);
    }
  }

  /**
   * source_of({x:2, y:8}) === '{x: 2, y: 8}'
   * @param {*} arg
   * @param {Number} limit dimension of objects
   * @param {Array} stack of parent objects
   * @return {String} string representation of input
   */
  console._source_of = function source_of (arg, limit, stack) {

    var aType = typeof arg;
    switch (aType) {
      case 'string':
        return '"' + arg +'"';
      case 'function':
        break;
      case 'object':
        if (arg === null) {
          return 'null';
        }
        break;
      default:
        return String(arg);
    }

    var prefix;
    var kind = Object.prototype.toString.call(arg).slice(8, -1);
    if (kind == 'Object') {
      prefix = '';
    } else {
      prefix = kind + ' ';
      var primitive = primitiveOf(arg);
      if (primitive) {
        prefix += primitive + ' ';
      }
    }
    if (!limit) {
      return prefix + '{?}';
    }
    // Check circular references
    var stack_length = stack.length;
    for (var si=0; si<stack_length; si++) {
      if (stack[si] === arg) {
        return '#';
      }
    }
    stack[stack_length++] = arg;
    var indent = repeatString(console._indent, stack_length);
    if (Object.getOwnPropertyNames) {
      var keys = Object.getOwnPropertyNames(arg);
    } else {
      keys = [];
      for (var key in arg) {
        keys.push(key);
      }
    }
    var result = prefix + '{';
    if (!keys.length) {
      return result + "}";
    }
    keys = keys.sort();
    var arr_obj = [];
    for (var n=0, nn=keys.length; n<nn; n++) {
      key = keys[n];
      try {
        var value = source_of(arg[key], limit-1, stack);
        arr_obj.push("\n"+ indent + key +': '+ value);
      } catch (e) {}
    }
    return result + arr_obj.join(', ') +'\n'+ repeatString(console._indent, stack_length - 1) + '}';

  };


  if (!console.dir || browser_suck_at_logging) {
    /**
     * @return {String} human-readable representation of input
     */
    console.dir = function dir (/* ...arguments */) {
      var result = [];
      for (var i=0; i<arguments.length; i++) {
        result.push(console._source_of(arguments[i], console.dimensions_limit, []));
      }
      return console._output(result.join(console._args_separator));
    };
  }


  /**
   * @param {*} arg
   * @param {Boolean} [within=false]
   */
  console._inspect = function inspect(arg, within) {
    var result = '';

    // TODO: http://twitter.com/abozhilov/status/27768472491
    if (Object(arg) !== arg) {
      if (within && typeof arg == 'string') {
        return '"' + arg + '"';
      }
      return arg;
    }

    if (arg && arg.nodeType == 1) {
      // Is element?
      result = '<'+ arg.tagName;
      for (var i=0, ii=arg.attributes.length; i<ii; i++) {
        if (arg.attributes[i].specified) {
          result +=' '+ arg.attributes[i].name +'="'+ arg.attributes[i].value +'"';
        }
      }
      if (arg.childNodes && arg.childNodes.length === 0) {
        result += '/';
      }
      return result + '>';
    }

    var kind = Object.prototype.toString.call(arg).slice(8, -1);
    switch (kind) {
      case 'String':
        return 'String "' + arg +'"';

      case 'Number':
      case 'Boolean':
        return kind + ' ' + arg;

      case 'Array':
      case 'HTMLCollection':
      case 'NodeList':
        // Is array-like object?
        result = kind == 'Array' ? '[' : kind + ' [';
        var arr_list = [];
        for (var j=0, jj=arg.length; j<jj; j++) {
          arr_list[j] = inspect(arg[j], true);
        }
        return result + arr_list.join(', ') +']';

      case 'Function':
      case 'Date':
        return arg;

      case 'RegExp':
        return "/"+ arg.source +"/";

      default:
        if (typeof arg === 'object') {
          var prefix;
          if (kind == 'Object') {
            prefix = '';
          } else {
            prefix = kind + ' ';
          }
          if (within) {
            return prefix + '{?}';
          }
          if (Object.getOwnPropertyNames) {
            var keys = Object.getOwnPropertyNames(arg);
          } else {
            keys = [];
            for (var key in arg) {
              if (arg.hasOwnProperty(key)) {
                keys.push(key);
              }
            }
          }
          result = prefix + '{';
          if (!keys.length) {
            return result + "}";
          }
          keys = keys.sort();
          var properties = [];
          for (var n=0, nn=keys.length; n<nn; n++) {
            key = keys[n];
            try {
              var value = inspect(arg[key], true);
              properties.push(key +': '+ value);
            } catch (e) {}
          }
          return result + properties.join(', ') +'}';
        } else {
          return arg;
        }
    }
  };


  var browser_suck_at_logging = /*@cc_on 1 || @*/ window.opera;

  var log_methods = ['log', 'info', 'warn', 'error', 'debug', 'dirxml'];

  console._args_separator = '\n';
  console._interpolate = /%[sdifo]/gi;

  for (var i=0; i<log_methods.length; i++) {
    var _log = console[log_methods[i]] || console._output;
    if (browser_suck_at_logging || !console[log_methods[i]]) {
      console[log_methods[i]] = function logger (first_arg) {
        var result = [];
        var args = Array.prototype.slice.call(arguments, 0);
        if (typeof first_arg === 'string' && console._interpolate.test(first_arg)) {
          args.shift();
          result.push(first_arg.replace(console._interpolate, function(){
            return console._inspect(args.shift());
          }));
        }
        for (var i=0; i<args.length; i++) {
          result.push(console._inspect(args[i]));
        }
        return Function.prototype.call.call(_log, console, result.join(console._args_separator));
      };
    }
  }

  /**
   * Simplified version of http://eriwen.com/javascript/js-stack-trace/
   */
  console.trace = console.trace || function trace() {
    try {
      i.dont.exist++;
    } catch(e) {
      var stack = e.stack || e.stacktrace;
      if (stack) {
        try {
          stack = stack.split('\n').slice(2).join('\n');
        } catch (err) {}
        console._output(stack);
      }
    }
  };


  /**
   * console.assert(false, "I'm gonna fail")
   * @param {Boolean} is_ok
   * @param {String} message optional
   */
  console.assert = console.assert || function assert (is_ok, message) {
    if (!is_ok) console._output( 'ASSERT FAIL: '+ message );
  };


  /**
   * @param {String} name optional
   */
  console.group = console.group || function group (name) {
    console._output('\n-------- '+ name +' --------');
  };

  console.groupCollapsed = console.groupCollapsed || console.group;

  /**
   * Print 3 line breaks
   */
  console.groupEnd = console.groupEnd || function groupEnd () {
    console._output('\n\n\n');
  };


  /**
   * @param {String} title optional
   */
  console.count = console.count || function count (title) {
    title = title || '';
    count.counters = count.counters || {};
    if (count.counters[title]) {
      count.counters[title]++;
    } else {
      count.counters[title] = 1;
    }
    console._output(title +' '+ count.counters[title]);
  };


  /**
   * @param {String} title optional
   */
  console.profile = console.profile || function profile (title) {
    return 'Not implemented';
  };
  console.profileEnd = console.profileEnd || function profileEnd () {
    return 'Not implemented';
  };


  console._timers = {};

  /**
   * @param {String} name such as "my damn slow parser"
   */
  console.time = console.time || function time (name) {
    var start = (new Date).getTime();
    console._timers[name] = {'start': start};
  };

  /**
   * @param {String} name such as "my damn slow parser"
   */
  console.timeEnd = console.timeEnd || function timeEnd (name) {
    var end = (new Date).getTime();
    console.info(name +': '+ (end - console._timers[name].start) +'ms');
    console._timers[name].end = end;
  };

  if (typeof require === 'function' && typeof exports !== 'undefined') {
    exports.console = window.console;
    console._output = require('system').print;
  }

})(this);
/**
 * Enhanced Select2 Dropmenus
 *
 * @AJAX Mode - When in this mode, your value will be an object (or array of objects) of the data used by Select2
 *     This change is so that you do not have to do an additional query yourself on top of Select2's own query
 * @params [options] {object} The configuration options passed to $.fn.select2(). Refer to the documentation
 */
angular.module('ui.select2', []).value('uiSelect2Config', {}).directive('uiSelect2', ['uiSelect2Config', '$timeout', function (uiSelect2Config, $timeout) {
  var options = {};
  if (uiSelect2Config) {
    angular.extend(options, uiSelect2Config);
  }
  return {
    require: 'ngModel',
    priority: 1,
    compile: function (tElm, tAttrs) {
      var watch,
        repeatOption,
        repeatAttr,
        isSelect = tElm.is('select'),
        isMultiple = angular.isDefined(tAttrs.multiple);

      // Enable watching of the options dataset if in use
      if (tElm.is('select')) {
        repeatOption = tElm.find('option[ng-repeat], option[data-ng-repeat]');

        if (repeatOption.length) {
          repeatAttr = repeatOption.attr('ng-repeat') || repeatOption.attr('data-ng-repeat');
          watch = jQuery.trim(repeatAttr.split('|')[0]).split(' ').pop();
        }
      }

      return function (scope, elm, attrs, controller) {
        // instance-specific options
        var opts = angular.extend({}, options, scope.$eval(attrs.uiSelect2));

        /*
        Convert from Select2 view-model to Angular view-model.
        */
        var convertToAngularModel = function(select2_data) {
          var model;
          if (opts.simple_tags) {
            model = [];
            angular.forEach(select2_data, function(value, index) {
              model.push(value.id);
            });
          } else {
            model = select2_data;
          }
          return model;
        };

        /*
        Convert from Angular view-model to Select2 view-model.
        */
        var convertToSelect2Model = function(angular_data) {
          var model = [];
          if (!angular_data) {
            return model;
          }

          if (opts.simple_tags) {
            model = [];
            angular.forEach(
              angular_data,
              function(value, index) {
                model.push({'id': value, 'text': value});
              });
          } else {
            model = angular_data;
          }
          return model;
        };

        if (isSelect) {
          // Use <select multiple> instead
          delete opts.multiple;
          delete opts.initSelection;
        } else if (isMultiple) {
          opts.multiple = true;
        }

        if (controller) {
          // Watch the model for programmatic changes
           scope.$watch(tAttrs.ngModel, function(current, old) {
            if (!current) {
              return;
            }
            if (current === old) {
              return;
            }
            controller.$render();
          }, true);
          controller.$render = function () {
            if (isSelect) {
              elm.select2('val', controller.$viewValue);
            } else {
              if (opts.multiple) {
                var viewValue = controller.$viewValue;
                if (angular.isString(viewValue)) {
                  viewValue = viewValue.split(',');
                }
                elm.select2(
                  'data', convertToSelect2Model(viewValue));
              } else {
                if (angular.isObject(controller.$viewValue)) {
                  elm.select2('data', controller.$viewValue);
                } else if (!controller.$viewValue) {
                  elm.select2('data', null);
                } else {
                  elm.select2('val', controller.$viewValue);
                }
              }
            }
          };

          // Watch the options dataset for changes
          if (watch) {
            scope.$watch(watch, function (newVal, oldVal, scope) {
              if (angular.equals(newVal, oldVal)) {
                return;
              }
              // Delayed so that the options have time to be rendered
              $timeout(function () {
                elm.select2('val', controller.$viewValue);
                // Refresh angular to remove the superfluous option
                elm.trigger('change');
                if(newVal && !oldVal && controller.$setPristine) {
                  controller.$setPristine(true);
                }
              });
            });
          }

          // Update valid and dirty statuses
          controller.$parsers.push(function (value) {
            var div = elm.prev();
            div
              .toggleClass('ng-invalid', !controller.$valid)
              .toggleClass('ng-valid', controller.$valid)
              .toggleClass('ng-invalid-required', !controller.$valid)
              .toggleClass('ng-valid-required', controller.$valid)
              .toggleClass('ng-dirty', controller.$dirty)
              .toggleClass('ng-pristine', controller.$pristine);
            return value;
          });

          if (!isSelect) {
            // Set the view and model value and update the angular template manually for the ajax/multiple select2.
            elm.bind("change", function (e) {
              e.stopImmediatePropagation();
              
              if (scope.$$phase || scope.$root.$$phase) {
                return;
              }
              scope.$apply(function () {
                controller.$setViewValue(
                  convertToAngularModel(elm.select2('data')));
              });
            });

            if (opts.initSelection) {
              var initSelection = opts.initSelection;
              opts.initSelection = function (element, callback) {
                initSelection(element, function (value) {
                  var isPristine = controller.$pristine;
                  controller.$setViewValue(convertToAngularModel(value));
                  callback(value);
                  if (isPristine) {
                    controller.$setPristine();
                  }
                  elm.prev().toggleClass('ng-pristine', controller.$pristine);
                });
              };
            }
          }
        }

        elm.bind("$destroy", function() {
          elm.select2("destroy");
        });

        attrs.$observe('disabled', function (value) {
          elm.select2('enable', !value);
        });

        attrs.$observe('readonly', function (value) {
          elm.select2('readonly', !!value);
        });

        if (attrs.ngMultiple) {
          scope.$watch(attrs.ngMultiple, function(newVal) {
            attrs.$set('multiple', !!newVal);
            elm.select2(opts);
          });
        }

        // Initialize the plugin late so that the injected DOM does not disrupt the template compiler
        $timeout(function () {
          elm.select2(opts);

          // Set initial value - I'm not sure about this but it seems to need to be there
          elm.val(controller.$viewValue);
          // important!
          controller.$render();

          // Not sure if I should just check for !isSelect OR if I should check for 'tags' key
          if (!opts.initSelection && !isSelect) {
            controller.$setViewValue(
              convertToAngularModel(elm.select2('data'))
            );
          }
        });
      };
    }
  };
}]);

/*
 jQuery UI Sortable plugin wrapper

 @param [ui-sortable] {object} Options to pass to $.fn.sortable() merged onto ui.config
 */
angular.module('ui.sortable', [])
  .value('uiSortableConfig',{})
  .directive('uiSortable', [
    'uiSortableConfig', '$timeout', '$log',
    function(uiSortableConfig, $timeout, $log) {
      return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModel) {
          var savedNodes;

          function combineCallbacks(first,second){
            if(second && (typeof second === "function")) {
              return function(e, ui) {
                first(e, ui);
                second(e, ui);
              };
            }
            return first;
          }

          var opts = {};

          var callbacks = {
            receive: null,
            remove:null,
            start:null,
            stop:null,
            update:null
          };

          angular.extend(opts, uiSortableConfig);

          if (ngModel) {

            // When we add or remove elements, we need the sortable to 'refresh'
            // so it can find the new/removed elements.
            scope.$watch(attrs.ngModel+'.length', function() {
              // Timeout to let ng-repeat modify the DOM
              $timeout(function() {
                element.sortable("refresh");
              });
            });

            callbacks.start = function(e, ui) {
              // Save the starting position of dragged item
              ui.item.sortable = {
                index: ui.item.index(),
                cancel: function () {
                  ui.item.sortable._isCanceled = true;
                },
                isCanceled: function () {
                  return ui.item.sortable._isCanceled;
                },
                _isCanceled: false
              };
            };

            callbacks.activate = function(e, ui) {
              // We need to make a copy of the current element's contents so
              // we can restore it after sortable has messed it up.
              // This is inside activate (instead of start) in order to save
              // both lists when dragging between connected lists.
              savedNodes = element.contents();

              // If this list has a placeholder (the connected lists won't),
              // don't inlcude it in saved nodes.
              var placeholder = element.sortable('option','placeholder');

              // placeholder.element will be a function if the placeholder, has
              // been created (placeholder will be an object).  If it hasn't
              // been created, either placeholder will be false if no
              // placeholder class was given or placeholder.element will be
              // undefined if a class was given (placeholder will be a string)
              if (placeholder && placeholder.element && typeof placeholder.element === 'function') {
                var phElement = placeholder.element();
                // workaround for jquery ui 1.9.x,
                // not returning jquery collection
                if (!phElement.jquery) {
                  phElement = $(phElement);
                }

                // exact match with the placeholder's class attribute to handle
                // the case that multiple connected sortables exist and
                // the placehoilder option equals the class of sortable items
                var excludes = element.find('[class="' + phElement.attr('class') + '"]');

                savedNodes = savedNodes.not(excludes);
              }
            };

            callbacks.update = function(e, ui) {
              // Save current drop position but only if this is not a second
              // update that happens when moving between lists because then
              // the value will be overwritten with the old value
              if(!ui.item.sortable.received) {
                ui.item.sortable.dropindex = ui.item.index();

                // Cancel the sort (let ng-repeat do the sort for us)
                // Don't cancel if this is the received list because it has
                // already been canceled in the other list, and trying to cancel
                // here will mess up the DOM.
                element.sortable('cancel');
              }

              // Put the nodes back exactly the way they started (this is very
              // important because ng-repeat uses comment elements to delineate
              // the start and stop of repeat sections and sortable doesn't
              // respect their order (even if we cancel, the order of the
              // comments are still messed up).
              savedNodes.detach().appendTo(element);

              // If received is true (an item was dropped in from another list)
              // then we add the new item to this list otherwise wait until the
              // stop event where we will know if it was a sort or item was
              // moved here from another list
              if(ui.item.sortable.received && !ui.item.sortable.isCanceled()) {
                scope.$apply(function () {
                  ngModel.$modelValue.splice(ui.item.sortable.dropindex, 0,
                                             ui.item.sortable.moved);
                });
              }
            };

            callbacks.stop = function(e, ui) {
              // If the received flag hasn't be set on the item, this is a
              // normal sort, if dropindex is set, the item was moved, so move
              // the items in the list.
              if(!ui.item.sortable.received &&
                 ('dropindex' in ui.item.sortable) &&
                 !ui.item.sortable.isCanceled()) {

                scope.$apply(function () {
                  ngModel.$modelValue.splice(
                    ui.item.sortable.dropindex, 0,
                    ngModel.$modelValue.splice(ui.item.sortable.index, 1)[0]);
                });
              }
            };

            callbacks.receive = function(e, ui) {
              // An item was dropped here from another list, set a flag on the
              // item.
              ui.item.sortable.received = true;
            };

            callbacks.remove = function(e, ui) {
              // Remove the item from this list's model and copy data into item,
              // so the next list can retrive it
              if (!ui.item.sortable.isCanceled()) {
                scope.$apply(function () {
                  ui.item.sortable.moved = ngModel.$modelValue.splice(
                    ui.item.sortable.index, 1)[0];
                });
              }
            };

            scope.$watch(attrs.uiSortable, function(newVal, oldVal) {
              angular.forEach(newVal, function(value, key) {
                if(callbacks[key]) {
                  if( key === 'stop' ){
                    // call apply after stop
                    value = combineCallbacks(
                      value, function() { scope.$apply(); });
                  }
                  // wrap the callback
                  value = combineCallbacks(callbacks[key], value);
                }
                element.sortable('option', key, value);
              });
            }, true);

            angular.forEach(callbacks, function(value, key) {
              opts[key] = combineCallbacks(value, opts[key]);
            });

          } else {
            $log.info('ui.sortable: ngModel not provided!', element);
          }

          // Create sortable
          element.sortable(opts);
        }
      };
    }
  ]);

/*
 Attaches input mask onto input element
 */
angular.module('ui.mask', [])
  .value('uiMaskConfig', {
    'maskDefinitions': {
      '9': /\d/,
      'A': /[a-zA-Z]/,
      '*': /[a-zA-Z0-9]/
    }
  })
  .directive('uiMask', ['uiMaskConfig', function (maskConfig) {
    return {
      priority: 100,
      require: 'ngModel',
      restrict: 'A',
      compile: function uiMaskCompilingFunction(){
        var options = maskConfig;

        return function uiMaskLinkingFunction(scope, iElement, iAttrs, controller){
          var maskProcessed = false, eventsBound = false,
            maskCaretMap, maskPatterns, maskPlaceholder, maskComponents,
          // Minimum required length of the value to be considered valid
            minRequiredLength,
            value, valueMasked, isValid,
          // Vars for initializing/uninitializing
            originalPlaceholder = iAttrs.placeholder,
            originalMaxlength = iAttrs.maxlength,
          // Vars used exclusively in eventHandler()
            oldValue, oldValueUnmasked, oldCaretPosition, oldSelectionLength;

          function initialize(maskAttr){
            if (!angular.isDefined(maskAttr)) {
              return uninitialize();
            }
            processRawMask(maskAttr);
            if (!maskProcessed) {
              return uninitialize();
            }
            initializeElement();
            bindEventListeners();
            return true;
          }

          function initPlaceholder(placeholderAttr) {
            if(! angular.isDefined(placeholderAttr)) {
              return;
            }

            maskPlaceholder = placeholderAttr;

            // If the mask is processed, then we need to update the value
            if (maskProcessed) {
              eventHandler();
            }
          }

          function formatter(fromModelValue){
            if (!maskProcessed) {
              return fromModelValue;
            }
            value = unmaskValue(fromModelValue || '');
            isValid = validateValue(value);
            controller.$setValidity('mask', isValid);
            return isValid && value.length ? maskValue(value) : undefined;
          }

          function parser(fromViewValue){
            if (!maskProcessed) {
              return fromViewValue;
            }
            value = unmaskValue(fromViewValue || '');
            isValid = validateValue(value);
            // We have to set viewValue manually as the reformatting of the input
            // value performed by eventHandler() doesn't happen until after
            // this parser is called, which causes what the user sees in the input
            // to be out-of-sync with what the controller's $viewValue is set to.
            controller.$viewValue = value.length ? maskValue(value) : '';
            controller.$setValidity('mask', isValid);
            if (value === '' && controller.$error.required !== undefined) {
              controller.$setValidity('required', false);
            }
            return isValid ? value : undefined;
          }

          var linkOptions = {};

          if (iAttrs.uiOptions) {
            linkOptions = scope.$eval('[' + iAttrs.uiOptions + ']');
            if (angular.isObject(linkOptions[0])) {
              // we can't use angular.copy nor angular.extend, they lack the power to do a deep merge
              linkOptions = (function(original, current){
                for(var i in original) {
                  if (Object.prototype.hasOwnProperty.call(original, i)) {
                    if (!current[i]) {
                      current[i] = angular.copy(original[i]);
                    } else {
                      angular.extend(current[i], original[i]);
                    }
                  }
                }
                return current;
              })(options, linkOptions[0]);
            }
          } else {
            linkOptions = options;
          }

          iAttrs.$observe('uiMask', initialize);
          iAttrs.$observe('placeholder', initPlaceholder);
          controller.$formatters.push(formatter);
          controller.$parsers.push(parser);

          function uninitialize(){
            maskProcessed = false;
            unbindEventListeners();

            if (angular.isDefined(originalPlaceholder)) {
              iElement.attr('placeholder', originalPlaceholder);
            } else {
              iElement.removeAttr('placeholder');
            }

            if (angular.isDefined(originalMaxlength)) {
              iElement.attr('maxlength', originalMaxlength);
            } else {
              iElement.removeAttr('maxlength');
            }

            iElement.val(controller.$modelValue);
            controller.$viewValue = controller.$modelValue;
            return false;
          }

          function initializeElement(){
            value = oldValueUnmasked = unmaskValue(controller.$modelValue || '');
            valueMasked = oldValue = maskValue(value);
            isValid = validateValue(value);
            var viewValue = isValid && value.length ? valueMasked : '';
            if (iAttrs.maxlength) { // Double maxlength to allow pasting new val at end of mask
              iElement.attr('maxlength', maskCaretMap[maskCaretMap.length - 1] * 2);
            }
            iElement.attr('placeholder', maskPlaceholder);
            iElement.val(viewValue);
            controller.$viewValue = viewValue;
            // Not using $setViewValue so we don't clobber the model value and dirty the form
            // without any kind of user interaction.
          }

          function bindEventListeners(){
            if (eventsBound) {
              return;
            }
            iElement.bind('blur', blurHandler);
            iElement.bind('mousedown mouseup', mouseDownUpHandler);
            iElement.bind('input keyup click focus', eventHandler);
            eventsBound = true;
          }

          function unbindEventListeners(){
            if (!eventsBound) {
              return;
            }
            iElement.unbind('blur', blurHandler);
            iElement.unbind('mousedown', mouseDownUpHandler);
            iElement.unbind('mouseup', mouseDownUpHandler);
            iElement.unbind('input', eventHandler);
            iElement.unbind('keyup', eventHandler);
            iElement.unbind('click', eventHandler);
            iElement.unbind('focus', eventHandler);
            eventsBound = false;
          }

          function validateValue(value){
            // Zero-length value validity is ngRequired's determination
            return value.length ? value.length >= minRequiredLength : true;
          }

          function unmaskValue(value){
            var valueUnmasked = '',
              maskPatternsCopy = maskPatterns.slice();
            // Preprocess by stripping mask components from value
            value = value.toString();
            angular.forEach(maskComponents, function (component){
              value = value.replace(component, '');
            });
            angular.forEach(value.split(''), function (chr){
              if (maskPatternsCopy.length && maskPatternsCopy[0].test(chr)) {
                valueUnmasked += chr;
                maskPatternsCopy.shift();
              }
            });
            return valueUnmasked;
          }

          function maskValue(unmaskedValue){
            var valueMasked = '',
                maskCaretMapCopy = maskCaretMap.slice();

            angular.forEach(maskPlaceholder.split(''), function (chr, i){
              if (unmaskedValue.length && i === maskCaretMapCopy[0]) {
                valueMasked  += unmaskedValue.charAt(0) || '_';
                unmaskedValue = unmaskedValue.substr(1);
                maskCaretMapCopy.shift();
              }
              else {
                valueMasked += chr;
              }
            });
            return valueMasked;
          }

          function getPlaceholderChar(i) {
            var placeholder = iAttrs.placeholder;

            if (typeof placeholder !== "undefined" && placeholder[i]) {
              return placeholder[i];
            } else {
              return "_";
            }
          }

          // Generate array of mask components that will be stripped from a masked value
          // before processing to prevent mask components from being added to the unmasked value.
          // E.g., a mask pattern of '+7 9999' won't have the 7 bleed into the unmasked value.
          // If a maskable char is followed by a mask char and has a mask
          // char behind it, we'll split it into it's own component so if
          // a user is aggressively deleting in the input and a char ahead
          // of the maskable char gets deleted, we'll still be able to strip
          // it in the unmaskValue() preprocessing.
          function getMaskComponents() {
            return maskPlaceholder.replace(/[_]+/g, '_').replace(/([^_]+)([a-zA-Z0-9])([^_])/g, '$1$2_$3').split('_');
          }

          function processRawMask(mask){
            var characterCount = 0;

            maskCaretMap    = [];
            maskPatterns    = [];
            maskPlaceholder = '';

            if (typeof mask === 'string') {
              minRequiredLength = 0;

              var isOptional = false,
                  splitMask  = mask.split("");

              angular.forEach(splitMask, function (chr, i){
                if (linkOptions.maskDefinitions[chr]) {

                  maskCaretMap.push(characterCount);

                  maskPlaceholder += getPlaceholderChar(i);
                  maskPatterns.push(linkOptions.maskDefinitions[chr]);

                  characterCount++;
                  if (!isOptional) {
                    minRequiredLength++;
                  }
                }
                else if (chr === "?") {
                  isOptional = true;
                }
                else {
                  maskPlaceholder += chr;
                  characterCount++;
                }
              });
            }
            // Caret position immediately following last position is valid.
            maskCaretMap.push(maskCaretMap.slice().pop() + 1);

            maskComponents = getMaskComponents();
            maskProcessed  = maskCaretMap.length > 1 ? true : false;
          }

          function blurHandler(){
            oldCaretPosition = 0;
            oldSelectionLength = 0;
            if (!isValid || value.length === 0) {
              valueMasked = '';
              iElement.val('');
              scope.$apply(function (){
                controller.$setViewValue('');
              });
            }
          }

          function mouseDownUpHandler(e){
            if (e.type === 'mousedown') {
              iElement.bind('mouseout', mouseoutHandler);
            } else {
              iElement.unbind('mouseout', mouseoutHandler);
            }
          }

          iElement.bind('mousedown mouseup', mouseDownUpHandler);

          function mouseoutHandler(){
            oldSelectionLength = getSelectionLength(this);
            iElement.unbind('mouseout', mouseoutHandler);
          }

          function eventHandler(e){
            e = e || {};
            // Allows more efficient minification
            var eventWhich = e.which,
              eventType = e.type;

            // Prevent shift and ctrl from mucking with old values
            if (eventWhich === 16 || eventWhich === 91) { return;}

            var val = iElement.val(),
              valOld = oldValue,
              valMasked,
              valUnmasked = unmaskValue(val),
              valUnmaskedOld = oldValueUnmasked,
              valAltered = false,

              caretPos = getCaretPosition(this) || 0,
              caretPosOld = oldCaretPosition || 0,
              caretPosDelta = caretPos - caretPosOld,
              caretPosMin = maskCaretMap[0],
              caretPosMax = maskCaretMap[valUnmasked.length] || maskCaretMap.slice().shift(),

              selectionLenOld = oldSelectionLength || 0,
              isSelected = getSelectionLength(this) > 0,
              wasSelected = selectionLenOld > 0,

            // Case: Typing a character to overwrite a selection
              isAddition = (val.length > valOld.length) || (selectionLenOld && val.length > valOld.length - selectionLenOld),
            // Case: Delete and backspace behave identically on a selection
              isDeletion = (val.length < valOld.length) || (selectionLenOld && val.length === valOld.length - selectionLenOld),
              isSelection = (eventWhich >= 37 && eventWhich <= 40) && e.shiftKey, // Arrow key codes

              isKeyLeftArrow = eventWhich === 37,
            // Necessary due to "input" event not providing a key code
              isKeyBackspace = eventWhich === 8 || (eventType !== 'keyup' && isDeletion && (caretPosDelta === -1)),
              isKeyDelete = eventWhich === 46 || (eventType !== 'keyup' && isDeletion && (caretPosDelta === 0 ) && !wasSelected),

            // Handles cases where caret is moved and placed in front of invalid maskCaretMap position. Logic below
            // ensures that, on click or leftward caret placement, caret is moved leftward until directly right of
            // non-mask character. Also applied to click since users are (arguably) more likely to backspace
            // a character when clicking within a filled input.
              caretBumpBack = (isKeyLeftArrow || isKeyBackspace || eventType === 'click') && caretPos > caretPosMin;

            oldSelectionLength = getSelectionLength(this);

            // These events don't require any action
            if (isSelection || (isSelected && (eventType === 'click' || eventType === 'keyup'))) {
              return;
            }

            // Value Handling
            // ==============

            // User attempted to delete but raw value was unaffected--correct this grievous offense
            if ((eventType === 'input') && isDeletion && !wasSelected && valUnmasked === valUnmaskedOld) {
              while (isKeyBackspace && caretPos > caretPosMin && !isValidCaretPosition(caretPos)) {
                caretPos--;
              }
              while (isKeyDelete && caretPos < caretPosMax && maskCaretMap.indexOf(caretPos) === -1) {
                caretPos++;
              }
              var charIndex = maskCaretMap.indexOf(caretPos);
              // Strip out non-mask character that user would have deleted if mask hadn't been in the way.
              valUnmasked = valUnmasked.substring(0, charIndex) + valUnmasked.substring(charIndex + 1);
              valAltered = true;
            }

            // Update values
            valMasked = maskValue(valUnmasked);

            oldValue = valMasked;
            oldValueUnmasked = valUnmasked;
            iElement.val(valMasked);
            if (valAltered) {
              // We've altered the raw value after it's been $digest'ed, we need to $apply the new value.
              scope.$apply(function (){
                controller.$setViewValue(valUnmasked);
              });
            }

            // Caret Repositioning
            // ===================

            // Ensure that typing always places caret ahead of typed character in cases where the first char of
            // the input is a mask char and the caret is placed at the 0 position.
            if (isAddition && (caretPos <= caretPosMin)) {
              caretPos = caretPosMin + 1;
            }

            if (caretBumpBack) {
              caretPos--;
            }

            // Make sure caret is within min and max position limits
            caretPos = caretPos > caretPosMax ? caretPosMax : caretPos < caretPosMin ? caretPosMin : caretPos;

            // Scoot the caret back or forth until it's in a non-mask position and within min/max position limits
            while (!isValidCaretPosition(caretPos) && caretPos > caretPosMin && caretPos < caretPosMax) {
              caretPos += caretBumpBack ? -1 : 1;
            }

            if ((caretBumpBack && caretPos < caretPosMax) || (isAddition && !isValidCaretPosition(caretPosOld))) {
              caretPos++;
            }
            oldCaretPosition = caretPos;
            setCaretPosition(this, caretPos);
          }

          function isValidCaretPosition(pos){ return maskCaretMap.indexOf(pos) > -1; }

          function getCaretPosition(input){
            if (input.selectionStart !== undefined) {
              return input.selectionStart;
            } else if (document.selection) {
              // Curse you IE
              input.focus();
              var selection = document.selection.createRange();
              selection.moveStart('character', -input.value.length);
              return selection.text.length;
            }
            return 0;
          }

          function setCaretPosition(input, pos){
            if (input.offsetWidth === 0 || input.offsetHeight === 0) {
              return; // Input's hidden
            }
            if (input.setSelectionRange) {
              input.focus();
              input.setSelectionRange(pos, pos);
            }
            else if (input.createTextRange) {
              // Curse you IE
              var range = input.createTextRange();
              range.collapse(true);
              range.moveEnd('character', pos);
              range.moveStart('character', pos);
              range.select();
            }
          }

          function getSelectionLength(input){
            if (input.selectionStart !== undefined) {
              return (input.selectionEnd - input.selectionStart);
            }
            if (document.selection) {
              return (document.selection.createRange().text.length);
            }
            return 0;
          }

          // https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
          if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (searchElement /*, fromIndex */){
              "use strict";
              if (this === null) {
                throw new TypeError();
              }
              var t = Object(this);
              var len = t.length >>> 0;
              if (len === 0) {
                return -1;
              }
              var n = 0;
              if (arguments.length > 1) {
                n = Number(arguments[1]);
                if (n !== n) { // shortcut for verifying if it's NaN
                  n = 0;
                } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
                  n = (n > 0 || -1) * Math.floor(Math.abs(n));
                }
              }
              if (n >= len) {
                return -1;
              }
              var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
              for (; k < len; k++) {
                if (k in t && t[k] === searchElement) {
                  return k;
                }
              }
              return -1;
            };
          }

        };
      }
    };
  }
]);

// handle :checked support for ie8
Modernizr.addTest('checked', function(){
return Modernizr.testStyles(
  '#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}',
  function( elem ){
    var cb = document.createElement('input');
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("checked", "checked");
    elem.appendChild(cb);
    return cb.offsetLeft === 20;
  });
});
Modernizr.load([
  {
    test: Modernizr.checked,
    nope: 'vendor/jquery/checked-polyfill.js',
    callback: function() {}
  }
]);
var _app = angular.module('career-spark-pieces', ['ngRoute', 'ui.mask', 'ui.sortable', 'placeholderShim', 'ui.select2', 'ngTouch', 'angulartics', 'angulartics.metriclog']);

/**
 * Main Controller, initializes application
 *
 * @param object $scope
 * @param object $routeParams
 * @param object $location
 * @param object $compile
 * @param object $http
 */
function MainCtrl($scope, $routeParams, $location, $http, $q, $sce, model, Modals, Guidance, CategoryHelper, sectionSelectionFilter, resumeProgressFilter, $analytics, $timeout) {
    $scope.model = model;
    $scope.imagePath = '/bundles/chamberfrontend/images';
    $scope.email = '';
    $scope.authLoginUrl = $sce.trustAsResourceUrl(window.iostudio.authLoginUrl);
    $scope.authRegisterUrl = $sce.trustAsResourceUrl(window.iostudio.authRegisterUrl);
    $scope.facebook_login_url = $sce.trustAsResourceUrl(window.iostudio.facebook_login_url);
    $scope.linkedin_login_url = $sce.trustAsResourceUrl(window.iostudio.linkedin_login_url);
    $scope.troopid_login_url = $sce.trustAsResourceUrl(window.iostudio.troopid_login_url);
    $scope.dashboard_web_url = $sce.trustAsResourceUrl(window.iostudio.dashboard_web_url);
    $scope.resume_search_url = $sce.trustAsResourceUrl(window.iostudio.resume_search_url);
    $scope.toggleMenu = function (value, redirect) {
        if (value == null || value == undefined) {
            $scope.viewState.login = !$scope.viewState.login;

        } else {
            $scope.viewState.login = (value == true);
        }

        if ($scope.viewState.login) {
            Guidance.hideTips();
        }
        return false;
    }

    $scope.clickedSomewhereElse = function (value) {
        $scope.viewState.login = (value == false);
    };

    $scope.fullscreened = function () {

    }
    $scope.fullscreened();

    // these tokens are used for content navigation
    $scope.HOME = {TOKEN: 'home'};
    $scope.DISCOVER = {TOKEN: 'discover'};
    $scope.EXPLORE = {
        TOKEN: 'explore',
        PAGES: ['what-to-look-for', 'where-to-look', 'use-your-network', 'how-to-get-the-interview']
    };
    $scope.PREP = {
        TOKEN: 'prep',
        PAGES: ['how-to-present-yourself', 'preparing-for-the-interview', 'interview-timeline']
    };
    $scope.TRACK = {TOKEN: 'track', PAGES: ['goals-and-progress', 'common-roadblocks']};
    $scope.DEV = Routing.getBaseUrl() == '/app_dev.php' ? {TOKEN: 'app_dev.php'} : '';
    $scope.viewState = {area: null, page: null};

    // handle loading processes
    window.$mainScope = $scope;
    $scope.views.heading = '';
    $scope.views.progress = '';
    $scope.views.message = '';
    $scope.views.login_error = '';
    $scope.rd.loadAuth();
    $scope.loggedIn = false;
    $scope.showSignIn = false;
    $scope.width = 0;
    $scope.updateWidth = function () {
        $scope.width = $window.innerWidth;
    }

    $scope.mode = 'edit';
    var delayID;

    $scope.gotoDiscover = function () {
        $timeout(function () {
            $scope.gotoResume();
        }, 1000);
    }

    $scope.gotoResume = function () {
        $scope.createAccount();
    }

    $scope.createAccount = function () {
        if (!$scope.loggedIn) {
            $analytics.eventTrack('click', {category: 'user', label: 'signup_initiate'});
            Modals.loadPartial('account', 'account.html', null, null, $scope);
        } else {
            $location.path('/discover');
        }
    };

    /**
     * Fetch User Data for supplied user id
     * @param  integer id  user_id
     */
    $scope.getUserData = function (id) {
        $scope.api_url = window.api_url;
        id = (!id) ? $scope.rd.__auth.user_id : id;
        $scope.userData = $http({
            url: window.api_url + '/user/' + id,
            method: "GET"
        }).success(function (data, status, headers, config) {
            $scope.rd.User.setData(data);
            $scope.rd.User.getID();
            $scope.loggedIn = true;
            $scope.showEmail = false;
            window.saveProgress = 'success';
            $scope.getResumeID();

        }).error(function (data, status, headers, config) {
            if (status == '401') {
                $scope.refreshToken('getUserData', id);
            } else {
                if (status == '400') {
                    $scope.views.login_error = 'Invalid login.';
                }
                if (status != '0') {
                    $scope.views.login_error = 'Unexpected error. Please retry.';
                }
            }
        });
    };

    if (!window.deploy_config || window.deploy_config == 'offline') {
        window.deploy_config = 'offline';
        if (location.hostname.indexOf('mycareerspark.iostudio.dev') === 0 || location.hostname.indexOf('localhost') > -1 || location.hostname.indexOf('127.0.0.1') > -1 || location.hostname.indexOf('10.0.2.2') > -1 || location.hostname.indexOf('localhost:7999') > -1) {
            window.deploy_config = 'local';
        }
        if (location.hostname.indexOf('cspaweb01') === 0) {
            window.deploy_config = 'development';
        }
        if (location.hostname.indexOf('wwwstaging.mycareerspark.org') === 0) {
            window.deploy_config = 'staging';
        }
        if (location.hostname.indexOf('www.mycareerspark.org') === 0 || location.hostname.indexOf('mycareerspark.org') === 0) {
            window.deploy_config = 'production';
        }

        switch (window.deploy_config) {
            case 'local' :
                window.api_url = '/app_dev.php/api';
                window.app_url = '/app_dev.php';
                break;
            //case 'local' : window.api_url = 'http://zog:7999/app_dev.php'; break;
            //case 'development' : window.api_url = 'http://chamapi01.srvr.devl.nash.iostudio.com'; break;
            case 'staging' :
                window.api_url = '/api';
                window.app_url = '';
                break;
            case 'production' :
                window.api_url = '/api';
                window.app_url = '';
                break;
            default:
                window.api_url = '/api';
                window.app_url = '';//window.api_url = 'cookie';
        }

        $scope.deploy_config = window.deploy_config;

        $(window).resize(function () {
            d_w = $(document).width();
            ht = parseInt($('.vex-content').height()) - 40 + 'px';
            mlt = ((d_w - 782) / 2);
            $('.vex-content').css('margin-left', mlt + 'px');
        });
    }


    $scope.$on('$routeChangeStart', function (scope, next, current) {
        try {
            window.activeRoute = next.$$route.originalPath;
            $scope.views.title = next.$$route.title;
            // delete temporary cookie
            if (window.activeRoute == '/') {
                //
                //$.removeCookie('resume-data');
            }
            Guidance.hideTips();
        } catch (e) {
        }
    });

    /**
     * Returns the full name of the logged in user
     * @return string  full name of user
     */
    $scope.getUserName = function () {
        if ($scope.loggedIn) {
            if ($scope.rd.User.firstName) {
                return $scope.rd.User.firstName;
            } else {
                return 'Welcome';
            }
        } else {
            return 'Sign In';
        }
    };

    /**
     * Fetch the user ID for the currently logged-in user
     */
    $scope.getUserID = function () {
        $scope.userData = $http({
            url: window.api_url + '/user/',
            method: "GET"
        }).success(function (data, status, headers, config) {
            $scope.rd.__auth.user_id = data;
            $scope.rd.saveAuth();
            $scope.getUserData(data);
        }).error(function (data, status, headers, config) {
            if (status == '0') {
                Modals.closeModal($scope);
                return;
            } else {
                $scope.views.login_error = 'Unexpected error. Please retry.';
            }
        });
    };


    $scope.sendPasswordEmail = function (email, s) {
        $http({
            method: 'GET',
            url: window.api_url + '/resetpassword/' + email
        })
            .success(function (data) {
                s.showReset = 2;
            })
            .error(function (data) {
                $scope.model.errors = data;
            });

    };

    $scope.signOut = function () {

        // sign out
        $scope.rd.__auth.access_token = '';
        $scope.rd.__auth.refresh_token = '';
        $scope.rd.__auth.user_id = null;
        $scope.showSignIn = false;

        $('.signinBtn').trigger('blur');
        $scope.loggedIn = false;
        $scope.rd.saveAuth();
    }

    $scope.getResumeID = function () {
        $scope.userData = $http({
            url: window.api_url + '/resume/',
            method: "GET"
        }).success(function (data, status, headers, config) {
            $scope.getResumeData(data);
        }).error(function (data, status, headers, config) {
            if (status == '404') {
                $scope.createResume();
            }
        });
    };

    $scope.logout = function (e) {
        var fbUser = false;
        $.get('/isFacebookUser')
            .then(function (resp) {
                fbUser = JSON.parse(resp);

                $http.get('/auth-server')
                    .then(function (res) {
                        url = res.data;
                        var cleanUrl = url.replace(/"/g, '');

                        return $http.get("https://" + cleanUrl + "/hoh-sites");
                    })
                    .then(function (res) {
                        sites = res.data;
                        proms = sites.map(urlToLogoutPromise);

                        return $q.all(proms);
                    })
                    .then(function () {
                        $scope.user = null;
                        $scope.signOut();

                        if (fbUser) {
                            window.location.href = '/?logout=true';
                        } else {
                            window.location.href = '/';
                        }
                    });
            });

        return false
    };

    function urlToLogoutPromise(url) {
        var dfd = $q.defer();
        var iframe = document.createElement('iframe');
        iframe.src = 'https://' + url + '/remote-logout';
        iframe.style.visibility = 'hidden';
        iframe.onload = dfd.resolve;
        document.body.appendChild(iframe);
        console.log(iframe);

        return dfd.promise;
    }

    $scope.getResumeData = function (id) {
        //fix for quotes in id
        id = (id.charAt(0) == '"') ? id.substring(1, id.length - 1) : id;
        $scope.rd.resume_id = id;
        Guidance.hideTips();
        $scope.userData = $http({
            url: window.api_url + '/resume/' + id,
            method: "GET"
        }).success(function (data, status, headers, config) {
            $scope.rd.isSharable = data ? data.isSharable : null;
            $scope.rd.isRelocate = data ? data.isRelocate : null;
            $scope.rd.PersonalInfo.setData(data.personal_info);

            if (data.summary) {
                $scope.rd.Summary.text = data.summary;
            }

            $scope.rd.WorkExperience.jobs = [].concat(data.employment, data.volunteering);

            CategoryHelper.pullCategories($scope.rd.WorkExperience); // derive categories from responsibilities

            var school_exists = false;
            if (data.schools.length) {
                for (var i = 0; i < data.schools.length; i++) {
                    if ($scope.rd.Education.schools.length) {
                        for (var j = 0; j < $scope.rd.Education.schools.length; j++) {
                            if (data.schools[i].school_id == $scope.rd.Education.schools[j].schoolId) {
                                school_exists = true;
                                break;
                            }
                        }
                        if (!school_exists) {
                            $scope.rd.Education.addSchool(data.schools[i])
                        }
                        ;
                    } else {
                        $scope.rd.Education.addSchool(data.schools[i]);
                    }
                }
            }

            var certificate_exists = false;
            if (data.certifications.length) {
                for (var i = 0; i < data.certifications.length; i++) {
                    if ($scope.rd.Certifications.certs.length) {
                        for (var j = 0; j < $scope.rd.Certifications.certs.length; j++) {
                            if (data.certifications[i].certificate_id == $scope.rd.Certifications.certs[j].certificateId) {
                                certificate_exists = true;
                                break;
                            }
                        }
                        if (!certificate_exists) {
                            $scope.rd.Certifications.addCertificate(data.certifications[i])
                        }
                        ;
                    } else {
                        $scope.rd.Certifications.addCertificate(data.certifications[i]);
                    }
                }
            }

            var skill_exists = false;
            if (data.personal_skills.length) {
                for (var i = 0; i < data.personal_skills.length; i++) {
                    if ($scope.rd.PersonalSkills.skills.length) {
                        for (var j = 0; j < $scope.rd.PersonalSkills.skills.length; j++) {
                            if (data.personal_skills[i].personal_skill_id == $scope.rd.PersonalSkills.skills[j].personalSkillId) {
                                skill_exists = true;
                                break;
                            }
                        }
                        if (!skill_exists) {
                            $scope.rd.PersonalSkills.addPersonalSkill(data.personal_skills[i])
                        }
                        ;
                    } else {
                        $scope.rd.PersonalSkills.addPersonalSkill(data.personal_skills[i]);
                    }
                }
            }

            window.dataLoaded = true;
            $scope.model.section = sectionSelectionFilter($scope.rd);
        }).error(function (data, status, headers, config) {
        });
    };

    $scope.createResume = function (id) {
        if (!id) {
            id = '';
        }
        var json = $scope.rd.getFullResumeObject();
        json = json.personal_info.email != '' ? json : null;
        $scope.userData = $http({
            url: window.api_url + '/resume/' + id,
            method: "POST",
            data: json
        }).success(function (data, status, headers, config) {
            $scope.rd.resume_id = data.replace('"', '').replace('"', '');
            window.dataLoaded = true;
            //$scope.processInput(false, true);
            //$scope.rd.getResponsibilities();
            $scope.section = sectionSelectionFilter($scope.rd);
        }).error(function (data, status, headers, config) {

        });
    };
    //$scope.updateResume = $scope.createResume;

    /**
     * Validates dialog form fields, optionally autofocusing the first
     * empty field and running a specified callback function.
     * @param  boolean focusField
     * @param  string  callback
     */
    $scope.revalidate = function (focusField, callback) {
        var scope = angular.element('[name="form_modal"]').scope();
        if (!scope) {
            return;
        }
        var form = scope['form_modal'];
        var focusSet = false;
        var _args = arguments;
        setTimeout(function () {
            angular.forEach(form, function (field, name) {
                if (typeof(name) == 'string' && !name.match('^[\$]')) {
                    var fld = $('form [name="' + [field.$name] + '"]');

                    if (field.$pristine) {
                        if (!fld.val() == '') {
                            field.$setViewValue(field.$viewValue);
                        }

                        if (focusField && !focusSet && fld.val() == '') {
                            setTimeout(function () {
                                if (fld.prop('tagName') == 'SELECT') {
                                    fld.select2('focus');
                                } else {
                                    fld.focus();
                                }
                            }, 300);
                            focusSet = true;
                        }
                    }
                }
            });

            if (callback) {
                var fn = $scope[callback];
                var args = [];
                if (typeof fn === 'function') {
                    for (var i = 2; i < _args.length; i++) {
                        args.push(_args[i]);
                    }
                    fn.apply(fn, args);
                }
            }
        }, 100);
    };

    /**
     * Validate form input fields
     * @param  boolean dont_close
     * @param  boolean no_errors
     * @return boolean
     */

    $scope.validateForm = function (dont_close, no_errors) {
        var errors = 0;
        $scope.revalidate();
        $('form[name="form_modal"]').find(':input').each(function () {
            //var attr = $(this).attr('required');
            if ($(this).hasClass('customdate')) {
                if (SHORTDATE_REGEXP && SHORTDATE_REGEXP.test($(this).val())) {
                    $(this).addClass('ng-dirty ng-valid ng-valid-customdate').removeClass('ng-pristine ng-invalid ng-invalid-customdate ng-required-invalid');
                } else {
                    $(this).addClass('ng-invalid').removeClass('ng-valid');
                }
            }
            if (!$(this).attr('disabled')) {
                if ($(this).hasClass('ng-invalid') && ($(this).val() != '' || (typeof attr !== 'undefined' && attr !== false))) {
                    $(this).addClass('cs-invalid');
                    if (!no_errors) $(this).closest('label').find('.errors').css('display', 'block');
                    errors++;
                } else {
                    $(this).removeClass('cs-invalid');
                }
            }
        });
        if (!errors) {
            $('.content-wrapper .progress-button').removeClass('validate');
            if (!dont_close) {
                vex.close($scope.views.$vexContent.data().vex.id);
            } else {
                $scope.send('formValid');
                return true;
            }
        } else {
            $('.content-wrapper .progress-button').addClass('validate');
            if (dont_close) return false;
        }
    };

    $scope.saveData = function (entity, api_url) {

        var promise;
        if ($scope.rd.__auth.user_id) {
            $scope.model.errors = null;
            var url = window.api_url + '/resume/' + $scope.rd.resume_id + api_url;
            var obj = (typeof entity === 'object') ? entity : $scope.rd.getObjectFromPath(entity); //.getData();
            var id = getID(obj);
            url = id && api_url !== '' ? url + id : url;
            delete obj.job_id;
            delete obj.volunteer_job_id;


            if (api_url == "/volunteer_job/" || api_url == "/job/") {
                CategoryHelper.pushCategories($scope.rd.WorkExperience); // derive categories from responsibilities

            }
            promise = $http({
                url: url,
                method: "POST",
                data: (undefined !== obj.getData ) ? obj.getData() : obj
            }).success(function (data, status, headers, config) {
                window.saveProgress = 'success';
                $scope.send('saveFinished', data, entity);
                $scope.model.errors = null;
            }).error(function (data, status, headers, config) {
                if (status == '401') {
                    //$scope.refreshToken('delayAction', 'saveData', entity, api_url);
                    window.dataLoaded = undefined;
                    $scope.model.errors = null;
                } else {
                    //$scope.processErrors(entity, data);
                    window.saveProgress = 'error';
                    if (data.message) {
                        $scope.model.errors = [{message: data.message}];
                    } else {
                        $scope.model.errors = data;
                    }
                }
            });

            // post percent complete to analytics
            $http.post(window.api_url + '/analytics/percentcomplete/' + $scope.rd.__auth.user_id + '/' + resumeProgressFilter($scope.rd));
        } else {
            var deferred = $q.defer();
            promise = deferred.promise;
            deferred.resolve();
            $scope.send('saveFinished');
        }
        return promise;
    };

    $scope.removeData = function (entity, api_url) {
        var promise;
        if ($scope.rd.__auth.user_id) {
            $scope.model.errors = null;
            var url = window.api_url + '/resume/' + $scope.rd.resume_id + api_url;
            var obj = (typeof entity === 'object') ? entity : $scope.rd.getObjectFromPath(entity);
            var id = getID(obj);
            url = id ? url + id : url;

            delete obj.job_id;
            delete obj.volunteer_job_id;

            if ($scope.rd.resume_id == '') {
                window.dataLoaded = undefined;
                //$scope.send('delayAction', 'removeData', entity, api_url);
                return;
            }

            promise = $http({
                url: url,
                method: "DELETE"
            }).success(function (data, status, headers, config) {
                window.saveProgress = 'success';
                //setTimeout(function(){
                $scope.send('removeFinished');
                //}, 800);
                $scope.model.errors = null;
            }).error(function (data, status, headers, config) {
                if (status == '401') {
                    //$scope.refreshToken('delayAction', 'removeData', entity, api_url);
                    window.dataLoaded = undefined;
                    $scope.model.errors = null;
                } else {
                    //$scope.processErrors(entity, data);
                    window.saveProgress = 'error';
                    if (data.message) {
                        $scope.model.errors = [{message: data.message}];
                    } else {
                        $scope.model.errors = data;
                    }
                }
            });
        } else {
            var deferred = $q.defer();
            promise = deferred.promise;
            deferred.resolve();
            $scope.send('removeFinished');
        }
        return promise;
    };

    function getID(obj) {
        if (obj.getID) {
            return obj.getID() ? obj.getID().val : '';
        }
        else {
            return obj.resume_id || obj.school_id || obj.job_id || obj.volunteer_job_id || obj.certificate_id || obj.personal_skill_id || '';
        } //|| obj.getID().val;
    }

    function setID(obj) {

    }

    $scope.$onRootScope('validateForm', function (e, dont_close, no_errors) {
        $scope.validateForm(dont_close, no_errors);
    });

    $scope.$onRootScope('processErrors', function (e, className, data) {
        $scope.processErrors(className, data);
    });

    $scope.$onRootScope('refreshToken', function (e, callback) {
        var fn = $scope['refreshToken'];
        var args = [];
        if (typeof fn === 'function') {
            for (var i = 1; i < arguments.length - 1; i++) {
                args.push(arguments[i]);
            }
            fn.apply(fn, args);
        }
    });


    $scope.triggerNav = function () {
        if ($('.navigation').hasClass('show')) {
            $('.navigation').removeClass('show');
            $('.navigation').addClass('hide');
        } else {
            $('.navigation').removeClass('hide');
            $('.navigation').addClass('show');
        }
        var wr = $('.outer-wrapper');
        wr.toggleClass('nav-visible');
        return false;
    }

}

function ContentCtrl($scope, $routeParams, $rootScope, $sce, Collection, Indeed) {
  $scope.MALE = 'male';
  $scope.FEMALE = 'female';

  $scope.viewState.area = $routeParams.area || 'home';
  $scope.viewState.page = $routeParams.page || 'home';
  $scope.viewState.hover = $scope.viewState.area;
  $scope.suggested_job_titles_per_column = 3;
  $scope.viewState.gender = 'female'; // by default
  $scope.suggested_job_titles = [];
  $scope.show_more_suggested_jobs = false;
  $scope.normalized_jobs = [];
  $scope.example_jobs = [];
  $scope.IN = IN;
  $scope.linkedin_suggested_companies = [];
  $scope.categories = [];

  $scope.getContentUrl = function (viewState) {
    return '/bundles/chamberfrontend/js/content/' + viewState.area + '/' + viewState.page + '.html';
  };


  /**
   * Get suggested job titles based on the resume's categories
   *
   * @param array categories
   * @returns {Array}
   */
  $scope.getSuggestedJobTitles = function () {
    var suggested_job_titles = [],
      tmpObj = {};

    if ($scope.categories.length > 0) {
      for (var i=0; i < $scope.categories.length; i++) {
        // Get the suggested job titles for each category
        for (var j=0;j < skill_categories.length; j++) {
          if (skill_categories[j].name == $scope.categories[i]) {
            // De-dupe the list
            for (var k=0; k < skill_categories[j].example_jobs.length; k++) {
              tmpObj[skill_categories[j].example_jobs[k]] = null;
            }

            break;
          }
        }
      }

      for (var suggested_job_title in tmpObj) {
        if (tmpObj.hasOwnProperty(suggested_job_title)) {
          suggested_job_titles.push(suggested_job_title);
        }
      }
    }

    return suggested_job_titles;
  };

  /**
   * Toggle showing/hiding more suggested jobs for the explore > what to look for view
   */
  $scope.toggleMoreSuggestedJobs = function () {
    $scope.show_more_suggested_jobs = !$scope.show_more_suggested_jobs;
  };

  /**
   * Find example jobs for the explore > where to look view
   */
  $scope.findExampleJobs = function () {
    // Don't try to get example jobs with no categories to search for
    if ($scope.categories.length > 0) {
      // Indeed
      var indeedOptions = Indeed.getDefaultOptions(),
        shuffledCategories = Collection.shuffleArray($scope.categories);

      indeedOptions.limit = 50;
      indeedOptions.fromAge = 30;

      // Build search query
      for (var i = 0; i < shuffledCategories.length; i++) {
        indeedOptions.q = (i > 0) ? indeedOptions.q + " OR " + shuffledCategories[i] : shuffledCategories[i];

        if (i == 1) {
          break;
        }
      }

      Indeed.findJobs(indeedOptions, function (data) {
        if (typeof data.results != 'undefined' && data.results.length > 0 ) {
          var normalized_jobs = [];

          for (var i=0; i < data.results.length; i++) {
            normalized_jobs.push({
              search_term: data.query,
              title: data.results[i].jobtitle,
              description: $sce.trustAsHtml(data.results[i].snippet),
              url: data.results[i].url,
              source: 'Indeed',
              source_link: '//www.indeed.com'
            });
          }

          $scope.$apply(function () {
            $scope.normalized_jobs = normalized_jobs;
          });
        }
      });
    }
  };

  // Listen for changes to the example jobs so that the explore > where to look view can be updated
  $scope.$watch(
    'normalized_jobs',
    function (newValue, oldValue) {
      // Ignore initialization calls
      if (newValue !== oldValue) {
        // Randomly choose 2 jobs
        $scope.example_jobs[0] = Collection.shuffleArray($scope.normalized_jobs).slice(0, 2);
      }
    },
    true
  );

  // Listen for changes to the resume work experience to kick off data retrieval/manipulation for the explore views
  $rootScope.$watch('rd.WorkExperience',
    function (newValue, oldValue) {
      var jobs = [].concat(newValue.jobs/*, newValue.vjobs, newValue.cjobs*/),
        responsibilities = [],
        categories = [];

      for (var i=0; i < newValue.categories.length; i++) {
        if (newValue.categories[i].name) {
          categories.push(newValue.categories[i].name);
        }
      }

      for (var i=0; i < jobs.length; i++) {
        responsibilities = responsibilities.concat(jobs[i].responsibilities);

        for (var j=0; j < responsibilities.length; j++) {
          if (responsibilities[j].category) {
            categories.push(responsibilities[j].category);
          }
        }
      }

      $scope.categories = categories;
      $scope.suggested_job_titles = Collection.divideArrayIntoSections($scope.getSuggestedJobTitles().sort(), 4);

      if ($scope.example_jobs.length == 0) {
        $scope.findExampleJobs();
      }
    },
    true
  );

  // Listen for LinkedIn authorization and trigger data retrieval for the explore views
  IN.Event.on(
    IN,
    'auth',
    function () {
      // Notify $scope that it should update
      angular.element($('#content-section')).scope().$apply(function() {});

      IN.API.Raw('/people/~/suggestions/to-follow/companies')
        .result(
          function (response) {
            angular.element($('#content-section')).scope().$apply(function() {
              if (response._count > 0) {
                $scope.linkedin_suggested_companies = response.values;
              } else {
                $scope.linkedin_suggested_companies = [];
              }
            });
          }
      );
    }
  );

  // If the user is authorized when visiting the page and they don't already have suggested companies, get them
  if (typeof IN != 'undefined'
    && typeof IN.User != 'undefined'
    && IN.User.isAuthorized()
    && $scope.linkedin_suggested_companies.length <= 0
  ) {
    IN.API.Raw('/people/~/suggestions/to-follow/companies')
      .result(
      function (response) {
        angular.element($('#content-section')).scope().$apply(function() {
          if (response._count > 0) {
            $scope.linkedin_suggested_companies = response.values;
          } else {
            $scope.linkedin_suggested_companies = [];
          }
        });
      }
    );
  }

  /**
   * Follow a LinkedIn company
   *
   * @param int index
   */
  $scope.followLinkedInCompany = function (index) {
    if (typeof $scope.linkedin_suggested_companies[index].followed == 'undefined'
      || !$scope.linkedin_suggested_companies[index].followed
    ) {
      $scope.linkedin_suggested_company_index = index;

      IN.API.Raw()
        .url('/people/~/following/companies')
        .method('POST')
        .body(angular.toJson({"id": $scope.linkedin_suggested_companies[index].id}))
        .result(function (response) {
          angular.element($('#content-section')).scope().$apply(function() {
            $scope.linkedin_suggested_companies[0].followed = true;
          });
        }).error(function (response) {
          // @TODO Decide what to do here if anything
        });
    }
  };

  /**
   * Stop following a LinkedIn company
   *
   * @param int index
   */
  $scope.stopFollowingLinkedInCompany = function (index) {
    if ($scope.linkedin_suggested_companies[index].followed === true) {
      $scope.linkedin_suggested_company_index = index;

      IN.API.Raw()
        .url('/people/~/following/companies/id=' + $scope.linkedin_suggested_companies[index].id)
        .method('DELETE')
        .result(function (response) {
          angular.element($('#content-section')).scope().$apply(function() {
            $scope.linkedin_suggested_companies[0].followed = false;
          });
        }).error(function (response) {
          // @TODO Decide what to do here if anything
        });
    }
  }
}
function HomeCtrl($scope, $routeParams, $rootScope, $location, Modals, $http) {
    $scope.viewState.area = $scope.HOME.TOKEN;

    // on facebook logout, show the logout security modal
    var params = $location.absUrl();
    if (params.indexOf('logout') !== -1) {
        $scope.viewState.fb_logout = true;
        $http.get('/bundles/chamberfrontend/js/common/views/fb_logout.html')
            .then(function (res) {
                $scope.views['fb_logout'] = {'fb_logout.html' : res.data};
                Modals.loadPartial('fb_logout', 'fb_logout.html', null, null, $scope);
            });
    }
}

/**
 * Controller for Create Account
 *
 * @param object $scope
 * @param object $routeParams
 * @param object $location
 * @param object $compile
 * @param object $http
 */

function AccountCtrl($scope, $routeParams, $location, $compile, $http, Modals, $analytics) {

    /**
     * Make sure to destroy scope when modal closes so that events are unbound!!!
     */
    $scope.$onRootScope('afterClose', function() {
        $scope.viewState.createAccount = false;
        $scope.$destroy();
    });

    $scope.$onRootScope('afterOpen', function(){
        $scope.rd.User.firstName = ($scope.rd.User.firstName == '') ? $scope.rd.PersonalInfo.firstName : $scope.rd.User.firstName;
        $scope.rd.User.lastName = ($scope.rd.User.lastName == '') ? $scope.rd.PersonalInfo.lastName : $scope.rd.User.lastName;
        $scope.rd.User.zipCode = ($scope.rd.User.zipCode == '') ? $scope.rd.PersonalInfo.postalCode : $scope.rd.User.zipCode;
        $scope.rd.User.email = ($scope.rd.User.email == '') ? /*$scope.rd.PersonalInfo.email*/ '' : $scope.rd.User.email;
        $scope.viewState.createAccount = true;
    });

    $scope.gotoSignIn = function() {
        Modals.closeModal($scope);
        $scope.toggleMenu(true);
    }

    $scope.createAccount = function() {
        $scope.model.errors = null;
        $http({
            url: window.api_url + '/user/',
            method: "POST",
            data: $scope.rd.User.getData(),
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
            $scope.rd.__auth.user_id = data;
            window.saveProgress = 'success';
            updateUser(data);
            if($scope.loggedIn && resumeProgressFilter($scope.rd) == 0){
                $('new-signup').append('<img src="https://tags.w55c.net/rs?id=641dac80cb6240ccb32a5590bc6e0de9&t=marketing"/>');
            }
            if($location.path()!='/#/discover') {
                $location.path('/discover');
            }
        }).error(function (data, status, headers, config) {
            window.saveProgress = 'error';
            if(data.message) {
                $scope.model.errors = [{message: data.message}];
            } else {
                $scope.model.errors = data;
            }
        });
    }

    /**
     * Listens for formValid event from the landing page and then adds
     * the job to the list.
     *//*
    $scope.$onRootScope('formValid', function() {
        if (window.api_url != 'cookie') {

        };
    });*/

    function updateUser(data) {
        $scope.rd.userlogin = $scope.rd.User.email;
        $scope.rd.userpass = $scope.rd.User.plainPassword.first;
        window.$mainScope.showSignIn = true;
        Modals.closeModal($scope);
        $scope.viewState.createAccount = false;
        window.$mainScope.getOauthClient('signIn');
        $analytics.eventTrack('click', {  category: 'user', label: 'account_created' });
    }

}

/**
 * Controller for the Landing Page
 *
 * @param object $scope
 * @param object $routeParams
 * @param object $location
 * @param object $compile
 * @param object $http
 */

function ResumeCtrl($scope, $rootScope, model, $routeParams, $location, $compile, $http, Modals, Guidance, CategoryHelper, resumeProgressFilter, sectionCompleteFilter, sectionIndexFilter, sectionSelectionFilter) {

    $scope.viewState.area = $scope.viewState.hover = 'discover';
    $scope.viewState.page = null;

    $scope.deploy_config = window.deploy_config;

    //$scope.resp_length = 0;
    //$scope.editing = false;
    //$scope.volunteer_experience = volunteer_experience;
    //$scope.branches = ['AIR FORCE', 'ARMY', 'COAST GUARD', 'MARINE CORPS', 'NAVY'];
    $scope.layout_option = 2;

    //$scope.sortedCategories = [];
    //$scope.sortedResponsibilities = [];
    //$scope.uncategorized = [];

    if(!($scope.loggedIn)) {
        if($location.url()=='/discover') {
            $location.url('/');
        }
    }

    /**
     * Handle dragging cursor / scrolling fix
     */
    /*$scope.grabCursor = function() {
        setTimeout(function() {
            $('.grab').on('mousedown', function() {
                $(this).addClass('grabbing');
            }).on('mouseup', function() {
                $(this).removeClass('grabbing');
            });
        }, 500);
    };*/

    $scope.showInfo = function() {
        Modals.loadPartial('info', 'info.html', null, null, $scope);
    }
    $scope.showSummary = function() {
        Modals.loadPartial('summary', 'summary.html', null, null, $scope);
    }
    $scope.showSkills = function() {
        Modals.loadPartial('skills', 'skills.html', null, null, $scope);
    }
    $scope.addJob = function(index) {
        Modals.loadPartial('experience', 'work.html', null, null, $scope);
    };
    $scope.addVolunteer = function(index) {
        Modals.loadPartial('experience', 'volunteer.html', null, null, $scope);
    };
    $scope.showEducation = function() {
        Modals.loadPartial('education', 'education.html', null, null, $scope);
    }
    $scope.showCertifications = function() {
        Modals.loadPartial('certifications', 'certifications.html', null, null, $scope);
    }

    /**
     * ensures that the global dragging_item variable points
     * to the correct responsibility object.
     * @param  Object resp
     */
    $scope.updateGrab = function(resp) {
        window.dragging_item = resp;
    };

    $scope.views.select2Options = {
        autocomplete: 'on',
        matcher: function(term, text) {
            return text.toUpperCase().indexOf(term.toUpperCase()) == 0;
        }
    };

    $scope.taggingOptions = {
        autocomplete: 'on',
        matcher: function(term, text) {
            return text.toUpperCase().indexOf(term.toUpperCase()) == 0;
        },
        multiple: true
        //'simple_tags': true,
        //maximumSelectionSize: 3,
        //'data': ['AIR FORCE', 'ARMY', 'COAST GUARD', 'MARINE CORPS', 'NAVY']
    };

    /**
     * Initialize view
     */
    $scope.init = function() {
        Guidance.highlightSection($scope);
    };

    $scope.isBefore = function(section1, section2) {
        return (sectionIndexFilter(section1) < sectionIndexFilter(section2));
    };
    $scope.isAfter = function(section1, section2) {
        return (sectionIndexFilter(section1) > sectionIndexFilter(section2));
    };
    $scope.isComplete = function(section) {
        return sectionCompleteFilter(section);
    };

    $scope.clickExperience = function() {
        if(!$scope.rd.organizing) {
            if($scope.rd.WorkExperience.jobs.length > 0) {
                $scope.doOrganize();
            } else {
                Modals.loadPartial('experience', 'work.html', null, null, $scope);
            }
        }
    };

    $scope.doOrganize = function() {
        $scope.rd.organizing = true;
        //$scope.rd.current_template = 'work.html'; //'index.html';
        //$('.section').removeClass('current editing');
        Guidance.hideTips();
        //$('.section.work_experience').addClass('editing').find('.info_pane').removeClass('show');
        //$scope.rd.getResponsibilities();
        //$scope.uncategorized = $scope.rd.getResponsibilities(null);
        if ($scope.views.$vexContent && $scope.views.$vexContent.data().vex && $scope.views.$vexContent.data().vex.id) {
            vex.close($scope.views.$vexContent.data().vex.id);
        }
        $scope.model.errors = null;
    };

    $scope.finishOrganize = function() {
        $scope.rd.organizing = false;
        //$('.section.work_experience').removeClass('editing');
        //$('.section.work_experience .info_pane').addClass('show');
        //$scope.rd.saveData();
        //$scope.rd.sections.work_experience.skip = true;
        Guidance.highlightSection($scope);
        //console.log($scope.rd.WorkExperience);
        //$scope.updateResume($scope.rd.resume_id);
        var data = $scope.rd.getFullResumeObject();
        //console.log(data);
        $scope.saveData(data, '');
        if(event.stopPropagation) {
            event.stopPropagation();
            event.preventDefault();
        }
        else if(window.event) {
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        return false;
    };

    // this is also in WorkCtrl
    $scope.editJob = function(job, template) {
        Guidance.hideTips();
        model.editing = job;
        /*window.resetFormFields = {
                'job_editing': index,
                '_init' : {
                    method: 'resumeEdit',
                    params: [index]
                }
        };
        window.undoEdit = {
            'WorkExperience': jQuery.extend(true, {}, $scope.rd.WorkExperience)
        };
        console.log(template);*/
        var template = getTemplateFor(job);
        Modals.loadPartial('experience', template || 'work.html', null, null, $scope);
    };

    $scope.addCategory = function() {
        model.editing = null;
        Modals.loadPartial('category', 'category.html', null, null, $scope);
    };

    $scope.editCategory = function(category) {
        model.editing = category;
        Modals.loadPartial('category', 'category.html', null, null, $scope);
    };

    $scope.deleteCategory = function(category) {
        CategoryHelper.deleteCategory(category, $scope.rd.WorkExperience);
    };

    //$scope.addResponsibility = function(responsibility) {
        //Guidance.hideTips();
        //model.editing = getUnrelatedJob() || null;
        /*var index = $scope.rd.WorkExperience.jobs.indexOf(job);
        if(job) {
            window.resetFormFields = {
                    'job_editing': index,
                    '_init' : {
                        method: 'resumeEdit',
                        params: [index]
                    }
            };
            window.undoEdit = {
                'WorkExperience': jQuery.extend(true, {}, $scope.rd.WorkExperience)
            };
        }*/
        //Modals.loadPartial('experience', 'unrelated.html', null, null, $scope);
    //};

    $scope.editResponsibility = function(responsibility) {
        Guidance.hideTips();
        var job = model.editing = responsibility ? getResponsibilityJob(responsibility) : getUnrelatedJob();
        //var info = $scope.rd.getEditInfoByResponsibility(responsibility);
        //console.log(info);
        //console.log($scope.rd.WorkExperience.vjobs);
        //var template='work.html'; //'index.html';

        var template = getTemplateFor(job);
            /*window.resetFormFields = {
                'job_editing': info.jndx,
                '_init' : {
                    method: 'resumeEdit',
                    params: [info.jndx, responsibility]
                }
            };
            window.undoEdit = {
                'WorkExperience': jQuery.extend(true, {}, $scope.rd.WorkExperience)
            };*/

        Modals.loadPartial('experience', template || 'unrelated.html', null, null, $scope);
    };

    function getTemplateFor(job) {
        if (job) {
            var template = (!job.type) ? 'work.html' : null;
            template = (job.type == 'pre_defined') ? 'volunteer.html' : template;
            template = (job.type == 'custom') ? 'custom.html' : template;
            template = (job.type == 'unrelated_responsibility') ? 'unrelated.html' : template;
        }
        return template;
    }

    function getUnrelatedJob() {
        var jobs = $scope.rd.WorkExperience.jobs;
        for(var i=0; i<jobs.length; i++) {
            if(jobs[i].type=='unrelated_responsibility') {
                return jobs[i];
            }
        }
    }

    function getResponsibilityJob(responsibility) {
        var jobs = $scope.rd.WorkExperience.jobs || [];
        for(var i=0; i<jobs.length; i++) {
            var responsibilities = jobs[i].responsibilities || [];
            var index = responsibilities.indexOf(responsibility);
            if(index >= 0) { return jobs[i]; }
        }
        return null;
    }

    /*$scope.resetResponsibility = function(text, selector) {
        $('#'+selector).parent().find('textarea').val(text).trigger('keyup');
    };*/

    $scope.togglePreview = function(toggle) {
        //console.log('togglePreview');
        if(toggle>0) { $scope.layout_option = toggle; }
        clearTimeout(window.transID);
        Guidance.hideTips();
        $scope.mode = (toggle > 0) ? 'preview' : 'edit';
        if(toggle > 0) {
            window.scrollTo(0, 0);
        }
    };

    $scope.$onRootScope('doOrganize', function() {
        $scope.doOrganize();
    });

    /*$scope.$onRootScope('revalidate', function(e, focusField, callback) {
        setTimeout(function() {
            $scope.revalidate(focusField, callback);
        }, 200);
        //$scope.section = getCurrentSection();
    });*/

    // initialize landing page
    $scope.init();

}

function ResumeToolsCtrl($scope, $routeParams, $location, $compile, $http, Modals, Guidance, $analytics, resumeProgressFilter, queue) {

  $scope.makeSearchable = function(searchable) {
    var progress = resumeProgressFilter($scope.rd);
    if(searchable != $scope.rd.PersonalInfo.isSearchable && progress >= 90) {
      $scope.rd.PersonalInfo.isSearchable = searchable;
      $scope.saveData($scope.rd.PersonalInfo, '/personalinfo/');
      var label = searchable ? 'searchable_online' : 'searchable_offline';
      $analytics.eventTrack('click', {  category: 'resume', label: label });

      if (searchable) {
        queue.insert({
          'type': 'resume_index',
          data: {
            'id': $scope.rd.__auth.user_id,
            'resume_id': $scope.rd.resume_id
          }
        });
          $('body').append('<img src="https://tags.w55c.net/rs?id=f8105762ffd5422ea17f14704fa23893&t=marketing"/>');
          //$('body').append('<img src="https://tags.w55c.net/rs?id=0e5893ec09bc49da9fd6515f0713309e&t=marketing"/>');
      } else {
        queue.insert({
          'type': 'resume_delete',
          data: {
            'id': $scope.rd.__auth.user_id,
            'resume_id': $scope.rd.resume_id
          }
        });
      }
    }
  };

  $scope.printFrame = function() {
    $scope.togglePreview($scope.layout_option);
    formatForPrint(); //window.print();
  };

  function formatForPrint() {
    // hide everything else
    $('body *').each(function(){
      var tag = $(this).parent().prop('tagName');
      if (tag == 'BODY') { $(this).addClass('hide-for-print'); }
    });
    if (!$('#cspa-print').length) { // add it if it's not there
      $('<div id="cspa-print" />').appendTo('body');
    }

    $('.wrapper').removeClass('transition');
    var cH = $('.wrapper').outerHeight();
    $('.wrapper').css('height', (cH+50)+'px');

    // old format for print junk?
    //$('body').removeClass('edit').addClass('preview');
    $('#doc + .doc').remove();
    break_margin = 0;
    // very quick and dirty page breaking
    setTimeout(function(){
      $('.wrapper').css('height', 'auto');
      var tMarg = 48;
      if ($('#doc').hasClass('l2')||$('#doc').hasClass('l3')) { tMarg = 96; }
      var $doc = $($('#doc')[0]);
      var doc_height = $doc.height();
      var content_height = $doc.find('.content').height() - 48;
console.log('hit it', content_height, doc_height);
      if (content_height > doc_height) {
console.log('in it');
        $doc.after('<div class="doc"></div>');
        var p2off = $('#doc + .doc').offset();
        var p1off = $('#doc').offset();
        var ctoff = $('#doc .content').offset();
        var pbreak = ctoff.top + 960;

        console.log('p1: '+p1off.top);
        console.log('p2: '+p2off.top);
        console.log('ct: '+ctoff.top);
        console.log('pbreak: '+pbreak);
        var p2start = p2off.top + tMarg;
        $doc.find('.content > *').each(function(){
          var tag = $(this).prop('tagName');
          var off = $(this).offset();
          var ht = $(this).outerHeight();
          var btm = off.top + ht;
          console.log(tag+': '+off.top+' '+btm);
          if (off.top <= pbreak && btm > pbreak) {
            // this is the parent element that breaks the page
            console.log(tag+' breaks the page.');
            var break_amt = p2start - off.top;
            var mTop = parseInt($(this).css('margin-top'));
            console.log('add: '+break_amt+', margin-top: '+mTop);
            var newTop = mTop + break_amt;
            $(this).before('<div class="phide" style="height: '+newTop+'px"></div>');
          }
        });
      }

      $('#cspa-print').html($doc.clone()).show();
      setTimeout(function(){
        //var _scope = $scope;
        var onPrintFinished = function(printed){
          //_scope.mode = 'edit';
          //_scope.$apply();
          setTimeout(function(){
            $('#cspa-print').html('').hide();
            //_scope.setCurrentSection();
          }, 500);
        };
        onPrintFinished(window.print());
      }, 100);

    }, 100);

  }
}

/**
 * Controller for Add/Edit Category
 *
 * @param object $scope
 * @param object $routeParams
 * @param object $location
 * @param object $compile
 * @param object $http
 */

function CategoryCtrl($scope, model, $routeParams, $location, $compile, $http, Modals, CategoryHelper) {
    
    $scope.category = model.editing ? angular.copy(model.editing) : {responsibilities:[]};
    $scope.skill_categories = skill_categories;

    /**
     * Make sure to destroy scope when modal closes so that events are unbound!!!
     */
    $scope.$onRootScope('afterClose', function() {
        $scope.$destroy();
    });

    /**
     * Initiates adding a category. If form is valid, event will be broadcast
     * to add the category.
     */
    $scope.addCategory = function(category) {
        console.log(category);
        if(model.editing){
            model.editing.name = category.name;
            //CategoryHelper.updateCategory(model.editing, new_cat, $scope.rd.WorkExperience);
        } else if(category.name) {
            $scope.rd.WorkExperience.categories.unshift(category);
            //CategoryHelper.addCategory(new_cat, $scope.rd.WorkExperience);
        }
        $scope.editing = null;
        Modals.closeModal($scope);
    };

}
/**
 * Controller for Personal Info section
 *
 * @param object $scope
 * @param object $routeParams
 * @param object $location
 * @param object $compile
 * @param object $http
 */

function InfoCtrl($scope, model, $routeParams, $location, $compile, $http, Modals, resumeProgressFilter, $analytics) {

    $scope.info = angular.copy($scope.rd.PersonalInfo); //model.editing ? angular.copy(model.editing) : {};

    /**
     * Make sure to destroy scope when modal closes so that events are unbound!!!
     */
    $scope.$onRootScope('afterClose', function() {
        $scope.$destroy();
    });

    $scope.saveInfo = function() {
        //console.log('scope personal info' + JSON.stringify($scope.rd.PersonalInfo));
        angular.copy($scope.info, $scope.rd.PersonalInfo);
        var p = $scope.saveData($scope.rd.PersonalInfo, '/personalinfo/');

        $scope.rd.User.getData();

        $scope.rd.User.firstName = $scope.rd.PersonalInfo.firstName;
        $scope.rd.User.lastName = $scope.rd.PersonalInfo.lastName;
        $scope.rd.User.zipCode = $scope.rd.PersonalInfo.postalCode;

        $scope.model.errors = null;
        $http({
            url: window.api_url + '/user/',
            method: "POST",
            data: $scope.rd.User,
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
                $scope.rd.__auth.user_id = data;
                window.saveProgress = 'success';
            }).error(function (data, status, headers, config) {
                window.saveProgress = 'error';
                if(data.message) {
                    $scope.model.errors = [{message: data.message}];
                } else {
                    $scope.model.errors = data;
                }
            });

        p.then(function(data) {
            $analytics.eventTrack('click', {  category: 'user', label: 'profile_saved' });
            Modals.closeModal($scope);
        });
    };

}
/**
 * Controller for the Education section
 *
 * @param object $scope
 * @param object $routeParams
 * @param object $location
 * @param object $compile
 * @param object $http
 */

function EducationCtrl($scope, $routeParams, $location, $compile, $http, Modals, Guidance, stateNameFilter) {

    $scope.school_editing = -1;
    $scope.completed = false;

    /**
     * Make sure to destroy scope when modal closes so that events are unbound!!!
     */
    $scope.$onRootScope('afterClose', function() {
        $scope.resetSchoolForm();
        $scope.$destroy();
    });

    $scope.close = function() {
        if (window.$mainScope.loggedIn) {
            window.$mainScope.saveData($scope.rd.getFullResumeObject(), '');
        } else {
            $scope.send('saveFinished');
        }
        Modals.closeModal($scope);
    }

    /**
     * Handle dragging cursor / scrolling fix
     */
    $scope.grabCursor = function() {
        setTimeout(function() {
            $('.grab').on('mousedown', function() {
                $(this).addClass('grabbing');
                $scope.scrollTop = $('.vex').scrollTop();
                $scope.scrollOffset = $(this).offset();
                //$scope.scrollPos = $(this).position();
            }).on('mouseup', function() {
                $(this).removeClass('grabbing');
            });
        }, 500);
    };

    /**
     * options for angular ui-sortable
     * @type {Object}
     */
    $scope.sortableOptions = {
        update: function(e, ui) {},
        start: function(e, ui) {
            //$(e.target).sortable('cancel');
            $('.vex').scrollTop($scope.scrollTop);
            setTimeout(function() {
                $('.vex').scrollTop($scope.scrollTop);
            }, 10);
        },
        stop: function(e, ui) {},
        axis: 'y',
    };

    // notempty ng validation not working after resetSchoolForm
    var fixNotEmpty = function(e) {
            $(e.target).removeClass('ng-invalid').addClass('ng-valid').unbind('keypress', fixNotEmpty);
        };

    var fixSelectValid = function(e) {
            $(e.target).removeClass('ng-pristine').unbind('change', fixSelectValid);
        }

    /**
     * Listens for beforeOpen event from the landing page dialog
     */
    $scope.$onRootScope('beforeOpen', function() {
        $scope.resetSchoolForm();
    });

    /**
     * Listens for afterOpen event from the landing page dialog
     */
    $scope.$onRootScope('afterOpen', function() {
        $scope.education_levels = education_levels;
        $scope.grabCursor();
        $('[name="school_type"]').on('change', function() {
            var value = $scope.rd.school_type;
            $(this).removeClass('ng-pristine').addClass('ng-dirty');
            $('.degree').each(function() {
                var inpt = $(this).find('input');
                if (value == 'College' || value == 'Graduate School') {
                    inpt.attr('disabled', false).attr('class', 'ng-dirty ng-invalid').bind('keypress', fixNotEmpty);
                    if (inpt.attr('name') == 'field_study_0' && inpt.val() == '') {
                        inpt.attr('required', true);
                    } else {
                        inpt.attr('required', false);
                    }
                } else {
                    inpt.attr('disabled', true);
                }
            });
            if (value == 'College' || value == 'Graduate School') {
                $('.add-btn, .degree .delete-btn').attr('disabled', false);
            } else {
                $('.add-btn, .degree .delete-btn').attr('disabled', true);
            }
        });
        $('input:radio + label, input:checkbox + label').on('click', function() {
            var value = $('#' + $(this).attr('for')).val();
            var school_location = $('[name="school_location"]');
            if (value == 'yes') {
                $('[name="city"], .edu [name="state_list"]').attr('required', true);
                school_location.attr('required', false);
            } else {
                $('[name="city"], .edu [name="state_list"]').attr('required', false);
                school_location.attr('required', true);
                if (school_location.val() == '') {
                    $('.jvFloat [name="school_location"]').parent().find('.placeHolder').removeClass('active');
                    school_location.addClass('ng-invalid').removeClass('ng-valid');
                } else {
                    $('.jvFloat [name="city"]').parent().find('.placeHolder').removeClass('active');
                    $('[name="state_list"]').addClass('ng-pristine');
                    school_location.removeClass('ng-invalid').addClass('ng-valid');
                }
            }
        });
    });

    /**
     * Reset the Add School form to empty values and remove validation errors.
     */
    $scope.resetSchoolForm = function() {
        $scope.rd.school_id = null;
        $scope.rd.school_type = '';
        $scope.rd.school_name = '';
        $('[name="school_type"]').removeClass('ng-dirty').addClass('ng-pristine').parent().find('.select2-chosen').html('Type of Education');
        $scope.rd.school_city = '';
        $scope.rd.school_state = '';
        $('[name="state_list"]').removeClass('ng-dirty').addClass('ng-pristine').parent().find('.select2-chosen').html('Select a State');
        $scope.rd.school_location = '';
        $scope.rd.domestic_school = 'yes';
        $scope.rd.field_study = [];
        $('.jvFloat .placeHolder').removeClass('active');
        $('.degree').each(function(i) {
            if (i > 0) $(this).remove();
            var inpt = $(this).find('input');
            inpt.removeClass('ng-valid ng-invalid cs-invalid').attr('disabled', true);
        });
        $('select').addClass('ng-dirty').bind('change', fixSelectValid);
        $('.add-btn').attr('disabled', true);
        $('.school-list .delete-btn, .school-list .edit-btn').attr('disabled', false);
        $('.errors').css('display', 'none');
    };

    /**
     * Listens for formValid event from the landing page and then adds
     * the school to the list.
     */
    $scope.$onRootScope('formValid', function() {

        var school = {
            type: $scope.rd.school_type,
            name: $scope.rd.school_name,
            city: $scope.rd.school_city,
            state: $scope.rd.school_state,
            location: $scope.rd.school_location,
            fieldsOfStudy: $scope.rd.field_study
        }
        //console.log('formValid');
        var s = new School(school);
        s.schoolId = $scope.rd.school_id;
        school = s;

        var notempty = [];
        for (var i=0; i < school.fieldsOfStudy.length; i++) {
            if (school.fieldsOfStudy[i] != '') notempty.push(school.fieldsOfStudy[i]);
        }
        school.fieldsOfStudy = notempty;
        if ($scope.rd.domestic_school == 'yes') {
            school.location = '';
        } else {
            school.city = school.state = null; //'';
        }

        $scope.school = school;

        if (window.$mainScope.loggedIn) {
            if ($scope.school_editing > -1) {
                //'Education.schools['+$scope.school_editing+']'
                window.$mainScope.saveData($scope.school, '/school/');
            } else {
                console.log($scope.school);
                //'Education.schools['+($scope.rd.Education.schools.length-1)+']'
                window.$mainScope.saveData($scope.school, '/school/');
            }
        } else {
            $scope.send('saveFinished');
        }



    });

    $scope.$onRootScope('saveFinished', function(e, data) {
        //console.log('saveFinished');
        //console.log(data);
        if ($scope.school_editing > -1) {
            $scope.rd.Education.schools.splice($scope.school_editing, 0, $scope.school);
            $('.school-list .delete-btn, .school-list .edit-btn').attr('disabled', false);
            $scope.school_editing = -1;
        } else {
            if ($scope.school && $scope.school.name != '') {
                $scope.rd.Education.addSchool($scope.school);
                if (data) {
                    data = (data.charAt(0) == '"') ? data.substring(1, data.length-1) : data;
                    $scope.rd.Education.schools[$scope.rd.Education.schools.length-1].schoolId = data;
                    console.log('new: ');
                    console.log($scope.rd.Education.schools[$scope.rd.Education.schools.length-1]);
                }
            }
        }
        $scope.school = undefined;
        //$scope.rd.saveData();

        // reset form
        $scope.resetSchoolForm();
        $scope.grabCursor();
        $('[name="school_type"]').select2('focus');
        $scope.completed = true;

    });

    /**
     * Initiates adding a school. If form is valid, event will be broadcast
     * to add the school.
     */
    $scope.addSchool = function() {
        //console.log('addSchool');
        var e = $scope.send('validateForm', true);

    };

    /**
     * Removes a Degree, Major, Minor from the current school.
     * @param  integer index
     */
    $scope.removeFieldOfStudy = function(index) {
        Guidance.hideTips();
        $('#field_study_' + index).closest('.degree').remove();
        //$scope.rd.field_study.splice(index, 1);
        $scope.rd.field_study[index] = '';
    };

    /**
     * Adds a Degree, Major, Minor to the current school.
     */
    $scope.addFieldOfStudy = function() {
        var html = obj = $('.degree').last();
        len = $('.degree').length;
        html = html.clone().html();
        var re = new RegExp(len - 1, 'g');
        html = html.replace(re, len);
        $(html).children('input').each(function() {
            $(this).removeClass('ng-invalid ng-valid ng-dirty').addClass('ng-pristine');
            var input = $(this)[0].outerHTML;
            input = '<label class="degree">' + input + '<button ng-click="addFieldOfStudy()" style="width:0px; height:0px; padding:0px; border:0px; opacity: 0;" ></button> <button id="delete' + len + '" class="delete-btn" ng-click="removeFieldOfStudy(' + len + ')" tool-tip="Delete Additonal Info"></button><ul class="errors"><li>Information is required.</li></ul></label>';
            obj.after($compile(input)($scope));
        });
        $node = $('.degree').last().find('input').attr('placeholder', 'Additional Degree, Major, or Minor');
        $node.jvFloat();
        $node.focus(function() {
            $(this).removeClass('cs-invalid').parent().parent().find('.errors').css('display', 'none');
        });;
        setTimeout(function() {
            $node.trigger('focus');
        }, 200);
    };

    /**
     * Removes a school from the list.
     * @param  integer index
     */
    $scope.removeSchool = function(index) {
        Guidance.hideTips();
        if (window.$mainScope.loggedIn) {
            window.removeIndex = index;
            window.$mainScope.removeData($scope.rd.Education.schools[index], '/school/');
        } else {
            $scope.send('removeFinished');
        }
    };

    $scope.$onRootScope('removeFinished', function() {
        $scope.rd.Education.deleteSchool(window.removeIndex);
        window.removeIndex = undefined;
    });

    /**
     * Populates the add/edit school form with the data from the school with
     * the selected index. Removes it from the school listing until item is
     * re-saved. Failure to continue with save operation will result in the
     * item being dropped from the list.
     * @param  integer index
     */
    $scope.editSchool = function(index) {
        Guidance.hideTips();
        $scope.resetSchoolForm();
        var s = $scope.rd.Education.schools[index];
        $scope.school_editing = index;

        $scope.rd.school_type = s.type;
        $scope.rd.school_name = s.name;
        $('[name="school_type"]').removeClass('ng-dirty').addClass('ng-pristine').parent().find('.select2-chosen').html(s.type);
        $scope.rd.school_city = s.city;
        $scope.rd.school_state = s.state;
         $('[name="state_list"]').removeClass('ng-dirty').addClass('ng-pristine').parent().find('.select2-chosen').html(stateNameFilter(s.state));
        $scope.rd.school_location = s.location;
        $scope.rd.domestic_school = (s.location == '') ? 'yes' : 'no';

        for (var i = 1; i < s.fieldsOfStudy.length; i++) $scope.addFieldOfStudy();
        $scope.rd.field_study = s.fieldsOfStudy;
        $('select').removeClass('ng-pristine');
        var value = $scope.rd.school_type;
        $('.jvFloat .placeHolder').addClass('active');
        // TOTO refactor
        $('.degree').each(function() {
            var inpt = $(this).find('input');
            inpt.addClass('ng-valid ng-valid-notempty').removeClass('ng-pristine');
            if (value == 'College' || value == 'Graduate School') {
                inpt.attr('disabled', false).attr('required', true);
            } else {
                inpt.removeClass('ng-valid');
            }
        });
        if (value == 'College' || value == 'Graduate School') {
            $('.add-btn, .degree .delete-btn').attr('disabled', false);
        } else {
            $('.add-btn, .degree .delete-btn').attr('disabled', true);
        }
        $('input:radio + label, input:checkbox + label').on('click', function() {
            var value = $('#' + $(this).attr('for')).val();
            var school_location = $('[name="school_location"]');
            var city = $('.jvFloat [name="city"]');
            var state = $('[name="state_list"]');
            if (value == 'no') {
                $('.jvFloat [name="school_location"]').parent().find('.placeHolder').removeClass('active');
                city.attr('required', false);
                state.attr('required', false);
                school_location.attr('required', true);
                if (school_location.val() != '') {
                    school_location.addClass('ng-valid').removeClass('ng-invalid');
                } else {
                    school_location.addClass('ng-invalid').removeClass('ng-valid');
                }
            } else {
                city.attr('required', true);
                state.attr('required', true);
                school_location.attr('required', false);
                if (state.val() != null) {
                    state.addClass('ng-valid').removeClass('ng-invalid');
                } else {
                    state.addClass('ng-pristine ng-invalid').removeClass('ng-valid');
                }
                if (city.val() != null) {
                    city.addClass('ng-valid').removeClass('ng-invalid');
                } else {
                    city.addClass('ng-pristine ng-invalid').removeClass('ng-valid');
                }
            }

        });

        window.undoEdit = {
            'Education': jQuery.extend(true, {}, $scope.rd.Education)
        };
        //console.log($scope.rd.Education.schools[index].schoolId);
        $scope.rd.school_id = $scope.rd.Education.schools[index].schoolId;
        $scope.rd.Education.deleteSchool(index);

        $('.school-list .delete-btn, .school-list .edit-btn').attr('disabled', true);
        $('form[name="form_modal"]').find(':input').each(function() {
            if (!$(this).attr('disabled')) {
                $(this).addClass('ng-dirty ng-valid').removeClass('ng-invalid cs-invalid');
            }
            if ($(this).attr('type') != 'button' && $(this).prop('tagName') != 'BUTTON') {
                $(this).focus(function() {
                    $(this).removeClass('cs-invalid').parent().parent().find('.errors').css('display', 'none');
                });
            }
        });
        $('.degree').last().each(function() {
            if ($($(this).find('input')[0]).attr('disabled')) {
                $(this).find('.jvFloat .placeHolder').removeClass('active');
            } else {
                $(this).find('input').removeClass('ng-invalid ng-invalid-required cs-invalid');
            }
        });
        setTimeout(function() {
            $('[name="school_type"]').select2('focus');
        }, 200);

    };
}

/**
 * Controller for Work Experience section
 *
 * @param object $scope
 * @param object $routeParams
 * @param object $location
 * @param object $compile
 * @param object $http
 */

function WorkExperienceCtrl($scope, model, $routeParams, $location, $compile, $http, Modals, Guidance, availableExperiencesFilter, CategoryHelper) {

    $scope.job = model.editing ? angular.copy(model.editing) : {};
    $scope.rd.organizing = true;
    $scope.completed = false;

    // volunteer/custom specific
    $scope.branches = ['AIR FORCE', 'ARMY', 'COAST GUARD', 'MARINE CORPS', 'NAVY'];
    $scope.volunteer_experience = volunteer_experience;

    function init() { // prepopulating selected items for volunteer jobs
        var job = $scope.job;
        console.log($scope.job);

        $scope.branch = job.position ? job.position.split('|')[0] : null;
        $scope.position = job.position ? job.position.split('|')[1] : null;
        $scope.availableExperiences = availableExperiencesFilter(volunteer_experience, $scope.branch, $scope.position);
        $scope.vselection = [];

        var available = $scope.availableExperiences;
        var responsibilities = $scope.job.responsibilities || [];
        for(var i=0; i<responsibilities.length; i++) {
            var r = responsibilities[i];
            if(available && available.indexOf(r.description)>=0) {
                $scope.vselection.push(r.description);
                responsibilities.splice(i, 1);
                i--;
            }
        }

        console.log($scope.job);
    }

    $scope.toggleVSelection = function(experience) {
        var index = $scope.vselection.indexOf(experience);
        if(index < 0) { $scope.vselection.push(experience); }
        else { $scope.vselection.splice(index, 1); }
    };

    /**
     * Make sure to destroy scope when modal closes so that events are unbound!!!
     */
    $scope.$onRootScope('afterClose', function() {
        $scope.$destroy();
    });

    $scope.gotoWork = function() {
        Modals.gotoSection('experience', 'work.html', $scope);
    }
    $scope.gotoVolunteer = function() {
        Modals.gotoSection('experience', 'volunteer.html', $scope)
    }
    $scope.gotoCustom = function() {
        Modals.gotoSection('experience', 'custom.html', $scope);
    }

    /**
     * Initiates adding a job. If form is valid, event will be broadcast
     * to add the school.
     */
    $scope.addJob = function(closeModal) {

        // validate?
        //var e = $scope.send('validateForm', true);
        if(!$scope.job.position) { $scope.job.position = ''; }

        if($scope.job.type=='pre_defined') {
            $scope.job.position = $scope.branch+'|'+$scope.position;
            var selection = $scope.vselection || [];

            var responsibilities = $scope.job.responsibilities;
            if(responsibilities[responsibilities.length-1].description=="") {
                responsibilities.splice(responsibilities.length-1, 1);
            }
            for(var i=0; i<selection.length; i++) {
                responsibilities.push({description:selection[i], category:null});
            }
        }

        if($scope.job.responsibilities && $scope.rd.WorkExperience.categories){
            var x,y,z,job_resp,cat_resp;
            for(var x=0; x<$scope.job.responsibilities.length; x++) {
                job_resp = $scope.job.responsibilities[x];
                for(var y=0; y<$scope.rd.WorkExperience.categories.length; y++) {
                    if($scope.rd.WorkExperience.categories[y] && $scope.rd.WorkExperience.categories[y].responsibilities){
                        for(var z=0; z<$scope.rd.WorkExperience.categories[y].responsibilities.length; z++) {
                            cat_resp = $scope.rd.WorkExperience.categories[y].responsibilities[z];
                            if($scope.rd.WorkExperience.categories[y].name != "Uncategorized"){
                                if(cat_resp.description == job_resp.description){
                                    $scope.job.responsibilities[x].category = {
                                        name: $scope.rd.WorkExperience.categories[y].name
                                    };
                                }
                            }
                        }
                    }
                }
            }
        }

        console.log($scope.job);

        window.$mainScope.saveData($scope.job, $scope.job.type ? '/volunteer_job/' : '/job/')
        .then(function(data) {

            console.log(model.editing, $scope.job)
            if(model.editing) {
                angular.copy($scope.job, model.editing);
            } else {
                $scope.rd.WorkExperience.jobs.push($scope.job);
                $scope.job = {type: $scope.job.type, responsibilities:[{description:''}]};//{employerName: '', responsibilities:[{description:''}]};
                init();
            }

            model.editing = null;
            //$scope.completed = true;
            //$scope.getResumeID();
            CategoryHelper.pullCategories($scope.rd.WorkExperience);
            if(closeModal) { $scope.doOrganize(); } //Modals.delayedClose($scope);
        });
    };

    $scope.editJob = function(job) {
        console.log(job);
        model.editing = job;
        $scope.job = angular.copy(job);
    }

    $scope.removeJob = function(job, closeModal) {
        console.log(job);
        window.$mainScope.removeData(job, job.type ? '/volunteer_job/' : '/job/')
        .then(function(data) {
                var jobs = $scope.rd.WorkExperience.jobs;
                var index = jobs.indexOf(job);
                jobs.splice(index, 1);
                if(job == $scope.job) {
                  $scope.job = {};
                  model.editing = null;
                }
                //$scope.getResumeID();
                CategoryHelper.pullCategories($scope.rd.WorkExperience);
                if(closeModal) { $scope.doOrganize(); }
        });
    };

    init();
}

/**
 * Controller for Certifications section
 *
 * @param object $scope
 * @param object $routeParams
 * @param object $location
 * @param object $compile
 * @param object $http
 */

function CertificationCtrl($scope, $rootScope, $routeParams, $location, $compile, $http, Modals, Guidance, $analytics) {

    $scope.cert_field = '';
    $scope.custom_certs = [];
    $scope.completed = ($scope.rd.Certifications.certs.length>0);
    
    /**
     * Make sure to destroy scope when modal closes so that events are unbound!!!
     */
    $scope.$onRootScope('afterClose', function() {
        $analytics.eventTrack('click', {  category: 'user', label: 'certifications_complete' });
        $scope.$destroy();
    });

    $scope.close = function() {
        //$scope.rd.sections.certifications.skip = true;
        Modals.closeModal($scope);
    }

    /**
     * Handle dragging cursor / scrolling fix
     */
    $scope.grabCursor = function() {
        setTimeout(function() {
            $('.grab').on('mousedown', function() {
                $(this).addClass('grabbing');
                $scope.scrollTop = $('.vex').scrollTop();
                $scope.scrollOffset = $(this).offset();
                //$scope.scrollPos = $(this).position();
            }).on('mouseup', function() {
                $(this).removeClass('grabbing');
            });
        }, 500);
    };

    /**
     * options for angular ui-sortable
     * @type {Object}
     */
    $scope.sortableOptions = {
        update: function(e, ui) {},
        start: function(e, ui) {
            $('.vex').scrollTop($scope.scrollTop);
            setTimeout(function() {
                $('.vex').scrollTop($scope.scrollTop);
            }, 10);
        },
        stop: function(e, ui) {},
        axis: 'y',
    };

    $scope.$onRootScope('afterOpen', function(){
        $scope.cert_field = '';
        $scope.cert_data_list = cert_data;
        $scope.cert_editing = -1;
        /*for (var i=0; i < $scope.rd.Certifications.certs.length; i++) {
            $scope.rd.certifications[i] = $scope.rd.Certifications.certs[i].name;
        }*/
    });

    /**
     * Initiates adding a cert. If form is valid, event will be broadcast
     * to add the cert.
     */
    $scope.addCert = function() {
        $('.hideme').removeClass('hideme');
        if (!$scope.checkCerts()) {
            var e = $scope.send('validateForm', true);
        }
    };

    /**
     * Reset the Add Job form to empty values and remove validation errors.
     */
    $scope.resetCertForm = function() {
        $scope.cert_field = '';
        $scope.custom_certs = [];
        Modals.gotoSection('certifications', 'certifications.html', $scope);
    };

    /**
     * Listens for formValid event from the landing page and then adds
     * the job to the list.
     */
    $scope.$onRootScope('formValid', function() {
        var certifications = [];
        var current_certs = [];
        for (var i=0; i < $scope.rd.Certifications.certs.length; i++) {
            current_certs[i] = $scope.rd.Certifications.certs[i].name;
        }
        $('.cert-list :checkbox:checked').each(function(){
            var val = $(this).val();
            if ($.inArray(val, current_certs) < 0)
                certifications.push(val);
        });
        for (var i=0; i < $scope.custom_certs.length; i++) {
            var val = $scope.custom_certs[i].description;
            if (val != '' && $.inArray(val, current_certs) < 0) certifications.push(val);
        }
        /*$('.cert textarea').each(function(){
            var val = $(this).val();
            if (val != '' && $.inArray(val, current_certs) < 0) $scope.rd.certifications.push(val);
        });*/
        var resume = $scope.rd.getFullResumeObject()
        for (var i=0; i < certifications.length; i++) {
            resume.certifications.push({name: certifications[i]});
        }
        if (window.$mainScope.loggedIn) {
            window.$mainScope.saveData(resume, '?return=true');
        } else {
            $scope.send('saveFinished', resume, resume);
        }
    });

    $scope.$onRootScope('saveFinished', function(e, data, entity) {
        $analytics.eventTrack('click', {  category: 'user', label: 'certifications_complete' });
        /*for (var i=0; i < $scope.rd.certifications.length; i++) {
            $scope.rd.Certifications.addCertificate({name: $scope.rd.certifications[i]});
        }*/
        //console.log('entity: ', entity);
        //console.log('data: ', data);
        $scope.rd.Certifications.certs = data.certifications;
        $scope.resetCertForm();
        $scope.completed = true;
    });

    $scope.checkCerts = function() {
        var cnt = 0;
        for(var i=0; i < $scope.custom_certs.length; i++) {
            if ($scope.custom_certs[i].description != '') cnt++;
        };
        var total = cnt + $('.cert-list :checkbox:checked').size();
        if (total) $('.custom-error').addClass('hideme');
        return (total < 1);
    };

    /**
     * Removes a cert from the list.
     * @param  integer index
     */
    $scope.removeCert = function(index) {
        Guidance.hideTips();
        if (window.$mainScope.loggedIn) {
            window.removeIndex = index;
            window.$mainScope.removeData($scope.rd.Certifications.certs[index], '/certification/');
        } else {
            $scope.send('removeFinished');
        }
    };

    $scope.$onRootScope('removeFinished', function() {
        $scope.rd.Certifications.deleteCertificate(window.removeIndex);
        window.removeIndex = undefined;
        //$scope.rd.saveData();
    });

    /**
     * Removes a responsibility from the current job.
     * @param  integer index
     *//*
    $scope.removeCertification = function(index) {
        Guidance.hideTips();
        $('#cert_' + index).closest('.cert').remove();
        //$scope.rd.field_study.splice(index, 1);
        $scope.rd.certifications[index] = '';
    };*/

    /**
     * Adds a responsibility to the current job.
     *//*
    $scope.addCertification = function() {
        var html = obj = $('.cert').last();
        len = $('.cert').length;
        html = html.clone().html();
        var re = new RegExp(len - 1, 'g');
        html = html.replace(re, len);
        console.log(obj);
        $(html).children('textarea').each(function() {
            $(this).removeClass('ng-invalid ng-valid ng-dirty').addClass('ng-pristine').attr('required', 'required');
            var input = $(this)[0].outerHTML;
            input = '<label class="cert space-fix">' + input + '<button id="delete' + len + '" class="delete-btn" ng-click="removeCertification(' + len + ')" tool-tip="Delete Certification"></button><ul class="errors"><li>Information is required.</li></ul></label>';
            obj.after($compile(input)($scope));
        });
        $node = $('.cert').last().find('textarea');
        $node.focus(function() {
            $(this).removeClass('cs-invalid').parent().parent().find('.errors').css('display', 'none');
        });;
        setTimeout(function() {
            $node.trigger('focus');
        }, 200);
    };*/
}
/**
 * Controller for PersonalSkills section
 *
 * @param object $scope
 * @param object $routeParams
 * @param object $location
 * @param object $compile
 * @param object $http
 */

function SkillsCtrl($scope, $routeParams, $location, $compile, $http, Modals, Guidance) {

    $scope.custom_skills = [];
    $scope.completed = ($scope.rd.PersonalSkills.skills.length>0);

    /**
     * Make sure to destroy scope when modal closes so that events are unbound!!!
     */
    $scope.$onRootScope('afterClose', function() {
        $scope.$destroy();
    });

    $scope.close = function() {
        //$scope.rd.sections.personal_skills.skip = true;
        Modals.closeModal($scope);
    }

    /**
     * Handle dragging cursor / scrolling fix
     */
    $scope.grabCursor = function() {
        setTimeout(function() {
            $('.grab').on('mousedown', function() {
                $(this).addClass('grabbing');
                $scope.scrollTop = $('.vex').scrollTop();
                $scope.scrollOffset = $(this).offset();
                //$scope.scrollPos = $(this).position();
            }).on('mouseup', function() {
                $(this).removeClass('grabbing');
            });
        }, 500);
    };

    /**
     * options for angular ui-sortable
     * @type {Object}
     */
    $scope.sortableOptions = {
        update: function(e, ui) {},
        start: function(e, ui) {
            $('.vex').scrollTop($scope.scrollTop);
            setTimeout(function() {
                $('.vex').scrollTop($scope.scrollTop);
            }, 10);
        },
        stop: function(e, ui) {},
        axis: 'y',
    };

    $scope.$onRootScope('afterOpen', function(){
        $scope.personal_skills_list = personal_skills;
        $scope.skill_editing = -1;
        /*for (var i=0; i < $scope.rd.PersonalSkills.skills.length; i++) {
            $scope.rd.personal_skills[i] = $scope.rd.PersonalSkills.skills[i].name;
        }
        console.log($scope.rd.personal_skills);*/
        /*setTimeout(function(){
            window.$mainScope.progressButtons();
        }, 500);*/
    });
/*
    $scope.fixTextArea = function(selector) {
        setTimeout(function(){
            $('#'+selector).flexText().css('visibility', 'visible');
        }, 100);
    };

    $scope.fixCheckbox = function(selector) {
        if (!Modernizr.checked) {
            $('#'+selector).checkedPolyfill();
        }

        $('#'+selector+' + label span').keypress(function(e) {
            var value = $('#' + $(this).parent().attr('for')).val();
            if (e.which == 13 || e.which == 32) {
                $(this).parent().trigger('click');
                $scope.$apply();
            }
        });
    };
*/
    /**
     * Initiates adding a cert. If form is valid, event will be broadcast
     * to add the cert.
     */
    $scope.addSkill = function() {
        $('.hideme').removeClass('hideme');
        if (!$scope.checkSkills()) {
            var e = $scope.send('validateForm', true);
        }
    };

    /**
     * Reset the Add Job form to empty values and remove validation errors.
     */
    $scope.resetSkillForm = function() {
        //$scope.custom_skills = [];
        Modals.gotoSection('skills', 'skills.html', $scope);
    };

    /**
     * Listens for formValid event from the landing page and then adds
     * the job to the list.
     */
    $scope.$onRootScope('formValid', function() {
        var skills = [];
        var current_skills = [];
        for (var i=0; i < $scope.rd.PersonalSkills.skills.length; i++) {
            current_skills[i] = $scope.rd.PersonalSkills.skills[i].name;
        }
        $('.cert-list :checkbox:checked').each(function(){
            var val = $(this).val();
            if ($.inArray(val, current_skills) < 0)
                skills.push(val); // adds skills
        });
        for (var i=0; i < $scope.custom_skills.length; i++) {
            var val = $scope.custom_skills[i].description;
            if (val != '' && $.inArray(val, current_skills) < 0) skills.push(val);
        }
        /*$('.cert textarea').each(function(){
            var val = $(this).val();
            if (val != '' && $.inArray(val, current_skills) < 0) $scope.skills.push(val);
        });*/
        var resume = $scope.rd.getFullResumeObject()
        for (var i=0; i < skills.length; i++) {
            resume.personal_skills.push({name: skills[i]});
        }
        if (window.$mainScope.loggedIn) {
            window.$mainScope.saveData(resume, '?return=true');
        } else {
            $scope.send('saveFinished', resume, resume);
        }
    });

    $scope.$onRootScope('saveFinished', function(e, data, entity) {

        /*for (var i=0; i < $scope.rd.personal_skills.length; i++) {
            $scope.rd.PersonalSkills.addPersonalSkill({name: $scope.rd.personal_skills[i]});
        }*/
        // assign new data from server onto resume
        $scope.rd.PersonalSkills.skills = data.personal_skills;
        $scope.resetSkillForm();
        $scope.completed = true;
    });

    $scope.checkSkills = function() {
        var cnt = 0;
        for(var i=0; i < $scope.custom_skills.length; i++) {
            if ($scope.custom_skills[i].description != '') cnt++;
        };
        var total = cnt + $('.cert-list :checkbox:checked').size();
        if (total) $('.custom-error').addClass('hideme');
        return (total < 1);
    };

    /**
     * Removes a cert from the list.
     * @param  integer index
     */
    $scope.removeSkill = function(index) {
        Guidance.hideTips();
        if (window.$mainScope.loggedIn) {
            window.removeIndex = index;
            window.$mainScope.removeData($scope.rd.PersonalSkills.skills[index], '/personalskill/');
        } else {
            $scope.send('removeFinished');
        }
    };

    $scope.$onRootScope('removeFinished', function() {
        $scope.rd.PersonalSkills.deletePersonalSkill(window.removeIndex);
        window.removeIndex = undefined;
        //$scope.rd.saveData();
    });


    /**
     * Removes a responsibility from the current job.
     * @param  integer index
     *//*
    $scope.removePersonalSkill = function(index) {
        Guidance.hideTips();
        $('#cert_' + index).closest('.cert').remove();
        //$scope.rd.field_study.splice(index, 1);
        $scope.skills[index] = '';
    };*/

    /**
     * Adds a responsibility to the current job.
     *//*
    $scope.addPersonalSkill = function() {
        var html = obj = $('.cert').last();
        len = $('.cert').length;
        html = html.clone().html();
        var re = new RegExp(len - 1, 'g');
        html = html.replace(re, len);
        console.log(obj);
        $(html).children('textarea').each(function() {
            $(this).removeClass('ng-invalid ng-valid ng-dirty').addClass('ng-pristine').attr('required', 'required');
            var input = $(this)[0].outerHTML;
            input = '<label class="cert space-fix">' + input + '<button id="delete' + len + '" class="delete-btn" ng-click="removePersonalSkill(' + len + ')" tool-tip="Delete Skill"></button><ul class="errors"><li>Information is required.</li></ul></label>';
            obj.after($compile(input)($scope));
        });
        $node = $('.cert').last().find('textarea');
        $node.focus(function() {
            $(this).removeClass('cs-invalid').parent().parent().find('.errors').css('display', 'none');
        });;
        setTimeout(function() {
            $node.trigger('focus');
        }, 200);
    };*/
}

/**
 * Controller for Summary section
 *
 * @param object $scope
 * @param object $routeParams
 * @param object $location
 * @param object $compile
 * @param object $http
 */

function SummaryCtrl($scope, $routeParams, $location, $compile, $http, Modals) {

    $scope.summary_length = 500;
    $scope.summary = angular.copy($scope.rd.Summary.text);

    /**
     * Make sure to destroy scope when modal closes so that events are unbound!!!
     */
    $scope.$onRootScope('afterClose', function() {
        $scope.$destroy();
    });

    $scope.limitLength = function() {
        var remaining = ($scope.summary) ? $scope.summary_length - $scope.summary.length : 500;
        if(remaining < 0) {
            $scope.summary = $scope.summary.substr(0, $scope.summary_length);
        }
    };

    $scope.addSummary = function() {
        $scope.rd.Summary.text = $scope.summary;
        $scope.saveData($scope.rd.getFullResumeObject(), ''); // fantastic! :/
    };

    $scope.$onRootScope('saveFinished', function(e) {
        Modals.closeModal($scope);
    });
    
}
var state_list = [{"name":"Armed Forces Americas","abbreviation":"AA"},{"name":"Armed Forces Europe","abbreviation":"AE"},{"name":"Armed Forces Pacific","abbreviation":"AP"},{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"American Samoa","abbreviation":"AS"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"District of Columbia","abbreviation":"DC"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Guam","abbreviation":"GU"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Puerto Rico","abbreviation":"PR"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virgin Islands","abbreviation":"VI"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}];

var education_levels = [{"text":"GED","value":"GED"},{"text":"High School","value":"High School"},{"text":"College","value":"College"},{"text":"Graduate School","value":"Graduate School"}];

var skill_categories = [
    {
        "name" : "Administration",
        "desc" : "Routine clerical, organizational and administrative duties such as answering phones, scheduling meetings and events, drafting reports and managing filing systems.",
        "example_jobs" : [
            "Secretary",
            "Administrative Assistant",
            "Receptionist",
            "Data Entry Clerk"
        ]
    },
    {
        "name" : "Animal Care",
        "desc" : "Caring for animals, including feeding, grooming, bathing, exercising and providing for their health and well-being.",
        "example_jobs" : [
            "Veterinary Assistant",
            "Veterinarian",
            "Pet Groomer",
            "Animal Trainer"
        ]
    },
    {
        "name" : "Communication",
        "desc" : "Provide clear, efficient, appropriate, relevant communication for different audiences to accomplish specific goals.",
        "example_jobs" : [
            "Journalist",
            "Writer",
            "Editor",
            "Documentation Specialist",
            "Public Speaker"
        ]
    },
    {
        "name" : "Childcare",
        "desc" : "Provide for the needs of children, including preparing meals, maintaining good hygiene, organizing activities and keeping track of progress and problems.",
        "example_jobs" : [
            "Nanny",
            "Child Care Giver",
            "Daycare Assistant",
            "Child Life Specialist"
        ]
    },
    {
        "name" : "Creative/Design",
        "desc" : "Create visual concepts to inspire, captivate or inform audiences. Organize content and determine layout for various types of media.",
        "example_jobs" : [
            "Graphic Designer",
            "Interior Designer",
            "Illustrator",
            "Print Production Assistant",
            "Videographer",
            "Fashion Designer"
        ]
    },
    {
        "name" : "Customer Service",
        "desc" : "Handle customer questions and complaints, process orders, provide information and manage accounts.",
        "example_jobs" : [
            "Customer Service Representative",
            "Call Center Operator",
            "Data Entry Clerk",
            "Customer Care Manager"
        ]
    },
    {
        "name" : "Engineering",
        "desc" : "Concept, design, build and test various devices, machines or structures.",
        "example_jobs" : [
            "Mechanical Engineer",
            "Plant Manager",
            "Network Engineer",
            "Architect",
            "Civil Engineer"
        ]
    },
    {
        "name" : "Environmental Service",
        "desc" : "Applying knowledge of natural sciences to survey, cultivate, protect, investigate and report on the environment.",
        "example_jobs" : [
            "Landscaper",
            "Environmental Specialist",
            "Park Manager",
            "Scientist"
        ]
    },
    {
        "name" : "Event Planning/Support",
        "desc" : "Communicate with clients and plan, organize, manage, supervise and participate in events that meet client needs and expectations.",
        "example_jobs" : [
            "Event Coordinator",
            "Event Planner",
            "Community Services Specialist"
        ]
    },
    {
        "name" : "Finance",
        "desc" : "Prepare and examine financial records, help individuals or organizations manage their finances, create and analyze budgets, and process financial requests and transactions.",
        "example_jobs" : [
            "Accountant",
            "Auditor",
            "Financial Advisor",
            "Budget Analyst",
            "Insurance Underwriter"
        ]
    },
    {
        "name" : "Fitness/Recreation",
        "desc" : "Lead, instruct and motivate individuals in exercise and indoor/outdoor activities. Enforce safety rules and provide personalized guidance to participants.",
        "example_jobs" : [
            "Personal Trainer",
            "Fitness Instructor",
            "Lifeguard",
            "Equipment Manager",
            "Referee/Official"
        ]
    },
    {
        "name" : "Fundraising",
        "desc" : "Organize events and campaigns to raise money and other donations for an organization or cause. Promote the fundraising initiative and increase awareness of its goals and needs.",
        "example_jobs" : [
            "Community Relations Specialist",
            "Events Planner",
            "Fundraising Specialist",
            "Development Director"
        ]
    },
    {
        "name" : "Healthcare",
        "desc" : "Provide and coordinate patient care, educate patients and the public about various health conditions, and provide advice and emotional support to patients and their family members.",
        "example_jobs" : [
            "Registered Nurse",
            "Medical Coding Specialist",
            "Social Worker",
            "Pharmacy Technician",
            "Physical Therapist"
        ]
    },
    {
        "name" : "Hospitality/Food Service",
        "desc" : "Serve the various needs of guests with quality customer service.",
        "example_jobs" : [
            "Custodian",
            "Guest Service Professional",
            "Server",
            "Host/Hostess",
            "Cook/Chef"
        ]
    },
    {
        "name" : "Human Resources",
        "desc" : "Recruit, screen and place workers and handle employee-related needs such as payroll, benefits and training.",
        "example_jobs" : [
            "Human Resources Specialist",
            "Human Resources Generalist",
            "Benefits Coordinator"
        ]
    },
    {
        "name" : "Information Technology",
        "desc" : "Develop, communicate, manage, test and implement technical solutions to solve specific problems. Follow standard methods and processes to achieve consistent and quality results.",
        "example_jobs" : [
            "Project Manager",
            "Business Analyst",
            "Software Engineer",
            "Web Developer",
            "Help Desk Analyst"
        ]
    },
    {
        "name" : "Leadership",
        "desc" : "Provide guidance, advice, inspiration, direction, vision and motivation to others to achieve goals.",
        "example_jobs" : [
            "Director",
            "President",
            "Vice President"
        ]
    },
    {
        "name" : "Legal",
        "desc" : "Provide various legal services for clients, including drafting and reviewing contracts, providing legal counsel, conducting research on laws and regulations, and evidence and legal documents, and managing lawsuits.",
        "example_jobs" : [
            "Case Manager",
            "Paralegal",
            "Legal Assistant",
            "Lawyer",
            "Attorney"
        ]
    },
    {
        "name" : "Maintenance",
        "desc" : "Troubleshoot, inspect, maintain, install, diagnose, assemble, clean and repair various mechanical equipment and systems.",
        "example_jobs" : [
            "Maintenance Technician",
            "Repair Technician",
            "Maintenance Electrician",
            "Installation/Service Technician"
        ]
    },
    {
        "name" : "Management",
        "desc" : "Develop an organization’s strategies and policies, supervise employees and identify opportunities for improvement in the individual and the business.",
        "example_jobs" : [
            "Manager",
            "Office Manager",
            "Supervisor",
            "Project Manager"
        ]
    },
    {
        "name" : "Manufacturing",
        "desc" : "Perform a variety of production tasks, including operating, interpreting, inspecting and cleaning machinery, processing and filling orders, and loading equipment and materials",
        "example_jobs" : [
            "Order Processor",
            "Production Supervisor",
            "Quality Control Technician",
            "Materials Handler",
            "Assembly Technician"
        ]
    },
    {
        "name" : "Marketing",
        "desc" : "Plan programs and campaigns to generate interest in a product, service or business. Communicate with clients to determine goals, set schedules and budgets and implement strategies and activities.",
        "example_jobs" : [
            "Account Executive",
            "Project Manager",
            "Social Media Coordinator"
        ]
    },
    {
        "name" : "Mentoring/Counseling",
        "desc" : "Help people manage and overcome various mental and emotional problems. Listen to clients, ask questions, help them understand their problems and develop strategies to help improve their lives.",
        "example_jobs" : [
            "Counselor",
            "Mentor",
            "Counseling Program Developer",
            "Psychologist"
        ]
    },
    {
        "name" : "Organization",
        "desc" : "Sort and manage information, tasks and items. Communicate clearly and efficiently and achieve goals on time.",
        "example_jobs" : [
            "Administrative Assistant",
            "Office Manager",
            "Professional Organizer"
        ]
    },
    {
        "name" : "Planning",
        "desc" : "Delegate responsibilities and break projects into manageable tasks.",
        "example_jobs" : [
            "Event Coordinator",
            "Financial Advisor",
            "Project Manager"
        ]
    },
    {
        "name" : "Public Relations",
        "desc" : "Help clients communicate effectively with the public by acting on their behalf to write press releases, design promotional materials, plan and implement campaigns, and help develop the client’s image and identity.",
        "example_jobs" : [
            "Event Planner",
            "Communications Specialist",
            "Community Relations Specialist"
        ]
    },
    {
        "name" : "Research and Development/Quality Assurance",
        "desc" : "Conduct studies, determine product specifications and develop new products or product enhancements. Inspect, analyze, test and measure various materials against quality standards.",
        "example_jobs" : [
            "Researcher",
            "Quality Assurance Analyst",
            "Tester"
        ]
    },
    {
        "name" : "Retail",
        "desc" : "Greet and assist customers, handle financial transactions, maintain knowledge of inventory and store policies, and ensure that products are stocked, organized and displayed appropriately.",
        "example_jobs" : [
            "Cashier",
            "Customer Service Clerk",
            "Assistant Manager",
            "Stocker/Merchandiser"
        ]
    },
    {
        "name" : "Sales",
        "desc" : "Establish relationships with potential clients, manage relationships with clients, determine client needs and wants, manage accounts and records and complete sales transactions.",
        "example_jobs" : [
            "Sales Representative",
            "Account Manager",
            "Sales Executive"
        ]
    },
    {
        "name" : "Teaching/Training",
        "desc" : "Communicate and work with students to facilitate and empower learning. Plan, organize and deliver lessons and excel in interpersonal relationships with students, parents and administrators.",
        "example_jobs" : [
            "Teacher",
            "Teaching Assistant",
            "Trainer",
            "Library Assistant"
        ]
    },
    {
        "name" : "Transportation",
        "desc" : "Operate and manage vehicles to transport passengers and products in a safe, efficient and lawful manner. Record time and mileage and keep informed of schedules, routes and traffic.",
        "example_jobs" : [
            "Truck Driver",
            "Bus Driver",
            "Logistics Coordinator",
            "Mechanic"
        ]
    },
    {
        "name" : "Volunteer Management",
        "desc" : "Screen, train, organize, schedule and evaluate volunteers. Help fulfill the needs of the organization through developing volunteer programs and policies.",
        "example_jobs" : [
            "Volunteer Coordinator",
            "Volunteer Activity Coordinator"
        ]
    },
    {
        "name" : "Youth Support",
        "desc" : "Interact with children and teens to help them solve problems, make healthy choices and prepare for the future. Develop and implement youth activities and outings and assess the progress of each participant.",
        "example_jobs" : [
            "Youth Mentor",
            "Youth Minister",
            "Youth Counselor",
            "Youth Services Coordinator",
            "Youth Coach"
        ]
    }
];

var volunteer_experience = {
    "ARMY" : {
        "Army Community Service Volunteer" : [
            "Assisted in recruitment and retention efforts including outreach within the community and industrial locations for volunteers at Community Service Center.",
            "Demonstrated leadership in delivering exemplary customer service at Community Service Center.",
            "Answered phone calls and inquiries about Community Service Center in a professional manner."
        ],
        "Army Family Team Building (AFTB) Volunteer Program Manager" : [
            "Served as lead volunteer to program manager in administration and management of the Army Family Team Building program.",
            "Served as spokesperson to the community about the Army Family Team Building program.",
            "Trained, recruited and scheduled volunteers to serve as instructors for the Army Family Team Building program."
        ],
        "Army Family Team Building (AFTB) Advisor" : [
            "Served as liaison between the command and the Army Family Team Building program.",
            "Promoted the concept of the Army Family Team Building program to the community and elsewhere.",
            "Served as an advisor to the Army Family Team Building program Advisory Council."
        ],
        "Army Family Team Building (AFTB) Newsletter Coordinator" : [
            "Gathered program-specific content for inclusion in Army Family Team Building newsletter.",
            "Produced an Army Family Team Building newsletter that is informative, accurate and up-to-date.",
            "Assured Army Family Team Building newsletter is provided to military community at large."
        ],
        "Army Family Team Building (AFTB) Marketing and Publicity Coordinator" : [
            "Coordinated marketing with Army Family Team Building newsletter production coordinator.",
            "Ensured that the marketing and publicity needs of the Army Family Team Building program are met."
        ],
        "Army Family Team Building (AFTB) Inventory Coordinator" : [
            "Ensured the availability of materials by maintaining a current inventory of supplies was on hand for the Army Family Team Building program.",
            "Assisted the program manager by providing the inventory and recommended list of materials and supplies for the Army Family Team Building program.",
            "Communicated anticipated needs to key Army Family Team Building personnel."
        ],
        "Army Family Team Building (AFTB) Logistics Coordinator" : [
            "Ensured all training materials, equipment and student handouts were readily available for scheduled classes with the Army Family Team Building program.",
            "Set up classrooms and verified instructor availability for the Army Family Team Building program."
        ],
        "Army Family Team Building (AFTB) Resource Coordinator" : [
            "Coordinated community resources used in Army Family Team Building classes.",
            "Verified resource availability in advance of Army Family Team Building classes."
        ],
        "Army Family Team Building (AFTB) Professional Development Coordinator" : [
            "Ensured quality instruction and ongoing professional development was offered to all instructors, master trainers and staff with Army Family Team Building program.",
            "Scheduled all continuing education training activities for Army Family Team Building in a timely manner."
        ],
        "Army Family Team Building (AFTB) Volunteer Office Assistant" : [
            "Scheduled activities of volunteers with Army Family Team Building responsibilities.",
            "Answered phones and met with community members to discuss concerns or complaints for the Army Family Team Building program.",
            "Assisted the Army Family Team Building office with administrative duties, scheduled appointments and helped prepare budget."
        ],
        "Army Family Team Building (AFTB) Instructor" : [
            "Trained members of the Army Family Team Building program on established AFTB curriculum.",
            "Marketed Army Family Team Building program and members in a positive manner to the military community.",
            "Attended Army Community Service Instructor Training course and orientation.",
            "Possessed knowledge and actively participated in the Army Family Team Building program.",
            "Assisted Army Family Team Building leadership whenever necessary to ensure program effectiveness."
        ],
        "Mobilization/Deployment Readiness Program Volunteer" : [
            "Assisted individual readiness of unit throughout the entire mobilization/deployment cycle.",
            "Provided guidance, resources and training for mobilization/deployment for soldiers, civilians and their families.",
            "Delivered pre-mobilization/deployment information and materials to soldiers, civilians and their families."
        ],
        "Army Emergency Relief Volunteer" : [
            "Assisted with processing emergency relief funds strictly for military designees.",
            "Evaluated and determined validity of need of Army emergency relief.",
            "Advocated emergency relief funds for soldiers or families when indicated for food, rent, utilities, emergency transportation and funeral expenses."
        ],
        "Army Family Action Plan Volunteer" : [
            "Provided input from the Army Family Team Building program regarding significant quality of life issues that affect the Army family.",
            "Alerted Army leadership on areas of concern that need attention via the Army Family Action Plan.",
            "Specified information on needed development of other Army Family Action Plan programs."
        ],
        "Exceptional Family Member Program Volunteer" : [
            "Assisted Army family members who enrolled in Exceptional Family Member Program.",
            "Worked with command to find medical, emotional and educational services for Exceptional Family Members.",
            "Worked with relocating soldiers where services for Exceptional Family Members are available."
        ],
        "Family Advocacy Program Volunteer" : [
            "Provided spousal and child abuse prevention, education, reporting, intervention and treatment for Family Advocacy Program members.",
            "Coordinated with outside agencies as family advocate to provide families with transportation to court, physician visits, counseling and legal appointments to improve the quality of life for family members."
        ],
        "New Parent Support Program Volunteer" : [
            "Lead person for New Parent Support Program that provides items critical to the support of new mothers and newborns.",
            "Worked with medical social workers and New Parent Support Program to select and distribute resources to new military parents with family or financial needs.",
            "Provided community outreach to vendors to replenish new-mother items for the New Parent Support Program such as layettes, diapers, wet wipes, pack-and-play cribs, formula and play gyms.",
            "Analyzed and reviewed policies and procedures for the New Parent Support Program to ensure and preserve the dignity of the new mother and the welfare of the newborn.",
            "Worked under supervision of New Parent Support Program provider who valued my judgment and expertise as a maternity ward registered nurse."
        ],
        "Relocation Readiness Program Volunteer" : [
            "Provided information and assistance to military personnel and their families as they relocate from one community to another.",
            "Arranged in lending beds, roll-away beds, car seats, TVs, microwaves and various kitchen appliances to borrow for preparation of relocation.",
            "Provided relocation assistance and other information including maps and phone directories through Relocation Readiness Program."
        ],
        "Cultural Awareness Program Volunteer" : [
            "Provided assistance to generate intended outcomes of the Multicultural Awareness Program.",
            "Exceeded goals of increased multicultural diversity throughout the Army in all areas for Multicultural Awareness Program.",
            "Transferred concepts and applied multicultural concepts and practices to work environments via the Multicultural Awareness Program.",
            "Improved ability to retain a diverse workforce."
        ],
        "Soldier and Family Assistance Center Volunteer" : [
            "Provided referral services for family assistance and access to myriad mental health professionals in communities in close proximity to where families live.",
            "Referred military personnel and their family members to wellness centers, life skills education centers and counseling services.",
            "Provided reception services and a general orientation on the services available.",
            "Conducted initial intake, made referrals and maintained resource listings on services provided in local communities.",
            "Provided comprehensive prevention education, intervention, information and referral assistance for social services (substance abuse, suicide prevention, stress and anger management, and post-traumatic stress disorder.",
            "Provided prevention and education classes, credit management, budget development, consumer information and awareness, financial counseling and assistance, emergency financial assistance in the form of loans or grants, and other monetary assistance for undergraduate education of dependent children.",
            "Provided one-on-one personalized service in the preparation of documents for active duty soldiers to file for disability benefits as a result of a physical and/or mental disability.",
            "Provided legal assistance services, e.g., powers of attorney, Traumatic Servicemembers’ Group Life Insurance program, notary services, wills and estates, and claims processing."
        ],
        "Survivor Outreach Services (SOS) Benefits Coordinator" : [
            "Communicated with Survivor Outreach Services financial counselors, support coordinators and other benefits coordinators to deliver financial, medical and legal support to surviving family members.",
            "Provided expertise and advice through Survivor Outreach Services to surviving families on local, state and federal benefits.",
            "Coordinated with casualty assistance officers to provide surviving family members with assistance to understand and apply for benefits through Survivor Outreach Services."
        ],
        "Survivor Outreach Services (SOS) Financial Counselor" : [
            "Worked directly with surviving families on financial management, investments and estate planning, and education through Survivor Outreach Services.",
            "Worked closely with benefits coordinators, Army Long-Term Family case managers and legal representatives to assist surviving families through Survivor Outreach Services."
        ],
        "Survivor Outreach Services (SOS) Support Coordinators" : [
            "Functioned as short- and long-term support personnel for surviving families through Survivor Outreach Services.",
            "Facilitated support groups, provided life skills education and provided counseling resources for surviving families through Survivor Outreach Services.",
            "Worked closely with benefits coordinators, casualty assistance officers and Army Long-Term Family case managers to ensure surviving family members received all appropriate and entitled benefits through Survivor Outreach Services."
        ],
        "Casualty Response (CARE) Team Volunteer" : [
            "Answered, screened and logged phone calls and visitors as a member of the Casualty Response Team.",
            "Provided direction and helped with household matters as a member of the Casualty Response Team.",
            "Arranged, organized and assisted with meal support through the Casualty Response Team.",
            "Assisted with children’s needs through the Casualty Response Team.",
            "Kept a log of military families’ questions for the casualty assistance officer.",
            "Provided access to installation, lodging and/or transportation for incoming family and friends as needed.",
            "Provided supportive, unobtrusive, patient, kind and understanding assistance to military family members through the Casualty Response Team."
        ],
        "Financial Readiness Program Volunteer" : [
            "Provided financial assistance, education and advocacy for active duty and retired military personnel and their family members.",
            "Advocated for military personnel and their family members against fraud, scams and consumer complaints.",
            "Prescreen military family members for Family Subsistence Supplemental Allowance (FSSA) program eligibility.",
            "Provided financial tools and expertise to help military personnel and their families live within their means, save money and invest for the future."
        ],
        "Employment Readiness Program Volunteer" : [
            "Provided employment support services including career counseling, resume and application assistance, and information on employment and volunteer opportunities to military personnel and their families.",
            "Trained military personnel and their families in promoting themselves, as well as interviewing, searching for and applying for jobs."
        ],
        "Professional Boutique Volunteer" : [
            "Provided military spouses seeking employment or going to a job interview with new or gently worn professional attire.",
            "Reviewed, sorted and evaluated donated Professional Boutique clothing for appropriateness.",
            "Provided administrative support in the Professional Boutique office including organizing merchandise, planning events and providing exceptional customer service."
        ],
        "Family Readiness Group (FRG) Unit Commander" : [
            "Established and supported a unit Family Readiness Group.",
            "Appointed, in writing, Family Readiness Group leaders or co-leaders, as well as treasurers and alternates.",
            "Provided support to Family Readiness Group leaders and supervised their efforts toward family readiness goals.",
            "Delegated authority to Family Readiness Group (FRG) leaders to organize and operate the unit FRG.",
            "Provided APF resources, as available, to help fund official Family Readiness Group activities."
        ],
        "Family Readiness Group (FRG) First Sergeant" : [
            "Reviewed family readiness plan.",
            "Assisted commander and Family Readiness Group leaders with drafting and implementing family readiness plan.",
            "Provided current information regarding new soldiers and families to Family Readiness Group leaders.",
            "Worked with Family Readiness Group leadership and commanders to establish and enforce behavioral norms for soldiers.",
            "Assisted commander and Family Readiness Group leaders with getting soldiers and families trained and prepared for deployments."
        ],
        "Family Readiness Group (FRG) Command Sergeant Major" : [
            "Reviewed family readiness plan.",
            "Assisted commander and Family Readiness Group leaders with drafting and implementing family readiness plan.",
            "Provided current information regarding new soldiers and families to Family Readiness Group leaders.",
            "Worked with Family Readiness Group leadership and commanders to establish and enforce behavioral norms for soldiers.",
            "Assisted commander and Family Readiness Group leaders with getting soldiers and families trained and prepared for deployments."
        ],
        "Family Readiness Group (FRG) Leader" : [
            "Provided leadership to the Family Readiness Group efforts.",
            "Supported the commander's family readiness goals.",
            "Provided overall leadership of the Family Readiness Group.",
            "Recruited and directed other volunteers to serve on Family Readiness Group committees.",
            "Served as a member of the battalion-level steering committee."
        ],
        "Family Readiness Group (FRG) Assistant" : [
            "Provided information and referrals to the appropriate installations/community resources for families who needed assistance.",
            "Scheduled and coordinated training for other volunteers of the Family Readiness Group.",
            "Provided assistance with the preparation of pre-deployment, sustainment and reunion activities.",
            "Assisted with Family Readiness Group newsletters and websites."
        ],
        "Family Readiness Group (FRG) Key Caller" : [
            "Welcomed new families assigned to points’ of contact phone tree branches.",
            "Started call tree for each of the assigned families on a point of contact phone tree branch; reported any discrepancies in the information on the list.",
            "Called spouses occasionally when troops were in garrison and twice monthly during deployments.",
            "Fielded emergency calls and assisted the families involved."
        ],
        "Family Readiness Group (FRG) Treasurer" : [
            "Maintained Family Readiness Group fund records and ledger; kept it up-to-date at all times.",
            "Disbursed checks in accordance with Family Readiness Group leader’s and commander's guidance.",
            "Reviewed statements and reconciled with Family Readiness Group ledger.",
            "Prepared monthly reports and presented them to Family Readiness Group leader."
        ],
        "Battalion Family Readiness Group Advisory/Leader" : [
            "Supported the commander’s family readiness goals.",
            "Served on battalion Family Readiness Group steering committee.",
            "Provided guidance and support to all unit Family Readiness Group leaders.",
            "Delegated Family Readiness Group projects to senior spouses for resolution.",
            "Acted as liaison between battalion- and unit-level Family Readiness Groups."
        ],
        "Family Readiness Group (FRG) Rear Detachment Officer" : [
            "Performed duties as unit commander.",
            "Maintained regular contact with unit commander at mission location.",
            "Ensured that Family Readiness Group members had opportunities to maintain contact with deployed soldiers.",
            "Coordinated with the American Red Cross regarding emergency information on unit soldiers and family members.",
            "In conjunction with Family Readiness Group leader and family readiness liaison, prepared and submitted Weekly Family Readiness Situation Report."
        ],
        "Family Readiness Group (FRG) Family Readiness Liaison" : [
            "Served as link between command and families, soldiers and service providers.",
            "Coordinated pre-deployment briefings.",
            "Ensured families and soldiers were referred for financial counseling, family advocacy and other services as needed.",
            "Served as the link between the Family Readiness Group and the commander."
        ],
        "Family Readiness Group (FRG) Secretary" : [
            "Maintained accurate meeting minutes and distributed information and correspondence to the Family Readiness Group leader and newsletter editor.",
            "Compiled and maintained essential Family Readiness Group documentation including event calendar, sign-in sheets, reports, and meeting agendas and minutes.",
            "Updated the contact roster with telephone numbers of new arrivals and reported changes to the Family Readiness Group leader."
        ],
        "Family Readiness Group (FRG) Newsletter Editor" : [
            "Determined ground rules for official Family Readiness Group newsletters.",
            "Organized a volunteer newsletter staff consisting of reporters, writers, editors, typists, illustrators, collators and mailers.",
            "Coordinated newsletter preparation, publishing and distribution.",
            "Designed Family Readiness Group newsletter logo and layout and solicited input from Family Readiness Group members.",
            "Gathered, organized, wrote and edited content for Family Readiness Group newsletter."
        ],
        "Family Readiness Group (FRG) Special Events Chairperson" : [
            "Planned, organized and executed Family Readiness Group activities and special events.",
            "Recruited and trained volunteers to help with Family Readiness Group event details.",
            "Solicited Family Readiness Group members for event ideas and interests and established event committees to brainstorm upcoming needs.",
            "Coordinated with publicity and newsletter chairpersons to advertise and promote special Family Readiness Group events."
        ],
        "Family Readiness Group (FRG) Hospitality/Welcome Chairperson" : [
            "Contacted and welcomed all new soldiers and families to the military unit by helping them find needed resources and ensuring that they were assigned sponsors and a phone tree point of contact.",
            "Kept up with news of incoming families, newly married couples, new babies, single soldiers, children, illnesses, injuries and hospitalizations in the military unit.",
            "Called new spouses and welcomed them to the military unit, invited them to upcoming Family Readiness Group events, and provided welcome materials."
        ],
        "Family Readiness Group (FRG) Publicity Chairperson" : [
            "Informed all soldiers and family members in the Family Readiness Group of all ongoing and upcoming activities and events.",
            "Coordinated with Family Readiness Group hospitality/welcome committee chairperson to learn of new military families’ addresses and phone numbers.",
            "Promoted and advertised Family Readiness Group events to military personnel and their families through various channels, including phone tree points of contact, newsletters, fliers, direct mail, announcements and bulletin boards.",
            "Coordinated with Family Readiness Group leader and special events chairperson to determine advertising and promotion needs for upcoming events."
        ],
        "Family Readiness Group (FRG) Childcare Chairperson" : [
            "Ensured that acceptable childcare was arranged for Family Readiness Group meetings and special events.",
            "Ensured that Family Readiness Group caregivers received the required training prior to their employment.",
            "Ensured that the Family Readiness Group childcare facility was appropriately staffed by qualified and trained caregivers and met all safety and sanitation standards.",
            "Provided adult supervision and appropriate activities for children during Family Readiness Group meetings and special events."
        ],
        "Family Readiness Group (FRG) Phone Tree Chairperson" : [
            "Created, organized and maintained the unit Family Readiness Group phone tree and email list.",
            "Recruited, trained and assigned Family Readiness Group phone tree points of contact for the entire military unit.",
            "Prepared monthly reports on phone tree performance and effectiveness for Family Readiness Group leader.",
            "Maintained accurate, detailed records of all Family Readiness Group phone tree calls received and made as well as their results, while maintaining confidentiality and integrity of information."
        ],
        "Family Readiness Group (FRG) Family Sponsorship Coordinator" : [
            "Coordinated with Family Readiness Group leader and other appropriate individuals to prepare postings on military unit activities, announcements and education information for families.",
            "Matched each incoming military family with an existing family for mutual support and assistance through the Family Readiness Group.",
            "Notified the Family Readiness Group leader of a military family’s problems or needs that were discovered through communication or observation.",
            "Functioned as an essential communication link between new military families of the unit and the Family Readiness Group to address the family’s problems, needs, concerns and questions."
        ],
        "Family Readiness Group (FRG) Fundraiser Chairperson" : [
            "Coordinated with Family Readiness Group leader and special events coordinator on upcoming events and financial needs.",
            "Managed internal Family Readiness Group fundraising activities and funds and canvassed membership about types of fundraisers preferred.",
            "Planned all aspects of Family Readiness Group fundraiser and recruited and trained volunteers to help manage the event.",
            "Supervised all aspects of Family Readiness Group fundraisers, safeguarded funds and securely delivered funds raises to treasurer.",
            "Reported to Family Readiness Group leader and membership on attendance and performance results of fundraisers."
        ],
        "Family Readiness Group (FRG) Phone Tree Point of Contact" : [
            "Maintained accurate, detailed records of all Family Readiness Group phone tree calls received and made as well as their results, while maintaining confidentiality and integrity of information.",
            "Called each military family on assigned phone tree branch to communicate important information as needed and solicit military spouse questions and concerns twice monthly during deployments.",
            "Responded to calls from military families on assigned phone tree branch concerning questions, serious matters and emergencies.",
            "Helped maintain the accuracy of the phone tree and email list by reporting changes or discrepancies to the Family Readiness Group phone tree chairperson."
        ],
        "Family Readiness Group (FRG) State Volunteer Representative" : [
            "Coordinated military family member volunteer efforts through the Family Readiness Group.",
            "Kept abreast of both civilian and military readiness services available throughout the state for the Family Readiness Group and shared ideas with volunteers from other states.",
            "Assisted in management and coordination of family member briefings and special events for the Family Readiness Group.",
            "Represented all Family Readiness Group volunteers at local, regional and national workshops and conferences. "
        ],
        "Family Readiness Group (FRG) State Family Program Council Member" : [
            "Communicated Family Readiness Group military family member concerns to state leadership and advocated for appropriate action.",
            "Reviewed, commented on and made recommendations for the effectiveness of Army family programs through the Family Readiness Group.",
            "Actively participated in the strategic planning process for Army family programs through the Family Readiness Group and helped gain approval for special projects and events."
        ],
    },

    "COAST GUARD" : {
        "Coast Guard Island Tour Guide" : [
            "Recruited and scheduled personnel to give Coast Guard Island tours.",
            "Conducted informative tours of base and cutter and included demonstrations of sea rescue."
        ],
        "Coast Guard Auxiliary Volunteer" : [
            "Conducted recreational boating safety classes and provided vessel safety checks for Coast Guard Auxiliary.",
            "Conducted Coast Guard Auxiliary operations and marine safety missions in local area.",
            "As a member of the Coast Guard Auxiliary, supported local boating activities such as regattas, fireworks and fleet visits.",
            "Provided mission support in website design, computer services and public relations under Coast Guard Auxiliary."
        ],
        "Coast Guard Auxiliary Navigation Systems Volunteer" : [
            "Supported Coast Guard navigation systems through expert use of all facilities and equipment including vessels, aircraft and radios.",
            "Verified position and characteristics of Private Aids to Navigation (PATON) for the Coast Guard Auxiliary.",
            "Assisted and supported Aids to Navigation (ATON) units in servicing federal aids after receiving proper Coast Guard training.",
            "Assisted the National Ocean Service (NOS) and the U.S. Army Corps of Engineers in updating nautical and aeronautical charts as well as other related publications through the Coast Guard Auxiliary."
        ],
        "Coast Guard Auxiliary Bridge Administration Volunteer" : [
            "Supported and augmented bridge surveys by performing regular checks and reports of bridge safety equipment, lighting and fendering systems, and signage via the Coast Guard Auxiliary.",
            "Investigated and provided information regarding waterways safety and navigation situations pertaining to the Coast Guard Auxiliary Bridge Administration program.",
            "Provided direct assistance and support to Coast Guard Auxiliary Bridge Administration staff and other Coast Guard personnel."
        ],
        "Coast Guard Auxiliary Contingency Preparedness Volunteer" : [
            "Planned, organized and participated in Coast Guard Auxiliary contingency preparedness exercises, which train participants to gain control over crisis response in the shortest possible time and transition from a reactive operational posture to a proactive response.",
            "Provided support as Coast Guard Auxiliary unarmed opposition forces (OPFOR) and gathered information and data for contingency plans.",
            "Developed plans for and supported Coast Guard contingency response operations for military emergencies, natural disasters and other incidents."
        ],
        "Coast Guard Auxiliary Licensing of Merchant Mariners Volunteer" : [
            "Administered merchant mariner licenses and documented examinations through the Coast Guard Auxiliary.",
            "Oversaw approved maritime training courses for the Coast Guard Auxiliary.",
            "Provided administrative support for the local Coast Guard Auxiliary marine licensing program."
        ],
        "Coast Guard Auxiliary Marine Safety and Environmental Protection Volunteer" : [
            "Assisted in marine safety and environmental protection activities and events with the Coast Guard Auxiliary.",
            "Taught various expert-level courses on marine safety and environmental protection for the Coast Guard Auxiliary.",
            "Supported numerous pollution prevention activities and events through the Coast Guard Auxiliary.",
            "Provided operational support for environmental disaster relief through the Coast Guard Auxiliary."
        ],
        "Coast Guard Auxiliary Port Safety and Security Volunteer" : [
            "Performed harbor and anchorage patrols for the Coast Guard Auxiliary.",
            "Educated and advised boaters regarding safety and security zone enforcement for the Coast Guard Auxiliary.",
            "Provided support for low-risk armed/unarmed vessel boardings through the Coast Guard Auxiliary.",
            "Performed port facility and vessel verification visits for the Coast Guard Auxiliary.",
            "Performed thorough and frequent aircraft overflights for the Coast Guard Auxiliary.",
            "Serviced and repaired buoys and discrepancy buoys through the Coast Guard Auxiliary."
        ],
        "Coast Guard Auxiliary Public Affairs Support Volunteer" : [
            "Assisted Coast Guard Public Affairs in providing direct support, advice and counsel to Coast Guard leadership on media interest and reactions regarding Coast Guard activities.",
            "Helped develop and supplement plans for fostering public and internal knowledge, understanding, confidence and good will respecting the Coast Guard and its activities.",
            "Gathered newsworthy stories from local Coast Guard Auxiliary members, produced news releases, prepared feature articles and managed a biweekly electronic Coast Guard Auxiliary newsletter."
        ],
        "Coast Guard Auxiliary Recreational Boating Safety Volunteer" : [
            "Performed recreational vessel safety checks (VSCs).",
            "Participated in boat shows and National Safe Boating Week (NSBW) activities such as boating safety booths, vessel safety check blitzes and demonstrations to increase public awareness of safe boating practices.",
            "Provides expert boating safety information to marine dealers and customers.",
            "Trained and instructed the public via Coast Guard Auxiliary classes and activities to yield safe, well-trained boaters."
        ],
        "Coast Guard Auxiliary Recruiter" : [
            "Supported Coast Guard recruiting efforts by proctoring recruiting exams and providing administrative support to recruiting offices.",
            "Earned qualification as military recruiter."
        ],
        "Coast Guard Auxiliary Search and Rescue Volunteer" : [
            "Assisted Coast Guard in all aspects of search and rescue planning and operations.",
            "Conducted rescues quickly and effectively in navigable and sole state waters for the Coast Guard Auxiliary.",
            "Performed all distress monitoring responsibilities for designated search and rescue region for the Coast Guard Auxiliary."
        ],
        "Coast Guard Auxiliary Vessel Inspections/Examinations Volunteer" : [
            "Supported and assisted Coast Guard accident investigations.",
            "Conducted vessel inspections for the Coast Guard Auxiliary.",
            "Provided remote-area surveillance and response through the Coast Guard Auxiliary.",
            "Conducted voluntary examinations of uninspected passenger, towing and commercial fishing vessels for the Coast Guard Auxiliary."
        ],
        "Coast Guard Auxiliary Marine Transportation Systems Volunteer" : [
            "Provided platforms and unarmed personnel for Coast Guard and other federal and state agencies.",
            "Provided information and input into the waterway analysis process.",
            "Assisted developing and implementing regulations for the prevention of vessel collisions and grounding for the Coast Guard Auxiliary.",
            "Located, identified and classified abandoned vessels through the Coast Guard Auxiliary."
        ],
        "Coast Guard Ombudsman" : [
            "Served as a liaison between Coast Guard leadership and 50 military family members.",
            "Advanced Coast Guard objectives by determining and providing appropriate information referral and services to targeted audience members.",
            "Conducted proactive outreach, rapport development and multifaceted communication efforts to facilitate meaningful two-way information flow between the Coast Guard leadership and its families.",
            "Advanced leadership objectives by determining and providing appropriate information referral and services to targeted members of the Coast Guard."
        ],
        "Partnership in Education (PIE) Advocacy/Advisory Programs Volunteer" : [
            "Developed Partnership in Education (PIE) programs to increase volunteerism in schools with police departments, fire departments and community businesses.",
            "Advised on special projects for Partnership in Education (PIE) programs such as science fairs, festivals and computer literacy.",
            "Served on advisory committees for Partnership in Education (PIE) programs for programs such as school beautification, English as a second language and fitness.",
            "Advised the Partnership in Education (PIE) curriculum committee for specific classroom initiatives including English as a second language, literacy, and science, technology, engineering and math (STEM)."
        ],
        "Partnership in Education (PIE) Instructional Support Programs Volunteer" : [
            "With youth education programs, provided tutorial services, in-classroom presentations and guest instructors.",
            "Encouraged and assisted with instruction in science, technology, engineering and math (STEM) via youth education programs.",
            "Coordinated with the Speakers Bureau to promote interest in youth education programs.",
            "Through youth education programs, developed mentoring programs for at-risk students."
        ],
        "Partnership in Education (PIE) Enrichment Programs Volunteer" : [
            "Trained students to improve individual study skills and participate in healthy leisure activities.",
            "Created online, interactive lessons for students and staff.",
            "Developed and encouraged extracurricular clubs for math, computers, marine science, boating safety, etc."
        ],
        "Partnership in Education (PIE) Extended Service Programs Volunteer" : [
            "Discussed career opportunities through youth education programs.",
            "Offered job shadowing techniques and experiences with community employers to provide work exposure.",
            "Assisted in employment/training, job opportunities and resume writing."
        ],
    },
    "MARINE CORPS" : {
        "Family Readiness Program (FRP) Senior Enlisted Spouse" : [
            "Listened actively to and assisted military unit families, especially spouses.",
            "Elevated issues and problems concerning military families and community well-being to senior leadership.",
            "Fostered a sense of community within the military unit, supported initiatives that bolstered socialization of military families, and encouraged military families to be good neighbors.",
            "Directed military families to existing support systems and encouraged a positive and resilient attitude among military spouses.",
            "Shared ideas, best practices and successes with other military spouses and family members."
        ],
        "Family Readiness Program (FRP) Command Team Advisor" : [
            "Contributed content to Family Readiness Program communications and assisted in development of military unit communication strategies.",
            "Participated in Family Readiness Program event planning and assessments and recommended initiatives and actions necessary for military family and unit well-being.",
            "Supported and attended Family Readiness Program functions such as pre-deployment briefs, family days, and return and reunion briefs.",
            "Embodied the unit commander’s vision and intent for the Family Readiness Program and supported Marines and their families to increase family readiness and improve quality of life within the unit.",
            "Spoke to, shared experiences with and provided motivation for Marines and families at unit functions or events on behalf of the Family Readiness Program."
        ],
        "Family Readiness Program (FRP) Family Readiness Assistant" : [
            "Assisted Family Readiness Program leadership in welcoming new military families to the unit.",
            "Collected and provided feedback from military unit families to Family Readiness Program (FRP) leadership concerning the quality of communication and overall effectiveness of FRP events and initiatives.",
            "Supported and attended Family Readiness Program functions such as pre-deployment briefs, family days, and return and reunion briefs.",
            "Fielded calls from military family members to provide information about Family Readiness Program events and announcements as well as available support resources and services.",
            "Assisted military families with referrals through the Family Readiness Program by explaining in detail the agency or service, providing any needed documentation and describing the entire process from application to delivery of service."
        ],
        "Family Readiness Program Volunteer" : [
            "Assisted with the planning, coordination and execution of various Family Readiness Program events such as unit training, unit family readiness, morale support, unit family days and deployment events.",
            "Remained on call for short-term assistance at various Family Readiness Program events such as unit training, unit family readiness, morale support, unit family days and deployment events."
        ],
        "Family Readiness Officer (FRO)" : [
            "Conducted proactive outreach, rapport development and multifaceted communication efforts to facilitate meaningful two-way communication between organizational leadership and community members (service members’ families).",
            "Managed a staff of five Family Readiness staff members; motivated team to successfully support community members.",
            "Trained and prepared Marines and their families in life skills and stress management strategies.",
            "Developed and implemented a strategic communication program to ensure effective communication between organizational leadership and community.",
            "Planned and executed meetings, social events and philanthropic initiatives resulting in high levels of community engagement during six-month deployments."
        ],
        "L.I.N.K.S. Spouses/Couples Mentor" : [
            "Mentored other military spouses through one-on-one guidance and small-group discussion.",
            "Welcomed new military spouses to the Marine Corps family and facilitated networking among other military families.",
            "Assisted other military spouses and couples in meeting challenges and navigating the number of resources available to them."
        ],
        "L.I.N.K.S. Marines Mentor" : [
            "Mentored Marines through one-on-one guidance and small-group discussion.",
            "Assisted Marines in discovering the resources, services and benefits available on base.",
            "Mentored and trained Marines on separations and deployments and how to plan for reunions with family.",
            "Provided valuable financial and logistical advice to Marines as they and their families planned to relocate."
        ],
        "L.I.N.K.S. Kids/Teens Mentor" : [
            "Instructed children aged 5–17 on Marine Corps history, traditions and resources.",
            "Mentored children of Marines to assist them in making new friends on base and discovering their unique advantages and opportunities.",
            "Helped children of Marines better understand the dynamics of deployment and reunion with family.",
            "Counseled children of Marines on how to identify stressors and avoid unneeded stress."
        ],
        "L.I.N.K.S. Parents/Extended Family Members Mentor" : [
            "Presented interactive workshop to welcome parents and extended family members of Marines to the military lifestyle.",
            "Provided in-depth instruction to parents and extended family members of Marines concerning Marine Corps culture and support resources."
        ],
        "Morale Support Volunteer" : [
            "Worked as part of a team to plan and foster personal connections between the USMC and its targeted audience, increasing cohesion and facilitating feedback.",
            "Advanced leadership objectives by providing quality support and customer service through accurate and timely information as well as referral services to target audience members.",
            "Planned and executed meetings, social events and philanthropic initiatives resulting in high levels of community engagement during deployments."
        ],
        "Navy–Marine Corps Relief Society (NMCRS) Hospital Volunteer" : [
            "Worked with and supported hospitalized patients and their families.",
            "Helped create a positive atmosphere for hospitalized patients through service, companionship and kindness."
        ],
        "Navy–Marine Corps Relief Society (NMCRS) Budget for Baby Instructor" : [
            "Provided formal instruction as Budget for Baby instructor to military personnel and their families on planning for the cost of having a child.",
            "Organized schedules, assembled supplies and acted as classroom aide for Budget for Baby classes for military personnel and their families."
        ],
        "Navy–Marine Corps Relief Society (NMCRS) Layette Assembler" : [
            "Provided community outreach to vendors to replenish inventory of new-mother items such as layettes, diapers, wet wipes and formula.",
            "Assembled “Baby’s First Seabag” gifts for distribution to expectant military personnel and their families."
        ],
        "Navy–Marine Corps Relief Society (NMCRS) Coupon Sorter" : [
            "Collected and sorted all expired coupons from the states  and distributed them to military families.",
            "Instructed military personnel and their families on how to use expired coupons at the base commissary."
        ],
        "Navy–Marine Corps Relief Society (NMCRS) Knitter/Crocheter" : [
            "Organized volunteers who knit and crochet to create baby blankets for expectant military families.",
            "Knitted/crocheted baby blankets to be included in the “Baby’s First Seabag” gifts distributed to expectant military families. "
        ],
        "Navy–Marine Corps Relief Society (NMCRS) Volunteer Caseworker" : [
            "Served as caseworker to help military personnel and their families assess their needs, locate support and educational resources, and apply for services.",
            "Counseled military personnel and their families on creating and adhering to budgets and making wise financial decisions.",
            "Used various problem-solving techniques to help military personnel and their families discover alternate solutions to presented problems.",
            "Used specialized, extensive knowledge to refer military personnel and their families to community resources and other professional services to help solve their unique problems.",
            "Completed all paperwork for various interest-free loans and grants for military personnel and their families to help meet needs such as rent, food, vehicle repairs, medical bills and funeral expenses."
        ],
        "Navy–Marine Corps Relief Society (NMCRS) Volunteer Receptionist/Client Services Assistant" : [
            "Managed reception desk for military service organization, answering phones, responding to general questions and directing clients to appropriate services and resources.",
            "Greeted military personnel and their families and assisted them with completing interview paperwork and scheduling casework appointments and classes.",
            "Assisted military personnel and their families with basic loans and Quick Assist Loans up to $500 to help meet needs such as rent, food, vehicle repairs, medical bills and funeral expenses.",
            "Remained professional, objective and calm in a fast-paced environment that provided various services to military personnel and their families."
        ],
        "Navy–Marine Corps Relief Society (NMCRS) Thrift Shop Merchandising Associate/Thrift Shop Volunteer" : [
            "Managed many retail aspects of store operations and customer service at the Navy–Marine Corps Relief Society (NMCRS) thrift shop.",
            "Inventoried, selected and displayed Navy–Marine Corps Relief Society (NMCRS) thrift shop merchandise in most favorable and trafficked areas.",
            "Planned regular encounters with consumers to assist in item selection and solve problems at the Navy–Marine Corps Relief Society (NMCRS) thrift shop.",
            "Priced and marked down Navy–Marine Corps Relief Society (NMCRS) thrift shop merchandise in order to turn inventory.",
            "Exhibited superior customer service while operating cash register at the Navy–Marine Corps Relief Society (NMCRS) thrift shop."
        ],
        "Single Marine and Sailor Program (SMSP) Volunteer" : [
            "Provided direction and oversight to the Single Marine and Sailor Program.",
            "Conducted activities to improve quality of life, encourage community interaction and enhance recreational opportunities.",
            "Provided training for staff members who work with the Single Marine and Sailor Program.",
            "Attended and completed world-class customer service training."
        ],
        "Toys for Tots Volunteer" : [
            "Provided logistical support, collaborated with transportation teams and managed inventory storage for Toys for Tots.",
            "Organized, sorted and packaged large amounts of donated gifts for Toys for Tots",
            "Planned, organized and conducted all aspects of local Toys for Tots campaigns."
        ],
    },

    "NAVY" : {
        "Deployment Readiness Volunteer" : [
            "Assisted military families with practical preparation such as wills, powers of attorney and updated contact information for Deployment Readiness program.",
            "Arranged and addressed financial readiness issues for military families such as budgeting, allotments and credit card limits in preparation of deployment.",
            "Guided personal preparation for deployment for military families, including education or training plans.",
            "Counseled military families on emotional readiness, including an understanding of the emotional cycle of deployment and children's reactions to separation.",
            "Discussed deployment communication plans with military families.",
            "Provided mobilization/deployment readiness training, information and assistance to military personnel and their families.",
            "Assisted individual military family members throughout the entire deployment cycle."
        ],
        "Ombudsman Program Volunteer" : [
            "Served in the Ombudsman program as an information link between command leadership and Navy families.",
            "Trained to disseminate information both up and down the military chain of command through Ombudsman program.",
            "Relayed command information, command climate issues and local quality of life improvement opportunities to military families through Ombudsman program.",
            "Provided resource referrals when needed as Ombudsman.",
            "As Ombudsman, resolved military family issues before the issues required extensive command attention."
        ],
        "Transition Assistance Volunteer" : [
            "Helped military families in a transition assistance program to be better prepared for civilian life after military service.",
            "Helped translate military skills and experience into civilian workforce terms through transition assistance program.",
            "Provided financial planning referrals for military families through transition assistance program.",
            "Coordinated employment workshops for military families through transition assistance program.",
            "Assisted with federal and civilian job search techniques and resume writing for military personnel and their families through transition assistance program."
        ],
        "Family Employment Volunteer" : [
            "Provided employment readiness direction and employment services including employment/career counseling, and resume and federal application assistance.",
            "Provided information that allowed member to search job banks, job search engines and workshops, and role-played with member for interview skills.",
            "Directed spouses seeking additional resources to local nonmilitary business that allowed military family member to “shadow” one of the local employees."
        ],
        "Relocation Assistance Volunteer" : [
            "Provided information and assistance to military personnel and their families as they relocated from one community to another.",
            "Arranged in lending beds, rollaway beds, car seats, TVs, microwaves and various kitchen appliances for preparation of military family relocation.",
            "Provided relocation assistance and other information including maps and phone directories through Relocation Assistance Program."
        ],
        "Exceptional Family Member Volunteer" : [
            "Assisted Navy family member who is enrolled in Exceptional Family Member Program.",
            "Worked with command to find medical, emotional and educational services for exceptional military family member.",
            "Worked with relocating Sailor where services for exceptional family member are available."
        ],
        "Family Advocacy Program Volunteer" : [
            "Provided spousal and child abuse prevention, education, reporting, intervention and treatment for Family Advocacy program members.",
            "Coordinated with outside agencies as Family Advocate to provide families with transportation to courts, physician visits, counseling and lawyers to improve the quality of life of family member."
        ],
        "New Parent Support Volunteer" : [
            "Lead person for New Parent Support Program that provided items critical to support of the new mother and the newborn.",
            "Worked with Medical Social Worker and New Parent Support Program to select and distribute resources to those new parents with family or financial need.",
            "Provided community outreach to vendors to replenish new mother items such as layettes, diapers, wet wipes, pack-n-play cribs, formula and play gyms.",
            "Analyzed and reviewed policies and procedures for New Parent Support Program to ensure and preserve the dignity of the new mother and welfare of the newborn.",
            "Worked under supervision of New Parent Support Program provider who values my judgment and expertise as a maternity ward RN."
        ],
        "Clinical Counseling Volunteer" : [
            "Provided short-term, nonmedical clinical counseling and goal directed to military families.",
            "Focused on emotional reactions, situational difficulties resulting from deployments, separations, relocations and other stressors common to the military as clinical counseling volunteer."
        ],
        "Life Skills Volunteer" : [
            "Designed and implemented Life Skills programs to promote self-sufficiency for military families.",
            "Offered and taught military families basic life skills to prepare them for transition.",
            "Explained to military families how to manage finances, households and employment so they can maximize full potential."
        ],
        "Family Emergency Response Volunteer" : [
            "Provided insight to military families through the Family Emergency Response program regarding personal and family well-being.",
            "Embodied a desire to support military personnel and their families to increase family readiness and improve quality of life."
        ],
        "Navy Ombudsman" : [
            "Served as a liaison between Navy leadership and its members (military family members).",
            "Advanced Navy objectives by determining and providing appropriate information referral and services to targeted members of organization.",
            "Established and maintained a communication system ensuring accurate and timely dissemination of information for members of organization.",
            "Served as Navy representative on communitywide executive board requiring frequent interface and teamwork in order to achieve consensus among numerous and disparate stakeholders.",
            "Served as primary point of contact for emergency and crisis information for the Navy and community members."
        ],
        "Spouse Club President" : [
            "Conducted proactive outreach, rapport development and multifaceted communication efforts to facilitate a meaningful two-way information flow between the Spouse Club and its families.",
            "Provided leadership to a nonprofit organization by emphasizing teamwork, mutual respect and cooperation among a diverse membership.",
            "Planned and executed fundraising activities, including solicitation of community groups and businesses for financial and in-kind donations.",
            "Planned and executed meetings, social events and philanthropic initiatives resulting in high community and organizational engagement, enabling the successful deployment of personnel."
        ],
        "Spouse Club Vice President" : [
            "Conducted proactive outreach, rapport development and multifaceted communication efforts to facilitate a meaningful two-way information flow between the Spouse Club and its families.",
            "Provided leadership to a nonprofit organization by emphasizing teamwork, mutual respect and cooperation among a diverse membership.",
            "Planned and executed fundraising activities, including solicitation of community groups and businesses for financial and in-kind donations.",
            "Planned and executed meetings, social events and philanthropic initiatives resulting in high community and organizational engagement, enabling the successful deployment of personnel."
        ],
        "Navy–Marine Corps Relief Society (NMCRS) Hospital Volunteer" : [
            "Worked with and supported hospitalized patients and their families.",
            "Helped create a positive atmosphere for hospitalized patients through service, companionship and kindness."
        ],
        "Navy–Marine Corps Relief Society (NMCRS) Budget for Baby Instructor" : [
            "Provided formal instruction as Budget for Baby instructor to military personnel and their families on planning for the cost of having a child.",
            "Organized schedules, assembled supplies and acted as classroom aide for Budget for Baby classes for military personnel and their families."
        ],
        "Navy–Marine Corps Relief Society (NMCRS) Layette Assembler" : [
            "Provided community outreach to vendors to replenish inventory of new-mother items such as layettes, diapers, wet wipes and formula.",
            "Assembled “Baby’s First Seabag” gifts for distribution to expectant military personnel and their families."
        ],
        "Navy–Marine Corps Relief Society (NMCRS) Coupon Sorter" : [
            "Collected and sorted all expired coupons from the states  and distributed them to military families.",
            "Instructed military personnel and their families on how to use expired coupons at the base commissary."
        ],
        "Navy–Marine Corps Relief Society (NMCRS) Knitter/Crocheter" : [
            "Organized volunteers who knit and crochet to create baby blankets for expectant military families.",
            "Knitted/crocheted baby blankets to be included in the “Baby’s First Seabag” gifts distributed to expectant military families."
        ],
        "Navy–Marine Corps Relief Society (NMCRS) Volunteer Caseworker" : [
            "Served as caseworker to help military personnel and their families assess their needs, locate support and educational resources, and apply for services.",
            "Counseled military personnel and their families on creating and adhering to budgets and making wise financial decisions.",
            "Used various problem-solving techniques to help military personnel and their families discover alternate solutions to presented problems.",
            "Used specialized, extensive knowledge to refer military personnel and their families to community resources and other professional services to help solve their unique problems.",
            "Completed all paperwork for various interest-free loans and grants for military personnel and their families to help meet needs such as rent, food, vehicle repairs, medical bills and funeral expenses."
        ],
        "Navy–Marine Corps Relief Society (NMCRS) Volunteer Receptionist/Client Services Assistant" : [
            "Managed reception desk for military service organization, answering phones, responding to general questions and directing clients to appropriate services and resources.",
            "Greeted military personnel and their families and assisted them with completing interview paperwork and scheduling casework appointments and classes.",
            "Assisted military personnel and their families with basic loans and Quick Assist Loans up to $500 to help meet needs such as rent, food, vehicle repairs, medical bills and funeral expenses.",
            "Remained professional, objective and calm in a fast-paced environment that provided various services to military personnel and their families."
        ],
        "Navy–Marine Corps Relief Society (NMCRS) Thrift Shop Merchandising Associate/Thrift Shop Volunteer" : [
            "Managed many retail aspects of store operations and customer service at the Navy–Marine Corps Relief Society (NMCRS) thrift shop.",
            "Inventoried, selected and displayed Navy–Marine Corps Relief Society (NMCRS) thrift shop merchandise in most favorable and trafficked areas.",
            "Planned regular encounters with consumers to assist in item selection and solve problems at the Navy–Marine Corps Relief Society (NMCRS) thrift shop.",
            "Priced and marked down Navy–Marine Corps Relief Society (NMCRS) thrift shop merchandise in order to turn inventory.",
            "Exhibited superior customer service while operating cash register at the Navy–Marine Corps Relief Society (NMCRS) thrift shop."
        ],
    },

    "AIR FORCE" : {
        "Airman’s Attic Volunteer" : [
            "Managed many retail aspects of store operations and customer service at the Airman’s Attic.",
            "Inventoried, selected, and displayed merchandise from the Airman’s Attic in most favorable and trafficked areas.",
            "Planned regular encounters with Airman’s Attic client consumers to assist in item selection and to solve problems.",
            "Priced and marked down Airman’s Attic merchandise in order to turn inventory."
        ],
        "Airman & Family Readiness Center Volunteer" : [
            "Provided and referred members to Airman & Family Readiness Center for benefits center services.",
            "Tracked utilization of services provided by Airman & Family Readiness Center to single, married, Active Duty, civilians and retired members as well as their families.",
            "Researched available resources in all communities via Airman & Family Readiness Center to ensure personnel and their families remained connected with the appropriate services.",
            "Primary contact at Airman & Family Readiness Center for trouble calls occurring on nights, weekends and holidays."
        ],
        "Airmen Against Drunk Driving (AADD) Volunteer" : [
            "Created, maintained and made corrections to master list of citizens concerned about drunk driving and had the ability to provide transportation on nights and weekends.",
            "Dispatched volunteers and managed communications with different levels of client services for Airmen Against Drunk Driving (AADD)."
        ],
        "Key Spouse" : [
            "Served as role model and mentor to junior spouses and families in military unit as Key Spouse.",
            "Interfaced between military unit leadership and families, troubleshooting issues, solving problems and delivering feedback as Key Spouse.",
            "As Key Spouse, provided information, resources and referral assistance to military families during crisis.",
            "Welcomed new families and cultivated relationships within the military unit as Key Spouse."
        ],
        "Spouse Club President" : [
            "Led nonprofit organization through teamwork, facilitation and leadership of a diverse membership.",
            "Planned and executed fundraising activities, including solicitation of community groups and businesses for financial and in-kind donations.",
            "Provided written and oral communications to Spouse Club members to boost activity participation and achieve organizational goals.",
            "Coached and mentored junior volunteers to boost leadership and volunteer management skills."
        ],
        "Spouse Club Vice President" : [
            "Led nonprofit organization through teamwork, facilitation and leadership of a diverse membership.",
            "Planned and executed fundraising activities, including solicitation of community groups and businesses for financial and in-kind donations.",
            "Provided written and oral communications to Spouse Club members to boost activity participation and achieve organizational goals.",
            "Coached and mentored junior volunteers to boost leadership and volunteer management skills."
        ],
        "Operation Stork Volunteer" : [
            "Operation Stork lead volunteers who provided items critical to support of new mothers and the newborn.",
            "Worked with Medical Social Worker to select and distribute Operation Stork resources to new parents with family or financial need.",
            "Provided community outreach to vendors to replenish Operation Stork inventory of new mother items such as layettes, diapers, wet wipes, pack-n-play cribs, formula, and play gyms.",
            "Analyzed and reviewed Operation Stork policies and procedures to ensure and preserve the dignity of the new mother and welfare of the newborn.",
            "Worked under supervision of provider who valued my judgment and expertise as a maternity ward registered nurse (RN) to serve in Operation Stork position."
        ],
    },

    "ASSORTED" : {
        "American Red Cross Armed Forces Caseworker" : [
            "Ensured delivery of urgent messages containing accurate, factual, complete and verified communications for members of the military and their families.",
            "Displayed respect, empathy and kindness to military members while delivering urgent or emergency communications."
        ],
        "American Red Cross Blood Drive Driver" : [
            "Picked up donated blood units from a blood drive and delivered to the laboratory to be thoroughly tested and then sent to the hospital.",
            "Operated the van, picked up vehicle from maintenance and returned safely.",
            "Ensured that the Red Cross vehicle was correctly stocked with all the needed supplies.",
            "Cleaned the van should anything spill, using proper protective equipment, asprovided by the Red Cross."
        ],
        "American Red Cross Blood Drive Volunteer" : [
            "Greeted and registered blood donors.",
            "Provided refreshments to blood donors.",
            "Worked with individuals, groups and companies to recruit blood donors and promote blood drives."
        ],
        "American Red Cross Board Member" : [
            "Prepared fiscal year financial report and issued funds to disaster victims.",
            "Served on local boards and assisted with fundraising and marketing programs."
        ],
        "American Red Cross Clerical" : [
            "Assisted in a variety of administrative tasks such as writing letters, processing mailings, filing and setting appointments for Red Cross.",
            "Worked with writing memorandums; worked with databases and spreadsheets for Red Cross."
        ],
        "American Red Cross Community Outreach Intern" : [
            "Supported and improved the community outreach process within the National Capital Region American Red Cross chapter.",
            "Cultivated, built and grew relationships with the United Way, the Combined Federal Campaign (CFC) and other federated groups.",
            "Collaborated with regional management representatives to grow relationships with the American Red Cross and local advisory boards, committees, city councils and legislative bodies through outreach to and effective communication with elected officials."
        ],
        "American Red Cross Disaster Services" : [
            "Provided food, shelter, comfort and home for families affected by major disasters such as fires, hurricanes and tornadoes.",
            "Served on local boards and helped with fundraising and marketing programs.",
            "Responded to single-family fires with a disaster action team supervisor.",
            "Served on local boards and helped with fundraising and marketing programs. Acted as the face of the Red Cross in the community.",
            "Educated military families, individuals and groups on how to be prepared before a disaster occurs"
        ],
        "American Red Cross Grant Researching/Writing" : [
            "Assisted the fundraising team as they researched, wrote and executed grants.",
            "Gathered information through interviews and other means and acquired a sound understanding of organizations in order to identify likely funding sources as grant writer.",
            "Researched, analyzed and prepared grant applications and packages as grant writer.",
            "Compiled, wrote and edited persuasive proposals and followed grant-making guidelines.",
            "Reviewed the budget of a project/program for which funding was sought and made recommendations to present it to grant-making organizations."
        ],
        "American Red Cross Health and Safety Instructor" : [
            "Provided high-quality, superior instruction to children and adults in community groups in CPR, first aid and water safety.",
            "Provided necessary reports to leadership and managed/cleaned equipment before and after each CPR, first aid and water safety class."
        ],
        "American Red Cross Language Bank" : [
            "Assisted limited and non-English-speaking persons in emergency and crisis situations with in-person and over-the-phone interpretation services.",
            "Assisted limited and non-English-speaking persons in emergency and crisis situations with written translation services."
        ],
        "American Red Cross Outreach Volunteer" : [
            "Attended health fairs and community events as Red Cross representative to welcome attendees, answer questions, and hand out literature and promotional items.",
            "Interacted with public to inform them about disaster preparedness, blood donation, health and safety classes, and volunteer opportunities with the Red Cross.",
            "Distributed Red Cross materials to attendees, answered questions about programs and events, and recruited volunteers."
        ],
        "American Red Cross Public Affairs" : [
            "During disasters, told the Red Cross story to the community.",
            "Assisted with the quarterly newsletter, marketing special events, and/or speaking to the public about the American Red Cross.",
            "Developed a marketing plan for the Red Cross, for use by subsequent staff or volunteers."
        ],
        "American Red Cross Social Media" : [
            "Advocated and communicated to the public the mission of the Red Cross.",
            "Assisted the Red Cross in management of social media, including Twitter and Facebook.",
            "Posted Red Cross volunteer opportunities on social media."
        ],
        "American Red Cross Speakers" : [
            "Provided presentations about Red Cross programs in the community.",
            "Developed a marketing plan for the organization, for use by subsequent staff or volunteers.",
            "Arranged speaking engagements for board members and paid staff.",
            "Developed Speakers Bureau for Red Cross."
        ],
        "American Red Cross Special Events" : [
            "Supported fundraising and special events.",
            "Marketed and provided advance PR as designated by the Red Cross Director of Client Services."
        ],
        "American Red Cross Staff Support" : [
            "Helped with routine maintenance duties such as stocking supplies and checking inventory at shelters.",
            "Assisted Red Cross with administrative tasks.",
            "Assisted in a variety of administrative tasks such as writing letters, processing mailings, filing and setting appointments for Red Cross.",
            "Worked with writing memorandums; worked with databases and spreadsheets for Red Cross."
        ],
        "American Red Cross Thank a Donor Volunteer" : [
            "Made calls to thank Red Cross financial donors.",
            "Managed regularly scheduled correspondence to donors."
        ],
        "American Red Cross Volunteer Management" : [
            "Served on local boards and helped with fundraising and marketing programs.",
            "Acted as the face of the Red Cross in the community and ensured the community was served well.",
            "Assisted with volunteer recruitment, placement, record keeping and recognition."
        ],
        "Animal Shelter Volunteer" : [
            "Served as technician to care, feed and dispense medications for animal shelter.",
            "Transported animals in need of veterinary services to clinics.",
            "Marketed and assisted in fundraising activities and interacted with the public to raise awareness of animal shelter needs."
        ],
        "Armed Services YMCA Volunteer" : [
            "Directed national and local volunteer programs and activities for the Armed Services YMCA.",
            "Managed volunteers for a variety of programs geared toward spouses and children of deployed military members.",
            "Provided programs to assist families with life skills, education, transportation and recreational activities under the Armed Services YMCA national headquarters programs."
        ],
        "Arts and Crafts Center Volunteer" : [
            "Created arts and crafts activities that produced a meaningful experience for participants of all ages.",
            "Trained other volunteers and staffed arts and crafts exhibits/activities with appropriate volunteers."
        ],
        "Base Chapel Volunteer" : [
            "Assisted the military base chaplain in the performance of church services and sacraments.",
            "Scheduled sextons, ushers, and lay persons to assist in military base chapel services and activities.",
            "Scheduled sacraments for military base chapel for all faiths.",
            "Oversaw the staffing of children’s worship and Sunday school for military base chapel.",
            "Taught lessons, led prayer, and read scripture for all faiths in military base chapel.",
            "Planned, coordinated and led children’s activities for all faiths in military base chapel."
        ],
        "Base Community Center Administrative Assistant" : [
            "Assisted in recruitment and retention efforts, including outreach within the military community and nonmilitary business locations.",
            "Demonstrated leadership in delivering exemplary customer service for all encounters with the military community and nonmilitary business locations.",
            "Answered telephone calls and handled inquiries within the military community and nonmilitary business partner community in a professional manner."
        ],
        "Base Community Center Drama Club Director" : [
            "Managed drama club volunteer recruitment and retention efforts, including outreach within the military community and nonmilitary business partners for Drama Center.",
            "Directed all drama club activities for adults and children; selected programs, technical assistants and base special events.",
            "Oversaw all fundraising and outreach for drama productions and activities."
        ],
        "Base Community Center Special Events" : [
            "Coordinated activities and resources required for base concerts, field days and other special events.",
            "Supervised vendors and managed base community center events.",
            "Scheduled and maintained communication with speakers, performers, vendors and participants for base community center events.",
            "Assisted in preparing promotional materials, schedules and programs for a variety of base community center special events."
        ],
        "Base Community Center Technical Assistant" : [
            "Assisted in maintenance and repair of base community center.",
            "Prepared base community center building for use by civilians, Active Duty personnel and dependents.",
            "Collaborated with event coordinators and managers to ensure proper setup, use and maintenance of all technical equipment."
        ],
        "Base Community Center Volunteer" : [
            "Assisted in recruitment and retention efforts including outreach within the community and industrial locations for Base Community Centers.",
            "Demonstrated leadership in delivering exemplary customer service for Base Community Centers.",
            "Answered telephone calls and handled inquiries about Base Community Centers in a professional manner."
        ],
        "Base Library Volunteer" : [
            "Primary customer service resource for digitized library resources.",
            "Trained library patrons in audiovisual, TV/VCR and computer operation.",
            "Provided one-on-one technical expertise to library patrons.",
            "Sorted, filed and shelved library materials according to classification system.",
            "Managed library circulation desk and located materials on hold for library patrons."
        ],
        "Basic Literacy Tutor" : [
            "Provided individualized guidance, instruction, support and encouragement to learners of reading, writing, math and life skills.",
            "Guided international learners in culturally appropriate behavior.",
            "Reviewed work with learners and kept detailed records of progress.",
            "Completed monthly reports on learners and submitted them to the literacy coordinator.",
            "Developed and taught time-limited, thematically based miniclass on literacy.",
            "Trained other basic literacy tutors in learning styles, questioning techniques and teaching strategies.",
            "Assisted in writing grants and researched funding sources for literacy program."
        ],
        "Big Brothers Big Sisters Volunteer" : [
            "Provided one-on-one guidance, friendship, companionship and mentoring to local child through Big Brothers Big Sisters.",
            "Planned and participated in activities with Little Brother or Little Sister and served as positive role model."
        ],
        "Blue Star Families Chapter Director" : [
            "Managed monthly event planning, budgeting and expense reporting as senior local liaison for national nonprofit organization.",
            "Established and expanded partnerships with diverse regional stakeholders as senior liaison for national nonprofit organization serving a local community.",
            "Established a strategic communication plan and maintained multiple social networking platforms in order to publicize nonprofit’s events and resources and disseminate national-level information to local members.",
            "Managed and mentored a team to ensure effective representation and desired outcomes for national nonprofit organization."
        ],
        "Boys and Girls Club" : [
            "Served as leader, role model and mentor to young boys and girls at Youth Center.",
            "Demonstrated appropriate behavior to youth in sports and life at Youth Center.",
            "Background certified Tier 1 Supervision to volunteer at Youth Center."
        ],
        "Boy/Girl Scouts Volunteer" : [
            "Trained youth in responsible citizenship through Scouting association.",
            "Promoted character development and self-reliance through participation in a wide range of outdoor Scouting activities.",
            "Aided in educational programs and career-oriented programs in partnership with community organizations through Scouting organization.",
            "Helped foster Scouting values such as trustworthiness, good citizenship and outdoors skills through a variety of activities such as camping, aquatics and hiking."
        ],
        "Chapel Volunteer" : [
            "Assisted the chaplain in the performance of church services and sacraments.",
            "Scheduled sextons, ushers and laypersons who assist in the chapel service.",
            "Scheduled sacraments for all faiths.",
            "Oversaw the staffing of children’s services.",
            "Provided outreach services and other chapel duties as requested."
        ],
        "Child Abuse Prevention Volunteer" : [
            "Staffed the Child Abuse Prevention crisis call line and triaged calls as needed.",
            "Provided Child Abuse Prevention client transportation to legal, court or physician visits.",
            "Planned, developed and assisted with children’s activities to support Child Abuse Prevention shelter residents during special events or counseling sessions.",
            "Interpreted for Child Abuse Prevention clients in court, in the shelter and over the phone.",
            "Assisted at the Child Abuse Prevention shelter front desk with authorized entry, guest sign-in/sign-out, client and community mailings, filing, and fielding phone calls."
        ],
        "Child Development Center Volunteer" : [
            "Assisted with lessons, singing, reading, free play, and computer readiness at Child Development Center.",
            "Performed retail operation functions at Child Development Center including sales, merchandising, inventory control and cashiering.",
            "Oversaw and solicited volunteers for graphic design, and writing for a variety of print and online related materials at Child Development Center.",
            "Provided Child Development Center direction on developing and maintaining a presence in online philanthropy, social media sites, and funding research."
        ],
        "Childcare Facility Volunteer" : [
            "Performed all necessary child care responsibilities including feeding, bathing, medicating, reading to and playing with children while managing their behavior and social interaction with other children.",
            "Instructed children in good habits and behavior such as sharing toys, cleaning up work spaces, and being kind and respectful.",
            "Taught children of varying ages how to play games, draw, count and read.",
            "Administered timely and appropriate discipline to children as needed and kept detailed records.",
            "Collaborated with parents to provide appropriate and targeted instruction, guidance and training for each child in child care program."
        ],
        "Church/Religious Activities Volunteer" : [
            "Assisted the chaplain in the performance of church services and sacraments.",
            "Scheduled sextons, ushers and laypersons who assist in the service.",
            "Scheduled sacraments for all faiths.",
            "Oversaw the staffing of children’s services and provided outreach services."
        ],
        "Computer Lab Tutor" : [
            "Responsible for computer lab users’ proper operation, care and maintenance of lab.",
            "Troubleshot minor technical problems as they occurred in the computer lab and escalated issues when necessary.",
            "Provided advanced computer literacy guidance and instruction to all computer lab users.",
            "Recruited IT-proficient volunteers to teach computer literacy tutor training required, as well as computer skills.",
            "Maintained detailed documentation of all computer lab resources and their usage."
        ],
        "Corporation for National and Community Service" : [
            "Placed volunteers on a path to sustained service to military families.",
            "Placed volunteers in unmet needs in their military community.",
            "Engaged others interested in the same issue area for United We Serve.",
            "Promoted clean energy, energy efficiency and public land restoration.",
            "Through United We Serve, supported education and literacy for all military families."
        ],
        "Customer Service at Consignment and Thrift Store" : [
            "Managed many retail aspects of store operations and customer service.",
            "Inventoried, selected, and displayed merchandise in most favorable and trafficked areas.",
            "Planned regular encounters with client consumers to assist in item selection and to solve problems."
        ],
        "Department of Defense Dependents School (DoDDS) Volunteer" : [
            "Provided tutorial services, in-classroom presentations and guest instructors for Department of Defense Dependents School (DoDDS).",
            "Encouraged and assisted with instruction in science, technology, engineering and math (STEM) for Department of Defense Dependents School (DoDDS).",
            "Coordinated the Speakers Bureau to promote interest in science, technology, engineering and math (STEM) for Department of Defense Dependents School (DoDDS).",
            "Developed mentoring programs for students through the Department of Defense Dependents School (DoDDS)."
        ],
        "Designated Driver Service Aide" : [
            "Served as the primary caregiver in event of emergency during the transportation of guests using the designated driver service.",
            "Served as the individual who would announce to establishments that the designated driver service was outside and ready to take guests to their destination.",
            "Cleaned the designated driver service vehicle should anything spill, using proper protective equipment, as provided by the local health center."
        ],
        "Designated Driver Service Driver" : [
            "Operated the designated driver service vehicle, picked up the vehicle from maintenance and returned safely.",
            "Ensured that the designated driver service vehicle was adequately stocked with trash cans and medical kits.",
            "Cleaned the designated driver service vehicle should anything spill, using proper protective equipment, as provided by the local health center."
        ],
        "Designated Driver Service Office Dispatcher" : [
            "Oversaw dispatcher personnel who met the training requirements for Aide or Driver to serve as replacements in event of emergency.",
            "Recorded incoming calls of party needing transport verified eligible for Safe Ride.",
            "Ensured that guests were picked up and returned safely in a timely manner for designated driver service."
        ],
        "Disaster Recovery Volunteer" : [
            "Performed client casework and follow-up with families.",
            "Prepared fiscal year financial reports and issued funds to disaster victims.",
            "Identified, recorded and reported damage to homes and businesses in a timely manner.",
            "Operated heavy equipment to assist with debris removal and reconstruction.",
            "Assisted with debris cleanup to facilitate traffic flow.",
            "Distributed meals, clothing and other living essentials to disaster victims.",
            "Sorted, packed and distributed nonperishable food items to emergency food providers in the community.",
            "Provided mental health counseling to disaster victims."
        ],
        "Domestic Abuse Community Education and Awareness Volunteer" : [
            "Provided effective outreach to community agencies, churches, schools and employers and gained volunteer or financial support for the domestic abuse shelter.",
            "Spoke to civic, business, school, church and social groups to raise awareness of domestic violence.",
            "Participated in health fairs, community events and other venues to distribute domestic abuse shelter literature and answer questions.",
            "Participated in Domestic Violence Awareness Month commemorations as a representative of domestic abuse shelter."
        ],
        "Domestic Abuse Fundraising Volunteer" : [
            "Provided effective outreach to community agencies, churches, schools and employers and gained volunteer or financial support for the domestic abuse shelter.",
            "Spoke to civic, business, school, church and social groups to raise awareness of domestic violence.",
            "Participated in health fairs, community events and other venues to distribute domestic abuse shelter literature and answer questions.",
            "Participated in Domestic Violence Awareness Month commemorations as a representative of domestic abuse shelter."
        ],
        "Domestic Abuse Shelter Operations and Client Services Volunteer" : [
            "Staffed the domestic abuse crisis call line and triaged calls as needed.",
            "Provided domestic abuse client transportation to legal, court or physician visits.",
            "Collaborated with and assisted domestic abuse case management professionals.",
            "Planned, developed and assisted with children’s activities to support domestic abuse shelter residents during special events or counseling sessions.",
            "Interpreted for domestic abuse clients in court, in the shelter and over the phone.",
            "Assisted at the domestic abuse shelter front desk with authorized entry, guest sign-in/sign-out, client and community mailings, filing, and fielding phone calls."
        ],
        "English Literacy Tutor" : [
            "Provided individualized English literacy guidance, instruction, support and encouragement to learners.",
            "Guided international learners in culturally appropriate behavior.",
            "Reviewed work with learners and kept detailed records of progress.",
            "Completed monthly reports on learners and submitted them to the literacy coordinator.",
            "Developed and taught time-limited, thematically based miniclass on English literacy.",
            "Trained other English literacy tutors in learning styles, questioning techniques and teaching strategies.",
            "Assisted in writing grants and researched funding sources for literacy program."
        ],
        "Erosion Control Tree Planting Volunteer" : [
            "Assisted in landscaping, lawn care and planting of flowers.",
            "Utilized light equipment and worked with others on team to prepare ground and plant trees to manage erosion control for base.",
            "Managed beautification efforts by weeding, planting, mowing and mulching grounds."
        ],
        "Family Child Care Provider/Day Care Center" : [
            "Provided high-quality and individualized care and supervision as licensed child care provider to children aged 1–12.",
            "Performed all necessary child care responsibilities including feeding, bathing, medicating, reading to and playing with children while managing their behavior and social interaction with other children.",
            "Instructed children in good habits and behavior such as sharing toys, cleaning up work spaces, and being kind and respectful.",
            "Taught children of varying ages how to play games, draw, count and read.",
            "Administered timely and appropriate discipline to children as needed and kept detailed records.",
            "Collaborated with parents to provide appropriate and targeted instruction, guidance and training for each child in child care program."
        ],
        "Festival Volunteer" : [
            "Ensured safe environment for festival by working with police and fire departments.",
            "Took pictures of festival to publicize via website, newsletter and newspaper.",
            "Assisted with children’s games at festival.",
            "Assisted with festival setup and breakdown.",
            "Supervised festival volunteers.",
            "Directed traffic and controlled festival parking lot."
        ],
        "Fitness/Exercise Center Volunteer" : [
            "Completed time sheets, incident reports, complaints and maintenance requests for fitness center.",
            "Performed routine maintenance on all fitness center equipment.",
            "Provided personalized exercise and fitness techniques and guidance as fitness center personal trainer.",
            "Led small and large groups of participants of varying skill levels in fitness, exercise, flexibility and aerobics classes.",
            "Assisted with fitness center registration, equipment rental, waiver forms, and member records and accounts.",
            "Instructed all fitness center members and staff in CPR and first aid.",
            "Instructed, educated and motivated members and nonmembers on proper use of exercises and equipment to help them reach their fitness goals."
        ],
        "Food Drive Volunteer" : [
            "Directed and participated in making and packing boxes for food drive.",
            "Distributed food drive paperwork to participants.",
            "Loaded and unloaded food drive trucks and helped to direct traffic.",
            "Solicited food drive donations from business and community members."
        ],
        "Fun Run/Race Volunteer" : [
            "Managed the race registration table, processing an average of 20 runners per hour.",
            "Served as safety officer and road guard for the race.",
            "Coordinated race participants and collected waivers, applications and fees.",
            "Collaborated with interested hospitals, health and fitness clubs, running shoe stores, etc., to publicize the race event."
        ],
        "Gift Shop Volunteer" : [
            "Provided cashier, customer service, general information and retail services for gift shop.",
            "Inventoried, selected and displayed merchandise in most favorable and trafficked areas.",
            "Priced and marked down merchandise in order to turn inventory for gift shop."
        ],
        "Grocery Assistance Volunteer" : [
            "Provided grocery assistance services to military families with special needs of disabilities. ",
            "Drove needy military families to grocery store and helped them shop for groceries and navigate parking, shopping cart and payment in duties."
        ],
        "Gun Club/Shooting Club/Shooting Park/Shooters Club Volunteer" : [
            "Trained new gun club members in basic marksmanship and firing range policies and procedures.",
            "Provided weapons safety training for all new gun club members and performed frequent firearms safety inspections.",
            "Enrolled new gun club members, maintained accurate membership list and managed admittance to firing range.",
            "Planned, organized and directed skeet tournament for gun club.",
            "Ensured proper care, storage and use of firearms by all gun club staff and guests."
        ],
        "Habitat for Humanity Volunteer" : [
            "Helped build simple, decent and affordable housing, in local community and around the state with Habitat for Humanity.",
            "Assisted student groups and partner families in working to help eliminate poverty housing in the local community.",
            "Worked with campus chapters and supervised high school students in building, fundraising, advocating and educating within the local community for Habitat for Humanity."
        ],
        "Halfway House/Homeless Shelter Volunteer" : [
            "Prepared and served meals, set tables, and cleaned up area for homeless shelter guests.",
            "Distributed toiletries, over-the-counter medications, first-aid supplies, laundry detergent, bed linens and bath towels upon request to homeless shelter guests.",
            "Assisted new homeless shelter guests by helping them complete demographic forms, giving them tours of the facility and assigning lockers."
        ],
        "Handyman" : [
            "Provided technical assistance with painting, repairs, installations, restorations and maintenance as needed by staff.",
            "Performed general handyman and custodial tasks with minimal supervision."
        ],
        "Head Start Volunteer" : [
            "Supervised various activities and responsibilities for children aged 0–5 years old for the Head Start program.",
            "Participated in Volunteer and Substitute Training (VAST) to learn more about Head Start policies, procedures and guidelines.",
            "Assisted in the preparation of materials and resources for various Head Start program activities both in the classroom and on field trips, walks or outside activities.",
            "Helped foster effective communication between Head Start participants and families and school.",
            "Assisted in the care and upkeep of the classroom and its contents and helped teacher prepare displays of children’s work.",
            "Taught and mentored children of varying ages individually and in small groups through the Head Start program."
        ],
        "Health and Wellness Center Volunteer" : [
            "Completed time sheets, incident reports, complaints and maintenance requests for health and wellness center.",
            "Assisted with routine health and wellness screenings by administering hearing and vision exams and blood pressure tests.",
            "Registered patients for health and wellness center and maintained accurate and up-to-date records.",
            "Assisted in the intake of new health and wellness patients by entering, verifying and processing patient demographic, health insurance, and payment information."
        ],
        "Halfway House/Homeless Shelter Volunteer" : [
            "Prepared and served meals, set tables, and cleaned up area for homeless shelter guests.",
            "Distributed toiletries, over-the-counter medications, first-aid supplies, laundry detergent, bed linens and bath towels upon request to homeless shelter guests.",
            "Assisted new homeless shelter guests by helping them complete demographic forms, giving them tours of the facility and assigning lockers."
        ],
        "Honor Flight Volunteer" : [
            "Sent off Honor Flight veterans at the airport in the morning and welcomed them home with a cheering reception at the end of the trip.",
            "Answered Honor Flight office phones and entered application information into the data system.",
            "Delivered engaging presentations to outside groups about the mission, importance and story of the Honor Flight program as part of the Honor Flight Speakers’ Bureau."
        ],
        "Hospice Office Volunteer" : [
            "Assisted hospice staff with filing, data entry and copying.",
            "Worked as hospice front desk receptionist to greet, sign in and assist hospice patients, family members and visitors.",
            "Responsible for designing, creating and mailing hospice information and news to community providers."
        ],
        "Hospice Patient/Family Volunteer" : [
            "Arranged transportation to take hospice patients to physician appointments and shopping.",
            "Provided relief duties for hospice caregivers.",
            "Provided companionship, comfort and support for hospice patients.",
            "Assisted with hospice patients’ personal needs including bathing and transferring.",
            "Assisted hospice patients’ families with housekeeping tasks and running errands."
        ],
        "Hospice Special Event Volunteer" : [
            "Worked in booths at health fairs and other events to explain hospice care and benefits to attendees and families.",
            "Assisted with fundraising events that supported and educated the community about the benefit to families of end-of-life treatment through hospice care."
        ],
        "Hospital Admissions Volunteer" : [
            "Helped patients register and provided general information regarding the hospital to patients, family members and visitors.",
            "Assisted with the registration of hospital patients and provided general office help to admissions staff in obtaining patient information.",
            "Provided general information to families, patients and visitors regarding hospital policies, procedures and directions."
        ],
        "Hospital Born to Read Volunteer" : [
            "Communicated with new mothers about connecting with their babies by reading through the Born to Read program.",
            "Provided new mothers at the hospital with bags of useful items, including the baby's first book, through the Born to Read program."
        ],
        "Hospital Education Department Volunteer" : [
            "Worked with nursing staff on continuing education.",
            "Provided assistance to staff by helping them prepare for classes and workshops."
        ],
        "Hospital Health Information Systems/Medical Records Volunteer" : [
            "Entered and retrieved data through the health information management system (HIMS).",
            "Managed applications to retrieve data requested from hospital database.",
            "Health Insurance Portability and Accountability Act (HIPAA) certified.",
            "Provided general hospital office assistance such as filing, copying, answering phones and assisting patients, family members and visitors."
        ],
        "Hospital Human Resources Volunteer" : [
            "Provided general hospital office help, including filing, copying, covering the reception area and assisting patients, family members and visitors.",
            "Assisted in entering information into database through the health information management system (HIMS).",
            "Led software training for new hospital employees."
        ],
        "Hospital Information Help Desk Support" : [
            "Provided initial impression of hospital and first contact to visitors and staff.",
            "Created positive, personal interaction and answered all questions and inquiries related to hospital.",
            "Communicated hospital policies and procedures to visitors, patients, and family members.",
            "Extensive knowledge of hospital operations, working closely with administration and security."
        ],
        "Hospital Main Lobby Volunteer" : [
            "Provided initial impression of hospital and first contact to visitors and staff.",
            "Created positive, personal interaction and answered all questions and inquiries related to the hospital.",
            "Communicated hospital policies and procedures to visitors, patients and family members.",
            "Utilized knowledge of hospital operations, working closely with administration and security."
        ],
        "Hospital Pastoral Care Volunteer" : [
            "Provided pastoral or spiritual care to any patient within the hospital organization.",
            "Managed hospital chaplaincy volunteers who provided care to those of their own faith."
        ],
        "Hospital Patient Representative Volunteer" : [
            "Met with hospital patients and family members as needed to discuss patient billing, discharge summary or complaints.",
            "Worked with medical social workers to complete discharge summaries.",
            "Met with family members to answer questions regarding insurance.",
            "Provided answers to questions and help with concerns."
        ],
        "Hospital Volunteer Services Courtesy Shuttle Driver Volunteer" : [
            "Maintained and operated transportation service for hospital patients, visitors and employees around the hospital campus.",
            "Scheduled volunteers for hospital shuttle services."
        ],
        "Hotline Operator" : [
            "Provided quality services in response to survivors of sexual and domestic violence as hotline operator.",
            "Provided referral and direction as hotline operator to military and young women seeking assistance.",
            "Provided and interceded with appropriate communication to authority figure or agency as hotline operator in situations of domestic abuse or child endangerment."
        ],
        "Income Tax Volunteer" : [
            "Provided authorized personnel to assist clients with filing personal income tax.",
            "Assisted clients with filing personal income tax and answered all client questions concerning the current tax code.",
            "Trained in income tax preparation as an authorized preparer for the Tax Center.",
            "Addressed all clients/customers with professional service at the Tax Center."
        ],
        "Installation Libraries Volunteer" : [
            "Served as primary customer service resource for digitized library resources.",
            "Trained library patrons in audiovisual, TV/VCR, slideshow and computer operation.",
            "Provided one-on-one technical expertise to library patrons."
        ],
        "Landscaper/Gardener" : [
            "Helped maintain grounds in accordance with established guidelines.",
            "Planted bushes, trees and other plants as needed and kept grounds in good repair.",
            "Watered all plants, raked leaves and spread mulch as needed."
        ],
        "Lifeguard" : [
            "Responded to all illness and injury incidents around the entire pool facility immediately and appropriately.",
            "Maintained a clean, safe and orderly pool, deck, aquatics office and locker rooms by inspecting facilities regularly and reporting any unsafe conditions/equipment.",
            "Cautioned swimmers regarding unsafe practices and safety hazards and enforced pool rules and regulations.",
            "Rescued swimmers in danger of drowning."
        ],
        "Loan Closet Volunteer" : [
            "Managed, organized, and inventoried all existing appliances available to loan to members for personal use through the Loan Closet.",
            "Checked appropriate credentials and verified eligibility for the Loan Closet program participation.",
            "Responsible for customer service prior to and after selection of items from the Loan Closet.",
            "Inspected and made minor repairs to appliances from the Loan Closet."
        ],
        "Meals on Wheels Volunteer" : [
            "Noted any problems or concerns about the Meals on Wheels recipient, particularly health concerns, on the route sheet and informed the center manager.",
            "Assisted in packing coolers and ensured correct number of cold and hot packs, milks and boxed lunches for Meals on Wheels recipients.",
            "Delivered meals to assigned Meals on Wheels recipients.",
            "Provided Meals on Wheels outreach upon arrival at each home to be pleasant and chat with the client."
        ],
        "Medical Cost Reimbursement Center Medical Care Recovery Claims Volunteer" : [
            "Assisted in the management of 9,000 claims to be paid to third-party organizations, TRICARE and/or hospitals.",
            "Triaged claims for payment.",
            "Negotiated with health insurance vendors over claims and payment.",
            "Trained in HIPAA patient privacy rules and regulations and confidentiality."
        ],
        "Military Chapel Wedding Coordinator" : [
            "Successfully organized and scheduled wedding requests annually.",
            "Ensured superior customer service by employing high-level conflict management and communication skills with chapel’s staff and wedding party members.",
            "Effectively scheduled chapel weddings and ensured that appropriate chapel resources were available while minimizing any potential conflicts with other chapel functions.",
            "Served as central contact for all chapel wedding inquiries and requests."
        ],
        "Mothers of Preschoolers (MOPS) Area Developer" : [
            "Managed ongoing training of field leaders in support of families through local chapters, including training for new field leaders and annual training for established area field leaders.",
            "Ensured the effective functioning of local chapters and was responsible for expansion of the national organization through the successful establishment of new local chapters.",
            "Generated and implemented new regional strategies, ensuring the successful achievement of annual national goals for Mothers of Preschoolers."
        ],
        "Mothers of Preschoolers (MOPS) Community Event Planner" : [
            "Identified, contracted with and scheduled speakers and entertainment for Mothers of Preschoolers events and area meetings.",
            "Managed event planning, local production and technical needs in support of Mothers of Preschoolers functions, ensuring the desired event outcome.",
            "Employed excellent organizational and planning skills to successfully supervise a team of event staffers."
        ],
        "Museum Librarian and Research Specialist" : [
            "Oversaw activity to organize, display and archive rare publications for museum.",
            "Selected best choices for public display for museum.",
            "Evaluated and determined which publications and documents were to be restored for museum."
        ],
        "Museum Restoration Specialist" : [
            "Under broad direction, managed the restoration of museum pieces.",
            "Utilized sheet metal, painting, fiberglass, and other materials and created replacement parts for museum pieces.",
            "Developed innovative methods for restoration process with new materials for museums."
        ],
        "Museum Tour Guide" : [
            "Managed group and individual tours for museum visitors and guests.",
            "Provided expert knowledge of pieces, history, origin and usage on behalf of museum.",
            "Able to answer all questions and provide commentary on all museum exhibits."
        ],
        "Museum Volunteer" : [
            "Under broad direction, managed the restoration and renovation of museum pieces.",
            "Utilized sheet metal, painting, fiberglass and other materials to create replacement parts for museum pieces.",
            "Oversaw activity to organize, display and archive rare publications for museum.",
            "Managed group and individual tours for visitors and guests of museum.",
            "Provided expert knowledge of pieces, history, origin and usage for museum."
        ],
        "National Military Family Association Volunteer" : [
            "Managed special projects such as website support and award judging for the National Military Family Association.",
            "Served on the National Military Family Association special events committee.",
            "Recruited members and other volunteers for the National Military Family Association.",
            "Wrote, researched and edited content for National Military Family Association brochure, newsletter and website.",
            "Photographed subjects and locations to appear in National Military Family Association publications.",
            "Acted as a representative for the National Military Family Association."
        ],
        "Nursing Home Volunteer" : [
            "Arranged transportation to take nursing home patients to physician appointments and shopping.",
            "Provided relief duties for nursing home caregivers.",
            "Provided companionship, comfort and support for nursing home patients.",
            "Assisted with nursing home patients’ personal needs including bathing and transferring.",
            "Assisted nursing patients’ families with housekeeping tasks and running errands."
        ],
        "Office Volunteer" : [
            "Arranged to provide personal assistance to staff such as marketing, answering phones, filing, copying, data entry, etc.",
            "Directed outreach programs to military and nonmilitary communities, made presentations to communities, etc."
        ],
        "Operation Bigs Volunteer" : [
            "Tailored and customized Big Brothers Big Sisters program specifically to children of military personnel.",
            "Coordinated efforts and training for Operation Bigs in accordance with national Big Brothers Big Sisters criteria.",
            "Provided leadership, friendship and mentoring for children through Operation Bigs."
        ],
        "Operation Homefront Administrative Support" : [
            "Assisted in a variety of administrative tasks such as writing letters, processing mailings, filing and setting appointments for Operation Homefront.",
            "Worked with writing memorandums; worked with databases and spreadsheets.",
            "Behind-the-scenes position that allowed Client Services Representatives the time to interact with the military families for Operation Homefront.",
            "Coordinated with Volunteer Coordinator to update and maintain volunteer database.",
            "Performed Operation Homefront clerical-related functions using Microsoft applications and the Internet.",
            "Logged and reported hours to Operation Homefront Director of Client Services."
        ],
        "Operation Homefront Chapter Website Content Manager" : [
            "Utilized advanced knowledge of HTML and Ektron content management systems to establish and maintain a professional, effective and dynamic online presence for a chapter of a national nonprofit organization.",
            "Worked closely with the nonprofit organization’s technical team to maintain site standards and comply with new development demands.",
            "Underwent rigorous content management system software training in order to ensure a consistent and accurate look and feel throughout all Web properties.",
            "Worked cooperatively with key team members of the chapter and national organization."
        ],
        "Operation Homefront Client Services Representative (CSR)" : [
            "Interacted with clients on a personal level to assess the military families’ needs and how Operation Homefront could best meet those needs.",
            "Role-played caseworker to help train the military family to apply for assistance from Operation Homefront.",
            "Maintained communication with military family to ultimately support them in numerous ways."
        ],
        "Operation Homefront Community Presenter" : [
            "Made presentations to community groups involving public speaking.",
            "Attended Operation Homefront mandatory training sessions on presenting for both military and community functions.",
            "Set up Operation Homefront exhibit booth and attended community fairs, events, etc.",
            "Distributed Operation Homefront materials to event attendees.",
            "Answered questions of the attendees and recruited volunteers."
        ],
        "Operation Homefront Event Coordinator" : [
            "Responsible for the success of Operation Homefront events from beginning to end by ensuring proper planning was in place.",
            "Marketed to correct audience, ensured equipment (tables, tents, banners) required was supplied and volunteers were placed.",
            "Planned and coordinated event as designated by Operation Homefront Director of Client Services.",
            "Marketed and provided advance PR as designated by Operation Homefront Director of Client Services.",
            "Distributed Operation Homefront materials to attendees and answered questions about programs and events."
        ],
        "Operation Homefront Event Support" : [
            "Responsible for attending events or programs when available to assist with distribution.",
            "Setup and breakdown of the event, including assembling the tent, tables, chairs and displaying brochures.",
            "Distributed Operation Homefront materials to attendees.",
            "Answered questions about Operation Homefront programs and events and recruited volunteers."
        ],
        "Operation Homefront Furniture Program Coordinator" : [
            "Responsible for facilitating the transport of donated furniture from donors to military families.",
            "Coordinated with the Moving/Transport Coordinators to coordinate pickup and drop-off of donated items for Operation Homefront.",
            "Recorded clients’ information and furniture needs on the Furniture Database.",
            "Worked with the Moving/Transportation Coordinators to organize pickups and deliveries.",
            "Managed the Furniture Database and provided an updated copy to the Director of Client Services twice a month."
        ],
        "Operation Homefront Marketing/Public Relations Coordinator" : [
            "Assisted with the quarterly newsletter, marketing special events, and/or speaking to the public and community service organizations for Operation Homefront.",
            "Developed a marketing plan for Operation Homefront, for use by subsequent staff or volunteers.",
            "Arranged speaking engagements for Operation Homefront board members and paid staff.",
            "Created two Operation Homefront monthly newsletters, The Dispatch (for civilians) and The Bugle (for military).",
            "Assisted in management of Operation Homefront social media, including Twitter and Facebook."
        ],
        "Operation Homefront Moving/Transportation Coordinator" : [
            "Responsible for delivering and transporting donations to military families and/or warehouse for storage for Operation Homefront.",
            "Worked with the donation and project coordinators to ensure the items needed for events and/or projects were delivered in a timely manner.",
            "Met with donors to pick up items and delivered donation to appropriate client.",
            "Communicated and provided a copy of Operation Homefront’s Donation Guidelines to donors.",
            "Delivered donations to one of the Operation Homefront warehouses or directly to the client as needed.",
            "Assisted with military families’ household moves of goods."
        ],
        "Operation Homefront Volunteer Coordinator" : [
            "Recruited volunteers to help with Operation Homefront’s goals, while ensuring that all programs/events needing volunteers were staffed appropriately.",
            "Recruited new volunteers through community outreach and free advertising opportunities.",
            "Interviewed applicants and provided orientation training for new volunteers.",
            "Maintained volunteer database and volunteer files, and kept track of individual volunteer activities, such as hours and training.",
            "Evaluated volunteers’ computer literacy for Operation Homefront.",
            "Coordinated coverage for and attended Operation Homefront special events.",
            "Responsible for volunteer recognition and thank-you."
        ],
        "Operation Homefront Warehouse Coordinator" : [
            "Managed assigned Operation Homefront warehouse; organized and tagged all inventory.",
            "Opened warehouse for pickup or delivery of donated goods.",
            "Respected the confidentiality of families who visit the Operation Homefront warehouse.",
            "Contacted the approved client within 24–48 hours of being notified to coordinate pickup of approved items from Operation Homefront warehouse.",
            "Contacted and met donors who were able to drop off donations at the warehouse.",
            "Helped clients navigate the Operation Homefront warehouse, including directions, gate and parking procedures.",
            "Worked with the Moving/Transportation Coordinators to organize pickups and deliveries."
        ],
        "Organization Board Member" : [
            "Served as a trusted advisor to organizational leaders and advised on the development and implementation of the strategic plan.",
            "Reviewed the organization’s outcomes and metrics to evaluate its impact.",
            "Approved the organization’s annual budget, audit reports and business decisions.",
            "Provided strategic direction and fiduciary program outcomes oversight and ensured the organization was provided with adequate resources."
        ],
        "Outdoor Recreation Activities Assistant" : [
            "Managed all outdoor recreation activities for eligible participants.",
            "Led, directed and participated in hiking, fishing, boating, swimming, camping and biking activities.",
            "Communicated outdoor recreation policies and procedures to all participants in clear and understandable manner.",
            "Trained others in water safety, rules of all games and activities, and types of harmful vegetation in outdoor recreation.",
            "Provided first aid as required through training."
        ],
        "Outdoor Recreation Volunteer" : [
            "Managed, coached and led outdoor recreation activities including hiking and backpacking, camping, rock climbing, biking, and boating.",
            "Served as leader, role model and mentor to outdoor recreation participants.",
            "Demonstrated respect and appreciation of outdoors to other recreation program participants and staff.",
            "Recruited volunteers to teach the appreciation of the outdoors.",
            "Managed outdoor recreation purchases and rentals, equipment repairs, storage, facilities and meeting areas.",
            "Trained outdoor recreation participants in safety procedures for all activities."
        ],
        "Pantry Volunteer" : [
            "Served as Pantry volunteer who assisted in stocking and dispensing shelf-stable items for employees and dependents in need, and maintaining inventory control.",
            "Developed a personalized one-on-one style with Pantry customers and created a personal connection.",
            "Demonstrated a culture of caring and service to Pantry clients.",
            "Led training efforts to achieve goal of caring and service for Pantry program.",
            "Created and managed database to track inventories and perform outreach to replenish Pantry supplies dispensed.",
            "Collaborated and maintained contact with other local organizations to host food stamp clinics, housing clinics, employment and healthcare clinics."
        ],
        "Parade Volunteer" : [
            "Assisted in determining and setting up the parade route.",
            "Registered parade participants and collected applications and injury waivers.",
            "Compiled and delivered required documentation to insurance carriers and local police to legally authorize parade.",
            "Ensured safe environment and cleared path for parade vehicles, animals, participants and spectators.",
            "Took pictures of parade to publicize via website, newsletter and newspaper.",
            "Arranged, scheduled and staffed parade cleanup detail."
        ],
        "Parent Teacher Association President" : [
            "Set up and managed Parent Teacher Association procedure books and bylaws and held regular meetings in adherence with Robert’s Rules of Order",
            "Appointed Parent Teacher Association committee chairs, assigned them appropriate duties and kept updated on their performance and progress",
            "Acted as liaison between school principal and Parent Teacher Association to discuss plans and keep the principal apprised of activities and issues throughout the year",
            "Chaired regular Parent Teacher Association meetings, made membership feel welcome and delegated tasks to interested volunteers",
            "Represented and advocated for Parent Teacher Association at school orientations, open houses and other events"
        ],
        "Parent Teacher Association Vice President" : [
            "Familiar with Robert’s Rules of Order and able to perform duties of Parent Teacher Association President as needed",
            "Represented and advocated for the Parent Teacher Association at meetings, conferences, discussion groups and other activities",
            "Helped lead the Parent Teacher Association toward specific goals chosen by its members",
            "Supported the Parent Teacher Association President and chaired committees as needed"
        ],
        "Parent Teacher Association Secretary" : [
            "Assisted the Parent Teacher Association President in preparing meeting agendas",
            "Recorded and managed brief, objective minutes of each Parent Teacher Association meeting",
            "Prepared and managed reference material to be utilized at Parent Teacher Association meetings",
            "Maintained and stored copies of bylaws, agendas, previous minutes, membership list, officer and committee lists and current reports"
        ],
        "Parent Teacher Association Treasurer" : [
            "Managed and maintained permanent records that track income, dues, receipts, disbursements and number of members for Parent Teacher Association",
            "Chaired the Parent Teacher Association budget committee and prepared and maintained the budget",
            "Received all funds collected by the Parent Teacher Association, distributed receipts, deposited money immediately and retained detailed records of all financial transactions",
            "Reported expenditures to Parent Teacher Association leadership and membership",
            "Responsible for filing all applicable tax forms for Parent Teacher Association"
        ],
        "Parent Teacher Association Membership Chair" : [
            "Led the Parent Teacher Association Membership committee and facilitated its work",
            "Developed and implemented a membership growth plan to direct the activities of the Parent Teacher Association Membership committee",
            "Maintained accurate Parent Teacher Association membership records and administered the distribution of membership cards to local members"
        ],
        "Parent Teacher Association Volunteer" : [
            "Familiar with school, staff and campus as well as governance and policies regarding Parent Teacher Association volunteers",
            "Assisted classroom teachers by providing tutorial help, monitoring lunchrooms and supervising playground activities as a Parent Teacher Association volunteer",
            "Performed school office clerical duties such as answering phone calls, entering data, typing, copying and filing as Parent Teacher Association volunteer",
            "Assisted school library staff as Parent Teacher Association volunteer",
            "Respected confidentiality and legal responsibilities regarding students and school personnel as Parent Teacher Association volunteer"
        ],
        "Personal Finances Volunteer" : [
            "Provided personal finance assistance, education and advocacy for Active Duty and retired military and their family members.",
            "Advocated for military family members against fraud, scams and consumer complaints.",
            "Prescreened for Family Subsistence Supplemental Allowance (FSSA) eligibility for military families.",
            "Provided financial readiness tools to help military families live within means, and save money and invest for future."
        ],
        "Pet Welfare Volunteer" : [
            "Served as technician to care for, feed, and dispense medications for animals at Pet Welfare clinic.",
            "Transported animals in need of veterinarian services to larger animal clinics.",
            "Marketed and assisted in fundraising activities and interacted with public to raise awareness of Pet Welfare clinic shelter needs."
        ],
        "Pharmacy Volunteer" : [
            "Assisted pharmacist with various duties and patient and family interaction.",
            "Counted out and prepared medication under supervision of pharmacist.",
            "Served as pharmacy extender by performing functions such as typing labels, answering patient questions, and receiving calls from physician offices, and insurance companies.",
            "Verified pharmacy patient insurance enrollment."
        ],
        "Political Campaign Volunteer" : [
            "Assisted in voter registration of military families.",
            "Made calls to local voters for political campaign.",
            "Composed letters and directed mailing campaign in military community for political campaign.",
            "Canvassed shoppers at shopping centers for opinions concerning political campaign issues."
        ],
        "Protestant Women of the Chapel (PWOC) President" : [
            "Interfaced with senior management to ensure effective daily functioning of nonprofit community organization.",
            "Established a leadership training program in order to serve the needs of the Protestant Women of the Chapel, including mentoring, supervising and training board members.",
            "Managed an annual budget for the Protestant Women of the Chapel; maintained a balanced budget with no issues following annual audit.",
            "Developed annual goals and objectives with local board members in support of Protestant Women of the Chapel’s national goals and objectives."
        ],
        "Receptionist and Info Center Operations" : [
            "Served as first point of contact for museum clients and visitors.",
            "Communicated with all contacts in pleasant, informative way on behalf of museum.",
            "Distributed fliers, brochures and fundraising requests to public for museum.",
            "Addressed concerns or questions in an articulate and professional manner for museum."
        ],
        "Retired Military Activities Volunteer" : [
            "Provided knowledge of benefits to military retirees.",
            "Expert in Social Security Administration benefits and overlay with military retiree benefits.",
            "Communicated options for transportation and medical visits to military retirees.",
            "Provided introduction to resources within the community that improved the quality of life for military retirees.",
            "Provided friendly, helpful information and fact-checking for military retirees and family."
        ],
        "Retiree Activities Office Volunteer" : [
            "Articulated to military retirees their benefits, rights, privileges and changes in retirement law.",
            "Provided outstanding customer service to all military retirees, families and survivors.",
            "Organized military retiree activities, led workshops and participated as needed."
        ],
        "Retiree Community Information Services Volunteer" : [
            "Provided knowledge of military retiree benefits to military retirees.",
            "Expert in SSA benefits and overlay with military benefits for military retirees.",
            "Communicated options for transportation and medical visits for military retirees.",
            "Provided introduction to resources within the community that improve the quality of life for military retirees.",
            "Provided friendly, helpful information and fact checking for military retirees and families."
        ],
        "RV Park Volunteer" : [
            "Selected volunteers to staff RV park offices and special events and to perform site maintenance.",
            "Coordinated special park activities such as bonfires, cookouts, celebrations, games and festivals.",
            "Cleaned grounds, maintained trails and landscaping, painted equipment, and performed routine maintenance for RV park.",
            "Assisted in RV park office by addressing complaints and problems, scheduling rentals and leases, processing payments, managing accounts, and maintaining policies and procedures."
        ],
        "Salvation Army Volunteer" : [
            "Provided intake and client services to military families seeking assistance from Salvation Army social services.",
            "Guided military families in selecting nutritious food items, hygiene, clothing, household goods and over-the-counter medications through Salvation Army Client Choice system.",
            "Served as mental health counselor and role model for Salvation Army."
        ],
        "Sexual Assault Prevention and Response Volunteer" : [
            "Coordinated sexual assault victim care and assignment of a Victim Advocate to obtain required services.",
            "Conferred with professional crisis intervention, referral and ongoing support personnel for Sexual Assault Prevention and Response.",
            "Provided available reporting options and resources for Sexual Assault Prevention and Response.",
            "Arranged sexual assault victim transportation or accompaniment for investigative interviews, medical exams, and legal and court appointments until support was no longer needed."
        ],
        "Special Needs Provider" : [
            "Cared for special needs children in licensed facility for children aged 2 weeks through 12 years.",
            "Communicated regularly with parents of special needs children about daily activities, observations and concerns.",
            "Exhibited patience, empathy and positive attitude while caring for special needs children.",
            "Assisted special needs children with personal care, learning, life skills training and recreation."
        ],
        "Special Needs Therapeutic Riding Volunteer" : [
            "Responsible for providing a therapeutic approach to physical therapy, emotional therapy and recreational therapy.",
            "Supported children during Therapeutic Riding lessons as required and/or as needed by standing, walking and running beside horses.",
            "Scheduled time with stables for both children and adults with special needs including those with with mental and/or physical disabilities."
        ],
        "Special Olympics Volunteer" : [
            "Worked directly with Special Olympics athlete to improve their event skills and performance.",
            "Performed short-term functions such as meal delivery, escorting Special Olympians to events, score running, timing events, putting medals and ribbons together for Olympians, and chaperoning Olympians.",
            "Scheduled and organized year-round training and competitions for children and adults with intellectual disabilities."
        ],
        "Sports Center Volunteer" : [
            "Observed games and activities, identified rule violations, and ensured flow and pace of events as sports center official/referee.",
            "Instructed all sports center members and staff in CPR and first aid.",
            "Performed all aspects of field management for sports center, including scheduling scorekeepers and officials/referees, ensuring superior field condition, conducting safety inspections, and supervising equipment rental and maintenance.",
            "Assisted with sports center registration, equipment rental, waiver forms, and member records and accounts.",
            "Planned, organized and directed all aspects of tournaments for sports center.",
            "As sports center scorekeeper, displayed expert knowledge of all game rules, kept accurate and detailed records of scores and other game data, and facilitated the display and announcement of scores."
        ],
        "Tax Center Volunteer" : [
            "Provided authorized personnel to assist clients with filing personal income tax.",
            "Assisted clients with filing personal income tax and answered all client questions concerning the current tax code.",
            "Trained in income tax preparation as an authorized preparer for the Tax Center.",
            "Addressed all clients/customers with professional service at the Tax Center."
        ],
        "The American Legion" : [
            "As American Legion volunteer, helped process disability claims appeals for military families trying to get their VA medical benefits.",
            "Provided emergency financial assistance through The American Legion to Legion families hit by hurricanes, floods, tornadoes and other disasters.",
            "Collected applications and helped award college scholarships to children whose mothers or fathers have sacrificed their lives in the global war on terrorism.",
            "Supported families of deployed troops through the Family Support Network and Operation via The American Legion."
        ],
        "The Blood Alliance Volunteer" : [
            "Assisted the Red Cross during blood drives.",
            "Communicated directly with blood donors and staff to remind them about appointment times.",
            "Performed marketing to community to offer information, giveaways and other prizes to blood donors."
        ],
        "Thrift Shop Volunteer" : [
            "Managed, organized and evaluated condition of existing merchandise for consumer use for gently used clothing at Thrift Shop.",
            "Responsible for positive customer service for Thrift Shop prior to, during and after selection.",
            "Managed many retail aspects of Thrift Shop store operations and customer service.",
            "Inventoried, selected and displayed Thrift Shop merchandise in most favorable and trafficked areas.",
            "Planned regular encounters with client consumers to assist in Thrift Shop item selection and to solve problems."
        ],
        "United Service Organizations (USO) Administrative and Special Events Volunteer" : [
            "Conducted outreach and rapport development initiatives among organization’s targeted audience, resulting in increased customer service and satisfaction.",
            "Planned and implemented special projects at the discretion of USO director, including fundraising events and community outreach initiatives.",
            "Established and maintained spreadsheet records of USO statistical information that contributed to the successful application for additional grant funds."
        ],
        "United Service Organizations (USO) Center Volunteer" : [
            "Advanced leadership and organizational objectives by determining and providing appropriate and high-quality customer service.",
            "Conducted outreach and rapport development initiatives among target clients, resulting in higher client satisfaction and an increased number of repeat clients.",
            "Developed and implemented a more efficient restocking system for food sales component organization.",
            "Managed guests’ online wireless access and usage to ensure high levels of client satisfaction.",
            "Employed technical skills to effectively manage and troubleshoot Internet access problems, reducing the number of required service visits and costs."
        ],
        "United Service Organizations (USO) Team Leader Volunteer" : [
            "Coordinated with USO staff in operational support activities by serving as a liaison between USO management and staff in the resolution of day-to-day administrative and operational problems.",
            "Motivated, managed and scheduled a staff of USO volunteers to ensure optimal service to USO patrons.",
            "Trained all new volunteers regarding proper USO policies and procedures.",
            "Ensured USO center opened and closed appropriately and safely per the airport authority’s security requirements and guidelines.",
            "Ensured stewardship of campaign donors through acknowledgments, recording donors in Raiser's Edge database and monthly newsletters."
        ],
        "United Service Organizations (USO) Volunteer" : [
            "Helped USO center volunteers answer phones, greet guests and check military IDs.",
            "Oversaw USO volunteers who prepared sandwiches and refreshments.",
            "Assisted military guests with airport information, flight information and ground transportation.",
            "Utilized skills for USO in fundraising, marketing, event planning and other similar skills to assist on fundraising/special events committees."
        ],
        "Veterinary Treatment Facility Volunteer" : [
            "Served as technician to care for, feed and dispense medications for animals at animal care clinic.",
            "Transported animals in need of veterinarian services to clinics.",
            "Marketed and assisted in fundraising activities and interacted with public to raise awareness of shelter needs.",
            "Evaluated hygiene and cleanliness of animals in animal care clinic.",
            "Provided assistance in other roles as needed."
        ],
        "Volunteer Coordination Team (VCT) Disaster Relief Volunteer" : [
            "Provided management and operating oversight for volunteer recruitment, management and referral for disaster relief.",
            "Provided management logistics for a donations management warehouse for distribution of food, clothing, water and other items needed for disaster relief.",
            "Recruited and registered volunteers as disaster relief response teams.",
            "Maintained volunteer housing contacts for disaster relief.",
            "Recruited, registered, trained and assigned volunteers for disaster relief efforts.",
            "Provided food and drink for disaster relief volunteers."
        ],
        "Volunteer Coordinator" : [
            "Recruited, screened, interviewed and trained new volunteers.",
            "Reviewed new cases and assigned appropriate volunteers.",
            "Planned, organized and supervised volunteer appreciation events.",
            "Developed initial case plans and ongoing strategies for advocacy.",
            "Assisted volunteers with casework, stat sheets and evaluations."
        ],
        "Yellow Ribbon Reintegration Program Volunteer" : [
            "Provided Yellow Ribbon Reintegration Program training, information and assistance to military personnel, civilians and their families.",
            "Assisted individual readiness of military unit throughout the entire Yellow Ribbon Reintegration Program.",
            "Provided Yellow Ribbon Reintegration Program guidance, resources and training for military personnel, civilians and their families.",
            "Provided Yellow Ribbon Reintegration information and material to military personnel, civilians and their families."
        ],
        "Youth Center Volunteer" : [
            "Managed, coached and taught all sports activities of boys and girls.",
            "Served as leader, role model and mentor to young boys and girls.",
            "Demonstrated appropriate behavior to youth in sports and life.",
            "Background certified Tier 1 Supervision.",
            "Worked with youth of various ages to improve and maintain their physical, social and mental well-being."
        ],
        "Youth Sports and Fitness Volunteer" : [
            "Managed, coached and taught all sports activities and fitness of boys and girls.",
            "Served as fitness leader, role model and mentor to young boys and girls.",
            "Demonstrated appropriate behavior to youth in sports and life.",
            "Background-certified Tier 1 Supervision."
        ],
    },
};

var cert_data = {"Administrative":["Certified Administrative Professional (CAP)","Certified Professional Secretary (CPS)","Notary Public Certification","Notary Signing Agent (NSA)"],"Business":["Adobe Certified Expert","Project Management Professional (PMP)","Certified Grant Writer Credential","Grant Professional Certification"],"Childcare":["Certified Child Life Professional (CCLP)","Certified Childcare Professional (CCP)","Child Development Associate (CDA)"],"Dental":["Certified Dental Assistant (CDA)","Certified Orthodontic Assistant (COA)","Certified Dental Technician","Dental Assistant (DA)"],"Education":["National Administrator Credential (NAC)","National Board Certification","Special Education (SPED) Certification","English as a Second Language (ESL) Certification","Teaching English as a Foreign Language (TEFL) Certification","Teachers of English to Speakers of Other Languages (TESOL) Certification","Certified Translator"],"Events Planning":["Certified Special Events Professional (CSEP)"],"Financial":["Certified Public Accountant (CPA)","Certified Financial Planner (CFP)","Certified Management Accountant (CMA)","Chartered Financial Analyst (CFA)","Certified Internal Auditor (CIA)","Financial Risk Manager (FRM)","Certified Accounts Payable Associate (CAPA)","Certified Accounts Payable Professional (CAPP)","Accredited Tax Preparer (ATP)","Accredited Tax Advisor (ATA)","Registered Tax Return Preparer (RTRP)","Certificate in General Insurance (INS)"],"First Aid":["Cardiopulmonary Resuscitation (CPR)","Automated External Defibrillator (AED)","Basic Life Support (BLS)","Basic Cardiac Life Support (BCLS)","Advanced Cardiac Life Support (ACLS)","Pediatric Advanced Life Support (PALS)"],"Food Service":["Personal Certified Chef (PCC)","Certified Food Associate (CFA)","Certified Food Manager (CFM)","Certified Food Executive (CFE)","Certified Foodservice Professional (CFSP)","Certified Executive Chef (CEC)","Certified Baker"],"Healthcare Business\/Billing":["Certified Professional Coder (CPC)","Certified Professional Coder - Outpatient Hospital (CPC-H)","Certified Professional Coder - Payer (CPC-P)","Certified Professional Biller (CPB)","Certified Professional Medical Auditor (CPMA)","Certified Physician Practice Manager (CPPM)","Certified Billing and Coding Specialist (CBCS)","Medical Administrative Specialist","Certified Documentation Improvement Practitioner (CDIP)","Certified Coding Specialist (CCS)","Certified Coding Specialist - Physician-Based (CCS-P)","Certified Coding Associate (CCA)","Certified in Healthcare Privacy and Security (CHPS)","Nationally Certified Insurance and Coding Specialist (NCICS)","Registered Medical Transcriptionist (RMT)","Certified Medical Administrative Assistant (CMAA)","Certified Patient Account Technician (CPAT)","Certified Clinic Account Technician (CCAT)","Certified Clinic Account Manager (CCAM)"],"Healthcare Information Technology":["Certified Professional in Health Information Technology (CPHIT)","Certified Professional in Health Information Exchange (CPHIE)","Registered Health Information Administrator (RHIA)","Certified Health Data Analyst (CHDA)","Registered Health Information Technician (RHIT)"],"Hospitality":["Hospitality Skills Certification (HSC) for Front Desk Representative","Hospitality Skills Certification (HSC) for Guest Room Attendant","Certified Hospitality Supervisor (CHS)","Certified Hospitality Housekeeping Executive (CHHE)","Certified Hotel Administrator (CHA)"],"Human Resources\/Counseling":["Professional Certification in Mediation (PCM)","Professional in Human Resources (PHR)","Senior Professional in Human Resources (SPHR)","National Certified Counselor (NCC)","Certified Speaking Professional (CSP)"],"Information Technology":["Microsoft Certified Trainer","Microsoft Certified Professional (MCP)","Microsoft Certified IT Professional (MCITP)","Microsoft Office Specialist (MOS)","Microsoft Certified Solutions Expert (MCSE)","Certified Information Systems Security Professional (CISSP)"],"Legal":["Accredited Legal Secretary (ALS)","Professional Legal Secretary (PLS)","Certified Professional Paralegal (CPP)","Certified Paralegal (CP)","Advanced Paralegal Certification (APC)"],"Medical Care":["National Emergency Medical Services (EMS) Certification","Nationally Certified First Responder","EMT - Basic (Emergency Medical Technician)","EMT - Intermediate","Paramedic","Certified Nurse Assistant (American Red Cross)","Certified Phlebotomy Technician","\"Phlebotomy Technician, PBT (ASCP)\"","\"Histotechnician, HT (ASCP)\"","\"Medical Laboratory Technician, MLT (ASCP)\"","\"Donor Phlebotomy Technician, DPT (ASCP)\"","Certified Surgical Assistant","Certified Surgical First Assistant","American Registry of Radiologic Technologists (ARRT)","Certified Clinical Medical Assistant (CCMA)","Home Health Aide (HHA)","Certified Occupational Therapy Assistant (COTA)"],"Miscellaneous":["Leadership in Energy and Environmental Design (LEED) Certification","Commercial Driver\u00d5s License (CDL)"],"Nursing":["Associate Degree Nurse (ADN)","Licensed Practical Nurse (LPN)","Registered Nurse (RN)","Nurse Practitioner (NP)","Family Nurse Practitioner (FNP)","Critical Care Registered Nurse (CCRN)","Acute Care Nurse Practitioner (ACNP)","Adult Nurse Practitioner (ANP)","Gerontological Nurse Practitioner (GNP)","Pediatric Primary Care Nurse Practitioner (PPCNP)","Pediatric Nurse Practitioner (PNP)","School Nurse Practitioner (SNP)","Nurse Executive (NE)","Certified Medical-Surgical Registered Nurse (CMSRN)","Certified Nursing Assistant (CNA)"],"Pharmacy":["Board-Certified Nutrition Support Pharmacist","Board-Certified Nuclear Pharmacist","Board-Certified Oncology Pharmacist","Board-Certified Pharmacotherapy Pharmacist","Board-Certified Psychiatric Pharmacist","Board-Certified Ambulatory Care Pharmacist","Board-Certified Critical Care Pharmacist","Board-Certified Pediatric Pharmacist","Certified Pharmacy Technician (CPT)"],"Public Relations\/Marketing\/Advertising":["Accreditation in Public Relations (PR)","Certified Professional Services Marketer (CPSM)","Professional Certified Marketer (PCM)","DMA-Certified Marketing Professional (DCMP)"],"Real Estate":["General Accredited Appraiser (GAA)","Residential Accredited Appraiser (RAA)","Graduate - REALTOR Institute (GRI)"],"Retail\/Sales":["Retail Business Credential","National Professional Certification in Sales","National Professional Certification in Customer Service","National Professional Certification in Retail Management","Certified Professional Salesperson","Certified Sales Executive (CSE)","Sales & Marketing Executives International (SMEI)-Certified Professional Salesperson","National Council for Interior Design Qualification (NCIDQ) Certificate","Certified Interior Decorator","Council for Qualification of Residential Interior Designers (CQRID)-Certified"],"Social Work - Addictions":["\"Certified Clinical Alcohol, Tobacco, and Other Drugs Social Worker (C-CATODSW)\""],"Social Work - Case Management":["Certified Advanced Social Work Case Manager (C-ASWCM)","Certified Social Work Case Manager (C-SWCM)"],"Social Work - Clinical":["Qualified Clinical Social Worker (QCSW)","Clinical Social Worker in Gerontology (CSW-G)","\"Certified Clinical Alcohol, Tobacco, and Other Drugs Social Worker (C-CATODSW)\""],"Social Work - Education":["Certified School Social Work Specialist (C-SSWS)"],"Social Work - Gerontology":["Clinical Social Worker in Gerontology (CSW-G)","Social Worker in Gerontology (SW-G)","Advanced Social Worker in Gerontology (ASW-G)"],"Social Work - Healthcare":["Certified Social Worker in Health Care (C-SWHC)"],"Social Work - Hospice and Palliative":["Advanced Certified Hospice and Palliative Social Worker (ACHP-SW)","Certified Hospice and Palliative Social Worker (CHP-SW)"],"Social Work - Leadership":["Academy of Certified Social Workers (ACSW)","Diplomate in Clinical Social Work (DCSW)"],"Social Work - Military":["\"Military Service Members, Veterans, and Their Families - Social Worker (MVF-SW)\"","\"Military Service Members, Veterans, and Their Families - Advanced Social Worker (MVF-ASW)\"","\"Military Service Members, Veterans, and Their Families - Clinical Social Worker (MVF-CSW)\""],"Social Work - Youth and Family":["\"Certified Advanced Children, Youth, and Family Social Worker (C-ACYFSW)\"","\"Certified Children, Youth, and Family Social Worker (C-CYFSW) \""],"Sports\/Fitness":["National High School Coaches Association (NHSCA) Coach Certification","Health Coach Certification","Personal Trainer Certification","Group Fitness Instructor Certification","Primary Group Exercise Certification","Strength Trainer Certification","Aquatic Instructor Certification","Cycle Instructor Certification","Certified Strength and Conditioning Specialist (CSCS)"],"Therapy":["Certificate of Clinical Competence in Speech-Language Pathology (CCC-SLP)"],"Transcription\/Interpretation":["Registered Medical Transcriptionist","Certified Medical Transcriptionist","Certified Medical Interpreter"],"Veterinary":["Certified Manager Animal Resources (CMAR)","Certified Veterinary Practice Manager (CVPM)","Certified Veterinary Assistant (CVA)"]};

var personal_skills =
    ["Articulate ","Artistic","Budget Planning","Capable Problem Solver ","Communication ","Conversational Spanish ","CPR","Customer Service","First Aid","Fluent in Spanish ","Decisive","Delegating Responsibilities","Detail Oriented ","Goal Setting ","Interpersonal Skills","Leadership ","Logistics ","Mac Proficiency","Mediation ","Microsoft Excel ","Microsoft PowerPoint ","Microsoft Word ","Motivational ","Negotiation ","Organization","Outgoing ","Persevering ","Personnel Management","Planning","Project Management","Resource Management ","Stress Management ","Versatile ","Windows Proficiency"];

_app.factory('model', function() {
    var model = {section: null, editing: null, states: state_list};
    return model;
});
_app.factory('ViewCache', function() {
    var ViewCacheInstance = {};
    return ViewCacheInstance;
});
_app.factory('Collection', function() {
  var CollectionInstance = {
    divideArrayIntoSections: function (array, totalSections) {
      var sections = [],
        number_of_items,
        clone = array.slice(); // Clone the original array to keep this method side-effect free

      for (var l=0; l < totalSections; l++) {
        number_of_items = Math.ceil(clone.length / (totalSections - l));
        sections[l] = clone.splice(0, number_of_items);
      }

      return sections;
    },
    shuffleArray: function (array) {
      var length = array.length;
      var shuffled = array.slice(0); // clone the original array to keep this method side-effect free

      for (var i=length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var currentValue = shuffled[j];
        shuffled[j] = shuffled[i];
        shuffled[i] = currentValue;
      }

      return shuffled;
    }
  };

  return CollectionInstance;
});
_app.factory('Modals', function(model, $compile, $http, $rootScope, Guidance, sectionSelectionFilter) {

    var Modals = {};


    // THE OPTIONS ARE
    //// widescreen
    //// laptop
    //// tablet
    //// mobile


    Modals.loadPartial = function(name, template, dont_show, callback, $scope) {
        if(!name || !template) { return; }
        if (undefined === $scope.views[name]) $scope.views[name] = {};

        if (!$scope.views[name][template]) {
            $scope.views[name][template] = 'loading';
            var part = (name=='account') ? '/bundles/chamberfrontend/js/' : '/bundles/chamberfrontend/js/resume/';
            //console.log(part + name + '/' + template);
            $http.get(part + name + '/' + template).success(function(data) {
                $scope.views[name][template] = data;
                if (!dont_show) { Modals.showDialog(data, name, template, $scope); }
                else { showSection(name, template, $scope); }
                $scope.send('partialLoaded', name, template, callback);
            });
        } else {
            if (!dont_show) { Modals.showDialog($scope.views[name][template], name, template, $scope); }
            else { showSection(name, template, $scope); }
            $scope.send('partialLoaded', name, template, callback);
        }
    };

    Modals.showDialog = function(html, name, template, $scope) {
        $('.wrapper').addClass('transition');
        $scope.send('beforeOpen');
        if (!$('.' + name).hasClass('current') && $('.' + name).hasClass('disabled')) return false;
        $scope.editing = (name == 'resume') ? 'work_experience' : name;
        $scope.editing = (name == 'experience') ? 'work_experience' : $scope.editing;
        $scope.editing = (name == 'info') ? 'personal_info' : $scope.editing;
        $scope.editing = (name == 'skills') ? 'personal_skills' : $scope.editing;
        $scope.editing = (name == 'fb_logout') ? 'fb_logout' : $scope.editing;
        newContent = $compile(html)($scope);

        vex.defaultOptions.className = 'vex-theme-os';
        if (name != 'resume' && name != 'account' && name != 'category') {
            var cls = $scope.editing;
            var eTop = $('.' + cls).offset().top;
            var mTop = eTop - $(window).scrollTop();
            var ht, mlt, b_ht, b_w, b_mlt, d_w;
        }

        if (_ie && _ie <= 9) $('body').css('overflow', 'hidden');

        Guidance.hideTips(); // hide tooltips

        $scope.views.$vexContent = vex.open({

            content: newContent,
            afterOpen: function($vexContent) {
                if (name != 'resume' && name != 'account' && name != 'category') {
                    d_w = $(document).width();
                    ht = parseInt($('.vex-content').height()) - 40 + 'px';
                    mlt = ((d_w - 782) / 2);
                    b_ht = $('.' + name).height() + 'px';
                    b_w = $('.' + name).width();
                    b_mlt = 782 - b_w;
                    b_mlt = (name == 'info' || name == 'certifications') ? b_mlt : 0;
                    $scope.views.mTop = mTop;
                    $scope.views.b_ht = b_ht;
                    $scope.views.ht = ht;
                    $scope.views.b_w = b_w;
                    $scope.views.mlt = mlt;
                    $scope.views.b_mlt = b_mlt;
                    $('.vex-content').css('margin-top','55px');


                    if ($scope.viewSize == 'widescreen') {
                        $('.vex-content').css({
                            width: b_w + 'px',
                            height: b_ht,
                            'margin-top': mTop + 'px',
                            'margin-left': mlt + b_mlt + 'px'
                        }).animate({
                            width: '782px',
                            height: ht,
                            'margin-top': '55px',
                            'margin-left': mlt + 'px'
                        }, 300, function() {
                            $(this).css('height', 'auto');
                        });
                    }
                }

                $scope.send('afterOpen');

                if ($('.content-wrapper.jvFloat').length < 1) {
                    $('.content-wrapper input[type="text"], .content-wrapper input[type="password"]').jvFloat();
                }
                if (!Modernizr.checked) {
                    $('input:radio, input:checkbox').checkedPolyfill();
                }

                $('input:radio + label span, input:checkbox + label span').keypress(function(e) {
                    var value = $('#' + $(this).parent().attr('for')).val();
                    if (e.which == 13 || e.which == 32) {
                        $(this).parent().trigger('click');
                        $scope.$apply();
                    }
                });

                $('input:radio + label, input:checkbox + label').on('click', function() {
                    var value = $('#' + $(this).attr('for')).val();
                    $(this).find('span').focus();
                    $('.cs-invalid').removeClass('cs-invalid');
                    $('.errors').css('display', 'none');
                });

                setTimeout(function() {
                    $('.vex-content .content-wrapper').addClass('show');
                    $('.jvFloat > input').each(function() {
                        if ($(this).val() != '') $(this).parent().find('.placeHolder').addClass('active');
                    });

                    $('form[name="form_modal"]').find(':input').each(function() {
                        if ($(this).attr('type') != 'button' && $(this).prop('tagName') != 'BUTTON') {
                            $(this).focus(function() {
                                $(this).removeClass('cs-invalid').parent().parent().find('.errors').css('display', 'none');
                            });
                        }
                    });
                    $scope.$apply();
                }, 300);
            },
            beforeClose: function() {
                ht = $('.vex-content').height() + 'px';
                $('.vex-content .content-wrapper').removeClass('show');
                if ($scope.viewSize == 'widescreen') {
                    $('.vex-content').animate({
                        width: b_w + 'px',
                        height: b_ht + 'px',
                        'margin-top': mTop + 'px',
                        'margin-left': mlt + b_mlt + 'px'
                    }, 300);
                }
                if (!$('.'+$scope.views.current).hasClass('editing')) {
                    $scope.revalidate(false, 'processInput', $scope);
                }
                if (_ie && _ie <= 9) $('body').css('overflow', 'auto');
            },
            afterClose: function() {
                model.editing = null;
                //$scope.rd.undoEdit($scope);
                $('.section').removeClass('selected');
                $('.vex-content .content-wrapper, .vex-content .content-wrapper *').off();
                $scope.send('afterClose');
                $('.vex-content .content-wrapper').remove();
                $scope.$apply();
            }
        });
    };

    Modals.gotoSection = function(name, template, $scope) {
        console.log('gotoSection');
        //if ($scope.rd.organizing && name == 'work_experience') name = '*work_experience';
        var scope = (!scope) ? angular.element('.content-wrapper').scope() : null;
        $('.vex-content .content-wrapper, .vex-content .content-wrapper *').off();
        if(scope) { scope.$destroy(); }
        $('.vex-content .content-wrapper').css('opacity', 0);
        //$('.vex-content .content-wrapper').remove();
        Modals.loadPartial(name, template, true, 'showSection', $scope);
    };

    function showSection(name, template, $scope) {
        console.log('showSection');
        //$scope.editing = name;
        var html = $compile($scope.views[name][template])($rootScope);
        $close = $('.vex-close').clone(true);
        $('.vex-content').html(html).append($close);
        $scope.send('afterOpen');
        $('.vex-content .content-wrapper').addClass('show').css('opacity', 1);
    }

    Modals.closeModal = function($scope) {
        model.editing = null;
        vex.close($scope.views.$vexContent.data().vex.id);
        Guidance.highlightSection($scope);
        model.errors = null;
    };

    Modals.delayedClose = function($scope) {
        window.undoEdit = undefined;
        //$scope.rd.current_template = 'index.html';
        $('.vex-content .content-wrapper, .vex-overlay').css('display','none');
        if ($scope.viewSize == 'widescreen') {
            $('.vex-content').animate({
                width: $scope.views.b_w + 'px',
                height: '40px',
                'margin-top': '24%',
                'opacity': 0,
                'margin-left': $scope.views.mlt + $scope.views.b_mlt + 'px'
            }, 0, function(){
                $('.vex').css('visibility', 'hidden');
            });
        } else
        if ($scope.viewSize == 'widescreen') {
            setTimeout(function(){
                //$scope.send('closeModal');
                Modals.closeModal($scope);
            }, 500);
        } else
        /*if ($scope.viewSize == 'regular')*/ {
            setTimeout(function(){
                //$scope.send('closeModal');
                Modals.closeModal($scope);
            }, 0);
        }
    };

    return Modals;
});

_app.factory('Guidance', function(model, sectionSelectionFilter) {

  var Guidance = {};
  var initialized = false;

  function init() {
    if(!initialized) {
        setTimeout(function() {
            $(".section").each(function() {
                var tip = $(this).data('ot');//$scope.getTooltip($(this));
                new Opentip($(this), tip, {style: "section"}); // create tooltip
            });
        }, 200);
        initialized = true;
    }
  }

  Guidance.highlightSection = function($scope) {
        init();
        model.section = sectionSelectionFilter($scope.rd); //getCurrentSection();
        //$('.section.'+$scope.views.current).removeClass('disabled').addClass('current');
        setTimeout(function() {
            var tip = $('.section.current').data("opentips");
            if (tip) tip[0].show();
            //$scope.grabCursor();
        }, 500);
  }

  Guidance.hideTips = function() {
    try{
      for(var i = 0; i < Opentip.tips.length; i ++) { Opentip.tips[i].hide(); }
    } catch(e){}
  }

  return Guidance;

});

Opentip.styles.section = {
  showOn: null,
  hideOn: ['mouseout'],
  target: true,
  tipJoint: "bottom",
  group: "section",
  background: '#394264',
  borderColor: '#394264',
  borderRadius: 10,
  stemLength: 10,
  stemBase: 15,
};
_app.factory('CategoryHelper', function() {
  var CategoryHelper = {};

  CategoryHelper.pullCategories = function(WorkExperience) {
    var categories = WorkExperience.categories = [];
    var uncategorized = {name:'Uncategorized', responsibilities:[], uncategorized:true};

    var jobs = WorkExperience.jobs;
    for(i = 0; i < jobs.length; i++) {
      for(x = 0; x < jobs[i].responsibilities.length; x++){
        var responsibility = jobs[i].responsibilities[x];
        if(responsibility.category) {
          var category = CategoryHelper.findCategory(responsibility.category.name, categories);
          if(!category) { categories.push(category = responsibility.category) };
          if(!category.responsibilities) { category.responsibilities = []; }
          category.responsibilities.push(responsibility);

        } else {
          uncategorized.responsibilities.push(responsibility);
        }
        delete responsibility.category;
      }
    }

    // set initial sort orders
    categories.sort(sortBySortIndex);
    categories.push(uncategorized);
    CategoryHelper.clearSortIndices(categories);

    for(var i=0; i<categories.length; i++) {
      var category = categories[i];
      category.responsibilities.sort(sortBySortIndex);
      CategoryHelper.clearSortIndices(category.responsibilities);
    }

  }

  CategoryHelper.pushCategories = function(WorkExperience) {
    var categories = WorkExperience.categories;
    for(var i=0; i<categories.length; i++) {
      var responsibilities = categories[i].responsibilities;
      var category = categories[i].name != 'Uncategorized' ? {name: categories[i].name, sort_index: i} : null;
      if(responsibilities){
        for(var x=0; x<responsibilities.length; x++) {
          responsibilities[x].sort_index = x;
          responsibilities[x].category = category;
        }
      }
    }
  }

  CategoryHelper.cleanCategories = function(WorkExperience) {
    var categories = WorkExperience.categories;
    for(var i=0; i<categories.length; i++) {
      var responsibilities = categories[i].responsibilities;
      if(responsibilities){
        for(var x=0; x<responsibilities.length; x++) {
          delete responsibilities[x].sort_index;
          delete responsibilities[x].category;
        }
      }
    }
  }
/*
  CategoryHelper.addCategory = function(new_cat, WorkExperience) {
    WorkExperience.categories.unshift({name: new_cat});
  };
/*
  CategoryHelper.updateCategory = function(old_cat, new_cat, WorkExperience) {
    var i,x,r;
    var jobs = WorkExperience.jobs;
    for(i = 0; i < jobs.length; i++) {
      for(x = 0; x < jobs[i].responsibilities.length; x++){
        r = jobs[i].responsibilities[x];
        if(r.category && r.category.name === old_cat ) {
          r.category.name = new_cat;
          if(new_cat==null) { r.category = null; }
        }
      }
    }

    var category = findCategory(old_cat, WorkExperience.categories);
    if(category) { category.name = new_cat; }
  };
*/
  CategoryHelper.deleteCategory = function(category, WorkExperience) {
    //CategoryHelper.updateCategory(cat_name, null, WorkExperience);

    // remove category object
    var categories = WorkExperience.categories;
    var index = categories.indexOf(category);
    categories.splice(index, 1);

    // reassign responsibilities
    var uncategorized = CategoryHelper.findCategory('Uncategorized', categories);
    uncategorized.responsibilities = uncategorized.responsibilities.concat(category.responsibilities);
  };

  CategoryHelper.findCategory = function(cat_name, categories) {
    for(var i=0; i < categories.length; i++) {
      if(categories[i].name==cat_name) { return categories[i]; }
    }
    return null;
  }

  CategoryHelper.setSortIndices = function(items) {
    for(var i=0; i<items.length; i++) {
      items[i].sort_index = i;
    }
  }

  CategoryHelper.clearSortIndices = function(items) {
    for(var i=0; i<items.length; i++) {
      delete items[i].sort_index;
    }
  }

  function sortBySortIndex(a, b) {
    if(a.sort_index < b.sort_index) { return -1; }
    else if(a.sort_index > b.sort_index) { return 1; }
    else { return 0; }
  }

  return CategoryHelper;
});

_app.factory('Indeed', function() {
  var IndeedInstance = {
    getDefaultOptions: function () {
      return {
        publisher: '3376138919185736',
        v: 2,
        format: 'json',
        callback: '',
        q: '',
        start: 0,
        limit: 5,
        fromage: 14,
        filter: 1
      };
    },
    findJobs: function (options, success) {
      // Angular uses .'s when using JSONP_CALLBACK which is not allowed by indeed.  In an effort to keep our angular
      // controllers clean I'm using jQuery's .ajax method.
      $.ajax({
        url: '//api.indeed.com/ads/apisearch',
        dataType: 'jsonp',
        type: 'GET',
        data: options || this.getDefaultOptions(),
        success: success
      });
    }
  };

  return IndeedInstance;
});
(function(angular) {

  var _scope = null;
  var _http = null;

  var module = angular.module('angulartics.metriclog', ['angulartics']);


  /**
   * @ngdoc overview
   * @name angulartics.metriclog
   * Connects analytics to Mongo DB metriclog endpoint
   */

  module.config(function ($analyticsProvider) {

    $analyticsProvider.settings.trackRelativePath = true;

    $analyticsProvider.registerPageTrack(function (path) {
      //console.log('this is a metriclog page test ' + path);
      /*if(_scope && _scope.rd.__auth && _scope.rd.__auth.user_id) {
        _http.post(window.api_url + '/analytics/metriclog/' + _scope.rd.__auth.user_id + '/page/' + path);
      }*/
      if (window._gaq) _gaq.push(['_trackPageview', path]);
      if (window.ga) ga('send', 'pageview', path);
    });

    /**
     * Track Event in GA
     * @name eventTrack
     *
     * @param {string} action Required 'action' (string) associated with the event
     * @param {object} properties Comprised of the mandatory field 'category' (string) and optional  fields 'label' (string), 'value' (integer) and 'noninteraction' (boolean)
     *
     * @link https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#SettingUpEventTracking
     *
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     */

    $analyticsProvider.registerEventTrack(function (action, properties) {
      //console.log('this is a metriclog test ' + properties.event + ' ' + properties.label);
      if(_scope && _scope.rd.__auth && _scope.rd.__auth.user_id) {
        _http.post(window.api_url + '/analytics/metriclog/' + _scope.rd.__auth.user_id + '/' + action + '/' + properties.label);
      }

      var axel = Math.random() + "";
      var a = axel * 10000000000000;
      if(properties.label=='searchable_online') { // resume completion floodlight tag
        $('body').append('<iframe src="https://621119.fls.doubleclick.net/activityi;src=621119;type=careersp;cat=caspark3;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
      } else if(properties.label=='account_created') { // create account floodlight tag and pixel
        $('body').append('<iframe src="https://621119.fls.doubleclick.net/activityi;src=621119;type=careersp;cat=caspark2;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
        $('body').append('<img src="https://ads.undertone.com/t?trackerid=4433&cb=' + a + '" style="display: none;" width="0" height="0" alt="" />');
      } else if(properties.label=='signup_initiate') { // when the user shows interest by clicking the create account or discover links
        $('body').append('<iframe src="https://621119.fls.doubleclick.net/activityi;src=621119;type=careersp;cat=caspark4;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
      } else if(properties.label=='profile_saved') { // when the user completes their profile information (client labels this 'Create an Account')
        $('body').append('<iframe src="https://621119.fls.doubleclick.net/activityi;src=621119;type=careersp;cat=caspark5;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
      } else if(properties.label=='certifications_complete') { // when the user completes their certifications (client labels this 'Completed a Resume')
        $('body').append('<iframe src="https://621119.fls.doubleclick.net/activityi;src=621119;type=careersp;cat=caspark6;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
      }

      // google analytics
      //console.log('this is a ga test ' + properties.event + ' ' + properties.label);
      if (window._gaq) {
        _gaq.push(['_trackEvent', properties.category, action, properties.label, properties.value, properties.noninteraction]);
      }
      else if (window.ga) {
        if (properties.noninteraction) {
          ga('send', 'event', properties.category, action, properties.label, properties.value, {nonInteraction: 1});
        } else {
          ga('send', 'event', properties.category, action, properties.label, properties.value);
        }
      }

    });

  });

  module.run(function ($rootScope, $http) {
    _scope = $rootScope;
    _http = $http;
  });

})(angular);

_app.factory('queue', ['$http', function($http) {
  var QueueInstance = {
    insert: function(data) {
      $http.post(window.api_url + '/queue/', data)
        .success(function(data, status, headers, config) {

        }).error(function(data, status, headers, config) {

        });
    }
  };

  return QueueInstance;
}]);
(function() {
    "use strict";

    function openList() {
        $(".chamber-nav__menu").addClass('_is-open');
    }

    function closeList() {
        $(".chamber-nav__menu").removeClass('_is-open');
    }

    $(document).on('click', function(e) {
        "use strict";

        // True, if click outside of element or
        // the sidebar is open and

        if (!$(e.target).closest('.chamber-nav__menu').length ||
            ($(e.target).closest('.chamber-nav__menu .menu-button').length &&
            $('.chamber-nav__menu').hasClass('_is-open'))) {
            closeList();

            //ELSE clicked on element or any of its children
        } else {
            openList();
        }
        if ($(e.target).closest('.chamber-nav__menu').length &&
            (!$(e.target).closest('.chamber-nav__menu .menu-button').length &&
            $('.chamber-nav__menu').hasClass('_is-open'))) {
            closeList();
        }
    });
    
})();

_app.filter('trustAsHtml', function ($sce) {
    return function (input) {
        return $sce.trustAsHtml(input);
    }
});

_app.filter('iif', function () {
   return function(input, trueValue, falseValue) {
        return input ? trueValue : falseValue;
   };
});

_app.filter('formatPhone', function () {
    return function (input) {
        if (!input) return '';
        return '('+ input.substr(0,3) + ') ' + input.substr(3,3) + '-' + input.substr(6,4);
    }
});
_app.filter('resumeProgress', function () {
    return function (rd) {
        var progress = 0;
        if(rd.PersonalInfo.email) { progress += 10; }
        if(rd.Education.getSchools().length > 0) { progress += 5; }
        if(rd.Certifications.certs.length > 0) { progress += 5; }
        if(rd.WorkExperience.jobs.length > 0) { progress += 60; }
        if(rd.PersonalSkills.skills.length > 0) { progress += 10; }
        if(rd.Summary.text && rd.Summary.text != '') { progress += 10; }
        return progress;
    }
});
/*
_app.filter('resumeCategories', function () {
    return function (rd, showAll) {
      //console.log(rd.WorkExperience.categories);
      var categories = showAll ? ['uncategorized'] : []; //rd.categories.concat();
      for(var i=0; i < rd.WorkExperience.categories.length; i++) {
        var category = rd.WorkExperience.categories[i].name;
        if((category && !showAll) && categories.indexOf(category)==-1) {
          categories.push(category);
        }
      }
      var responsibilities = getAllResponsibilities(rd.WorkExperience.jobs);
      for(var i=0; i < responsibilities.length; i++) {
        var category = responsibilities[i].category ? responsibilities[i].category.name : null;
        if(category && categories.indexOf(category) == -1) {
          categories.push(category);
        }
        
      }
      //console.log(categories);
      return categories;
    }
});

_app.filter('categoryResponsibilities', function () {
    return function (rd, categoryName) {
        var results = [];
        var maxSort = -1;
        var responsibilities = getAllResponsibilities(rd.WorkExperience.jobs);
        for(var i=0; i < responsibilities.length; i++) {
          var responsibility = responsibilities[i];
          var category = responsibility.category;
          if((category && (category == categoryName || category.name == categoryName))
            || (category==null && categoryName==null)) {
            results.push(responsibility);
            if(!isNaN(responsibility.sort_index)) {
              maxSort = Math.max(responsibility.sort_index, maxSort);
            }
          }
        }
        // give default sortIndexes if unassigned so sorting works in ui
        for(var i=0; i < results.length; i++) {
          if(isNaN(results[i].sort_index)) {
            results[i].sort_index = ++maxSort;
          }
        }

        // sort by default
        results = results.sort(function(a, b) {
          if(a.sort_index < b.sort_index) { return -1; }
          else if(a.sort_index > b.sort_index) { return 1; }
          else { return 0; }
        });

        //console.log(results);
        return results;
    }
});
*/
_app.filter('validResponsibilities', function () {
    return function (responsibilities) {
        var results = [];
        for(var i=0; i<responsibilities.length; i++) {
          var r = responsibilities[i];
          if(r.indexOf('|')>=0) { results.push(r); }
        }
        return results;
    }
});

_app.filter('availableExperiences', function () {
    return function (experiences, branch, position) {
      if(!experiences || !branch || !position) { return null; }
      var results = [];
      var assorted = experiences['ASSORTED'][position];
      results = assorted ? results.concat(assorted) : results.concat(experiences[branch][position]);
      return results;
    }
});

_app.filter('volunteerJobs', function () {
  return function (jobs) {
    var results = [];
    //var jobs = rd.WorkExperience.jobs; //[].concat(rd.WorkExperience.vjobs).concat(rd.WorkExperience.cjobs);
    for(var i=0; i < jobs.length; i++) {
        //if(jobs[i].type != 'unrelated_responsibility' && ) {
        if(jobs[i].type == 'pre_defined' || jobs[i].type == 'custom' || jobs[i].type == 'unrelated_responsibility') {
          results.push(jobs[i]);
        }
    }
    return results;
  }
});

_app.filter('normalJobs', function () {
  return function (jobs) {
    var results = [];
    //var jobs = rd.WorkExperience.jobs; //[].concat(rd.WorkExperience.vjobs).concat(rd.WorkExperience.cjobs);
    for(var i=0; i < jobs.length; i++) {
        if(!jobs[i].type) {
          results.push(jobs[i]);
        }
    }
    return results;
  }
});

_app.filter('validJobs', function () {
  return function (jobs) {
    var results = [];
    for(var i=0; i < jobs.length; i++) {
        if(jobs[i].type != 'unrelated_responsibility') {
          results.push(jobs[i]);
        }
    }
    return results;
  }
});

_app.filter('formatJob', function() {
  return function(job) {
    if(!job.type) { return job.employer_name + ', ' + job.title; }
    else if(job.type=='pre_defined') { return job.position.split('|')[1]; }
    //else if(job.type=='custom') { return job.position; }
    else { return job.position; }
  }
});

_app.filter('formatDates', function ($sce) {
  return function (job, useParentheses) {
    var result = '';

    var fromMonth,fromYear,toMonth,toYear;

    fromMonth = job.from ? job.from.substr(5,2) : '';
    fromYear = job.from ? job.from.substr(0,4) : '';
    toMonth = job.to ? job.to.substr(5,2) : '';
    toYear = job.to ? job.to.substr(0,4) : '';
    if(!job.include_dates) { return ''; }
    if(!job.to){ result = fromMonth + '/' + fromYear + ' - Present'; }
    else { result = fromMonth + '/' + fromYear + ' - ' + toMonth + '/' + toYear; }
    if(useParentheses) { result = '(' + result + ')'; }
    return result;
  }
});

_app.filter('sortDates', function ($sce) {
  return function (items, field) {
    if(!field) { field = 'date'; }
    items.sort(function(a, b) {
      if (!a[field] || a[field]=='') { return 1; }
      else if (a[field] < b[field]) { return 1; }
      else if (a[field] > b[field]) { return -1; }
      else { return 0; }
    });
    return items;
  }
});

_app.filter('sortEducation', function ($sce) {
  return function (schools) {
    schools.sort(function(a, b) {
      var a = getEducationValue(a);
      var b = getEducationValue(b);
      if (a < b) { return -1; }
      else if (a > b) { return 1; }
      else { return 0; }
    });
    return schools;
  }
});

_app.filter('formatCategory', function() {
  return function(category) {
    if(category.name) { return category.name; }
    else { return category; }
  }
});

_app.filter('unusedCategories', function(CategoryHelper) {
  return function(categories, used) {
    var results = [];
    for(var i=0; i<categories.length; i++) {
      var category = CategoryHelper.findCategory(categories[i].name, used);
      if(!category) { results.push(categories[i]); }
    }
    return results;
  }
});

/*
_app.filter('getBranch', function() {
  return function(job) {
    if(job && job.position) {
      return job.position; //job.position.split('|')[0];
    } else { return ''; }
  }
});
*/

function getEducationValue(school) {
  if(school.type=='Graduate School') { return 1; }
  else if(school.type=='College') { return 2; }
  else if(school.type=='High School') { return 3; }
  else if(school.type=='GED') { return 4; }
  else { return 5; }
}

function getAllResponsibilities(jobs) {
  //var jobs = rd.WorkExperience.jobs; //[];
  var responsibilities = [];
  //jobs = jobs.concat(rd.WorkExperience.jobs);
  //jobs = jobs.concat(rd.WorkExperience.vjobs);
  //jobs = jobs.concat(rd.WorkExperience.cjobs);
  //console.log(jobs);
  for(var i=0; i < jobs.length; i++) {
    responsibilities = responsibilities.concat(jobs[i].responsibilities);
  }
  return responsibilities;
}
_app.filter('sectionComplete', function () {
  return function (section) {
    if(!section) { return 0; }
    else if(section.email != undefined) { // PersonalInfo
      return (section.email != '') ? 100 : 0;
    } else if(section.schools) { // Education
      return (section.schools.length > 0) ? 100 : 0;
    } else if(section.jobs) { // WorkExperience
      return (section.jobs.length > 0) ? 100 : 0;
    } else if(section.certs) { // Certifications
      return (section.certs.length > 0) ? 100 : 0;
    } else if(section.skills) { // PersonalSkills
      return (section.skills.length > 0) ? 100 : 0;
    } else if(section.text) { // Summary
      return (section.text && section.text.length > 0) ? 100 : 0;
    } else {
      return 0;
    }
  };
});

_app.filter('sectionIndex', function () {
  return function (section) {
    if(!section) { return 6; }
    else if(section.email != undefined) { return 0; } // PersonalInfo
    else if(section.schools) { return 1; } // Education
    else if(section.jobs) { return 2; } // WorkExperience
    else if(section.certs) { return 3; } // Certifications
    else if(section.skills) { return 4; } // PersonalSkills
    else if(section.text) { return 5; } // Summary
    else { return 6; };
  }
});

_app.filter('sectionSelection', function (sectionCompleteFilter) {
  return function (rd) {
    if(!sectionCompleteFilter(rd.PersonalInfo)) { return rd.PersonalInfo; }
    else if(!sectionCompleteFilter(rd.Education)) { return rd.Education; }
    else if(!sectionCompleteFilter(rd.WorkExperience)) { return rd.WorkExperience; }
    //else if(!sectionCompleteFilter(rd.Certifications)) { return rd.Certifications; }
    else if(!sectionCompleteFilter(rd.PersonalSkills)) { return rd.PersonalSkills; }
    else if(!sectionCompleteFilter(rd.Summary)) { return rd.Summary; }
    else { return null; }
  };
});

_app.filter('incompleteSections', function (sectionCompleteFilter) {
  return function (rd) {
    var incomplete = [];
    if(!sectionCompleteFilter(rd.PersonalInfo)) { incomplete.push(rd.PersonalInfo); } 
    if(!sectionCompleteFilter(rd.Education)) { incomplete.push(rd.Education); } 
    if(!sectionCompleteFilter(rd.WorkExperience)) { incomplete.push(rd.WorkExperience); } 
    //if(!sectionCompleteFilter(rd.Certifications)) { incomplete.push(rd.Certifications); } 
    if(!sectionCompleteFilter(rd.PersonalSkills)) { incomplete.push(rd.PersonalSkills); } 
    if(!sectionCompleteFilter(rd.Summary)) { incomplete.push(rd.Summary); } 
    return incomplete;
  };
});

_app.filter('sectionLabel', function () {
  return function (section) {
    if(!section) { return null; }
    else if(section.email != undefined) { return 'Personal Info'; }
    else if(section.schools) { return 'Education'; }
    else if(section.jobs) { return 'Work Experience'; }
    else if(section.certs) { return 'Certifications'; }
    else if(section.skills) { return 'Personal Skills'; }
    else if(section.text != undefined) { return 'Summary'; }
    else { return null; }
  };
});
// returns the full state name from the abbr.
_app.filter('stateName', function () {
    return function(state) {
        var stateName = 'Select a State';
        for (var i=0; i < state_list.length; i++) {
            if (state_list[i].abbreviation == state) {
                stateName = state_list[i].name;
                break;
            }
        }
        return stateName;
    };
});

_app.filter('stateAbbreviation', function () {
    return function(state) {
        return state == 'AP' ? 'APO' : state;
    };
});
_app.filter('makeSearchableRequirements', function ($sce, incompleteSectionsFilter, sectionLabelFilter) {
  return function (rd) {
    var sections = incompleteSectionsFilter(rd);
    var html = '<p style="margin-bottom: 8px;color:#fff;">To make your resume public and searchable, just complete the sections below.</p>';
    html += '<ul style="color:#fff;list-style:disc;margin-left:20px;">'
    for(var i = 0; i < sections.length; i++) {
      var label = sectionLabelFilter(sections[i]);
      if(label) {
        html += '<li>' + sectionLabelFilter(sections[i]) + '</li>';
      }
    }
    html += '</ul>'
    return $sce.trustAsHtml(html);
  };
});

_app.filter('layoutString', function () {
  return function (v) {
    if(v==1) { return 'left_aligned'; }
    else if(v==2) { return 'center_aligned'; }
    else if(v==3) { return 'right_aligned'; }
    return null;
  };
});

// safer than find/replace in the css for now
_app.filter('layoutClass', function () {
  return function (v) {
    if(v==1) { return 'l2'; }
    else if(v==2) { return 'l3'; }
    else if(v==3) { return 'l1'; }
    return null;
  };
});
_app.filter('errorMessages', function ($sce) {
  return function (errors) {

    /*var message = '';
    for (var i in errors) {
      message += errors[i].message + '. ';
      //console.log(message + ' before loop');
      //allMessages.push(message);
    }
    return message; //$sce.trustAsHtml(message);
    */
    // blocking multiple error messages for now - it confuses users & clients
    return (errors && errors.length) ? errors[0].message : '';
  };
});
_app.directive('compile', function factory($compile) {
    return function(scope, element, attrs) {
        scope.$watch(
            function(scope) {
                // watch the 'compile' expression for changes
                return scope.$eval(attrs.compile);
            },
            function(value) {
                // when the 'compile' expression changes
                // assign it into the current DOM
                element.html(value);
 
                // compile the new DOM and link it to the current scope
                // NOTE: we only compile .childNodes so that
                // we don't get into infinite loop compiling ourselves
                $compile(element.contents())(scope);
            }
        );
    };
});
var INTEGER_REGEXP = /^\-?\d*$/;
_app.directive('integer', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          ctrl.$setValidity('integer', true);
          return viewValue;
        } else {
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('integer', false);
          return undefined;
        }
      });
    }
  };
});

var NOTEMPTY_REGEXP = /\S+/;
_app.directive('notempty', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        if (NOTEMPTY_REGEXP.test(viewValue)) {
          // it is valid
          ctrl.$setValidity('notempty', true);
          return viewValue;
        } else {
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('notempty', false);
          return undefined;
        }
      });
    }
  };
});

var ZIPCODE_REGEXP = /^\d{5}(-\d{4})?$/;
_app.directive('zipcode', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        if (ZIPCODE_REGEXP.test(viewValue)) {
          // it is valid
          ctrl.$setValidity('zipcode', true);
          return viewValue;
        } else {
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('zipcode', false);
          return undefined;
        }
      });
    }
  };
});

var USPHONE_REGEXP = /^\(\d{3}\)\s\d{3}[\s\-]+\d{4}/;
_app.directive('usphone', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        if (USPHONE_REGEXP.test(viewValue)) {
          // it is valid
          ctrl.$setValidity('usphone', true);
          return viewValue;
        } else {
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('usphone', false);
          return undefined;
        }
      });
    }
  };
});

var RFCEMAIL_REGEXP = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
_app.directive('email', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        if (RFCEMAIL_REGEXP.test(viewValue)) {
          // it is valid
          ctrl.$setValidity('email', true);
          return viewValue;
        } else {
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('email', false);
          return undefined;
        }
      });
    }
  };
});

var SHORTDATE_REGEXP = /^\d{2}\/\d{4}$/;
_app.directive('customdate', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        if (SHORTDATE_REGEXP.test(viewValue) || (viewValue=='' && attrs.allowEmpty)) {
          // it is valid
          ctrl.$setValidity('customdate', true);
          return viewValue;
        } else {
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('customdate', false);
          return undefined;
        }
      });
    }
  };
});

_app.directive('pwCheck', [function () {
  return {
    require: 'ngModel',
    link: function (scope, elem, attrs, ctrl) {
      var firstPassword = '#' + attrs.pwCheck;
      elem.add(firstPassword).on('keyup', function () {
        scope.$apply(function () {
          var v = elem.val()===$(firstPassword).val();
          ctrl.$setValidity('pwCheck', v);
        });
      });
    }
  }
}]);

_app.directive('carousel', function () {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: '/bundles/chamberfrontend/js/common/directives/Carousel/Carousel.html',
        scope: {},
        link: function (scope, el, attrs) {
          
          // initialize text carousel
          el.find('li').each(function(i){ // .text-carousel li
              $(this).removeClass('selected').css('left', '150%');
              if (i == 0) $(this).addClass('selected').css('left', '50%');
          });

          el.find('button').unbind('click'); // .text-carousel button

          el.find('button').click(function () { // .text-carousel button
              var dir = ($(this).hasClass('prev-btn')) ? 'prev' : 'next';
              var carousel = $(this).parent().find('ul');
              var selected = carousel.find('.selected');
              $next = false;
              $prev = false;
              selected.removeClass('selected').animate({
                  left: '150%',
              }, 400);
              if (dir == 'next') {
                  $next = selected.removeClass('selected').next();
                  if ($next.length == 0) $next = carousel.find('li:first');
                  $next.css('left', '150%').addClass('selected').animate({
                      left: '50%',
                  }, 400);
              } else {
                  $prev = selected.removeClass('selected').prev();
                  if ($prev.length == 0) $prev = carousel.find('li:last');
                  $prev.css('left', '150%').addClass('selected').animate({
                      left: '50%',
                  }, 400);
              }
          });

        }
    };
});
_app.directive('progress', function () {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: '/bundles/chamberfrontend/js/common/directives/Progress/Progress.html',
        scope: {value: '@'},
        link: function (scope, el, attrs) {

          $(".dial").val(0).knob({
            width: 81,
            thickness: .15,
            bgColor: 'transparent',
            fgColor: '#394264',
            displayInput: false,
            lineCap: 'round',
            /*change: function(v) {
              v = (v > 100) ? 100 : v;
              v = (v < 0) ? 0 : v;
              //$('.pcnt').html(v + '%');
            },*/
            draw: function() {
              $('.progress canvas').off();
            }
          });

          attrs.$observe('value', function(v) {
            $('.dial').val(v).trigger('change');
          });

/*
          $('.dial').val(targetValue).trigger('change');
          $('.pcnt').html(targetValue + '%');

          $('.dial').val(pVal).trigger('change');
          $('.pcnt').html(tVal + '%');
*/
        }
    };
});
_app.directive('progressButton', function () {
    return {
        restrict: 'AC',
        transclude: true,
        replace: false,
        templateUrl: '/bundles/chamberfrontend/js/common/directives/ProgressButton/ProgressButton.html',
        link: function ($scope, el, attrs) {
          var p = new ProgressButton( el[0], {
              callback : function( instance ) {
                  window.saveProgress = undefined;
                  var progress = 0,
                  interval = setInterval( function() {
                      if (!window.saveProgress) {
                          progress = Math.min( progress + Math.random() * 0.1, 1 );
                          instance._setProgress( progress );
                          if (progress == 1) progress = 0.1;
                      } else {
                          clearInterval( interval );
                          el.find('.progress-inner').animate({width: '100%'}, 200, function(){
                              var val = (window.saveProgress == 'success') ? 1 : -1;
                              instance._stop(val);
                              window.saveProgress = undefined;
                          })
                      }
                  }, 200 );
              }
          });



        }
    };
});
_app.directive('inputList', function () {
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        templateUrl: '/bundles/chamberfrontend/js/common/directives/InputList/InputList.html',
        scope: {items:'=', hideDefault:'@', label:'@'},
        link: function ($scope, el, attrs) {

          $scope.addItem = function() {
            if(!$scope.items){
              $scope.items = [{description:'', category: null}];              
            } else {
              $scope.items.push({description:'', category: null});  
            }
          };

          $scope.removeItem = function(item) {
            var index = $scope.items.indexOf(item);
            $scope.items.splice(index, 1);
          }

          if(!$scope.items) {
            $scope.items = [];
          }

          if(!$scope.items.length && !$scope.hideDefault) {
            $scope.addItem();
          }

        }
    };
});
_app.directive('jobDateRange', function () {
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        templateUrl: '/bundles/chamberfrontend/js/common/directives/JobDateRange/JobDateRange.html',
        scope: {job: '='},
        link: function ($scope, el, attrs) {
          $scope.inputFrom = getText($scope.job.from);
          $scope.inputTo = getText($scope.job.to);

          $scope.$watch('inputFrom', function(newValue, oldValue) {
            $scope.job.from = getDate(newValue);
          });

          $scope.$watch('inputTo', function(newValue, oldValue) {
            $scope.job.to = getDate(newValue);
          });

          $scope.$watch('job', function(newValue, oldValue) {
            $scope.inputFrom = getText($scope.job.from);
            $scope.inputTo = getText($scope.job.to);
          });

          function getDate(input) {
            if (input && input.indexOf('/') > -1) {
              var mm = input.substr(0, 2);
              var yyyy = input.substr(3, 4);
              return yyyy + '-' + mm + '-01';
            } else { return null; }
          }

          function getText(token) {
            if (token) {
              var yyyy = token.substr(0, 4);
              var mm = token.substr(5, 2);
              return mm + '/' + yyyy;
            } else { return null; }
          }

        }
    };
});
_app.directive('jobsList', function ($rootScope, model, volunteerJobsFilter, normalJobsFilter, validJobsFilter) {
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        templateUrl: '/bundles/chamberfrontend/js/common/directives/JobsList/JobsList.html',
        scope: {jobs:'=', job:'=', editClick:'&', removeClick:'&'},
        link: function ($scope, el, attrs) {

          $scope.myFilter = function(jobs) {
            jobs = validJobsFilter(jobs);
            return ($scope.job.type) ? volunteerJobsFilter(jobs) : normalJobsFilter(jobs);
          };
/*
          $scope.editJob = function(job) {
            model.editing = job;
            $scope.job = angular.copy(job);
          };

          $scope.removeJob = function(job) {
            window.$mainScope.removeData(job, job.type ? '/volunteer_job/' : '/job/')
            .success(function(data) {
              var index = $scope.jobs.indexOf(job);
              $scope.jobs.splice(index, 1);
              if(job == $scope.job) {
                $scope.job = {};
                model.editing = null;
              }
            });
          };
*/
        }
    };
});

    /**
     * Handle dragging cursor / scrolling fix
     */
    /*$scope.grabCursor = function() {
        setTimeout(function() {
            $('.grab').on('mousedown', function() {
                $(this).addClass('grabbing');
                $scope.scrollTop = $('.vex').scrollTop();
                $scope.scrollOffset = $(this).offset();
                //$scope.scrollPos = $(this).position();
            }).on('mouseup', function() {
                $(this).removeClass('grabbing');
            });
        }, 500);
    };*/

    /**
     * options for angular ui-sortable
     * @type {Object}
     */
    /*$scope.sortableOptions = {
        update: function(e, ui) {},
        start: function(e, ui) {
            $('.vex').scrollTop($scope.scrollTop);
            setTimeout(function() {
                $('.vex').scrollTop($scope.scrollTop);
            }, 10);
        },
        stop: function(e, ui) {},
        axis: 'y',
    };*/
_app.directive('toolTip', function () {
    return {
        restrict: 'A',
        scope: {
          //tooTip: '@',
          toolTipShow: '='
        },
        link: function (scope, el, attrs) {
          var tip = new Opentip(el, attrs.toolTip, {style: attrs.otStyle || 'button'});
          attrs.$observe('toolTip', function(v) {
            tip.setContent(v);
          });
          scope.$watch('toolTipShow', function(v) {
            if(v===undefined) { return }
            if(v) { tip.activate(); }
            else { tip.deactivate(); }
          });
        }
    };
});

Opentip.styles.button = {
  showOn: 'mouseover',
  hideOn: 'mouseout',
  target: true,
  tipJoint: "left",
  background: '#394264',
  borderColor: '#394264',
  borderRadius: 10,
  stemLength: 10,
  stemBase: 15,
  delay: 0.5,
  //removeElementsOnHide: true
};

Opentip.styles.list = {
  showOn: 'mouseover',
  hideOn: 'mouseout',
  target: true,
  tipJoint: "bottom",
  background: '#394264',
  opacity: '1.0',
  borderColor: '#394264',
  fontSize: '9pt',
  borderRadius: 10,
  stemLength: 10,
  stemBase: 15,
  delay: 0.5,
  //removeElementsOnHide: true
};
_app.directive("ngTap", function() {
  return function($scope, $element, $attributes) {
    var tapped;
    tapped = false;
    $element.bind("click", function() {
      if (!tapped) {
        return $scope.$apply($attributes["ngTap"]);
      }
    });
    $element.bind("touchstart", function(event) {
      return tapped = true;
    });
    $element.bind("touchmove", function(event) {
      tapped = false;
      return event.stopImmediatePropagation();
    });
    return $element.bind("touchend", function() {
      if (tapped) {
        return $scope.$apply($attributes["ngTap"]);
      }
    });
  };
});
_app.directive('flexText', function () {
  return {
    restrict: 'A', /* optional */
    link: function (scope, el, attrs) {
      setTimeout(function(){
        el.flexText().css('visibility', 'visible');
      }, 100);
    }
  };
});


_app.directive('external', function() {
  return {
    compile: function(element) {
      var elems = (element.prop("tagName") === 'A') ? element : element.find('a');
      elems.attr("target", "_blank");
    }
  };
});

// _app.directive('clickAnywhereButHere', function($document){
//   return {
//     restrict: 'A',
//     link: function(scope, elem, attr, ctrl) {
//       elem.bind('click', function(e) {
//         // this part keeps it from firing the click on the document.
//         e.stopPropagation();
//       });
//       $document.bind('click', function() {
//         // magic here.
//         scope.$apply(attr.clickAnywhereButHere);
//       })
//     }
//   }
// })
/**
 * Resume Data Service for shared access among all the controllers
 * @return object
 */

// IE8 doesn't run for-in loops over enumerable objects correctly
// I've modified some of the for-in loops for compatibility

_app.factory('ResumeData', function(CategoryHelper, normalJobsFilter, volunteerJobsFilter) {

    var ResumeDataInstance = {

        // Authentication
        __auth: {oauth_client: '', access_token: '', refresh_token: ''},

        // Resume ID
        resume_id: '',

        userlogin: '',
        userpass: '',

        // whether we are currently organizing resume
        organizing: false,

        // Entities for backend
        PersonalInfo: new PersonalInfo(),
        Education: new Education(),
        WorkExperience: new WorkExperience(),
        Certifications: new Certifications(),
        PersonalSkills: new PersonalSkills(),
        Summary: {text:''},
        User: new User(),

        // temporary fields for Education form
        school_id: null,
        school_type: '',
        school_name: '',
        domestic_school: 'yes',
        school_city: '',
        school_state: '',
        school_location: '',
        field_study: [],

        // temporary fields for WorkExperience forms
        //current_template: 'work.html', // index.html
        employer_name: '',

        // temporary fields for Certifications forms
        //cert_field: '',
        //custom_certs: [],
        //certifications: [],

        // temporary fields for Skills forms
        //personal_skills: [],
        //custom_skills: [],

        getObjectFromPath: function(path) {
            console.log('getObjectFromPath');
            console.log(path);
            if (path.indexOf('.') > -1) {
                var args = path.split('.');
                v = this;
                for(var i=0; i < args.length; i++) {
                    if(!v) return null;
                    var ndx = args[i].replace(/(.+)\[(\d)+\]/g, '$2').trim();
                    args[i] = args[i].replace(/(.+)\[\d+\]/g, '$1').trim();
                    var ndx = (ndx == '') ? false : ndx;
                    v = v[args[i]];
                    if (ndx && v[ndx]) v = v[ndx];
                }
                console.log(v);
                return v;
            } else {
                var ndx = path.replace(/(.+)\[(\d)+\]/g, '$2').trim();
                path = path.replace(/(.+)\[\d+\]/g, '$1').trim();
                var ndx = (ndx == '') ? false : ndx;
                v = (ndx && this[path] && this[path][ndx]) ? this[path][ndx] : (this[path] || null);
                console.log(v);
                return v;
            }
        },

/*
        saveData: function() {
            var data = {};
            var _that = this;
            //console.log('saving...');
            //console.log(_that);

            for (var i in this) {
                if (typeof this[i] !== 'function' && i.substr(0, 2) != '__') data[i] = this[i];
            }

            //console.log('saving...');
            //sessionStorage.setItem('resume-data', JSON.stringify(data));
            setTimeout(function(){
                window.undoEdit = undefined;
            }, 1100);
        },
*/

        getFullResumeObject: function() {
            //console.log(this.WorkExperience.jobs);
            CategoryHelper.pushCategories(this.WorkExperience); // push category property onto responsibilities
            var jobs = angular.copy(this.WorkExperience.jobs); // copy jobs
            CategoryHelper.cleanCategories(this.WorkExperience); // clean category property off of responsibilities
            var resume = {
                "resume_id": this.resume_id,
                "user_id": this.__auth.user_id,
                "personal_info": this.PersonalInfo.getData(),
                "schools": this.Education.getSchools(),
                "employment": normalJobsFilter(jobs), //this.WorkExperience.getEmployment(),
                "volunteering": volunteerJobsFilter(jobs), //this.WorkExperience.getVolunteering(),
                "personal_skills": angular.copy(this.PersonalSkills.skills),
                "certifications": angular.copy(this.Certifications.certs),
                "summary": this.Summary.text
            };
            CategoryHelper.setSortIndices(resume.personal_skills);
            CategoryHelper.setSortIndices(resume.schools);
            CategoryHelper.setSortIndices(resume.certifications);
            return resume;
        },

        saveAuth: function() {
            sessionStorage.setItem('auth-data', JSON.stringify(this.__auth));
        },

        loadAuth: function() {
            //console.log('loading....');
            if (sessionStorage.getItem('auth-data')) {
                this.__auth = JSON.parse(sessionStorage.getItem('auth-data'));
                //console.log('oauth client: ' + this.__auth.oauth_client);
            }
        },

        loadData: function(override) {
            /*if (!sessionStorage.getItem('resume-data')) return;
            var data = JSON.parse(sessionStorage.getItem('resume-data'));

            for (var i in this.sections) {
                if (this.sections[i].class) {
                    var fn = this.sections[i]._class;
                    //console.log(fn);
                    if (typeof window[fn] === 'function') {
                        try {
                            this[fn] = new window[fn](data[fn]);
                        } catch (e) {
                            console.log('error: ' + fn);
                        }
                    }
                }
            }*/
        },

        // candidate for removal - not sure these are in use
        restoreFormFields: function(scope) {
            //console.log('restoring...');
            if (!scope) return;
            if (undefined !== window.resetFormFields) {
                for (var i in window.resetFormFields) {
                    if (i != '_init') scope[i] = window.resetFormFields[i];
                }
                if (window.resetFormFields['_init']) {
                    scope[window.resetFormFields['_init'].method].apply(
                        {}, // defines this in called function
                        window.resetFormFields['_init'].params
                    );
                }
                setTimeout(function(){
                    window.resetFormFields = undefined;
                }, 1000);
            }
        },

        // candidate for removal - not sure these are in use
        undoEdit: function($scope) {
            var _that = this;
            if (window.undoEdit) {
                for (var i in window.undoEdit) {
                    this[i] = window.undoEdit[i];
                }
                setTimeout(function(){
                    window.undoEdit = undefined;
                    //_that.saveData();
                }, 1000);
            }
        }
    };

    // prevent adding new properties, ECMA5 ie9+,
    try {
        Object.preventExtensions(ResumeDataInstance);
    } catch (e) {}

    return ResumeDataInstance;
});

/**
 * This function creates object inheritance for JS
 */
var __extends = this.__extends ||
function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};

/**
 * Converts camelCase format to Underscore format
 * @return string
 */
String.prototype.toUnderscore = function(){
    return this.replace(/([A-Z]+)/g, function($1){return "_"+$1.toLowerCase();});
};

/**
 * Converts Underscore format to camelCase format
 * @return string
 */
String.prototype.toCamelCase = function(){
    return this.replace(/(\_[a-z])/g, function($1){return $1.toUpperCase().replace('_','');});
};

/**
 * trims a String
 */
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/gm, '');
  };
}

/**
 * tests if string is in given array
 * @var Array haystack
 * @return boolean
 */
String.prototype.inArray = function(haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == this) return true;
    }
    return false;
}

/**
 * Base Entity class from which all others will extend
 */
var Entity = (function() {
    function Entity(data) {
        if (data && typeof data === 'object') this.setData(data);
        return this.getData();
    }
    Entity.prototype = {
        getID: function() {
            for (var i in this) {
                if (typeof this[i] !== 'function' && i.substr(-2, 2).toLowerCase() == 'id') return {key: i, val: this[i]};
            }
            return null;
        },
        getData: function() {
            var data = {};
            for (var i in this) {
                if (typeof this[i] !== 'function' && i.substr(0, 2) != '__') data[i.toUnderscore()] = this[i];
            }
            return data;
        },
        setData: function(data) {
            for (var i in data) {
                if (undefined !== this[i.toCamelCase()]) {
                    this[i.toCamelCase()] = data[i];
                }
            }
            var id = this.getID()
            if (id && id.key) {
                this[id.key] = data[id.key.toUnderscore()];
            }
        },
    };
    return Entity;
})();


/**
 * User Account Entity
 */
var User = (function(_super) {
    __extends(User, _super);

    function User(data) {
        this.email = '';
        this.plainPassword = {
            first: '', second: ''
        };
        this.firstName = '';
        this.lastName = '';
        this.zipCode = '';
        _super.call(this, data);
    }
    //fix for non-matching entities
    User.prototype.setData = function(data) {
        _super.prototype.setData.call(this, data);
        if (undefined !== data.id) this.id = data.id;
    };

    //fix for non-matching entities
    User.prototype.getData = function() {
        var data = {};
        for (var i in this) {
            if (typeof this[i] !== 'function' && i.substr(0, 2) != '__') data[i] = this[i];
        }
        data.id = undefined;
        return data;
    };

    return User;
})(Entity);

/**
 * PersonalInfo Entity + Section Manager
 */
var PersonalInfo = (function(_super) {
    __extends(PersonalInfo, _super);

    function PersonalInfo(data) {
        this.firstName = '';
        this.lastName = '';
        this.street1 = '';
        this.street2 = '';
        this.city = '';
        this.state = '';
        this.postalCode = '';
        this.phone = '';
        this.email = '';
        this.isSearchable = false;
        this.isRelocate = false;
        _super.call(this, data);
    }

    // fix for non-matching entities
    PersonalInfo.prototype.getData = function() {
        var data = _super.prototype.getData.call(this);
        if (data.phone && data.phone.charAt(0) != '(') {
            data.phone = '('+ data.phone.substr(0,3) + ') ' + data.phone.substr(3,3) + '-' + data.phone.substr(6,4);
        }
        return data;
    };

    // fix for non-matching entities
    PersonalInfo.prototype.setData = function(data) {
        if (data && data.phone && data.phone.charAt(0) == '(') {
            data.phone = data.phone.replace(/[\(\)\- ]/g, '');
        }
        _super.prototype.setData.call(this, data);
    };

    return PersonalInfo;
})(Entity);

/**
 * School Entity
 */
var School = (function(_super) {
    __extends(School, _super);

    function School(data) {
        this.schoolId = null;
        this.type = '';
        this.name = '';
        this.city = null;
        this.state = null;
        this.location = '';
        this.fieldsOfStudy = [];
        this.addFieldOfStudy = function(string) {
            this.fieldsOfStudy.push(string);
        };
        this.deleteFieldOfStudy = function(index) {
            this.fieldsOfStudy.splice(index, 1);
        };
        _super.call(this, data);
    }

    // fix for non-matching entities
    School.prototype.getData = function() {
        var data = _super.prototype.getData.call(this);
        var fos = [];
        if (data.fields_of_study && data.fields_of_study.length) {
            for (var i=0; i < data.fields_of_study.length; i++) {
                fos.push({name: data.fields_of_study[i]});
            }
            data.fields_of_study = fos;
        }
        return data;
    };

    // fix for non-matching entities
    School.prototype.setData = function(data) {
        var fos = [];
        if (data.fields_of_study && data.fields_of_study.length) {
            for (var i=0; i < data.fields_of_study.length; i++) {
                fos.push(data.fields_of_study[i].name);
            }
            data.fields_of_study = fos;
        }
        _super.prototype.setData.call(this, data);
    };

    return School;
})(Entity);

/**
 * Education Section Manager
 */
var Education = (function(_super) {
    __extends(Education, _super);

    function Education(data) {
        this.schools = [];
        this.addSchool = function(data) {
            this.schools.push(new School(data));
        };
        this.deleteSchool = function(index) {
            this.schools.splice(index, 1);
        };
        this.getSchools = function() {
            var schools = [];
            for (var i=0; i < this.schools.length; i++) {
                schools.push(this.schools[i].getData());
            }
            return schools;
        }
        _super.call(this, data);
    }
    return Education;
})(Entity);


/**
 * Work Experience Section Manager
 */
var WorkExperience = (function(_super) {
    __extends(WorkExperience, _super);

    function WorkExperience(data) {
        this.jobs = [];
        this.categories = [
            {name: null},
        ];
        _super.call(this, data);
    }
    return WorkExperience;
})(Entity);

/**
 * Certificate Entity
 */
/*var Certificate = (function(_super) {
    __extends(Certificate, _super);

    function Certificate(data) {
        this.certificateId = null;
        this.name = '';
        _super.call(this, data);
    }
    return Certificate;
})(Entity);*/

/**
 * Certifications Section Manager
 */
var Certifications = (function(_super) {
    __extends(Certifications, _super);

    function Certifications(data) {
        this.certs = [];
        //this.new_certs = [];
        this.addCertificate = function(data) {
            this.certs.push(/*new Certificate(*/data/*)*/);
        };
        this.deleteCertificate = function(index) {
            this.certs.splice(index, 1);
        };
        /*this.getCertifications = function() {
            var crts = [];
            for (var i=0; i < this.certs.length; i++) crts.push(this.certs[i].getData());
            for (var i=0; i < this.new_certs.length; i++) crts.push(this.new_certs[i]);
            this.new_certs = [];
            return crts;
        }*/
        _super.call(this, data);
    }
    return Certifications;
})(Entity);

/**
 * PersonalSkill Entity
 *//*
var PersonalSkill = (function(_super) {
    __extends(PersonalSkill, _super);

    function PersonalSkill(data) {
        this.personalSkillID = null;
        this.name = '';
        _super.call(this, data);
    }
    return PersonalSkill;
})(Entity);*/

/**
 * PersonalSkills Section Manager
 */
var PersonalSkills = (function(_super) {
    __extends(PersonalSkills, _super);

    function PersonalSkills(data) {
        this.skills = [];
        //this.new_skills = [];
        this.addPersonalSkill = function(data) {
            this.skills.push(/*new PersonalSkill(*/data/*)*/);
        };
        this.deletePersonalSkill = function(index) {
            this.skills.splice(index, 1);
        };
        /*this.getSkills = function() {
            var skls = [];
            for (var i=0; i < this.skills.length; i++) skls.push(this.skills[i].getData());
            for (var i=0; i < this.new_skills.length; i++) skls.push(this.new_skills[i]);
            this.new_skills = [];
            return skls;
        }*/
        _super.call(this, data);
    }
    return PersonalSkills;
})(Entity);

/**
 * Defines career-spark angular module and routes
 */


// 'angulartics.google.analytics'
var _app = angular.module('career-spark', ['career-spark-pieces'],
    function($routeProvider, $locationProvider, $analyticsProvider) {
        $routeProvider.when('/', {
            templateUrl: '/bundles/chamberfrontend/js/content/home/home.html',
            controller: HomeCtrl,
            controllerAs: 'ctrl'
        });
        $routeProvider.when('/discover', {
            templateUrl: '/bundles/chamberfrontend/js/resume/resume-index.html',
            controller: ResumeCtrl,
            controllerAs: 'landing'
        });
        $routeProvider.when('/resetpassword/:token', {
            templateUrl: '/bundles/chamberfrontend/js/account/reset.html'
        });
        $routeProvider.when('/:area/:page', {
            template: '<div id="content-section" ng-include src="getContentUrl(viewState)" autoscroll="true"></div>',
            controller: ContentCtrl,
            controllerAs: 'ctrl'
        });
        $routeProvider.otherwise({redirectTo: '/'});
    }

).run(function() {
    FastClick.attach(document.body);
    $('.ui-sortable').draggable();

  });


/**
 * Allows for setting scope properties or executing scope methods
 * @param  string selector
 * @param  method | property event
 * @param  param | value message
 */
angular.$externalBroadcast = function (selector, event, message) {
    var scope = angular.element(selector).scope();
    scope.$apply(function () {
        var fn = scope[event];
        if (typeof fn === 'function') {
            fn(message);
        } else {
            scope[event] = message;
        }
    });
};

// add the ability to broadcast events between controllers
_app.config(['$provide', function($provide){
    $provide.decorator('$rootScope', ['$delegate', function($delegate){
        try { // catches IE error on Object.defineProperty
            Object.defineProperty($delegate.constructor.prototype, '$onRootScope', {
                value: function(name, listener){
                    var unsubscribe = $delegate.$on(name, listener);
                    this.$on('$destroy', unsubscribe);
                },
                enumerable: false
            });
        } catch(error) {
            $delegate.constructor.prototype.$onRootScope = function(name, listener){
                var unsubscribe = $delegate.$on(name, listener);
                this.$on('$destroy', unsubscribe);
            };
        }

        return $delegate;
    }]);
}]);


// add services to root scope
_app.run(function ($rootScope, $location, ResumeData, ViewCache) {
    $rootScope.rd = ResumeData;
    $rootScope.views = ViewCache;
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        var titleTag = 'Career Spark';
        if (current.$$route && current.$$route.title) titleTag = current.$$route.title + ' - ' + titleTag;
        $rootScope.title = titleTag;
    });

    $rootScope.send = function(message, arg1, arg2, arg3, arg4) {
        $rootScope.$emit(message, arg1, arg2, arg3, arg4);
    };
});

$(document)
.on('click',"[href='/login/facebook']",
    function(e){
        e.preventDefault();
        //Modal.close('.modal.login');
        var  screenX    = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
            screenY    = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
            outerWidth = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.body.clientWidth,
            outerHeight = typeof window.outerHeight != 'undefined' ? window.outerHeight : (document.body.clientHeight - 22),
            width    = 450,
            height   = 600,
            left     = parseInt(screenX + ((outerWidth - width) / 2), 10),
            top      = parseInt(screenY + ((outerHeight - height) / 2.5), 10),
            options = (
            'location=1,scrollbars=1,'+
            'width=' + width +
            ',height=' + height +
            ',left=' + left +
            ',top=' + top
            );
        facebook_login = window.open($("#login-facebook-btn").data('src-url'), 'facebook_login', options);
    }
)
    .on('click',"[href='/login/linkedin']",
    function(e){
        e.preventDefault();
        //Modal.close('.modal.login');
        var  screenX    = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
            screenY    = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
            outerWidth = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.body.clientWidth,
            outerHeight = typeof window.outerHeight != 'undefined' ? window.outerHeight : (document.body.clientHeight - 22),
            width    = 850,
            height   = 500,
            left     = parseInt(screenX + ((outerWidth - width) / 2), 10),
            top      = parseInt(screenY + ((outerHeight - height) / 2.5), 10),
            options = (
            'location=1,scrollbars=1,'+
            'width=' + width +
            ',height=' + height +
            ',left=' + left +
            ',top=' + top
            );
        linkedin_login = window.open($("#login-linkedin-btn").data('src-url'), 'linkedin_login', options);
    }
)
.on('click',"[href='/login/troopid']",
    function(e){
        e.preventDefault();
        //Modal.close('.modal.login');
        var  screenX    = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
            screenY    = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
            outerWidth = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.body.clientWidth,
            outerHeight = typeof window.outerHeight != 'undefined' ? window.outerHeight : (document.body.clientHeight - 22),
            width    = 550,
            height   = 750,
            left     = parseInt(screenX + ((outerWidth - width) / 2), 10),
            top      = parseInt(screenY + ((outerHeight - height) / 2.5), 10),
            options = (
            'location=1,scrollbars=1,'+
            'width=' + width +
            ',height=' + height +
            ',left=' + left +
            ',top=' + top
            );
        troopid_login = window.open($("#login-troopid-btn").data('src-url'), 'troopid_login', options);
    }
);


/*!
* MediaElement.js
* HTML5 <video> and <audio> shim and player
* http://mediaelementjs.com/
*
* Creates a JavaScript object that mimics HTML5 MediaElement API
* for browsers that don't understand HTML5 or can't play the provided codec
* Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
*
* Copyright 2010-2013, John Dyer (http://j.hn)
* License: MIT
*
*/var mejs=mejs||{};mejs.version="2.13.2";mejs.meIndex=0;
mejs.plugins={silverlight:[{version:[3,0],types:["video/mp4","video/m4v","video/mov","video/wmv","audio/wma","audio/m4a","audio/mp3","audio/wav","audio/mpeg"]}],flash:[{version:[9,0,124],types:["video/mp4","video/m4v","video/mov","video/flv","video/rtmp","video/x-flv","audio/flv","audio/x-flv","audio/mp3","audio/m4a","audio/mpeg","video/youtube","video/x-youtube"]}],youtube:[{version:null,types:["video/youtube","video/x-youtube","audio/youtube","audio/x-youtube"]}],vimeo:[{version:null,types:["video/vimeo",
"video/x-vimeo"]}]};
mejs.Utility={encodeUrl:function(a){return encodeURIComponent(a)},escapeHTML:function(a){return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")},absolutizeUrl:function(a){var b=document.createElement("div");b.innerHTML='<a href="'+this.escapeHTML(a)+'">x</a>';return b.firstChild.href},getScriptPath:function(a){for(var b=0,c,d="",e="",g,f,h=document.getElementsByTagName("script"),l=h.length,j=a.length;b<l;b++){g=h[b].src;c=g.lastIndexOf("/");if(c>-1){f=g.substring(c+
1);g=g.substring(0,c+1)}else{f=g;g=""}for(c=0;c<j;c++){e=a[c];e=f.indexOf(e);if(e>-1){d=g;break}}if(d!=="")break}return d},secondsToTimeCode:function(a,b,c,d){if(typeof c=="undefined")c=false;else if(typeof d=="undefined")d=25;var e=Math.floor(a/3600)%24,g=Math.floor(a/60)%60,f=Math.floor(a%60);a=Math.floor((a%1*d).toFixed(3));return(b||e>0?(e<10?"0"+e:e)+":":"")+(g<10?"0"+g:g)+":"+(f<10?"0"+f:f)+(c?":"+(a<10?"0"+a:a):"")},timeCodeToSeconds:function(a,b,c,d){if(typeof c=="undefined")c=false;else if(typeof d==
"undefined")d=25;a=a.split(":");b=parseInt(a[0],10);var e=parseInt(a[1],10),g=parseInt(a[2],10),f=0,h=0;if(c)f=parseInt(a[3])/d;return h=b*3600+e*60+g+f},convertSMPTEtoSeconds:function(a){if(typeof a!="string")return false;a=a.replace(",",".");var b=0,c=a.indexOf(".")!=-1?a.split(".")[1].length:0,d=1;a=a.split(":").reverse();for(var e=0;e<a.length;e++){d=1;if(e>0)d=Math.pow(60,e);b+=Number(a[e])*d}return Number(b.toFixed(c))},removeSwf:function(a){var b=document.getElementById(a);if(b&&/object|embed/i.test(b.nodeName))if(mejs.MediaFeatures.isIE){b.style.display=
"none";(function(){b.readyState==4?mejs.Utility.removeObjectInIE(a):setTimeout(arguments.callee,10)})()}else b.parentNode.removeChild(b)},removeObjectInIE:function(a){if(a=document.getElementById(a)){for(var b in a)if(typeof a[b]=="function")a[b]=null;a.parentNode.removeChild(a)}}};
mejs.PluginDetector={hasPluginVersion:function(a,b){var c=this.plugins[a];b[1]=b[1]||0;b[2]=b[2]||0;return c[0]>b[0]||c[0]==b[0]&&c[1]>b[1]||c[0]==b[0]&&c[1]==b[1]&&c[2]>=b[2]?true:false},nav:window.navigator,ua:window.navigator.userAgent.toLowerCase(),plugins:[],addPlugin:function(a,b,c,d,e){this.plugins[a]=this.detectPlugin(b,c,d,e)},detectPlugin:function(a,b,c,d){var e=[0,0,0],g;if(typeof this.nav.plugins!="undefined"&&typeof this.nav.plugins[a]=="object"){if((c=this.nav.plugins[a].description)&&
!(typeof this.nav.mimeTypes!="undefined"&&this.nav.mimeTypes[b]&&!this.nav.mimeTypes[b].enabledPlugin)){e=c.replace(a,"").replace(/^\s+/,"").replace(/\sr/gi,".").split(".");for(a=0;a<e.length;a++)e[a]=parseInt(e[a].match(/\d+/),10)}}else if(typeof window.ActiveXObject!="undefined")try{if(g=new ActiveXObject(c))e=d(g)}catch(f){}return e}};
mejs.PluginDetector.addPlugin("flash","Shockwave Flash","application/x-shockwave-flash","ShockwaveFlash.ShockwaveFlash",function(a){var b=[];if(a=a.GetVariable("$version")){a=a.split(" ")[1].split(",");b=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)]}return b});
mejs.PluginDetector.addPlugin("silverlight","Silverlight Plug-In","application/x-silverlight-2","AgControl.AgControl",function(a){var b=[0,0,0,0],c=function(d,e,g,f){for(;d.isVersionSupported(e[0]+"."+e[1]+"."+e[2]+"."+e[3]);)e[g]+=f;e[g]-=f};c(a,b,0,1);c(a,b,1,1);c(a,b,2,1E4);c(a,b,2,1E3);c(a,b,2,100);c(a,b,2,10);c(a,b,2,1);c(a,b,3,1);return b});
mejs.MediaFeatures={init:function(){var a=this,b=document,c=mejs.PluginDetector.nav,d=mejs.PluginDetector.ua.toLowerCase(),e,g=["source","track","audio","video"];a.isiPad=d.match(/ipad/i)!==null;a.isiPhone=d.match(/iphone/i)!==null;a.isiOS=a.isiPhone||a.isiPad;a.isAndroid=d.match(/android/i)!==null;a.isBustedAndroid=d.match(/android 2\.[12]/)!==null;a.isBustedNativeHTTPS=location.protocol==="https:"&&(d.match(/android [12]\./)!==null||d.match(/macintosh.* version.* safari/)!==null);a.isIE=c.appName.toLowerCase().indexOf("microsoft")!=
-1||c.appName.toLowerCase().match(/trident/gi)!==null;a.isChrome=d.match(/chrome/gi)!==null;a.isFirefox=d.match(/firefox/gi)!==null;a.isWebkit=d.match(/webkit/gi)!==null;a.isGecko=d.match(/gecko/gi)!==null&&!a.isWebkit&&!a.isIE;a.isOpera=d.match(/opera/gi)!==null;a.hasTouch="ontouchstart"in window;a.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect;for(c=0;c<g.length;c++)e=document.createElement(g[c]);a.supportsMediaTag=typeof e.canPlayType!==
"undefined"||a.isBustedAndroid;try{e.canPlayType("video/mp4")}catch(f){a.supportsMediaTag=false}a.hasSemiNativeFullScreen=typeof e.webkitEnterFullscreen!=="undefined";a.hasNativeFullscreen=typeof e.requestFullscreen!=="undefined";a.hasWebkitNativeFullScreen=typeof e.webkitRequestFullScreen!=="undefined";a.hasMozNativeFullScreen=typeof e.mozRequestFullScreen!=="undefined";a.hasMsNativeFullScreen=typeof e.msRequestFullscreen!=="undefined";a.hasTrueNativeFullScreen=a.hasWebkitNativeFullScreen||a.hasMozNativeFullScreen||
a.hasMsNativeFullScreen;a.nativeFullScreenEnabled=a.hasTrueNativeFullScreen;if(a.hasMozNativeFullScreen)a.nativeFullScreenEnabled=document.mozFullScreenEnabled;else if(a.hasMsNativeFullScreen)a.nativeFullScreenEnabled=document.msFullscreenEnabled;if(a.isChrome)a.hasSemiNativeFullScreen=false;if(a.hasTrueNativeFullScreen){a.fullScreenEventName="";if(a.hasWebkitNativeFullScreen)a.fullScreenEventName="webkitfullscreenchange";else if(a.hasMozNativeFullScreen)a.fullScreenEventName="mozfullscreenchange";
else if(a.hasMsNativeFullScreen)a.fullScreenEventName="MSFullscreenChange";a.isFullScreen=function(){if(e.mozRequestFullScreen)return b.mozFullScreen;else if(e.webkitRequestFullScreen)return b.webkitIsFullScreen;else if(e.hasMsNativeFullScreen)return b.msFullscreenElement!==null};a.requestFullScreen=function(h){if(a.hasWebkitNativeFullScreen)h.webkitRequestFullScreen();else if(a.hasMozNativeFullScreen)h.mozRequestFullScreen();else a.hasMsNativeFullScreen&&h.msRequestFullscreen()};a.cancelFullScreen=
function(){if(a.hasWebkitNativeFullScreen)document.webkitCancelFullScreen();else if(a.hasMozNativeFullScreen)document.mozCancelFullScreen();else a.hasMsNativeFullScreen&&document.msExitFullscreen()}}if(a.hasSemiNativeFullScreen&&d.match(/mac os x 10_5/i)){a.hasNativeFullScreen=false;a.hasSemiNativeFullScreen=false}}};mejs.MediaFeatures.init();
mejs.HtmlMediaElement={pluginType:"native",isFullScreen:false,setCurrentTime:function(a){this.currentTime=a},setMuted:function(a){this.muted=a},setVolume:function(a){this.volume=a},stop:function(){this.pause()},setSrc:function(a){for(var b=this.getElementsByTagName("source");b.length>0;)this.removeChild(b[0]);if(typeof a=="string")this.src=a;else{var c;for(b=0;b<a.length;b++){c=a[b];if(this.canPlayType(c.type)){this.src=c.src;break}}}},setVideoSize:function(a,b){this.width=a;this.height=b}};
mejs.PluginMediaElement=function(a,b,c){this.id=a;this.pluginType=b;this.src=c;this.events={};this.attributes={}};
mejs.PluginMediaElement.prototype={pluginElement:null,pluginType:"",isFullScreen:false,playbackRate:-1,defaultPlaybackRate:-1,seekable:[],played:[],paused:true,ended:false,seeking:false,duration:0,error:null,tagName:"",muted:false,volume:1,currentTime:0,play:function(){if(this.pluginApi!=null){this.pluginType=="youtube"?this.pluginApi.playVideo():this.pluginApi.playMedia();this.paused=false}},load:function(){if(this.pluginApi!=null){this.pluginType!="youtube"&&this.pluginApi.loadMedia();this.paused=
false}},pause:function(){if(this.pluginApi!=null){this.pluginType=="youtube"?this.pluginApi.pauseVideo():this.pluginApi.pauseMedia();this.paused=true}},stop:function(){if(this.pluginApi!=null){this.pluginType=="youtube"?this.pluginApi.stopVideo():this.pluginApi.stopMedia();this.paused=true}},canPlayType:function(a){var b,c,d,e=mejs.plugins[this.pluginType];for(b=0;b<e.length;b++){d=e[b];if(mejs.PluginDetector.hasPluginVersion(this.pluginType,d.version))for(c=0;c<d.types.length;c++)if(a==d.types[c])return"probably"}return""},
positionFullscreenButton:function(a,b,c){this.pluginApi!=null&&this.pluginApi.positionFullscreenButton&&this.pluginApi.positionFullscreenButton(Math.floor(a),Math.floor(b),c)},hideFullscreenButton:function(){this.pluginApi!=null&&this.pluginApi.hideFullscreenButton&&this.pluginApi.hideFullscreenButton()},setSrc:function(a){if(typeof a=="string"){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));this.src=mejs.Utility.absolutizeUrl(a)}else{var b,c;for(b=0;b<a.length;b++){c=a[b];if(this.canPlayType(c.type)){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));
this.src=mejs.Utility.absolutizeUrl(a);break}}}},setCurrentTime:function(a){if(this.pluginApi!=null){this.pluginType=="youtube"?this.pluginApi.seekTo(a):this.pluginApi.setCurrentTime(a);this.currentTime=a}},setVolume:function(a){if(this.pluginApi!=null){this.pluginType=="youtube"?this.pluginApi.setVolume(a*100):this.pluginApi.setVolume(a);this.volume=a}},setMuted:function(a){if(this.pluginApi!=null){if(this.pluginType=="youtube"){a?this.pluginApi.mute():this.pluginApi.unMute();this.muted=a;this.dispatchEvent("volumechange")}else this.pluginApi.setMuted(a);
this.muted=a}},setVideoSize:function(a,b){if(this.pluginElement.style){this.pluginElement.style.width=a+"px";this.pluginElement.style.height=b+"px"}this.pluginApi!=null&&this.pluginApi.setVideoSize&&this.pluginApi.setVideoSize(a,b)},setFullscreen:function(a){this.pluginApi!=null&&this.pluginApi.setFullscreen&&this.pluginApi.setFullscreen(a)},enterFullScreen:function(){this.pluginApi!=null&&this.pluginApi.setFullscreen&&this.setFullscreen(true)},exitFullScreen:function(){this.pluginApi!=null&&this.pluginApi.setFullscreen&&
this.setFullscreen(false)},addEventListener:function(a,b){this.events[a]=this.events[a]||[];this.events[a].push(b)},removeEventListener:function(a,b){if(!a){this.events={};return true}var c=this.events[a];if(!c)return true;if(!b){this.events[a]=[];return true}for(i=0;i<c.length;i++)if(c[i]===b){this.events[a].splice(i,1);return true}return false},dispatchEvent:function(a){var b,c,d=this.events[a];if(d){c=Array.prototype.slice.call(arguments,1);for(b=0;b<d.length;b++)d[b].apply(null,c)}},hasAttribute:function(a){return a in
this.attributes},removeAttribute:function(a){delete this.attributes[a]},getAttribute:function(a){if(this.hasAttribute(a))return this.attributes[a];return""},setAttribute:function(a,b){this.attributes[a]=b},remove:function(){mejs.Utility.removeSwf(this.pluginElement.id);mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)}};
mejs.MediaPluginBridge={pluginMediaElements:{},htmlMediaElements:{},registerPluginElement:function(a,b,c){this.pluginMediaElements[a]=b;this.htmlMediaElements[a]=c},unregisterPluginElement:function(a){delete this.pluginMediaElements[a];delete this.htmlMediaElements[a]},initPlugin:function(a){var b=this.pluginMediaElements[a],c=this.htmlMediaElements[a];if(b){switch(b.pluginType){case "flash":b.pluginElement=b.pluginApi=document.getElementById(a);break;case "silverlight":b.pluginElement=document.getElementById(b.id);
b.pluginApi=b.pluginElement.Content.MediaElementJS}b.pluginApi!=null&&b.success&&b.success(b,c)}},fireEvent:function(a,b,c){var d,e;if(a=this.pluginMediaElements[a]){b={type:b,target:a};for(d in c){a[d]=c[d];b[d]=c[d]}e=c.bufferedTime||0;b.target.buffered=b.buffered={start:function(){return 0},end:function(){return e},length:1};a.dispatchEvent(b.type,b)}}};
mejs.MediaElementDefaults={mode:"auto",plugins:["flash","silverlight","youtube","vimeo"],enablePluginDebug:false,httpsBasicAuthSite:false,type:"",pluginPath:mejs.Utility.getScriptPath(["mediaelement.js","mediaelement.min.js","mediaelement-and-player.js","mediaelement-and-player.min.js"]),flashName:"flashmediaelement.swf",flashStreamer:"",enablePluginSmoothing:false,enablePseudoStreaming:false,pseudoStreamingStartQueryParam:"start",silverlightName:"silverlightmediaelement.xap",defaultVideoWidth:480,
defaultVideoHeight:270,pluginWidth:-1,pluginHeight:-1,pluginVars:[],timerRate:250,startVolume:0.8,success:function(){},error:function(){}};mejs.MediaElement=function(a,b){return mejs.HtmlMediaElementShim.create(a,b)};
mejs.HtmlMediaElementShim={create:function(a,b){var c=mejs.MediaElementDefaults,d=typeof a=="string"?document.getElementById(a):a,e=d.tagName.toLowerCase(),g=e==="audio"||e==="video",f=g?d.getAttribute("src"):d.getAttribute("href");e=d.getAttribute("poster");var h=d.getAttribute("autoplay"),l=d.getAttribute("preload"),j=d.getAttribute("controls"),k;for(k in b)c[k]=b[k];f=typeof f=="undefined"||f===null||f==""?null:f;e=typeof e=="undefined"||e===null?"":e;l=typeof l=="undefined"||l===null||l==="false"?
"none":l;h=!(typeof h=="undefined"||h===null||h==="false");j=!(typeof j=="undefined"||j===null||j==="false");k=this.determinePlayback(d,c,mejs.MediaFeatures.supportsMediaTag,g,f);k.url=k.url!==null?mejs.Utility.absolutizeUrl(k.url):"";if(k.method=="native"){if(mejs.MediaFeatures.isBustedAndroid){d.src=k.url;d.addEventListener("click",function(){d.play()},false)}return this.updateNative(k,c,h,l)}else if(k.method!=="")return this.createPlugin(k,c,e,h,l,j);else{this.createErrorMessage(k,c,e);return this}},
determinePlayback:function(a,b,c,d,e){var g=[],f,h,l,j={method:"",url:"",htmlMediaElement:a,isVideo:a.tagName.toLowerCase()!="audio"},k;if(typeof b.type!="undefined"&&b.type!=="")if(typeof b.type=="string")g.push({type:b.type,url:e});else for(f=0;f<b.type.length;f++)g.push({type:b.type[f],url:e});else if(e!==null){l=this.formatType(e,a.getAttribute("type"));g.push({type:l,url:e})}else for(f=0;f<a.childNodes.length;f++){h=a.childNodes[f];if(h.nodeType==1&&h.tagName.toLowerCase()=="source"){e=h.getAttribute("src");
l=this.formatType(e,h.getAttribute("type"));h=h.getAttribute("media");if(!h||!window.matchMedia||window.matchMedia&&window.matchMedia(h).matches)g.push({type:l,url:e})}}if(!d&&g.length>0&&g[0].url!==null&&this.getTypeFromFile(g[0].url).indexOf("audio")>-1)j.isVideo=false;if(mejs.MediaFeatures.isBustedAndroid)a.canPlayType=function(m){return m.match(/video\/(mp4|m4v)/gi)!==null?"maybe":""};if(c&&(b.mode==="auto"||b.mode==="auto_plugin"||b.mode==="native")&&!(mejs.MediaFeatures.isBustedNativeHTTPS&&
b.httpsBasicAuthSite===true)){if(!d){f=document.createElement(j.isVideo?"video":"audio");a.parentNode.insertBefore(f,a);a.style.display="none";j.htmlMediaElement=a=f}for(f=0;f<g.length;f++)if(a.canPlayType(g[f].type).replace(/no/,"")!==""||a.canPlayType(g[f].type.replace(/mp3/,"mpeg")).replace(/no/,"")!==""){j.method="native";j.url=g[f].url;break}if(j.method==="native"){if(j.url!==null)a.src=j.url;if(b.mode!=="auto_plugin")return j}}if(b.mode==="auto"||b.mode==="auto_plugin"||b.mode==="shim")for(f=
0;f<g.length;f++){l=g[f].type;for(a=0;a<b.plugins.length;a++){e=b.plugins[a];h=mejs.plugins[e];for(c=0;c<h.length;c++){k=h[c];if(k.version==null||mejs.PluginDetector.hasPluginVersion(e,k.version))for(d=0;d<k.types.length;d++)if(l==k.types[d]){j.method=e;j.url=g[f].url;return j}}}}if(b.mode==="auto_plugin"&&j.method==="native")return j;if(j.method===""&&g.length>0)j.url=g[0].url;return j},formatType:function(a,b){return a&&!b?this.getTypeFromFile(a):b&&~b.indexOf(";")?b.substr(0,b.indexOf(";")):b},
getTypeFromFile:function(a){a=a.split("?")[0];a=a.substring(a.lastIndexOf(".")+1).toLowerCase();return(/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(a)?"video":"audio")+"/"+this.getTypeFromExtension(a)},getTypeFromExtension:function(a){switch(a){case "mp4":case "m4v":return"mp4";case "webm":case "webma":case "webmv":return"webm";case "ogg":case "oga":case "ogv":return"ogg";default:return a}},createErrorMessage:function(a,b,c){var d=a.htmlMediaElement,e=document.createElement("div");e.className=
"me-cannotplay";try{e.style.width=d.width+"px";e.style.height=d.height+"px"}catch(g){}e.innerHTML=b.customError?b.customError:c!==""?'<a href="'+a.url+'"><img src="'+c+'" width="100%" height="100%" /></a>':'<a href="'+a.url+'"><span>'+mejs.i18n.t("Download File")+"</span></a>";d.parentNode.insertBefore(e,d);d.style.display="none";b.error(d)},createPlugin:function(a,b,c,d,e,g){c=a.htmlMediaElement;var f=1,h=1,l="me_"+a.method+"_"+mejs.meIndex++,j=new mejs.PluginMediaElement(l,a.method,a.url),k=document.createElement("div"),
m;j.tagName=c.tagName;for(m=0;m<c.attributes.length;m++){var n=c.attributes[m];n.specified==true&&j.setAttribute(n.name,n.value)}for(m=c.parentNode;m!==null&&m.tagName.toLowerCase()!="body";){if(m.parentNode.tagName.toLowerCase()=="p"){m.parentNode.parentNode.insertBefore(m,m.parentNode);break}m=m.parentNode}if(a.isVideo){f=b.pluginWidth>0?b.pluginWidth:b.videoWidth>0?b.videoWidth:c.getAttribute("width")!==null?c.getAttribute("width"):b.defaultVideoWidth;h=b.pluginHeight>0?b.pluginHeight:b.videoHeight>
0?b.videoHeight:c.getAttribute("height")!==null?c.getAttribute("height"):b.defaultVideoHeight;f=mejs.Utility.encodeUrl(f);h=mejs.Utility.encodeUrl(h)}else if(b.enablePluginDebug){f=320;h=240}j.success=b.success;mejs.MediaPluginBridge.registerPluginElement(l,j,c);k.className="me-plugin";k.id=l+"_container";a.isVideo?c.parentNode.insertBefore(k,c):document.body.insertBefore(k,document.body.childNodes[0]);d=["id="+l,"isvideo="+(a.isVideo?"true":"false"),"autoplay="+(d?"true":"false"),"preload="+e,"width="+
f,"startvolume="+b.startVolume,"timerrate="+b.timerRate,"flashstreamer="+b.flashStreamer,"height="+h,"pseudostreamstart="+b.pseudoStreamingStartQueryParam];if(a.url!==null)a.method=="flash"?d.push("file="+mejs.Utility.encodeUrl(a.url)):d.push("file="+a.url);b.enablePluginDebug&&d.push("debug=true");b.enablePluginSmoothing&&d.push("smoothing=true");b.enablePseudoStreaming&&d.push("pseudostreaming=true");g&&d.push("controls=true");if(b.pluginVars)d=d.concat(b.pluginVars);switch(a.method){case "silverlight":k.innerHTML=
'<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="'+l+'" name="'+l+'" width="'+f+'" height="'+h+'" class="mejs-shim"><param name="initParams" value="'+d.join(",")+'" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="'+b.pluginPath+b.silverlightName+'" /></object>';break;case "flash":if(mejs.MediaFeatures.isIE){a=
document.createElement("div");k.appendChild(a);a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+l+'" width="'+f+'" height="'+h+'" class="mejs-shim"><param name="movie" value="'+b.pluginPath+b.flashName+"?x="+new Date+'" /><param name="flashvars" value="'+d.join("&amp;")+'" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>'}else k.innerHTML=
'<embed id="'+l+'" name="'+l+'" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="'+b.pluginPath+b.flashName+'" flashvars="'+d.join("&")+'" width="'+f+'" height="'+h+'" scale="default"class="mejs-shim"></embed>';break;case "youtube":b=a.url.substr(a.url.lastIndexOf("=")+1);youtubeSettings={container:k,containerId:k.id,pluginMediaElement:j,
pluginId:l,videoId:b,height:h,width:f};mejs.PluginDetector.hasPluginVersion("flash",[10,0,0])?mejs.YouTubeApi.createFlash(youtubeSettings):mejs.YouTubeApi.enqueueIframe(youtubeSettings);break;case "vimeo":j.vimeoid=a.url.substr(a.url.lastIndexOf("/")+1);k.innerHTML='<iframe src="http://player.vimeo.com/video/'+j.vimeoid+'?portrait=0&byline=0&title=0" width="'+f+'" height="'+h+'" frameborder="0" class="mejs-shim"></iframe>'}c.style.display="none";c.removeAttribute("autoplay");return j},updateNative:function(a,
b){var c=a.htmlMediaElement,d;for(d in mejs.HtmlMediaElement)c[d]=mejs.HtmlMediaElement[d];b.success(c,c);return c}};
mejs.YouTubeApi={isIframeStarted:false,isIframeLoaded:false,loadIframeApi:function(){if(!this.isIframeStarted){var a=document.createElement("script");a.src="//www.youtube.com/player_api";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b);this.isIframeStarted=true}},iframeQueue:[],enqueueIframe:function(a){if(this.isLoaded)this.createIframe(a);else{this.loadIframeApi();this.iframeQueue.push(a)}},createIframe:function(a){var b=a.pluginMediaElement,c=new YT.Player(a.containerId,
{height:a.height,width:a.width,videoId:a.videoId,playerVars:{controls:0},events:{onReady:function(){a.pluginMediaElement.pluginApi=c;mejs.MediaPluginBridge.initPlugin(a.pluginId);setInterval(function(){mejs.YouTubeApi.createEvent(c,b,"timeupdate")},250)},onStateChange:function(d){mejs.YouTubeApi.handleStateChange(d.data,c,b)}}})},createEvent:function(a,b,c){c={type:c,target:b};if(a&&a.getDuration){b.currentTime=c.currentTime=a.getCurrentTime();b.duration=c.duration=a.getDuration();c.paused=b.paused;
c.ended=b.ended;c.muted=a.isMuted();c.volume=a.getVolume()/100;c.bytesTotal=a.getVideoBytesTotal();c.bufferedBytes=a.getVideoBytesLoaded();var d=c.bufferedBytes/c.bytesTotal*c.duration;c.target.buffered=c.buffered={start:function(){return 0},end:function(){return d},length:1}}b.dispatchEvent(c.type,c)},iFrameReady:function(){for(this.isIframeLoaded=this.isLoaded=true;this.iframeQueue.length>0;)this.createIframe(this.iframeQueue.pop())},flashPlayers:{},createFlash:function(a){this.flashPlayers[a.pluginId]=
a;var b,c="//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid="+a.pluginId+"&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";if(mejs.MediaFeatures.isIE){b=document.createElement("div");a.container.appendChild(b);b.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+a.pluginId+'" width="'+a.width+'" height="'+a.height+'" class="mejs-shim"><param name="movie" value="'+
c+'" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'}else a.container.innerHTML='<object type="application/x-shockwave-flash" id="'+a.pluginId+'" data="'+c+'" width="'+a.width+'" height="'+a.height+'" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'},flashReady:function(a){var b=this.flashPlayers[a],c=
document.getElementById(a),d=b.pluginMediaElement;d.pluginApi=d.pluginElement=c;mejs.MediaPluginBridge.initPlugin(a);c.cueVideoById(b.videoId);a=b.containerId+"_callback";window[a]=function(e){mejs.YouTubeApi.handleStateChange(e,c,d)};c.addEventListener("onStateChange",a);setInterval(function(){mejs.YouTubeApi.createEvent(c,d,"timeupdate")},250)},handleStateChange:function(a,b,c){switch(a){case -1:c.paused=true;c.ended=true;mejs.YouTubeApi.createEvent(b,c,"loadedmetadata");break;case 0:c.paused=false;
c.ended=true;mejs.YouTubeApi.createEvent(b,c,"ended");break;case 1:c.paused=false;c.ended=false;mejs.YouTubeApi.createEvent(b,c,"play");mejs.YouTubeApi.createEvent(b,c,"playing");break;case 2:c.paused=true;c.ended=false;mejs.YouTubeApi.createEvent(b,c,"pause");break;case 3:mejs.YouTubeApi.createEvent(b,c,"progress")}}};function onYouTubePlayerAPIReady(){mejs.YouTubeApi.iFrameReady()}function onYouTubePlayerReady(a){mejs.YouTubeApi.flashReady(a)}window.mejs=mejs;window.MediaElement=mejs.MediaElement;
(function(a,b){var c={locale:{language:"",strings:{}},methods:{}};c.getLanguage=function(){return(c.locale.language||window.navigator.userLanguage||window.navigator.language).substr(0,2).toLowerCase()};if(typeof mejsL10n!="undefined")c.locale.language=mejsL10n.language;c.methods.checkPlain=function(d){var e,g,f={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"};d=String(d);for(e in f)if(f.hasOwnProperty(e)){g=RegExp(e,"g");d=d.replace(g,f[e])}return d};c.methods.t=function(d,e){if(c.locale.strings&&
c.locale.strings[e.context]&&c.locale.strings[e.context][d])d=c.locale.strings[e.context][d];return c.methods.checkPlain(d)};c.t=function(d,e){if(typeof d==="string"&&d.length>0){var g=c.getLanguage();e=e||{context:g};return c.methods.t(d,e)}else throw{name:"InvalidArgumentException",message:"First argument is either not a string or empty."};};b.i18n=c})(document,mejs);(function(a){if(typeof mejsL10n!="undefined")a[mejsL10n.language]=mejsL10n.strings})(mejs.i18n.locale.strings);
(function(a){if(typeof a.de==="undefined")a.de={Fullscreen:"Vollbild","Go Fullscreen":"Vollbild an","Turn off Fullscreen":"Vollbild aus",Close:"Schlie\u00dfen"}})(mejs.i18n.locale.strings);(function(a){if(typeof a.zh==="undefined")a.zh={Fullscreen:"\u5168\u87a2\u5e55","Go Fullscreen":"\u5168\u5c4f\u6a21\u5f0f","Turn off Fullscreen":"\u9000\u51fa\u5168\u5c4f\u6a21\u5f0f",Close:"\u95dc\u9589"}})(mejs.i18n.locale.strings);

/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2013, John Dyer (http://j.hn/)
 * License: MIT
 *
 */if(typeof jQuery!="undefined")mejs.$=jQuery;else if(typeof ender!="undefined")mejs.$=ender;
(function(f){mejs.MepDefaults={poster:"",showPosterWhenEnded:false,defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,defaultAudioWidth:400,defaultAudioHeight:30,defaultSeekBackwardInterval:function(a){return a.duration*0.05},defaultSeekForwardInterval:function(a){return a.duration*0.05},audioWidth:-1,audioHeight:-1,startVolume:0.8,loop:false,autoRewind:true,enableAutosize:true,alwaysShowHours:false,showTimecodeFrameCount:false,framesPerSecond:25,autosizeProgress:true,alwaysShowControls:false,
hideVideoControlsOnLoad:false,clickToPlayPause:true,iPadUseNativeControls:false,iPhoneUseNativeControls:false,AndroidUseNativeControls:false,features:["playpause","current","progress","duration","tracks","volume","fullscreen"],isVideo:true,enableKeyboard:true,pauseOtherPlayers:true,keyActions:[{keys:[32,179],action:function(a,b){b.paused||b.ended?a.play():a.pause()}},{keys:[38],action:function(a,b){b.setVolume(Math.min(b.volume+0.1,1))}},{keys:[40],action:function(a,b){b.setVolume(Math.max(b.volume-
0.1,0))}},{keys:[37,227],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){if(a.isVideo){a.showControls();a.startControlsTimer()}var c=Math.max(b.currentTime-a.options.defaultSeekBackwardInterval(b),0);b.setCurrentTime(c)}}},{keys:[39,228],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){if(a.isVideo){a.showControls();a.startControlsTimer()}var c=Math.min(b.currentTime+a.options.defaultSeekForwardInterval(b),b.duration);b.setCurrentTime(c)}}},{keys:[70],action:function(a){if(typeof a.enterFullScreen!=
"undefined")a.isFullScreen?a.exitFullScreen():a.enterFullScreen()}}]};mejs.mepIndex=0;mejs.players={};mejs.MediaElementPlayer=function(a,b){if(!(this instanceof mejs.MediaElementPlayer))return new mejs.MediaElementPlayer(a,b);this.$media=this.$node=f(a);this.node=this.media=this.$media[0];if(typeof this.node.player!="undefined")return this.node.player;else this.node.player=this;if(typeof b=="undefined")b=this.$node.data("mejsoptions");this.options=f.extend({},mejs.MepDefaults,b);this.id="mep_"+mejs.mepIndex++;
mejs.players[this.id]=this;this.init();return this};mejs.MediaElementPlayer.prototype={hasFocus:false,controlsAreVisible:true,init:function(){var a=this,b=mejs.MediaFeatures,c=f.extend(true,{},a.options,{success:function(d,g){a.meReady(d,g)},error:function(d){a.handleError(d)}}),e=a.media.tagName.toLowerCase();a.isDynamic=e!=="audio"&&e!=="video";a.isVideo=a.isDynamic?a.options.isVideo:e!=="audio"&&a.options.isVideo;if(b.isiPad&&a.options.iPadUseNativeControls||b.isiPhone&&a.options.iPhoneUseNativeControls){a.$media.attr("controls",
"controls");b.isiPad&&a.media.getAttribute("autoplay")!==null&&a.play()}else if(!(b.isAndroid&&a.options.AndroidUseNativeControls)){a.$media.removeAttr("controls");a.container=f('<div id="'+a.id+'" class="mejs-container '+(mejs.MediaFeatures.svg?"svg":"no-svg")+'"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(a.$media[0].className).insertBefore(a.$media);a.container.addClass((b.isAndroid?
"mejs-android ":"")+(b.isiOS?"mejs-ios ":"")+(b.isiPad?"mejs-ipad ":"")+(b.isiPhone?"mejs-iphone ":"")+(a.isVideo?"mejs-video ":"mejs-audio "));if(b.isiOS){b=a.$media.clone();a.container.find(".mejs-mediaelement").append(b);a.$media.remove();a.$node=a.$media=b;a.node=a.media=b[0]}else a.container.find(".mejs-mediaelement").append(a.$media);a.controls=a.container.find(".mejs-controls");a.layers=a.container.find(".mejs-layers");b=a.isVideo?"video":"audio";e=b.substring(0,1).toUpperCase()+b.substring(1);
a.width=a.options[b+"Width"]>0||a.options[b+"Width"].toString().indexOf("%")>-1?a.options[b+"Width"]:a.media.style.width!==""&&a.media.style.width!==null?a.media.style.width:a.media.getAttribute("width")!==null?a.$media.attr("width"):a.options["default"+e+"Width"];a.height=a.options[b+"Height"]>0||a.options[b+"Height"].toString().indexOf("%")>-1?a.options[b+"Height"]:a.media.style.height!==""&&a.media.style.height!==null?a.media.style.height:a.$media[0].getAttribute("height")!==null?a.$media.attr("height"):
a.options["default"+e+"Height"];a.setPlayerSize(a.width,a.height);c.pluginWidth=a.width;c.pluginHeight=a.height}mejs.MediaElement(a.$media[0],c);typeof a.container!="undefined"&&a.controlsAreVisible&&a.container.trigger("controlsshown")},showControls:function(a){var b=this;a=typeof a=="undefined"||a;if(!b.controlsAreVisible){if(a){b.controls.css("visibility","visible").stop(true,true).fadeIn(200,function(){b.controlsAreVisible=true;b.container.trigger("controlsshown")});b.container.find(".mejs-control").css("visibility",
"visible").stop(true,true).fadeIn(200,function(){b.controlsAreVisible=true})}else{b.controls.css("visibility","visible").css("display","block");b.container.find(".mejs-control").css("visibility","visible").css("display","block");b.controlsAreVisible=true;b.container.trigger("controlsshown")}b.setControlsSize()}},hideControls:function(a){var b=this;a=typeof a=="undefined"||a;if(!(!b.controlsAreVisible||b.options.alwaysShowControls))if(a){b.controls.stop(true,true).fadeOut(200,function(){f(this).css("visibility",
"hidden").css("display","block");b.controlsAreVisible=false;b.container.trigger("controlshidden")});b.container.find(".mejs-control").stop(true,true).fadeOut(200,function(){f(this).css("visibility","hidden").css("display","block")})}else{b.controls.css("visibility","hidden").css("display","block");b.container.find(".mejs-control").css("visibility","hidden").css("display","block");b.controlsAreVisible=false;b.container.trigger("controlshidden")}},controlsTimer:null,startControlsTimer:function(a){var b=
this;a=typeof a!="undefined"?a:1500;b.killControlsTimer("start");b.controlsTimer=setTimeout(function(){b.hideControls();b.killControlsTimer("hide")},a)},killControlsTimer:function(){if(this.controlsTimer!==null){clearTimeout(this.controlsTimer);delete this.controlsTimer;this.controlsTimer=null}},controlsEnabled:true,disableControls:function(){this.killControlsTimer();this.hideControls(false);this.controlsEnabled=false},enableControls:function(){this.showControls(false);this.controlsEnabled=true},
meReady:function(a,b){var c=this,e=mejs.MediaFeatures,d=b.getAttribute("autoplay");d=!(typeof d=="undefined"||d===null||d==="false");var g;if(!c.created){c.created=true;c.media=a;c.domNode=b;if(!(e.isAndroid&&c.options.AndroidUseNativeControls)&&!(e.isiPad&&c.options.iPadUseNativeControls)&&!(e.isiPhone&&c.options.iPhoneUseNativeControls)){c.buildposter(c,c.controls,c.layers,c.media);c.buildkeyboard(c,c.controls,c.layers,c.media);c.buildoverlays(c,c.controls,c.layers,c.media);c.findTracks();for(g in c.options.features){e=
c.options.features[g];if(c["build"+e])try{c["build"+e](c,c.controls,c.layers,c.media)}catch(k){}}c.container.trigger("controlsready");c.setPlayerSize(c.width,c.height);c.setControlsSize();if(c.isVideo){if(mejs.MediaFeatures.hasTouch)c.$media.bind("touchstart",function(){if(c.controlsAreVisible)c.hideControls(false);else c.controlsEnabled&&c.showControls(false)});else{mejs.MediaElementPlayer.prototype.clickToPlayPauseCallback=function(){if(c.options.clickToPlayPause)c.media.paused?c.play():c.pause()};
c.media.addEventListener("click",c.clickToPlayPauseCallback,false);c.container.bind("mouseenter mouseover",function(){if(c.controlsEnabled)if(!c.options.alwaysShowControls){c.killControlsTimer("enter");c.showControls();c.startControlsTimer(2500)}}).bind("mousemove",function(){if(c.controlsEnabled){c.controlsAreVisible||c.showControls();c.options.alwaysShowControls||c.startControlsTimer(2500)}}).bind("mouseleave",function(){c.controlsEnabled&&!c.media.paused&&!c.options.alwaysShowControls&&c.startControlsTimer(1E3)})}c.options.hideVideoControlsOnLoad&&
c.hideControls(false);d&&!c.options.alwaysShowControls&&c.hideControls();c.options.enableAutosize&&c.media.addEventListener("loadedmetadata",function(j){if(c.options.videoHeight<=0&&c.domNode.getAttribute("height")===null&&!isNaN(j.target.videoHeight)){c.setPlayerSize(j.target.videoWidth,j.target.videoHeight);c.setControlsSize();c.media.setVideoSize(j.target.videoWidth,j.target.videoHeight)}},false)}a.addEventListener("play",function(){for(var j in mejs.players){var m=mejs.players[j];m.id!=c.id&&
c.options.pauseOtherPlayers&&!m.paused&&!m.ended&&m.pause();m.hasFocus=false}c.hasFocus=true},false);c.media.addEventListener("ended",function(){if(c.options.autoRewind)try{c.media.setCurrentTime(0)}catch(j){}c.media.pause();c.setProgressRail&&c.setProgressRail();c.setCurrentRail&&c.setCurrentRail();if(c.options.loop)c.play();else!c.options.alwaysShowControls&&c.controlsEnabled&&c.showControls()},false);c.media.addEventListener("loadedmetadata",function(){c.updateDuration&&c.updateDuration();c.updateCurrent&&
c.updateCurrent();if(!c.isFullScreen){c.setPlayerSize(c.width,c.height);c.setControlsSize()}},false);setTimeout(function(){c.setPlayerSize(c.width,c.height);c.setControlsSize()},50);c.globalBind("resize",function(){c.isFullScreen||mejs.MediaFeatures.hasTrueNativeFullScreen&&document.webkitIsFullScreen||c.setPlayerSize(c.width,c.height);c.setControlsSize()});c.media.pluginType=="youtube"&&c.container.find(".mejs-overlay-play").hide()}d&&a.pluginType=="native"&&c.play();if(c.options.success)typeof c.options.success==
"string"?window[c.options.success](c.media,c.domNode,c):c.options.success(c.media,c.domNode,c)}},handleError:function(a){this.controls.hide();this.options.error&&this.options.error(a)},setPlayerSize:function(a,b){if(typeof a!="undefined")this.width=a;if(typeof b!="undefined")this.height=b;if(this.height.toString().indexOf("%")>0||this.$node.css("max-width")==="100%"||parseInt(this.$node.css("max-width").replace(/px/,""),10)/this.$node.offsetParent().width()===1||this.$node[0].currentStyle&&this.$node[0].currentStyle.maxWidth===
"100%"){var c=this.isVideo?this.media.videoWidth&&this.media.videoWidth>0?this.media.videoWidth:this.options.defaultVideoWidth:this.options.defaultAudioWidth,e=this.isVideo?this.media.videoHeight&&this.media.videoHeight>0?this.media.videoHeight:this.options.defaultVideoHeight:this.options.defaultAudioHeight,d=this.container.parent().closest(":visible").width();c=this.isVideo||!this.options.autosizeProgress?parseInt(d*e/c,10):e;if(this.container.parent()[0].tagName.toLowerCase()==="body"){d=f(window).width();
c=f(window).height()}if(c!=0&&d!=0){this.container.width(d).height(c);this.$media.add(this.container.find(".mejs-shim")).width("100%").height("100%");this.isVideo&&this.media.setVideoSize&&this.media.setVideoSize(d,c);this.layers.children(".mejs-layer").width("100%").height("100%")}}else{this.container.width(this.width).height(this.height);this.layers.children(".mejs-layer").width(this.width).height(this.height)}d=this.layers.find(".mejs-overlay-play");c=d.find(".mejs-overlay-button");d.height(this.container.height()-
this.controls.height());c.css("margin-top","-"+(c.height()/2-this.controls.height()/2).toString()+"px")},setControlsSize:function(){var a=0,b=0,c=this.controls.find(".mejs-time-rail"),e=this.controls.find(".mejs-time-total");this.controls.find(".mejs-time-current");this.controls.find(".mejs-time-loaded");var d=c.siblings();if(this.options&&!this.options.autosizeProgress)b=parseInt(c.css("width"));if(b===0||!b){d.each(function(){var g=f(this);if(g.css("position")!="absolute"&&g.is(":visible"))a+=f(this).outerWidth(true)});
b=this.controls.width()-a-(c.outerWidth(true)-c.width())}c.width(b);e.width(b-(e.outerWidth(true)-e.width()));this.setProgressRail&&this.setProgressRail();this.setCurrentRail&&this.setCurrentRail()},buildposter:function(a,b,c,e){var d=f('<div class="mejs-poster mejs-layer"></div>').appendTo(c);b=a.$media.attr("poster");if(a.options.poster!=="")b=a.options.poster;b!==""&&b!=null?this.setPoster(b):d.hide();e.addEventListener("play",function(){d.hide()},false);a.options.showPosterWhenEnded&&a.options.autoRewind&&
e.addEventListener("ended",function(){d.show()},false)},setPoster:function(a){var b=this.container.find(".mejs-poster"),c=b.find("img");if(c.length==0)c=f('<img width="100%" height="100%" />').appendTo(b);c.attr("src",a);b.css({"background-image":"url("+a+")"})},buildoverlays:function(a,b,c,e){var d=this;if(a.isVideo){var g=f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(c),k=f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(c),
j=f('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(c).bind("click touchstart",function(){d.options.clickToPlayPause&&e.paused&&d.play()});e.addEventListener("play",function(){j.hide();g.hide();b.find(".mejs-time-buffering").hide();k.hide()},false);e.addEventListener("playing",function(){j.hide();g.hide();b.find(".mejs-time-buffering").hide();k.hide()},false);e.addEventListener("seeking",function(){g.show();b.find(".mejs-time-buffering").show()},
false);e.addEventListener("seeked",function(){g.hide();b.find(".mejs-time-buffering").hide()},false);e.addEventListener("pause",function(){mejs.MediaFeatures.isiPhone||j.show()},false);e.addEventListener("waiting",function(){g.show();b.find(".mejs-time-buffering").show()},false);e.addEventListener("loadeddata",function(){g.show();b.find(".mejs-time-buffering").show()},false);e.addEventListener("canplay",function(){g.hide();b.find(".mejs-time-buffering").hide()},false);e.addEventListener("error",function(){g.hide();
b.find(".mejs-time-buffering").hide();k.show();k.find("mejs-overlay-error").html("Error loading this resource")},false)}},buildkeyboard:function(a,b,c,e){this.globalBind("keydown",function(d){if(a.hasFocus&&a.options.enableKeyboard)for(var g=0,k=a.options.keyActions.length;g<k;g++)for(var j=a.options.keyActions[g],m=0,q=j.keys.length;m<q;m++)if(d.keyCode==j.keys[m]){d.preventDefault();j.action(a,e,d.keyCode);return false}return true});this.globalBind("click",function(d){if(f(d.target).closest(".mejs-container").length==
0)a.hasFocus=false})},findTracks:function(){var a=this,b=a.$media.find("track");a.tracks=[];b.each(function(c,e){e=f(e);a.tracks.push({srclang:e.attr("srclang")?e.attr("srclang").toLowerCase():"",src:e.attr("src"),kind:e.attr("kind"),label:e.attr("label")||"",entries:[],isLoaded:false})})},changeSkin:function(a){this.container[0].className="mejs-container "+a;this.setPlayerSize(this.width,this.height);this.setControlsSize()},play:function(){this.load();this.media.play()},pause:function(){try{this.media.pause()}catch(a){}},
load:function(){this.isLoaded||this.media.load();this.isLoaded=true},setMuted:function(a){this.media.setMuted(a)},setCurrentTime:function(a){this.media.setCurrentTime(a)},getCurrentTime:function(){return this.media.currentTime},setVolume:function(a){this.media.setVolume(a)},getVolume:function(){return this.media.volume},setSrc:function(a){this.media.setSrc(a)},remove:function(){var a,b;for(a in this.options.features){b=this.options.features[a];if(this["clean"+b])try{this["clean"+b](this)}catch(c){}}if(this.isDynamic)this.$node.insertBefore(this.container);
else{this.$media.prop("controls",true);this.$node.clone().show().insertBefore(this.container);this.$node.remove()}this.media.pluginType!=="native"&&this.media.remove();delete mejs.players[this.id];this.container.remove();this.globalUnbind();delete this.node.player}};(function(){function a(c,e){var d={d:[],w:[]};f.each((c||"").split(" "),function(g,k){var j=k+"."+e;if(j.indexOf(".")===0){d.d.push(j);d.w.push(j)}else d[b.test(k)?"w":"d"].push(j)});d.d=d.d.join(" ");d.w=d.w.join(" ");return d}var b=
/^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;mejs.MediaElementPlayer.prototype.globalBind=function(c,e,d){c=a(c,this.id);c.d&&f(document).bind(c.d,e,d);c.w&&f(window).bind(c.w,e,d)};mejs.MediaElementPlayer.prototype.globalUnbind=function(c,e){c=a(c,this.id);c.d&&f(document).unbind(c.d,e);c.w&&f(window).unbind(c.w,e)}})();if(typeof jQuery!="undefined")jQuery.fn.mediaelementplayer=function(a){a===false?this.each(function(){var b=jQuery(this).data("mediaelementplayer");
b&&b.remove();jQuery(this).removeData("mediaelementplayer")}):this.each(function(){jQuery(this).data("mediaelementplayer",new mejs.MediaElementPlayer(this,a))});return this};f(document).ready(function(){f(".mejs-player").mediaelementplayer()});window.MediaElementPlayer=mejs.MediaElementPlayer})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{playpauseText:mejs.i18n.t("Play/Pause")});f.extend(MediaElementPlayer.prototype,{buildplaypause:function(a,b,c,e){var d=f('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="'+this.id+'" title="'+this.options.playpauseText+'" aria-label="'+this.options.playpauseText+'"></button></div>').appendTo(b).click(function(g){g.preventDefault();e.paused?e.play():e.pause();return false});e.addEventListener("play",function(){d.removeClass("mejs-play").addClass("mejs-pause")},
false);e.addEventListener("playing",function(){d.removeClass("mejs-play").addClass("mejs-pause")},false);e.addEventListener("pause",function(){d.removeClass("mejs-pause").addClass("mejs-play")},false);e.addEventListener("paused",function(){d.removeClass("mejs-pause").addClass("mejs-play")},false)}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{stopText:"Stop"});f.extend(MediaElementPlayer.prototype,{buildstop:function(a,b,c,e){f('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="'+this.id+'" title="'+this.options.stopText+'" aria-label="'+this.options.stopText+'"></button></div>').appendTo(b).click(function(){e.paused||e.pause();if(e.currentTime>0){e.setCurrentTime(0);e.pause();b.find(".mejs-time-current").width("0px");b.find(".mejs-time-handle").css("left",
"0px");b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));c.find(".mejs-poster").show()}})}})})(mejs.$);
(function(f){f.extend(MediaElementPlayer.prototype,{buildprogress:function(a,b,c,e){f('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(b);b.find(".mejs-time-buffering").hide();var d=
this,g=b.find(".mejs-time-total");c=b.find(".mejs-time-loaded");var k=b.find(".mejs-time-current"),j=b.find(".mejs-time-handle"),m=b.find(".mejs-time-float"),q=b.find(".mejs-time-float-current"),p=function(h){h=h.pageX;var l=g.offset(),r=g.outerWidth(true),n=0,o=n=0;if(e.duration){if(h<l.left)h=l.left;else if(h>r+l.left)h=r+l.left;o=h-l.left;n=o/r;n=n<=0.02?0:n*e.duration;t&&n!==e.currentTime&&e.setCurrentTime(n);if(!mejs.MediaFeatures.hasTouch){m.css("left",o);q.html(mejs.Utility.secondsToTimeCode(n));
m.show()}}},t=false;g.bind("mousedown",function(h){if(h.which===1){t=true;p(h);d.globalBind("mousemove.dur",function(l){p(l)});d.globalBind("mouseup.dur",function(){t=false;m.hide();d.globalUnbind(".dur")});return false}}).bind("mouseenter",function(){d.globalBind("mousemove.dur",function(h){p(h)});mejs.MediaFeatures.hasTouch||m.show()}).bind("mouseleave",function(){if(!t){d.globalUnbind(".dur");m.hide()}});e.addEventListener("progress",function(h){a.setProgressRail(h);a.setCurrentRail(h)},false);
e.addEventListener("timeupdate",function(h){a.setProgressRail(h);a.setCurrentRail(h)},false);d.loaded=c;d.total=g;d.current=k;d.handle=j},setProgressRail:function(a){var b=a!=undefined?a.target:this.media,c=null;if(b&&b.buffered&&b.buffered.length>0&&b.buffered.end&&b.duration)c=b.buffered.end(0)/b.duration;else if(b&&b.bytesTotal!=undefined&&b.bytesTotal>0&&b.bufferedBytes!=undefined)c=b.bufferedBytes/b.bytesTotal;else if(a&&a.lengthComputable&&a.total!=0)c=a.loaded/a.total;if(c!==null){c=Math.min(1,
Math.max(0,c));this.loaded&&this.total&&this.loaded.width(this.total.width()*c)}},setCurrentRail:function(){if(this.media.currentTime!=undefined&&this.media.duration)if(this.total&&this.handle){var a=Math.round(this.total.width()*this.media.currentTime/this.media.duration),b=a-Math.round(this.handle.outerWidth(true)/2);this.current.width(a);this.handle.css("left",b)}}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{duration:-1,timeAndDurationSeparator:"<span> | </span>"});f.extend(MediaElementPlayer.prototype,{buildcurrent:function(a,b,c,e){f('<div class="mejs-time"><span class="mejs-currenttime">'+(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00")+"</span></div>").appendTo(b);this.currenttime=this.controls.find(".mejs-currenttime");e.addEventListener("timeupdate",function(){a.updateCurrent()},false)},buildduration:function(a,b,
c,e){if(b.children().last().find(".mejs-currenttime").length>0)f(this.options.timeAndDurationSeparator+'<span class="mejs-duration">'+(this.options.duration>0?mejs.Utility.secondsToTimeCode(this.options.duration,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25):(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span>").appendTo(b.find(".mejs-time"));else{b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
f('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">'+(this.options.duration>0?mejs.Utility.secondsToTimeCode(this.options.duration,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25):(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span></div>").appendTo(b)}this.durationD=this.controls.find(".mejs-duration");e.addEventListener("timeupdate",function(){a.updateDuration()},
false)},updateCurrent:function(){if(this.currenttime)this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25))},updateDuration:function(){this.container.toggleClass("mejs-long-video",this.media.duration>3600);if(this.durationD&&(this.options.duration>0||this.media.duration))this.durationD.html(mejs.Utility.secondsToTimeCode(this.options.duration>0?this.options.duration:
this.media.duration,this.options.alwaysShowHours,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25))}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{muteText:mejs.i18n.t("Mute Toggle"),hideVolumeOnTouchDevices:true,audioVolume:"horizontal",videoVolume:"vertical"});f.extend(MediaElementPlayer.prototype,{buildvolume:function(a,b,c,e){if(!(mejs.MediaFeatures.hasTouch&&this.options.hideVolumeOnTouchDevices)){var d=this,g=d.isVideo?d.options.videoVolume:d.options.audioVolume,k=g=="horizontal"?f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+d.id+'" title="'+d.options.muteText+
'" aria-label="'+d.options.muteText+'"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(b):f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+d.id+'" title="'+d.options.muteText+'" aria-label="'+d.options.muteText+'"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(b),
j=d.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),m=d.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),q=d.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),p=d.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),t=function(n,o){if(!j.is(":visible")&&typeof o=="undefined"){j.show();t(n,true);j.hide()}else{n=Math.max(0,n);n=Math.min(n,1);n==0?k.removeClass("mejs-mute").addClass("mejs-unmute"):k.removeClass("mejs-unmute").addClass("mejs-mute");
if(g=="vertical"){var s=m.height(),u=m.position(),v=s-s*n;p.css("top",Math.round(u.top+v-p.height()/2));q.height(s-v);q.css("top",u.top+v)}else{s=m.width();u=m.position();s=s*n;p.css("left",Math.round(u.left+s-p.width()/2));q.width(Math.round(s))}}},h=function(n){var o=null,s=m.offset();if(g=="vertical"){o=m.height();parseInt(m.css("top").replace(/px/,""),10);o=(o-(n.pageY-s.top))/o;if(s.top==0||s.left==0)return}else{o=m.width();o=(n.pageX-s.left)/o}o=Math.max(0,o);o=Math.min(o,1);t(o);o==0?e.setMuted(true):
e.setMuted(false);e.setVolume(o)},l=false,r=false;k.hover(function(){j.show();r=true},function(){r=false;!l&&g=="vertical"&&j.hide()});j.bind("mouseover",function(){r=true}).bind("mousedown",function(n){h(n);d.globalBind("mousemove.vol",function(o){h(o)});d.globalBind("mouseup.vol",function(){l=false;d.globalUnbind(".vol");!r&&g=="vertical"&&j.hide()});l=true;return false});k.find("button").click(function(){e.setMuted(!e.muted)});e.addEventListener("volumechange",function(){if(!l)if(e.muted){t(0);
k.removeClass("mejs-mute").addClass("mejs-unmute")}else{t(e.volume);k.removeClass("mejs-unmute").addClass("mejs-mute")}},false);if(d.container.is(":visible")){t(a.options.startVolume);a.options.startVolume===0&&e.setMuted(true);e.pluginType==="native"&&e.setVolume(a.options.startVolume)}}}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{usePluginFullScreen:true,newWindowCallback:function(){return""},fullscreenText:mejs.i18n.t("Fullscreen")});f.extend(MediaElementPlayer.prototype,{isFullScreen:false,isNativeFullScreen:false,isInIframe:false,buildfullscreen:function(a,b,c,e){if(a.isVideo){a.isInIframe=window.location!=window.parent.location;if(mejs.MediaFeatures.hasTrueNativeFullScreen){c=function(){if(a.isFullScreen)if(mejs.MediaFeatures.isFullScreen()){a.isNativeFullScreen=true;a.setControlsSize()}else{a.isNativeFullScreen=
false;a.exitFullScreen()}};mejs.MediaFeatures.hasMozNativeFullScreen?a.globalBind(mejs.MediaFeatures.fullScreenEventName,c):a.container.bind(mejs.MediaFeatures.fullScreenEventName,c)}var d=this,g=f('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="'+d.id+'" title="'+d.options.fullscreenText+'" aria-label="'+d.options.fullscreenText+'"></button></div>').appendTo(b);if(d.media.pluginType==="native"||!d.options.usePluginFullScreen&&!mejs.MediaFeatures.isFirefox)g.click(function(){mejs.MediaFeatures.hasTrueNativeFullScreen&&
mejs.MediaFeatures.isFullScreen()||a.isFullScreen?a.exitFullScreen():a.enterFullScreen()});else{var k=null;if(function(){var h=document.createElement("x"),l=document.documentElement,r=window.getComputedStyle;if(!("pointerEvents"in h.style))return false;h.style.pointerEvents="auto";h.style.pointerEvents="x";l.appendChild(h);r=r&&r(h,"").pointerEvents==="auto";l.removeChild(h);return!!r}()&&!mejs.MediaFeatures.isOpera){var j=false,m=function(){if(j){for(var h in q)q[h].hide();g.css("pointer-events",
"");d.controls.css("pointer-events","");d.media.removeEventListener("click",d.clickToPlayPauseCallback);j=false}},q={};b=["top","left","right","bottom"];var p,t=function(){var h=g.offset().left-d.container.offset().left,l=g.offset().top-d.container.offset().top,r=g.outerWidth(true),n=g.outerHeight(true),o=d.container.width(),s=d.container.height();for(p in q)q[p].css({position:"absolute",top:0,left:0});q.top.width(o).height(l);q.left.width(h).height(n).css({top:l});q.right.width(o-h-r).height(n).css({top:l,
left:h+r});q.bottom.width(o).height(s-n-l).css({top:l+n})};d.globalBind("resize",function(){t()});p=0;for(c=b.length;p<c;p++)q[b[p]]=f('<div class="mejs-fullscreen-hover" />').appendTo(d.container).mouseover(m).hide();g.on("mouseover",function(){if(!d.isFullScreen){var h=g.offset(),l=a.container.offset();e.positionFullscreenButton(h.left-l.left,h.top-l.top,false);g.css("pointer-events","none");d.controls.css("pointer-events","none");d.media.addEventListener("click",d.clickToPlayPauseCallback);for(p in q)q[p].show();
t();j=true}});e.addEventListener("fullscreenchange",function(){d.isFullScreen=!d.isFullScreen;d.isFullScreen?d.media.removeEventListener("click",d.clickToPlayPauseCallback):d.media.addEventListener("click",d.clickToPlayPauseCallback);m()});d.globalBind("mousemove",function(h){if(j){var l=g.offset();if(h.pageY<l.top||h.pageY>l.top+g.outerHeight(true)||h.pageX<l.left||h.pageX>l.left+g.outerWidth(true)){g.css("pointer-events","");d.controls.css("pointer-events","");j=false}}})}else g.on("mouseover",
function(){if(k!==null){clearTimeout(k);delete k}var h=g.offset(),l=a.container.offset();e.positionFullscreenButton(h.left-l.left,h.top-l.top,true)}).on("mouseout",function(){if(k!==null){clearTimeout(k);delete k}k=setTimeout(function(){e.hideFullscreenButton()},1500)})}a.fullscreenBtn=g;d.globalBind("keydown",function(h){if((mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen()||d.isFullScreen)&&h.keyCode==27)a.exitFullScreen()})}},cleanfullscreen:function(a){a.exitFullScreen()},
containerSizeTimeout:null,enterFullScreen:function(){var a=this;if(!(a.media.pluginType!=="native"&&(mejs.MediaFeatures.isFirefox||a.options.usePluginFullScreen))){f(document.documentElement).addClass("mejs-fullscreen");normalHeight=a.container.height();normalWidth=a.container.width();if(a.media.pluginType==="native")if(mejs.MediaFeatures.hasTrueNativeFullScreen){mejs.MediaFeatures.requestFullScreen(a.container[0]);a.isInIframe&&setTimeout(function c(){if(a.isNativeFullScreen)f(window).width()!==
screen.width?a.exitFullScreen():setTimeout(c,500)},500)}else if(mejs.MediaFeatures.hasSemiNativeFullScreen){a.media.webkitEnterFullscreen();return}if(a.isInIframe){var b=a.options.newWindowCallback(this);if(b!=="")if(mejs.MediaFeatures.hasTrueNativeFullScreen)setTimeout(function(){if(!a.isNativeFullScreen){a.pause();window.open(b,a.id,"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no")}},250);else{a.pause();window.open(b,a.id,
"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no");return}}a.container.addClass("mejs-container-fullscreen").width("100%").height("100%");a.containerSizeTimeout=setTimeout(function(){a.container.css({width:"100%",height:"100%"});a.setControlsSize()},500);if(a.media.pluginType==="native")a.$media.width("100%").height("100%");else{a.container.find(".mejs-shim").width("100%").height("100%");a.media.setVideoSize(f(window).width(),
f(window).height())}a.layers.children("div").width("100%").height("100%");a.fullscreenBtn&&a.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");a.setControlsSize();a.isFullScreen=true}},exitFullScreen:function(){clearTimeout(this.containerSizeTimeout);if(this.media.pluginType!=="native"&&mejs.MediaFeatures.isFirefox)this.media.setFullscreen(false);else{if(mejs.MediaFeatures.hasTrueNativeFullScreen&&(mejs.MediaFeatures.isFullScreen()||this.isFullScreen))mejs.MediaFeatures.cancelFullScreen();
f(document.documentElement).removeClass("mejs-fullscreen");this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);if(this.media.pluginType==="native")this.$media.width(normalWidth).height(normalHeight);else{this.container.find(".mejs-shim").width(normalWidth).height(normalHeight);this.media.setVideoSize(normalWidth,normalHeight)}this.layers.children("div").width(normalWidth).height(normalHeight);this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
this.setControlsSize();this.isFullScreen=false}}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{startLanguage:"",tracksText:mejs.i18n.t("Captions/Subtitles"),hideCaptionsButtonWhenEmpty:true,toggleCaptionsButtonWhenOnlyOne:false,slidesSelector:""});f.extend(MediaElementPlayer.prototype,{hasChapters:false,buildtracks:function(a,b,c,e){if(a.tracks.length!=0){var d;if(this.domNode.textTracks)for(d=this.domNode.textTracks.length-1;d>=0;d--)this.domNode.textTracks[d].mode="hidden";a.chapters=f('<div class="mejs-chapters mejs-layer"></div>').prependTo(c).hide();a.captions=
f('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(c).hide();a.captionsText=a.captions.find(".mejs-captions-text");a.captionsButton=f('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="'+this.id+'" title="'+this.options.tracksText+'" aria-label="'+this.options.tracksText+'"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="'+
a.id+'_captions" id="'+a.id+'_captions_none" value="none" checked="checked" /><label for="'+a.id+'_captions_none">'+mejs.i18n.t("None")+"</label></li></ul></div></div>").appendTo(b);for(d=b=0;d<a.tracks.length;d++)a.tracks[d].kind=="subtitles"&&b++;this.options.toggleCaptionsButtonWhenOnlyOne&&b==1?a.captionsButton.on("click",function(){a.setTrack(a.selectedTrack==null?a.tracks[0].srclang:"none")}):a.captionsButton.hover(function(){f(this).find(".mejs-captions-selector").css("visibility","visible")},
function(){f(this).find(".mejs-captions-selector").css("visibility","hidden")}).on("click","input[type=radio]",function(){lang=this.value;a.setTrack(lang)});a.options.alwaysShowControls?a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover"):a.container.bind("controlsshown",function(){a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")}).bind("controlshidden",function(){e.paused||a.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")});
a.trackToLoad=-1;a.selectedTrack=null;a.isLoadingTrack=false;for(d=0;d<a.tracks.length;d++)a.tracks[d].kind=="subtitles"&&a.addTrackButton(a.tracks[d].srclang,a.tracks[d].label);a.loadNextTrack();e.addEventListener("timeupdate",function(){a.displayCaptions()},false);if(a.options.slidesSelector!=""){a.slidesContainer=f(a.options.slidesSelector);e.addEventListener("timeupdate",function(){a.displaySlides()},false)}e.addEventListener("loadedmetadata",function(){a.displayChapters()},false);a.container.hover(function(){if(a.hasChapters){a.chapters.css("visibility",
"visible");a.chapters.fadeIn(200).height(a.chapters.find(".mejs-chapter").outerHeight())}},function(){a.hasChapters&&!e.paused&&a.chapters.fadeOut(200,function(){f(this).css("visibility","hidden");f(this).css("display","block")})});a.node.getAttribute("autoplay")!==null&&a.chapters.css("visibility","hidden")}},setTrack:function(a){var b;if(a=="none"){this.selectedTrack=null;this.captionsButton.removeClass("mejs-captions-enabled")}else for(b=0;b<this.tracks.length;b++)if(this.tracks[b].srclang==a){this.selectedTrack==
null&&this.captionsButton.addClass("mejs-captions-enabled");this.selectedTrack=this.tracks[b];this.captions.attr("lang",this.selectedTrack.srclang);this.displayCaptions();break}},loadNextTrack:function(){this.trackToLoad++;if(this.trackToLoad<this.tracks.length){this.isLoadingTrack=true;this.loadTrack(this.trackToLoad)}else{this.isLoadingTrack=false;this.checkForTracks()}},loadTrack:function(a){var b=this,c=b.tracks[a];f.ajax({url:c.src,dataType:"text",success:function(e){c.entries=typeof e=="string"&&
/<tt\s+xml/ig.exec(e)?mejs.TrackFormatParser.dfxp.parse(e):mejs.TrackFormatParser.webvvt.parse(e);c.isLoaded=true;b.enableTrackButton(c.srclang,c.label);b.loadNextTrack();c.kind=="chapters"&&b.media.addEventListener("play",function(){b.media.duration>0&&b.displayChapters(c)},false);c.kind=="slides"&&b.setupSlides(c)},error:function(){b.loadNextTrack()}})},enableTrackButton:function(a,b){if(b==="")b=mejs.language.codes[a]||a;this.captionsButton.find("input[value="+a+"]").prop("disabled",false).siblings("label").html(b);
this.options.startLanguage==a&&f("#"+this.id+"_captions_"+a).click();this.adjustLanguageBox()},addTrackButton:function(a,b){if(b==="")b=mejs.language.codes[a]||a;this.captionsButton.find("ul").append(f('<li><input type="radio" name="'+this.id+'_captions" id="'+this.id+"_captions_"+a+'" value="'+a+'" disabled="disabled" /><label for="'+this.id+"_captions_"+a+'">'+b+" (loading)</label></li>"));this.adjustLanguageBox();this.container.find(".mejs-captions-translations option[value="+a+"]").remove()},
adjustLanguageBox:function(){this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true)+this.captionsButton.find(".mejs-captions-translations").outerHeight(true))},checkForTracks:function(){var a=false;if(this.options.hideCaptionsButtonWhenEmpty){for(i=0;i<this.tracks.length;i++)if(this.tracks[i].kind=="subtitles"){a=true;break}if(!a){this.captionsButton.hide();this.setControlsSize()}}},displayCaptions:function(){if(typeof this.tracks!=
"undefined"){var a,b=this.selectedTrack;if(b!=null&&b.isLoaded)for(a=0;a<b.entries.times.length;a++)if(this.media.currentTime>=b.entries.times[a].start&&this.media.currentTime<=b.entries.times[a].stop){this.captionsText.html(b.entries.text[a]);this.captions.show().height(0);return}this.captions.hide()}},setupSlides:function(a){this.slides=a;this.slides.entries.imgs=[this.slides.entries.text.length];this.showSlide(0)},showSlide:function(a){if(!(typeof this.tracks=="undefined"||typeof this.slidesContainer==
"undefined")){var b=this,c=b.slides.entries.text[a],e=b.slides.entries.imgs[a];if(typeof e=="undefined"||typeof e.fadeIn=="undefined")b.slides.entries.imgs[a]=e=f('<img src="'+c+'">').on("load",function(){e.appendTo(b.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()});else!e.is(":visible")&&!e.is(":animated")&&e.fadeIn().siblings(":visible").fadeOut()}},displaySlides:function(){if(typeof this.slides!="undefined"){var a=this.slides,b;for(b=0;b<a.entries.times.length;b++)if(this.media.currentTime>=
a.entries.times[b].start&&this.media.currentTime<=a.entries.times[b].stop){this.showSlide(b);break}}},displayChapters:function(){var a;for(a=0;a<this.tracks.length;a++)if(this.tracks[a].kind=="chapters"&&this.tracks[a].isLoaded){this.drawChapters(this.tracks[a]);this.hasChapters=true;break}},drawChapters:function(a){var b=this,c,e,d=e=0;b.chapters.empty();for(c=0;c<a.entries.times.length;c++){e=a.entries.times[c].stop-a.entries.times[c].start;e=Math.floor(e/b.media.duration*100);if(e+d>100||c==a.entries.times.length-
1&&e+d<100)e=100-d;b.chapters.append(f('<div class="mejs-chapter" rel="'+a.entries.times[c].start+'" style="left: '+d.toString()+"%;width: "+e.toString()+'%;"><div class="mejs-chapter-block'+(c==a.entries.times.length-1?" mejs-chapter-block-last":"")+'"><span class="ch-title">'+a.entries.text[c]+'</span><span class="ch-time">'+mejs.Utility.secondsToTimeCode(a.entries.times[c].start)+"&ndash;"+mejs.Utility.secondsToTimeCode(a.entries.times[c].stop)+"</span></div></div>"));d+=e}b.chapters.find("div.mejs-chapter").click(function(){b.media.setCurrentTime(parseFloat(f(this).attr("rel")));
b.media.paused&&b.media.play()});b.chapters.show()}});mejs.language={codes:{af:"Afrikaans",sq:"Albanian",ar:"Arabic",be:"Belarusian",bg:"Bulgarian",ca:"Catalan",zh:"Chinese","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",et:"Estonian",tl:"Filipino",fi:"Finnish",fr:"French",gl:"Galician",de:"German",el:"Greek",ht:"Haitian Creole",iw:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",
ko:"Korean",lv:"Latvian",lt:"Lithuanian",mk:"Macedonian",ms:"Malay",mt:"Maltese",no:"Norwegian",fa:"Persian",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sr:"Serbian",sk:"Slovak",sl:"Slovenian",es:"Spanish",sw:"Swahili",sv:"Swedish",tl:"Tagalog",th:"Thai",tr:"Turkish",uk:"Ukrainian",vi:"Vietnamese",cy:"Welsh",yi:"Yiddish"}};mejs.TrackFormatParser={webvvt:{pattern_identifier:/^([a-zA-z]+-)?[0-9]+$/,pattern_timecode:/^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
parse:function(a){var b=0;a=mejs.TrackFormatParser.split2(a,/\r?\n/);for(var c={text:[],times:[]},e,d;b<a.length;b++)if(this.pattern_identifier.exec(a[b])){b++;if((e=this.pattern_timecode.exec(a[b]))&&b<a.length){b++;d=a[b];for(b++;a[b]!==""&&b<a.length;){d=d+"\n"+a[b];b++}d=f.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,"<a href='$1' target='_blank'>$1</a>");c.text.push(d);c.times.push({start:mejs.Utility.convertSMPTEtoSeconds(e[1])==0?0.2:mejs.Utility.convertSMPTEtoSeconds(e[1]),
stop:mejs.Utility.convertSMPTEtoSeconds(e[3]),settings:e[5]})}}return c}},dfxp:{parse:function(a){a=f(a).filter("tt");var b=0;b=a.children("div").eq(0);var c=b.find("p");b=a.find("#"+b.attr("style"));var e,d;a={text:[],times:[]};if(b.length){d=b.removeAttr("id").get(0).attributes;if(d.length){e={};for(b=0;b<d.length;b++)e[d[b].name.split(":")[1]]=d[b].value}}for(b=0;b<c.length;b++){var g;d={start:null,stop:null,style:null};if(c.eq(b).attr("begin"))d.start=mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("begin"));
if(!d.start&&c.eq(b-1).attr("end"))d.start=mejs.Utility.convertSMPTEtoSeconds(c.eq(b-1).attr("end"));if(c.eq(b).attr("end"))d.stop=mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("end"));if(!d.stop&&c.eq(b+1).attr("begin"))d.stop=mejs.Utility.convertSMPTEtoSeconds(c.eq(b+1).attr("begin"));if(e){g="";for(var k in e)g+=k+":"+e[k]+";"}if(g)d.style=g;if(d.start==0)d.start=0.2;a.times.push(d);d=f.trim(c.eq(b).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
"<a href='$1' target='_blank'>$1</a>");a.text.push(d);if(a.times.start==0)a.times.start=2}return a}},split2:function(a,b){return a.split(b)}};if("x\n\ny".split(/\n/gi).length!=3)mejs.TrackFormatParser.split2=function(a,b){var c=[],e="",d;for(d=0;d<a.length;d++){e+=a.substring(d,d+1);if(b.test(e)){c.push(e.replace(b,""));e=""}}c.push(e);return c}})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{contextMenuItems:[{render:function(a){if(typeof a.enterFullScreen=="undefined")return null;return a.isFullScreen?mejs.i18n.t("Turn off Fullscreen"):mejs.i18n.t("Go Fullscreen")},click:function(a){a.isFullScreen?a.exitFullScreen():a.enterFullScreen()}},{render:function(a){return a.media.muted?mejs.i18n.t("Unmute"):mejs.i18n.t("Mute")},click:function(a){a.media.muted?a.setMuted(false):a.setMuted(true)}},{isSeparator:true},{render:function(){return mejs.i18n.t("Download Video")},
click:function(a){window.location.href=a.media.currentSrc}}]});f.extend(MediaElementPlayer.prototype,{buildcontextmenu:function(a){a.contextMenu=f('<div class="mejs-contextmenu"></div>').appendTo(f("body")).hide();a.container.bind("contextmenu",function(b){if(a.isContextMenuEnabled){b.preventDefault();a.renderContextMenu(b.clientX-1,b.clientY-1);return false}});a.container.bind("click",function(){a.contextMenu.hide()});a.contextMenu.bind("mouseleave",function(){a.startContextMenuTimer()})},cleancontextmenu:function(a){a.contextMenu.remove()},
isContextMenuEnabled:true,enableContextMenu:function(){this.isContextMenuEnabled=true},disableContextMenu:function(){this.isContextMenuEnabled=false},contextMenuTimeout:null,startContextMenuTimer:function(){var a=this;a.killContextMenuTimer();a.contextMenuTimer=setTimeout(function(){a.hideContextMenu();a.killContextMenuTimer()},750)},killContextMenuTimer:function(){var a=this.contextMenuTimer;if(a!=null){clearTimeout(a);delete a}},hideContextMenu:function(){this.contextMenu.hide()},renderContextMenu:function(a,
b){for(var c=this,e="",d=c.options.contextMenuItems,g=0,k=d.length;g<k;g++)if(d[g].isSeparator)e+='<div class="mejs-contextmenu-separator"></div>';else{var j=d[g].render(c);if(j!=null)e+='<div class="mejs-contextmenu-item" data-itemindex="'+g+'" id="element-'+Math.random()*1E6+'">'+j+"</div>"}c.contextMenu.empty().append(f(e)).css({top:b,left:a}).show();c.contextMenu.find(".mejs-contextmenu-item").each(function(){var m=f(this),q=parseInt(m.data("itemindex"),10),p=c.options.contextMenuItems[q];typeof p.show!=
"undefined"&&p.show(m,c);m.click(function(){typeof p.click!="undefined"&&p.click(c);c.contextMenu.hide()})});setTimeout(function(){c.killControlsTimer("rev3")},100)}})})(mejs.$);
(function(f){f.extend(mejs.MepDefaults,{postrollCloseText:mejs.i18n.t("Close")});f.extend(MediaElementPlayer.prototype,{buildpostroll:function(a,b,c){var e=this.container.find('link[rel="postroll"]').attr("href");if(typeof e!=="undefined"){a.postroll=f('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">'+this.options.postrollCloseText+'</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(c).hide();this.media.addEventListener("ended",
function(){f.ajax({dataType:"html",url:e,success:function(d){c.find(".mejs-postroll-layer-content").html(d)}});a.postroll.show()},false)}}})})(mejs.$);


//----------MEDIAELEMENT VIDEO EVENT TRACKING------------------//
function startVideoTracking() {
    var htmlRefreshIntervalId;
    $('video').each(function() {
        var htmlVideo = $(this)[0];
        htmlVideo.addEventListener("play", htmlVideoPlay, false);
        htmlVideo.addEventListener("pause", htmlVideoPause, false);
        htmlVideo.addEventListener("ended", htmlVideoEnd, false);
        if(!htmlVideo.title) {
            var htmlVideoSrc = $(this).find('source').attr('src');
            var n = htmlVideoSrc.lastIndexOf('/');
            htmlVideo.title = htmlVideoSrc.substring(n + 1);
        }
    });
}

function htmlTrackDuration(htmlVideo, htmlTitle) {
    var htmlVideoDuration, htmlOneQuarter, htmlHalf, htmlThreeQuarter;
    window.setInterval(function(t){
      if (htmlVideo.readyState > 0) {
        htmlVideoDuration = htmlVideo.duration,
        htmlOneQuarter = Math.floor(htmlVideoDuration/4),
        htmlHalf = Math.floor(htmlVideoDuration/2),
        htmlThreeQuarter = Math.floor(htmlOneQuarter*3);
        clearInterval(t);
      }
    },200);

    htmlRefreshIntervalId = setInterval(function(){
        var htmlVideoCurrentTime = Math.floor(htmlVideo.currentTime);
        switch (htmlVideoCurrentTime) {
            case htmlOneQuarter:
                ga('send', 'event', 'video', '25_percent', htmlTitle);
                break;
            case htmlHalf:
                ga('send', 'event', 'video', '50_percent', htmlTitle);
                break;
            case htmlThreeQuarter:
                ga('send', 'event', 'video', '75_percent', htmlTitle);
                break;
        }
    }, 1000);
}

function htmlVideoPlay() {
    var htmlVideoTitle = $(this)[0].title;
    ga('send', 'event', 'video', 'play', htmlVideoTitle);
    htmlTrackDuration($(this)[0], htmlVideoTitle);
}

function htmlVideoPause() {
    var htmlVideoTitle = $(this)[0].title;
    ga('send', 'event', 'video', 'pause', htmlVideoTitle);
    window.clearInterval(htmlRefreshIntervalId);
}

function htmlVideoEnd() {
    var htmlVideoTitle = $(this)[0].title;
    ga('send', 'event', 'video', 'complete', htmlVideoTitle);
    window.clearInterval(htmlRefreshIntervalId);
}
