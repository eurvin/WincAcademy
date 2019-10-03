const age = 18;
if(age >=18) {
  console.log('Welcome to the club!');
} else {
  console.log('Sorry, 18 years and over only!');
}

const isFemale = false;

if(isFemale) {
  console.log('Cuz this is ladies night, and .....!');
} else {
  console.log('Sorry, ladies only!');
}

const driverStatus = 'bob';

if(driverStatus === 'bob') {
  console.log('Safety first!');
} else {
  console.log('Please, do not drink and drive!');
}

if(age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log('Gewoon het volle pond betalen ajb!');
}

const name = 'Sarah';

if(name == 'Sarah' || name == 'Bram') {
  console.log('Jij ontvangt vanvond van ons een lekker gratis biertje!');
} else {
  console.log('Gewoon het volle pond betalen ajb!');
}

const totalAmount = 31;

if(totalAmount > 100) {
  console.log('Je hebt voor meer dan 100 euro besteld en ontvangt vanvond van ons een gratis fles champagne!');
} else if (totalAmount > 50) {
  console.log('Je hebt voor meer dan 50 euro besteld en ontvangt vanvond van ons een gratis portie nachos!');
} else if (totalAmount > 25) {
  console.log('Je hebt voor meer dan 25 euro besteld en ontvangt vanvond van ons een gratis portie (vega)bitterballen!');
} else {
  console.log('Helaas geen cadeau voor jou!');
}

if (totalAmount >= 25 && totalAmount < 50); {
   console.log ("Gefeliciteerd, je krijgt bij deze bestelling een gratis portie (vega)bitterballen.");
}
