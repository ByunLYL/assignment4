import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Img from './Img';
import { ImgProps } from './Img.types';

export default {
  title: 'Components/Image',
  component: Img,
} as Meta;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Sample Image',
  rounded: false,
};

export const Rounded = Template.bind({});
Rounded.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Sample Rounded Image',
  rounded: true,
};
