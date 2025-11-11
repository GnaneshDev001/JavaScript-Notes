function add(a,b){
    console.log(a+b);
}
add(5,6);
add("gnan","esh")
//normal return function
function add1(a,b){
    return a+b;
}
let m=add1(10,20)
console.log(m);
//fatarrow
let add2=(a,b)=>{
    console.log(a+b)
}
add2(11,22)
//fat arrow with return
let add3=(a,b)=>{
    return a+b
}
let result=(add3(1,2))
console.log(result);
//fat arrow with implicit return
let pookie=(a,b)=>a+b
let dis=pookie("gnan","esh")
console.log(dis);
//fat arrow with implicit return of single parameter
let pookies=lighter=>lighter+" fire"
let wish=pookies("gnanesh")
console.log(wish)



