import { useState } from "react";

export enum Presence { 
    Absent, 
    Present 
}

export interface Student {
    id: string;
    firstname: string;
    lastname: string;
    brithdate?: Date; // fragezeichen bedeutet optional
    parentName?: string;
    parentEmail?: string;
    parentPhone?: string;
    photoUrl?: string;
    status?: Presence; 
}

const mockStudents: Student[] = [
    {id : "1", firstname: "Max", lastname: "Werner"},
    {id : "2", firstname: "Erika", lastname: "Maier"},
    {id : "3", firstname: "Fritz", lastname: "Müller"},
    {id : "4", firstname: "Hans", lastname: "Lustig"},
    {id : "5", firstname: "Peter", lastname: "Xaver"},
    {id : "6", firstname: "Paul", lastname: "Petersen"},
    {id : "7", firstname: "Hans", lastname: "Uwe"},
    {id : "8", firstname: "Peter", lastname: "Zufall"},
    {id : "9", firstname: "Paul", lastname: "Schmidt"},
    {id : "10", firstname: "Hans", lastname: "Müller"},
]

export const useStudents = function() {
    const useStudentState = useState(mockStudents);
    return useStudentState;
}