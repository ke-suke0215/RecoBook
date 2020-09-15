import React from 'react';

import Login from './Login';

export default {
    title: 'Login',
    component: Login,
};

const Template = (args) => <Login {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
};