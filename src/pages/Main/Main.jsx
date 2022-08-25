import React from "react";
import { useState, useEffect } from "react";

import { getWeekDataString, getTodaysName } from "../../utilities/MainUtils";

import WeekTabs from "../../components/WeekTabs/WeekTabs";
import WeekTabContent from "../../components/WeekTabContent/WeekTabContent";

import { MainWrapper } from "./MainStyled";

export const Main = () => {

    const today = getTodaysName();
    const weekDataString = getWeekDataString();
    const [selectedDay, setSelectedDay] = useState(today);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        setSelectedDay(today);
    }, []);

    return (
        <MainWrapper>
            <WeekTabs weekDataString = {weekDataString} selectedDay = {selectedDay}
             setSelectedDay = {setSelectedDay} today = {today} setSelectedDate = {setSelectedDate} />
            <WeekTabContent weekDataString = {weekDataString} selectedDay = {selectedDay} selectedDate = {selectedDate} />
        </MainWrapper>
    )
}