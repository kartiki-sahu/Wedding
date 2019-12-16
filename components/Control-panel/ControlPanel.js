import React, { Component } from 'react';

import {
    SwitchIOS,
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import NavItem from '../NavItems/NavItem'
import NavItemDetail from '../NavItems/NavItemsConfig'
import Color from '../../contants/Color';

export default ControlPanel = props => {
    return (
        <View style={styles.controlPanel}>
            {/* <TouchableHighlight onPress={() => { this.props.closeDrawer() }} style={styles.back}>
                <AntDesign name="banckward" size={40} style={{ color: "#ffffff" }} />
            </TouchableHighlight> */}
            <View>
                <View style={styles.userProfile}>
                    <MaterialCommunityIcons name="account-circle" size={60}/>
                </View>
                {
                    NavItemDetail.map((item, index)=>{
                        return (
                            <NavItem
                                tagName={item.tagName}
                                icon={item.icon}
                                label={item.label}
                                key={item.icon + "-" + index}
                                onNavItemClick={()=>{
                                    props.setCurrentScreen(item.label)
                                }} />
                        )
                    })
                }
                                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    controlPanel: {
        flex: 1,
        backgroundColor: Color.drawerColor,
        opacity:0.7
    },
    userProfile: {
        paddingTop: 36,
        flexDirection:"row",
        height:"25%",
        backgroundColor:Color.fontColor,
        borderBottomColor:"#000000",
        borderBottomWidth:1
    }
})
