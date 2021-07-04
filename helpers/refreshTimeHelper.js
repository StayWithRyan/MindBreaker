import { getDate, daysDiff } from '../helpers/dateHelder';

export const isForToday = (timesRefreshed, lastRefreshedDate) => {
    if (timesRefreshed === 0) {
        return true;
    }
    const todayDate = getDate();
    const daysFromLastRefresh = daysDiff(lastRefreshedDate, todayDate);
    const array = [1, 2, 4, 7, 14, 30];
    return daysFromLastRefresh >= array[timesRefreshed - 1];
}
