let enames=['gnanesh','harsih','chandu','madhu']
console.log(enames.indexOf('gnanesh')); //// return the index value of specified element.
console.log(enames.indexOf('mahesh')); ////  returns the negative index value if element is not there.

let eids=[11,1,2,13,14]
let ids=[16,17]
eid=eids.concat(ids)// to combine the two list elements.
console.log(eid);
////Slice
let number=[11,22,33,44,55,66]
let nums=number.slice(1,3)// return the value of index[1] and  before of index[3]
console.log(nums);
////Splice
let arr1=["gnana","madhu","guru","chandu","arjun"]
arr1.splice(1,3) //removes elements from index 1 t0 3(1,3)
console.log(arr1);
let arr=["gnana","madhu","guru","chandu","arjun"]
let arr2=arr.splice(1,3)
console.log(arr2);// print the  values of index(1 t0 2)
//for each
let data=[1,2,3]
data.forEach(Element =>(console.log(Element*3)))//print each element multiplied by 2, based on operation performing it depends


 




//how to verify given value is array
let product={}
let users=[]

console.log(Array.isArray(users))
console.log(Array.isArray(product))
if(users==Array){
    console.log("Array");
    
}else{
    console.log("not array")
}