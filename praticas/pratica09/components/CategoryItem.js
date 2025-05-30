import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { StoreContext } from '../contexts/StoreContext';

function CategoryItem() {
  const { categories } = useContext(StoreContext);

  return (
    <View style={{ marginBottom: 16 }}>
      <Text variant="titleMedium" style={{ marginBottom: 8 }}>
        Categorias
      </Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `categoria-${index}`}
        renderItem={({ item }) => (
          <View style={{ marginRight: 8 }}>
            <Button
              mode="outlined"
              icon={item.icone}
              onPress={() => {}}
              style={{
                borderRadius: 16,
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

export default CategoryItem;