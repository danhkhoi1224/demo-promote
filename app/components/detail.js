import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,Image, Button} from 'react-native';
import RemainTime from './remaintime'


export default class Detail extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    const {text, img, time} = this.props.data;
    return(
        <View style = {styles.container}>
            <Text>'chi tiet nay no' </Text>
        </View>
    );
  }
}

