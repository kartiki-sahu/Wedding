import React from 'react';

import {
    SwitchIOS,
    StyleSheet,
    View,
    Text,
    TouchableHighlight
  } from 'react-native';

  import {AntDesign, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
 
  import Color from '../../contants/Color';

  const NavItem = props =>{
      const Tag = props.tagName
    return (
        <TouchableHighlight onPress={()=>{props.onNavItemClick()}}>
            <View style={styles.navItems}>
                <Tag name={props.icon} style={{color:Color.navItemFontColor}} size={30}/>
                <Text style={styles.navItemsText}>{props.label}</Text>
            </View>
        </TouchableHighlight>
    )
  }

  const styles = StyleSheet.create({
    navItems:{
        padding: "5%",
        flexDirection:"row",
        fontWeight:"900"
        // backgroundColor: Color.primary
    },
    navItemsText: {
        color: Color.navItemFontColor,
        paddingLeft: 20
    }  
  })

  export default NavItem;
