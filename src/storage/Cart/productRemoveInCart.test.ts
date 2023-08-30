import { addProductInCart } from "./addProductCart";
import { cartGetALL } from "./getProductsCarts";
import { productRemoveInCart } from "./productRemoveInCart";

describe('Storage: productRemoveInCart', () => {
  it("should be remove product storaged.", async () => {
    const newProductInCart = [{
      productId: '2',
      quantity: 3
    }]

    await addProductInCart(newProductInCart[0].productId, newProductInCart[0].quantity);
    await productRemoveInCart(newProductInCart[0].productId)
    
    const response = await cartGetALL();
    expect(response.length).toBe(0);
  })
})