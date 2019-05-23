import React from "react";
import { Text, View } from "react-native";

class Login extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    //   const {navigate} = this.props.navigation;
    return (
      <View
      //   onPress={() => navigate('Profile', {name: 'Jane'})}
      >
        <Text>Hello</Text>
      </View>
    );
  }
}

export default Login;
