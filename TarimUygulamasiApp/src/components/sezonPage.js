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
        const { buttonStyle, textStyle } = styles;
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