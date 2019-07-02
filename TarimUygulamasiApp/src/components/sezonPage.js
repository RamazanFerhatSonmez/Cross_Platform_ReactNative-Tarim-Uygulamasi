import _ from 'lodash';
import React, { Component } from 'react';
import {
    Dimensions,
    ListView, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import Dialog from "react-native-dialog";
import {connect} from "react-redux";
import ListItem from './ListItem';
import {sezonNameChanged, sezonNamePut} from '../actions';
let { height, width } = Dimensions.get('window');
class sezonPage extends Component {
    componentWillMount() {
        this.sezonListDataSource(this.props);
    }
    state = {
        dialogVisible: false,
        sezonName: '',
    };
    showDialog = () => {
        this.setState({ dialogVisible: true });
    };
    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };
    handleSave = () => {
        // The user has pressed the "Delete" button, so here you can do your own logic.
        // ...Your logic
        console.log(this)
        const mail = this.props.mail;
        const sezonName = this.props.sezonName;
        debugger
        this.props.sezonNamePut(mail,sezonName)
            this.setState({ dialogVisible: false });
    };
    sezonListDataSource({sezonArray}) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(sezonArray);
    }
    renderRow(sezon){
        return <ListItem sezon={sezon}/>;
    }
    render() {
        const { buttonStyle,sezonAddTextStyle } = styles;
        return (
            <View>
                <ListView
                  enableEmptySections 
                  dataSource={this.dataSource}
                  renderRow={this.renderRow}
                />
                <TouchableOpacity onPress={this.showDialog.bind(this)}  style={[buttonStyle, {backgroundColor:'rgba(193,255,39,0.58)'}]}>
                    <Text style={sezonAddTextStyle}> Sezon Ekle </Text>
                </TouchableOpacity>
                <View>
                    <Dialog.Container visible={this.state.dialogVisible}>
                        <Dialog.Title>Sezon Ekleme</Dialog.Title>
                        <Dialog.Input
                            label="Sezon Adı"
                            wrapperStyle={{
                                alignSelf: 'stretch',
                                color: '#636564',
                                fontSize: 10,
                                fontWeight: '100',
                                backgroundColor: '#ffffff99',
                                borderRadius: 8,
                                borderWidth: 1,
                                borderColor: '#636564',
                                position: 'relative'}}
                            value={this.props.sezonName}
                            onChangeText={sezonName => this.props.sezonNameChanged(sezonName)}
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
    const { sezonName,kullaniciId,mail} = kimlikdogrulamaResponse;
    const sezonArray = _.map(kimlikdogrulamaResponse.sezon,(val) =>{
        return { ...val};
    });
    return {sezonArray,sezonName,kullaniciId,mail};
};
export default connect(mapStateToProps,{sezonNameChanged,sezonNamePut })(sezonPage);
