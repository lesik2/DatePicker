export const WEEKDAY_FROM_SU = ['Su','Mo','Tu','We','Th','Fr','Sa'] as const;
export const WEEKDAY_FROM_MO = ['Mo','Tu','We','Th','Fr','Sa','Su'] as const;
export const REGULAR_EXPRESSIONS={
  dateFormatForDayMonthYear: /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|20\d{2})$/,
} as const;
export const CONSTANTS = {
  EMPTY_NOTES:'You don`t have any notes yet',
  NOTES_TITLE: 'Notes',
  PLACEHOLDER_INPUT:'Choose Date',
  TOOLTIP_FORMAT_DATE:'Format day/month/year',
  TOOLTIP_FOR_DATE_CELL:'double click for notes',
  CLEAR_BUTTON: 'Clear',
} as const;
export const LOCAL_STORAGE_KEYS={
  HOLIDAY:'holiday',
  DATE_START: 'start',
  DATE_END: 'end',
} as const
export const CountryCode = 'BY';
export const DATE_CONSTANTS = {
  DAYS_IN_WEEK: 7,
  MILLISECONDS_IN_DAY: 86400000,
  MONTH_IN_YEAR: 12,
  LAST_INDEX_OF_WEEK: 6,
} as const;