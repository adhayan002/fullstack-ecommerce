import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function CartScreen() {
  return (
    <View>
      <Text style={{fontSize:30}}>Cart Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}