//4. Use find() to get the first name that has more than 5 characters. 
let enames = ["rahul", "sonia", "priya", "modi"]
let ename=enames.find((enames)=>{
     return enames.length>=5
})
console.log(ename);
let enamee=enames.find(enames=>enames.length>=5)
console.log(enamee);

