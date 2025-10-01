import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { StyleSheet, View, Text} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default () =>{
    return(
        <View style={styles.container}>
            <Icon name="user-circle" size={200} color={"white"}/>

            <View style={styles.viewbox}>
                <TouchableOpacity style={styles.box}><TextInput style={styles.boxtextinput} placeholder="Username" placeholderTextColor={"white"}/></TouchableOpacity>
                <TouchableOpacity style={styles.box}><TextInput style={styles.boxtextinput} placeholder="Password" placeholderTextColor={"white"}/></TouchableOpacity>
                <Text style={styles.forgotpass}>Forgot your password?</Text>
            </View>
           
            <View style={styles.viewboxsignup}>
                <TouchableOpacity style={styles.boxSignUP}><Text style={styles.boxtextsignup}>SIGN UP</Text></TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#333333",
        padding:30,
        justifyContent:"center",
        alignItems:'center'
    },
    viewbox:{
        marginTop:50,
        width:"100%"
    },
    box:{
        padding:10,
        backgroundColor:"#666666",
        borderRadius:120,
        width:"100%",
        marginTop:20
    },
    boxtextinput:{
        fontSize:20,
        color:"white"
    },
    forgotpass:{
        color:"white",
        marginTop:20,
        textAlign:"right"
    },
    viewboxsignup:{
        width:"100%",
        marginTop:30
    },
    boxSignUP:{
        padding:20,
        backgroundColor:"#e6e6e6",
        borderRadius:120,
        width:"100%",
        marginTop:20
    },
       boxtextsignup:{
        color:"black",
        textAlign:"center",
        fontSize:20
    },
})