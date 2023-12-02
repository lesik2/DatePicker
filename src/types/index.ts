export type TypeOfDate = 'default'| 'disabled'|'start'|'selected'|'between';

export interface IDate{
  type: TypeOfDate;
  dateNumber: number;
}