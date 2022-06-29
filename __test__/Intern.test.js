const Intern = require('../lib/Intern')


test("can assign a name to the intern", ()=>{
    const testname = 'Josh';
    const e = new Intern(testname);
    expect(e.getName()).toBe(testname);
})
test("can assign an id to the intern", ()=>{
    const testid = 123;
    const e = new Intern('Josh', testid);
    expect(e.getId()).toBe(testid);
})
test("can assign an email to the intern", ()=>{
    const testemail = 'test@gmail.com';
    const e = new Intern('Josh', 123, testemail);
    expect(e.getEmail()).toBe(testemail);
})
test("can assign a school to the intern", ()=>{
    const testschool = 'UNCC';
    const e = new Intern('Josh','test@gmail.com', 123, testschool);
    expect(e.getSchool()).toBe(testschool);
})