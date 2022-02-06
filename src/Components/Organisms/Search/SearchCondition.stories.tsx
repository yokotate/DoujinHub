import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {SearchConditions} from './SearchCondition';
import { SelectBoxItemProps, SelectBoxProps } from '../../Atoms/SelectBox/SelectBox';
import { SearchButtonProps } from '../../Atoms/Buttons/SearchButton';

export default {
    title: 'Organisms/Search/SearchConditions',
    component: SearchConditions,
} as ComponentMeta<typeof SearchConditions>;

const Template: ComponentStory<typeof SearchConditions> = (args) => <SearchConditions {...args} />;

// Primary
const ListItems:SelectBoxItemProps[] = [];
ListItems.push({ItemValue:"CircleName", ItemName:"サークル名"});
ListItems.push({ItemValue:"BookTitle", ItemName:"本タイトル"});
const SelectStatus:SelectBoxProps = {LabelID: "ListItem", Label: "検索対象", Items: ListItems,onChange:(e)=>{}};
const SearchButtonStatus:SearchButtonProps = {onClick:()=>{}};

export const Primary = Template.bind({});
Primary.args = {
    SelectBoxStatus:SelectStatus,
    SearchButtonStatus:SearchButtonStatus,
    TextFieldText:"検索"
};

