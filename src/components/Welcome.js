import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App'
import {Helmet} from "react-helmet";

class Welcome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {tweakName: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      event.persist();
      this.state.tweakName = event.target.value;
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
                                ReactDOM.render((
                                    <div>
                                        <div className="modal modal-important" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">New Project</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => {
                                                    ReactDOM.render(<App />, document.getElementById('root'));
                                                    this.state.tweakName = '';
                                                }}>
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Name</label>
                                                <input type="text" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter Tweak Name" value={this.state.value} onChange={this.handleChange}/>
                                                <small id="emailHelp" className="form-text text-muted">What do you want everyone to call your tweak?</small>
                                            </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => {
                                                    ReactDOM.render(<App />, document.getElementById('root'));
                                                    this.state.tweakName = '';
                                                }}>Close</button>
                                                <button type="button" className="btn btn-primary" onClick={() => {
                                                    document.getElementById('exampleModal').classList.add("exitTrans");
                                                }}>Next</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <App />
                                        <Helmet>
                                            <script>
                                                
                                            </script>
                                        </Helmet>
                                    </div>
                                ), document.getElementById('root'));
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
        </div>
      );
    }
}

export default Welcome;