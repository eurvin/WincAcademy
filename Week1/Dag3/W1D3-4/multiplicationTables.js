function multiplicationTables(tables) {

  for (let i = 0; i <= tables; i++) {
    let table = 0;
    while(table <= 10) {
      console.log(`De tafel van ${i}: ${table} x ${i} = ${table*i}.`);
      table++
    }
  }
}
multiplicationTables(3)
