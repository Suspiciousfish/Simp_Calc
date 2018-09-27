/* 
adding machine
*/
const math = require('mathjs')
const chalk = require('chalk');
var numberIsNan = require('number-is-nan');
var prompt = require ('prompt');

prompt.start();

Number(prompt.get(['A', 'B', 'OP'], function JQA(err,result){
	var A;
	var B;
	var Q
		console.log("A is " + result.A);
 		console.log("B is " + result.B);
 		console.log("Operation is " + result.OP)	
			var C = parseFloat(result.A);
			var D = parseFloat(result.B);
				console.log(C+D);
				//console.log(result)
var Z = (C+D)

//===========================================================================================================//

if (numberIsNan(Z)){
		console.log(chalk.red('error! INPUT NUMBERS'))

	  } else {
	  		console.log(chalk.green('thank you for not putting in letters or special characters =^.^= '))
	  }

}));

