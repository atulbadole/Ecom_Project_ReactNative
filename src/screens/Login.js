import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable, TouchableOpacity, Alert } from 'react-native';

import auth from '@react-native-firebase/auth'
import styles from '../styles/Loginsignup';


const Login = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')

    const validateForm = () => {
        let isValid = true;

        if (!email.trim()) {
            setErrors('Email is required');
            isValid = false;
        } else if (!password.trim()) {
            setErrors('Password is required');
            isValid = false;
        } else {
            setErrors('');
        }

        return isValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    Alert.alert('Logged in successfully');
                    navigation.navigate('Products');
                })
                .catch(error => {
                    if (error.code === 'auth/user-not-found') {
                        Alert.alert('That email address doesn\'t exist');
                    }
                    else if (error.code === 'auth/invalid-email') {
                        Alert.alert('That email address is invalid!');
                    }
                    else if (error.code === 'auth/wrong-password') {
                        Alert.alert('Incorrect password');
                    }
                    else {
                        Alert.alert('Error:', error.message);
                    }
                });
        }
    };


    return (
        <View style={styles.container}>

            <Text style={styles.title}>Login</Text>
            {errors && <Text style={styles.error}>{errors}</Text>}
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 14 }}>
                    Don't have an account ?{' '}
                </Text>
                <Pressable onPress={() => navigation.navigate('register')}>
                    <Text style={{ color: "blue", fontSize: 14 }}>Sign Up</Text>
                </Pressable>
            </View>
        </View >
    );
};

export default Login;