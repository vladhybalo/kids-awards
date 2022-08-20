import React, { useState } from "react";

import AwardsTitle from "../../components/AwardsTitle/AwardsTitle";
import BaseModal from "../../components/BaseModal/BaseModal";
import AwardsCustomModal from "../../components/AwardsCustomModal/AwardsCustomModal";

import withLoader from "../../hocs/withLoader/withLoader";

import { SubmitButton } from "./Awards.style";

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
                <AwardsCustomModal>
                    
                </AwardsCustomModal>
            </BaseModal>
        </>
    )
}

export default withLoader(Awards);