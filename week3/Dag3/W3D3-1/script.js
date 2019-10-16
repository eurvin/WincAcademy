// Functie 1
// - Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
// - De functie accepteert meerdere argumenten
// - Gebruik de **rest operator** om ervoor te zorgen dat je functie alle argumenten als een array behandelt.
function optelSom(...nums) {
  return nums.reduce((acc, cur) => cur += acc);
};

console.log(optelSom(3,4,5));

// Functie 2:
//
// - Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
// - De functie accepteert 1 argument, namelijk een array van cijfers
// - Gebruik de **spread operator** om ervoor te zorgen dat je functie alle items in de array bij elkaar optelt.

function optelSom2(x,y,z) {
  return x+y+z;
}

let som = [6,7,8];
console.log(optelSom2(...som));
