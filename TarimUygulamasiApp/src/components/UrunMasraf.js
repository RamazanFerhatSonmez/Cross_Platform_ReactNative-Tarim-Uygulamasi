import _ from 'lodash';
import React, { Component } from 'react';
import {
    Dimensions,
    ListView, Text, TouchableOpacity, View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";
import { tarlaAddClickTarlaList,aciklamaChanged,miktarChanged,_IslemMasrafiChanged,masrafPut } from "../actions";
import ListItemUrunMasraf from './ListItemUrunMasraf';
import Dialog from "react-native-dialog";
let { height, width } = Dimensions.get('window');
class UrunMasraf extends Component {
    componentWillMount() {
        //
        this.urunMasrafListDataSource(this.props);
    }
    state = {
        dialogVisible: false,
        aciklama:'',
        miktar:'',
        masraf:'',
    };
    urunMasrafAdd = () => {
        this.setState({ dialogVisible: true });
    };
    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };
    handleSave = () => {
        // The user has pressed the "Delete" button, so here you can do your own logic.
        // ...Your logic
        console.log(this)
        const masrafData = {

        }
        this.props.masrafPut(masrafData);
        this.setState({ dialogVisible: false });

    };
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
        const { buttonStyle, textStyle, tarlaAddButtonStyle, tarlaAddTextStyle,wrapper_Style } = styles;
        return (
            <View>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
                <TouchableOpacity onPress={this.urunMasrafAdd.bind(this)}  style={[buttonStyle, {backgroundColor:'rgba(193,255,39,0.58)'}]}>
                    <Text style={tarlaAddTextStyle}> Masraf Ekle </Text>
                </TouchableOpacity>
                <View>
                    <Dialog.Container visible={this.state.dialogVisible}>
                        <Dialog.Title>Masraf Ekleme</Dialog.Title>
                        <Dialog.Input
                            label="Acıklama"
                            wrapperStyle={wrapper_Style}
                            value={this.props.aciklama}
                            onChangeText={aciklama => this.props.aciklamaChanged(aciklama)}
                        />
                        <Dialog.Input
                            label="Miktar"
                            wrapperStyle={wrapper_Style}
                            value={this.props.miktar}
                            onChangeText={miktar => this.props.miktarChanged(miktar)}
                        />
                        <Dialog.Input
                            label="Masraf(TL)"
                            wrapperStyle={wrapper_Style}
                            value={this.props.masraf}
                            onChangeText={masraf => this.props._IslemMasrafiChanged(masraf)}
                        />
                        <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                        <Dialog.Button label="Kaydet" onPress={this.handleSave.bind(this)} />
                    </Dialog.Container>
                </View>
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
    wrapper_Style: {
        alignSelf: 'stretch',
        color: '#636564',
        fontSize: 10,
        fontWeight: '100',
        backgroundColor: '#ffffff99',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#636564',
        position: 'relative'
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
    const sezonId = kimlikdogrulamaResponse.sezonId;
    const kullaniciId = kimlikdogrulamaResponse.kullaniciId;
    const UrunMasrafArray = _.map(kimlikdogrulamaResponse.urunList.urunMasrafTablo,(val) =>{
        return { ...val};
    });
    return {UrunMasrafArray,kullaniciId,sezonId};
};

export default connect(mapStateToProps,{aciklamaChanged,miktarChanged,_IslemMasrafiChanged,tarlaAddClickTarlaList,masrafPut })(UrunMasraf);