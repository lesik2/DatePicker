import type { Meta, StoryObj } from '@storybook/react';

import {Calendar} from "../components/Calendar/index";

const meta:Meta<typeof Calendar> = {
  component: Calendar,
}
export default meta;
type Story = StoryObj<typeof Calendar>;


export const FirstStory: Story = {
  args:{

  }
}