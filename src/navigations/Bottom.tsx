import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import Home from "../screens/Home"
import Cart from "../screens/Cart"
import {Ionicons} from "@expo/vector-icons"

const Bottom = createBottomTabNavigator()

const BottomNav = () => {
  return (
    <Bottom.Navigator screenOptions={({route, navigation})=>({
      tabBarIcon: ({color, focused, size})=>{
        let iconName;
        if(route.name === "Home"){
          iconName = focused ? "home" : "home-outline";
        }else if(route.name === "Cart"){
          iconName = focused ? "cart" : "cart-outline";
        }
        return <Ionicons name={iconName} size={size} color={color}/>
      },
      tabBarActiveTintColor: "grey",
      tabBarInactiveTintColor: "black",      
    })}>
      <Bottom.Screen name="Home" component={Home}/>
      <Bottom.Screen name="Cart" component={Cart} />
    </Bottom.Navigator>
  )
}

export default BottomNav