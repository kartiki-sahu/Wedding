import React, { Component } from "react";
import { View } from "react-native";

export default class Ceremony extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text>Ceremony</Text>
      </View>
    );
  }
}