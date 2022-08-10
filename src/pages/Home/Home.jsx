import React from "react";

import Spinner from "../../components/Spinner/Spinner";
import withLoader from "../../hocs/withLoader/withLoader";

const Home = () => {
    return <Spinner></Spinner>
}

export default withLoader(Home);