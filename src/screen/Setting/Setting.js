import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Right from 'react-native-vector-icons/dist/MaterialIcons';
import styles from './Styles'

class componentName extends Component {
  render() {
    return (

      <View style={styles.container}>

        <TouchableOpacity>
          <View>
            <Icon
              style={styles.icn}
              name="person"
              color="#000"
            />
            <Text style={styles.txt}> Parent Profile</Text>
            <Icon
              style={styles.icn1}
              name="keyboard-arrow-right"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View>
            <Icon
              style={styles.icn}
              name="storage"
              color="#000"
            />
            <Text style={styles.txt}> Term & Conditions </Text>
            <Icon
              style={styles.icn1}
              name="keyboard-arrow-right"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View>
            <Icon
              style={styles.icn}
              name="email"
              color="#000"
            />
            <Text style={styles.txt}> Contact & FAQs </Text>
            <Icon
              style={styles.icn1}
              name="keyboard-arrow-right"
            />
          </View>
        </TouchableOpacity>

      </View>

    )
  }
}

export default componentName

