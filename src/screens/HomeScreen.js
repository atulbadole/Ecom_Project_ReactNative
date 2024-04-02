import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

export default function HomeScreen({ navigation }) {
    const buttonScale = new Animated.Value(1);

    const handleButtonPress = () => {
        Animated.sequence([
            Animated.timing(buttonScale, {
                toValue: 2.8,
                duration: 2000,     //Signup large to small duration
                useNativeDriver: true,
            }),
            Animated.timing(buttonScale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();
    };
    const handleSignIn = () => {
        navigation.navigate('login');
    }
    const handleSignUp = () => {
        navigation.navigate('register');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to My App</Text>
            <TouchableOpacity
                onPress={() => {
                    handleButtonPress(); handleSignIn();
                }}

                style={[styles.button, { backgroundColor: '#3498db' }]}
            >
                <Animated.Text style={[styles.buttonText, { transform: [{ scale: buttonScale }] }]}>
                    Sign In
                </Animated.Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    handleButtonPress();
                    handleSignUp();
                }}
                style={[styles.button, { backgroundColor: '#2ecc71' }]}
            >
                <Animated.Text style={[styles.buttonText, { transform: [{ scale: buttonScale }] }]}>
                    Sign Up
                </Animated.Text>
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
    },
    title: {
        fontSize: 24,
        marginBottom: 30,
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});