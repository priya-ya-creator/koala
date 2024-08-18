import { useContext } from "react";
import { Modal } from "../../Providers/Modals/Modal";
import "./index.scss"
import { Rightcomponent } from "./Rightcomponent";
import { modalConstants, ModalContext } from "../../Providers/ModalProvider";

export const HomeScreen = () => {
    const modalFeatures = useContext(ModalContext);
    const openCreateBattlefieldModal = () => {
        modalFeatures.openModal(modalConstants.CREATE_BATTLEFIELD);
    }
    return(
        <div className="home-container">
            <div className="left-container">
                <div className="items-container">
                    <img src="koalaf.png" alt="koala" className="koala-img"/>
                    <h1>KOALA</h1>
                    <h2>Code, Collaborate, Chase.</h2>
                    <button onClick={openCreateBattlefieldModal}>
                    <span class="material-symbols-outlined">swords</span> 
                    <span className="btn-text">New Battlefield</span>                   
                    </button>
                </div>
                
            </div>
            <Rightcomponent />
            <Modal />
        </div>
    );
}