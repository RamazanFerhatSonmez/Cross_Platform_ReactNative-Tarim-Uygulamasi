import _ from 'lodash';
import React, { Component } from 'react';
import {
    Dimensions,
    ListView, Text, TouchableOpacity, View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";
import { tarlaAddClickTarlaList,IslemAdiChanged,IslemMasrafiChanged,islemPut } from "../actions";
import ListItemUrunIslem from './ListItemUrunIslem';
import Dialog from "react-native-dialog";
let { height, width } = Dimensions.get('window');
class UrunIslem extends Component {
    componentWillMount() {
        this.urunIslemListDataSource(this.props);
    }
    state = {
        dialogVisible: false,
        IslemAdi:'',
        IslemMasrafi:'',
    };
    urunIslemAdd = () => {
        this.setState({ dialogVisible: true });
    };
    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };
    handleSave = () => {
        // The user has pressed the "Delete" button, so here you can do your own logic.
        // ...Your logic
        console.log(this)
        const islemData = {

        }
        this.props.islemPut(islemData);
        this.setState({ dialogVisible: false });
    };
    urunIslemListDataSource({UrunIslemArray}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(UrunIslemArray);
    }
    renderRow(urunIslem){
        return <ListItemUrunIslem urunIslem={urunIslem}/>;
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
                <TouchableOpacity onPress={this.urunIslemAdd.bind(this)}  style={[buttonStyle, {backgroundColor:'rgba(193,255,39,0.58)'}]}>
                    <Text style={tarlaAddTextStyle}> Islem Ekle </Text>
                </TouchableOpacity>
                <View>
                    <Dialog.Container visible={this.state.dialogVisible}>
                        <Dialog.Title>Islem Ekleme</Dialog.Title>
                        <Dialog.Input
                            label="Islem Adı"
                            wrapperStyle={wrapper_Style}
                            value={this.props.IslemAdi}
                            onChangeText={IslemAdi => this.props.IslemAdiChanged(IslemAdi)}
                        />
                        <Dialog.Input
                            label="Islem Masrafı(TL)"
                            wrapperStyle={wrapper_Style}
                            value={this.props.IslemMasrafi}
                            onChangeText={IslemMasrafi => this.props.IslemMasrafiChanged(IslemMasrafi)}
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
    const UrunIslemArray = _.map(kimlikdogrulamaResponse.urunList.islemTuru,(val) =>{
        return { ...val};
    });
    return {UrunIslemArray,kullaniciId,sezonId};
};

export default connect(mapStateToProps,{IslemAdiChanged,IslemMasrafiChanged,tarlaAddClickTarlaList,islemPut })(UrunIslem);