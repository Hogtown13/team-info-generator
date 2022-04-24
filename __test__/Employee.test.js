const Employee = require('../lib/Employee')

test("Can Create a new Employee Object using Constructor", ()=>{
    const e = new Employee();
    expect(typeof(e)).toBe("object")
})
test("can assign a name to the employee", ()=>{
    const testname = 'Josh';
    const e = new Employee(testname);
    expect(e.getName()).toBe(testname);
})
test("can assign an email to the employee", ()=>{
    const testemail = 'test@gmail.com';
    const e = new Employee('Josh',testemail);
    expect(e.getEmail()).toBe(testemail);
})
test("can assign an id to the employee", ()=>{
    const testid= 123;
    const e = new Employee('Josh','test@gmail.com', testid);
    expect(e.getId()).toBe(testid);
})
test("Can Create a new Employee Object using Constructor", ()=>{
    const e = new Employee();
    expect(e.getRole()).toBe("Employee")
})