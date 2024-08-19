import { useParams } from "react-router-dom";
import "./index.scss";


export const PlaygroundScreen = () => {
    const params = useParams();
    const {fileId, folderId } = params;
    return (
        <div className="playground-container">
            <div className="header-container">
                <img src={`${process.env.PUBLIC_URL}/koalaf.png`} alt="koalaf" className="logo"/>

            </div>
            {/* < EditorContainer /> */}
            <div className="content-container">
                <div className="editor-container">Editor Container
                </div>
                    <div className="input-container">
                        <div className="input-header">
                            <b>Input: </b>
                            <label htmlFor="input" className="icon-container">
                            <span class="material-symbols-outlined">cloud_upload</span>
                                <span className="">Import Input</span>
                            </label>
                            <input type="file" id="input" style={{display: 'none'}} />

                        </div>
                        <textarea></textarea>
                    </div>
                    <div className="input-container">
                        <div className="input-header">
                            <b>Output: </b>
                            <button className="icon-container"><span class="material-symbols-outlined">cloud_download</span>
                            <b>Export Output</b></button>

                        </div>
                        <textarea readOnly></textarea>

                    </div>

            </div>
        </div>
    )
}