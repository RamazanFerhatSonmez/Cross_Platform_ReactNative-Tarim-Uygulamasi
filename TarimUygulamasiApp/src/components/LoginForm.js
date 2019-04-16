import React, { Component } from 'react';
import { Alert, TextInput } from 'react-native';
import Button from '../GlobalJS/Button';
import Card from '../GlobalJS/Card';
import CardSection from '../GlobalJS/CardSection';
import Spinner from '../GlobalJS/Spinner';
import axios from 'axios';

class LoginForm extends Component {
  state ={ email: '', password: '', loading: false};
  clickLogin() {

    this.setState({ loading: true});
    const { email , password } = this.state;
    if( email === '' || password === ''){
      this.setState({ loading: false});
      Alert.alert(
        'Mesaj',
        'Boş Alanları Doldurunuz...',
        [
          { text: 'Tamam', onPress: () => null }
        ]
      );
    }else{
        const url = 'http://127.0.0.1:8082/userLogin/dln@gmail.com';
        debugger
        axios.get(url)
            .then((user) => {
                console.log(ambilData.data);
                if(user){
                    this.setState({ loggedIn: true });
                    this.loginSucces.bind(this)
                }else{
                    this.setState({ loggedIn: false });
                    this.loginFail.bind(this)
                }
            })
    }
  }
  loginSucces() {
    console.log('loginSucces');
    this.setState({  email: '', password: '', loading: false});
  }
  loginFail() {
    console.log('loginFail');
    this.setState({ loading: false});
    Alert.alert(
      'Mesaj',
      'Kullanıcı adı veya şifreniz hatalı',
      [
        { text: 'Tamam', onPress: () => null }
      ]
    );
  }
  renderButton() {
    if(!this.state.loading){
      return <Button onPress={this.clickLogin.bind(this)}> Giriş </Button>;
    }else{
      return <Spinner size="small" />;
    }
  }
  render() {
    const { inputStyle } = styles;
    return (
      <Card>
        <CardSection>
           <TextInput
           placeholder = "E-Mail"
           style={inputStyle}
           value={this.state.email}
           onChangeText={ email => this.setState({ email }) }
           />
        </CardSection>

        <CardSection>
           <TextInput
           secureTextEntry
           placeholder = "Şifre"
           style={inputStyle}
           value={this.state.password}
           onChangeText={password => this.setState({ password })}
           />
        </CardSection>

        <CardSection>
           {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },

};
export default LoginForm;
