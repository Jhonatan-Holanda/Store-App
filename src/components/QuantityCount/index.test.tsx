import { render, screen } from "@testing-library/react-native";
import { QuantityCount } from "."
import { ThemeProvider } from "styled-components/native";
import _default from "../../theme/default";

describe("Component: QuantityCount", () => {
  it("should render quantitycount component", () => {
    
    render(
      <ThemeProvider theme={_default}>
        <QuantityCount  
          sizeIcon={20}
          value={0}
          setQuantity={() => {}}
        />
     </ThemeProvider>
    )

    const loading = screen.getByTestId('quantity');
    expect(loading).toBeTruthy();
  })
})