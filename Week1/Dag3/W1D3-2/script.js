/*makeCheeseSandwich
  get 1 slices of bread
  add 1 slices of cheese
  put 1 slice of bread on top
  */

//2A
function makeCheeseSandwich() {
  console.log('get 1 slice of bread');
  console.log('add 1 slice of cheese');
  console.log('put 1 slice of bread on top');
}

makeCheeseSandwich();

//2B

function makeSandwich(topping) {
  console.log('get 1 slices of bread');
  console.log('add 1 slice of' + topping);
  console.log('put 1 slice of bread on top');
  console.log("There you go, a sandwich with.... " + topping)
}

makeSandwich('cheese');

//2C
const totalAmount = 12.50;
const discount = 2.50;

function calculateDiscountedPrice(totalAmount, discount) {
  console.log(Math.round(totalAmount - discount));
}

calculateDiscountedPrice(totalAmount, discount);

//2D
function recalculateDiscountedPrice(totalAmount, discount) {
  if (totalAmount > 25) {
    console.log(Math.round(totalAmount - discount));
  } else {
    console.log(totalAmount);
  }
}

recalculateDiscountedPrice(totalAmount, discount);
