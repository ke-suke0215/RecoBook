import React from 'react';

import TypeSelectTab from './TypeSelectTab';

export default {
    title: 'TypeSelectTab',
    component: TypeSelectTab,
};

const Template = (args) => <TypeSelectTab {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
};