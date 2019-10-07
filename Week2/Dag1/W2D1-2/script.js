// Schrijf een JavaScript functie om te checken of de`input` een array is of niet.

const isArray = function(input) {
  return Array.isArray(input);
};

console.log(Array.isArray('Winc Winc, nudge nudge')); // false
console.log(Array.isArray([1, 2, 4, 0])); // true

// Schrijf een JavaScript functie om het eerste element uit een array te selecteren

const benelux = function(first) {
  return first.shift();
  return first[0];
};

console.log(benelux(["Belgie", 1, "Nederland", 2, "Luxemburg", 3])); // ["Belgie"]

// Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren .

const presidents = ["Trump", "Obama", "Bush", "Clinton"]

function impeachTrump(array) {
return array.slice(1);
}

console.log(impeachTrump(presidents)) // ["Obama", "Bush", "Clinton"]

//Write a simple JavaScript program to join all elements of the following array into a string (with spaces). *ps: deze opdracht heb ik engels gelaten omdat er een dikke tip in zit over welke array method je gaat gebruiken.

const stringsTogether = function(zin) {
  return zin.join(' ');
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))

// Schrijf een functie die 2 arrays combineert tot 1 array

const combineArrays = function(samen, voegen) {
  return samen.concat(voegen)
}

combineArrays([1,2,3], [4,5,6])
    // result should be [1,2,3,4,5,6]
