document.addEventListener('DOMContentLoaded', function(event) {

  const randomNUmber = function() {
    return Math.round(Math.random() * 100);
  };

  // Change background color
  const h1 = document.querySelector('H1').addEventListener('click', function() {
    const body = document.querySelector('BODY');
    if(body.className == 'red') {
      body.className = 'white';
    } else {
      body.className = 'red';
    }
  });

  // hover over div => log console
  const divHover = document.querySelector('div').addEventListener('mouseover', function() {
    console.log('hover');
  });

  // put random number in button
  const randomNumberButton = document.querySelector('BUTTON').addEventListener('click', function() {
    this.innerHTML = randomNUmber();
  });

});
