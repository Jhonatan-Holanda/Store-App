import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from '@react-navigation/native';
import { render, screen, waitFor } from "@testing-library/react-native";

import { Cart } from "."
import _default from "../../theme/default";

describe("Screen: Cart", () => {
  it("should render screen cart", async () => {
    
    render(
      <ThemeProvider theme={_default}>
        <NavigationContainer>
          <Cart />
        </NavigationContainer>
     </ThemeProvider>
    )

    const tela = await waitFor(() => screen.findByTestId("screenCart"));
    expect(tela).toBeTruthy();
  })
})