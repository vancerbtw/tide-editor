import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App'
import {Helmet} from "react-helmet";
import CreateTweakModal from './CreateTweakModal'
import '../App.css';

class Welcome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          tweakName: '',
          showCreateTweak: false,
          showCreateApp: false,
          showCreateBlank: false,
          
      };
    
      this.handleChange = this.handleChange.bind(this);
      this.openEditor = this.openEditor.bind(this);
    }

    componentDidMount() {
        
    }

    handleChange(event) {
      event.persist();
      this.state.tweakName = event.target.value;
    }
  
    openEditor() {
        ReactDOM.render((
            <App view="editor"/>
        ), document.getElementById('root'));
    }

    render() {
        
    function generateApp() {
        console.log('test 2')
    }
        
    function generateBlank() {
        
    }

    function stepOneNextTweak() {
      alert('A name was submitted: ' + this.state.value);
    }

      return (
        <div>
            <div id="tweakModalContainer">
                
            </div>
            <div className="jumbotron welcome-jumbotron">
                <h1 className="display-4">Welcome to TIDE!</h1>
                <p className="lead">To begin create a project or open a preexisting project.</p>
                <hr className="my-4" />
                <div className="container">
                    <div className="row">
                        <div className="card mx-auto card-img-top-m" style={{width: '23%'}}>
                            <img src="../images/Priority.jpg" className="mx-auto card-img-top-m" alt="..." style={{width: '80%', height: 'auto', borderRadius: '18px'}} />
                            <div className="card-body">
                                <h5 className="card-title">iOS Tweak</h5>
                                <p className="card-text">Quickly generate an iOS Tweak project with TIDE.</p>
                                <a href="#" className="btn btn-primary card-btn" onClick={() => {
                                    this.setState({
                                        showCreateTweak: true
                                    }, () => {
                                        ReactDOM.render((
                                        <CreateTweakModal className="createTweak" show={this.state.showCreateTweak}/>
                                    ), document.getElementById('tweakModalContainer'));
                                    });
                                }}>Get Started</a>
                            </div>
                        </div>
                        <div className="card mx-auto card-img-top-m" style={{width: '23%'}}>
                            <img src="../images/Priority.jpg" className="mx-auto card-img-top-m" alt="..." style={{width: '80%', height: 'auto', borderRadius: '18px'}} />
                            <div className="card-body">
                                <h5 className="card-title">iOS App</h5>
                                <p className="card-text">Quickly generate an iOS App project with TIDE.</p>
                                <a href="#" className="btn btn-primary card-btn" onClick={generateApp}>Get Started</a>
                            </div>
                        </div>
                        <div className="card mx-auto card-img-top-m" style={{width: '23%'}}>
                            <img src="../images/Priority.jpg" className="mx-auto card-img-top-m" alt="..." style={{width: '80%', height: 'auto', borderRadius: '18px'}} />
                            <div className="card-body">
                                <h5 className="card-title">Blank Project</h5>
                                <p className="card-text">Quickly generate a blank TIDE project.</p>
                                <a href="#" className="btn btn-primary card-btn" onClick={generateBlank}>Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="btn btn-primary btn-lg mx-auto" href="#" role="button" style={{marginTop: '5vh'}} onClick={this.openEditor}>Open TIDE project</a>
            </div>
        </div>
      );
    }
}

export default Welcome;