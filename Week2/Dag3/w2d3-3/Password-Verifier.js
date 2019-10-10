const getPasswordVerifier = function(password) {
    let pw;
    let pwOk = 0;
    let chars8 = () => {
        if(password.length <= 8) {
            return pw = "password should be larger than 8 chars";
        } else { return pwOk++};
    };
    let notNull = () => {
        if(password == null) {
            return pw = "password should not be null";
        } else { return pwOk++ };
    };
    let upperCase = () => {
        if(!password.match(/(?=.*[A-Z]){8,}/g)) {
            return pw = "password should have one Uppercase letter at least";
        } else { return pwOk++ };
    };
    let lowerCase = () => {
        if(!password.match(/(?=.*[a-z]){8,}/g)) {
            return pw = "password should have one lowercase letter at least";
        } else { return pwOk++ };
    };
    let number = () => {
       if(!password.match(/(?=.*[0-9]){8,}/g)) {
           return pw = "password should have one number at least";
        } else { return pwOk++ };
    };

    if(password == null) {
        notNull();
    } else {
        chars8();
        upperCase();
        lowerCase();
        number()
    };
    if (pwOk >= 3) {
        console.log(pwOk + ' seems good enough');
    } else {
        return console.log(pwOk + ' is not good enough');
    }
    return pw;
};

//getPasswordVerifier();

module.exports = getPasswordVerifier;