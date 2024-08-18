import { useContext } from "react";
import "./index.scss";
import { PlaygroundContext } from "../../../Providers/PlaygroundProvider";

const Folder = ({folderTitle, cards}) => {
    return <div className="folder-container">
            <div className="folder-header">
                <div className="folder-header-item">
                    <span class="material-symbols-outlined" id="folder">folder_open</span>
                    <span>{folderTitle}</span>
                </div>
                <div className="folder-header-item">
                    <span class="material-symbols-outlined">folder_delete</span>
                    <span class="material-symbols-outlined">edit_square</span>
                    <button>
                        <span class="material-symbols-outlined">swords</span>
                        <span className="btn-text">New Folder</span>
                    </button>

                </div>
            </div>
        <div className="cards-container">
            {
                cards?.map((file, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src="koalaf.png" alt="koala" className="koala-img"/>
                            <div className="title-container">
                                <span>{file?.title}</span>
                                <span>Language: {file?.language}</span>
                            </div>
                            <div className="icons">
                                <span class="material-symbols-outlined">delete</span>
                                <span class="material-symbols-outlined">edit</span>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </div>
}
export const Rightcomponent = () => {
    const folders = useContext(PlaygroundContext);

    return <div className="right-container">
        <div className="header">
            <h1 className="title"> Existing Battlefields</h1>
            <div className="add-folder">
                <span class="material-symbols-outlined">swords</span>
                <span className="btn-text">New Folder</span>
            </div>
        </div>
        {
            folders?.map((folder, index) => {
                return <Folder folderTitle={folder?.title} cards={folder?.files} key={index}/>
            })
        }
        
    
        

    </div>
}