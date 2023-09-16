import baseAxios from "../utils/axios";

export async function fetchAllItems(requestObject: {
  limit: number;
  skip: number;
}) {
  try {
    const response = await baseAxios.post(
      "/api/items/get-all-items",
      requestObject
    );
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
