

function friend(friends){
  let arr =[];
 for (e of friends){
   if(e.length == 4){
     arr.push(e)
   }
 }
  return arr;
}

//friend([ryan,ahmad,Ali,Mike])
//friend([john,ahmad,Ali,Mikes])