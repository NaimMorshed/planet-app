import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import { useFonts } from 'expo-font';
import { typography } from './src/theme/typography';
import { spacing } from './src/theme/spacing';

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
  })

  if (!loaded) {
    return (
      <Text>Font is loading...</Text>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: typography.bold, fontSize: spacing[4] }}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
