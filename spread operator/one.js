let numbers=[6,7,8,8,8,9,11]
numbers=new Set([...numbers]) //...=spread operator.
console.log(numbers)

let enames=['gnana','rahul','rahul','madhu','chandu']
enames=[...new Set(enames)]
console.log(enames);
