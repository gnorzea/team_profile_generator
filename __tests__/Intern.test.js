const Intern = require("../lib/Intern");

test('role returns Intern', () => {
    const testRole = 'Intern';
    const intern = new Intern('Pugh', 777, 'pugh@example.com');

    expect(intern.role).toBe(testRole);
});

test('getRole() returns Intern', () => {
    const testRole = 'Intern';
    const intern = new Intern('Pugh', 777, 'pugh@example');

    expect(intern.getRole()).toBe(testRole);
});

test('can set school name', () => {
    const testSchool = 'UM'
    const intern = new Intern('Pugh', 777, 'pugh@example', testSchool);

    expect(intern.school).toBe(testSchool);
});

test('getSchool()', () => {
    const testSchool = 'Intern';
    const intern = new Intern('Pugh', 777, 'pugh@example', testSchool);

    expect(intern.getSchool()).toBe(testSchool);

});