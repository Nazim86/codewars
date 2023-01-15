function consonantCount(str) {
  // ...
  let count=0
  let consonant = 'BCDFGJKLMNPQSTVXZHRWY';
  str = str.toUpperCase();
  

  
  for (var i=0; i<=str.length; i++){
     
    
    if (consonant.includes(str[i])){
     count++;
    }
  }

  return count;
  
}
