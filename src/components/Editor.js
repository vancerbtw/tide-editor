import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/xcode';
import 'brace/theme/monokai';
import 'brace/theme/chrome';
import 'brace/theme/chrome';
import 'brace/theme/chrome';
import 'brace/theme/chrome';
import 'brace/theme/chrome';


function onChange(newValue) {
    console.log(this)
}

function Editor() {
    return (
        <AceEditor
    mode="javascript"
    theme="monokai"
    onChange={onChange}
    name="text-editor"
    editorProps={{ $blockScrolling: true, $theme: 'terminal' }}
    style={{
    width: 900,
    height: 680
    }}
    className="text-editor"
  />
    )
}

export default Editor