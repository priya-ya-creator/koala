import { useContext } from "react"
import { ModalContext } from "../ModalProvider"
import { defaultCodes, PlaygroundContext } from "../PlaygroundProvider";
import { v4 } from "uuid";

export const CreateCardModal = () => {
    const {closeModal, modalPayload} = useContext(ModalContext);
    const {createBattlefield} = useContext (PlaygroundContext);
    const onSubmitModal = (e) => {
        e.preventDefault();
        const fileName = e.target.fileName.value;
        const language = e.target.language.value;
        
        const file = {
            id: v4(),
            title: fileName,
            language,
            code: defaultCodes[language]
        }

        createBattlefield(modalPayload, file);
        closeModal();

    };
    return <div className="modal-container">
        <form className="modal-body" onSubmit={onSubmitModal}>
            <span onClick={closeModal}class="material-symbols-outlined">close</span>
            <h1>Create Card</h1>
            <div className="item">
                <p>
                    Enter card name
                </p>
                <input name="fileName" placeholder="Enter card title" required />
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
                    Create Card
                </button>
            </div>
        </form>

    </div>
}