import React,  {Component} from 'react';
import {StyleSheet, ListView, View, TouchableOpacity} from 'react-native';
import Item from './item';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class List extends Component {
	constructor(props) {
		super(props);
		this.renderRow = this.renderRow.bind(this);
		this.onItemPress = this.onItemPress.bind(this);
	}


	onItemPress(){
		this.props.navigator.push({
			id: 'DetailScreen'
		});
	}

	renderRow(rowData) {
		return(
        <TouchableOpacity onPress = {this.onItemPress}>
          <Item data = {rowData}></Item>
        </TouchableOpacity>
		);
      
	}
	render() {
		const { data } = this.props;
		return(
      	<View style={styles.container}> 
          <ListView dataSource={ds.cloneWithRows(data.listData)}
                        renderRow={this.renderRow}
                        styles = {styles.listView}>          
          </ListView>
        </View>
        
		);
	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection:'column',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		backgroundColor: '#E6E6E6',
    
	},
	imagebox:{
		flex:0.5,
		justifyContent:'center',
		alignItems:'center'
      
	},
	image:{
		flex:1,
		width:100,
		height:100,
		resizeMode:'center'
	},
	listView: {
		flex:1,
		margin: 10,
	},
	row:{
		flex:1,
		backgroundColor:'#ffffff',
		padding:20,
		borderRadius: 4,
		borderWidth: 0.5,
		borderColor: '#d6d7da',
	},
	rowText:{
		flex:1,
		fontSize:15
	},
	footer: {
		flex:0.3,
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
		fontSize:15,
    
	},
	rowText2:{
		flex:1,
		flexDirection:'row'
    
	},
	rowText2main:{
		fontSize:15,
		flex:9,
	},
	rowText2sub:{
		fontSize:15,
		flex:1,
		textAlign:'right',
		fontWeight:'bold'
	},
	button: {
		flex:0.25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText:{
		flex:1,
		fontSize:20,
		alignItems:'center',
		justifyContent:'center',
		color:'blue'
	}
});