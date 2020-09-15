import React from 'react';

import Room from './Room';

export default {
    title: 'Room',
    component: Room,
};

const Template = (args) => <Room {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
};