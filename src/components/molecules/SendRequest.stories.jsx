import React from 'react';

import SendRequest from './SendRequest';

export default {
    title: 'SendRequest',
    component: SendRequest,
};

const Template = (args) => <SendRequest {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
}