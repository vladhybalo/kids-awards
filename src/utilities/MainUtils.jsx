const weekdayNames = new Map([
    [0, "Sunday"],
    [1, "Monday"],
    [2, "Tuesday"],
    [3, "Wednesday"],
    [4, "Thursday"],
    [5, "Friday"],
    [6, "Saturday"]
]);

const monthNames = new Map([
    [0, "January"],
    [1, "February"],
    [2, "March"],
    [3, "April"],
    [4, "May"],
    [5, "June"],
    [6, "July"],
    [7, "August"],
    [8, "September"],
    [9, "October"],
    [10, "November"],
    [11, "December"]
])

const DAY_MILLISESCONDS = 86400000;

export const getTodaysName = () => {
    const today = new Date();
    return weekdayNames.get(today.getDay());
}

export const getDayName = (dayValue) => {
    return weekdayNames.get(dayValue);
}

export const getMonthName = (monthNum) => {
    return monthNames.get(monthNum);
}

export const getEdgeWeekDays = (today) => {

    let mondayOffset;
    let sundayOffset;

    switch (today) {
        case "Monday":
            mondayOffset = 0;
            sundayOffset = DAY_MILLISESCONDS * 6;
            break;
        case "Tuesday":
            mondayOffset = DAY_MILLISESCONDS;
            sundayOffset = DAY_MILLISESCONDS * 5;
            break;
        case "Wednesday":
            mondayOffset = DAY_MILLISESCONDS * 2;
            sundayOffset = DAY_MILLISESCONDS * 4;
            break;
        case "Thursday":
            mondayOffset = DAY_MILLISESCONDS * 3;
            sundayOffset = DAY_MILLISESCONDS * 3;
            break;
        case "Friday":
            mondayOffset = DAY_MILLISESCONDS * 4;
            sundayOffset = DAY_MILLISESCONDS * 2;
            break;
        case "Saturday":
            mondayOffset = DAY_MILLISESCONDS * 5;
            sundayOffset = DAY_MILLISESCONDS;
            break;
        case "Sunday":
            mondayOffset = DAY_MILLISESCONDS * 6;
            sundayOffset = 0;
            break;
    }

    return {
        monday: { day: new Date(Date.now() - mondayOffset).getDate(), month: new Date(Date.now() - mondayOffset).getMonth() },
        sunday: { day: new Date(Date.now() + sundayOffset).getDate(), month: new Date(Date.now() + sundayOffset).getMonth() },
    }
}

export const getWeekDataString = () => {
    let finalString = "Week: ";

    let currentDay = getTodaysName();

    let finalDateData = getEdgeWeekDays(currentDay);
    if (finalDateData.monday.month === finalDateData.sunday.month) {
        finalString += `${getMonthName(finalDateData.monday.month)} ${finalDateData.monday.day}-${finalDateData.sunday.day}`
    } else {
        finalString += `${getMonthName(finalDateData.monday.month)} ${finalDateData.monday.day}
        - ${getMonthName(finalDateData.sunday.month)} ${finalDateData.sunday.day}`
    }

    return finalString;
}