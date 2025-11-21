// function display_users(){
//     document.getElementById('tb-body').innerHTML="ga"
// }
// display_users()
var users;
async function  display_users(){
    users=await fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>{return resp.json()})
    .then((users)=>{return users})
    console.log(users);
    let rows="";
    for(let user of users){
        rows=rows+`<tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        </tr>`
    }
    document.getElementById('tb-body').innerHTML=rows
}
display_users()