import React from "react";

import GiftBoxSrc from "../../assets/gift-box.svg";

import { AwardsTitleContainer, AwardsIcon, AwardsHeader} from "./AwardsTitle.style";

const AwardsTitle = () => {
    return (
        <AwardsTitleContainer>
            <AwardsIcon src={GiftBoxSrc} alt="Gift Box Icon" />
            <AwardsHeader>
                My Awards
            </AwardsHeader>
        </AwardsTitleContainer>
    )
}

export default AwardsTitle;