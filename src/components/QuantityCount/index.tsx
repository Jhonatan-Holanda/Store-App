import { useTheme } from 'styled-components/native';

import { Icon } from '..';

import { ContainerQuantity, CountQuantity, QuantityProduct } from './styles';

type Props = {
  iconSize: number;
  quantity: number;
  setQuantity: (quantity: number) => void;
};

export function QuantityCount({ iconSize, quantity, setQuantity }: Props) {
  const theme = useTheme();

  function handleDecreaseQuantity() {
    if (quantity === 1) return;

    setQuantity(quantity - 1);
  }

  return (
    <ContainerQuantity>
      <CountQuantity onPress={handleDecreaseQuantity}>
        <Icon
          iconName="minuscircleo"
          size={iconSize}
          color={theme.COLORS.GRAY_400}
        />
      </CountQuantity>

      <QuantityProduct>{quantity}</QuantityProduct>

      <CountQuantity onPress={() => setQuantity(quantity + 1)}>
        <Icon
          iconName="pluscircleo"
          size={iconSize}
          color={theme.COLORS.GRAY_400}
        />
      </CountQuantity>
    </ContainerQuantity>
  );
}
