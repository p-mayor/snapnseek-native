import React from "react";
import { View } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Card } from "react-native-elements";
import login from "../actions";

class Login extends React.Component {
  static navigationOptions = {
    title: "Snap N Seek"
  };

  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = (text, name) => {
    this.setState({ [name]: text });
    console.log(this.state);
  };

  render() {
    //   const {navigate} = this.props.navigation;
    return (
      <View>
        <Card title="Login">
          {/* <Text>Username</Text> */}
          <Input
            name="username"
            placeholder="Username"
            leftIcon={{ type: "font-awesome", name: "user" }}
            onChangeText={text => {
              this.handleChange(text, "username");
            }}
          />
          <Input
            name="password"
            placeholder="Password"
            leftIcon={{ type: "font-awesome", name: "lock" }}
            onChangeText={text => {
              this.handleChange(text, "password");
            }}
          />
        </Card>
      </View>
    );
  }
}

export default Login;
