const superheroes = [
    {
      "name": "Batman",
      "publisher": "DC Comics",
      "alter_ego": "Bruce Wayne",
      "first_appearance": "Detective Comics #27",
      "weight": "210"
    },
    {
      "name": "Superman",
      "publisher": "DC Comics",
    //   "alter_ego": "Kall",
      "first_appearance": "Action Comics #1",
      "weight": "220"
    },
    {
      "name": "Flash",
      "publisher": "DC Comics",
      "alter_ego": "Jay Garrick",
      "first_appearance": "Flash Comics #1",
      "weight": "195"
    },
    {
      "name": "Green Lantern",
      "publisher": "DC Comics",
      "alter_ego": "Alan Scott",
    //   "first_appearance": "Allmerican Comics #16",
      "weight": "186"
    },
    {
      "name": "Green Arrow",
      "publisher": "DC Comics",
      "alter_ego": "Oliver Queen",
      "weight": "195"
    },
    {
      "name": "Wonder Woman",
      "publisher": "DC Comics",
      "alter_ego": "Princess Diana",
      "weight": "165"
    },
    {
      "name": "Blue Beetle",
      "publisher": "DC Comics",
      "alter_ego": "Dan Garret",
      "first_appearance": "Mystery Men Comics #1",
      "weight": "145"
  },
  {
      "name": "Spider Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Peter Parker",
      "first_appearance": "Amazing Fantasy #15",
      "weight": "167"
  },
  {
      "name": "Captain America",
      "publisher": "Marvel Comics",
      "alter_ego": "Steve Rogers",
      "first_appearance": "Captain America Comics #1",
      "weight": "220"
  },
  {
      "name": "Iron Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Tony Stark",
      "first_appearance": "Tales of Suspense #39",
      "weight": "250"
  },
  {
      "name": "Thor",
      "publisher": "Marvel Comics",
      "alter_ego": "Thor Odinson",
      "first_appearance": "Journey into Myster #83",
      "weight": "200"
  },
  {
      "name": "Hulk",
      "publisher": "Marvel Comics",
      "alter_ego": "Bruce Banner",
      "first_appearance": "The Incredible Hulk #1",
      "weight": "1400"
  },
  {
      "name": "Wolverine",
      "publisher": "Marvel Comics",
      "alter_ego": "James Howlett",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "200"
  },
  {
      "name": "Daredevil",
      "publisher": "Marvel Comics",
      "alter_ego": "Matthew Michael Murdock",
      "first_appearance": "Daredevil #1",
      "weight": "200"
  },
  {
      "name": "Silver Surfer",
      "publisher": "Marvel Comics",
      "alter_ego": "Norrin Radd",
      "first_appearance": "The Fantastic Four #48",
      "weight": "unknown"
    }
  ];

// Maak een array van alle superhelden namen
const superheroesNames = superheroes.map(hero => hero = hero.name);
console.log(superheroesNames);

// Maak een array van alle "lichte" superhelden (< 190 pounds)
const lightSuperheroes = superheroes.filter(hero => hero.weight < 190);
console.log(lightSuperheroes);

// Maak een array met de **namen** van de superhelden die 200 pounds wegen
const superheroes200lbs = superheroes.filter(hero => hero.weight == 200);
console.log(superheroes200lbs);

// Maak een array met alle comics waar de superhelden hun "first apprearances" hebben gehad
const superheroesFirstAppearance = superheroes.filter(hero => hero = hero.first_appearance).map(hero => hero = hero.first_appearance);
console.log(superheroesFirstAppearance);

// Maak een array met alle superhelden van DC Comics en een array met alle superhelden van Marvel Comics
const superheroesDCComics = superheroes.filter(hero => hero.publisher == 'DC Comics');
console.log(superheroesDCComics);

const superheroesMarvel = superheroes.filter(hero => hero.publisher == 'Marvel Comics');
console.log(superheroesMarvel);

