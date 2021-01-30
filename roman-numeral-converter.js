function convertToRoman(num) {
 let translate = {
	'I': 1,
    'IV': 4,
  	'V': 5,
    'IX':9,
  	'X': 10,
    'XL': 40,
  	'L': 50,
    'XC': 90,
  	'C': 100,
    'CD': 400,
  	'D': 500,
    'CM': 900,
		'M': 1000,
    },
        flag = '',
        remainder;
  
  for (let key in translate){
  	if (num === translate[key]){ 
      return key;
    }
    if(num > translate[key]){
      flag = key;
    }
  }
   remainder = num - translate[flag];
   return flag += convertToRoman(remainder);
  
}

convertToRoman(36);
