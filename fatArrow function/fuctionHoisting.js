function wish(){
    console.log("Good Morning");
}
wish()

function wish(){
    console.log("Good Night");
}
wish()
//gn
//gn
//===========================================================
//using fat arrow function conflicts overriding function
var wish=()=>{
    console.log("GM"); //gm
}
wish()
var wish=()=>{
    console.log("GN");//gn
}
wish()