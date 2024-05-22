import axios from "axios";

const categoryService = {
  getCategories: async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/categories");
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
};

export default categoryService;
