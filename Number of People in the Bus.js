var number = function(busStops){
  // Good Luck!
  let getOn = 0;
  let getOff=0;
  for (var i=0; i<busStops.length; i++){
    getOn+=busStops[i][0];
    getOff+=busStops[i][1];
  }
 
  return getOn-getOff
}
