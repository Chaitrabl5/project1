import HttpClient from "./httpclient";
import UI from "./ui";

function getProducts(){
    HttpClient.get('http://localhost:8888/products').then(products =>UI.showProducts(products) )
    
}
document.addEventListener('DOMContentLoaded', getProducts)