import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavegacaoPilha from "./routes/NavegacaoPilha";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>

        <Stack.Navigator>
          <NavegacaoPilha />
        </Stack.Navigator>
        
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
