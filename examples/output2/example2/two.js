traceur = global.traceur || {};require("traceur-runtime");
var two =(function() { 
  "use strict"; 
  Object.defineProperty(this, "name", { 
    get: function() { 
      return name; 
    }, 
    enumerable: true 
  }); 
  Object.defineProperty(this, "func", { 
    get: function() { 
      return func; 
    }, 
    enumerable: true 
  }); 
  Object.freeze(this); 
  var name = 'two'; 
  function func() { 
    return 'two function'; 
  } 
  return this; 
}).call(Object.create(null)); 
