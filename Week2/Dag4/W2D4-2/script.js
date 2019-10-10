// // 2A verwachting: 'Nissan'

// const car = {
//     brand: "Nissan",
//     getBrand: function(){
//       console.log(this.brand);
//     }
//   };
   
//   const getCarBrand = car.getBrand;
   
//   getCarBrand();   // output ... undefined -> this.brand refereet naar globalscope.

//   // 2b verwachting: 'Nissan'
//   const car = {
//     brand: "Nissan",
//     getBrand: function(){
//       console.log(this.brand);
//     }
//   };
  
//   const getCarBrand = car.getBrand;
  
//   console.log(getCarBrand);   // output: verwijzing naar de functie zelf, dus niet naar het opject. of value

// const car = {
//     brand: "Nissan",
//     getBrand: function(){
//       console.log(this.brand);
//     }
//   };
//   const getCarBrand = car.getBrand.bind(car);
//   getCarBrand();   // output: ..... door getbrand the binden aan het car obj refereert het this keyword (this.brand) naar car.brand

  // 2c verwachting: 'Nissan' // werkt niet omdat this verwijst naar de global/root scope. brand bestaat niet als functie of var daarvan

{/* <button id="btn" type="button">Get the car's brand</button>
 
const car = {
  brand: "Nissan",
  getBrand: function(){
    console.log(this.brand);
  }
}; */}
 
// const el = document.getElementById("btn");
// el.addEventListener("click", car.getBrand);

  // 2d verwachting: inner functies/ closures hebben zonder bind() geen toegang tot this keyword dus undefined.
  
  const car = {
    brand: "Nissan2",
    getBrand: function(){
      const printBrandName = function(){
        console.log(this.brand);
      };
      return printBrandName();
    }
  };
   
  car.getBrand();cd ..brand