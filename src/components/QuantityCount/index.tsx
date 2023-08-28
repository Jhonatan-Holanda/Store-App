import { Icon } from '../IconComponent'
import { useTheme } from 'styled-components/native'
import { ContainerQuantity, QuantityProduct, CountQuantity } from './styles'

export function QuantityCount() {
  const theme = useTheme();

  return(
    <ContainerQuantity>
      <CountQuantity>
        <Icon iconName="minuscircleo" size={46} color={theme.COLORS.GRAY_400}/>
      </CountQuantity>
        
      <QuantityProduct>
        0
      </QuantityProduct>

      <CountQuantity>
        <Icon iconName="pluscircleo" size={46} color={theme.COLORS.GRAY_400}/>
      </CountQuantity>
    </ContainerQuantity>
  )
}