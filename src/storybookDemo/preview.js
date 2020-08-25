import React from 'react';
import { addDecorator } from "@storybook/react";
import Center from "../src/component/Center/Center";

addDecorator(story => <Center>{story()}</Center>)