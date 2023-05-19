import React, { useState, useEffect } from "react";

import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, TextInput, Button, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#454545'
    },
    header: {
        flex: 1,
        paddingTop: '20%',
        paddingLeft: 30
    },
    title: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "left"
    },
        subtitle: {
        color: "white",
        fontSize: 16,
        textAlign: "left"
    },
    buttonContainer: {
        padding: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    button: {
        backgroundColor: '#0090CD',
        width: 320,
        height: 53,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textButton: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    inputBetweenContainer: {
        marginHorizontal: '10%',
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1
    },
    inputContainer: {
        marginHorizontal: '10%',
        flex: 1
    },
    inputArea: {
        marginBottom: 10
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: 'white',
    },
    input: {
        color: "white",
        backgroundColor: '#525252',
        height: 40,
        borderRadius: 5,
        textAlign: 'center',
        justifyContent: 'center'
    },
    inputBetween: {
        color: "#fff",
        backgroundColor: '#525252',
        height: 40,
        width: 160,
        borderRadius: 5,
        textAlign: 'center',
        justifyContent: 'center'
    },
    registerContainer: {
        marginTop: '10%'
    },
    register: {
        fontWeight: 'bold',
        textAlign: 'left',
        color:"#0090CD"
    }
});

export default function Login() {
    const navigation = useNavigation();
    const [name, setName] = useState('');

    const goData = () => {
        navigation.navigate('Data');
    }
    const goRegister = () => {
        navigation.navigate('Register');
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Login ,{'\n'}
                    <Text style={styles.subtitle}>Faça login para acessar o app.</Text>
                </Text>
            </View>
            

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    name="name"
                    style={styles.input}
                    onChangeText={n => setName(n)}
                    value={name}
                    maxLength={40}
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Senha</Text>
                <TextInput
                    name="name"
                    style={styles.input}
                    onChangeText={n => setName(n)}
                    value={name}
                    maxLength={40}
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={goData} >
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerContainer} onPress={goRegister}>
                    <Text style={styles.label}>Ainda não tem conta? 
                        <Text style={styles.register} > Cadastre-se</Text></Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}   
