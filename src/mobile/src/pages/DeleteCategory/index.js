import React, { useState, useEffect } from "react";

import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, Button, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#454545'
    },
    navigateHeader: {
        paddingTop: 50,
        paddingBottom: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 14,
    },
    textContainer:{
        marginHorizontal:20,
        paddingTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
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
    account: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 24,
    },
    information:{
        color: 'white',
        fontSize: 20,
    },
    product:{
        color: 'white',
        fontSize: 20,
        padding:10
    },
    quant:{
        color: 'white',
        fontSize: 16,
    },
    my: {
        fontSize: 24,
        marginBottom: 5,
        color: "#0090CD"
    },
    cardContainer:{
        borderWidth:1,
        borderColor:'white',
        height:200,
        marginHorizontal:'5%',
        borderRadius:5,
        marginTop:18,
        flex:1
    },
});

export default function DeleteCategory() {
    const navigation = useNavigation();
    const [name, setName] = useState('');

    const goBack = () => {
        navigation.navigate('Data');
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.navigateHeader}>
            <TouchableOpacity onPress={goBack}>
                    <Image source={require('../../../assets/settingleft.png')} style={styles.imageMenu} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.account}>Deletar
                        <Text style={styles.my}> categoria</Text></Text>
                </View>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.information}>
                Ao clicar em deletar, a categoria será excluída permanentemente do banco de dados. {'\n'} {'\n'} {'\n'} {'\n'}
                Tem certeza que desja deletar a categoria: Celulares?
                </Text>
            </View>

            <TouchableOpacity style={styles.cardContainer}>
                <Text style={styles.product}>
                Eletrônico </Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.textButton}>Deletar</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}   
