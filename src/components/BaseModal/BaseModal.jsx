import { ModalBackground, ModalContainer, ModalContainerCloseBtnWrapper, CloseBtnImg } from "./BaseModal.styled";
import { disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import React, {useEffect, useState } from "react";
import closeCross from "./assets/closeCross.svg"

export const BaseModal = ({parentToggleIsShownModal, children}) => {

    const [topOffset, setTopOffset] = useState(Math.abs(document.querySelector("body").getBoundingClientRect().top));

    const keyboardListener = (e) => {
        console.log("listener");
        if (e.key === "Escape") {
            closeModalHandler();
        }
    }

    const resizeListener = (e) => {
        setTopOffset(Math.abs(document.querySelector("body").getBoundingClientRect().top));
    }

    function closeModalHandler() {
        enableBodyScroll(document.querySelector("body"));
        document.removeEventListener("keydown", keyboardListener);
        console.log("removing listener");
        window.removeEventListener("resize", resizeListener);
        parentToggleIsShownModal(false);
    }

    useEffect(() => {
        disableBodyScroll(document.querySelector("body"));
        document.addEventListener("keydown", keyboardListener);
        window.addEventListener("resize", resizeListener);
    }, []);

    return (
        <> { 
            <ModalBackground top = {topOffset}>
                <ModalContainer>
                    <ModalContainerCloseBtnWrapper onClick={() => closeModalHandler()}>
                        <CloseBtnImg src= {closeCross}>
                        </CloseBtnImg>
                    </ModalContainerCloseBtnWrapper>
                    {children}
                </ModalContainer>    
            </ModalBackground>} 
        </>
    )
}

export default BaseModal;