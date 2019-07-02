import _ from 'lodash';
import React, { Component } from 'react';
import {
    Dimensions,
    ListView, Text, TouchableOpacity, View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";
import Dialog from "react-native-dialog";
import { tarlaAddClickTarlaList,
    tarlaAdChanged,
    tarlaDekarChanged,
    tarlaDateChanged,
    tarlaAddPost,
 } from "../actions";
import ListItemTarla from './ListItemTarla';
let { height, width } = Dimensions.get('window');
class SezonTarlaList extends Component {
    componentWillMount() {
        this.sezonListDataSource(this.props);
    }
    state = {
        dialogVisible: false,
        tarlaAd: '',
        tarlaDekarBilgisi: '',

    };
    // TarlaAddPage() {
        // const sezonId =  this.props.sezonId;
        // const kullaniciId = this.props.kullaniciId;
        // this.props.tarlaAddClickTarlaList(kullaniciId,sezonId);
    //     Actions.TarlaAdd();
    //     console.log(this);

    // }
    TarlaAddPage = () => {
        this.setState({ dialogVisible: true });
    };
    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };
    handleSave = () => {
        // The user has pressed the "Delete" button, so here you can do your own logic.
        // ...Your logic
        this.props.tarlaDateChanged(Date.now());
        const {
            kullaniciId,
            sezonId,
            tarlaAd,
            tarlaDekarBilgisi} = this.props;
        this.props.tarlaAddPost({kullaniciId,sezonId,tarlaAd, tarlaDekarBilgisi});
        this.setState({ dialogVisible: false });

    };
    sezonListDataSource({TarlaArray}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(TarlaArray);
    }
    renderRow(tarla){
        return <ListItemTarla tarla={tarla}/>;
    }

    clickuserProfil() {
        Actions.userProfil();
    }
    render() {
        console.log("STATE::" + this.props.sezonArray);
        const { buttonStyle, tarlaAddTextStyle,wrapper_Style } = styles;
        return (
            <View>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
                <TouchableOpacity onPress={this.TarlaAddPage.bind(this)}  style={[buttonStyle, {backgroundColor:'rgba(193,255,39,0.58)'}]}>
                    <Text style={tarlaAddTextStyle}> Tarla Ekle </Text>
                </TouchableOpacity>
                <View>
                    <Dialog.Container visible={this.state.dialogVisible}>
                        <Dialog.Title>Tarla Ekleme</Dialog.Title>
                        <Dialog.Input
                            label="Tarla Adı"
                            wrapperStyle={wrapper_Style}
                            value={this.props.tarlaAd}
                            onChangeText={tarlaAd => this.props.tarlaAdChanged(tarlaAd)}
                        />
                        <Dialog.Input
                            label="Tarka Dekar Bilgisi"
                            wrapperStyle={wrapper_Style}
                            value={this.props.tarlaDekarBilgisi}
                            onChangeText={tarlaDekarBilgisi => this.props.tarlaDekarChanged(tarlaDekarBilgisi)}
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
    const sezonId = kimlikdogrulamaResponse.sezonId;
    const kullaniciId = kimlikdogrulamaResponse.kullaniciId;
    const TarlaArray = _.map(kimlikdogrulamaResponse.tarlaList,(val) =>{
        return { ...val};
    });
    const {
        tarlaAd,
        tarlaDekarBilgisi} = tarlaAddResponse;
    return {TarlaArray,kullaniciId,sezonId,tarlaAd,tarlaDekarBilgisi};
};

export default connect(mapStateToProps,{tarlaAddClickTarlaList, tarlaAdChanged, tarlaDekarChanged, tarlaDateChanged,tarlaAddPost })(SezonTarlaList);