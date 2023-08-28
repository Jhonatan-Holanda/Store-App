import { CardProduct } from '../../components/CardProduct'
import { Container, Title } from './styles'

export function Products() {
  return(
    <Container>
      <Title>Produtos</Title>

      <CardProduct 
        title='Mens Casual Slim Fit'
        image='https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
        description='The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.'
        value='15.99'
      />
    </Container>
  )
}