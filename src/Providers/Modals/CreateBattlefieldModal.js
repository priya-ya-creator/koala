import { useContext } from "react";
import { ModalContext } from "../ModalProvider";
import { PlaygroundContext } from "../PlaygroundProvider";
import "./createBattleFieldModal.scss";

export const CreateBattlefieldModal = () => {
    const modalFeatures = useContext(ModalContext);
    const battlefieldFeatures = useContext(PlaygroundContext);
    const closeModal = () => {
        modalFeatures.closeModal()
    };
    const onSubmitModal = (e) => {
        e.preventDefault();
        const folderName = e.target.folderName.value;
        const fileName = e.target.fileName.value;
        const language = e.target.language.value;
        battlefieldFeatures.createNewBattlefield({
            folderName,
            fileName,
            language
        });
        closeModal();



    }
    return <div className="modal-container">
        <form className="modal-body" onSubmit={onSubmitModal}>
            <span onClick={closeModal} class="material-symbols-outlined">close</span>
            <h1>
                Create New Battlefield
            </h1>
            <div className="item">
                <p>Enter folder name</p>
                <input name="folderName" required />
            </div>
            <div className="item">
                <p>
                    Enter card name
                </p>
                <input name="fileName" required />
            </div>
            <div className="item">
                <select name="language" required>
                    <option value="cpp">CPP</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    <option value="html">HTML</option>
                    <option value="javascript">Javascript</option>
                </select>
                <button type="submit">
                    Create  Battlefield
                </button>
            </div>

        </form>
    </div>
}