class ProductManager {
    constructor() {
        this.products = []

    }
    static id = 0
    addProduct(title, description, price, thumbmail, code, stock) {
        ProductManager.id++
        this.products.push({ title, description, price, thumbmail, code, stock, id: ProductManager.id });
    }

    getProduct() {
        return this.products
    }

    getProductById(id) {
        if (!this.products.find((product) => product.id === id)) {
            return 'Not Found'
        } else {
            return this.products.find((product) => product.id === id)
        }
    }
}

const productos = new ProductManager();

console.log(productos.getProduct());

productos.addProduct('Remera', 'Rosa', 11000, 'img', 'aaaa1', 4)
productos.addProduct('Vestido', 'Azul', 13000, 'img2', 'bbbb2', 6)
productos.addProduct('Camisa', 'Verde', 16000, 'img3', 'cccc3', 8)

console.log(productos.getProduct());
console.log(productos.getProductById(1));
console.log(productos.getProductById(5));