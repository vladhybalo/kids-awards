import { ModalBackground, ModalContainer, ModalContainerCloseButWrapper, CloseButImg } from "./BaseModal.styled";
import closeCross from "./assets/closeCross.svg"
import { useEffect, useState } from "react";

export const BaseModal = ({ifShown = true}) => {

    const [ stateIfShown, setStateIfShown ] = useState(ifShown);

    const keyboardListener = (e) => {
        if (e.key === "Escape") {
            closeModalHandler();
        }
    }

    function closeModalHandler() {
        setStateIfShown(false);
        window.onscroll = () => window.scrollTo();
        document.removeEventListener("keydown", keyboardListener);
    }

    useEffect(() => {
        window.onscroll = () => window.scrollTo(0, 0);
        document.addEventListener("keydown", keyboardListener);
    }, []);

    return (
        <> { stateIfShown &&
            <ModalBackground>
                <ModalContainer>
                    <ModalContainerCloseButWrapper onClick={() => closeModalHandler()}>
                        <CloseButImg src= {closeCross}>
                        </CloseButImg>
                    </ModalContainerCloseButWrapper>
                 
                </ModalContainer>    
            </ModalBackground>} 
        </>
    )
}

export default BaseModal;