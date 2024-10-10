import ProductRepository from '../src/domain/repositories/product_repository.js';

const allProducts = ProductRepository.getAllProducts();
console.assert(allProducts.length > 0, 'Debe haber productos disponibles');

const product = ProductRepository.getProductById(1);
console.assert(product !== undefined, 'Debe encontrar un producto por su ID');
console.assert(product.name === 'Castañuela Tradicional', 'El nombre del producto debería ser Castañuela Tradicional');
