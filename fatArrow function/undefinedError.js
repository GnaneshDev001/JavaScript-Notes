//
function gret(){
    console.log(this);//this owns the global variable context   
}
gret(); //

let gret1=()=>{
console.log(this);//this  does not 
}
gret1();