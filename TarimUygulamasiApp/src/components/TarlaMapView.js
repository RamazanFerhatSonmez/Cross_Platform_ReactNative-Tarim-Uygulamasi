import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
import MapView from 'react-native-maps';
 const { width , height } = Dimensions.get('window')
export default class TarlaMapView extends Component {

    render() {
        return(
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 39.73902,
                            longitude: 37.018568,
                            latitudeDelta: 17,
                            longitudeDelta: 17,
                        }}
                    />
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    map: {
        flex: 1,
        width: width
    }
});
