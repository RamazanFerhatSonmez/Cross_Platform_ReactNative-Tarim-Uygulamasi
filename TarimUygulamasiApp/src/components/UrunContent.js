import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Dimensions
} from "react-native";

import UrunHasat from './UrunHasat';
import UrunIslem from './UrunIslem';
import UrunMasraf from './UrunMasraf';
import {connect} from "react-redux";
import {tarlaAdChanged, tarlaAddPost, tarlaDateChanged, tarlaDekarChanged} from "../actions";
import {Actions} from "react-native-router-flux";

const { width } = Dimensions.get("window");

class UrunContent extends React.Component {

    state = {
        active: 0,
        xTabUrunMasraf: 0,
        xTabUrunIslem: 0,
        xTabUrunHasat: 0,
        translateX: new Animated.Value(0),
        translateXTabUrunMasraf: new Animated.Value(0),
        translateXTabUrunIslem: new Animated.Value(width),
        translateXTabUrunHasat: new Animated.Value(width),
        translateY: -1000
    }
    handleSlide = type => {
        let { xTabUrunMasraf,
            xTabUrunIslem,
            xTabUrunHasat,
            translateX,
            active ,
            translateXTabUrunMasraf,
            translateXTabUrunIslem,
            translateXTabUrunHasat} = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start()
    }
    render() {
        let { xTabUrunMasraf,
            xTabUrunIslem,
            xTabUrunHasat,
            translateX,
            active ,
            translateXTabUrunMasraf,
            translateXTabUrunIslem,
            translateXTabUrunHasat,
            translateY
        } = this.state;
        return (
            <View style={{flex:1}}>
                <View
                    style={{
                        width: '100%',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 0,
                            marginBottom: 20,
                            height: 30,
                        }}
                    >
                        <Animated.View
                            style={{
                                position: 'absolute',
                                width: '33%',
                                height: '100%',
                                top: 0,
                                left: 2,
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
                                borderWidth: 2,
                                borderRadius: 4,
                                borderColor: '#5490FF',
                                borderRightWidth: 2,
                                borderTopRightRadius: 2,
                                borderBottomRightRadius: 2
                            }}
                            onLayout={event => this.setState({xTabUrunMasraf: event.nativeEvent.layout.x})}
                            onPress={() => this.setState({active: 0}, () => this.handleSlide(translateXTabUrunMasraf))}
                        >
                            <Text style={{ color: active === 0 ? '#5490FF' : '#fff'}}> Ürün Masraf </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2,
                                borderRadius: 4,
                                borderColor: '#5490FF',
                                borderLeftWidth: 2,
                                borderTopLeftRadius: 2,
                                borderBottomLeftRadius: 2
                            }}
                            onLayout={event => this.setState({xTabUrunIslem: event.nativeEvent.layout.x})}
                            onPress={() => this.setState({active: 1}, () => this.handleSlide(translateXTabUrunIslem))}
                        >
                            <Text style={{ color: active === 1 ? '#5490FF' : '#fff'}}> İşlemler</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2,
                                borderRadius: 4,
                                borderColor: '#5490FF',
                                borderRightWidth: 2,
                                borderTopRightRadius: 2,
                                borderBottomRightRadius: 2
                            }}
                            onLayout={event => this.setState({xTabUrunHasat: event.nativeEvent.layout.x})}
                            onPress={() => this.setState({active: 2}, () => this.handleSlide(translateXTabUrunHasat))}
                        >
                            <Text style={{ color: active === 2 ? '#5490FF' : '#fff'}}> Urun Hasat </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabUrunHasat
                                    }
                                ]
                            }}
                            onLayout={event =>
                                this.setState({
                                    translateY: event.nativeEvent.layout.height
                                })
                            }
                        >
                        </Animated.View>

                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabUrunIslem
                                    },
                                    {
                                        translateY: -translateY
                                    }
                                ]
                            }}
                        >
                        </Animated.View>
                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabUrunHasat
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

export default connect(mapStateToProps,{tarlaAdChanged,tarlaDekarChanged,tarlaDateChanged,tarlaAddPost})(UrunContent);