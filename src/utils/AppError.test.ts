import { AppError } from "./AppError"


describe("Screen: Detail Product", () => {
  it("should render screen detail", async () => {
    const message = "aqui"

    const error = new AppError(message)

    expect(error.message).toEqual(message);
  })
})