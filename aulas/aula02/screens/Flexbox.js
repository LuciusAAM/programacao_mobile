import { Text, View } from "react-native";

function Flexbox() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          height: 100,
          width: 100,
          borderRadius: 100,
          borderWidth:10,
          borderColor: "lightgrey",
          backgroundColor: "chartreuse",
        }}
      ></View>
      <View
        style={{
          height: 100,
          width: 100,
          borderRadius: 100,
          borderRadius: 100,
          borderWidth:10,
          borderColor: "lightgrey",
          backgroundColor: "yellow",
        }}
      ></View>
      <View
        style={{
          height: 100,
          width: 100,
          borderRadius: 100,
          borderRadius: 100,
          borderWidth:10,
          borderColor: "lightgrey",
          backgroundColor: "red",
        }}
      ></View>
    </View>
  );
}

export default Flexbox;
