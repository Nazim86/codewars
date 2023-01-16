
function left$( str, i ) {
  // type here..
  
  if (str===0){
    return 0;
  }
  
  else if(str.length===0){
    return 1;
  }
  else
    
  return str.slice(0,i);
}

function right$( str, i ){
  //.. and there !
  
    if (str===0){
    return 0;
  }
  
  else if(str.length===0){
    return 1;
  }
  else
  
  return str.slice(-i);
}
