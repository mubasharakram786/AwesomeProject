import React,{useState} from 'react'
import {View,Text,Button} from 'react-native'
const Cat=(props)=> {
    const[isHungary,setIsHungary]=useState(true);
    // let isHungary=true;
  return (
    <View>
        <Text>
            I am {props.name} and I'm  {isHungary? 'hungary':'full'}
        </Text>
        <Button
        onPress={()=>{setIsHungary(false)}}
        disabled={!isHungary}
        title={isHungary?'Pour me Some Milk':'Thank You'}
        />
    </View>
  )
}
export default Cat;
