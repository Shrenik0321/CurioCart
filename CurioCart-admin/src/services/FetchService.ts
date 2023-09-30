import baseAxios from "../utils/axios";

export async function fetchAllItems(
  axiosPrivate: any,
  requestObject: {
    limit: number;
    skip: number;
  }
) {
  try {
    const response = await axiosPrivate.post(
      "/api/items/get-all-items",
      requestObject
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchAllItemCategories() {
  try {
    const response = await baseAxios.post("/api/items/get-all-item-categories");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
