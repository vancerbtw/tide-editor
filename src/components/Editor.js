import React, {PureComponent, Fragment} from 'react';
import path from 'path';
import { remote } from 'electron';
import AceEditor from 'react-ace';
import SplitPane from 'react-split-pane';
import 'brace/mode/javascript';
import 'brace/mode/objectivec';
import 'brace/theme/xcode';
import 'brace/theme/monokai';
import '../App.css';
import 'brace/theme/chrome';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import FileTree from './FileTree'
import './SideBar.css'
import TabBar from './TabBar'
import { withHotKeys } from "react-hotkeys";

//import FileSystemNavigator from './FileSystemNavigator'
const electronFs = remote.require('fs');
const dirTree = require('directory-tree');

const home = remote.app.getPath('home');

const rootPath = path.join(home, '/test');


/*
let data = {
    contents: [{
        type: "folder",
        name: "src",
        contents: [
            {
                type: "file",
                path: "*path*",
                name: "index.js"
            },
            
        ]
    }]
} */



class Editor extends React.Component {
constructor(props) {
    super(props);
    
    this.state = {
        openFile: null,
        files: [],
        aceEditor: null
    }

    this.onChange = this.onChange.bind(this);
    this.getFiles = this.getFiles.bind(this);
    this.openFile = this.openFile.bind(this);
    this.fileSave = this.fileSave.bind(this);
    }

    openFile(file) {

        if (this.state.aceEditor) {
            electronFs.writeFile(this.state.openFile.path, this.state.aceEditor.getValue(), (err) => {
                if (err) console.log(err);
                console.log("Successfully Written to File.");
            })
        }

        let x = true;
        if (this.state.openFile) {
            if (this.state.openFile.path === file.path || this.state.files.includes(file)) {
                x = false
            }
        }

        if (x) {
            let a = this.state.files.slice(); 
            a.push(file)
            this.setState({
                openFile: file, 
                files: a
            })
        } else {
            if (this.state.openFile) {
                if (this.state.openFile.path !== file.path) {
                    this.setState({
                        openFile: file
                    })
                }
            }
        }  
    }

    onChange(newValue) {
        console.log(newValue);
    }

    fileSave(e) {
        console.log(e.charCode)
        console.log(e.ctrlKey)
    }

    getFiles(dir) {
        let data = {
            name: 'root',
            toggled: true,
            children: [
                {
                    name: 'parent',
                    children: [
                        { name: 'child1' },
                        { name: 'child2' }
                    ]
                },
                {
                    name: 'loading parent',
                    loading: true,
                    children: []
                },
                {
                    name: 'parent',
                    children: [
                        {
                            name: 'nested parent',
                            children: [
                                { name: 'nested child 1' },
                                { name: 'nested child 2' }
                            ]
                        }
                    ]
                }
            ]
        };
        return data;
    }

    render() {
        const styleA = { background: '#eee' };
        const styleC = { background: '#000' };

        const MyHotKeysComponent = withHotKeys(Editor);

        // const keyMap = {
        //     SAVE: ["command+s", "ctrl+s"]
        //   };
           
        //   const handlers = {
        //     SAVE: (event) => {
        //         console.log("Move up hotkey called!")
        //       }
        //   };

        const keyMap = {
            TEST: "t"
          };
          
          const handlers = {
            TEST: () => console.log("Test")
          };
          
          var tabBar;
          if (!this.state.openFile) {
            tabBar = (
                <TabBar openFiles={this.state.files} keyFile={{
                    path: ""
                }} editor={this}/>
            );
          } else {
            tabBar = (
                <TabBar openFiles={this.state.files} keyFile={{
                    path: this.state.openFile.path
                }} editor={this}/>
            );
          }

        return (
            <div id="editor-wrapper">

                <SplitPane 
                  split="vertical" 
                  minSize={180} 
                  defaultSize={280}
                  maxSize={500}
                  className="primary"
                  pane1Style={styleA}
                  resizerStyle={styleC}>
                    
                    <div>
                    <FileTree root={rootPath} editor={this}/>
                    </div>
                    <div>
                    <div className="top-editor-bar">
                    <div className="wrap">
                        {tabBar}
                    </div>
                    </div>
                        {
                            this.state.files.map((file) => {
                                if (file.path === this.state.openFile.path) {
                                    const data = electronFs.readFileSync(this.state.openFile.path)
                                    return (
                                        <AceEditor
                                            mode="javascript"
                                            theme="monokai"
                                            onChange={this.onChange}
                                            onKeyDown={this.fileSave}
                                            name="text-editor"
                                            editorProps={{ $blockScrolling: true, $theme: 'terminal' }}
                                            style={{
                                                width: '100%',
                                                height: '100vh'
                                            }}
                                            showPrintMargin={true}
                                            showGutter={true}
                                            highlightActiveLine={true}
                                            className="text-editor"
                                            value={Buffer.from(data).toString('utf-8')}
                                            onLoad={((editor) => {
                                                if (!this.state.aceEditor) {
                                                    this.setState({
                                                        aceEditor: editor
                                                    })
                                                }
                                            })}
                                            setOptions={{
                                                enableBasicAutocompletion: true,
                                                enableLiveAutocompletion: true,
                                                enableSnippets: false,
                                                showLineNumbers: true,
                                                tabSize: 2
                                            }}
                                        />
                                    )
                                }
                            })
                        }
                    </div>
                </SplitPane>   
 
            </div>     
        )
    }
}
//<FileSystemNavigator />
export default Editor