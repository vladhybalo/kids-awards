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

const AwardsCustomModal = ({ gifts, giftsToBuyList }) => {
    return (
        <ModalContentWrapper>
            <DesignImage src={ModalCatDesignSrc} alt="Hooray cat" />
            <ModalTitle>
                Congratulations! You get:
            </ModalTitle>
            <ModalAwardsList>
                {
                    giftsToBuyList.map(gift => {
                        return (
                            <ModalAwardsItem key={gifts[gift - 1].id}>
                                <ModalAwardImageWrapper>
                                    <ModalAwardImage src={gifts[gift - 1].imageUrl} alt={gifts[gift - 1].title} />
                                </ModalAwardImageWrapper>
                                <ModalAwardName>
                                    {gifts[gift - 1].title}
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