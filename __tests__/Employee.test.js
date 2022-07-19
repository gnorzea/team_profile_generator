const Employee = require ("../lib/Employee.js");


test("creates a new employee", () => {
const employee = new Employee (); 

expect(employee.name).toBe(nameInput);
expect(employee.id).toBe(idInput);
expect(employee.email).toBe(emailInput);

});

test("gets employee neame", () => {
    
})