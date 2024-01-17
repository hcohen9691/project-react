import moment from 'moment';


export function getFormattedDate (year) {
    const DateString = year;
    const parsedDate = moment(DateString, 'YYYYMMDD');
    const formattedDate = parsedDate.format('MMMM Do, YYYY');
    return formattedDate;
}


