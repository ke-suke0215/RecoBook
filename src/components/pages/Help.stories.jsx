import React from 'react';

import Help from './Help';

export default {
    title: 'Help',
    component: Help,
};

const Template = (args) => <Help {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
};