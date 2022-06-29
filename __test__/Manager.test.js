const Manager = require('../lib/Manager')


test("Can Create a new Manager Object using Constructor", ()=>{
    const e = new Manager();
    expect(e.getRole()).toBe('Manager')
})