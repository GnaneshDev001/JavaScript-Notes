function data(){
    let malerows="";
    let femalerows="";
    let bigenderows="";
    for(let user of users){
        if(user.gender==="male"){
            malerows+=`<tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.gender}</td>
            </tr>`
        }
        else if(user.gender==="female"){
            femalerows+=`<tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.gender}</td>
            </tr>`
        }
        else{
            bigenderows+=`<tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.gender}</td>
            </tr>`
        }
    }
document.getElementById("one").innerHTML=malerows;
document.getElementById("two").innerHTML=femalerows;
document.getElementById("three").innerHTML=bigenderows;
}
// fetch('https://dummyjson.com/users')
//  .then((response) =>response.json())
//  .then((json)=>data(json.users))

fetch("https://dummyjson.com/users")
.then(res => res.json())
.then(json => { users = json.users;data();})