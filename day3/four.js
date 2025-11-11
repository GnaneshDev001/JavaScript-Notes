//create//
let emp={
    eid:101,
    ename:"rahul",
    salary:10000,
}
//read//
console.log(emp)
console.log(emp.eid)
console.log(emp.ename)
console.log(emp.salary)
//update//
emp.salary=20000;
emp.ename="gnana";
emp.eid=101;
emp.email="gnaneshmahi4@gmail.com"; //add new property
console.log(emp)
//delete//
delete emp.salary;
console.log(emp)



//duplicates are not allowed//
let emp1={
    eid:102,
    ename:"sonia",
    ename:"gnana",
}
console.log(emp1)


let specification={
    "fits":"Regular",
    "size":'S'
}

//read
console.log(specification)