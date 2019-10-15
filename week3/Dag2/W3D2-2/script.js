function huiswerkMaken(vak, callback) {
  console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
  setTimeout(() => {
    callback()}, 5000);
};

huiswerkMaken('wiskunde', klaarMetHuiswerk);

function klaarMetHuiswerk() {
  console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
};
