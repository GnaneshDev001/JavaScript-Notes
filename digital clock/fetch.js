function display(products){
    let rows="";
    for(let pr of products){
        rows=rows+`<tr>
        <td>${pr.id}</td>
        <td>${pr.title}</td>
        <td>${pr.price}</td>
        </tr>`
    }
    document.getElementById("body").innerHTML=rows;
}
   


// fetch('https://dummyjson.com/products')
// .then((response) => response.json())
// .then((json) => display(json.products));

// fetch("https://dummyjson.com/products")
// .then(res => res.json())
// .then(json => { products = json.products;display(products);})