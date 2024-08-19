import { useContext } from "react";
import { modalConstants, ModalContext } from "../ModalProvider";
import { CreateBattlefieldModal } from "./CreateBattlefieldModal";
import { CreateFolderModal } from "./CreateFolderModal";
import { UpdateFolderTitleModal } from "./UpdateFolderTitle";
import { UpdateFileTitleModal } from "./UpdateFileTitleModal";
import { CreateCardModal } from "./CreateCardModal";

export const Modal =() => {
    const modalFeatures = useContext(ModalContext);
    
    return <>
        {modalFeatures.activeModal === modalConstants.CREATE_BATTLEFIELD && <CreateBattlefieldModal />}
        {modalFeatures.activeModal === modalConstants.CREATE_FOLDER && <CreateFolderModal />}
        {modalFeatures.activeModal === modalConstants.UPDATE_FOLDER_TITLE && <UpdateFolderTitleModal/>}
        {modalFeatures.activeModal === modalConstants.UPDATE_FILE_TITLE && <UpdateFileTitleModal/>}
        {modalFeatures.activeModal === modalConstants.CREATE_CARD && <CreateCardModal/>}
    </>
}