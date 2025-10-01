import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
export default () =>{
    return(
        <View style={styles.container} >
            <Text style={styles.text}>Loading...</Text>
            <ActivityIndicator size={100} color={"#4CAF50"}></ActivityIndicator>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },

    text:{
        fontSize:30,
        fontWeight:700,
        color:"#ccc",
        marginBottom:20
    }
})