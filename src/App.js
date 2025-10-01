import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TelaCarregamento from "./components/TelaCarregamento";
import TelaLogin from "./components/TelaLogin";

function App(){
    return(
        <SafeAreaView style={{flex:1}}>
            <TelaLogin/>
        </SafeAreaView>
    )
}

export default App;