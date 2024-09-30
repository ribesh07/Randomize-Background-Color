/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


function App(): React.JSX.Element {
//  const backgroundColor = '#000000';
 const [backgroundColor,setbackgroundColor] = useState('ffffff');
 const colorCustom = '#' + backgroundColor;
  function generateColor(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    setbackgroundColor(randomColor);
  }

  return (
      <>
      <StatusBar
      backgroundColor={colorCustom} />
      <View style={[styles.sectionContainer,{backgroundColor:colorCustom}]}>
        <TouchableOpacity onPress={()=>{
          // setbackgroundColor('000000');
          generateColor();
        }}>
          <View style={{
            alignItems:'center',
            justifyContent:'center',
            // height:35,
            padding: 12,
            borderRadius : 8,
            backgroundColor : 'aqua',
            }}>
            <Text selectable={true} style={{fontSize:20,fontWeight:'bold'}}>Color : {colorCustom}</Text>
          </View>
        </TouchableOpacity>
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent : 'center',
    // backgroundColor:'red',
  },
});

export default App;
