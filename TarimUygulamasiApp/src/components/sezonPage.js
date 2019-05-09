import _ from 'lodash';
import React, { Component } from 'react';
import {
    Dimensions,
    ListView, Text, TouchableOpacity, View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";
import ListItem from './ListItem';
let { height, width } = Dimensions.get('window');
class sezonPage extends Component {
    componentWillMount() {
        this.sezonListDataSource(this.props);
    }
    SezonAddPage() {
        const sezonId =  this.props.sezonId;
        const kullaniciId = this.props.kullaniciId;
        this.props.sezonAddClickTarlaList(kullaniciId,sezonId);
        Actions.TarlaAdd();
        console.log(this);

    }
    sezonListDataSource({sezonArray}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(sezonArray);
    }
    renderRow(sezon){
        return <ListItem sezon={sezon}/>;
    }

    clickuserProfil() {
        Actions.userProfil();
    }

    clickLogout() {
        Actions.girisYap()
    }

    render() {
        console.log("STATE::" + this.props.sezonArray);
        const { buttonStyle, textStyle, sezonAddButtonStyle, sezonAddTextStyle } = styles;
        return (
            <View>
                <ListView
                  enableEmptySections
                  dataSource={this.dataSource}
                  renderRow={this.renderRow}
                />
            <TouchableOpacity onPress={this.clickLogout}  style={[buttonStyle, {backgroundColor:'#ff000095'}]}>
                <Text style={textStyle}> Çıkış Yap </Text>
            </TouchableOpacity>
                <TouchableOpacity onPress={this.SezonAddPage.bind(this)}  style={[sezonAddButtonStyle, {backgroundColor:'rgba(193,255,39,0.58)'}]}>
                    <Text style={sezonAddTextStyle}> Sezon Ekle </Text>
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
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    sezonAddTextStyle: {
        alignSelf: 'center',
        color: '#0b090b',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    sezonAddButtonStyle: {
        alignSelf: 'stretch',
        backgroundColor: 'rgba(11,9,11,0.98)',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: '100%',
        marginLeft: '70%',
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
    const kullaniciId = kimlikdogrulamaResponse.kullaniciId;
    const sezonArray = _.map(kimlikdogrulamaResponse.sezon,(val) =>{
        return { ...val};
    });
    return {sezonArray,kullaniciId};
};

export default connect(mapStateToProps,{})(sezonPage);