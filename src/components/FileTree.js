import React from 'react'
import './FileTree.css'
import path from 'path';
import { remote } from 'electron';
const electronFs = remote.require('fs');
const dirTree = require('directory-tree');

const home = remote.app.getPath('home');

const myPath = path.join(home, '/test');

let data;

data = dirTree(myPath, {extensions:/\.txt$/}, null, (item, path) => {
  console.log('going through Item');
});

const FileIcon = () => {
  return (
    <div class="svg-icon">
      <svg id="icon-file-text2" class="icon" viewBox="0 0 32 32" fill="currentColor" width="1em" height="1em">
        <path d="M28.681 7.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-15.5c-1.378 0-2.5 1.121-2.5 2.5v27c0 1.378 1.122 2.5 2.5 2.5h23c1.378 0 2.5-1.122 2.5-2.5v-19.5c0-0.448-0.137-1.23-1.319-2.841zM24.543 5.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-23c-0.271 0-0.5-0.229-0.5-0.5v-27c0-0.271 0.229-0.5 0.5-0.5 0 0 15.499-0 15.5 0v7c0 0.552 0.448 1 1 1h7v19.5z"></path>
<path d="M23 26h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path>
<path d="M23 22h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path>
<path d="M23 18h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path>
    </svg>
    </div>
  )
}

const FolderIcon = () => {
  return(
    <div class="svg-icon">
    <svg id="icon-folder" class="icon" viewBox="0 0 32 32" fill="currentColor" height="1em" width="1em">
      <path d="M14 4l4 4h14v22h-32v-26z"></path>
    </svg>
    </div>
  )
}

const TriangleDown = () => {
  return(
    <div class="svg-icon">
      <svg id='svg__icon--triangle-down' viewBox='0 0 9 4.5'  fill="currentColor" height="1em" width="1em">
        <path d='M0,0,4.5,4.5,9,0Z'/>
      </svg>
    </div>
  )
}

const formatName = (name) => {
  return name.substr(name.lastIndexOf('/') + 1)
}

class FileTree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeNode: null
    }
    this.setActiveNode = this.setActiveNode.bind(this)
  }
  
  setActiveNode(name) {
    this.setState({activeNode: name})
  }

  render() {
    return(
    <div>{renderTree(data, this.setActiveNode, this.state.activeNode, this.props.editor)}</div>
    )
  }  
}

class Directory extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: true
    }
    this.toggleDirectory = this.toggleDirectory.bind(this)
  }
  
  toggleDirectory() {
    this.setState({expanded: !this.state.expanded})
  }
  
  render() {
    return (
      <div className='directory-container'>
        <div className='directory'>
          <div className={`directory__toggle ${this.state.expanded ? 'expanded' : ''}`}>
            <div onClick={this.toggleDirectory}><TriangleDown/></div>
          </div>
          <div className='directory__icon'>
            <FolderIcon/>
          </div>
          <div className='directory__name'>
            <div>{formatName(this.props.node.name)}</div>
          </div>
        </div>
        {this.state.expanded ? this.props.node.children.map((content) => renderTree(content, this.props.setActiveNode, this.props.activeNode, this.props.editor)) : ''}
      </div>
    )
  }
}

const File = ({node, setActiveNode, activeNode, editor}) => {
  let isActive = (activeNode === node.name)
  let className = (isActive ? 'active' : '')
  return <div className={className + ' file'} onClick={() => {
    editor.openFile(node);
    setActiveNode(node.name);
  }}>
    <div className='file__icon'>
      <FileIcon/>
    </div>
    <div className='file__name'>
      {formatName(node.name)}
    </div>
    { isActive && 
    <div className='file__options'>
      ...
    </div> }
  </div>
}


var renderTree = (node, setActiveNode, activeNode, editor) => {
  if (node.type === "file") {
    return <File node={node} setActiveNode={setActiveNode} activeNode={activeNode} editor={editor}/>
  } else if (node.type === "directory") {
    return <Directory node={node} setActiveNode={setActiveNode} activeNode={activeNode} editor={editor}/>
  } else {
    return null
  }
}
export default FileTree
//ReactDOM.render(<FileTree root={root}/>, document.getElementById('container'))