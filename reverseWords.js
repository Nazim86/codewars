function reverseWords(str){
  
  
  str = str.split(" ");
  
  let reversed= str[str.length-1];
  
  for (var i=str.length-2; i>=0; i--){
    reversed = reversed +" "+str[i];
    
  }
 
  return reversed; // reverse those words
}
