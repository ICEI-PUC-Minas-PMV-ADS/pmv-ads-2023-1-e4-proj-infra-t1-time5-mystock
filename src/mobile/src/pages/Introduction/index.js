import React from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity, TextInput, Button, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /* flexDirection: "column" */
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        /*  justifyContent: "center",
         alignItems: "center" */
    },
    logo: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30
    },
    imageForeground: {
        width: 250,
        height: 250
    },
    header: {
        flex: 1,
        padding: 20
    },
    title: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "left"
    },
    subtitle: {
        color: "white",
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "left"
    },
    containerIntroduction: {
        paddingTop: 30
    },
    textIntro: {
        color: "white",
        fontSize: 16,
    },
    buttonContainer: {
        paddingTop: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0090CD',
        width: 250,
        height: 53,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textButton: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
});

export default function SuccessUpdate() {
    const navigation = useNavigation();

    const Register = () =>{
        navigation.navigate('Register');
    }

    return (
        <SafeAreaView style={styles.container}>

            <ImageBackground source={require('../../../assets/background.png')} style={styles.imageBackground}>
                <View style={styles.header}>
                    <Text style={styles.title}>Olá,{'\n'}
                        <Text style={styles.subtitle}>Bem-vindo ao myStock!</Text>
                    </Text>

                    <View style={styles.containerIntroduction}>
                        <Text style={styles.textIntro}>Aqui você pode gerenciar seu estoque {'\n'} de produtos!</Text>
                    </View>
                    
                    <View style={styles.logo}>
                        <Image source={require('../../../assets/logo.png')} style={styles.imageForeground} />
                    </View>
                    
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={Register}>
                        <Text style={styles.textButton}>Começar</Text>
                    </TouchableOpacity>

                </View>
                    
                
                </View>


            </ImageBackground>

        </SafeAreaView>
    )
}   
