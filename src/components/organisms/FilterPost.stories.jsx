import React from 'react';

import FilterPost from './FilterPost';

export default {
    title: 'FilterPost',
    component: FilterPost,
};

const Template = (args) => <FilterPost {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
};