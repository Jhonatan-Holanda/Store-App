import { mockProductsAPIResponse } from '../../__tests__/mocks/api/mockProductsAPIResponse';
import { api } from './api';
import { getAllProducts, getProductByID } from './products';

describe("API: getAllProducts", () => {
  it("should return all products", async () => {

    const data = mockProductsAPIResponse;

    jest.spyOn(api, "get").mockResolvedValue({ data });
    const products = await getAllProducts();

    expect(products.length).toBeGreaterThan(0);
  })

  it("should return detail product", async () => {

    const data = mockProductsAPIResponse;

    jest.spyOn(api, "get").mockResolvedValue({ data });
    const products = await getProductByID('18');

    expect(products.length).toBeGreaterThan(0);
  })
})
