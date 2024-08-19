import { useContext } from "react"
// import "./createBattlefieldModal.scss"
import { ModalContext } from "../ModalProvider"
import { createFolderStyles } from "./CreateFolderModal"
import { PlaygroundContext } from "../PlaygroundProvider"
export const UpdateFileTitleModal = () => {
    const {closeModal, modalPayload} = useContext (ModalContext);
    const {editFileTitle} = useContext (PlaygroundContext);

    const onSubmitModal = (e) => {
        e.preventDefault();
        const fileName=e.target.fileName.value;
        editFileTitle(fileName, modalPayload.folderId, modalPayload.fileId);
        closeModal();

    }
    return <div className="modal-container">
    
        <form className="modal-body" onSubmit={onSubmitModal}>
            <span onClick={closeModal}class="material-symbols-outlined">close</span>
            <h1>Update File Title</h1>
            <div style={createFolderStyles.inputContainer}>
                <input name="fileName" style={createFolderStyles.input} placeholder="Enter Folder Name"/>
                <button style={createFolderStyles.btn} type="submit">Update File</button>
            </div>
        </form>
    </div>
}