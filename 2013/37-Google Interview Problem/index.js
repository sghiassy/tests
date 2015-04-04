console.log('Don\'t forget to update LiveReload with the folder you\'re using.');
console.log('Hello World');

//main//
// instantiate 3 objects, give them global scope for now
// take input string loop through each charecter 1 x 1 and put into currentContender object
// at the end, ask Winner for the winning string
function main(inputString) {
	
	//Get any easy outs
	if(inputString.length <= 2) {
		console.log(inputString);
		return;
	} else if(inputString.length === 3 && (inputString.charAt(0) === inputString.charAt(2) || inputString.charAt(1) === inputString.charAt(2))) {
		console.log(inputString);
		return;
	}
	
	
	window.winner = new Winner();
	window.contender = new CurrentContender();

	for(var i = 0, iLen = inputString.length; i < iLen; i++) {
		// pop each new charecter into the current contender
		contender.addNewChar(inputString.charAt(i));
	}

	var theWinner = winner.getWinner();
	console.log('The Longest Substring comprised of 2 or more Charecters is ', theWinner);
}


//currentContent//
//get new charecter
//  if letter is one of the two we already have, just add it
//  else give the current holding string to Winner
//  reverse up until you hit the 3rd new charecter

var CurrentContender = (function() {
	return function() {
		var currentString = "";
		var char1 = null;
		var char2 = null;
		
		this.addNewChar = function(newChar) {
			if(newChar === char1 || newChar === char2) {
				currentString += newChar;
				return;
			}
			
			if(char1 === null) {
				char1 = newChar;
				currentString += newChar;
				return;
			}
			
			if(char2 === null) {
				char2 = newChar;
				currentString += newChar;
				return;
			}
			
			//we have a third new char
			
			// take current string and give it to winner
			winner.newContenter(currentString);
			
			// the rewind until you have two full charecters
			currentString += newChar;
			var ptrChar1 = newChar;
			var ptrChar2 = null; //first new charecters after ptr1
			
			for(var j = currentString.length - 2; j >= 0; j--) {
				var currentCharecter = currentString.charAt(j);
				
				if(ptrChar1 == currentCharecter) {
					continue;
				}
				
				if(ptrChar2 === null) {
					ptrChar2 = currentCharecter;
					continue;
				}

				if(currentCharecter === ptrChar2) {
					continue;
				}

				break;
			}

			currentString = currentString.slice(j+1, currentString.length);
			char1 = newChar;
			char2 = ptrChar2;
		};
	};
})();

//WinnerObject//
//get new winning potential
// if its greater in length than the current winner, then keep
// else discard
//when asked for 

var Winner = (function() {
	return function() {
		var currentWinner = "";
		
		this.newContenter = function(newCandidate) {
			if(newCandidate.length > currentWinner.length) {
				currentWinner = newCandidate;
			}
		};
		
		this.getWinner = function() {
			return currentWinner;
		};
	};
})();

console.time('Longest Substring Algorithm');
main('AAAASXCDBBCCCCD');
console.timeEnd('Longest Substring Algorithm');