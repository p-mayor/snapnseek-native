// import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./app/screens/Login";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./configureStore";
import store from "./app/store";
import React, { Component } from "react";

// const store = configureStore({});

// const MainNavigator = createStackNavigator({
//   Login: { screen: Login }
// });

// const MyApp = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <MyApp /> */}
        {/* <ConnectedRouter history={history}>{() => <MyApp />}</ConnectedRouter> */}
        <Login />
      </Provider>
    );
  }
}
