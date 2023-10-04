import React from "react"
import { View, Text, StyleSheet, FlatList, Pressable, Image, TouchableOpacity } from "react-native"
import data from "../../assets/data.json"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flatContainer}>
        <FlatList data={data} renderItem={({ item }) => (
          <TouchableOpacity style={styles.touchable} activeOpacity={0.5}>
          <Image source={{ uri: item.image }} style={styles.image}/>
          <Text style={styles.text}>{item.title}</Text>
          <View>
            <Text>dddd</Text>
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
    alignItems: "center",
  },
  image:{
    width:wp(20),
    height: hp(9),
    objectFit: "contain"
  },
  text:{
    flex: 1,
    fontSize: wp(3.9)
  }
});
