// lib.js library functions

// running on Node.js?
var isNode = (typeof module === 'object' && module.exports);

(function(lib) {

  "use strict";

  // require Node URL API
  var url = (isNode ? require('url') : null);

  // parse URL
  lib.URLparse = function(str) {

    if (isNode) {
      return url.parse(str);
    } else {
      url = document.createElement('a');
      url.href = str;
      return url;
    }

  };

})(isNode ? module.exports : this.lib = {});
