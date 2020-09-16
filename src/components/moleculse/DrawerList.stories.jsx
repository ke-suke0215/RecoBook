import React from 'react';

import DrawerList from './DrawerList';

export default {
    title: 'DrawerList',
    component: DrawerList,
};

const Template = (args) => <DrawerList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
};