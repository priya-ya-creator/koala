import { useState } from "react";
import "./EditorContainer.scss";
import Editor from "@monaco-editor/react";

const editorOptions = {
    fontSize:16,
    wordWrap: "on",
}

export const EditorContainer = () => {

    const [code, setCode] = useState('');

    const onChangeCode = (newcode) => {
        // console.log({newCode})
    }

    const onUploadCode = (event) => {
        const file = event.target.files[0];
        const fileType = file.type.includes("text")
        // console.log({fileType})
        if(fileType){
            const blob = new Blob([file]);
            const fileReader = new FileReader();
            fileReader.readAsText(blob);
            fileReader.onload = function(value){
                const importedCode = value.target.result;
                setCode(importedCode);
            }
        }
        else {
            alert ("Upload a text file!!")
        }

    }
    return (
        <div className="root-editor-container">
            <div className="editor-header">
                <div className="editor-left-container">
                    <b className="title">{"title of card"}</b>
                    <span className="material-symbols-outlined">edit</span>
                    <button>Save Code</button>
                </div>
                <div className="ediotr-right-container">
                    <select>
                        <option value="cpp">CPP</option>
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                        <option value="html">HTML</option>
                        <option value="javascript">Javascript</option>
                    </select>

                    <select>
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    </select>
                </div>
            </div>
            <div className="editor-body">
                <Editor 
                    height={"100%"}
                    language={"python"}
                    options={editorOptions}
                    theme={'vs-dark'}
                    onChange={onChangeCode}
                    value={code}
                />

            </div>
            <div className="editor-footer">
                <button className="btn">
                    <span className="material-symbols-outlined">fullscreen</span>
                    <span>Full Screen</span>
                </button>
                <label className="btn" htmlFor="import-code">
                    <span className="material-symbols-outlined">cloud_upload</span>
                    <span>Import Code</span>
                </label>
                <input type="file" id="import-code" style={{display: 'none'}} onChange={onUploadCode} />
                <button className="btn">
                    <span className="material-symbols-outlined">cloud_download</span>
                    <span>Export Code</span>
                </button>
                <button className="btn">
                <span className="material-symbols-outlined">play_arrow</span>
                <span>Run Code</span>
                </button>

            </div>
        </div>
    );
}