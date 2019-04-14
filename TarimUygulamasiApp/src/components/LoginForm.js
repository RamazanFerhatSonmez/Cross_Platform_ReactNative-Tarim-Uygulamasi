import React, { Component } from 'react';
import { Alert, TextInput } from 'react-native';
import Button from './GlobalJS/Button';
import Card from './components/Card';
import CardSection from './components/CardSection';
import Spinner from './components/Spinner';

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
