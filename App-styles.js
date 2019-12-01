import Color from './contants/Color';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function AppStyles() {
    StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: '#fff',
            height: '100%'
        },
        layout: {
            height: '10%',
            color: Color.fontColor,
            fontWeight: 'bold',
            padding: 10,
            backgroundColor: Color.primary
        },
        header: {
            alignItems: 'center',
            fontSize: 50,
            justifyContent: 'center',
        },
        content: {
            height: '80%'
        },
        backgroundImage: {
            flex: 1,
            resizeMode: 'cover'
        }
    });
}