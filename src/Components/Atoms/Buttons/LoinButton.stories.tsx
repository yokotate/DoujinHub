import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginButton } from './LoinButton';

export default {
    title: 'Atom/Buttons/LoginButton',
    component: LoginButton,
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = (args) => <LoginButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

