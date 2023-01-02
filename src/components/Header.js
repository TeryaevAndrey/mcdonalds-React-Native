import React from "react";
import { Image, Linking, TouchableHighlight, View } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <TouchableHighlight
          onPress={() => Linking.openURL("https://google.com")}
        >
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2339px-McDonald%27s_Golden_Arches.svg.png",
            }}
            style={{
              width: 51,
              height: 45,
            }}
          />
        </TouchableHighlight>
      </View>
      <View>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/263/263142.png",
          }}
          style={{
            width: 45,
            height: 45,
          }}
        />
      </View>
    </View>
  );
};

export default Header;
