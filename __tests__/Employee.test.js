const Employee = require ("../lib/Employee.js");


test("creates a new employee", () => {
const employee = new Employee (); 

expect(typeof(employee)).toBe('object');

});

test("gets employee name", () => {
    const employee = new Employee('Pugh');

    expect(employee.name).toBe('Pugh');

});

test('gets employee id ', () => {
    const testId = 777;
    const employee = new Employee('Pugh', testId);

    expect(employee.id).toBe(testId);

});

test('gets employee email ', () => {
    const testEmail = 'Pugh@example.com';
    const employee = new Employee('Pugh', 777, testEmail);

    expect(employee.email).toBe(testEmail)
});

test('getName()', () => {
    const employee = new Employee('Pugh');

    expect(employee.name).toBe('Pugh');
});

test('getId()', () => {
    const testId = 777;
    const employee = new Employee('Pugh', testId );

    expect(employee.getId()).toBe(testId)
});

test('getEmail()', () => {
    const testEmail = 'Pugh@example.com';
    const employee = new Employee('Pugh', 777, testEmail);

    expect(employee.getEmail()).toBe(testEmail)
});

test('getRole()', () => {
    const testRole = 'Employee';
    const employee = new Employee('Pugh', 777, 'Pugh@example.com');

    expect(employee.getRole()).toBe(testRole)
});