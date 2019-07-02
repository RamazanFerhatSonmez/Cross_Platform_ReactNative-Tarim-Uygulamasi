import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import uyeOlForm from './components/uyeOlForm';
import userProfil from './components/userProfil';
import sezonPage from "./components/sezonPage";
import SezonTarlaList from "./components/SezonTarlaList";
import TarlaAdd from "./components/TarlaAdd";
import TarlaMapView from "./components/TarlaMapView";
import UrunAdd from "./components/UrunAdd";
import UrunContent from "./components/UrunContent";
import { Actions } from 'react-native-router-flux';
import TarlaView from "./components/TarlaView";
//import konumEkleMap from '../map/appOpen';

class RouterComponent extends React.Component {

    render() {
        return (
            <Router>
                <Scene key="main">
                    <Scene
                        key="girisYap"
                        component={LoginForm}
                        title="Giriş Sayfası"
                    />
                    <Scene
                        key="uyeOl"
                        component={uyeOlForm}
                        title="Üye Ol"
                    />
                    <Scene
                        key="profilform"
                        component={userProfil}
                        title="Ana Sayfa"
                    />
                    <Scene
                        onRight={() => Actions.girisYap()}
                        rightTitle="Cıkış Yap"
                        key="TarlaAdd"
                        component={TarlaAdd}
                        title="Tarla Ekleme"
                    />
                    <Scene
                        onRight={() => Actions.girisYap()}
                        rightTitle="Cıkış Yap"
                        key="sezonPage"
                        component={sezonPage}
                        title="Sezonlar"
                    />
                    <Scene
                        onRight={() => Actions.girisYap()}
                        rightTitle="Cıkış Yap"
                        key="TarlaView"
                        component={TarlaView}
                    />
                    <Scene
                        onRight={() => Actions.girisYap()}
                        rightTitle="Cıkış Yap"
                        key="tarlaPage"
                        component={SezonTarlaList}
                        title="Tarlalarım"
                    />
                    <Scene
                        onRight={() => Actions.girisYap()}
                        rightTitle="Cıkış Yap"
                        key="TarlaMapView"
                        component={TarlaMapView}
                    />
                    <Scene
                        onRight={() => Actions.girisYap()}
                        rightTitle="Cıkış Yap"
                        key="UrunAdd"
                        component={UrunAdd}
                    />
                    <Scene
                        onRight={() => Actions.girisYap()}
                        rightTitle="Cıkış Yap"
                        key="UrunContent"
                        component={UrunContent}
                        title="Tarla İşlemleri"
                    />
                </Scene>
            </Router>
        );
    }
}
const styles = {
    navBar: {
        backgroundColor: '#63656490',
    },
    navBarTitle: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    barButtonTextStyle: {
        color: '#FFFFFF'
    },
    barButtonIconStyle: {
        tintColor: 'rgb(255,255,255)'
    },
}
export default RouterComponent;