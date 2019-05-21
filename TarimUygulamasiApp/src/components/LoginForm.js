import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    View,
    Alert,
    ImageBackground,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
    emailChanged,
    passwordChanged,
    loginUser } from '../actions';

import { Spinner } from '../GlobalJS';

let { height, width } = Dimensions.get('window');

class LoginForm extends Component {
    state ={
        email: '',
        password: '',
        loading: false };
    clickuyeOl() {
        Actions.uyeOl();
    }
    clickLogin() {
        const {
            email,
            password,sezon } = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (!this.props.loading) {
            return(
                <View>
                    <TouchableOpacity
                        onPress={this.clickLogin.bind(this)}
                        style={styles.buttonStyle}>
                        <Text style={styles.textStyle}> Giriş Yap </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.clickuyeOl}
                        style={styles.buttonStyle}>
                        <Text style={styles.textStyle}>Üye Ol </Text>
                    </TouchableOpacity>
                </View>

            )
        }else{
            return(
                <Spinner size="small" />
            )
        }

    }
    render() {
        const { TextInputStyle } = styles;
        return (
            <ImageBackground
                source={require('../images/uyeOlTarla.jpg')}
                style={styles.backgroundImage} >
                <View
                    style={styles.searchSection}>
                        <TextInput
                            placeholder="E-mail"
                            style={TextInputStyle}
                            value={this.props.email}
                            onChangeText={email => this.props.emailChanged(email)}/>
                        <TextInput
                            secureTextEntry
                            placeholder="Şifre"
                            style={TextInputStyle}
                            value={this.props.password}
                            onChangeText={password => this.props.passwordChanged(password)}/>
                    {this.renderButton()}
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
        marginTop:5,
        marginLeft: 35,
        marginRight: 35,
        position: 'relative'
    },
    buttonStyle: {
        backgroundColor: '#9ebc3899',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#636564',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 40,
        paddingRight:50,
        marginTop:5,
        marginLeft: 80,
        marginRight: 80,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative'
    }
});
const mapStateToProps = ({ kimlikdogrulamaResponse }) => {
    const {
        email,
        password,
        sezon,
        loading } = kimlikdogrulamaResponse;
    return {
        email: 'frht@gmail.com',//girişte otomatık gelsin diye
        password: 'frht12',
        loading
    };
};

export default connect(mapStateToProps,{emailChanged, passwordChanged, loginUser })(LoginForm);