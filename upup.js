!function(t){"use strict";var e=this,r=navigator.serviceWorker;if(!r)return e.UpUp=null,t;var n={"service-worker-url":"upup.sw.js"},s=!1,o="font-weight: bold; color: #00f;";e.UpUp={start:function(t){this.addSettings(t),r.register(n["service-worker-url"],{scope:"./"}).then(function(t){s&&console.log("ServiceWorker registration successful with scope: %c"+t.scope,o);var e=t.installing||r.controller;e.postMessage({action:"set-settings",settings:n})}).catch(function(t){s&&console.log("ServiceWorker registration failed: %c"+t,o)})},addSettings:function(e){e=e||{},"string"==typeof e&&(e={content:e}),["content","content-url","assets","service-worker-url"].forEach(function(r){e[r]!==t&&(n[r]=e[r])})},debug:function(t){s=arguments.length>0?!!t:!0}}}.call(this);