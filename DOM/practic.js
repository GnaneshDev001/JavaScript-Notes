function add(){
    document.getElementById("one").style.backgroundColor="yellow"
}
function add1(){
    document.getElementById("two").style.backgroundColor="red"
}
function add2(){
    document.getElementsByTagName("button")[2].style.backgroundColor="aqua"
}
function add3(){
    document.getElementsByClassName("text")[0].style.backgroundColor="pink"
}
function add4(){
    document.querySelector(".text1").style.backgroundColor="green"
}
function add5(){

    let input= document.getElementById("text2")
   input.value=input.value.toUpperCase();
   input.style.backgroundColor="yellow";
}
function time(){
   let dt=new Date();
   console.log(dt)
   document.writeln(dt)
}
function date(){
   document.getElementById("date").innerHTML=Date().toLocaleString();
}
