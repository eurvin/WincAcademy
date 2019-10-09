const getPasswordVerifier = function(password) {
    //Schrijf je functie...
    let pw = password.match(/(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/g); 
    console.log(pw);
    return pw;
    
};



module.exports = getPasswordVerifier;