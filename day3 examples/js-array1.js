//java script array object []//
let gnana=[11,22,20.5,true,'rahul',undefined,{}]
function wish(){
console.log(gnana)
//read//
console.log(gnana[9])
console.log(gnana[7])
console.log(gnana[5])
console.log(gnana[2])
console.log(gnana[1])
console.log(gnana[-11])
wish()
}
//update//
//gnana[4]='mahith'
gnana[1]='sohith'
console.log(gnana)
//delete//
delete gnana[6]
console.log(gnana)
// adding new index element & shifting to first place//
gnana.push('godrej')
gnana.unshift('NTR')
console.log(gnana)

//java script object {}//
class test{

}
let mahi={
    "id":11,
    "name":"mahesh",
    "salary":43000,
    "loc":"banglore",
}
console.log(mahi)

//read//
console.log(mahi.id)
console.log(mahi.name)
console.log(mahi.loc)
console.log(mahi.salary)
//update//
mahi.id=102,
mahi.loc="banglore",
mahi.salary=23000
console.log(mahi)
//delete//
delete mahi.loc
console.log(mahi) 


