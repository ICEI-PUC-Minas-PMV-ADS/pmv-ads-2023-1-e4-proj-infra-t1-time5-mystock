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
    title: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "left"
    },
    subtitle: {
        color: "white",
        fontSize: 16,
        textAlign: "left"
    },
    cardContainer:{
        borderWidth:1,
        borderColor:'white',
        height:100,
        marginHorizontal:'5%',
        borderRadius:5,
        justifyContent:'center',
        marginTop:18,
    },
    titleContainer:{
        paddingTop:'10%',
        marginHorizontal:'5%',
    },
    titlesubContainer:{
        paddingTop:'3%',
        marginHorizontal:'5%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: 'white',
    },
    textCard: {
        fontSize: 16,
        color: 'white',
    },
    centerProfile:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginHorizontal:'4%'
    },
    imageProfile:{
        height:60,
        width:60
    },
    imageMenu:{
        height:40,
        width:40
    },
    imegeSetting:{
        marginTop:10,
    }
});

export default function Data() {
    const navigation = useNavigation();
    const [name, setName] = useState('');

    const goEditProfile = () => {
        navigation.navigate('EditProfile');
    }
    const goProduct = () => {
        navigation.navigate('DeleteProduct');
    }
    const goCategory = () => {
        navigation.navigate('DeleteCategory');
    }
    const goSubCategory = () => {
        navigation.navigate('DeleteSubCategory');
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

            <View style={styles.titleContainer}>
                <Text style={styles.label}>Meus dados</Text>
            </View>

            <TouchableOpacity style={styles.cardContainer} onPress={goEditProfile}>
                <View style={styles.centerProfile}>
                    <Image source={require('../../../assets/user.png')} style={styles.imageProfile} />
                    <Text style={styles.textCard}>Meus dados {'\n'} laura.silva@email.com</Text>
                    <Image source={require('../../../assets/setting.png')} style={styles.imegeSetting} />
                </View>
            </TouchableOpacity>

            <View style={styles.titlesubContainer}>
                <Text style={styles.label}>Gerenciar</Text>
            </View>
            
            <TouchableOpacity style={styles.cardContainer} onPress={goProduct}>
                <View style={styles.centerProfile}>
                    <Text style={styles.title}>Produtos</Text>
                    <Image source={require('../../../assets/setting.png')} style={styles.imegeSetting} />
                </View>
            </TouchableOpacity>
 
            <TouchableOpacity style={styles.cardContainer} onPress={goCategory}>
                <View style={styles.centerProfile}>
                    <Text style={styles.title}>Categorias</Text>
                    <Image source={require('../../../assets/setting.png')} style={styles.imegeSetting} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardContainer} onPress={goSubCategory}>
                <View style={styles.centerProfile}>
                    <Text style={styles.title}>Subcategorias</Text>
                    <Image source={require('../../../assets/setting.png')} style={styles.imegeSetting} />
                </View>
            </TouchableOpacity>

        </SafeAreaView>
    )
}   
