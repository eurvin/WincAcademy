function fortuneTeller(children, partnerName, location, jobTitle) {
  let fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${children} kids.`;
  console.log(fortune);
}

fortuneTeller(7, 'Mary', 'Berlin', 'Waiter');
fortuneTeller(0, 'John', 'Amsterdam', 'Builder');
fortuneTeller(2, 'Sophia', 'New York', 'President');
