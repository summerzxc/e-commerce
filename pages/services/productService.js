// productService.js
import axios from "axios";

const productService = {
  getProducts: async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/products");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  getProductById: async (productId) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/products/${productId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      throw error;
    }
  },
};

export default productService;
