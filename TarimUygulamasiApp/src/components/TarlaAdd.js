import React, { Component } from 'react';
import {
    TextInput,
    Alert,
    View,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Text } from 'react-native';
import { connect } from 'react-redux';
import {
    tarlaAdChanged,
    tarlaDekarChanged,
    tarlaDateChanged,
    tarlaAddPost,
} from '../actions';
import { Spinner } from '../GlobalJS';
let { height, width } = Dimensions.get('window');
class TarlaAdd extends Component {
    state = {
        tarlaAd:'',
        tarlaDekarBilgisi: '',
        loading: false
    };
    clickTarlaAdd() {
        this.props.tarlaDateChanged(Date.now());
        const {
            kullaniciId,
            sezonId,
            tarlaAd,
            tarlaDekarBilgisi} = this.props;
        this.props.tarlaAddPost({kullaniciId,sezonId,tarlaAd, tarlaDekarBilgisi});
    }
    renderButtontarla() {
        if (!this.props.loading) {
            return(
                <TouchableOpacity
                    onPress={this.clickTarlaAdd.bind(this)}
                    style={styles.buttonStyle}>
                    <Text style={styles.textStyle}> Ekle </Text>
                </TouchableOpacity>
            )
        }else {
            return (
                <Spinner size="small" />
            )
        }
    }

    render() {
        const { TextInputStyle } = styles;
        console.log(this);
        return (
            <ImageBackground
                source={require('../images/uyeOlTarla.jpg')}
                style={styles.backgroundImage} >
                <View style={{flex:1 ,marginTop: height/6}}>
                    <TextInput
                        placeholder="Tarla Adı"
                        style={TextInputStyle}
                        value={this.props.tarlaAd}
                        onChangeText={tarlaAd => this.props.tarlaAdChanged(tarlaAd)}/>

                    <TextInput
                        placeholder="Tarka Dekar Bilgisi"
                        style={TextInputStyle}
                        value={this.props.tarlaDekarBilgisi}
                        onChangeText={tarlaDekarBilgisi => this.props.tarlaDekarChanged(tarlaDekarBilgisi)}/>
                    {this.renderButtontarla()}
                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: width,
        height: height,

    },
    textStyle: {
        alignSelf: 'stretch',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    TextInputStyle: {
        alignSelf: 'stretch',
        color: '#636564',
        fontSize: 16,
        fontWeight: '600',
        backgroundColor: '#ffffff99',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#636564',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        marginLeft: 35,
        marginRight: 35,
        position: 'relative'
    },
    buttonStyle: {
        backgroundColor: '#e3b64399',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#636564',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft:70,
        paddingRight:50,
        marginTop:5,
        marginLeft: 80,
        marginRight: 80,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    }
});
const mapStateToProps = ({ kimlikdogrulamaResponse,tarlaAddResponse }) => {
    debugger
   const {
       kullaniciId,
       sezonId,
    } =  kimlikdogrulamaResponse;
    const {
        tarlaAd,
        tarlaDekarBilgisi} = tarlaAddResponse;
    return {
        kullaniciId,
        sezonId,
        tarlaAd,
        tarlaDekarBilgisi
    };
};

export default connect(mapStateToProps,{tarlaAdChanged,tarlaDekarChanged,tarlaDateChanged,tarlaAddPost})(TarlaAdd);
