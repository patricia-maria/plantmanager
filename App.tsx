import React from 'react';
import AppLoading from 'expo-app-loading';

import { Welcome } from './src/pages/welcome';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import { View } from 'react-native';

export default function App(){
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded)
    return(
    <AppLoading/> 
    )


  return (
    <Welcome />
  )

}