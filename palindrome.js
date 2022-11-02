// Palindrom or not
// l e v el
const palindrome = (data) => {
  var len = data.length;
  var mid = Math.floor(len / 2);
  for (var i = 0; i < mid; i++) {
    if (data[i] !== data[len - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(palindrome("5"));
