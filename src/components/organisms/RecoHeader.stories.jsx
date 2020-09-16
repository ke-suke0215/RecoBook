import React from 'react';

import RecoHeader from './RecoHeader';

export default {
    title: 'RecoHeader',
    component: RecoHeader,
};

const Template = (args) => <RecoHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
};