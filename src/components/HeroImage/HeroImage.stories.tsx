import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
} as Meta;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  bgImage: 'https://via.placeholder.com/800x400',
  title: 'Welcome to Our Website!',
};

export const Disabled = Template.bind({});
Disabled.args = {
  bgImage: 'https://via.placeholder.com/800x400',
  title: 'This is disabled',
  disabled: true, // 设置为 disabled
};
