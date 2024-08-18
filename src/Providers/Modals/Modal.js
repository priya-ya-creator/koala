import { useContext } from "react";
import { ModalContext } from "../ModalProvider";
import { CreateBattlefieldModal } from "./CreateBattlefieldModal";

export const Modal =() => {
    const modalFeatures = useContext(ModalContext);
    
    return <>
        {modalFeatures.activeModal === "CREATE_BATTLEFIELD" && <CreateBattlefieldModal />}
    </>
}