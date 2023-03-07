import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CarItem from './components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
      name="Model S"
      tagline="Starting at 69 000$"
      image={require('./assets/images/ModelS.jpeg')}
      />
      <CarItem
      name="Model X"
      tagline="Starting at 109 000$"
      image={require('./assets/images/ModelX.jpeg')}
      />
      <CarItem
      name="Model 3"
      tagline="Starting at 35 000$"
      image={require('./assets/images/Model3.jpeg')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
