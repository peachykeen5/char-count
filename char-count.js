var s = 'lighthouse in the house'

//1. Split string into an array
var newArray = s.split('').join("");


function charCount(labels) {
  //2. create an empty object
  var charCount = {};

  //3. iterate through each item of the array
  for (var i = 0; i < newArray.length; i++)  {

    //4. if the key already exists in charCount object, add 1 to it's value
    if (charCount[newArray[i]] >= 1) {
      charCount[newArray[i]] += 1;
    } else {
      //otherwise start the key count at 1
      charCount[newArray[i]] = 1;
    }
  }
  //5. return the object
  return charCount;
}

console.log(charCount(newArray));