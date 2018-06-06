var countLetters = function(string) {
  var newArray = string.split('');
  var isMultiple = {};
  for (var i = 0; i < newArray.length; i++)  {
    var letter = newArray[i];
    var stringPosition = i.toString();
    if (isMultiple[letter] !== undefined) {
      isMultiple[letter] += "," + stringPosition;
    } else {
      isMultiple[letter] = stringPosition;
    }
  }
  console.log(isMultiple)
}
countLetters('lighthouse in the house')