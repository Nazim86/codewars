function invert(array) {
  
  for (var i=0; i<=array.length; i++){
    
    if (Math.sign(array[i])===1 || Math.sign(array[i])===0 ){
      array[i]=-Math.abs(array[i]);
    }
    
    else if (Math.sign(array[i])===-1 || Math.sign(array[i])===-0){
      array[i]=Math.abs(array[i]);
    }
  }

   return array;
}