// Tel het gewicht van alle superhelden van DC Comics bij elkaar op
const superheroesTotalWeightDCComics = superheroesDCComics.filter(hero => hero.weight != "unknown").map(hero => hero = Number(hero.weight)).reduce((num, current) => num +=current, 0);
console.log(superheroesTotalWeightDCComics);

// // Doe hetzelfde met alle superhelden van Marvel Comics
const superheroesTotalWeightMarvel = superheroesMarvel.filter(hero => hero.weight != "unknown").map(hero => hero = Number(hero.weight)).reduce((num, current) => num +=current, 0);
console.log(superheroesTotalWeightMarvel);

// // Bonus: vind de zwaarste superheld!
const superheroesFatBasterd = superheroes.filter(hero => hero.weight != "unknown").sort((a,b) => a.weight - b.weight);
console.log(superheroesFatBasterd[superheroesFatBasterd.length-1]);


// met function declarations
// Maak een array van alle superhelden namen
const superheroesNamesFun = function(superheroes) {
  return superheroes.map(hero => hero = hero.name);
};
console.log(superheroesNamesFun(superheroes));

// Maak een array van alle "lichte" superhelden (< 190 pounds)
const lightSuperheroesFun = function(superheroes) {
  return superheroes.filter(hero => hero.weight < 190);
}
console.log(lightSuperheroesFun(superheroes));

// Maak een array met de **namen** van de superhelden die 200 pounds wegen
const superheroes200lbsFun = function(superheroes) {
  return superheroes.filter(hero => hero.weight == 200);
}
console.log(superheroes200lbsFun(superheroes));

// Maak een array met alle comics waar de superhelden hun "first apprearances" hebben gehad
const superheroesFirstAppearanceFun = function(superheroes) {
  return superheroes.filter(hero => hero = hero.first_appearance).map(hero => hero = hero.first_appearance);
}
console.log(superheroesFirstAppearanceFun(superheroes));

Maak een array met alle superhelden van DC Comics en een array met alle superhelden van Marvel Comics
const superheroesDCComicsFun = function(superheroes) {
  return superheroes.filter(hero => hero.publisher == 'DC Comics');
}
console.log(superheroesDCComicsFun(superheroes));

const superheroesMarvelFun = function(superheroes) {
  return superheroes.filter(hero => hero.publisher == 'Marvel Comics');
}
console.log(superheroesMarvelFun(superheroes));

// Tel het gewicht van alle superhelden van DC Comics bij elkaar op
const superheroesTotalWeightDCComicsFun = function(s) {
  return s.filter(hero => hero.weight != "unknown")
  .map(hero => hero = Number(hero.weight))
  .reduce((num, current) => num +=current, 0);
}
console.log(superheroesTotalWeightDCComicsFun(superheroesDCComicsFun(superheroes)));

// // Doe hetzelfde met alle superhelden van Marvel Comics
const superheroesTotalWeightMarvelFun = function(superheroesMarvelFun) {
  return superheroesMarvelFun.filter(hero => hero.weight != "unknown").map(hero => hero = Number(hero.weight)).reduce((num, current) => num +=current, 0);
}
console.log(superheroesTotalWeightMarvelFun(superheroesMarvelFun(superheroes)));

// Bonus: vind de zwaarste superheld!
const superheroesFatBasterdFun = function(superheroes) {
  return superheroes.filter(hero => hero.weight != "unknown")
  .sort((a,b) => a.weight - b.weight);
}
console.log(superheroesFatBasterdFun(superheroes)[superheroesFatBasterdFun(superheroes).length - 1]);

  const superheroesFatBasterdFun2 = function(superheroes) {
    return superheroes.filter(hero => hero.weight != "unknown")
    .reduce((accumulator, currentValue) => {
      if(Number(accumulator.weight) < Number(currentValue.weight)){
        return currentValue
      } else {
        return accumulator
      }
    })};
  

console.log(superheroesFatBasterdFun2(superheroes));