
const colors = ['yellow', 'blue', 'red', 'orange'];

const person = {
  name: 'eurvin',
  age: 37,
  hand: 'right',
  movie: 'The big lebowski!',
  drink: 'water'
}

let i = 0;

/*//while loop
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

//for loop
for(let i = 0; i < colorsFor.length; i++) {
  console.log(colors[i]);
}

//forEach while loop
while (i < colors.length) {
  colors.forEach(console.log(colors[i]));
  i++;
}

//forEach for loop
for(let i = 0; i < colorsFor.length; i++) {
  colors.forEach(console.log(colors[i]));
}*/

// //shift() while loop
// const colors2 = ['yellow', 'blue', 'red', 'orange'];
// while (colors.length > 0) {
//   console.log(colors[0]);
//   colors.shift();
// }
console.log(Object.keys(person).length);
while (i < (Array(Object.keys(person)).length)) {
  // person.forEach(console.log(person));

  console.log(i);
  i++;
  console.log(i);
}
