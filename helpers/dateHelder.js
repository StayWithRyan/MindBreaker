//mm//dd//yyyy

export const getDate = () => {
    const offset = 3; // + 3 hour
    const today = new Date(new Date().getTime() + offset * 3600 * 1000);
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    const todayString = mm + '/' + dd + '/' + yyyy;
    return todayString;
}

export const daysDiff = (date1Str, date2Str) => {
    var date1 = new Date(date1Str);
    var date2 = new Date(date2Str);

    var Difference_In_Time = date2.getTime() - date1.getTime();

    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days;
}

