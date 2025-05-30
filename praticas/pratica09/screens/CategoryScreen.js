import React from 'react';
import { View } from 'react-native';
import CategoryGrid from '../components/CategoryGrid';

function CategoryScreen() {
  return (
    <View style={{ flex: 1, padding: 16, marginTop: 16 }}>
      <CategoryGrid />
    </View>
  );
}

export default CategoryScreen;