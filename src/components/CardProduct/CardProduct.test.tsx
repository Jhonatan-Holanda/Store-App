import {  render, screen } from '@testing-library/react-native';
import { CardProduct } from "."
import { ThemeProvider } from 'styled-components/native';
import _default from '../../theme/default';

describe("Component: CardProduct", () => {
  const data = 
  [
    {
      id: '20',
      title: 'DANVOUY Womens T Shirt Casual Cotton Short',
      price: 12.99,
      description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
      image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    },
    {
      id: '18',
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      price: 9.85,
      description: '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
      category: "women's clothing",
      image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
      rating: { rate: 4.7, count: 130 }
    },
  ]
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