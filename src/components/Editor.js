import React, {PureComponent} from 'react';
import AceEditor from 'react-ace';
import {Treebeard} from 'react-treebeard';
import 'brace/mode/javascript';
import 'brace/mode/objectivec';
import 'brace/theme/xcode';
import 'brace/theme/monokai';
import 'brace/theme/chrome';

const data = {
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

class TreeView extends PureComponent {
    constructor(props){
        super(props);
        this.state = {data};
        this.onToggle = this.onToggle.bind(this);
    }
    
    onToggle(node, toggled){
        const {cursor, data} = this.state;
        if (cursor) {
            this.setState(() => ({cursor, active: false}));
        }
        node.active = true;
        if (node.children) { 
            node.toggled = toggled; 
        }
        this.setState(() => ({cursor: node, data: Object.assign({}, data)}));
    }
    
    render(){
        const {data} = this.state;
        return (
            <Treebeard
                data={data}
                onToggle={this.onToggle}
            />
        );
    }
}

class Editor extends React.Component {
constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.getFiles = this.getFiles.bind(this);
    }

    onChange(newValue) {
        console.log(newValue);
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
        return (
            <div className="container main-container editor-container" style={{width: '100%', height: '100vh'}}>
                <div className="row">
                    <TreeView />
                    <AceEditor
                    mode="objectivec"
                    theme="monokai"
                    onChange={this.onChange}
                    name="text-editor"
                    editorProps={{ $blockScrolling: true, $theme: 'terminal' }}
                    style={{
                        width: 1920,
                        height: 1080
                    }}
                    className="text-editor"
                    />
                </div>
            </div>
        )
    }
}

export default Editor