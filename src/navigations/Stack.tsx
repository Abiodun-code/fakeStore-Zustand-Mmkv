import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import Home from "../screens/Home"
import BottomNav from "./Bottom"
import Cart from "../screens/Cart"

const Stack = createNativeStackNavigator()

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  )
}

export default StackNav