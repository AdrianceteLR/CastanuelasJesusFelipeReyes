import Product from '../../domain/models/product.js';

class ProductMapper {
    static toDomain(productDto) {
        return new Product(
            productDto.id,
            productDto.name,
            productDto.description,
            productDto.price,
            productDto.imageUrl
        );
    }
}

export default ProductMapper;
