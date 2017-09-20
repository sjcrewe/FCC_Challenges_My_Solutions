
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length <= num) {
    return str;
  }
  else if (str.length > num){
  myStr = str.slice(0,num > 3 ? num - 3: num);
  return myStr + "...";
  }
}



console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
