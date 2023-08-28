import { Icon } from '../IconComponent'
import { useTheme } from 'styled-components/native'
import { ContainerQuantity, QuantityProduct, CountQuantity } from './styles'

type Props = {
  sizeIcon: number
}

export function QuantityCount({sizeIcon}: Props) {
  const theme = useTheme();

  return(
    <ContainerQuantity>
      <CountQuantity>
        <Icon iconName="minuscircleo" size={sizeIcon} color={theme.COLORS.GRAY_400}/>
      </CountQuantity>
        
      <QuantityProduct>
        0
      </QuantityProduct>

      <CountQuantity>
        <Icon iconName="pluscircleo" size={sizeIcon} color={theme.COLORS.GRAY_400}/>
      </CountQuantity>
    </ContainerQuantity>
  )
}