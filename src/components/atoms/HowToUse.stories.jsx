import React from 'react';

import HowToUse from './HowToUse';

export default {
    title: 'HowToUse',
    component: HowToUse,
};

const Template = (args) => <HowToUse {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
}