import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Drawer from 'react-native-drawer'
import styles from './MainAppStyles';
import ControlPanel from '../Control-panel/ControlPanel';
import Home from '../../Views/Home';
import Account from '../../Views/Account';
import Album from '../../Views/Album';
import Ceremonies from '../../Views/Ceremonies';
import Comments from '../../Views/Comments'

const MainApp = () => {
  const [activeScreen, setActiveScreen] = useState("Home");
  const closeControlPanel = () => {
    this._drawer.close()
  };
  const openControlPanel = () => {
    this._drawer.open()
  };

  const setCurrentScreen = screen => {
    this.setActiveScreen(screen)
  }

  console.log('activeScreen : ', activeScreen);

  let content = <Home />
  switch (activeScreen) {
    case "Account":
      content = (
        <Account />
      );
      break;

    case "Ceremonies":
      content = (
        <Ceremonies />
      );
      break;

    case "Album":
      content = (
        <Album />
      );
      break;

    case "Comments":
      content = (
        <Comments />
      );
      break;
  }

  const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
    main: { paddingLeft: 3 },
  }
  return (
    <Drawer
      content={<ControlPanel setCurrentScreen={setCurrentScreen} />}
      ref={(ref) => this._drawer = ref}
      type="overlay"
      tapToClose={true}
      openDrawerOffset={0.2} // 20% gap on the right side of drawer
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      styles={drawerStyles}
      tweenHandler={(ratio) => ({
        main: { opacity: (2 - ratio) / 2 }
      })}
    >
      <View style={styles.screen}>
        <View style={{ ...styles.header, ...styles.layout }}>
          <TouchableHighlight onPress={openControlPanel} style={styles.list}>
            <Ionicons name="ios-menu" size={40} style={{ color: "#ffffff" }} />
          </TouchableHighlight>
          <Text style={styles.headerText}>Wedding</Text>
        </View>
        <View style={styles.content}>
          {content}
        </View>
        <View style={styles.layout}><Text>Footer</Text></View>
      </View>
    </Drawer>
  );
}

export default MainApp;
