let person = {
  name: 'Eurvin',
  age: 37
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person['name']);
console.log(person['age']);


let kleuren = ['groen', 'blauw', 'rood'];
console.log(kleuren);
console.log(kleuren[0]);
kleuren[3] = 'geel';
kleuren[4] = '5';
console.log(kleuren.length);

let nieuweKleuren = ['groen', 'blauw', 'rood'];
nieuweKleuren.push('geel', 5);
console.log(nieuweKleuren);
