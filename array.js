function array(array) {
	let low = 2;
	let high = 15;

	for(var i = 0; i < array.length; i++){
		if(array[i] < low || array[i] > high){
			array.splice(i,1);
		}
	}

	console.log('output no 6 = '+array);
	console.log('output no 7 = '+array.length)
}

array([1,4,7,9,12])