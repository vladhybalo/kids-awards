import React from "react";
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
    return (
        <ModalContentWrapper>
            <DesignImage src={ModalCatDesignSrc} alt="Hooray cat" />
            <ModalTitle>
                Congratulations! You get:
            </ModalTitle>
            <ModalAwardsList>
                {
                    gifts.map(gift => {
                        return (
                            giftsToBuyList.includes(gift.id) &&
                            <ModalAwardsItem key={gift.id}>
                                <ModalAwardImageWrapper>
                                    <ModalAwardImage src={gift.imageUrl} alt={gift.title} />
                                </ModalAwardImageWrapper>
                                <ModalAwardName>
                                    {gift.title}
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