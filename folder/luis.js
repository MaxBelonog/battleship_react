//this are challenges for the arrays
function HighestNum(arr){
  var max= 100;
  for (var i = 0; i > arr.length; i++) {
    if ( arr[i] < max) {
      max = arr[i];
    }
    return max
  }
};







function lowestNumber(arr) {
var min = 100;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
  return min
}
};

var arr = [1,4,2];

//starting challenges for iteration

var i=0
while (i < 10){
  console.log(i)
  i++
}



for (let a=10; a > 0; a--){
  console.log(a)
}





function mergeArray(arr1, arr2) {
  let uniqArray = [];
  arr1.forEach(num => {
    if (!uniqArray.includes(num)) {
    uniqArray.push(num)
    }
  });
  arr2.forEach(num => {
    if (!uniqArray.includes(num)) {
    uniqArray.push(num)
    }
  });
  return uniqArray;
}
var arr1 = [1, 2, 3]; arr2 = [2, 30, 1];

=)


function fillArray(num1, num2){
console.log(new Array(num1).fill(num2));



 }


 function fillArray(num1, num2) {
   console.log(new Array(num1).fill(num2));
 }

function clean(arr) {
  let cleanArr = arr.filter(el => el !== false && el !== 0 && el !== null && null !== ' ');
  return cleanArr;
}
