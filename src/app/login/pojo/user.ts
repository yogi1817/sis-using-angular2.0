import { ClassDetail } from './ClassDetail';
import { Address } from './Address';
import { Assignment } from './Assignment';

export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public password: string,
        public dob: number,
        public passwordHint: string,
        public updateDate: number,
        public userId: string,
        public role: string,
        public classDetails: ClassDetail[],
        public address: Address[],
        public assignment: Assignment[]
    ) {  }
}