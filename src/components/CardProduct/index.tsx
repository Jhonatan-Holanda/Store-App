import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { HighLight, Icon } from '..';
import { CartProductWithDetails, Product } from '../../models';

import {
  Container,
  ContainerInfoProduct,
  ContainerRemoveProduct,
  ContainerText,
  ContainerValue,
  Image,
  SubTitle,
  Title,
  Value,
  ViewImageCenter,
} from './styles';

type Props = TouchableOpacityProps & {
  product: Product | CartProductWithDetails;
  fill?: boolean;
  quantity?: string;
  onRemoveProductInCart?: (id: string) => void;
};

export function CardProduct({
  product,
  fill,
  quantity,
  onRemoveProductInCart = () => {},
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container fill={fill} {...rest}>
      <ViewImageCenter fill={fill}>
        <Image source={{ uri: product.image }} resizeMode="contain" />
      </ViewImageCenter>

      <ContainerInfoProduct fill={fill}>
        <HighLight
          title={product.title}
          description={product.description}
          short
        />
      </ContainerInfoProduct>

      <ContainerValue>
        {fill && (
          <ContainerRemoveProduct
            onPress={() => onRemoveProductInCart(product.id)}
          >
            <Icon iconName="close" size={24} color={theme.COLORS.RED_DARK} />
          </ContainerRemoveProduct>
        )}

        <Value>{`R$ ` + product.price}</Value>

        {fill && (
          <ContainerText>
            <Title>Quantidade: </Title>
            <SubTitle>{quantity}</SubTitle>
          </ContainerText>
        )}
      </ContainerValue>
    </Container>
  );
}
