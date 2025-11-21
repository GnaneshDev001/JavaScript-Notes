let employees=[{eid:101,ename:"rahul",esal:42000},
                {eid:102,ename:"sonia",esal:423000}]

let createEmployees=(emp)=>{
    setTimeout(()=>{
        employees.push(emp)
    },4000)
}
let getEmployees=()=>{
    setTimeout(()=>{
        let rows=""
        for(let emp of employees){
            rows=rows+`<tr>
            <td>${emp.eid}</td>
            <td>${emp.ename}</td>
            <td>${emp.esal}</td>
            </tr>`
        }
document.getElementById("tbody").innerHTML=rows
    },1000)
}

createEmployees({eid:103,ename:"priya",esal:50000})
getEmployees()
// get employees() will execute fisrt because of less timeout.