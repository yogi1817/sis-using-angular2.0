"use strict";
var Attendance = (function () {
    function Attendance(rollNo, day, datesAbsent, monthName, percentageAbsent) {
        this.rollNo = rollNo;
        this.day = day;
        this.datesAbsent = datesAbsent;
        this.monthName = monthName;
        this.percentageAbsent = percentageAbsent;
    }
    return Attendance;
}());
exports.Attendance = Attendance;
//# sourceMappingURL=Attendance.js.map