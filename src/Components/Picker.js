import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CountryPicker = (props) => {
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={styles.container}>
      <Icon name={props.icon} color="#000" style={styles.ic}> </Icon>
      <Picker
        selectedValue={selectedValue}
        style={styles.pickr}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Select country"  />
        <Picker.Item label="INDIA" value="INDIA" />
        <Picker.Item label="USA" value="USA" />
        <Picker.Item label="CANADA" value="CANADA" />
        <Picker.Item label="AUSTRALIA" value="AUSTRALIA" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin:10 ,
    width: 340,
    borderRadius : 20,
    marginLeft:40,
    backgroundColor :'#fff',
    marginBottom:25
  },
  pickr :{
    height: 40,
    width: 200,
    paddingLeft: 50,
    justifyContent: 'space-between',
    borderColor: 'gray',
    marginTop: 7 ,
    marginLeft:47,
    marginBottom:7,
    fontSize : 18
  },
  ic :{
    position: 'absolute',
    left: 10,
    top: 10,
    fontSize: 32,
    fontWeight: 'bold'
  }
});

export default CountryPicker;