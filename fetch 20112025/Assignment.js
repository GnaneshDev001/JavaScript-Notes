let display_products=()=>{
    fetch('https://dummyjson.com/products')
    .then(resp=>{ return resp.json()})
    .then((product_data)=>{
        let rows="";
        for(let product of product_data.products){
            rows=rows+`<tr>
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>${product.rating}</td>
        </tr>`
    }
    document.getElementById("tb-body").innerHTML=rows
})
.catch((err)=>{
    document.getElementById('tb-body').innerHTML= "No Data" 
})

}
display_products()