function wish(){
    let eids=[11,20.23,'gnana',true,undefined,null]
    console.log(eids)
    console.log(eids[1])
    console.log(eids[3])
    console.log(eids[8])
    console.log(eids[6])
    eids[1]="mahi"
    console.log(eids)
    console.log(eids[1])
    delete eids[4]
    console.log(eids)
}
wish()

let emp=[{
    eid:102,
    name:"mahi",
    sal:32000,
}]
for(let employees of emp){
    console.log(employees.sal)
}
console.log(emp)
console.log(emp.name)
console.log(emp.sal)
 delete emp.eid
console.log(emp)

import fs from 'fs'
 let data= fs.readFile("abc.txt",'utf-8',(err,data)=>{
    if(err) throw err;
fs.writeFile("xyz.txt",data,(err,)=>{
    if (err) throw err;
})
})
 console.log("jadal");


