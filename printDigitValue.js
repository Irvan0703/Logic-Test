function printDigitValue(str){
	let number = 10;
	let result ='';
	
	for(var i = 0; i < str.length ; i++){
		if(str[i] < number){
			result += str[i];
		}
	}

	console.log(result);
	let hasil = '';

	for (var i = 0; i < result.length; i++){
		hasil = result[i];
		for(var j = result.length-1; j > i; j--){
			hasil+='0'
		}
		console.log(hasil)
	}
	
}

printDigitValue('9.86-A5.321');