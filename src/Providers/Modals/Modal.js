import { useContext } from "react";
import { modalConstants, ModalContext } from "../ModalProvider";
import { CreateBattlefieldModal } from "./CreateBattlefieldModal";
import { CreateFolderModal } from "./CreateFolderModal";

export const Modal =() => {
    const modalFeatures = useContext(ModalContext);
    
    return <>
        {modalFeatures.activeModal === modalConstants.CREATE_BATTLEFIELD && <CreateBattlefieldModal />}
        {modalFeatures.activeModal === modalConstants.CREATE_FOLDER && <CreateFolderModal />}
    </>
}