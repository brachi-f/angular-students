import { Course } from "./course.model";

export class Student {
    id: number = 0;
    name!: string;
    phone!: string;
    courseId!: number;
    year!: Years;
    active: boolean = true;
    avgMark!: number;
    constructor(){

    }
}
export enum Years { FirstYear, SecondYear, ThirdYear }