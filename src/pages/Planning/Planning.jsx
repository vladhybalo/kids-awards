import React from "react";

import Spinner from "../../components/Spinner/Spinner";
import withLoader from "../../hocs/withLoader/withLoader";

const Planning = () => {
    return <Spinner></Spinner>
}

export default withLoader(Planning);