import { AntDesign } from "@expo/vector-icons";
import { Icon } from './styles';

type Props = {
  iconName: keyof typeof AntDesign.glyphMap;
  size: number;
  color: string;
}

export function IconComponent({iconName, size, color}: Props) {
  return (
    <Icon
      size={size}
      color={color}
      name={iconName}
    />
  )
}