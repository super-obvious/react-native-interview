import React, { FunctionComponent } from "react";
import { Alert, SafeAreaView, View } from "react-native";
import { Button, DefaultTheme, TextInput } from "react-native-paper";
import { useNameCalculation } from "../hooks/useNameCalculation";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export const Home: FunctionComponent = () => {
    const {age, gender, predictPersonalInfo, isLoading} = useNameCalculation();
    const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <SafeAreaView
            style={{ justifyContent: 'center', alignContent: 'center' }}>
            <View style={{ alignSelf: 'center'}}>
                <View style={{justifyContent: 'center'}}>
                    <TextInput placeholder={"Enter name"} onChangeText={(val) => {
                        //TODO:
                    }}/>
                    <Button theme={DefaultTheme} disabled={false} onPress={() => {
                        //TODO:
                    }}>Calculate</Button>
                </View>
            </View>
        </SafeAreaView>
    )
}