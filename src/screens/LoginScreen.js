import { View, Text, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
