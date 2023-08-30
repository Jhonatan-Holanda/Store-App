import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from '@react-navigation/native';
import { render, screen, waitFor } from "@testing-library/react-native";

import { Products } from "."
import _default from "../../theme/default";

describe("Screen: Products", () => {
  it("should render screen products", async () => {
    
    render(
      <ThemeProvider theme={_default}>
        <NavigationContainer>
          <Products />
        </NavigationContainer>
     </ThemeProvider>
    )

    const tela = await waitFor(() => screen.findByTestId("screenProducts"));
    expect(tela).toBeTruthy();
  })
})