import React, { Component } from 'react';
import './App.css';
import Container from './components/container'
import { connect } from 'react-redux'
import {fetchAll, setSearchTerm} from './actions/movieActions'

// export default InputExampleActionLabeledButton
class App extends Component {
  render() {
    return (
      <div>
      <Container {...this.props}  />
     </div>
    );
  }
}

const mapSTateToProps = state => {
  console.log(state)
  return {
    data: state.data,
    search: state.search
  }
}
const mapActionsToProps = {
  fetchAll,
  setSearchTerm
}
export default connect(mapSTateToProps, mapActionsToProps)(App);
