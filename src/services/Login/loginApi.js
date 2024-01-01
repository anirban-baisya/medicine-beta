import axiosInstance from "../axiosInstance";

export const callLoginApi = async (payload) => {
  // console.log('callLoginApi------==',payload )
  const { data = {} } = await axiosInstance.post("/v1/user/admin/login" , payload); //if we dont recive any respons then it give rspons like this data = {}

  // console.log(data, "data --");
  return data;
};
