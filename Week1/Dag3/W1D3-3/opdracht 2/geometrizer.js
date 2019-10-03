function calcCircumfrence(radius) {
  let circumFerence = Math.PI * 2*radius;
  console.log(`The circumference is ${circumFerence}`);
}

calcCircumfrence(4);

function recalcCircumfrence(radius) {
  let circumFerence = 2*(Math.PI * radius);
  console.log(`The circumference is ${circumFerence}`);
}

recalcCircumfrence(4);

function calcArea(radius) {
  let area = Math.PI * Math.pow(radius, 2);
  console.log(`The area is ${area}`);
}
calcArea(4)
