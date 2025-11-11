//3. Use filter() to get names that start with the letter 's'.
//using return function
let enames = ["rahul", "sonia", "priya", "modi"] 
let enam=enames.filter((enames)=>{
   return enames.startsWith('s');
})
//implicit return
console.log(enam)
 let ename=enames.filter(enames=>enames.startsWith('s'))
 console.log(ename);
 