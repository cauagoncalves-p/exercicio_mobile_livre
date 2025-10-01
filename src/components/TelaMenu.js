import React from "react";
import {View, Image, StyleSheet, Text } from "react-native";

export default () =>{
    return(
       <View style={styles.container}>
            <View style={{flexWrap:"wrap"}}>
            <View style={styles.viewimage}>
                <Text style={styles.text}>Luffy</Text>
                <Image source={require("../assets/luffy.jpg")} style={styles.img}/>
            </View>
            <View style={styles.viewimage}>
                <Text style={styles.text}>Zoro</Text>
                <Image source={require("../assets/zoro.jpg")} style={styles.img}/>
            </View>
            <View style={styles.viewimage}>
                <Text style={styles.text}>Sanji</Text>
                <Image source={require("../assets/sanji.jpg")} style={styles.img}/>
            </View>
            <View style={styles.viewimage}>
                <Text style={styles.text}>Usopp</Text>
                <Image source={require("../assets/usopp.jpg")} style={styles.img}/>
            </View>
            <View style={styles.viewimage}>
                <Text style={styles.text}>Nami</Text>
                <Image source={require("../assets/nami.jpg")} style={styles.img}/>
            </View>
            <View style={styles.viewimage}>
                <Text style={styles.text}>Jimbe</Text>
                <Image source={require("../assets/jimbe.jpeg")} style={styles.img}/>
            </View>
            </View>

            <Image source={require("../assets/one_piece.png")} style={styles.logoImg}/>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ebc253ff",
    },
    viewimage:{
       margin:10 
    },
    img:{
        height:200,
        width:200
    },
    text:{
        textAlign:"center",
        fontWeight:"bold", 
        fontSize:20,
        marginBottom:10
    },
    logoImg:{
        height:200,
        width:200,
    }
})