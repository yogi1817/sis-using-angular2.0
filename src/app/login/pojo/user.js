"use strict";
var User = (function () {
    function User(firstName, lastName, password, dob, passwordHint, updateDate, userId, role, errorMessage, errorMessageFlag, classDetails, address, assignment) {
        if (errorMessageFlag === void 0) { errorMessageFlag = false; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.dob = dob;
        this.passwordHint = passwordHint;
        this.updateDate = updateDate;
        this.userId = userId;
        this.role = role;
        this.errorMessage = errorMessage;
        this.errorMessageFlag = errorMessageFlag;
        this.classDetails = classDetails;
        this.address = address;
        this.assignment = assignment;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map