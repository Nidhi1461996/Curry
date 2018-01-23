var total = 0;
function longDelay(a) {
  if (a === undefined) {
    var result = total;
    total=null;
    return result;
  } else {
    total = total + a;
    return longDelay;
  }
}

module.exports=longDelay;
