import React, {Component} from 'react';
import { Text , View, StyleSheet,Alert, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Moment from 'moment';
import {tarlaListClick} from '../actions';
import {connect} from "react-redux";
import {TARLA_LIST} from "../actions/types";
import {Actions} from "react-native-router-flux";
class ListItem extends  Component {
    sezonClick() {
        const sezonId =  this.props.sezon._id;
        const tarlaList = this.props.sezon.tarla;
        this.props.tarlaListClick(tarlaList,sezonId);
        Actions.tarlaPage();
    }
    render(){
        const {sezonAd,sezonTarih } = this.props.sezon;
        return(
            <ScrollView>
                <TouchableWithoutFeedback onPress={this.sezonClick.bind(this)}>
                    <View>
                           <View style={styles.ViewStyleBugday}>
                               <Text style={styles.TextStyle}>
                                   {'Sezon Adı: ' + sezonAd} {"\n"}  {'Oluşturulduğu Tarih: ' + Moment({sezonTarih}).format('d MMM YYYY')}
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
    }
});
export default connect(null,{tarlaListClick})(ListItem);