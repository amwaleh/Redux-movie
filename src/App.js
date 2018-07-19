import React, { Component } from 'react';
import './App.css';
import Container from './components/container'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { fetchAll, setSearchTerm, fetchOne } from './actions/movieActions'
import { bindActionsCreater } from 'redux'

// export default InputExampleActionLabeledButton
class App extends Component {
  render() {
    return (
      <div>
        <Menu size={'large'} text={'movie'} />
        <Container {...this.props} />
      </div>
    );
  }
}

const mapSTateToProps = state => {
  console.log(state)
  return {
    data: state.data,
    search: state.search,
    multiView: state.multiView
  }
}
const mapActionsToProps = {
  fetchAll,
  setSearchTerm,
  fetchOne
}
export default connect(mapSTateToProps, mapActionsToProps)(App);
