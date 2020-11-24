for (var i = 0; i < 10; i++) {
  console.log(i);
}
for (var i = 9; i >= 0; i--) {
  console.log(i);
}

var fruits = ["banana", "orange", "apple", "kiwi"];
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

var arr = [];
for (var i = 0; i < 10; i++) {
  arr.push(i);
}
console.log(arr)
//Write a for loop that prints to the console only even numbers 0 through 100.
for (var i = 0; i <= 100; i++) {
  if (i === 0 || i % 2 === 0) {
    console.log(i);
  }
}
//Write a for loop that will push every other fruit to an array.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var newFruitArr = [];
for (var i = 0; i < fruit.length; i++) {
  if (i === 0 || i % 2 === 0) {
    newFruitArr.push(fruit[i]);
  }
}
console.log(newFruitArr)
//Write a loop that will print out all the names of the people of the people array
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]
for (var i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].name);
}
/*Write a loop that pushes the names into a names array, and the occupations into an occupations array.*/
var nameArr = [];
var occArr = [];
for (var i = 0; i < peopleArray.length; i++) {
  nameArr.push(peopleArray[i].name);
  occArr.push(peopleArray[i].occupation);
}
console.log(nameArr);
console.log(occArr);
/*Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".*/
var nameEvenArr = [];
var occOddArr = [];
for (var i = 0; i < peopleArray.length; i++) {
  if (i === 0 || i % 2 === 0) {
    nameEvenArr.push(peopleArray[i].name)
  } else {
    occOddArr.push(peopleArray[i].occupation);
  }
}
console.log(nameEvenArr);
console.log(occOddArr);
//Create an array that mimics a grid like the following using nested for loops:
/*[[0, 0, 0], 
[0, 0, 0], 
[0, 0, 0]]*/
var outerArr =[];
for (var i = 0; i < 3; i++) {
  var innerArr = [];
  for (var j = 0; j < 3; j++){
    innerArr.push(0);
  }
  outerArr.push(innerArr);
}
console.log(outerArr);
//.Create an array that mimics a grid like the following using nested for loops:
/*
[[0, 0, 0], 
[1, 1, 1], 
[2, 2, 2]]
*/
var outerTwoArr =[];
for (var i = 0; i < 3; i++) {
  var innerTwoArr = [];
  for (var j = 0; j < 3; j++){
    innerTwoArr.push(i);
  }
  outerTwoArr.push(innerTwoArr);
}
console.log(outerTwoArr);

//Create an array that mimics a grid like the following using nested for loops:
/*
[[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]]
*/
var outerThreeArr =[];
for (var i = 0; i < 3; i++) {
  var innerThreeArr = [];
  for (var j = 0; j < 3; j++){
    innerThreeArr.push(j);
  }
  outerThreeArr.push(innerThreeArr);
}
console.log(outerThreeArr);
/*Given a grid like the previous ones, write a nested for loop that would change every number to an x.
[["x", ...], 
["x", ...], 
["x",...], ...] */
var grid = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];
for (var i = 0; i < grid.length; i++) {
  for (var j = 0; j < grid[i].length; j++){
    grid[i][j] = "x";
  }
}
console.log(grid);