let a=[101,102,103,104]
let b=[...a]
console.log(b);
//without spread operator.
let numbers=[6,7,8,9,0]
//create a new array baesd onexisting array:
let new_eids=[]
for(let num of numbers){
    new_eids.push(num)
}
console.log(new_eids);
//merge Arrays
let ab=[1,2,3,4,5]
let c=[6,7,8,9]
let abc=[...ab,...c]
console.log(abc);
//note: Array allowed duplicates.
//extending array elements
let users=[...abc,50,60,70]
console.log(users);


///object not allowed duplicates. {}
let emp={'eid':101, 'ename':'gnana','email':'gnana@gmail.com'}
let details={"email":"gnana@gmail.com",'loc':'banglore'}
let emp_details={...emp,...details}
console.log(emp_details);
//exetnding the object elements
let cmd={...emp_details,'esal':43000}
console.log(cmd);


