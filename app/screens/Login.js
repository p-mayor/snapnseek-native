import React from "react";
import { View } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Card, Button } from "react-native-elements";
import * as actions from "../actions";
import store from "../store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Login extends React.Component {
  static navigationOptions = {
    title: "Snap N Seek"
  };

  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.login(this.state);
    console.log(store.getState());
  };

  handleChange = (text, name) => {
    this.setState({ [name]: text });
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
          <Button title="submit" onPress={this.handleLogin} />
        </Card>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state, props) {
  // console.log(state);
  return {
    loginLoading: state.dataReducer.loginLoading,
    loginError: state.dataReducer.loginError
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
