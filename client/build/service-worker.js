"use strict";var precacheConfig=[["/index.html","d86cfa54ac8638c4c600248a270a72c7"],["/static/css/main.3bcf2068.css","6d65ad9158eb5e442eedb083eafa9245"],["/static/js/main.4fade8b9.js","f43edab2a54861170054174cf0f8d0ed"],["/static/media/27484484_10210656234910058_887463295_o.4c7dec19.jpg","4c7dec19e2d54c280c56b83dc5c2976a"],["/static/media/Bag_of_Coins.92fd7e37.png","92fd7e3786e7a83916988d4668781591"],["/static/media/animal1.b154bbd3.svg","b154bbd3bb73658d26f5250f963134e4"],["/static/media/animal10.3246a7e9.svg","3246a7e91baa3242f0c298b977977469"],["/static/media/animal2.e5270604.svg","e5270604af41efc489e335053de89b15"],["/static/media/animal3.4ef601f0.svg","4ef601f0fafb88dca0571460f5f344b6"],["/static/media/animal4.92a7a48f.svg","92a7a48f946b2e0a077beefa24275969"],["/static/media/animal5.75886a13.svg","75886a1324216d9a77195c3301c1967e"],["/static/media/animal6.c92e2b61.svg","c92e2b61c5e8e2ab94b6b72696af1f9f"],["/static/media/animal7.0fafe111.svg","0fafe111027df4c324d5e1dbf1c91305"],["/static/media/animal8.d6fed6c8.svg","d6fed6c8393431bbcb2c713be01323a3"],["/static/media/animal9.a314631b.svg","a314631bff012b25f3dd270b41e5adf7"],["/static/media/boy-1.30811cc5.svg","30811cc5ebd1f0ca4b0e43231ce85272"],["/static/media/boy-10.e466e247.svg","e466e247106c1c798c9fc64231cfe175"],["/static/media/boy-11.e7d352b0.svg","e7d352b0e274f6e0f1efb9588f4cb473"],["/static/media/boy-12.e6c6f95b.svg","e6c6f95bdd65ce00c2f06b8f3fe11529"],["/static/media/boy-13.de94bbff.svg","de94bbff05ca75148e157af18ac52fc8"],["/static/media/boy-14.63d9b009.svg","63d9b00918af34c983deb5d949bcebd3"],["/static/media/boy-15.652a5797.svg","652a57976cc0e627cb4486568389c94b"],["/static/media/boy-16.76be5ab1.svg","76be5ab1a921e4606dd2268a6939814b"],["/static/media/boy-17.df5b6f63.svg","df5b6f63989116a9961b1f6ec6d53b70"],["/static/media/boy-18.f193fc2d.svg","f193fc2df56a8ce653042448b346a95d"],["/static/media/boy-19.b0fa05d0.svg","b0fa05d0e92007cc4fc64721aad9fbb6"],["/static/media/boy-2.11e4ed8a.svg","11e4ed8a9b17c3497610d5ec2c998f99"],["/static/media/boy-20.06463b1a.svg","06463b1a5a79f90594bdc1506602e726"],["/static/media/boy-21.184925d8.svg","184925d808298ef6bac7c700a9aef1fa"],["/static/media/boy-22.ac3eb4f7.svg","ac3eb4f77036f0189480e9f413ce1734"],["/static/media/boy-3.0ebe6369.svg","0ebe63698dfe0ab6ae2f93f82fe32a85"],["/static/media/boy-4.eb9dcc6a.svg","eb9dcc6ac978662fadfb1adaf21d7a4a"],["/static/media/boy-5.2b26976b.svg","2b26976be95bc8c845a8b52844d09b7d"],["/static/media/boy-6.3844105d.svg","3844105d3133de10cdbb0ea17096529f"],["/static/media/boy-7.ff92c030.svg","ff92c03071ecf391beda8e7d6e468062"],["/static/media/boy-8.d8dcf0ef.svg","d8dcf0eff22721a357862d63f4878c96"],["/static/media/boy-9.7a86b6b2.svg","7a86b6b27df57bc669fdbbdc11a37486"],["/static/media/boy.669e01f3.svg","669e01f3cb56c2c76480b93cd9b1567f"],["/static/media/challenge.11c8828c.png","11c8828c6908e364ab40deb977d5a5ce"],["/static/media/challenge.4270ef3a.svg","4270ef3a065779c0aee46faa733505b6"],["/static/media/coin.45524edd.png","45524eddf035dfdd779d69e3969683f9"],["/static/media/coins.a45dd919.svg","a45dd9193dd0aca8924cdef01138562e"],["/static/media/correct.facd6e84.mp3","facd6e8493eb4a3defc44a177437f13f"],["/static/media/cupcake.95be403e.svg","95be403e70d421316e80d6857d8f8767"],["/static/media/default.811da221.svg","811da2211c6920797f73e9abd5abea4b"],["/static/media/dolores.6e5e925d.jpg","6e5e925d9f505691aecaabaa62b9bcca"],["/static/media/game-controller.d3571bc1.svg","d3571bc10f89ff982697dff0f76a758e"],["/static/media/game1.8d1adacb.svg","8d1adacbc173dfb8712f052917b1b7d9"],["/static/media/game10.87182392.svg","871823925f27466a36432ee7af27b425"],["/static/media/game2.b6a29bf6.svg","b6a29bf65bb29e4c1cb21502f33f13ac"],["/static/media/game3.e3cc6717.svg","e3cc671731b9bb2c5f72d8238a63d198"],["/static/media/game4.6df4627a.svg","6df4627aa86a6136a293126875b39a08"],["/static/media/game5.110b5611.svg","110b56114cd2b6edb8be00d98789eccf"],["/static/media/game6.1ec73ff8.svg","1ec73ff80fdd3626c813c108da48f47f"],["/static/media/game7.db2ede16.svg","db2ede16d3763f0d72a74b69385233ef"],["/static/media/game8.718f3a56.svg","718f3a56d9e719ead25b2bf74165723f"],["/static/media/game9.88e96a01.svg","88e96a01b47f0b68dc300b4800ca1a00"],["/static/media/garfield.b336d9ca.png","b336d9ca48b52bedc8b5e7d3bf602edc"],["/static/media/girl-1.baad9c46.svg","baad9c46fc44953bd0ab50f80ab112d6"],["/static/media/girl-10.ceb1bf20.svg","ceb1bf2052e19896cf4af3fe38ba9e7f"],["/static/media/girl-11.fdcf47c3.svg","fdcf47c39f6afa03f2f48257d11ffc05"],["/static/media/girl-12.0296fe2b.svg","0296fe2b4426002a6158fdf2f9c47b49"],["/static/media/girl-13.579e2fd4.svg","579e2fd4a58b9645bc8c4c683b35d558"],["/static/media/girl-14.f20007d6.svg","f20007d6aa0666d5f57cdfc2e36aa754"],["/static/media/girl-15.9088818f.svg","9088818f02c246b4df81903a3edbff5e"],["/static/media/girl-16.963589e4.svg","963589e479beb27f86ecaba7fbed3158"],["/static/media/girl-17.40d09889.svg","40d09889a358b4c2ca5963eb75456268"],["/static/media/girl-18.0e7aa85c.svg","0e7aa85ca189bced850eea2bfba47be4"],["/static/media/girl-19.bd0acffb.svg","bd0acffb0bd4ac3d6970155fbc7af4ce"],["/static/media/girl-2.30b5ea95.svg","30b5ea953bed5f7ee513e92d6918c15f"],["/static/media/girl-20.ec4da825.svg","ec4da825ad794c0b56c5338b49ace58b"],["/static/media/girl-21.e528d984.svg","e528d98484a81dd5989590707086862a"],["/static/media/girl-22.6d240e9c.svg","6d240e9c67441a2c52397a69016b8f08"],["/static/media/girl-23.d4673022.svg","d4673022cf6885d2db7ce57b889927f9"],["/static/media/girl-24.1fb26edf.svg","1fb26edf1d0313f17cd5f138b996a34a"],["/static/media/girl-25.20e46af9.svg","20e46af9142753098b7a3644d827eec0"],["/static/media/girl-26.2e992b11.svg","2e992b1119849606a71c717a4019760b"],["/static/media/girl-3.070b1238.svg","070b12382e59927ea5028c5ab91b42f6"],["/static/media/girl-4.47c887fa.svg","47c887fa4651ec4bb57e58d38f05f1f3"],["/static/media/girl-5.d488516b.svg","d488516b3ef65cf7c5d1d1f68ce7fbed"],["/static/media/girl-6.27132fae.svg","27132fae339571fb8e3ca499ed00c0e8"],["/static/media/girl-7.9eef213f.svg","9eef213f5198f7a3ad1153648063599f"],["/static/media/girl-8.c4ee2bb4.svg","c4ee2bb40a61274e53d6f9a2b23d6953"],["/static/media/girl-9.d16953aa.svg","d16953aa8dc10c990c7146b568a62407"],["/static/media/girl.e34d19f3.svg","e34d19f3dc96aeea0a3bb8bcd15c6b1e"],["/static/media/harrypotter.4ba9e144.jpg","4ba9e144ba2bf79ad7a524be4b2d5136"],["/static/media/hermione.69699270.jpg","6969927016da50ade334406c84e601ec"],["/static/media/horizontalprojectile.2da1fa6a.jpg","2da1fa6a558629e27a821ca214caf9a4"],["/static/media/mickey.2e3e715f.jpeg","2e3e715f54f9e2117e0d1757d25543cf"],["/static/media/pride1.1d8fff5b.svg","1d8fff5bf7376d39a0cc3f9ead4932a6"],["/static/media/pride10.bab53a5e.svg","bab53a5e1a2b2e08a9dfdca93e17a343"],["/static/media/pride2.ccd132eb.svg","ccd132eb254a769a9d44a359b2895158"],["/static/media/pride3.e9afa720.svg","e9afa7206a80b4f313bf5688805a12a4"],["/static/media/pride4.aca27395.svg","aca2739530b76d8f60e377030deb107c"],["/static/media/pride5.1d8a1c93.svg","1d8a1c93ea7c28402b65a8269d523f28"],["/static/media/pride6.eb3be49f.svg","eb3be49f87ac772e1b72ca4e89a90b62"],["/static/media/pride7.6cd8500b.svg","6cd8500b9c97572872386a3df16fb932"],["/static/media/pride8.5785bed7.svg","5785bed70ea8cb4389393f8987b280af"],["/static/media/pride9.ad7c2dee.svg","ad7c2dee12fa9a463988e7dc07a37086"],["/static/media/rainbowflag.ed702ab8.svg","ed702ab80911d60a9b223aea12e1efce"],["/static/media/raja.9e5b203a.jpg","9e5b203a56bffa22ea762780b1b131a8"],["/static/media/ron.bd53ed6d.jpg","bd53ed6d97f9361bd0d2f9912ac811cf"],["/static/media/snape.7296459e.jpg","7296459ee2013e9b334524af3f40997f"],["/static/media/woman.ccd33987.svg","ccd339874fed7b455e1bb7b8526e67d3"],["/static/media/wrong.77574997.mp3","77574997de70211f8cfecd3989b935e9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,d){var t=new URL(e);return d&&t.pathname.match(d)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],d=new URL(a,self.location),t=createCacheKey(d,hashParamName,c,/\.\w{8}\./);return[d.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var d=new Request(c,{credentials:"same-origin"});return fetch(d).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),d="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,d),a=urlsToCacheKeys.has(c));var t="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL(t,self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});