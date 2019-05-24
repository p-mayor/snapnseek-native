import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./app/screens/Login";

const MainNavigator = createStackNavigator({
  Login: { screen: Login }
});

const App = createAppContainer(MainNavigator);

export default App;