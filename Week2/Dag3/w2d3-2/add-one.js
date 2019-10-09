function addOne(numbers) {
    // Schrijf hier de functie...
    return numbers.map(function(number) {
        return number += 1;
    })
}
module.exports = addOne;