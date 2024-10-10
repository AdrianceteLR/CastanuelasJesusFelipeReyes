import ProductRepository from '../../domain/repositories/product_repository.js';

function renderProductDetails(product) {
    const productDetails = document.querySelector('#product-details');

    const productImage = document.createElement('img');
    productImage.src = product.imageUrl;
    productDetails.appendChild(productImage);

    const productName = document.createElement('h2');
    productName.textContent = product.name;
    productDetails.appendChild(productName);

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    productDetails.appendChild(productDescription);

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price.toFixed(2)}`;
    productDetails.appendChild(productPrice);
}

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'), 10);
    const product = ProductRepository.getProductById(productId);
    renderProductDetails(product);
});
