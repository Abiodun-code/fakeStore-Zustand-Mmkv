import React from "react"
import { View, Text, StyleSheet, FlatList, Pressable, Image, TouchableOpacity } from "react-native"
import data from "../../assets/data.json"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import useCartStore from "../store/cartStore"
import { Ionicons } from "@expo/vector-icons"

const Home = () => {
  const {reduceProduct, addProduct, items} = useCartStore()
  return (
    <View style={styles.container}>
      <View style={styles.flatContainer}>
        <FlatList data={data} renderItem={({ item }) => (
          <TouchableOpacity style={styles.touchable} activeOpacity={0.8}>
          <Image source={{ uri: item.image }} style={styles.image}/>
          <View style={styles.textContainer}>
              <Text style={styles.text}>{item.title.length > 40 ? item.title.slice(0, 40) + "...." : item.title}</Text>
              <Text>price: {item.price}</Text>
          </View>
          <View style={styles.addToCart}>
            <TouchableOpacity style={{}} onPress={()=>reduceProduct(item)}>
              <Ionicons name="remove" color={"black"} size={20}/>
            </TouchableOpacity>
              <TouchableOpacity style={{}} onPress={() => addProduct(item)}>
                <Ionicons name="add" color={"black"} size={20} />
              </TouchableOpacity>
          </View>
        </TouchableOpacity>
        )} />
      </View>
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3

  },
  flatContainer:{
    
  },
  touchable:{
    flexDirection: "row",
    gap: 4,
    marginVertical: 3,
    // alignItems: "center",
  },
  image:{
    width:wp(20),
    height: hp(9),
    objectFit: "contain"
  },
  text:{
    fontSize: wp(3.9)
  },
  textContainer:{
    flex: 1,
  },
  addToCart: {
    flexDirection: "row",
    gap: 20,
    marginVertical: 3,
    width: wp(18)
  },
});
