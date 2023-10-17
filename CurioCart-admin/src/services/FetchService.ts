import baseAxios from "../utils/axios";
import { AuthContextItems } from "../context/AuthContext";

export async function fetchAllItems(
  auth: AuthContextItems | null,
  requestObject: {
    limit: number;
    skip: number;
  }
) {
  try {
    const headers = {
      "Content-Type": "multipart/form-data",
      withCredentials: true,
      Authorization: `Bearer ${auth?.accessToken}`,
    };

    const response = await baseAxios.post(
      "/api/items/get-all-items",
      requestObject,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchAllItemCategories() {
  try {
    const headers = {
      "Content-Type": "multipart/form-data",
      withCredentials: true,
    };

    const response = await baseAxios.post(
      "/api/items/get-all-item-categories",
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
