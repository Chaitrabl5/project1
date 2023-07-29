class UI{
    constructor(){
    this.products= document.getElementById('products')
    }
showproducts(products){
    let output='';
    products.forEach(product=>{
        output+=`
        <div class="card mb-3">
<div class="card-body">
<h4 class="card-title">${product.productName}</h4>
<p class="card-text">${product.price}</p>
<a href="#" class="edit card-link" data-id="${product.productId}">
<i class="fa fa-pencil"></i>
</a>
<a href="#" class="delete card-link" data-id="${product.productId}">
<i class="fa fa-remove"></i>
</a>
</div>
</div>
        `
    })
    this.products.innerHTML=output;
}
}
export default new UI()