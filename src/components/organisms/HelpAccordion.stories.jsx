import React from 'react';

import HelpAccordion from './HelpAccordion';

export default {
    title: 'HelpAccordion',
    component: HelpAccordion,
};

const Template = (args) => <HelpAccordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
};