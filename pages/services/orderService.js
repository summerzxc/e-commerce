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

  getOrderItems: async () => {
    try {
      const response = await axiosInstance.get(`/orders/orderitems/`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching order items:", error);
      throw error;
    }
  },

  updateOrderItemQuantity: async (id, newQuantity) => {
    try {
      const response = await axiosInstance.put(`/orders/orderitems/${id}`, { quantity: newQuantity });
      return response.data;
    } catch (error) {
      console.error("Error updating order item quantity:", error);
      throw error;
    }
  },

  removeOrderItem: async (id) => {
    try {
      const response = await axiosInstance.delete(`/orders/orderitems/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error removing order item:", error);
      throw error;
    }
  },
};

export default orderService;
