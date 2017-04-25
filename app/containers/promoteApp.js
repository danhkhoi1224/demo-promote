
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import List from '../components/list'
import Detail from '../components/detail'
import * as action from '../actions/action';
import { connect } from 'react-redux';
import {View,Text,ListView, Navigator} from 'react-native'


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

 class PromoteApp extends Component {
  constructor(props) {
    super(props);
    this.state  ={screen : 2};
    this.state.transfer = {};
  }
   _renderScene = ( route, navigator ) => {
    _navigator = navigator;
    switch ( route.id ) {
      case 'ListScreen':
        const { state, actions } = this.props;
        return(<List data = {state} {...actions} navigator={navigator} title='List' />);
      case 'DetailScreen':
        console.log('chay den day roi ne')
        return(<Detail navigator={navigator} title="Detail" />);
    }
  }
  render() {
   
    return (
      <Navigator
        initialRoute={{
          id: 'ListScreen'
        }}
        renderScene={
          this._renderScene
        }
      />
    );
  }
}

export default connect(state => ({
    state: state.handle
  }),
  (dispatch) => ({
    actions: bindActionCreators(action, dispatch)
  })
)(PromoteApp);
