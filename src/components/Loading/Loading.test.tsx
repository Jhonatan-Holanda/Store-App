import { render, screen } from "@testing-library/react-native";
import { Loading } from "."
import { ThemeProvider } from "styled-components/native";
import _default from "../../theme/default";

describe("Component: Loading", () => {
  it("should render loading component", () => {
    
    render(
      <ThemeProvider theme={_default}>
        <Loading  />
     </ThemeProvider>
    )

    const loading = screen.getByTestId('loading');
    expect(loading).toBeTruthy();
  })
})