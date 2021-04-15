const weatherDataConvert = (source) => {
    const temperatures = source.dataseries.map(item => item.temp2m);
    const splitArray = splitByDays(temperatures);
    const tempsByDay = calcTempByDay(splitArray);

    const date = new Date();
    const result = tempsByDay.map((item, index) => ({
        temp: item,
        date: `${date.getDate() + index}/${date.getMonth() + 1}`,
        weekDay: WeekMap[(date.getDay() + index) % 7]
    })
    )

    return result;
}

const calcTempByDay = (array) => array.map(arr => Math.max.apply(null, arr));

const splitByDays = (array) => {
    const elementsOnDay = 8;
    const currentHour = new Date().getHours();
    const nextDayStartIndex = parseInt((24 - currentHour) / 3) + 1;

    const tempArray = [array.splice(0, nextDayStartIndex)];
    const finalIndex = elementsOnDay - nextDayStartIndex + 8;
    while (array.length > finalIndex) {
        tempArray.push(array.splice(0, elementsOnDay));
    }

    return tempArray;
}

const WeekMap = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const MonthMap = [
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
    "December",
]

export default weatherDataConvert;