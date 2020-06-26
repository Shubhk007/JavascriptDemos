let currentResult = 0;
let numberArray=[];
function writeToLog(oldResult,newNumber,operator){
    const logger ={
        oldResult : oldResult,
        newNumber : newNumber,
        operator : operator
    }
   // console.log(logger);
    console.log(numberArray);
}
function getUserInput() {
  if (userInput.value != '') {
    return parseInt(userInput.value);
  }
  else{
      alert("Enter something in user-Input");
      return 0;
  }
}
function add() {
    const initialResult= currentResult;
  currentResult += getUserInput();
  writeResult(initialResult, userInput.value, "+");
  writeToLog(initialResult,userInput.value,'+');
  numberArray.push(getUserInput());
}
function multiply() {
    const initialResult= currentResult;
  currentResult *= getUserInput();
  writeResult(currentResult, userInput.value, "*");
  writeToLog(initialResult,userInput.value,'*');
  numberArray.push(getUserInput());
}
function division() {
    const initialResult= currentResult;
  currentResult /= getUserInput();
  writeResult(currentResult, userInput.value, "/");
  writeToLog(initialResult,userInput.value,'/');
  numberArray.push(getUserInput());
}
function substract() {
    const initialResult= currentResult;
  currentResult -= getUserInput();
  writeResult(currentResult, userInput.value, "-");
  writeToLog(initialResult,userInput.value,'-');
  numberArray.push(getUserInput());
}
function writeResult(oldResult, newNumber, operator) {
  const calculationEquation = `${oldResult} ${operator} ${userInput.value}`;
  outputResult(currentResult, calculationEquation);
}
addBtn.addEventListener("click", add);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", division);
subtractBtn.addEventListener("click", substract);
