import type { Meta, StoryObj } from '@storybook/react';

import {CalendarService} from "../containers/index";

const meta:Meta<typeof CalendarService> = {
  component: CalendarService,
  argTypes: { 
    handleNextDate: { action: 'clicked' },
    handlePrevDate: { action: 'clicked' },
  },
}
export default meta;
type Story = StoryObj<typeof CalendarService>;


export const FirstStory: Story = {
  args:{
  }
}