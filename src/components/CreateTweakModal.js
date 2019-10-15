import React from 'react';
import '../index.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class CreateTweakModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweakName: '',
            show: props.show,
            setShow: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose= this.handleClose.bind(this);
      }
  
      componentDidMount() {
      }

      handleClose() {
        this.setState({
            show: false
        });    
      }

      handleShow() {
        this.setState({
            show: true
        });    
      }

      handleChange(event) {
        event.persist();
        this.setState({
            tweakName: event.target.value
        });
      }

    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header variant="primary" onClick={this.handleClose}>
                        <Modal.Title>New Project</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter Tweak Name" value={this.state.value} onChange={this.handleChange}/>
                        <small id="emailHelp" className="form-text text-muted">What do you want everyone to call your tweak?</small>
                    </div>
                    </Modal.Body>
                    <Button variant="secondary" className="mx-auto" onClick={this.handleClose} style={{marginTop: '0', marginBottom: '3%', width: '90%'}}>
                        Cancel
                    </Button>
                    <Button variant="primary" className="mx-auto" onClick={this.handleClose} style={{marginTop: '0', marginBottom: '3%', width: '90%'}}>
                        Next
                    </Button>
                </Modal>
            </div>
        );
    }
}

export default CreateTweakModal;