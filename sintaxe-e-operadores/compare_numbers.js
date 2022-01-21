function compareNumbers (num1, num2){
	if(!num1 || !num2 || num1 || num2 === '') return 'Defina dois números, por favor.';
	
	const FIRST_PHRASE = createFirstPhrase(num1, num2);
	const SECOND_PHRASE = createSecondtPhrase(num1, num2);
	
	return `${FIRST_PHRASE} ${SECOND_PHRASE}`;
  }
  
  function createFirstPhrase(num1, num2){
	let equal = '';
	if (num1 !== num2){
	  equal = 'não';
	}
	return `Os números ${num1} e ${num2} ${equal}são iguais.`;
  }
  
  function createSecondtPhrase(num1, num2){
	  let RESULT_10 = 'menor';
	  let RESULT_20 = 'menor';
	
	  const SUM = (num1 + num2);
	  const COMPARE_10 = SUM > 10;
	  const COMPARE_20 = SUM > 20;
	
	  if (COMPARE_10){
		RESULT_10 = 'maior';
	  }
	
	  if (COMPARE_20){
		RESULT_20 = 'maior';
	  }
	  return `Sua soma é ${SUM}, que é ${RESULT_10} que 10 e ${RESULT_20} que 20`;
  }
  
  console.log(compareNumbers(10, 'a'));
  
  
