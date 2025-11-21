// const display_Products = async () => {
//     const tb = document.querySelector("tbody");

//     try {
//         const resp = await fetch("https://dummyjson.com/products");
//         const data = await resp.json();

//         const rows = data.products.map(product => `
//             <tr>
//                 <td>${product.id}</td>
//                 <td>${product.title}</td>
//                 <td>${product.price}</td>
//                 <td>${product.rating}</td>

//             </tr>
//         `).join("");

//         tb.innerHTML = rows;

//     } catch (error) {
//         tb.innerHTML = "<tr><td colspan='4'>No Data</td></tr>";
//     }
// };

// display_Products();

let eids=[101,102,103,104]
let uids=[...eids] //spread operator == extract array elements and copy into new array.
console.log(uids)

let uid=eids.map((eid)=>{
    return eid
})
console.log(uid);
let pids=[]
for(i=0;i<=eids.length-1;i++){
    pids.push(eids[i])
}
console.log(pids);



