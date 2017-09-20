function destroyer(arr,a,b) {
  // Remove all the values
  var filterOut = Array.from(arguments).slice(1);

console.log(arr, a, b);
  
  return arr.filter(function(val){
  	return !filterOut.includes(val);

  });
		
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

