import { useContext } from "react";
import "./createBattleFieldModal.scss";
import { ModalContext } from "../ModalProvider";
import { PlaygroundContext } from "../PlaygroundProvider";
import { createFolderStyles } from "./CreateFolderModal";
export const UpdateFolderTitleModal = () => {

    const {closeModal, modalPayload} = useContext(ModalContext);
    const {editFolderTitle} = useContext(PlaygroundContext);
    const onSubmitModal = (e) => {
        e.preventDefault();
        const folderName = e.target.folderName.value;
        editFolderTitle(folderName, modalPayload);
        closeModal();
    }


    return <div className="modal-container"> 
    <form className="modal-body" onSubmit={onSubmitModal}>
        <span onClick={closeModal}class="material-symbols-outlined">close</span>
        <h1>Update Folder Title</h1>
        <div style={createFolderStyles.inputContainer}>
            <input name="folderName" style={createFolderStyles.input} placeholder="Enter Folder Name"/>
            <button style={createFolderStyles.btn} type="submit">Create Folder</button>
            </div>
    </form>
    </div>
}