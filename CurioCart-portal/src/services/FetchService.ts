import baseAxios from "../utils/axios";

export async function fetchAllItems() {
  try {
    const response = await baseAxios.get("/api/items/get-all-items");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
