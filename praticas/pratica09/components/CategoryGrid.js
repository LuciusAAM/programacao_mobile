import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { StoreContext } from '../contexts/StoreContext';

function CategoryGrid() {
  const { categories } = useContext(StoreContext);
  const navigation = useNavigation();

  return (
    <View style={{ marginBottom: 16 }}>
      <Text variant="titleMedium" style={{ marginBottom: 8 }}>
        Categorias
      </Text>
      <FlatList
        data={categories}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `categoria-${index}`}
        renderItem={({ item }) => (
          <View style={{ flex: 1, margin: 6 }}>
            <Button
              mode="outlined"
              icon={item.icone}
              onPress={() =>
                navigation.navigate("Lojas", { categoria: item.nome })
              }
              style={{
                borderRadius: 12,
                justifyContent: "center",
                paddingVertical: 6,
              }}
            >
              {item.nome}
            </Button>
          </View>
        )}
      />
    </View>
  );
}

export default CategoryGrid;