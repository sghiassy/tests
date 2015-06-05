function createBinaryString (nMask) {
  // nMask must be between -2147483648 and 2147483647
  for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
       nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
  return sMask;
}

function updateBits(n, m, i, j) {
 var max = ~0;
 console.log("max           ", createBinaryString(-1));
 console.log("");

 // 1’s through position j, then 0’s
 var firstLeftShift = (1 << j);
 console.log("firstLeftShift", createBinaryString(firstLeftShift));
 var firstMinOne = firstLeftShift - 1;
 console.log("firstMinOne   ", createBinaryString(firstMinOne));
 var left = max - firstMinOne;
 console.log("left          ", createBinaryString(left));
 console.log("");

 // 1’s after position i
 var intStep2 = (1 << i);
 console.log("intStep2      ", createBinaryString(intStep2));
 var right = (intStep2 - 1);
 console.log("right         ", createBinaryString(right));
 console.log("");

 // 1’s, with 0s between i and j
 var mask = left | right;
 console.log("mask          ", createBinaryString(mask));
 console.log("");

 // Clear i through j, then put m in there
 var NAnd = n & mask;
 console.log("NAnd          ", createBinaryString(NAnd));
 var MShift = m << i;
 console.log("MShift        ", createBinaryString(MShift));
 var answer = NAnd | MShift;
 console.log("answer        ", createBinaryString(answer));
 return answer;
}

console.log("");
var answer = updateBits(1024, 21, 2, 6);
console.log("dec:          ", answer.toString());
console.log("bin:          ", answer.toString(2));


