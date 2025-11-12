let employees=[
    {eid:101,ename:"gananesh",gender:"Male"},
    {eid:102,ename:"Chandu",gender:"Male"},
    {eid:103,ename:"priya",gender:"Female"},
    {eid:104,ename:"sonia",gender:"Female"},
    {eid:105,ename:"sonia",gender:"Female"},
    {eid:105,ename:"Madhu",gender:"Male"},
]
//without filter method getting of employees gender= male
let female_employees=[]
for(let emp of employees){
    if(emp.gender==="Female"){
        female_employees.push(emp)
    }
}
console.log(female_employees);
///with filter method
let male_employees=employees.filter((emp)=>{
    return emp.gender==="Male"
})
console.log(male_employees);
//with filetr implicit return
let male_employee=employees.filter(emp=>emp.gender==="Male")
console.log(male_employee);
//if there are any duplicates follow fifo processes using find method
let employee=employees.find(emp=>emp.ename==="sonia")
console.log(employee);

