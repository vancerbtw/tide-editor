import React from 'react';
import './App.css';
import Editor from './components/Editor';
import Welcome from './components/Welcome'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tweakName: '',
        showCreateTweak: false,
        showCreateApp: false,
        showCreateBlank: false,
        
    };
  }

  componentDidMount() {
      
  }

  render() {
    if (this.props.view === "editor") {
      return (
        <div className="App main-container">
          <Editor />
        </div>
      )
    } else {
      return (
        <div className="App main-container">
          <Welcome />
        </div>
      )
    }
  }

}

export default App;
