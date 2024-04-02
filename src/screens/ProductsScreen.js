import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable } from 'react-native';
// import products from '../data/products';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';
const ProductsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    return (
        <FlatList
            data={products}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => {
                        //update selected product       //2:37
                        dispatch(productsSlice.actions.setSelectedProduct(item.id))     // dispatching the action to store
                        navigation.navigate('Products Details');
                    }}
                    style={styles.itemContainer}
                >
                    <Image source={{ uri: item.image }} style={styles.image} />
                </Pressable>
            )}
            numColumns={2}
        />
    );
};
const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    itemContainer: {
        width: '50%',
        padding: 1,
    },
});

export default ProductsScreen;