let sum=(a,b)=>{
    return a+b
}
let multi=(a,b)=>{
    return a*b
}
let calc=(a,b,callback)=>{
    return callback(a,b)
}
let r1=calc(10,20,sum)
let r2=calc(10,20,multi)
console.log(r1);
console.log(r2);

function add(a,b){
    return a+b
}
function mul(a,b){
    return a*b
}
function cal(a,b,callback){
    return callback(a,b)
}
r1=calc(10,20,add)
r2=calc(10,20,mul)
console.log(r1);
console.log(r2);
