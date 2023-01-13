function addLength(str) {
//start-here
  str = str.split(" ");
  
  for (var i = 0; i<str.length; i++){
  
    str[i] += " "+ str[i].length;

  }
 
  return str;
}
