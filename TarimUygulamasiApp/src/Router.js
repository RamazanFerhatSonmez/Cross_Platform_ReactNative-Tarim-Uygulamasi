import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import uyeOlForm from './components/uyeOlForm';
import userProfil from './components/userProfil';
//import konumEkleMap from '../map/appOpen';

class RouterComponent extends React.Component {

    render() {
        return (
            <Router
                navigationBarStyle={styles.navBar}
                titleStyle={styles.navBarTitle}
                barButtonTextStyle={styles.barButtonTextStyle}
                barButtonIconStyle={styles.barButtonIconStyle}>
                <Scene
                    key="kimlik">
                    <Scene
                        key="girisYap"
                        component={LoginForm}
                        style={{
                            color: '#000',
                            fontSize: 16,
                            fontWeight: '600',
                        }}
                        title="Giriş Sayfası" />
                    <Scene
                        key="uyeOl"
                        component={uyeOlForm}
                        title="Üye Ol" />
                    <Scene
                        key="profilform"
                        component={userProfil}
                        title="Ana Sayfa"/>
                </Scene>
            </Router>
        );
    }
}
const styles = {
    navBar: {
        backgroundColor: '#63656490',
    },
    navBarTitle:{
        color: '#fff',
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    barButtonTextStyle:{
        color: '#FFFFFF'
    },
    barButtonIconStyle:{
        tintColor: 'rgb(255,255,255)'
    },
}
export default RouterComponent;