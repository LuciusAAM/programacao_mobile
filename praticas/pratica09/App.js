import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StoreProvider } from "./contexts/StoreContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import MainNavigator from "./routes/MainNavigator";


export default function App() {
  return (
    <SafeAreaProvider>
      <StoreProvider>
        <PaperProvider>
          <NavigationContainer>
            <MainNavigator />
          </NavigationContainer>
        </PaperProvider>
      </StoreProvider>
    </SafeAreaProvider>
  );
}