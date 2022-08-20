import React, {useEffect, useState } from "react";

import { disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

import { ModalBackground, ModalContainer, ModalContainerCloseBtnWrapper, CloseBtnImg } from "./BaseModal.styled";

import closeCross from "./assets/closeCross.svg"

export const BaseModal = ({setModalVisibility, modalVisibility, children}) => {

    const [topOffset, setTopOffset] = useState(Math.abs(document.querySelector("body").getBoundingClientRect().top));

    const keyboardListener = (e) => {
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
        window.removeEventListener("resize", resizeListener);
        setModalVisibility(false);
    }

    useEffect(() => {
        disableBodyScroll(document.querySelector("body"));
        document.addEventListener("keydown", keyboardListener);
        window.addEventListener("resize", resizeListener);
    }, []);

    return (
        modalVisibility &&
            <ModalBackground top={topOffset}>
                <ModalContainer>
                    <ModalContainerCloseBtnWrapper onClick={() => closeModalHandler()}>
                        <CloseBtnImg src={closeCross}>
                        </CloseBtnImg>
                    </ModalContainerCloseBtnWrapper>
                    {children}
                </ModalContainer>
            </ModalBackground>
    )
}

export default BaseModal;