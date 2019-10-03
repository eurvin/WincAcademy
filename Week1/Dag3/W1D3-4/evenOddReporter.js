function evenOddReporter(num) {
  for (let i = 0; i <= num; i++) {
    if (!(i % 2)) {
      console.log(`${i} is even!`);
    } else {
      console.log(`${i} is odd!`);
    }
  }
}
evenOddReporter(20)
