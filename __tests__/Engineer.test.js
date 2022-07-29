const Engineer = require ("../lib/Engineer.js");


test("creates a new engineer", () => {
const engineer = new Engineer (); 

expect(typeof(engineer)).toBe('object');

});

test("gets engineer name", () => {
    const engineer = new Engineer('Pugh');

    expect(engineer.name).toBe('Pugh');

});

test('gets engineer id ', () => {
    const testId = 777;
    const engineer = new Engineer('Pugh', testId);

    expect(engineer.id).toBe(testId);

});

test('gets engineer email ', () => {
    const testEmail = 'Pugh@example.com';
    const engineer = new Engineer('Pugh', 777, testEmail);

    expect(engineer.email).toBe(testEmail)
});

test('getName()', () => {
    const engineer = new Engineer('Pugh');

    expect(engineer.name).toBe('Pugh');
});

test('getId()', () => {
    const testId = 777;
    const engineer = new Engineer('Pugh', testId );

    expect(engineer.getId()).toBe(testId)
});

test('getEmail()', () => {
    const testEmail = 'Pugh@example.com';
    const engineer = new Engineer('Pugh', 777, testEmail);

    expect(engineer.getEmail()).toBe(testEmail)
});

test('getRole()', () => {
    const testRole = 'Engineer';
    const engineer = new Engineer('Pugh', 777, 'Pugh@example.com');

    expect(engineer.getRole()).toBe(testRole)
});
test('create github for Engineer', () => {
    const testHub = 'test'
    const engineer = new Engineer('Pugh', 777, 'pugh@example.com', testHub);

    expect(engineer.github).toBe(testHub);
});

test('create getGithub() for Engineer', () => {
    const testHub = 'test'
    const engineer = new Engineer('Pugh', 777, 'pugh@example.com', testHub);

    expect(engineer.getGithub()).toBe(testHub);
});