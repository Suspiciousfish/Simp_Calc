/* 
Logic replicator
*/

var prompt = require ('prompt');

prompt.start();

Number(prompt.get(['A', 'B', "operator"], function JQA(err,result){
	var A;
	var B;
	var z;
		console.log("A is " + result.A);
 		console.log("B is " + result.B);	
			var C = result.A;
			var D = result.B;




		console.log("your operation is " + result.operator);

	// function OP(C,D){
	// 		if (result.operator = "+"){
	// 			return (C + D);
	// 			}
			// else(result.operator = "-"){
			// 	return (C - D);
			// 	}
			// else(result.operator = "*"){
			// 	return (C * D);
			// 	}
			// else(result.operator = "/"){
			// 	return (C / D);
			// 	}
	// 		console.log(" your Result is " , Op() );
	// 		}

}))

// need }))

