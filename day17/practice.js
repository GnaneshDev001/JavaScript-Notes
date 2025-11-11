let enames=["gnana",'chandu',"madhu","arjun"]
let uppercase=[]
for(let ename of enames){
    uppercase.push(ename.toUpperCase())
}
console.log(uppercase);
//for each
let ename=["gnana",'chandu',"madhu","arjun"]
let enam=ename.forEach((enam)=>{
    console.log(enam);
//let enam=ename.forEach((enam)=>{enam.toUpperCase();
})
let ena=ename.forEach((enames)=>{return enames.toUpperCase()})
console.log(ena);//undefined
//map()
let names=enames.map((enames)=>{
   return enames.toUpperCase()
})
console.log(names);
let namess=enames.filter((enames)=>{
    enames.length>=6
})
console.log(namess);


//filter
let numbers=[1,2,4,6,7,8,0]
let num=numbers.filter((numbers)=>{
    return numbers%2===0
})
console.log(num);
//find
let number=[1,2,4,6,7,8,0]
let nu=number.find((number)=>number===6)
console.log(nu);


