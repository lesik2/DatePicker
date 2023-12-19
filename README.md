# DatePicker

## The DatePicker component in the UI Kit library provides an easy-to-use date selection feature for user interfaces.

### How to use 
  1. Install from npm:
      ```shell
      npm i datepicker-alex-kit
      ```
  2. Import CalendarService:
      ```shell
      import { CalendarService } from 'datepicker-alex-kit/dist/esm';
      ```

### Props available values
-  **type** (optional): 'month' | 'year' | 'week'
-  **isShowWeekend** (optional): boolean
-  **startWeekFrom** (optional): 'Mo' | 'Su'
-  **min** (optional): string (format: day/month/year)
-  **max** (optional): string (format: day/month/year)
-  **isColorHolidays** (optional): boolean
-  **color** (optional): 'default'|'primary'|'secondary'
-  **size** (optional): 'default'|'medium'
-  **defaultRange** (optional): boolean

### Props short description
 - **type**: The type of the calendar. Possible values: 'month', 'year', 'week'.
 - **isShowWeekend**: Determines whether to show weekends in the calendar. Possible values: true, false.
 - **startWeekFrom**: Specifies the first day of the week. Possible values: 'Mo', 'Su'.
 - **min**: The minimum selectable date. Format: day/month/year.
 - **max**: The maximum selectable date. Format: day/month/year.
 - **isColorHolidays**: Determines whether to color holidays in the calendar. Possible values: true, false.
 - **color**: The color of the calendar. Possible values: default, primary, secondary.
 - **size**: The size of calendar. Possible values: default, medium.
 - **defaultRange**: Specifies whether to use the default date range. Possible values: true, false.

### Deploy
  https://date-picker-52i3.vercel.app/?path=/story/stories-defaultcalendar--first-story
