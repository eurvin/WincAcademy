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

function assignGrade(score) {
  if(score >= 90) {
    return 'A';
  } else if(score >= 80) {
    return 'B';
  } else if(score >= 70) {
    return 'C';
  } else if(score >= 60) {
    return 'D';
  } else if(score >= 50) {
    return 'E';
  } else if(score >= 40) {
    return 'F';
  } else {
    return 'G';
  }

}
assignGrade(55)
console.log(assignGrade(91));
assignGrade(31)

function assignGradeChecker(check) {
  let score = 60;
  while (score <= check) {
    if(score >= 90) {
      console.log(`For ${score}, you get an ${assignGrade(score)}!`);
      score++;
    } else {
      console.log(`For ${score}, you get a ${assignGrade(score)}!`);
      score++;
    }
  }
}

assignGradeChecker(100)
