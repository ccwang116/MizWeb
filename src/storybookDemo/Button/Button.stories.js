import React from 'react';
import Button from "./Button";
import Center from "../Center";
import { action, actions } from "@storybook/addon-action";

export default {
    title: 'Button',
    component: Button,
    // decorators: [story => <Center>{story()}</Center>]
}

export const Primary = () => <Button onClick={action('Click Handler')} variant="primary" >Primary</Button>
export const Secondary = () => <Button variant="Secondary" {...actions('onClick','onMouseOver')}>Secondary</Button>
export const Success = () => <Button variant="Success" >Success</Button>

export const Log = () =>(
    <Button onClick={()=>{console.log('clicked')}}>Log</Button>
)