+
/*function run(){
    let cdt=new Date();
    console.log(cdt)
    document.writeln(cdt)
}*/

function  run(){
    let cdt=new Date();
    let ptag_Ref=document.getElementById("xyz")
    console.log(ptag_Ref)
    ptag_Ref.innerHTML=cdt
}  

/*function  run(){
document.getElementById('xyz').innerHTML=new Date().toLocaleString() // to print only date &time.
}*/