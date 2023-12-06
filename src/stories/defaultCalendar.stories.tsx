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
    isShowHolidays: true,
    startWeekFrom: 'Mo',
    min: '15/08/2023',
    max: '08/07/2024',
  }
}