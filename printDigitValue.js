function printDigitValue(str){
	let number = 10;
	let result ='';
	let nol = '0';
	for(var i = 0; i < str.length ; i++){
		if(str[i] < number){
			result += str[i];
		}
	}

	console.log(result);

	for (var i = 0; i < result.length; i++){
			console.log(result[i]);
	}
	
}

printDigitValue('9.86-A5.321');