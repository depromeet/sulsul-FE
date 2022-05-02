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
  departureKor: 'FRA',
  departureEng: '독일',
  destinationKor: 'KOR',
  destinationEng: '대한민국',
};
