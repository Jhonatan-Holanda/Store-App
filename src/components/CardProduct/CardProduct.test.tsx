import {  render, screen } from '@testing-library/react-native';
import { CardProduct } from "."
import { ThemeProvider } from 'styled-components/native';
import _default from '../../theme/default';
import { mockProductsCardProducts } from '../../../__tests__/mocks/component/mockProductsCardProducts';

describe("Component: CardProduct", () => {
  const data = mockProductsCardProducts;
  it("should display the card product without the remove icon, is fill prop is false", () => {
    
    render(
      <ThemeProvider theme={_default}>
        <CardProduct 
          description={data[0].description} 
          id={data[0].id} 
          image={data[0].image} 
          price={data[0].price} 
          title={data[0].title}
          fill={false} 
          quantity={20}
          onRemoveProductInCart={() =>{}}
        />
      </ThemeProvider>
    )

    const displayProduct = screen.queryByTestId('closeRemove');
    expect(displayProduct).toBeNull();
  })

  it("should display the card product without the information of quantity, is fill prop is false", () => {
    
    render(
      <ThemeProvider theme={_default}>
        <CardProduct 
          description={data[0].description} 
          id={data[0].id} 
          image={data[0].image} 
          price={data[0].price} 
          title={data[0].title}
          fill={false} 
          quantity={20}
          onRemoveProductInCart={() =>{}}
        />
      </ThemeProvider>
    )

    const displayProduct = screen.queryByTestId('quantityInfo');
    expect(displayProduct).toBeNull();
  })

  it("should display the card product with the remove icon, is fill prop is true", () => {
    
    render(
      <ThemeProvider theme={_default}>
        <CardProduct 
          description={data[0].description} 
          id={data[0].id} 
          image={data[0].image} 
          price={data[0].price} 
          title={data[0].title}
          fill={true} 
          quantity={20}
          onRemoveProductInCart={() =>{}}
        />
      </ThemeProvider>
    )

    const displayProduct = screen.getByTestId('closeRemove');
    expect(displayProduct).toBeTruthy();
  })

  it("should display the card product with the information of quantity, is fill prop is true", () => {
    
    render(
      <ThemeProvider theme={_default}>
        <CardProduct 
          description={data[0].description} 
          id={data[0].id} 
          image={data[0].image} 
          price={data[0].price} 
          title={data[0].title}
          fill={true} 
          quantity={20}
          onRemoveProductInCart={() =>{}}
        />
      </ThemeProvider>
    )

    const displayProduct = screen.getByTestId('quantityInfo');
    expect(displayProduct).toBeTruthy();
  })
})