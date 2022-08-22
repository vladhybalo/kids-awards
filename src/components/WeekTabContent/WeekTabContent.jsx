import React from "react";
import { WeekTabContentWrapper, WeekData, CurrentDateData, DayDataSet, MyTasksText, DayData, } from "./WeekTabContentStyled";

export const WeekTabContent = ({weekDataString, selectedDay, selectedDate}) => {

    return(
        <WeekTabContentWrapper>
            <CurrentDateData>
                <WeekData>
                    {weekDataString}
                </WeekData>
                <DayDataSet>
                    <MyTasksText>
                        My tasks:
                    </MyTasksText>
                    <DayData>
                        {selectedDay.toUpperCase()}, {selectedDate.getDate()}-{selectedDate.getMonth()}-{selectedDate.getFullYear()}
                    </DayData>
                </DayDataSet>
            </CurrentDateData>
        </WeekTabContentWrapper>
    )
}

export default WeekTabContent;