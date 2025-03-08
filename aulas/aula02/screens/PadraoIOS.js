import { View } from "react-native";

function PadraoIOS() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "seashell",
      }}
    >
      <View style={{ height: 64, backgroundColor: "gray" }}></View>
      <View style={{ height: 64, backgroundColor: "black"}}></View>
    </View>
  );
}

export default PadraoIOS;
