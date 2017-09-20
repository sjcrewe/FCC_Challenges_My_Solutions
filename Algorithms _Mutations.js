function mutation(arr) {

  var findThese = arr[1].toLowerCase().split('');

  for (var i = 0; i < findThese.length; i++) {
    if (arr[0].toLowerCase().indexOf(findThese[i], 0) == -1) {
      return false;
    }

  }
  return true;

}

console.log( mutation(["hello", "hey"]) );
