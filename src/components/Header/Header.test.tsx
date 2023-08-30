import { render, screen } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import { Header } from "."
import _default from '../../theme/default';

describe("Component: Header", () => {
  it("should display title of header without icons", () => {
    
    render(
      <ThemeProvider theme={_default}>
        <NavigationContainer>
          <Header
            title='Teste'
            showBackButton={false}
            showCartIcon={false}
          />
        </NavigationContainer>
      </ThemeProvider>
    )

    const displayIconCart = screen.queryByTestId('cartIcon');
    const displayIconBack = screen.queryByTestId('backIcon');
   
    expect(displayIconCart).toBeNull()
    expect(displayIconBack).toBeNull()
  })

  it("should display title of header with icon of cart", () => {
    
    render(
      <ThemeProvider theme={_default}>
        <NavigationContainer>
          <Header
            title='Teste'
            showBackButton={false}
            showCartIcon={true}
          />
        </NavigationContainer>
      </ThemeProvider>
    )

    const displayIconCart = screen.queryByTestId('cartIcon');
    const displayIconBack = screen.queryByTestId('backIcon');
   
    expect(displayIconCart).toBeTruthy()
    expect(displayIconBack).toBeNull()
  })

  it("should display title of header with icon of cart", () => {
    
    render(
      <ThemeProvider theme={_default}>
        <NavigationContainer>
          <Header
            title='Teste'
            showBackButton={false}
            showCartIcon={true}
          />
        </NavigationContainer>
      </ThemeProvider>
    )

    const displayIconCart = screen.queryByTestId('cartIcon');
    const displayIconBack = screen.queryByTestId('backIcon');
   
    expect(displayIconCart).toBeTruthy()
    expect(displayIconBack).toBeNull()
  })

  it("should display title of header with icon of back to home", () => {
    
    render(
      <ThemeProvider theme={_default}>
        <NavigationContainer>
          <Header
            title='Teste'
            showBackButton={true}
            showCartIcon={false}
          />
        </NavigationContainer>
      </ThemeProvider>
    )

    const displayIconCart = screen.queryByTestId('cartIcon');
    const displayIconBack = screen.queryByTestId('backIcon');
   
    expect(displayIconCart).toBeNull()
    expect(displayIconBack).toBeTruthy()
  })

  it("should display title of header with icon of back to home and icon cart", () => {
    
    render(
      <ThemeProvider theme={_default}>
        <NavigationContainer>
          <Header
            title='Teste'
            showBackButton={true}
            showCartIcon={true}
          />
        </NavigationContainer>
      </ThemeProvider>
    )

    const displayIconCart = screen.queryByTestId('cartIcon');
    const displayIconBack = screen.queryByTestId('backIcon');
   
    expect(displayIconCart).toBeTruthy()
    expect(displayIconBack).toBeTruthy()
  })
})