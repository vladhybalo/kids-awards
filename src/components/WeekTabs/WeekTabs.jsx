import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { TabsBackground, TabsList, TabsListItem, DayTitle, WeekData } from "./WeekTabsStyled";
import { getDayTitle } from "../../utilities/MainUtils";

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const WEEKDAY_VALUES = new Map();

export const WeekTabs = ({weekDataString, selectedDay, setSelectedDay, today, setSelectedDate}) => {

    const [isFullDayNames, setIsFullDayNames] = useState(true);
    const navigate = useNavigate();

    const setDayNamesLength = () => {
        if(Math.abs(document.querySelector("body").getBoundingClientRect().width > 768)){
            setIsFullDayNames(false);
        } else {
            setIsFullDayNames(true);
        }
    }

    const getWeekdayDate = (day) => {
        let currentDayVal = WEEKDAY_VALUES.get(today);
        let dayToCountVal = WEEKDAY_VALUES.get(day);
        let difference = dayToCountVal - currentDayVal;
        return new Date(Date.now() + difference * 86400000);
    }

    useEffect(()=> {
        window.addEventListener("resize", setDayNamesLength);
        navigate(`?day=${today.toLowerCase()}`);
        
        for (let i = 0; i < 7; i ++) {
            WEEKDAY_VALUES.set(WEEK_DAYS[i], i);
        }

    }, []);

    return(
        <TabsBackground>
            <TabsList>
                <WeekData>
                    {weekDataString}
                </WeekData>
                {
                    WEEK_DAYS.map((day) => 
                        <Link key = {Math.random()} to = {`?day=${day.toLowerCase()}`}>
                            <TabsListItem isSelected = {day === selectedDay} 
                                onClick = { () => {
                                    setSelectedDay(day);
                                    setSelectedDate(getWeekdayDate(day));
                                }}>
                                <DayTitle>
                                    {getDayTitle(day)}
                                </DayTitle>
                            </TabsListItem>
                        </Link>
                    )
                }
            </TabsList>
        </TabsBackground>
    )
}

export default WeekTabs;