import React from "react";

import Spinner from "../../components/Spinner/Spinner";
import withLoader from "../../hocs/withLoader/withLoader";

import CardsList from "../../components/CardsList/CardsList";

import { CardStatuses } from "../../config/enums";

const Awards = () => {
  return <Spinner></Spinner>
}

export default withLoader(Awards);