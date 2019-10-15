const passwordVerifier = require('./Password-Verifier');

test("Verify Password: > 8", function() {
    const password = 'P@ssw0r';
    const expected = 'password should be larger than 8 chars';
    // password should be larger than 8 chars
    const output = passwordVerifier(password);
    console.log(output);
    expect(output).toMatch(expected);
});

test("Verify Password: != null", function() {
    const password = null;
    const expected = "password should not be null";
    // password should not be null
    const output = passwordVerifier(password);
    expect(output).toMatch(expected);
});

test("Verify Password: *[A-Z]", function() {
    const password = 'passw0rd!';
    const expected = "password should have one Uppercase letter at least";
    // password should have one uppercase letter at least
    const output = passwordVerifier(password);
    console.log(output);
    expect(output).toMatch(expected);
});

test("Verify Password: *[a-z]", function() {
    const password = 'PASSW0RD!';
    const expected = "password should have one lowercase letter at least";
    // password should have one lowercase letter at least
    const output = passwordVerifier(password);
    console.log(output);
    expect(output).toMatch(expected);
});

test("Verify Password: [0-9]", function() {
    const password = 'Password!';
    const expected = "password should have one number at least";
    // password should have one number at least
    const output = passwordVerifier(password);
    console.log(output);
    expect(output).toMatch(expected);
});

test("Verify Password: true >= 3", function() {
    const password = '!0$&^%#@$&!^%@!';
    const expected = "is not good enough";
    // password should have one number at least
    const output = passwordVerifier(password);
    console.log(output);
    expect(output).toMatch(expected);
});