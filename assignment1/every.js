//Use every() to check if all names have more than 3 characters.
let enames = ["rahul", "sonia", "priya", "modi"]
let ename=enames.every((enames)=>{
    return enames.length>3
})
console.log(ename);

let enam=enames.every(enames=>enames.length>3)
console.log(enam);
