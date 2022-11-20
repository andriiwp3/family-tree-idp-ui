export interface IPerson {
    fullName: string;
    age: number;
    family: IFamily;
    relationship: IFamily;
}

export interface IFamily {
    spouses: IPerson[];
    children: IPerson[];
    conclusionDate: Date;
    terminationDate?: Date;
}
