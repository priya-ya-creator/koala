import { useParams } from "react-router-dom";
import { EditorContainer } from "./EditorContainer";
import "./index.scss";
import { useState } from "react";


export const PlaygroundScreen = () => {
    const params = useParams();
    const {fileId, folderId } = params;
    const[input, setInput] = useState('');
    const[output, setOutput] = useState('');

    const importInput = (e) => {
        const file = e.target.files[0];
        const fileType = file.type.includes("text")
        // console.log({fileType})
        if(fileType){
            const fileReader = new FileReader();
            fileReader.readAsText(file);
            fileReader.onload = (e) => {
                setInput(e.target.result);
            }
        }
        else {
            alert ("Upload a text file!!")
        }

    }

    const exportOutput = () => {
        const outputValue = output.trim();
        if(!outputValue){
            alert("Empty!!!");
            return;
        }
        const blob = new Blob([outputValue], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `output.txt`;
        link.click();
    }
    return (
        <div className="playground-container">
            <div className="header-container">
                <img src={`${process.env.PUBLIC_URL}/koalaf.png`} alt="koalaf" className="logo"/>

            </div>
            {/* < EditorContainer /> */}
            <div className="content-container">
                <div className="editor-container">
                    <EditorContainer />
                </div>
                    <div className="input-container">
                        <div className="input-header">
                            <b>Input: </b>
                            <label htmlFor="input" className="icon-container">
                            <span class="material-symbols-outlined">cloud_upload</span>
                                <span className="">Import Input</span>
                            </label>
                            <input type="file" id="input" style={{display: 'none'}} onChange={importInput}/>

                        </div>
                        <textarea value={input} onChange={(e) => setInput(e.target.value)}></textarea>
                    </div>
                    <div className="input-container">
                        <div className="input-header">
                            <b>Output: </b>
                            <button className="icon-container" onClick={exportOutput}><span class="material-symbols-outlined">cloud_download</span>
                            <b>Export Output</b></button>

                        </div>
                        <textarea readOnly value={output} onChange={(e) => setOutput(e.target.value)}></textarea>

                    </div>

            </div>
        </div>
    )
}