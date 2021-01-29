function palindrome(str) {
  str.toString;
  let cont = [], 
    str1,
    str2;
  let rgx = /\W|_/g;
  str = str.replace(rgx, '').toLowerCase().split('');
  for (let i = str.length-1; i >= 0; i-- ){
    cont.push(str[i]);
  }
  str1 = str.join('');
  str2 = cont.join('');
  return str1 == str2 ?  true : false;
}



console.log(palindrome('A man, a plan, a canal. Panama'));
