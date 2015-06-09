// Client-side JavaScript
// find the first link in the DOM
var url = document.getElementsByTagName('a')[0];

console.log(
  url.href + '\n' + // the full URL
  url.protocol + '\n' + // http:
  url.hostname + '\n' + // site.com
  url.port + '\n' + // 81
  url.pathname + '\n' + // /path/page
  url.search + '\n' + // ?a=1&b=2
  url.hash // #hash
);
