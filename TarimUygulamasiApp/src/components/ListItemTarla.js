import React, {Component} from 'react';
import { Text , View, StyleSheet,Alert, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Moment from 'moment';
import {Actions} from "react-native-router-flux";

class ListItemTarla extends  Component {
    tarlaClick() {
        Alert.alert(
            '',
            'Bir işlem seçiniz!',
            [
                {
                    text: 'Görüntüle',
                    onPress: () => null
                },
                {
                    text: 'Konum',
                    onPress: () => null
                },
                {
                    text: 'Sil',
                    onPress: () => null
                }
            ],
            {
                cancelable: false
            }
        );
    }
    render(){
        const {tarlaAd,tarlaDekarBilgisi,tarlaOlusTarih } = this.props.tarla;
        return(
            <ScrollView>
                <TouchableWithoutFeedback onPress={this.tarlaClick.bind(this)}>
                    <View>
                        <View style={styles.ViewStyleBugday}>
                            <Text style={styles.TextStyle}>
                                {'tarlaAd: ' + tarlaAd} {"\n"}
                                {'Tarla Dekar: ' + tarlaDekarBilgisi } {"\n"}
                                {'Oluşturulduğu Tarih: ' + Moment({tarlaOlusTarih}).format('d MMM YYYY')}
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
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
        backgroundColor: '#cfab7795',
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
export default  ListItemTarla;