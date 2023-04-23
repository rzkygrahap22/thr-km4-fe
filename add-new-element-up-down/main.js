function addNewElementUpDown(array, element, position) {
  
  if(position === "up") {
    array.unshift(element);
  }else if(position === "down"){
    array.push(element);
  }
  return array;


}

console.log(addNewElementUpDown([1, 2, 3, 4], 5, "up"));
console.log(addNewElementUpDown([1, 2, 3, 4], 5, "down"));
