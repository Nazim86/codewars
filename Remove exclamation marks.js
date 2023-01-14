function removeExclamationMarks(s) {
  
for (var i=0; i<=s.length; i++){
  
  if (s[i] === "!"){
    s= s.replace(s[i],"");
    i--;
  }
  
}
return s;
}
