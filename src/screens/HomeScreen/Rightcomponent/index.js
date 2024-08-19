import { useContext } from "react";
import "./index.scss";
import { PlaygroundContext } from "../../../Providers/PlaygroundProvider";
import { modalConstants, ModalContext } from "../../../Providers/ModalProvider";

const Folder = ({folderTitle, cards, folderId}) => {

    const {deleteFolder, deleteFile} = useContext(PlaygroundContext);
    const {openModal, setModalPayload} = useContext(ModalContext);

    const onDeleteFolder = () => {
        deleteFolder(folderId);
    };

    const onEditFolderTitle = () => {
        setModalPayload(folderId);
        openModal(modalConstants.UPDATE_FOLDER_TITLE);
    };

    const openCreateCardModal = () => {
        setModalPayload(folderId);
        openModal(modalConstants.CREATE_CARD);
    }

    
    return <div className="folder-container">
            <div className="folder-header">
                <div className="folder-header-item">
                    <span class="material-symbols-outlined" id="folder">folder_open</span>
                    <span>{folderTitle}</span>
                </div>
                <div className="folder-header-item">
                    <span class="material-symbols-outlined" onClick={onDeleteFolder}>folder_delete</span>
                    <span class="material-symbols-outlined" onClick={onEditFolderTitle}>edit_square</span>
                    <button onClick={openCreateCardModal}>
                        <span class="material-symbols-outlined">swords</span>
                        <span className="btn-text">New Battlefield</span>
                    </button>

                </div>
            </div>
        <div className="cards-container">
            {
                cards?.map((file, index) => {
                    const onEditFile = () => {
                        setModalPayload({fileId: file.id, folderId: folderId});
                        openModal(modalConstants.UPDATE_FILE_TITLE);
                    };
                    const onDeleteFile = () => {
                        deleteFile(folderId, file.id);
                    };
                    return (
                        <div className="card" key={index}>
                            <img src="koalaf.png" alt="koala" className="koala-img"/>
                            <div className="title-container">
                                <span>{file?.title}</span>
                                <span>Language: {file?.language}</span>
                            </div>
                            <div className="icons">
                                <span class="material-symbols-outlined" onClick={onDeleteFile}  >delete</span>
                                <span class="material-symbols-outlined" onClick={onEditFile}>edit</span>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </div>
}
export const Rightcomponent = () => {
    const {folders} = useContext(PlaygroundContext);
    const modalFeatures = useContext(ModalContext);

    const openCreateNewFolderModal =() => {
        modalFeatures.openModal(modalConstants.CREATE_FOLDER);
    }

    return <div className="right-container">
        <div className="header">
            <h1 className="title"> Existing Battlefields</h1>
            <button className="add-folder" onClick={openCreateNewFolderModal}>
                <span class="material-symbols-outlined">swords</span>
                <span className="btn-text">New Folder</span>
            </button>
        </div>
        {
            folders?.map((folder, index) => {
                return <Folder folderTitle={folder?.title} cards={folder?.files} key={index} folderId={folder.id}/>
            })
        }
        
    
        

    </div>
}