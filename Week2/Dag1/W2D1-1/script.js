// Schrijf een JavaScript functie die een bepaald item weet te vinden en retourneren op basis van een bepaalde value.
const superheroes = [
  {name: "Batman", alter_ego: "Bruce Wayne"},
  {name: "Superman", alter_ego: "Clark Kent"},
  {name: "Spiderman", alter_ego: "Peter Parker"}];

const herofinder = superheroes.find(function(hero) {
  return hero.name == "Spiderman";
})
console.log(herofinder);

// In een array met integers. Zorg dat je een array returned met de integers verdubbeld.
console.log([1, 2, 3].map(getal => getal * 2));

// In een array met integers. Schrijf een JavaScript functie die een bepaald of er een integer is die groter is dan 10
console.log([1, 4, 3, 6, 9, 7, 11].some(getal => getal > 10));

// - In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde string in de array aanwezig is.
console.log(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'].includes('Holland'));

// In een array met integers. Schrijf een JavaScript functie die elke integer verdubbeld.
[1, 4, 3, 6, 9, 7, 11].forEach(function(getal) { getal * 2; console.log(getal);});

// - In een array met integers. Schrijf een JavaScript functie die alle integers retourneert onder de 100.
console.log([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234].filter(getal => getal < 100 ));

// In een array met integers. Schrijf een JavaScript functie die alle integers bij elkaar optelt en **enkel het totaal** van de som retourneert.
console.log([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234].reduce((total, current) => total += current, 0));
