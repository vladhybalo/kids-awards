import React from "react";

import AwardsTitle from "../../components/AwardsTitle/AwardsTitle";

import withLoader from "../../hocs/withLoader/withLoader";

import { SubmitButton } from "./Awards.style";

const Awards = () => {
    return (
    <>
        <AwardsTitle></AwardsTitle>
        <SubmitButton>
            Submit
        </SubmitButton>
    </>

    )
}

export default withLoader(Awards);