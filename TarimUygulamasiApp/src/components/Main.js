import React , { Component } from 'react';
import { View } from 'react-native';
import Header from '../GlobalJS/Header';
import LoginForm from '../components/LoginForm';
import CardSection from '../components/CardSection';
import Button from '../GlobalJS/Button';
import Spinner from '../components/Spinner';

class Main  extends Component {
  state = { loggedIn: false };
  clickLogout() {

  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
             <Button onPress={this.clickLogout.bind(this)}> CIKIŞ </Button>
          </CardSection>
        );
      case false:
        return (
          <View>
            <LoginForm />
          </View>
        );
      default:
        return (
            <View>
                <LoginForm />
            </View>
        );
    }
  }
  render() {
        return (
            <View>
                <Header headerText="GIRIS" />
                { this.renderContent() }
            </View>
        );
    }
}
export default Main;
