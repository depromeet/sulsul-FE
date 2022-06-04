import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AirPort from './AirPort';

export default {
  title: 'Components/AirPort',
  component: AirPort,
  argTypes: {},
} as ComponentMeta<typeof AirPort>;

const Template: ComponentStory<typeof AirPort> = (args) => <AirPort {...args} />;

export const DefaultAirPort = Template.bind({});
DefaultAirPort.args = {
  startKor: 'FRA',
  startEng: '독일',
  endKor: 'KOR',
  endEng: '대한민국',
};
