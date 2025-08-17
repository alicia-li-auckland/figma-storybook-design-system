import React from 'react';
import figma from '@figma/code-connect';
import { Button } from './Button';

// TODO: Replace with your actual Figma component URL
const FIGMA_URL = '@https://www.figma.com/design/nupWdYqUbZj82Oq0lVcdSR/Scaffold---WEB-LIBRARY?node-id=2-5319&t=UeRna3yO8RxeYe44-11 ';

figma.connect(Button, FIGMA_URL, {
  props: {
    children: figma.string('Label'),
    variant: figma.enum('Variant', {
      'Primary': 'primary',
      'Secondary': 'secondary',
    }),
    size: figma.enum('Size', {
      'Small': 'small',
      'Medium': 'medium',
      'Large': 'large',
    }),
  },
  example: ({ children, variant, size }) => (
    <Button variant={variant} size={size}>
      {children}
    </Button>
  ),
});
