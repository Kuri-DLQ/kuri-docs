(()=>{"use strict";var e,r,t,o,n,a={},f={};function i(e){var r=f[e];if(void 0!==r)return r.exports;var t=f[e]={id:e,loaded:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}i.m=a,i.c=f,e=[],i.O=(r,t,o,n)=>{if(!t){var a=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],n=e[u][2];for(var f=!0,c=0;c<t.length;c++)(!1&n||a>=n)&&Object.keys(i.O).every((e=>i.O[e](t[c])))?t.splice(c--,1):(f=!1,n<a&&(a=n));if(f){e.splice(u--,1);var d=o();void 0!==d&&(r=d)}}return r}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[t,o,n]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);i.r(n);var a={};r=r||[null,t({}),t([]),t(t)];for(var f=2&o&&e;"object"==typeof f&&!~r.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,i.d(n,a),n},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>"assets/js/"+({10:"af0b156e",53:"935f2afb",54:"e2fb0f34",59:"d429f90c",85:"1f391b9e",413:"3d5ffbcc",414:"393be207",514:"1be78505",529:"30cc02bb",647:"b40329ff",671:"0e384e19",827:"6476eba6",918:"17896441",961:"d969d256"}[e]||e)+"."+{10:"41705494",53:"9d96c456",54:"21a3bf9b",59:"13c63af7",85:"c3aad17a",413:"b843ba7c",414:"66150ec9",514:"c02709f5",529:"e60768d8",647:"77b57467",666:"5ddc5876",671:"10057ac7",827:"17c79f0c",918:"38e78315",961:"eef7b767",972:"1d057827"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},n="kuri-docs:",i.l=(e,r,t,a)=>{if(o[e])o[e].push(r);else{var f,c;if(void 0!==t)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var b=d[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==n+t){f=b;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.setAttribute("data-webpack",n+t),f.src=e),o[e]=[r];var l=(r,t)=>{f.onerror=f.onload=null,clearTimeout(s);var n=o[e];if(delete o[e],f.parentNode&&f.parentNode.removeChild(f),n&&n.forEach((e=>e(t))),r)return r(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),c&&document.head.appendChild(f)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/kuri-docs/",i.gca=function(e){return e={17896441:"918",af0b156e:"10","935f2afb":"53",e2fb0f34:"54",d429f90c:"59","1f391b9e":"85","3d5ffbcc":"413","393be207":"414","1be78505":"514","30cc02bb":"529",b40329ff:"647","0e384e19":"671","6476eba6":"827",d969d256:"961"}[e]||e,i.p+i.u(e)},(()=>{var e={303:0,532:0};i.f.j=(r,t)=>{var o=i.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=i.p+i.u(r),f=new Error;i.l(a,(t=>{if(i.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,o[1](f)}}),"chunk-"+r,r)}},i.O.j=r=>0===e[r];var r=(r,t)=>{var o,n,a=t[0],f=t[1],c=t[2],d=0;if(a.some((r=>0!==e[r]))){for(o in f)i.o(f,o)&&(i.m[o]=f[o]);if(c)var u=c(i)}for(r&&r(t);d<a.length;d++)n=a[d],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(u)},t=self.webpackChunkkuri_docs=self.webpackChunkkuri_docs||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();