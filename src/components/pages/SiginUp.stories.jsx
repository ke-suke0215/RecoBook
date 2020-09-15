import React from 'react';

import SignUp from './SignUp';

export default {
    title: 'SignUp',
    component: SignUp,
};

const Template = (args) => <SignUp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
};