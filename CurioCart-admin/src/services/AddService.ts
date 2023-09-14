import baseAxios from "../utils/axios";

export async function addItem(data: any) {
  try {
    const response = await baseAxios.post("/api/items/add-item", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
