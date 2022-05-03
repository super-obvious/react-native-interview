import React, { FunctionComponent } from "react";
import { SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";

export const ResultScreen: FunctionComponent = () => {

    const name = '';
    const gender = '';
    const age = '';

    return (
        <SafeAreaView style={{display: 'flex', flex: 1}}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{}}>
                    <View>
                        <Text style={{fontSize: 20}}>
                            Some stats about the name
                        </Text>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text>
                            Name: {name}
                        </Text>
                        <Text>
                            Gender: {gender}
                        </Text>
                        <Text>
                            Age: {age}
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}