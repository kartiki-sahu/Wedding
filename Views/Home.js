import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <Image source={require('../assets/images/loading.gif')} style={styles.backgroundImage}></Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  }
})

