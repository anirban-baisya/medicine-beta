import axiosInstance from "../axiosInstance";


export const homeApi = async () => {

    // console.log('callRegisterApi------==',payload )

    const { data = {} } = await axiosInstance.get("/v1/sider/getAll"); //if we dont recive any respons then it give rspons like this data = {}

    console.log(data, "data RegisterApi --");
    return data;
};