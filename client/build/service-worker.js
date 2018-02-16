"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","f9243cb4096a9f9ce9764387e83db784"],["/static/js/main.f77cd630.js","9950852479bfb1fbee0a2cb62253cae9"],["/static/media/image1.49365005.png","49365005712df4ebf32695b216973960"],["/static/media/image1.db434b08.png","db434b08eefc6474790c97ac0b270d8e"],["/static/media/image10.2397294a.png","2397294a8d8545aabd250b462bbc21e2"],["/static/media/image2.629f7217.png","629f7217d192d19a2720cb1667aac084"],["/static/media/image2.84175b30.png","84175b301a4459b0d7918796320299c7"],["/static/media/image3.12077261.png","120772618b890377b2090a94b2dbec1b"],["/static/media/image3.beff40df.png","beff40df85ce3b57acb9600a9b37d578"],["/static/media/image4.84ef4d84.png","84ef4d841af9d43f40e4a9f81b8cb981"],["/static/media/image4.c8a519b0.png","c8a519b0214b0a8b96bb408069f892ef"],["/static/media/image5.617dc837.png","617dc837d2a80cc906f52ebcb5bb75c9"],["/static/media/image5.9edccaf7.png","9edccaf7ee33ea3d49514eabd206fe11"],["/static/media/image6.1129943c.png","1129943c6c346011a6a892e9d8c6db0d"],["/static/media/image6.c536f4b9.png","c536f4b9fb8e4c6ce6e51ffe65d56647"],["/static/media/image7.080b266b.png","080b266b22b22f390258eedef10d1d27"],["/static/media/image7.1b1da207.png","1b1da2079d36aea65d436a86d11fba96"],["/static/media/image8.75dcfbba.png","75dcfbba6c0073d2025ff03ace7700da"],["/static/media/image8.bcfb24d7.png","bcfb24d7824c813f029d0e9fa199c924"],["/static/media/la.46dd5b4d.jpg","46dd5b4d8456af8eedf44b02f1a3c76d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});