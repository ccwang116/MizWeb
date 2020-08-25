import React from 'react';
import Button from "./Button";
import Center from "../Center";
export default {
    title: 'Button',
    component: Button,
    decorators: [story => <Center>{story()}</Center>]
}

export const Primary = () => <Button variant="primary" >Primary</Button>
export const Secondary = () => <Button variant="Secondary" >Secondary</Button>
export const Success = () => <Button variant="Success" >Success</Button>
