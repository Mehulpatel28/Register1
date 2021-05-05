import React from 'react';
import {View, Text, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Details ({route}) {
  const {name, avatar, email} = route.params;
  console.log(name);
  return (
    <Animatable.View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
    animation="fadeInUp" iterationDelay={500}>
      <View
        style={{
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor: 'grey',
          padding: 10,
        }}>
        <Image source={{uri:avatar}} style={{width: 300, height: 400}} />
        <Text
          style={{
            fontSize: 27,
            fontWeight: '100',
            color: 'white',
            alignSelf: 'center',
          }}>
          {name}
        </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>
          {email}
        </Text>
      </View>
    </Animatable.View>
  );
}
