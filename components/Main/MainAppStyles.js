import {StyleSheet} from 'react-native';
import Color from '../../contants/Color';

module.exports = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: Color.fontColor,
      height:'100%'
    },
    list: {
      flex: 2
    },
    layout: {      
      padding:10,
      backgroundColor: Color.primary,
    },
    footer: {
      height:'5%'
    },
    headerText: {
      color: Color.fontColor,
      fontWeight: 'bold',
      fontSize: 25,
      alignItems: 'center',
      flex: 3
    },
    header: {
      paddingTop: 36,
      flexDirection: 'row',
      alignItems: 'center',
      height: '10%',
    },
    content: {
      height: '85%',
      width: '100%',
      paddingLeft: '5%'
    },
    backgroundImage: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain'
    }
});
