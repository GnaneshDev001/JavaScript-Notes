let emp={
    eid:101,
    ename:'Gnana',
}
console.log(emp.eid)
console.log(emp.ename)
console.log(emp.length)//undefined because length property is not applicable.
console.log(Object.keys(emp)) //print all the values in object
console.log(Object.values(emp)) //print all the keys and values
console.log(Object.keys(emp).length)//using keys we can print length of object
console.log(Object.keys(emp).length>0)//identifies true or not.



 if(Object.keys(emp).length>0){
    console.log("Not Empty")
 }
 else{
    console.log("Empty")
 }