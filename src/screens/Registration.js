import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Pressable, Alert } from 'react-native';

import styles from '../styles/Loginsignup';
import auth from '@react-native-firebase/auth';


const Registration = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState('');

    const validateForm = () => {
        let isValid = true;

        if (!email.trim()) {
            setErrors('Email is required');
            isValid = false;
        } else if (!password.trim()) {
            setErrors('Password is required');
            isValid = false;
        } else if (!confirmPassword.trim()) {
            setErrors('Confirm password is required');
            isValid = false;
        } else if (password !== confirmPassword) {
            setErrors('Passwords do not match');
            isValid = false;
        } else {
            setErrors('');
        }

        return isValid;
    };


    const handleSubmit = () => {
        const url = 'http://10.0.2.2:3000/users';
        let result = fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, confirmPassword })
        })



        if (validateForm()) {
            auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    Alert.alert('User registered successfully');
                    navigation.navigate('login');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        Alert.alert('That email address is already in use!');
                    }
                    else if (error.code === 'auth/invalid-email') {
                        Alert.alert('That email address is invalid!');
                    }
                    else {
                        Alert.alert('Error:', error.message);
                    }
                });
        }
    };


    return (
        <View style={styles.container}>
            {/* <Image source={require('../assets/logo.png')} style={{ width: 100, height: 100, marginBottom: 20 }} /> */}
            <Text style={styles.title}>Sign Up</Text>
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
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 14 }}>
                    Already have an account ?{' '}
                </Text>
                <Pressable onPress={() => navigation.navigate('login')}>
                    <Text style={{ color: "blue", fontSize: 14 }}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Registration;

// const url = 'http://10.0.2.2:3000/users';
// let result = await fetch(url, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ fullName, email, password })
// })
// result = await result.json();
// console.warn(result);

