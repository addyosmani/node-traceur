traceur = global.traceur || {};require("traceur-runtime");
var theta =(function() { 
  "use strict"; 
  Object.defineProperty(this, "thetaOne", { 
    get: function() { 
      return thetaOne; 
    }, 
    enumerable: true 
  }); 
  Object.defineProperty(this, "thetaTwo", { 
    get: function() { 
      return thetaTwo; 
    }, 
    enumerable: true 
  }); 
  Object.freeze(this); 
  var thetaOne = 'thetaOne'; 
  var thetaTwo = 'thetaTwo'; 
  return this; 
}).call(Object.create(null)); 
