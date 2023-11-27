import baseAxios from "../utils/axios";

export async function addItem(data: any) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await baseAxios.post("/api/items/add-item", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}
