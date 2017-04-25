import React,  {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';



export default class RemainTime extends Component {
 
	constructor(props) {
		super(props);
		this.generateText = this.generateText.bind(this);
	}
	render(){
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
		console.log('date',{currentDate, endDate});
		let timeDiff = new Date(Math.abs(endDate.getTime() - currentDate.getTime()));
		let diffDays = timeDiff.getDate();
		let diffHours = timeDiff.getHours();
		let diffMins = timeDiff.getMinutes();
		let diffSecs = timeDiff.getSeconds(); 
		let returnText = 'Còn ' + diffDays + ' ngày ' + diffHours + ' giờ ' + diffMins + ' phút ' + diffSecs + ' giây';
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