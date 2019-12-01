import React, { Component } from 'react';

import {
    SwitchIOS,
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import NavItems from '../NavItems/NavItem'
// import NavItemDetails from '../NavItems/NavItemsConfig'
import Color from '../../contants/Color';

export default ControlPanel = () => {
    const changeView = label => {
        console.log("label : ", label)
    }

    const navItems = [{
        icon:"home",
        label:"Home",
        tagName:MaterialCommunityIcons
    }, {
        icon:"account",
        label:"My Account",
        tagName:MaterialCommunityIcons
    }, {
        icon:"team",
        label:"Ceremonies",
        tagName:AntDesign
    }, {
        icon:"picture",
        label:"Images",
        tagName:AntDesign
    }, {
        icon:"comment-text-outline",
        label:"Comments",
        tagName:MaterialCommunityIcons
    }];

    return (
        <View style={styles.controlPanel}>
            {/* <TouchableHighlight onPress={() => { this.props.closeDrawer() }} style={styles.back}>
                <AntDesign name="banckward" size={40} style={{ color: "#ffffff" }} />
            </TouchableHighlight> */}
            <View>
                <View style={styles.userProfile}>
                    <MaterialCommunityIcons name="icon" size={60}/>
                </View>
                {
                    navItems.map((item)=>{
                        return (
                            <NavItems
                                tagName={item.tagName}
                                icon={item.icon}
                                label={item.label}
                                onNavItemClick={()=>{
                                    changeView().bind(item.label)
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
        backgroundColor: 'black',
        opacity: 0.7,
    },
    userProfile: {
        paddingTop: 36,
        flexDirection:"row",
        backgroundColor:Color.fontColor,
        borderRadius: 150,
        borderColor:"#000000",
        borderWidth:1
    }
})
