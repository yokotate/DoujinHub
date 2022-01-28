import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {SearchButton} from './SearchButton';

export default {
    title: 'Atom/Buttons/SearchButton',
    component: SearchButton,
    argTypes: {}
} as ComponentMeta<typeof SearchButton>;

const Template: ComponentStory<typeof SearchButton> = (args) => <SearchButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const LargeSecondary = Template.bind({});
LargeSecondary.args = {
    Title: "TEXT",
    Size: "large",
    Color: "secondary",
};

export const MediumError = Template.bind({});
MediumError.args = {
    Title: "Error",
    Size: "medium",
    Color: "error",
}

export const SmallSuccess = Template.bind({});
SmallSuccess.args = {
    Title: "Success",
    Size: "small",
    Color: "success"
}

