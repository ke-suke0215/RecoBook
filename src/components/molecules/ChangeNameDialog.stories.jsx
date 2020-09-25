import React from 'react';

import ChangeNameDialog from './ChangeNameDialog';

export default {
    title: 'ChangeNameDialog',
    component: ChangeNameDialog,
};

const Template = (args) => <ChangeNameDialog {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    severity: "error",
    title: "hello",
    content: "world",
}