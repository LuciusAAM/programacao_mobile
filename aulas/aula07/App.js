import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./routes/MainNavigator";
import Login from "./screens/Login";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
