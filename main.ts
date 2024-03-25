#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  
  {  message: "enter first number ", type: "number", name: "firstNumber" },
  { message: "endter second number ", type: "number", name: "secondNumber" },
  {
    message: "select any operator to perform opertaion ",
    type: "list",
    name: "operator",
    choices: ["addition", "substraction", "multiplication", "division"],
  },
]);

// conditional statements
if ( answer.operator === "addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "substraction"){
    console.log(answer.firstNumber-answer.secondNumber);
}
else if (answer.operator === "multiplication"){
    console.log(answer.firstNumber*answer.secondNumber);

}
else if (answer.operator === "division"){
    console.log(answer.firstNumber  / answer.secondNumber);

}
else {
    console.log("you use wrong operator");
}
console.log ('The end ');
