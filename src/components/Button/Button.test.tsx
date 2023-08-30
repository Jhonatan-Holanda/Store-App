import { render, screen } from "@testing-library/react-native";
import { Button } from "."
import { ThemeProvider } from "styled-components/native";
import _default from "../../theme/default";

describe("Component: Button", () => {
  it("should render button component", () => {
    
    render(
      <ThemeProvider theme={_default}>
        <Button 
          title={'Olá Mundo'}
        />
     </ThemeProvider>
    )

    const button = screen.getByText('Olá Mundo');
    expect(button).toBeTruthy();
  })
})