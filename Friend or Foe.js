unction friend(friends){
  //your code here
  
for (var i=0; i<friends.length; i++){
  if(parseInt(friends[i])){
    friends.splice(i,i);
    i--;
  }
  else if (friends[i].length>4){
    friends.splice(i,i);
    i--;
  }
  }
  return friends;
}

