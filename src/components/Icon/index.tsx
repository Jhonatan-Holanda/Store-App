import { AntDesign } from '@expo/vector-icons';

type Props = {
  iconName: keyof typeof AntDesign.glyphMap;
  size: number;
  color: string;
};

export function Icon({ iconName, size, color }: Props) {
  return <AntDesign size={size} color={color} name={iconName} />;
}
