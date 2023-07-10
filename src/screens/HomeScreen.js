import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
