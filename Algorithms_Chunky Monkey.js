
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
//result = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);

result = chunkArrayInGroups(["a", "b", "c", "d"], 2);

console.log(result);
//chunkArrayInGroups(["a", "b", "c", "d"], 2);


D1 #100DaysOfCode Git command line basics, Installed Node.js, configured Sublime build system, Python modules, telnetlib, socket & pyvisa