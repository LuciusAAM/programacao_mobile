import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { List, Text } from "react-native-paper";
import { StoreContext } from "../contexts/StoreContext";

function StoreItem() {
  const { stores } = useContext(StoreContext);

  return (
    <View style={{ marginTop: 16 }}>
      <Text variant="titleMedium" style={{ marginBottom: 8 }}>
        Lojas
      </Text>
      <FlatList
        data={stores}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `loja-${index}`}
        contentContainerStyle={{ paddingBottom: 100 }} // ← essa linha aqui é o segredo
        renderItem={({ item }) => (
          <List.Item
            title={`${item.nome} - ${item.endereco}`}
            description={`★ ${item.nota} • ${item.categoria}`}
            right={(props) => (
              <List.Icon {...props} icon="heart-outline" onPress={() => {}} />
            )}
            style={{
              backgroundColor: "#fff",
              marginBottom: 8,
              borderRadius: 8,
              elevation: 1,
            }}
          />
        )}
      />
    </View>
  );
}

export default StoreItem;
