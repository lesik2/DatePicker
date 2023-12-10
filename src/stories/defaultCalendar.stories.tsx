import type { Meta, StoryObj } from '@storybook/react';

import {CalendarService} from "../containers/index";

const meta:Meta<typeof CalendarService> = {
  component: CalendarService,
}
export default meta;
type Story = StoryObj<typeof CalendarService>;


export const FirstStory: Story = {
  args:{
    type: 'month',
    isShowWeekend: true,
    startWeekFrom: 'Mo',
    min: '15/11/2020',
    max: '08/07/2026',
    isColorHolidays: true,
    color: 'default',
  }
}