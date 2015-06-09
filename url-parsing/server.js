// Server-side JavaScript
var urlapi = require('url'),
  url = urlapi.parse('http://site.com:81/path/page?a=1&b=2#hash');

console.log(
  url.href + '\n' + // the full URL
  url.protocol + '\n' + // http:
  url.hostname + '\n' + // site.com
  url.port + '\n' + // 81
  url.pathname + '\n' + // /path/page
  url.search + '\n' + // ?a=1&b=2
  url.hash // #hash
);
