import { Icon } from '../IconComponent'
import { useTheme } from 'styled-components/native'
import { ContainerQuantity, QuantityProduct, CountQuantity } from './styles'
import { AppError } from '../../utils/AppError';

type Props = {
  sizeIcon: number;
  value: number;
  setQuantity: (number:number) => void;
}

export function QuantityCount({sizeIcon, value, setQuantity}: Props) {
  const theme = useTheme();

  function handleDecreaseQuantity(){
    if(value === 0) {
      return
    }else {
      setQuantity( value - 1)
    }
  }

  return(
    <ContainerQuantity>
      <CountQuantity onPress={handleDecreaseQuantity}>
        <Icon iconName="minuscircleo" size={sizeIcon} color={theme.COLORS.GRAY_400}/>
      </CountQuantity>
        
      <QuantityProduct>
        {value}
      </QuantityProduct>

      <CountQuantity onPress={() => setQuantity( value + 1)}>
        <Icon iconName="pluscircleo" size={sizeIcon} color={theme.COLORS.GRAY_400}/>
      </CountQuantity>
    </ContainerQuantity>
  )
}