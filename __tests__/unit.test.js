// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('Check for valid phone number', () => {
    expect(functions.isPhoneNumber('323-975-0404')).toBe(true);
});

test('Check for valid phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
})

test('Check for invalid phone number', () => {
    expect(functions.isPhoneNumber('hi')).toBe(false);
})

test('Check for invalid phone number', () => {
    expect(functions.isPhoneNumber('anotherWrongInput')).toBe(false);
})



test('Check for valid email', () => {
    expect(functions.isEmail('jvsantan@ucsd.edu')).toBe(true);
});

test('Check for valid email', () => {
    expect(functions.isEmail('josevictorsantana@hotmail.com')).toBe(true);
});

test('Check for invalid email', () => {
    expect(functions.isEmail('whatever.com')).toBe(false);
});

test('Check for invalid email', () => {
    expect(functions.isEmail('whatever@hotmail')).toBe(false);
});



test('Check for valid password', () => {
    expect(functions.isStrongPassword('Welcome')).toBe(true);
});

test('Check for valid password', () => {
    expect(functions.isStrongPassword('TodayisMonday')).toBe(true);
});

test('Check for invalid password', () => {
    expect(functions.isStrongPassword('WeirdChars!@((())')).toBe(false);
});

test('Check for invalid password', () => {
    expect(functions.isStrongPassword('WaytoolongWaytoolongWaytoolongWaytoolong')).toBe(false);
});



test('Check for valid date', () => {
    expect(functions.isDate('11/15/2021')).toBe(true);
});

test('Check for valid date', () => {
    expect(functions.isDate('01/01/2021')).toBe(true);
});

test('Check for invalid date', () => {
    expect(functions.isDate('123/456/7890')).toBe(false);
});

test('Check for invalid date', () => {
    expect(functions.isDate('01/01/32021')).toBe(false);
});



test('Check for valid hex', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('Check for valid hex', () => {
    expect(functions.isHexColor('#1396be')).toBe(true);
});

test('Check for invalid hex', () => {
    expect(functions.isHexColor('#897231ASDF')).toBe(false);
});

test('Check for invalid hex', () => {
    expect(functions.isHexColor('##FFFFF')).toBe(false);
});