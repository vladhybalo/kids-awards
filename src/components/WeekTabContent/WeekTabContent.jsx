import React from "react";
import { useEffect } from "react";

import { WeekTabContentWrapper, WeekData, WeekInfoHeader, CurrentDateData,
     DayDataSet, MyTasksText, DayData, WeekTasksData, WeekTasksTextElemSet, ElemSetTitle, ElemSetValue,
     ProgressBarSet, ProgressBarInfo, InfoTasksDone, InfoTasksPlanned, ProgressBarBackground, ProgressBarFiller,
     CurrentTasksArea, MobileProgressBar, MobileProgressBarTitle, ProgressBarButton,
     NoTasksScreen, NoTasksScreenText, NoTasksScreenPlanBtn, NoTasksScreenImgWrapper, NoTasksScreenImg } from "./WeekTabContentStyled";

import addTaskBtn from "./assets/addTaskBtn.png";
import kidsImg from "./assets/kids.png";

export const WeekTabContent = ({weekDataString, selectedDay, selectedDate, currentWeekTasks}) => {

    useEffect(() => {
        if(currentWeekTasks) {
            console.log(currentWeekTasks);
        }
    }, [])

    const getProgressBarFillPercent = () => {
        if (currentWeekTasks && currentWeekTasks.rewardsGained && currentWeekTasks && currentWeekTasks.rewardsPlanned) {
            return ( currentWeekTasks.rewardsGained / currentWeekTasks.rewardsPlanned  ) * 100;
        } else {
            return 0;
        }
    }     

    const isTasksAvailable = () => {
        if (currentWeekTasks) return true;
        else return false;
    }

    return(
        <>
        <WeekTabContentWrapper isTasksAvailable = {isTasksAvailable()}>
            <WeekInfoHeader>
                <CurrentDateData>
                    <WeekData>
                        {weekDataString}
                    </WeekData>
                    <DayDataSet>
                        <MyTasksText>
                            My tasks:
                        </MyTasksText>
                        <DayData>
                            {selectedDay.toUpperCase()}, {selectedDate.getDate()}-{selectedDate.getMonth()+1}-{selectedDate.getFullYear()}
                        </DayData>
                    </DayDataSet>
                </CurrentDateData>
                <WeekTasksData>
                    <WeekTasksTextElemSet>
                        <ElemSetTitle>
                            Points gained this week:
                        </ElemSetTitle>
                        <ElemSetValue>
                            {currentWeekTasks && currentWeekTasks.rewardsGained || 0}
                        </ElemSetValue>
                    </WeekTasksTextElemSet>
                    <WeekTasksTextElemSet>
                        <ElemSetTitle>
                            Points planned for this week:
                        </ElemSetTitle>
                        <ElemSetValue>
                            {currentWeekTasks && currentWeekTasks.rewardsPlanned || 0} 
                        </ElemSetValue>
                    </WeekTasksTextElemSet>
                    <ProgressBarSet>
                        <ProgressBarInfo>
                            <InfoTasksDone>
                                {currentWeekTasks && currentWeekTasks.rewardsGained || 0}&nbsp;
                            </InfoTasksDone>
                            <InfoTasksPlanned>
                                / {currentWeekTasks && currentWeekTasks.rewardsPlanned || 0} 
                            </InfoTasksPlanned>
                        </ProgressBarInfo>
                        <ProgressBarBackground>
                            <ProgressBarFiller width = {getProgressBarFillPercent()}>
                            </ProgressBarFiller>
                        </ProgressBarBackground>
                    </ProgressBarSet>
                </WeekTasksData>
            </WeekInfoHeader>
            <CurrentTasksArea>
                
            </CurrentTasksArea>
            {
                !currentWeekTasks && 
                <NoTasksScreen>
                    <NoTasksScreenText>
                        No tasks for this day
                    </NoTasksScreenText>
                    <NoTasksScreenPlanBtn>
                        Plan tasks
                    </NoTasksScreenPlanBtn>

                </NoTasksScreen>
            }

        </WeekTabContentWrapper>
        <MobileProgressBar>
                <MobileProgressBarTitle>
                        Points made:
                </MobileProgressBarTitle>
                <ProgressBarSet isMobile = {true}>
                    <ProgressBarInfo>
                        <InfoTasksDone>
                            {currentWeekTasks && currentWeekTasks.rewardsGained || 0} &nbsp;
                        </InfoTasksDone>
                        <InfoTasksPlanned>
                            / {currentWeekTasks && currentWeekTasks.rewardsPlanned || 0}
                        </InfoTasksPlanned>
                    </ProgressBarInfo>
                    <ProgressBarBackground>
                        <ProgressBarFiller width={getProgressBarFillPercent()}>
                        </ProgressBarFiller>
                    </ProgressBarBackground>
                </ProgressBarSet>
                <ProgressBarButton src = {addTaskBtn} onClick ={() => {}}>
                
                </ProgressBarButton>
            </MobileProgressBar>
        </>
    )
}

export default WeekTabContent;