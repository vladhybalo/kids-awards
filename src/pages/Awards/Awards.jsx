import React, { useState } from "react";

import AwardsTitle from "../../components/AwardsTitle/AwardsTitle";
import BaseModal from "../../components/BaseModal/BaseModal";

import withLoader from "../../hocs/withLoader/withLoader";

import ModalCatDesignSrc from "../../assets/modal-cat-image.svg";
import {
    SubmitButton,
    DesignImage,
    ModalContentWrapper,
    ModalTitle,
    ModalAwardsList,
    ModalAwardsItem,
    ModalAwardImageWrapper,
    ModalAwardImage,
    ModalAwardName
} from "./Awards.style";

const Awards = () => {
    const [modalVisibility, setModalVisibility] = useState(false);

    const handleClick = () => {
        setModalVisibility(true);
    }

    return (
        <>
            <AwardsTitle></AwardsTitle>
            <SubmitButton onClick={handleClick}>
                Submit
            </SubmitButton>
            <BaseModal setModalVisibility={setModalVisibility} modalVisibility={modalVisibility}>
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
            </BaseModal>
        </>
    )
}

export default withLoader(Awards);