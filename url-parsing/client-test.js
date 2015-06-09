// Client-side JavaScript
// create dummy link
var url = document.createElement('a');
url.href = 'http://site.com:81/path/page?a=1&b=2#hash';

console.log(url.hostname); // site.com
