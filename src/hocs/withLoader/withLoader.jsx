import React from "react";

import Spinner from "../../components/Spinner/Spinner";

const withLoader = (Component) => {
    const WithLoader = ({loading, ...props}) => {
        if(loading) {
            return <Spinner></Spinner>
        }

        return <Component {...props}></Component>;
    };

    return WithLoader;
};

export default withLoader;