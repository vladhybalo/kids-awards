import React from "react";

import Spinner from "../../components/Spinner/Spinner";
import withLoader from "../../hocs/withLoader/withLoader";

const Awards = () => {
    return <Spinner></Spinner>
}

export default withLoader(Awards);