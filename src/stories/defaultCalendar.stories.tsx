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
    min: '15/09/2023',
    max: '22/02/2024',
    isColorHolidays: true,
    color: 'default',
    size: 'default',
    defaultRange: true,
  }
}