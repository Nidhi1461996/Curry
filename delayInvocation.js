function firstUnary(inputOne){
  return (inputTwo) => {
    return inputOne+inputTwo;
  };
}

module.exports=firstUnary;
