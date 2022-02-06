import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserButton } from './UserButton';

export default {
    title: 'Atom/Buttons/UserButton',
    component: UserButton,
} as ComponentMeta<typeof UserButton>;

const Template: ComponentStory<typeof UserButton> = (args) => <UserButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {id:"user"};

