function factorial(num) {
	let a = 1;
	for (var i = num; i > 0; i--) {		
		a*=i;
	}
	console.log(a);
}

factorial(4);
factorial(8);