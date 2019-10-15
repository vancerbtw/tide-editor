import React from 'react'
import './TabBar.css'

class TabBar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        if (this.props.openFiles.length > 0) {
            return (
            <ul className="tabs group">
                {this.props.openFiles.map((file, index) => {
                    if (this.props.keyFile != "") {
                        console.log(this.props.keyFile)
                        if (file.path === this.props.keyFile.path) {
                            console.log('test')
                            return (
                                <li key={index}><a id="tab" className="active" style={{color: "#6edeef"}} onClick={() => {
                                    console.log('thing')
                                    this.props.editor.openFile(file);
                                }}>{file.name}</a></li>
                            )
                        }
                    } else {
                        if (index === 0) {
                            return (
                                <li key={index}><a id="tab" className="active" style={{color: "#6edeef"}} onClick={() => {
                                    console.log('thing1')
                                    this.props.editor.openFile(file);
                                }}>{file.name}</a></li>
                            )
                        }
                    }
                    return (
                        <li key={index}><a id="tab" onClick={() => {
                            console.log('thing2')
                            this.props.editor.openFile(file);
                        }}>{file.name}</a></li>     
                    )
                })}
            </ul>
          )
        } else {
            return null
        } 
    }
}

export default TabBar