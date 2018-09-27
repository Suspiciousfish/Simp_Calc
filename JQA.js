/* 
adding machine
*/
const math = require('mathjs');
const chalk = require('chalk');
var numberIsNan = require('number-is-nan');
var prompt = require ('prompt');




prompt.start();

prompt.get(['A', 'B'],

function JQA (err,result){
	
	//	console.log("A is " + result.A);
 	//	console.log("B is " + result.B);
			 var C = parseFloat(result.A);
			 var D = parseFloat(result.B);
				//console.log(C+D);
			// 	//console.log(result)
			 //	Z = (C+D)


prompt.get(['Q'], function whatMathOperation (err,result) {
		console.log(" the math operation is ( '+'  '-'  '/' '*' ) " + result.Q);
 	if (result.Q == "+"){
 		Z = (C + D)
 	} else if (result.Q == "-"){
 		Z = (C - D)
 	} else if (result.Q == "/"){
 		Z = (C / D)
 	} else if (result.Q == "*"){
 		Z = (C * D)
 	 }

//  //===========================================================================================================//

if (numberIsNan(Z)){
		console.log(chalk.red('error! INPUT NUMBERS FOR A AND B AND INPUT ( "+"  "-"  "/" "*" )  FOR MATH OPERATIONS '))

	  } else {
	  		console.log(chalk.green( " Beep boop the answer is -->   " + Z + ' <--                  =^.^= '))
	  }
// //============================================================================================================//

	})
});
