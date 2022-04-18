import React,{useState} from 'react';
import {View,Text,TextInput} from 'react-native';

const HandlingTextInput=()=> {
    const[text,setText]=useState('');
  return (
   <View>
       <TextInput
       style={{height:40,borderColor:'#e2e2e2',borderWidth:1,borderStyle:'solid',paddingLeft:5}}
       onChangeText={text=>setText(text)}
       placeholder='Enter to translate'
       defaultValue={text}
       />
       <Text style={{padding:'20',fontSize:'42'}}>
           {text.split(' ').map((word)=> word && '🍕').join(' ')}
       </Text>
   </View>
  )
}
export default  HandlingTextInput