import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from '@react-navigation/native';
import { render, screen, waitFor } from "@testing-library/react-native";

import { DetailProduct } from "."
import _default from "../../theme/default";

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({ goBack: jest.fn() }),
  useRoute: () => ({
    params: {
      id: '13'
    }
  }),
}));

describe("Screen: Detail Product", () => {
  it("should render screen detail", async () => {
    render(
      <ThemeProvider theme={_default}>
        <NavigationContainer>
          <DetailProduct />
        </NavigationContainer>
      </ThemeProvider>
    )

    const tela = await screen.findByTestId("screenDetail");
    expect(tela).toBeTruthy();
  })
})