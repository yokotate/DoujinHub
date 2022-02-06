import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItemProps } from '../../Molecules/Header/HeaderUserButton';
import {TitleHeader} from './TitleHeader';

export default {
    title: 'Organisms/Header/TitleHeader',
    component: TitleHeader,
} as ComponentMeta<typeof TitleHeader>;

const Template: ComponentStory<typeof TitleHeader> = (args) => <TitleHeader {...args} />;

// primary
const items:MenuItemProps[] = [];

items.push({Name:"マイページ", onClick:()=>{}});
items.push({Name:"お気に入りサークル", onClick:()=>{}});
items.push({Name:"参加予定イベント", onClick:()=>{}});
export const Primary = Template.bind({});
Primary.args = {HeaderUserMenu:items}

