function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr = [];

  return arr.filter(function(val){
  	return Boolean(val);
  });
}

console.log(bouncer([7, "ate", "", false, 9]));
