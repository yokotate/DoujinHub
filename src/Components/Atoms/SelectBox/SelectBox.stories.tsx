import {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {SelectBox, SelectBoxItemProps} from './SelectBox';

export default {
    title: 'Atom/SelectBox/SearchButton',
    component: SelectBox,
    argTypes: {}
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = (args) => <SelectBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    LabelID:"Primary"
};

export const Label = Template.bind({});
Label.args = {
    LabelID:"Label",
    Label:"Label"
};

const ListItems:SelectBoxItemProps[] = [];
ListItems.push({ItemValue:"CircleName", ItemName:"サークル名"});
ListItems.push({ItemValue:"BookTitle", ItemName:"本タイトル"});

export const ListItem = Template.bind({});
ListItem.args = {
    LabelID:"ListItem",
    Label:"検索対象",
    Items:ListItems
}

