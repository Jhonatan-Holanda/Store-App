import { render, screen } from "@testing-library/react-native";
import { HighLight } from "."
import { ThemeProvider } from "styled-components/native";
import _default from "../../theme/default";

describe("Component: HighLight", () => {
  it("should render highlight component, is short is true", () => {
    
    render(
      <ThemeProvider theme={_default}>
        <HighLight 
          title="Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"
          description="Testando o component de highlight"
          short={true}
          detail={false}
        />
     </ThemeProvider>
    )

    const title = screen.getByTestId('titleHighLight');
    const description = screen.getByTestId('descriptionHighLight');
    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  })

  it("should render highlight component, is short is false", () => {
    
    render(
      <ThemeProvider theme={_default}>
        <HighLight 
          title="Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"
          description="21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rng HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 n5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz"
          short={false}
          detail={false}
        />
     </ThemeProvider>
    )

    const title = screen.getByTestId('titleHighLight');
    const description = screen.getByTestId('descriptionHighLight');
    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  })

  it("should render highlight component, is detail is true", () => {
    
    render(
      <ThemeProvider theme={_default}>
        <HighLight 
          title="Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"
          description="Testando o component de highlight"
          short={true}
          detail={true}
        />
     </ThemeProvider>
    )

    const title = screen.getByTestId('titleHighLight');
    const description = screen.getByTestId('descriptionHighLight');
    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  })

  it("should render highlight component, is detail is false", () => {
    
    render(
      <ThemeProvider theme={_default}>
        <HighLight 
          title="Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"
          description="21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rng HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 n5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz"
          short={false}
          detail={false}
        />
     </ThemeProvider>
    )

    const title = screen.getByTestId('titleHighLight');
    const description = screen.getByTestId('descriptionHighLight');
    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  })
})