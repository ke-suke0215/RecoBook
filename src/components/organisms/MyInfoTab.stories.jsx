import React from 'react';

import MyInfoTab from './MyInfoTab';

export default {
    title: 'MyInfoTab',
    component: MyInfoTab,
};

const Template = (args) => <MyInfoTab {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
}