
export interface IItem {
    ID: number;             // the item unique key.
    NAME: string;           // the string to be displayed on the results field.
    DISABLED?: boolean;     // when true, the item will be locked.
}