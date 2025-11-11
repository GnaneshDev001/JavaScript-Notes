//22. Write a program to check if a number is multiple of 3 or not? 
//multiple of 3 or not
let users=[3,6,9,12,14,15,18,21,27]
//for loop//
for (let user of users){
    if(user%3===0){
        console.log(user)
    }
}
//if else//
let n=20;
if(n%3===0){
    console.log("multiple 0f 3")
}
else {
    console.log("not multiple of 3")
}

//while loop//
i=0;
while (i<=users.length-1){
    if(users[i]%3===0){
        console.log(users[i]);
    }
    i++
}