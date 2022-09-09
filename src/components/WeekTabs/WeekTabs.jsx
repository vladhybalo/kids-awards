import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import PropTypes from 'prop-types';

import { TabsBackground,
    TabsList,
    DaysWrapper,
    TabsListItem,
    DayTitle,
    FullDayTitle,
    ShortDayTitle,
    WeekData } from "./WeekTabsStyled";

import { WEEK_DAYS } from "../../config/weekDays";

const WEEKDAY_VALUES = new Map();

export const WeekTabs = ({weekDataString, selectedDay, setSelectedDay, today, setSelectedDate}) => {

    const navigate = useNavigate();

    const getWeekdayDate = (day) => {
        let currentDayVal = WEEKDAY_VALUES.get(today);
        let dayToCountVal = WEEKDAY_VALUES.get(day);
        let difference = dayToCountVal - currentDayVal;
        return new Date(Date.now() + difference * 86400000);
    }

    useEffect(()=> {
        for (let i = 0; i < 7; i ++) {
            WEEKDAY_VALUES.set(WEEK_DAYS[i], i);
        }

        let isRefreshing = false;
        WEEK_DAYS.forEach((day) => {
            if (window.location.href.includes(day.toLowerCase())){
                isRefreshing = true;
                setSelectedDay(day);
                setSelectedDate(getWeekdayDate(day));
                navigate(`?day=${day.toLowerCase()}`);
            }
        });
        
        !isRefreshing && navigate(`?day=${today.toLowerCase()}`);

    }, []);

    return(
        <TabsBackground>
            <TabsList>
                <WeekData>
                    {weekDataString}
                </WeekData>
                <DaysWrapper>
                {
                    WEEK_DAYS.map((day) => 
                        <Link key = {day} to = {`?day=${day.toLowerCase()}`}>
                            <TabsListItem isSelected = {day === selectedDay} 
                                onClick = { () => {
                                    setSelectedDay(day);
                                    setSelectedDate(getWeekdayDate(day));
                                }}>
                                <DayTitle>
                                    <FullDayTitle>
                                        {day}
                                    </FullDayTitle>
                                    <ShortDayTitle>
                                        {day.slice(0, 2)}
                                    </ShortDayTitle>
                                </DayTitle>
                            </TabsListItem>
                        </Link>
                    )
                }
                </DaysWrapper>
            </TabsList>
        </TabsBackground>
    )
}

export default WeekTabs;

WeekTabs.propTypes = {
    weekDataString: PropTypes.string.isRequired,
    selectedDay: PropTypes.string.isRequired,
    setSelectedDay: PropTypes.func.isRequired,
    today: PropTypes.string.isRequired,
    setSelectedDate: PropTypes.func.isRequired
}