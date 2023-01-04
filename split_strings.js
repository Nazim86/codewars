function solution(str){
  let new_array = [];


   if ((str.length %2) !=0){
     str = str + '_';
   }

  else if (str.length ===0){
    return new_array;
  }

  for (let i=0; i<=(str.length-1); i+=2) {

    new_array.push (str.slice(i,i+2));


  }

 return new_array;


}
