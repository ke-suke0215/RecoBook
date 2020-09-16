import React from 'react';

import RecoDrawer from './RecoDrawer';

export default {
    title: 'RecoDrawer',
    component: RecoDrawer,
};

const Template = (args) => <RecoDrawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
};