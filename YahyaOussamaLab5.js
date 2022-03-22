const obg = { a: "undefined", b: "nn" };
const obg1 = { a: "undefined", b: "nn" };
const obg2 = { a: "undefined", b: "ngn" };
const getProperties = (obg) => {
  console.log(Object.keys(obg));
  return Object.keys(obg);
};

getProperties(obg);

//ex2
const isPlainObject = (mylist) => {
  if (typeof mylist === "object") {
    console.log("True");
  } else {
    console.log("False");
  }
};
let mylist = {
  firstname: "batata",
  lastname: "batata",
};
isPlainObject(mylist);

//ex 3
const getPropertiesNb = (obj) => {
  console.log(Object.keys(obj).length);
  return Object.keys(obj).length;
};
const modifyObject = (obj) => {
  if (typeof obj === "object") {
    obj.isObject = true;
    obj.getPropertiesNb = getPropertiesNb(obj);
    console.log(obj);
  } else {
    obj.isObject = false;
    console.log(obj);
  }
};
modifyObject(obg);

//ex 4
const makePairs = (obj) => {
  let keys = Object.keys(obj); // arraylist of keys
  console.log(
    keys.map((x) => {
      let item = obj[x];
      return [x, item];
    })
  );
};
makePairs(mylist);

//ex 5
const without = (argument, obj) => {
  delete obj[argument];
  console.log(obj);
};
without("firstname", mylist);

//ex 6
const isEmpty = (obj) => {
  let empty;
  for (let key in obj) {
    if (obj[key] === "" || !obj[key]) {
      empty = true;
      break;
    } else {
      empty = false;
    }
    return empty;
  }
};
console.log(isEmpty(obg));

//ex 7
const isEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};
console.log(isEqual(obg1, obg2));

// ex 8
const intersection = (obj1, obj2) => {
  const keys1 = Object.keys(obj1); 
  for (let key of keys1) {
    if (obj1[key] === obj2[key]) {
      return false;
    }
  }
  return true;
};
console.log(intersection(obg1, obg2));