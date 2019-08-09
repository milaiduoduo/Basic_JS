function formatDate(dt) {
    if (!dt) {
        dt = new Date();
    }
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var date = dt.getDate();

    if (month < 10) {
        month = '0' + month;
    }
    if (date < 10) {
        date = '0' + date;
    }

    return year + '-' + month + '-' + date;
}

let my_date = formatDate(new Date());
console.log(my_date);