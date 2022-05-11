function generateNumber(num) {
	if(num > 100){
		console.log('silahkan masukkan bilangan 1-100');
	}

	var huruf=["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"];
	if(num < 12){
		console.log(huruf[num]);
	} 
	if(num > 11 && num < 20){
		console.log(huruf[num % 10] + ' belas')
	} 
	if(num > 19 && num < 100){
		console.log(huruf[parseInt(num/10)]+ ' puluh ' + huruf[num % 10] )
	} 
	if(num === 100) {
		console.log('seratus')
	}
}

generateNumber(4);
generateNumber(20);
generateNumber(39);
generateNumber(104);