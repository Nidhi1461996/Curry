function binary(inputOne, inputTwo){

  if (inputOne===undefined || inputTwo===undefined){
    return undefined;
  }

  if(isNaN(inputOne) || isNaN(inputTwo)) {
    return null;
  }

  return inputOne+inputTwo;
}



module.exports=binary;
