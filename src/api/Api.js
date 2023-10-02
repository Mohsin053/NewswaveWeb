import axiosClient from "../../axiosClient";

// admin login API
export const LoginApi = async (data) => {
  const response = await axiosClient.post("sign-in", data);
  return response.data;
};

// total users and new Users
export const TotalUsers = async () => {
  const response = await axiosClient.get("dashboard");
  return response.data;
};

// all users
export const AllUsers = async (page) => {
  const response = await axiosClient.get(`all-users?page=${page}`);
  return response.data;
};

// full user info
export const FullUserInfo = async (id) => {
  const response = await axiosClient.get(`fulluserinfo/${id}`);
  return response.data;
};

// all restaurants
export const AllRestaurants = async (page) => {
  const response = await axiosClient.get(`all-restaurants?page=${page}`);
  return response.data;
};

// search restaurants and users
export const Search = async (data) => {
  const response = await axiosClient.get(`search?name=${data}`);
  return response.data;
};
