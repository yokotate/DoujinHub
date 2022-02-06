import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderUserButton, MenuItemProps } from './HeaderUserButton';

export default {
    title: 'Molecules/Header/HeaderUserButton',
    component: HeaderUserButton,
} as ComponentMeta<typeof HeaderUserButton>;

const Template: ComponentStory<typeof HeaderUserButton> = (args) => <HeaderUserButton {...args} />;


// primary
const items:MenuItemProps[] = [];
items.push({Name:"マイページ", onClick:()=>{}});
items.push({Name:"お気に入りサークル", onClick:()=>{}});
items.push({Name:"参加予定イベント", onClick:()=>{}});

export const Primary = Template.bind({});
Primary.args = {
    id:"user",
    Items:items
};

