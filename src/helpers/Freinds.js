import { axiosAPI } from "../api/Axios";

export const searchForFreind = async (freind_name, token) => {
  try {
    if (freind_name == "") {
      const data = await allFreind(token);
      return data;
    }
    const res = await axiosAPI.get(`search/${freind_name}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    return await allFreind(token);
  }
};


export const addFreind = async (token,user_id,freind_id) => {

}

export const allFreind = async (token) => {
  try {
    const res = await axiosAPI.get("freinds", {
      headers: {
        Authorization: "Bearer " + token,
      },
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    // return error;
  }
};
