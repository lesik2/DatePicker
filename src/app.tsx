import { createRoot } from 'react-dom/client';

import { CalendarService } from './containers';


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(

  <CalendarService
    type="month"
    isShowWeekend
    startWeekFrom="Mo"
    min="15/09/2022"
    max="22/02/2025"
    isColorHolidays
    color="primary"
    size="default"
    defaultRange
    />
);
