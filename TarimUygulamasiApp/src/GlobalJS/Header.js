import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = steyles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
   </View>
  );
};
const steyles = {
  textStyle: {
    fontSize: 30
  },
  viewStyle: {
    backgroundColor: '#0022',
    height: 60,
    justifyContent: 'center', /* flex-end,flex-start-- dikine olarak çalısır*/
    alignItems: 'center'  /* yatay olarak çalışır*/
  }
};
export default Header;
