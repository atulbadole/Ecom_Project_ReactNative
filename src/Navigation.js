// Redux 2:10 --2:20    IMportant
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShoppingCart from './screens/ShoppingCart';
import { Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from './store/cartSlice';
import { FontAwesome5 } from 'react-native-vector-icons/FontAwesome5';
// import { FontAwesome5 } from '@expo/vector-icons';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import Registration from './screens/Registration';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    const numberOfItems = useSelector(selectNumberOfItems);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="register" component={Registration} />
                <Stack.Screen name="Products" component={ProductsScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <Pressable onPress={() => navigation.navigate('Cart')} style={{ flexDirection: 'row' }}>
                                {/* <FontAwesome5 name="shopping-cart" size={18} color="gray" />            ?? */}
                                <Text style={{ marginLeft: 5, fontWeight: '500' }}>{numberOfItems}</Text>
                            </Pressable>
                        ),
                    })}
                />
                <Stack.Screen
                    name="Products Details"
                    component={ProductDetailsScreen}
                // options={{ presentation: 'modal' }}
                />
                <Stack.Screen name="Cart" component={ShoppingCart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;