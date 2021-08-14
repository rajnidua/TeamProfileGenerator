
const Employee = require('../lib/Employee.js');

    
describe("Employee class",() =>{
    describe("Initialization",()=>{
        it("Initialization of employee instance",() =>{
            
            const employee  = new Employee('xyz',3,'xyz@email.com');
            
            expect(typeof(employee)).toBe("object");
        });
    })
describe("test name from constructor argument",()=>{
    it("should return the employee name",() =>{
        const name = "xyz";
        const employee  = new Employee('xyz',3,'xyz@email.com');
        //const obj1 = obj.getName(2);
        expect(employee.name).toBe(name);
    });
})
describe("test id from constructor argument",()=>{
    it("should return the employee name",() =>{
        const id = 3;
        const employee  = new Employee('xyz',3,'xyz@email.com');
        //const obj1 = obj.getName(2);
        expect(employee.id).toBe(id);
    });
})

describe("test email from constructor argument",()=>{
    it("should return the employee email",() =>{
        const email = "xyz@email.com";
        const employee  = new Employee('xyz',3,'xyz@email.com');
        //const obj1 = obj.getName(2);
        expect(employee.email).toBe(email);
    });
})
describe("getName method",()=>{
    it("should return the employee name",() =>{
        const name = "xyz";
        const employee  = new Employee('xyz',3,'xyz@email.com');
        //const obj1 = obj.getName(2);
        expect(employee.getName()).toBe(name);
    });
})
describe("getId method",()=>{
    it("should return the employee id",() =>{
        const id = 3;
        const employee  = new Employee('xyz',3,'xyz@email.com');
        //const obj1 = obj.getName(2);
        expect(employee.getId()).toBe(id);
    });
});


})


