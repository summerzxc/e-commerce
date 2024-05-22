// orderService.js
import axiosInstance from "@/utils/axiosInstance";

const orderService = {
  getOrders: async () => {
    try {
      const response = await axiosInstance.get("/orders");
      return response.data;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error;
    }
  },

  getTotalSales: async () => {
    try {
      const response = await axiosInstance.get("/orders/get/totalsales");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching total sales:", error);
      throw error;
    }
  },
};

export default orderService;
