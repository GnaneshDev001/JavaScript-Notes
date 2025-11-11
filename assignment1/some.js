//6. Use some() to check if any name starts with 'r'. 
//return function
let enames = ["rahul", "sonia", "priya", "modi"]
let ename=enames.some((enames)=>{ // gives of boolean function of true if element is start with "r"
     return enames.startsWith("r")// otherwise false
})
console.log(ename);

let enamee=enames.some((enames)=>enames.startsWith("r"))
console.log(enamee);
