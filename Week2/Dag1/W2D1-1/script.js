// Schrijf een JavaScript functie die een bepaald item weet te vinden en retourneren op basis van een bepaalde value.

const superheroes = function(heroes) {
  return heroes.find(hero => hero.name == "Spiderman");
};

console.log(superheroes([{name: "Batman", alter_ego: "Bruce Wayne"},{name: "Superman", alter_ego: "Clark Kent"},{name: "Spiderman", alter_ego: "Peter Parker"}]));

// In een array met integers. Zorg dat je een array returned met de integers verdubbeld.
const doubleArrayValues = function(enkel) {
  return enkel.map(getal => getal * 2);
}

console.log(doubleArrayValues([1, 2, 3]));


// In een array met integers. Schrijf een JavaScript functie die een bepaald of er een integer is die groter is dan 10
const isBiggerThan10 = function(reeks) {
  return reeks.some(getal => getal > 10);
}

console.log(isBiggerThan10([1, 4, 3, 6, 9, 7, 11]));

// - In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde string in de array aanwezig is.
const italyInTheGreat7 = function(countries) {
  return countries.includes('Italy');
}

console.log(italyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']));


// In een array met integers. Schrijf een JavaScript functie die elke integer verdubbeld.
const duplication = function(reeks) {
  return reeks.map(getal => getal * 2);
}
console.log(duplication([1, 4, 3, 6, 9, 7, 11]))

// - In een array met integers. Schrijf een JavaScript functie die alle integers retourneert onder de 100.
const below100 = function(reeks) {
  return reeks.filter(getal => getal < 100 );
}

console.log(below100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]));

// In een array met integers. Schrijf een JavaScript functie die alle integers bij elkaar optelt en **enkel het totaal** van de som retourneert.
const bigSum = function(reeks) {
  return reeks.reduce((total, current) => total += current, 0);
}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
