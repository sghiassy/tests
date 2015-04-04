var HTMLString = "<p>I am<span>the</span>missing string inside the <b>house</b>";
var FinalString = [];
var saveFlag = false;
debugger;
for(var i = 0, iLen = HTMLString.length; i < iLen; i++) {
	if(HTMLString.charAt(i) == '<') {
		saveFlag = false;
	} else if(HTMLString.charAt(i) == '>') {
		saveFlag = true;
	} else if(saveFlag == true) {
		FinalString.push(HTMLString.charAt(i));
	}
}

FinalString = FinalString.join('');

console.log(FinalString);