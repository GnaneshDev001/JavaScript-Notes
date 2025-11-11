function add(){
    console.log("gm")
}
add()

let add1=(a,b)=>{
    console.log(a+b)
}
add1(2,3)

function dis(a,b){
    return a+b;
}
let n=dis(2,3)
console.log(n);

let dis1=(a,b)=>{
    return a+b
}
let m=dis1(5,6)
console.log(m);
//implicit
let display=(a,b)=>a+b+5
let mn=display(2,3)
console.log(mn);

let func=(a,b)=> a+b
let y=func("gnan","esh")
console.log(y);

let na=a=>a
let mm=na("gnanesh")
console.log(mm);
let ntr=(fname,lname)=>{
    return fname+lname;
}
let SSMB=ntr("sohith"," mahith")
console.log(SSMB);

let employees=[
    {eid:101,"name":"gnana",sal:43000},
    {eid:104,"name":"sohi",sal:42000},
    {eid:103,"name":"mahi",sal:44000},
]
console.log("Employee eid:",employees[0].eid)
console.log("Employee name:",employees[2].name)
console.log("Employee salary:",employees[2].sal)

let emp={
    "eid":101,
    "name":"gnana",
    "sal":44000
}
console.log(emp.eid)
//console.log(emp.length) undefined
console.log(Object.keys(emp).length);
console.log(Object(emp));
console.log(Object.values(emp));
