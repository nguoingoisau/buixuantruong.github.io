//bai1
 function bai1(num) {
 	bai1 = num.sort(function(a,b){
 		return b-a;
 	})[1];
     return bai1;
 }
 // bai2
 function bai2(str) {
  const stringArray = str.split(" ");
  const longestWord = stringArray.reduce((a, b) => {
    if(b.length > a.length) {
      return b;
    } else {
      return a;
    }
  });
  return longestWord;
}
//bai3
function bai3(string, target) {
  return (string.substr(-target.length) === target) ? true : false;
}