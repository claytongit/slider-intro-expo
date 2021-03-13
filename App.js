import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '1',
    title: 'Fabria de aplicativo',
    text: 'Description.Say something cool',
    image: require('./src/assets/1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: 'Curos de tecnologias',
    text: 'Other cool stuff',
    image: require('./src/assets/2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: 'Venha alevancar seu futuro',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./src/assets/3.png'),
    backgroundColor: '#22bcb5',
  }
];

export default function App() {

  const [ showSlider, setShowSlider ] = useState(false);

  function handle(){
    alert('Ok');
  }

  function renderSlides({ item }){
    return(
      <View style={{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Image 
          style={{ 
            resizeMode: 'cover',
            height: '60%', 
            width: '100%'
          }} 
          source={item.image} 
        />

        <Text 
          style={{
            paddingTop: 5,
            paddingBottom: 10,
            fontSize: 26,
            color: "#009CFF"
          }}>{item.title}</Text>     

        <Text style={{

        }}>{item.text}</Text>

      </View>
    );
  }

  if(showSlider){

    return <Text>Entrou na home</Text>

  }else{

    return (

      <AppIntroSlider 
        renderItem={ renderSlides }
        data={ slides }
        activeDotStyle={{
          backgroundColor: '#009CFF',
          width: 30
        }}
        renderNextButton={ () => <Text>Proximo</Text> }
        renderDoneButton={ () => <TouchableOpacity onPress={handle} ><Text>Acessar</Text></TouchableOpacity> }
      />

    );

  }

  
}
