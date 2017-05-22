"use strict";
var Assignment = (function () {
    function Assignment(subject, assignmentName, dateCreated, completionDate, uploadLocation, classAndSection) {
        this.subject = subject;
        this.assignmentName = assignmentName;
        this.dateCreated = dateCreated;
        this.completionDate = completionDate;
        this.uploadLocation = uploadLocation;
        this.classAndSection = classAndSection;
    }
    return Assignment;
}());
exports.Assignment = Assignment;
//# sourceMappingURL=Assignment.js.map