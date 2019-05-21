import _ from 'lodash';
import React, { Component } from 'react';
import {
    Dimensions,
    ListView, Text, TouchableOpacity, View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";
import { urunAddClickTarlaList } from "../actions";
import ListItemUrun from './ListItemUrun';
let { height, width } = Dimensions.get('window');
class UrunView extends Component {
    componentWillMount() {
        this.sezonListDataSource(this.props);
    }
    UrunAddPage() {
        const tarlaId =  this.props.tarlaId;
        this.props.urunAddClickTarlaList(tarlaId);
        Actions.UrunAdd();
        console.log(this);

    }
    sezonListDataSource({urunArray}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(urunArray);
    }
    renderRow(urun){
        return <ListItemUrun urun={urun}/>;
    }

    clickLogout() {
        Actions.girisYap()
    }

    render() {
        console.log("STATE::" + this.props.urunArray);
        const { buttonStyle, textStyle, urunAddButtonStyle, urunAddTextStyle } = styles;
        return (
            <View>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
                <TouchableOpacity onPress={this.UrunAddPage.bind(this)}  style={[urunAddButtonStyle, {backgroundColor:'rgba(38,192,255,0.58)'}]}>
                    <Text style={urunAddTextStyle}> Urun Ekle </Text>
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
    urunAddTextStyle: {
        alignSelf: 'center',
        color: '#0b090b',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    urunAddButtonStyle: {
        alignSelf: 'stretch',
        backgroundColor: 'rgba(11,9,11,0.98)',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: '100%',
        marginLeft: '70%',
        shadowOpacity:5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
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
const mapStateToProps = ({ kimlikdogrulamaResponse,tarlaAddResponse }) => {
    const tarlaId = kimlikdogrulamaResponse.tarlaId;
    const urunArray = _.map(kimlikdogrulamaResponse.urunList,(val) =>{
        return { ...val};
    });
    return {urunArray,tarlaId};
};

export default connect(mapStateToProps,{ urunAddClickTarlaList })(UrunView);