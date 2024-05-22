import axiosInstance from "@/utils/axiosInstance";

const userService = {
  getUsers: async () => {
    try {
      const response = await axiosInstance.get("/users");
      return response.data;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error;
    }
  },
};

export default userService;
