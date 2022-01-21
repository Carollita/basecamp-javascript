//Solution 1
function reverseString(text) {
	if (!text) return 'String inexistente';
	return text.split('').reverse().join('') === text;
	/*
	var splitString = text.split(""); // ["l", "o", "v", "e"]
	  var reverseArray = splitString.reverse(); //["e", "v", "o", "l"]
	  var joinArray = reverseArray.join(""); // "evol"
	*/
  }
  
  console.log(reverseString('ama'));
  
  //Solution 2
  //b  a  n  a  n  a
  //0  1  2  3  4  5
  function reverseString2(text) {
	if (!text) return 'String inexistente';
	for (let i = 0; text.length / 2 > i; i++) {
	  if (text[i] !== text[text.length - 1 - i]) {
		return false;
	  }
	}
	return true;
  }
  
  console.log(reverseString2('banana'));
  