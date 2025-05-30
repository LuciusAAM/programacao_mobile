import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import CategoryScreen from '../screens/CategoryScreen';
import StoreScreen from '../screens/StoreScreen';

const Stack = createNativeStackNavigator();

function SearchNavigator() {
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Categorias' }],
      });
    }, [navigation])
  );

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Categorias" component={CategoryScreen} />
      <Stack.Screen name="Lojas" component={StoreScreen} />
    </Stack.Navigator>
  );
}

export default SearchNavigator;