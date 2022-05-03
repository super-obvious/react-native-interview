import React, { FunctionComponent, useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { AppContext } from "../context/ProfileContext";
import { LoadingScreen } from "../screens/LoadingScreen";
import { Home } from "../screens/Home";
import { ResultScreen } from "../screens/ResultScreen";

const Stack = createNativeStackNavigator();

export const Navigation: FunctionComponent = () => {
    const { isLoading } = useContext(AppContext);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
                <Stack.Screen name={"Home"} component={Home} />
                {/*TODO: */}
                <Stack.Screen name={"Result"} component={ResultScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
