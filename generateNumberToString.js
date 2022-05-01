function generateNumber(num) {
	if(num > 100){
		console.log('Silahkan memasukkan angka 1-100');
	}

	var arr = String(num).split('');
	console.log(arr);

	let result;
	switch(num){
		case 1:
			result = 'Satu';
			break;
		case 2:
			result = 'Dua';
			break;
		case 3:
			result = 'Tiga';
			break;
		case 4:
			result = 'Empat';
			break;
		case 5:
			result = 'Lima';
			break;
		case 6:
			result = 'Enam';
			break;
		case 7:
			result = 'Tujuh';
			break;
		case 8:
			result = 'Delapan';
			break;
		case 9:
			result = 'Sembilan';
	}
	console.log(result);
}

generateNumber(4);
generateNumber(20);