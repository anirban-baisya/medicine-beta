import axiosInstance from "../../axiosInstance";

export const getOrderDetailsByoIdApi = async (oId) => {
  const { data = {} } = await axiosInstance.get(`/v1/user/order/viewOrderDetails?orderId=${oId}`); //if we dont recive any respons then it give rspons like this data = {}

  return data;
};
