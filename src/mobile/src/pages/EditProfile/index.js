import React, { useState, useEffect } from "react";

import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, Button, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#454545'
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 14,
        paddingTop: 50,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },
    navigateHeader: {
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 14,
    },
    title: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "left"
    },
    buttonContainer: {
        paddingTop:20,
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
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
        paddingTop:20,
        marginHorizontal: '10%',
        flexDirection: "row",
        justifyContent: "space-between",
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
    account: {
        fontWeight: 'bold',
        color: 'white',
    },
    my: {
        fontSize: 16,
        marginBottom: 5,
        color: "#0090CD"
    },
    profileImageContainer: {
        paddingTop: 20,
        justifyContent: 'center',
        alignSelf: "center",
    },
    imageProfileEdit: {
        height: 80,
        width: 80
    },
    profileName:{
        paddingTop: 20,
        justifyContent: 'center',
        alignSelf: "center",
        alignItems:'center'
    }
});

export default function EditProfile() {
    const navigation = useNavigation();
    const [name, setName] = useState('');

    const Register = () => {
        navigation.navigate('Register');
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>MyStock</Text>
                </View>
                <View>
                    <Image source={require('../../../assets/cardapio.png')} style={styles.imageMenu} />
                </View>
            </View>

            <View style={styles.navigateHeader}>
                <View>
                    <Image source={require('../../../assets/settingleft.png')} style={styles.imageMenu} />
                </View>
                <View>
                    <Text style={styles.account}>Minha
                        <Text style={styles.my}> conta</Text></Text>
                </View>
            </View>

            <View style={styles.profileImageContainer}>
                <Image source={require('../../../assets/user.png')} style={styles.imageProfileEdit} />
            </View>

            <View style={styles.profileName}>
                <Text style={styles.label}>Laura Silva</Text>
                <Text style={styles.label}>laura.silva@email.com</Text>
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
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.textButton}>Editar</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}   
