import React, { useEffect } from 'react';
import {
  Image,
  StatusBar,
  View,
} from 'react-native';

const WelcomeScreen = (props) => {
  const { navigation } = props
  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace('TermsAndConditionsScreen')
    }, 2000)
  },[])
  return ( 
      <View style={{flex: 1}}>
        <StatusBar hidden />
        <Image 
          source={require('../../assets/images/SplashImage.png')}
          style={{height: '100%', width: '100%'}}
        />
      </View>
  );
}

export default WelcomeScreen;
