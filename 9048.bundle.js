"use strict";(self.webpackChunkanpan_webpage=self.webpackChunkanpan_webpage||[]).push([[9048],{2760:e=>{function a(e){!function(e){function a(e){return RegExp("(^(?:"+e+"):[ \t]*(?![ \t]))[^]+","i")}e.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:e.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:a(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:e.languages.csp},{pattern:a(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:e.languages.hpkp},{pattern:a(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:e.languages.hsts},{pattern:a(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var t,n=e.languages,s={"application/javascript":n.javascript,"application/json":n.json||n.javascript,"application/xml":n.xml,"text/xml":n.xml,"text/html":n.html,"text/css":n.css,"text/plain":n.plain},i={"application/json":!0,"application/xml":!0};function r(e){var a=e.replace(/^[a-z]+\//,"");return"(?:"+e+"|\\w+/(?:[\\w.-]+\\+)+"+a+"(?![+\\w.-]))"}for(var p in s)if(s[p]){t=t||{};var o=i[p]?r(p):p;t[p.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+o+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:s[p]}}t&&e.languages.insertBefore("http","header",t)}(e)}e.exports=a,a.displayName="http",a.aliases=[]}}]);