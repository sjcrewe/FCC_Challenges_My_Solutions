function rot13(str) { // LBH QVQ VG!
  var codeArray = [];
  var charArray = [];
  
  codeArray = Array.from(str).map(function(x) {
  	console.log(x.charCodeAt(0));
    return(x ==/^[A-Z]/ ? x.charCodeAt(0): x.charCodeAt(0) > ('A'.charCodeAt(0) + 12) ? x.charCodeAt(0) - 13 : x.charCodeAt(0) + 13);
  });
  
  charArray = codeArray.map(function(y) {
    return String.fromCharCode(y);
    
  });
  
  return charArray.join(' ');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));

/*
function rot13(str) { // LBH QVQ VG!
  
  var codeArray = [];
  var charArray = [];
  
  codeArray = Array.from(str).map(function(z) {

    x = z.charCodeAt(0);
    return((x < 65 || x > 90) ? x : x > (65 + 12) ? x - 13 : x + 13);
  });
  
  charArray = codeArray.map(function(y) {
    return String.fromCharCode(y);
    
  });
  
  return charArray.join(' ');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
*/

