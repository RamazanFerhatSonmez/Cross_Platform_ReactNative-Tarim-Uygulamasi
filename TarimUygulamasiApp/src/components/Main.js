import React , { Component } from 'react';
import { Text , View } from 'react-native';
import Header from './GlobalJS/Header';
import LoginForm from './components/LoginForm';
import CardSection from './components/CardSection';
import Button from './GlobalJS/Button';
import Spinner from './components/Spinner';

class Main  extends Component {
  state = { loggedIn: null };
  clickLogout() {
    Firebase.auth().signOut();
  }
  renderContent() {
    switch (loggedIn) {
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
            <Spinner size="large" />
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
