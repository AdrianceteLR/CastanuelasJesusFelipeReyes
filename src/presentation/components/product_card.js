import ProductRepository from '../../domain/repositories/product_repository.js';

function renderProductCard(product) {
    const productCard = document.createElement('div');
    productCard.id = 'product-card';

    const productImage = document.createElement('img');
    productImage.src = product.imageUrl;
    productCard.appendChild(productImage);

    const productName = document.createElement('h2');
    productName.textContent = product.name;
    productCard.appendChild(productName);

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    productCard.appendChild(productDescription);

    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price.toFixed(2)}`;
    productCard.appendChild(productPrice);

    const button = document.createElement('button');
    button.textContent = 'Ver detalles';
    button.onclick = () => {
        window.location.href = `/product_details.html?id=${product.id}`;
    };
    productCard.appendChild(button);

    document.querySelector('#product-section').appendChild(productCard);
}

document.addEventListener('DOMContentLoaded', () => {
    const products = ProductRepository.getAllProducts();
    products.forEach(renderProductCard);
});
