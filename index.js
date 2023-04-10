// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

const outerFunction = (a) => {
  return (b) => {
    return a + b;
  };
};

const innerFunction = outerFunction(5);
console.log(innerFunction(5)); //10
console.log(innerFunction(10)); //15

// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

function searchArray(arr, val) {
  // Base case: if the array is empty, return false
  if (arr.length === 0) {
    return false;
  }

  // Recursive case: check if the first element is the value we're looking for
  if (arr[0] === val) {
    return true;
  }

  // Recursive case: call the searchArray function on the rest of the array
  return searchArray(arr.slice(1), val);
}

let arr = ["arsalan", "raza", "azmi", "nabeel", "ahmed"];

console.log(searchArray(arr, "azmi")); //true
console.log(searchArray(arr, "shahid")); //false

//  3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

const addPara = (para) => {
  const divTag = document.getElementById("main");
  const pTag = document.createElement("p");

  divTag.appendChild(pTag);
  pTag.innerText = para;
};

addPara("This is JavaScript Assignment#02");

// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function addListItem(text) {
  let list = document.getElementById("list");

  let li = document.createElement("li");
  list.appendChild(li);
  li.innerText = text;
}

addListItem("HTML");
addListItem("CSS");
addListItem("JavaScript");
addListItem("Python");

// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

function changeBackgroundColor(para, color) {
  para.style.backgroundColor = color;
}

let para = document.querySelector("p");

changeBackgroundColor(para, "gray");

// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

function saveObjectToLocalStorage(key, obj) {
  let stringify = JSON.stringify(obj);
  localStorage.setItem(key, stringify);
}

let obj = {
  name: "Arsalan Raza Azmi",
  course: "JavaScript",
  teacher: "Ishaq Bhojani",
};

saveObjectToLocalStorage("studentInfo", obj);

// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function retrieveDataFromoLocalStorage(key) {
  let data = localStorage.getItem(key);
  let parseData = JSON.parse(data);
  return parseData;
}
const retrieveData = retrieveDataFromoLocalStorage("studentInfo");
console.log(retrieveData); //{name: 'Arsalan Raza Azmi', course: 'JavaScript', teacher: 'Ishaq Bhojani'}

// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

function saveAndRetrieveData(obj) {
  const keys = Object.keys(obj);

  keys.forEach((key) => {
    localStorage.setItem(key, obj[key]);
  });

  let newObj = {};

  keys.forEach((key) => {
    let data = localStorage.getItem(key);
    newObj[key] = data;
  });
  return newObj;
}

let obj1 = {
  name: "Arsalan Raza Azmi",
  course: "JavaScript",
  teacher: "Ishaq Bhojani",
};

const data = saveAndRetrieveData(obj1);
console.log(data); //{name: 'Arsalan Raza Azmi', course: 'JavaScript', teacher: 'Ishaq Bhojani'}
