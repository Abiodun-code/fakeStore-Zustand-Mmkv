import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import Home from "../screens/Home"
import Cart from "../screens/Cart"

const Bottom = createBottomTabNavigator()

const BottomNav = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Home" component={Home}/>
      <Bottom.Screen name="Cart" component={Cart} />
    </Bottom.Navigator>
  )
}

export default BottomNav