import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { IStackRouteParamList } from "models";
import { Main, Login, SignUp, Home, Registered } from "screens";

const Stack = createStackNavigator<IStackRouteParamList>();

export const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Registered" component={Registered} />
    </Stack.Navigator>
  </NavigationContainer>
);
