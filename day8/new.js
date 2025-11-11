var a=20
var b=30
console.log(a)

function add(a,b){
    let c=100;
    return a+b+c
}

let r1=add(1,2)
console.log(r1)

let r2=add(100,20)
console.log(r2)


function calc(){
        let numbers=[10,20,25,30,40]
        for( let num of numbers){
            if(num%2!==0){
                break;
                return
            }
            console.log(num)
        }
    console.log("GM")
}
calc()