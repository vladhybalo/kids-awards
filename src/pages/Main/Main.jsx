import { React, useState, useEffect } from "react";

import { useSelector } from "react-redux";

import { getWeekDataString, getTodaysName } from "../../utilities/MainUtils";

import WeekTabs from "../../components/WeekTabs/WeekTabs";
import WeekTabContent from "../../components/WeekTabContent/WeekTabContent";

import { MainWrapper } from "./MainStyled";

export const Main = () => {

    const today = getTodaysName();
    const weekDataString = getWeekDataString();
    const [selectedDay, setSelectedDay] = useState(today);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const currentWeekTasks = useSelector(state => state.userInfo.userWeek);

    useEffect(() => {
        setSelectedDay(today);
    }, []);

    return (
        <MainWrapper isContentPresent = {currentWeekTasks}>
            <WeekTabs 
                weekDataString = {weekDataString}
                selectedDay = {selectedDay}
                setSelectedDay = {setSelectedDay}
                today = {today}
                setSelectedDate = {setSelectedDate}/>
            <WeekTabContent 
                weekDataString = {weekDataString} 
                selectedDay = {selectedDay}
                selectedDate = {selectedDate} 
                currentWeekTasks = {currentWeekTasks} />
        </MainWrapper>
    )
}