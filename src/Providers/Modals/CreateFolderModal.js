import { useContext } from "react";
import "./createFolderModal.scss";
import { ModalContext } from "../ModalProvider";
import { PlaygroundContext } from "../PlaygroundProvider";
// import "./createBattlefieldModal.scss";
export const CreateFolderModal = () => {
    const modalFeatures = useContext(ModalContext);
    const {createNewFolder} = useContext(PlaygroundContext);

    const closeModal = () => {
        modalFeatures.closeModal();
    };

    const onSubmitModal = (e) => {
        e.preventDefault();
        const folderName = e.target.folderName.value;
        createNewFolder(folderName);
        closeModal();

    };
    return <div className="modal-container">
        <form className="modal-body" onSubmit={onSubmitModal}>
            <span onClick={closeModal} class="material-symbols-outlined">close</span>
            <h1>Create New Folder</h1>
            <div style={styles.inputContainer}>
            <input name="folderName" style={styles.input} placeholder="Enter Folder Name"/>
            <button style={styles.btn} type="submit">Create Folder</button>
            </div>
        </form>

    </div>
}

const styles =  {
    inputContainer: {
        display: 'flex',
        gap: 10
    },
    input:{
        flexGrow:1,
        padding:10
    },
    btn: {
        backgroundColor: 'black',
        border: 'none',
        borderRadius: 4,
        padding: '0px 10px',
        color: 'white'
    }
}