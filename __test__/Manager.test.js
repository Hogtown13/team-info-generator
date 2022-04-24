test("Can Create a new Employee Object using Constructor", ()=>{
    const e = new Employee();
    expect(e.getRole()).toBe("Employee")
})