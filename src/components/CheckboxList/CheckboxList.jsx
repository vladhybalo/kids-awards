import React from "react";
import PropTypes from 'prop-types';

import { daysArray } from "../../config/dayNamesForCard";

import {
    ChooseDayList,
    ChooseDayItemLabel,
    ChooseDayItem
} from "./CheckboxList.style";

const CheckboxList = ({setCheckedDays, checkedDays}) => {

    const changeCheckedDays = (index) => {
        return setCheckedDays(existingItems =>
            [
                ...existingItems.slice(0, index),
                checkedDays[index] = !checkedDays[index],
                ...existingItems.slice(index + 1),
            ]
        );
    }

    return <ChooseDayList>
        {
            daysArray.map((day, index) =>
                <ChooseDayItemLabel htmlFor={day} key={day}>
                    <ChooseDayItem
                        type='checkbox'
                        id={index}
                        value={checkedDays[index]}
                        onClick={() => changeCheckedDays(index)}
                        isCheckedBox={checkedDays[index]}
                    />
                    {day}
                </ChooseDayItemLabel>
            )
        }
    </ChooseDayList>
}

CheckboxList.propTypes = {
    setCheckedDays: PropTypes.func.isRequired,
    checkedDays: PropTypes.array.isRequired
}

export default CheckboxList;