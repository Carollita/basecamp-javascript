function replaceEvenNumbers(numbers){
	if (!numbers) return 'Não existe um array.';
	if (!numbers.length) return 'Isto é um array vazio.';
	for (let i = 0; numbers.length > i; i++){
	  if(numbers[i] === 0){
		console.log('Isto já é um zero!')
	  }
	  else if(numbers[i] % 2 === 0){
		console.log(`Substituindo ${numbers[i]} por 0...`)
		numbers[i] = 0;
	  }
	}
	return numbers;
  }
  
  console.log(replaceEvenNumbers([0, 1, 3, 4, 6, 80, 33, 23, 90]));
