import React, {Component} from 'react';
import { Text , View, StyleSheet,Alert, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Moment from 'moment';
import {Actions} from "react-native-router-flux";

class ListItemUrunHasat extends  Component {
    urunClick() {


    }
    render(){
        const {birimHasat,hasatMiktari,hasatTarihi } = this.props.hasat;
        return(
            <TouchableWithoutFeedback onPress={this.urunClick.bind(this)}>
                <View>
                    <View style={styles.ViewStyleBugday}>
                        <Text style={styles.TextStyle}>
                            {'Birim Hasat : ' + birimHasat} {"\n"}
                            {'Birim Hasat Miktarı: ' + hasatMiktari } {"\n"}
                            {'Tarih: ' + Moment({hasatTarihi}).format('d MMM YYYY')}
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = StyleSheet.create({
    TextStyle: {
        alignSelf: 'stretch',
        color: '#636564',
        position: 'relative'
    },
    ViewStyleBugday: {
        backgroundColor: 'rgba(115,195,207,0.58)',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#636564',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 40,
        paddingRight:50,
        marginTop:5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative'
    },
    top:{
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        top: 0,
        height: 64,
        right: 0,
        left: 0,
        borderBottomWidth: 0.5,
        borderBottomColor: '#828287',
        position: 'relative',
    },
    rightButton: {
        width: 100,
        height: 37,
        position: 'absolute',
        bottom: 8,
        right: 2,
        padding: 8
    },
});
export default  ListItemUrunHasat;