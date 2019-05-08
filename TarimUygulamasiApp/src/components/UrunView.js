import _ from 'lodash';
import React, { Component } from 'react';
import {
    Dimensions,
    ListView, Text, TouchableOpacity, View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";
import ListItemUrun from './ListItemUrun';
let { height, width } = Dimensions.get('window');
class UrunView extends Component {
    componentWillMount() {
        this.sezonListDataSource(this.props);
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
        const { buttonStyle, textStyle } = styles;
        return (
            <View>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
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
    const urunArray = _.map(kimlikdogrulamaResponse.urunList,(val) =>{
        return { ...val};
    });
    return {urunArray};
};

export default connect(mapStateToProps,{ })(UrunView);