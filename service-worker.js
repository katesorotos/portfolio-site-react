"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/katesorotos/index.html","4d2e0101b5bdf0817031c6682bf15271"],["/katesorotos/static/css/main.36ddff5a.css","26336f354dc48c3ca3d4a2ba6b2be683"],["/katesorotos/static/js/main.4ab28563.js","6e33a66a6a03d6bc77a5b63728a44f40"],["/katesorotos/static/media/data_plan_website.5684867d.jpg","5684867d788fabf2af603697a3d71f35"],["/katesorotos/static/media/data_plan_website_1.5df60129.jpg","5df601292453c89dc467cdd98f2a55ff"],["/katesorotos/static/media/data_plan_website_2.de2c456d.jpg","de2c456d5bd476da1794599b9cb9c940"],["/katesorotos/static/media/favicon.0c304380.png","0c304380343314e77e2233a5cb74b140"],["/katesorotos/static/media/kate.28010666.png","28010666f98f8be7be56c0303b4a09ef"],["/katesorotos/static/media/rock_paper_scissors.dacddb66.jpg","dacddb664c6304a4bb1dda039a64f983"],["/katesorotos/static/media/women_in_tech_1.40dfcfa6.jpg","40dfcfa6a80b5d3122a6ce1ff0c0c608"],["/katesorotos/static/media/women_in_tech_2.e466cd42.jpg","e466cd4283ae1a385fc20bbb75dcf65b"],["/katesorotos/static/media/women_in_tech_3.f62fe23d.jpg","f62fe23d5e988f827b7660f39ceb2326"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/katesorotos/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});