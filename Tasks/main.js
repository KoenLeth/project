function isPalindrom(str) {
    var strReverse = str.split('').reverse().join(''); 
    if (strReverse == str) {
      return true;
    } else {
      return false;
    }
  }
  test = isPalindrom('abcdedcba');
  test2 = isPalindrom('porro');

  console.log(test);
  console.log(test2);