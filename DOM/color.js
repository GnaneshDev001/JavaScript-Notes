function ChangeColor1(){
    //    let ref=document.getElementById("one");console.log(ref);
    //    ref.innerHTML="gm";
 document.getElementById("one").style.backgroundColor="blue";
 }
function ChangeColor2(){
document.getElementById("two").style.backgroundColor="red";
}
function ChangeColor3(){
 document.getElementsByTagName("button")[2].style.backgroundColor="green";
}
function ChangeColor4(){
document.getElementsByClassName("four")[0]
  .style.backgroundColor="green";
}
function ChangeColor5(){
 document.querySelector(".five").style.backgroundColor="green";
}
function ChangeColor6(){
 document.getElementById("text1").style.backgroundColor="aqua";
}
function ChangeColor7(){
 let input= document.getElementById("text2")
   input.value=input.value.toUpperCase();
   input.style.backgroundColor="yellow";
   
}