function getDateValue(val) {
    if (val instanceof Date) {
        return val;
    }
    if (!isNaN(val)) {
        return new Date(parseInt(val))
    }
    var datePattern = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
    if (datePattern.test(val)) {
        var matches = datePattern.exec(val)
        var year = parseInt(matches[1])
        var month = parseInt(matches[2])
        var date = parseInt(matches[3])
        return new Date(year, month - 1, date)
    }
    var dateTimePattern = /^(\d{4})-(\d{1,2})-(\d{1,2})\s(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?$/;

    if (dateTimePattern.test(val)) {
        var matches = dateTimePattern.exec(val)
        var year = parseInt(matches[1])
        var month = parseInt(matches[2])
        var date = parseInt(matches[3]) || 0
        var hours = parseInt(matches[4]) || 0
        var minutes = parseInt(matches[5]) || 0
        var seconds = parseInt(matches[6]) || 0
        return new Date(year, month - 1, date,hours, minutes, seconds)
    }

    return new Date()
}

function formatDate(date, format = "yyyy-MM-dd") {
    var dateVal = getDateValue(date);
    function fillZero(value, size = 2) {
        var val = "0000000000" + value;
        return val.substring(val.length - size)
    }
    var obj = {
        "YY": dateVal.getFullYear(),
        "Y": dateVal.getFullYear() % 100,
        "yyyy": dateVal.getFullYear(),
        "yyy": dateVal.getFullYear() % 1000,
        "yy": dateVal.getFullYear() % 100,
        "y": dateVal.getFullYear() % 10,
        "MM": fillZero((dateVal.getMonth() + 1)),
        "M": dateVal.getMonth() + 1,
        "dd": fillZero(dateVal.getDate()),
        "d": dateVal.getDate(),
        "HH": fillZero(dateVal.getHours()),
        "H": dateVal.getHours(),
        "hh": fillZero(dateVal.getHours() % 12),
        "h": dateVal.getHours() % 12,
        "mm": fillZero(dateVal.getMinutes()),
        "m": dateVal.getMinutes(),
        "ss": fillZero(dateVal.getSeconds()),
        "s": dateVal.getSeconds(),
    }
    var pattern = /(y{1,4})|(Y{1,2})|(M{1,2})|(d{1,2})|(H{1,2})|(h{1,2})|(m{1,2})|(s{1,2})/g
    return format.replace(pattern, (match) => {
        return obj[match];
    })
}
