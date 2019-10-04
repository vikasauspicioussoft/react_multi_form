import React, { Component } from 'react';
import { UserForm } from './components/UserForm';
import { Test } from './components/Test';



class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm />
        {/* <Test /> */}
      </div>
    );
  }
}

export default App;
