function firstUnary(inputOne){

  return (inputTwo) => {

    if(inputOne===undefined || isNaN(inputOne)){
      return null;
    }
    if(inputTwo===undefined || isNaN(inputTwo)){
      return null;
    }
    return inputOne+inputTwo;
  };
}

module.exports=firstUnary;
