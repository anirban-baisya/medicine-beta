import axiosInstance from "../axiosInstance";

export const callRegisterApi = async (payload) => {
  // console.log('callRegisterApi------==',payload )

  const { data = {} } = await axiosInstance.post("/v1/user/create" , payload); //if we dont recive any respons then it give rspons like this data = {}
 
  console.log(data, "data RegisterApi --");
  return data;
};
