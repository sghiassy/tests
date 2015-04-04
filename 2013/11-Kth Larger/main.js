var inputString = "Shaheen is the master of the world so you better watch out";
var elementMap = {};
var numberMap = {};
var discardChars = " ";

//Build out element map
for(var i = 0, iLen = inputString.length; i < iLen; i++) {
	var currentChar = inputString.charAt(i);
	
	if(discardChars.search(currentChar) == -1) {
		if(elementMap[currentChar]) {
			elementMap[currentChar] += 1;
		} else {
			elementMap[currentChar] = 1;
		}
	}
}

//build out number map
for(var element in elementMap) {
	if(elementMap.hasOwnProperty(element)) {
		var currentNumber = elementMap[element];
		
		if(numberMap[currentNumber]) {
			numberMap[currentNumber].push(element);
		} else {
			numberMap[currentNumber] = [element];
		}
	}
}

console.log(elementMap);
console.log(numberMap);



//Build out Element Map
  //Discard if in Element Array
    //If element already exists, add to its total
	//If elemetn doesn't exist, create element and set it to 1

//Build out Number Map
  //Go through Number Map
    //If number already exists in map, add the element to it
	//If the number doesn't already exist, then create an array