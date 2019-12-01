import React, { Component } from "react";
import { View } from "react-native";

export default class Album extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text>Comments</Text>
      </View>
    );
  }
}