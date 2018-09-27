/* 
adding machine
*/
const math = require('mathjs');
const chalk = require('chalk');
var numberIsNan = require('number-is-nan');
var prompt = require ('prompt');

prompt.start();

console.log( 'Please input two numbers when prompted for A and B');

prompt.get(['A', 'B'], // prompts the user in the CLI to input something for an "A" and a "B"
	function AssignAB (err,result){ 			// this assigns the variables C and D to the response of the prompt above C(A) & D(B)
		var C = parseFloat(result.A);
		var D = parseFloat(result.B);

console.log("Please select one of the following math operations ( '+'  '-'  '/' '*' ) OR % to find the remainder ");

prompt.get(['Q'], function whatMathOperation (err,result) {  // this function takes the response form the CLI and uses it to Determine which math operation is preformed
 			if (result.Q == "+"){
 				Z = (C + D) 
 			} else if (result.Q == "-"){
 				Z = (C - D)
		 	} else if (result.Q == "/"){
		 		Z = (C / D)
		 	} else if (result.Q == "*"){
 				Z = (C * D)
 		 	} else if (result.Q == "%"){
 				Z = (C % D)
 		 	} else { 
 		 		Z = NaN 
 		 	}
//  //===========================================================================================================// 
// this if statment first checks if there were any non numbers input for A & B , and makes sure the user uses a one of the 4 approved math operations was selected

if (numberIsNan(Z)){
		console.log(chalk.red('error! INPUT NUMBERS FOR A AND B AND INPUT ( "+"  "-"  "/" "*" )  FOR MATH OPERATIONS '))

	  } else {
	  		console.log(chalk.green( " Beep boop the answer is -->   " + Z + '   <--                  =^.^= '))
	  }
// //============================================================================================================//

	})
});
