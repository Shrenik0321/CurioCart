import { CartItemsType } from "../types";
import baseAxios from "../utils/axios";

export async function addOrder(cartItemsList: CartItemsType[]) {
  try {
    let totalOrderCost = 0;
    cartItemsList.map((item: any) => {
      totalOrderCost = Math.round(
        totalOrderCost + item.itemPrice * item.quantity
      );
    });

    const orderRequest = {
      customerId: 1,
      items: cartItemsList,
      totalCost: totalOrderCost,
    };

    const response = await baseAxios.post(
      "/api/orders/add-order",
      orderRequest
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
