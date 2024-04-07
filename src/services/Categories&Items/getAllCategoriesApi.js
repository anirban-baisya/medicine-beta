import axiosInstance from "../axiosInstance";

export const getAllCategoriesApi = async () => {
  // console.log('getAllCategoriesApi------==',payload )
  const { data = {} } = await axiosInstance.get(`/v1/admin/item/getAllCategory`); //if we dont recive any respons then it give rspons like this data = {}

  // console.log(data, "data --");
  return data;
};
