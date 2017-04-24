import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,Image, Button} from 'react-native';



export default class RemainTime extends Component {
 
  constructor(props) {
    super(props);
    this.generateText = this.generateText.bind(this)
  }
  render(){
    const {time} = this.props;
    let returnText = this.generateText();
    return(
      <View style = {styles.container}>
          <Text style = {styles.text}>{returnText}</Text>
        </View>
    );
  }
  generateText(){
    const currentDate = new Date();
    let endDate = new Date(this.props.time*1000);
    console.log('endDate', endDate*1000);
    let timeDiff = Math.abs(endDate.getTime() - currentDate.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    let diffHours = Math.ceil((timeDiff % (1000 * 3600 *24))/(1000*3600) );
    let diffMins = Math.ceil((timeDiff % (1000* 3600 *24)) %(1000*3600)/(1000*60));
    let returnText = 'Còn ' + diffDays + ' ngày ' + diffHours + ' giờ ' + diffMins + ' phút';
    
    return returnText;
  }
   
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    marginLeft:10
  },
  text:{
    fontSize:15,
  },
});