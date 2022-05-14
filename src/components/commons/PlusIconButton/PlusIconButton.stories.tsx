import { ComponentStory, ComponentMeta } from '@storybook/react'


import PlusIconButton from './PlusIconButton';


export default {
title: 'Commons/PlusIconButton',
component: PlusIconButton,
args:{},
} as ComponentMeta<typeof PlusIconButton>;


const Template: ComponentStory<typeof PlusIconButton> = () => (<PlusIconButton />);


export const Default = Template.bind({});
Default.args = {}

