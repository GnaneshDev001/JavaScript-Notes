//24. Write a program to check if a number is 3-digit numbers or not? 
 let number=1114
function lane(){
    if(number>100 && number<1000){
        console.log("Given Number is a 3-digit Number")
    }else{
        console.log("Given number is not a 3-digit Number")
    }
}lane()
//for loop

number=[444,7,6,788]
for(let num of number){
    if(num>100&&num<1000){
        console.log(num,"is"," a 3-digit Number")
    }else{

         console.log(num,"is","not a 3-digit Number")
    }
}   
//while loop
i=0;
while(i<=number.length-1){
    if(number[i]>100&&number[i]<1000){
        console.log(number[i],"is a 3 digit Number")
    }else{
        console.log(number[i],"is not a 3-digit Number")
    }
    i++
}

