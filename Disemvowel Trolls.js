function disemvowel(str) {
  let vowels = "aeiouAEIOU";
  let word;
  
  for (var i=0; i<=str.length; i++){
//     console.log(str[i]);
    if (vowels.includes(str[i])){
      str = str.replace(str[i],"");
      i--;
    }
  }

  return str;
}
