/*! npm.im/scroll-restoration-polyfill */
!function(){"use strict";/*! npm.im/one-event */
function e(e,n,t,o){e.addEventListener(n,t,o),e.addEventListener(n,function r(){e.removeEventListener(n,t,o),e.removeEventListener(n,r,o)},o)}function n(){return window.pageYOffset||document.body.scrollTop}function t(){return window.pageXOffset||document.body.scrollLeft}function o(){e(window,"scroll",scrollTo.bind(window,t(),n()))}e.promise=function(n,t,o){return new Promise(function(r){return e(n,t,r,o)})};var r="auto";"scrollRestoration"in history||Object.defineProperty(history,"scrollRestoration",{enumerable:!0,get:function(){return r},set:function(e){e!==r&&("auto"===e?(window.removeEventListener("popstate",o),r=e):"manual"===e&&(window.addEventListener("popstate",o),r=e))}})}();