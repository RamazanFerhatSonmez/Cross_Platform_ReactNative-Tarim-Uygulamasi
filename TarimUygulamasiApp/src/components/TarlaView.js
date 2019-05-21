import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    Dimensions
} from "react-native";

import UrunView from './UrunView';
import TarlaMapView from './TarlaMapView';
import {connect} from "react-redux";
import {tarlaAdChanged, tarlaAddPost, tarlaDateChanged, tarlaDekarChanged} from "../actions";
import {Actions} from "react-native-router-flux";

const { width } = Dimensions.get("window");

class TarlaView extends React.Component {

    state = {
        active: 0,
        xTabUrun: 0,
        xTabKonum: 0,
        translateX: new Animated.Value(0),
        translateXTabUrun: new Animated.Value(0),
        translateXTabKonum: new Animated.Value(width),
        translateY: -1000
    }
    handleSlide = type => {
        let { xTabUrun,
            xTabKonum,
            translateX,
            active ,
            translateXTabUrun,
            translateXTabKonum } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start()
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabUrun, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabKonum, {
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabUrun, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabKonum, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
    }
    render() {
        let { xTabUrun,
            xTabKonum,
            translateX,
            active ,
            translateXTabUrun,
            translateXTabKonum,
            translateY
        } = this.state;
        return (
            <View style={{flex:1}}>
                <View
                    style={{
                        width: '90%',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 0,
                            marginBottom: 20,
                            height: 36,
                            position: 'relative'
                        }}
                    >
                        <Animated.View
                            style={{
                                position: 'absolute',
                                width: '50%',
                                height: '100%',
                                top: 0,
                                left: 0,
                                backgroundColor: '#5490FF',
                                borderRadius: 4,
                                transform: [{
                                    translateX
                                }]
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 1,
                                borderRadius: 4,
                                borderColor: '#5490FF',
                                borderRightWidth: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                            onLayout={event => this.setState({xTabUrun: event.nativeEvent.layout.x})}
                            onPress={() => this.setState({active: 0}, () => this.handleSlide(xTabUrun))}
                        >
                            <Text style={{ color: active === 0 ? '#fff' : '#5490FF'}}> Ürünler </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 1,
                                borderRadius: 4,
                                borderColor: '#5490FF',
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                            onLayout={event => this.setState({xTabKonum: event.nativeEvent.layout.x})}
                            onPress={() => this.setState({active: 1}, () => this.handleSlide(xTabKonum))}
                        >
                            <Text style={{ color: active === 1 ? '#fff' : '#5490FF'}}> Tarla Konum </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabUrun
                                    }
                                ]
                            }}
                            onLayout={event =>
                                this.setState({
                                    translateY: event.nativeEvent.layout.height
                                })
                            }
                        >
                            <UrunView />
                        </Animated.View>

                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabKonum
                                    },
                                    {
                                        translateY: -translateY
                                    }
                                ]
                            }}
                        >
                        </Animated.View>
                    </ScrollView>
                </View>
            </View>

        );
    }
}
const mapStateToProps = ({ kimlikdogrulamaResponse }) => {
    const {
        tarlaID,
    } =  kimlikdogrulamaResponse;
    return {
        tarlaID
    };
};

export default connect(mapStateToProps,{tarlaAdChanged,tarlaDekarChanged,tarlaDateChanged,tarlaAddPost})(TarlaView);