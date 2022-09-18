import { View, Text, ViewProps } from "react-native";

import { styles } from "./styles";

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle, ...rest }: Props) {
  return (
    <View {...rest} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
