function minMaxArray(arr){

	let max = arr[0];
	let min = arr[0];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > max){
			max=arr[i];
		}

		if (arr[i] < min) {
			min=arr[i];
		}
	}
	console.log(`low = ${min}, high: ${max}`)
}

minMaxArray([4,2,6,88,3,11]);