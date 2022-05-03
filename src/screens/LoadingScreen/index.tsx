import React, {FunctionComponent} from "react";
import {Image, SafeAreaView, View} from "react-native";

export const LoadingScreen: FunctionComponent = () => {
    return (
        <SafeAreaView>
            <View style={{alignItems: 'center'}}>
                <Image style={{resizeMode: 'contain', marginLeft: 10}} width={180} source={require('./loading.gif')} />
            </View>
        </SafeAreaView>
    );
};