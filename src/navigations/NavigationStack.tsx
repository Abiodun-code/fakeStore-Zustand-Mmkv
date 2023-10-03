import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { View } from "react-native"
import StackNav from "./Stack"
import BottomNav from "./Bottom"

const NavigationStack = ()=>{
  return(
    <NavigationContainer>
      <BottomNav/>
    </NavigationContainer>
  )
}

export default NavigationStack