traceur = global.traceur || {};require("traceur-runtime");
var sigma =(function() { 
  "use strict"; 
  Object.defineProperty(this, "sigmaNumber", { 
    get: function() { 
      return sigmaNumber; 
    }, 
    enumerable: true 
  }); 
  Object.defineProperty(this, "sigmaFunc", { 
    get: function() { 
      return sigmaFunc; 
    }, 
    enumerable: true 
  }); 
  Object.freeze(this); 
  var sigmaNumber = 4; 
  function sigmaFunc() { 
    return 'sigma function'; 
  } 
  return this; 
}).call(Object.create(null)); 
