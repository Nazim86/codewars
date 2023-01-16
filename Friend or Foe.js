function friend(friends){
  //your code here
  
  let friend_list = [];
  
  
for (var i=0; i<friends.length; i++){
  
    if (friends[i].length===4){
    friend_list.push(friends[i]);
  
  }  
  }
  return friend_list;
}
