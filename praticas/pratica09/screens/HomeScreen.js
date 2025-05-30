import React, { useContext, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { StoreContext } from "../contexts/StoreContext";
import CategoryItem from "../components/CategoryItem";
import StoreItem from "../components/StoreItem";

function HomeScreen() {
  const { loading, loadData, resetStores } = useContext(StoreContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (isFocused) {
      resetStores();
    }
  }, [isFocused]);

  return (
    <View style={{ flex: 1, padding: 16, marginTop: 16 }}>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
          <CategoryItem />
          <StoreItem />
        </>
      )}
    </View>
  );
}

export default HomeScreen;
