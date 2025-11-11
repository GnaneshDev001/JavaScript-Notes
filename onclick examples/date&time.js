function display(){
    //alert("gm")
    let dt=new Date();
    console.log(dt)
    document.writeln(dt)
}

function run(){
    let dt=new Date()
    ptag_ref=document.getElementById("xyz")
    console.log(ptag_ref)
    ptag_ref.innerHTML=dt

}
function vod(){
    document.getElementById("xyz").innerHTML=new Date().toLocaleDateString()
}