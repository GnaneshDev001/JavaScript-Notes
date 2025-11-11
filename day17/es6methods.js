//for each
let enames=["gnana",'chandu',"madhu","arjun"]
let emp=[]
enames.forEach((emp)=>{console.log(emp)//for each iterate array & execute provided function at every time of the element
})
enames.forEach(function(){
    console.log("gm");
    
})
let unames=enames.forEach((enames)=>{return enames.toUpperCase()})//gives undefined when written function is written.
console.log(unames);
//using map
let new_enames=enames.map((enames)=>{
    return enames.toUpperCase()})
    console.log(new_enames);
//wap to print all even numbers ina new array
//without filter method
let numbers=[11,7,8,232,1055,41,8,12]
let even_no=[]
for(let num of numbers){
    if(num%2===0){
        even_no.push(num)

    }
}
console.log(even_no);
/// using filter method:
let evens=numbers.filter((num)=>{
    return num%2===0
})
console.log(evens);
//with filter and implicit return
let even=numbers.filter(num=>num%2===0)
console.log(even);
 

