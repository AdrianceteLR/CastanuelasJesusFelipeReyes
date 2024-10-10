import productsData from '../../data/products.json';
import ProductMapper from '../../data/mappers/product_mapper.js';

class ProductRepository {
    constructor() {
        this.products = productsData.map(ProductMapper.toDomain);
    }

    getAllProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products.find(product => product.id === id);
    }
}

export default new ProductRepository();
