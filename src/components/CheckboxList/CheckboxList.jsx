import React from "react";

import {
    ChooseDayList,
    ChooseDayItemLabel,
    ChooseDayItem
} from "./CheckboxList.style";

import CheckedMark from "../../assets/check-mark.svg";

const CheckboxList = () => {
    return <ChooseDayList>
        <ChooseDayItemLabel htmlFor='mon'>
            <ChooseDayItem
                type='checkbox'
                id='mon'
                value='1'
                />
            Mon
        </ChooseDayItemLabel>
        <ChooseDayItemLabel htmlFor='tue'>
            <ChooseDayItem
                type='checkbox'
                id='tue'
                value='2'
                />
            Tue
        </ChooseDayItemLabel>
        <ChooseDayItemLabel htmlFor='wed'>
            <ChooseDayItem
                type='checkbox'
                id='wed'
                value='3'
                />
            Wed
        </ChooseDayItemLabel>
        <ChooseDayItemLabel htmlFor='thu'>
            <ChooseDayItem
                type='checkbox'
                id='thu'
                value='4'
                />
            Thu
        </ChooseDayItemLabel>
        <ChooseDayItemLabel htmlFor='fri'>
            <ChooseDayItem
                type='checkbox'
                id='fri'
                value='5'
                />
            Fri
        </ChooseDayItemLabel>
        <ChooseDayItemLabel htmlFor='sat'>
            <ChooseDayItem
                type='checkbox'
                id='sat'
                value='6'
                />
            Sat
        </ChooseDayItemLabel>
        <ChooseDayItemLabel htmlFor='sun'>
            <ChooseDayItem
                type='checkbox'
                id='sun'
                value='7'
                />
            Sun
        </ChooseDayItemLabel>
    </ChooseDayList>
}

export default CheckboxList;