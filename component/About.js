import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import Icon from "./Icon";
import { Linking } from "react-native";
const About = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/photo.png")} />
      <Text style={styles.text}>Abiyoga</Text>
      <Text style={styles.info}>
        Saya Abiyoga, Hobi bermain game
      </Text>
      <View style={styles.icons}>
        <Icon
          backgroundColor="#ff4d4d"
          onPress={() => Linking.openURL("mailto:abiyogawp@gmail.com")}
          name={"email"}
          size={50}
        />
        <Icon
          onPress={() => Linking.openURL("https://www.instagram.com/abiiiyga/")}
          backgroundColor="#ff4d4d"
          name={"instagram"}
          size={50}
        />
        {/* <Icon
          onPress={() =>
            Linking.openURL("https://coordinated-month-502.notion.site/Abiyoga-Wahyu-Pratama-3fc77833308f4ff289f882fe742eb8f4")
          }
          backgroundColor="#ff4d4d"
          name={"notion"}
          size={50}
        /> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ffcccc",
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
    fontWeight: "bold",
  },
  icons: {
    marginTop: 50,
    width: "100%",
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  info: {
    marginHorizontal: 15,
    marginVertical: 10,
    fontSize: 20,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    resizeMode: "cover",
    borderColor: "#ff9999",
    borderWidth: 5,
  },
});
export default About;
