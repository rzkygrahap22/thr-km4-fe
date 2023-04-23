function removeUnrelated(object, key){
    
    const newObject = { ...object};
    key.forEach(key => {
        delete newObject[key];
    });
    return newObject;


}

const object1 = { name: 'Rey', age: 40, address: `Singapura`, hobby: [`game`, `music`]};
const keys1 = [`age`];
const result1 = removeUnrelated(object1, keys1);
console.log(result1);