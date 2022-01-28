import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuButton } from './MenuButton';

export default {
    title: 'Atom/Buttons/MenuButton',
    component: MenuButton,
} as ComponentMeta<typeof MenuButton>;

const Template: ComponentStory<typeof MenuButton> = (args) => <MenuButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

