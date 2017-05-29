export class Attendance {
    constructor(
        public rollNo: number,
        public day: string,
        public datesAbsent: Array<Date>,
        public monthName: string,
        public percentageAbsent: number
    ) {  }
}