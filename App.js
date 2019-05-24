import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./app/screens/Login";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./configureStore";
import React from "react";

const store = configureStore({});

const MainNavigator = createStackNavigator({
  Login: { screen: Login }
});

const MyApp = createAppContainer(MainNavigator);

// const App = (
//   // <Provider store={store}>
//     <MyApp />
//     {/* <ConnectedRouter history={history}>{() => <MyApp />}</ConnectedRouter> */}
//   // </Provider>
// );

export default MyApp;
