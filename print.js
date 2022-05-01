function print(num){
	for(var i = 1; i <= num; i++){
		if(i%3 === 0){
			console.log('Edu');
		} else if(i%5 === 0){
			console.log('Work');
		} else if ((i%3 === 0) && (i%5 === 0)){
			console.log('EduWork')
		} else {
			console.log(i);
		}
	}
}

print(15);