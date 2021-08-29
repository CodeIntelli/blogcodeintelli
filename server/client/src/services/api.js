import axios from "axios";

const url = "";

export const createPost = async (post) => {
  try {
    const data = await axios.post(`${url}/createPost`, post);
    return data;
  } catch (error) {
    console.log("error while calling api API", error);
  }
};

export const readPost = async (param) => {
  try {
    let respond = await axios.get(`${url}/posts${param}`);
    return respond.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const readPostById = async (id) => {
  try {
    let respond = await axios.get(`${url}/posts/${id}`);
    return respond.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const updatePost = async (id, post) => {
  try {
    let respond = await axios.post(`${url}/updateposts/${id}`, post);
    return respond.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const deletePost = async (id) => {
  try {
    let respond = await axios.delete(`${url}/posts/${id}`);
    return respond.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
    console.log("error", error);
  }
};

export const newComment = (data) => {
  try {
    // console.log("data present", data);
    // console.log("data send");
    const respond = axios
      .post(`${url}/comment/new`, data)
      .then(() => {
        console.log("respond return");
      })
      .catch((err) => {
        console.log("data");
      });

    return respond;
  } catch (error) {
    console.log("error", error);
  }
};

export const getComment = async (id) => {
  try {
    // console.log("present in getcomment");
    // console.log("api id", id);
    let respond = await axios.get(`${url}/comment/${id}`);
    // console.log(respond.data);
    return respond.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteComment = async (id) => {
  try {
    // console.log("delete id", id);
    let respond = await axios.delete(`${url}/comment/${id}`);
    return respond.data;
  } catch (error) {
    console.log("error", error);
  }
};
