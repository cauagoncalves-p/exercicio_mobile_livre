import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TelaCarregamento from "./components/TelaCarregamento";
import TelaLogin from "./components/TelaLogin";
import TelaMenu from "./components/TelaMenu";
import TelaSoreNos from "./components/TelaSoreNos";

function App(){
    return(
        <SafeAreaView style={{flex:1}}>
            <TelaSoreNos/>
        </SafeAreaView>
    )
}

export default App;