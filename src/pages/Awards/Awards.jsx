import React from "react";

import AwardsTitle from "../../components/AwardsTitle/AwardsTitle";

import withLoader from "../../hocs/withLoader/withLoader";

const Awards = () => {
    return <AwardsTitle></AwardsTitle>
}

export default withLoader(Awards);