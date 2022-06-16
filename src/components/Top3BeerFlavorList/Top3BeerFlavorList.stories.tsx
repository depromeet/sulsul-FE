import { ComponentStory, ComponentMeta } from '@storybook/react'


import Top3BeerFlavorList from './Top3BeerFlavorList';


export default {
title: 'Components/Top3BeerFlavorList',
component: Top3BeerFlavorList,
args:{},
} as ComponentMeta<typeof Top3BeerFlavorList>;


const Template: ComponentStory<typeof Top3BeerFlavorList> = ({...args}) => (<Top3BeerFlavorList {...args} />);


export const Default = Template.bind({});
Default.args = {}

