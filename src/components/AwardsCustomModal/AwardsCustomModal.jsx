import React from "react";

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

const AwardsCustomModal = () => {
    return (
        <ModalContentWrapper>
                    <DesignImage src={ModalCatDesignSrc} alt="Hooray cat" />
                    <ModalTitle>
                        Congratulations! You get:
                    </ModalTitle>
                    <ModalAwardsList>
                        <ModalAwardsItem>
                            <ModalAwardImageWrapper>
                                <ModalAwardImage src="https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(8).png" alt="Award" />
                            </ModalAwardImageWrapper>
                            <ModalAwardName>
                                Award Name
                            </ModalAwardName>
                        </ModalAwardsItem>
                        <ModalAwardsItem>
                            <ModalAwardImageWrapper>
                                <ModalAwardImage src="https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(8).png" alt="Award" />
                            </ModalAwardImageWrapper>
                            <ModalAwardName>
                                Award Name
                            </ModalAwardName>
                        </ModalAwardsItem>
                        <ModalAwardsItem>
                            <ModalAwardImageWrapper>
                                <ModalAwardImage src="https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(8).png" alt="Award" />
                            </ModalAwardImageWrapper>
                            <ModalAwardName>
                                Award Name
                            </ModalAwardName>
                        </ModalAwardsItem>
                        <ModalAwardsItem>
                            <ModalAwardImageWrapper>
                                <ModalAwardImage src="https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(8).png" alt="Award" />
                            </ModalAwardImageWrapper>
                            <ModalAwardName>
                                Award Name
                            </ModalAwardName>
                        </ModalAwardsItem>
                    </ModalAwardsList>
                </ModalContentWrapper>
    )
}

export default AwardsCustomModal;