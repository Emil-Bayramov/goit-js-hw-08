!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.constructor===Symbol?"symbol":typeof e}var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var r,i,a,f,u,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function O(e){return c=e,u=setTimeout(j,t),d?b(e):f}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function j(){var e=p();if(h(e))return w(e);u=setTimeout(j,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function w(e){return u=void 0,v&&r?b(e):(r=i=void 0,f)}function N(){var e=p(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return O(l);if(s)return u=setTimeout(j,t),b(l)}return void 0===u&&(u=setTimeout(j,t)),f}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),N.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},N.flush=function(){return void 0===u?f:w(p())},N}function y(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":r(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=f.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var O,h,j=document.querySelector("form"),w=document.querySelector("input"),N=document.querySelector("textarea"),T={};O=localStorage.getItem("feedback-form-state"),(h=JSON.parse(O))&&(w.value=h[w.name]||"",N.value=h[N.name]||""),j.addEventListener("input",e(t)((function(e){var t=JSON.parse(localStorage.getItem("feedback-form-state"));if(t)return t[e.target.name]=e.target.value,void localStorage.setItem("feedback-form-state",JSON.stringify(t));T[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))}),444)),j.addEventListener("submit",(function(e){if(e.preventDefault(),""===w.value||""===N.value)return alert("Please, fill in all the fields!");var t=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(t),localStorage.removeItem("feedback-form-state"),j.reset(),T={}}))}();
//# sourceMappingURL=03-feedback.4c72ae43.js.map