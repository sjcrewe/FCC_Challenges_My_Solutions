
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var arrLength = arr.length;
  var remainder = arrLength % size;

  var loops = (arrLength % size) == 0 ? Math.floor(arrLength/size) : Math.ceil(arrLength/size);

  for (var i = 0; i < loops; i++){
    newArr[i] = arr.slice(i*size, i*size + size);
  }

  return newArr;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
//chunkArrayInGroups(["a", "b", "c", "d"], 2);
