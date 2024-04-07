import axiosInstance from "../axiosInstance";

export const getAllOrderListApi = async (uId) => {
  // console.log('getAllOrderListApi------==',payload )
  const { data = {} } = await axiosInstance.get(`/v1/user/order/get/${uId}`); //if we dont recive any respons then it give rspons like this data = {}

  // console.log(data, "data --");
  return data;
};
