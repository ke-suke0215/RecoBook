import React from 'react';

import AppExplanation from './AppExplanation';

export default {
    title: 'AppExplanation',
    component: AppExplanation,
};

const Template = (args) => <AppExplanation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
}