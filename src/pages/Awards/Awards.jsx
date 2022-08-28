import React from "react";

import Spinner from "../../components/Spinner/Spinner";
import withLoader from "../../hocs/withLoader/withLoader";

import TasksList from "../../components/TasksList/TasksList";

import { CardBtnTypes } from "../../config/enums";

const Awards = () => {
  return <Spinner></Spinner>
}

export default withLoader(Awards);