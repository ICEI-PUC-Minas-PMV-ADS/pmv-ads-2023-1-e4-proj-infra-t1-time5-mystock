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

export default function Register() {
    const navigation = useNavigation();
    const [name, setName] = useState('');

    const goData = () => {
        navigation.navigate('Data');
    }
    const goLogin = () => {
        navigation.navigate('Login');
    }
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Cadastro
                </Text>
            </View>

            <View style={styles.inputBetweenContainer}>
                <View style={styles.inputArea}>
                    <Text style={styles.label}>Primeiro nome</Text>
                    <TextInput
                        name="name"
                        style={styles.inputBetween}
                        onChangeText={n => setName(n)}
                        value={name}
                        maxLength={40}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputArea}>
                    <Text style={styles.label}>Último nome</Text>
                    <TextInput
                        name="name"
                        style={styles.inputBetween}
                        onChangeText={n => setName(n)}
                        value={name}
                        maxLength={40}
                        keyboardType="email-address"
                    />
                </View>

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
                    <Text style={styles.textButton}>Começar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerContainer} onPress={goLogin}>
                    <Text style={styles.label}>Já tem cadastro? 
                        <Text style={styles.register} > Login</Text></Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}   
