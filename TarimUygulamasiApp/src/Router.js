import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";

class RouterComponent extends React.Component {

    render() {
        return (
            <Router
                navigationBarStyle={styles.navBar}
                titleStyle={styles.navBarTitle}
                barButtonTextStyle={styles.barButtonTextStyle}
                barButtonIconStyle={styles.barButtonIconStyle}
                sceneStyle={{ marginTop: 53 }}>
                    <Scene
                        key="girisYap"
                        component={LoginForm}
                        style={{
                            color: '#000',
                            fontSize: 16,
                            fontWeight: '600',
                        }}
                        title="Giriş Sayfası" />

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