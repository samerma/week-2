const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};

const db = []
logData = function (d) {
    db.push(d) //log the data somewhere
}

displayData(alert, logData, "I like to party") //the error was that logdata not defined