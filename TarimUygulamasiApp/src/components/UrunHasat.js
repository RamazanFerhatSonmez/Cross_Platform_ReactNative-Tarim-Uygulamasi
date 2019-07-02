import _ from 'lodash';
import React, { Component } from 'react';
import {
    Dimensions,
    ListView, Text, TouchableOpacity, View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";
import { tarlaAddClickTarlaList,birimHasatChanged,birimHasatMiktarChanged,hasatPut } from "../actions";
import ListItemUrunHasat from './ListItemUrunHasat';
import Dialog from "react-native-dialog";
let { height, width } = Dimensions.get('window');
class UrunHasat extends Component {
    componentWillMount() {
        this.hasatListDataSource(this.props);
    }
    state = {
        dialogVisible: false,
        sezonName: '',
    };
    urunHasatAdd = () => {
        this.setState({ dialogVisible: true });
    };
    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };
    handleSave = () => {
        // The user has pressed the "Delete" button, so here you can do your own logic.
        // ...Your logic
        console.log(this)
        const hasatData = {

        }
        this.props.hasatPut(hasatData);
        this.setState({ dialogVisible: false });

    };
    hasatListDataSource({HasatArray}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(HasatArray);
    }
    renderRow(hasat){
        return <ListItemUrunHasat hasat={hasat}/>;
    }

    clickuserProfil() {
        Actions.userProfil();
    }
    render() {
        console.log("STATE::" + this.props.sezonArray);
        const { buttonStyle, textStyle, tarlaAddButtonStyle, tarlaAddTextStyle,wrapper_Style } = styles;
        return (
            <View>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
                <TouchableOpacity onPress={this.urunHasatAdd.bind(this)}  style={[buttonStyle, {backgroundColor:'rgba(193,255,39,0.58)'}]}>
                    <Text style={tarlaAddTextStyle}> Hasat Ekle </Text>
                </TouchableOpacity>
                <View>
                    <Dialog.Container visible={this.state.dialogVisible}>
                        <Dialog.Title>Hasat Ekleme</Dialog.Title>
                        <Dialog.Input
                            label="Birim Hasat"
                            wrapperStyle={wrapper_Style}
                            value={this.props.birimHasat}
                            onChangeText={birimHasat => this.props.birimHasatChanged(birimHasat)}
                        />
                        <Dialog.Input
                            label="Birim Hasat Miktarı"
                            wrapperStyle={wrapper_Style}
                            value={this.props.birimHasatMiktar}
                            onChangeText={birimHasatMiktar => this.props.birimHasatMiktarChanged(birimHasatMiktar)}
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
    tarlaAddTextStyle: {
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
    const HasatArray = _.map(kimlikdogrulamaResponse.urunList.urunHasat,(val) =>{
        return { ...val};
    });
    return {HasatArray,kullaniciId,sezonId};
};

export default connect(mapStateToProps,{birimHasatChanged,birimHasatMiktarChanged,tarlaAddClickTarlaList,hasatPut })(UrunHasat);