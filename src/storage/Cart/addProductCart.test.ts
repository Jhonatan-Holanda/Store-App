import { addProductInCart } from './addProductCart';
import { cartGetALL } from './getProductsCarts';

describe('Storage: addProductCart', () => {
  it("should be return products storaged.", async () => {
    const newProductInCart = [{
      productId: '2',
      quantity: 3
    }]

    await addProductInCart(newProductInCart[0].productId, newProductInCart[0].quantity);
    const response = await cartGetALL();
    
    expect(response).toEqual(newProductInCart);
  })
})