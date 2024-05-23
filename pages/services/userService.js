import axiosInstance from "@/utils/axiosInstance";

const userService = {
  getUsers: async () => {
    try {
      const response = await axiosInstance.get("/users");
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },

  removeUser: async (userId) => {
    try {
      const response = await axiosInstance.delete(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error removing user:", error);
      throw error;
    }
  },
};

export default userService;
