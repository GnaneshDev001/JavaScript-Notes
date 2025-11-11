function add(){
    alert("add")
}
function dis(){
    let dt=new Date()
    console.log(dt)
    document.writeln(dt)
}
function display(){
    let dt=new Date()
    ptag_ref=document.getElementById("xyz")
    console.log(ptag_ref)
    ptag_ref.innerHTML=dt
}
function run(){
    document.getElementById("xyz").innerHTML=new Date().toLocaleString()
}
function vod(){
    let btn=document.getElementById("xyz")
    console.log(btn);
    btn.style.backgroundColor="yellow"
    btn.innerHTML="gnana"
    

}