let employees=[
    {"eid":101,"name":"gnana"},
    {"eid":102,"name":"madhu"},
    {"eid":103,"name":"chandu"}
]
let emp=employees.find((emp)=>{ // to verify element is present or not.
    return emp.eid===102
})
console.log(emp);
let empl=employees.find(empl=>empl.eid===103)
console.log(empl);