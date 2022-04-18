import React from 'react'
import {Text,View,StyleSheet,TextInput,Image} from 'react-native';

const Core=(props)=>{
    return(
        <View>
            <Text>My Name is {props.name} and {props.age} years old. </Text>
        </View>
    )
}

export default Core;