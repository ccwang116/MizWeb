import React from 'react';
import Button from "./Button";

export default {
    title:'Button',
    component:Button
}

export const Primary = () => <Button variant="primary" >Primary</Button>
export const Secondary = () => <Button variant="Secondary" >Secondary</Button>
export const Success = () => <Button variant="Success" >Success</Button>
