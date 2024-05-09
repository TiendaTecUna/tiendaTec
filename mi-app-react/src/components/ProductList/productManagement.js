const getProducts = () => {
    return JSON.parse(localStorage.getItem('products')) || [];
  }
  
  export const addProduct = (product) => {
      let products = getProducts();
      product.id = products.length + 1; // Asegurar un ID único
      products.push(product);
      localStorage.setItem('products', JSON.stringify(products));
  };
  
  export const listProducts = () => {
      return getProducts();
  };
  
  export const updateProduct = (updatedProduct) => {
      let products = getProducts();
      const index = products.findIndex(p => p.id === updatedProduct.id);
      if (index !== -1) {
          products[index] = updatedProduct;
          localStorage.setItem('products', JSON.stringify(products));
      }
  };
  
  export const updateStock = (productId, newStock) => {
      let products = getProducts();
      const product = products.find(p => p.id === productId);
      if (product) {
          product.stock = newStock;
          localStorage.setItem('products', JSON.stringify(products));
      }
  };
  