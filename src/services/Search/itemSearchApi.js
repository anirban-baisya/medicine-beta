import axiosInstance from "../axiosInstance";

export const findItemsBySearchQueryApi = async (payload) => {
  console.log('findItemsBySearchQueryApi------==',payload )
//   const { data = {} } = await axiosInstance.get(`/v1/admin/item/getAll/?categoryId=${categoryId}`); //if we dont recive any respons then it give rspons like this data = {}
  const { data = {} } = await axiosInstance.get(`v1/admin/item/search?page=${payload.page}&itemName=${payload.searchQuery}`); //if we dont recive any respons then it give rspons like this data = {}

  // console.log(data, "data --");
  return data;
};
