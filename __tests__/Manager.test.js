const Manager = require('../lib/Manager.js');

test('creates a new manager', () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe('object');
});

test('gets manager name ', () => {
    const manager = new Manager('Pugh');

    expect(manager.name).toBe('Pugh');

});

test('gets manager id ', () => {
    const testId = 123;
    const manager = new Manager('Pugh', testId);

    expect(manager.id).toBe(testId);

});

test('gets manager email ', () => {
    const testEmail = 'pugh@example.com';
    const manager = new Manager('Pugh', 123, testEmail);

    expect(manager.email).toBe(testEmail)
});

test('getName()', () => {
    const manager = new Manager('Pugh');

    expect(manager.name).toBe('Pugh');
});

test('getId()', () => {
    const testId = 123;
    const manager = new Manager('Pugh', testId );

    expect(manager.getId()).toBe(testId);
});

test('getEmail()', () => {
    const testEmail = 'pugh@example.com';
    const manager = new Manager('Pugh', 123, testEmail);

    expect(manager.getEmail()).toBe(testEmail);
});

test('getRole()', () => {
    const testRole = 'Manager';
    const manager = new Manager('Pugh', 123, 'pugh@example.com');

    expect(manager.getRole()).toBe(testRole);
});