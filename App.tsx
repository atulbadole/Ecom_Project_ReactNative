import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Navigation from './src/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/store';
const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <ProductsScreen /> */}
        {/* <ProductDetailsScreen /> */}
        {/* <ShoppingCart /> */}
        <Navigation />
        <Text>HEllo World</Text>
        <Text>HEllo World</Text>
      </View>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
export default App;
