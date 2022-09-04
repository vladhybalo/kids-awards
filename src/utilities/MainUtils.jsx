const weekdayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

export const getTodayName = () => {
    const today = new Date();
    return weekdayNames[today.getDay()];
}

export const getDayName = (dayValue) => {
    return weekdayNames[dayValue];
}

export const getMonthName = (monthNum) => {
    return monthNames[monthNum];
}

export const getEdgeWeekDays = (today) => {

    let todayDate = new Date(Date.now());
    let mondayDate, sundayDate;

    while ((getDayName(todayDate.getDay()) !== "Monday")) {
        todayDate.setDate(todayDate.getDate() - 1);
        mondayDate = todayDate;
    }

    sundayDate = new Date(todayDate);
    sundayDate.setDate(todayDate.getDate() + 6);

    return {
        monday: { day: mondayDate.getDate(), month: mondayDate.getMonth() },
        sunday: { day: sundayDate.getDate(), month: sundayDate.getMonth() },
    }
}

export const getWeekDataString = () => {
    let finalString = "Week: ";

    let currentDay = getTodayName();

    let finalDateData = getEdgeWeekDays(currentDay);
    if (finalDateData.monday.month === finalDateData.sunday.month) {
        finalString += `${getMonthName(finalDateData.monday.month)} ${finalDateData.monday.day}-${finalDateData.sunday.day}`
    } else {
        finalString += `${getMonthName(finalDateData.monday.month)} ${finalDateData.monday.day}
        - ${getMonthName(finalDateData.sunday.month)} ${finalDateData.sunday.day}`
    }

    return finalString;
}