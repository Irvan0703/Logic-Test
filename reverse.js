function reverse(str){
	let result ='';
	for(var i = str.length-1; i > -1; i--){
		result += str[i];
	}
	console.log(result);
}

reverse('abcde');