import React from 'react';

import PostHeader from './PostHeader';

export default {
    title: 'PostHeader',
    component: PostHeader,
};

const Template = (args) => <PostHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
};