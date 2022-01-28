import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {TitleText} from './TitleText';

export default {
    title: 'Atom/Texts/TitleText',
    component: TitleText,
} as ComponentMeta<typeof TitleText>;

const Template: ComponentStory<typeof TitleText> = (args) => <TitleText {...args} />

export const Primary = Template.bind({});
Primary.args = {
    title: 'TEST'
};
