
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import List from '../components/list'
import * as action from '../actions/action';
import { connect } from 'react-redux';
import {View,Text,ListView} from 'react-native'


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

 class PromoteApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
        <List data = {state} {...actions}></List>
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
