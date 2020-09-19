import React from 'react';

import EachPost from './EachPost';

export default {
    title: 'EachPost',
    component: EachPost,
};

const Template = (args) => <EachPost {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
}