import React from 'react';
import Header from '../Header';

export default {
  title: 'Components/Header',
  component: Header,
};

export const WithHeaderLogo = {
  args: {
    headerLogoText: 'test'
  },
};

export const NoHeaderLogo = () => (
  <Header/>
);

// Add more stories for different variations of the Header component
