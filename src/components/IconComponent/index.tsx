import { AntDesign } from "@expo/vector-icons";
import { IconComponent } from './styles';

type Props = {
  iconName: keyof typeof AntDesign.glyphMap;
  size: number;
  color: string;
}

export function Icon({iconName, size, color}: Props) {
  return (
    <IconComponent
      size={size}
      color={color}
      name={iconName}
    />
  )
}