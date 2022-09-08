import React, { useRef, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import ModalCatDesignSrc from "../../assets/modal-cat-image.svg";

import {
    DesignImage,
    ModalContentWrapper,
    ModalTitle,
    ModalAwardsList,
    ModalAwardsItem,
    ModalAwardImageWrapper,
    ModalAwardImage,
    ModalAwardName
} from "./AwardsCustomModal.style";

const AwardsCustomModal = ({gifts, giftsToBuyList}) => {
    const modalRef = useRef();
    const [modalHeight, setModalHeight] = useState(false);

    useEffect(() => {
        if (modalRef) {
            modalRef.current.offsetHeight > 376 ? setModalHeight(true) : setModalHeight(false);
        }
    })

    return (
        <ModalContentWrapper ref={modalRef} modalHeight={modalHeight} >
            <DesignImage src={ModalCatDesignSrc} alt="Hooray cat" modalHeight={modalHeight}/>
            <ModalTitle>
                Congratulations! You get:
            </ModalTitle>
            <ModalAwardsList>
                {
                    giftsToBuyList.map(gift => {
                        return (
                            <ModalAwardsItem key={gifts[gift-1].id}>
                                <ModalAwardImageWrapper>
                                    <ModalAwardImage src={gifts[gift-1].imageUrl} alt={gifts[gift-1].title} />
                                </ModalAwardImageWrapper>
                                <ModalAwardName>
                                    {gifts[gift-1].title}
                                </ModalAwardName>
                            </ModalAwardsItem>
                        )
                    })
                }
            </ModalAwardsList>
        </ModalContentWrapper>
    )
}

AwardsCustomModal.propTypes = {
    gifts: PropTypes.array,
    giftsToBuyList: PropTypes.array
}

export default AwardsCustomModal;