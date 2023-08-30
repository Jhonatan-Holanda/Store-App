import { cartGetALL } from "./getProductsCarts"

describe('Storage: getProductsCarts', () => {
  it("should be return null when dont't have products in cart", async () => {
    const response = await cartGetALL();
    
    expect(response.length).toBe(0);
  })
})