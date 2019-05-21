import _ from 'lodash';
import React, { Component } from 'react';
import {
    Dimensions,
    ListView, Text, TouchableOpacity, View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";
import { tarlaAddClickTarlaList } from "../actions";
import ListItemUrunMasraf from './ListItemUrunMasraf';
let { height, width } = Dimensions.get('window');
class UrunMasraf extends Component {
    componentWillMount() {
        this.urunMasrafListDataSource(this.props);
    }
    urunIslemAdd() {


    }
    urunMasrafListDataSource({UrunMasrafArray}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(UrunMasrafArray);
    }
    renderRow(urunMasraf){
        return <ListItemUrunMasraf urunMasraf={urunMasraf}/>;
    }

    clickuserProfil() {
        Actions.userProfil();
    }
    render() {
        const { buttonStyle, textStyle, tarlaAddButtonStyle, tarlaAddTextStyle } = styles;
        return (
            <View>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
                <TouchableOpacity onPress={this.urunIslemAdd.bind(this)}  style={[buttonStyle, {backgroundColor:'rgba(193,255,39,0.58)'}]}>
                    <Text style={tarlaAddTextStyle}> Masraf Ekle </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = {
    backgroundImage: {
        flex: 1,
        width: width,
        height: height,
    },
    textStyle: {
        alignSelf: 'center',
        color: '#0b090b',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    tarlaAddTextStyle: {
        alignSelf: 'center',
        color: '#0b090b',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    tarlaAddButtonStyle: {
        alignSelf: 'stretch',
        backgroundColor: 'rgba(11,9,11,0.98)',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: '80%',
        marginLeft: '80%',
        shadowOpacity:5
    },
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#63656490',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#636564',
        marginTop:5,
        marginLeft: 40,
        marginRight: 40,
        shadowOffset: {width:5, height:2 },
        shadowOpacity:5,
        position: 'relative'
    }
};
const mapStateToProps = ({ kimlikdogrulamaResponse }) => {
    debugger
    const sezonId = kimlikdogrulamaResponse.sezonId;
    const kullaniciId = kimlikdogrulamaResponse.kullaniciId;
    const UrunMasrafArray = _.map(kimlikdogrulamaResponse.urunList.urunMasrafTablo,(val) =>{
        return { ...val};
    });
    return {UrunMasrafArray,kullaniciId,sezonId};
};

export default connect(mapStateToProps,{tarlaAddClickTarlaList })(UrunMasraf);