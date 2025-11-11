//21. Write a program to check if a number is divisible by 7 or not?
//divisible by 7
let number=[14,7,21,28,99,49,42,70,56]
for(let num of number){
    if(num%7==0){
        console.log(num)
    }
}
num=88
if(num%7==0){
    console.log(" divisible by 7")
}else{
    console.log("not divisible by 7")
} 

i=0;
while (i<=number.length-1){
    if(number[i]%7==0){
     console.log(number[i]);
    }
    i++;
}