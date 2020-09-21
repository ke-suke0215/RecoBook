import React from 'react';

import MyPage from './MyPage';

export default {
    title: 'MyPage',
    component: MyPage,
};

const Template = (args) => <MyPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
};