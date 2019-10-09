const passwordVerifier = require('./Password-Verifier');

test("Verify Password: > 8", function() {
    const password = 'P@ssw0rd!';
    const expected = 8;
    // password should be larger than 8 chars
    const output = passwordVerifier(password);
    expect(output[0].length).toBeGreaterThan(expected);
});

test("Verify Password: != null", function() {
    const password = 'Passw0rd!';
    const expected = null;
    // password should not be null
    const output = passwordVerifier(password);
    expect(output).not.toBeNull();
});

test("Verify Password: *[A-Z]", function() {
    const password = 'Passw0rd';
    const expected = /[A-Z]/g;
    // password should have one uppercase letter at least
    expect(password).toMatch(expected);
});

test("Verify Password: *[a-z]", function() {
    const password = 'Passw0rd';
    const expected = /[a-z]/g;
    // password should have one lowercase letter at least
    expect(password).toMatch(expected);
});

test("Verify Password: [0-9]", function() {
    const password = 'Passw0rd';
    const expected = /[0-9]/;
    // password should have one number at least
    expect(password).toMatch(expected);
});

