//2. Use map() to create a new array containing the lengths of each name. 
let enames = ["rahul", "sonia", "priya", "modi"]
let enam=enames.map((enames)=>enames.length)
console.log(enam);
//using return
let ename=enames.map((enames)=>{
    return enames.length
})
console.log(ename);
//normal function
let enamee=enames.map(function(){
    console.log(enames.length);
})

