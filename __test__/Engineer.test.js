const Engineer = require('../lib/Engineer')

test("can assign a name to the engineer", ()=>{
    const testname = 'Josh';
    const e = new Engineer(testname);
    expect(e.getName()).toBe(testname);
})
test("can assign an email to the engineer", ()=>{
    const testemail = 'test@gmail.com';
    const e = new Engineer('Josh',testemail);
    expect(e.getEmail()).toBe(testemail);
})
test("can assign an id to the engineer", ()=>{
    const testid = 123;
    const e = new Engineer('Josh','test@gmail.com', testid);
    expect(e.getId()).toBe(testid);
})
test("can assign a github to the engineer", ()=>{
    const testgithub = 'Hogtown13';
    const e = new Engineer('Josh','test@gmail.com', 123, testgithub);
    expect(e.getGithub()).toBe(testgithub);
})