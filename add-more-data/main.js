function addMoreData(object, key, value) {
  
  object[key] = value;
  return value;


}

const object1 = { name: `Rey`, age: 50};
const object2 = { name: `Riy`, age: 40};
const object3 = { name: `Ray`, age: 30};

console.log(addMoreData(object1, `color`, `red`));
console.log(addMoreData(object2, `hobby`, [`game`, `music`]));
console.log(addMoreData(object3, `married`, true));
