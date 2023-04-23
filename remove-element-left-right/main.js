function removeLeftRight(arr, left, right) {
  
  if(left) {
    arr.shift();
  }

  if(right) {
    arr.pop();
  }

  return arr;

}

console.log(removeLeftRight([1, 2, 3, 4], true, false));
console.log(removeLeftRight([1, 2, 3, 4], false, true));