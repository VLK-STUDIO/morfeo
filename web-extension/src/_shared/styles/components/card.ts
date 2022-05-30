import { ComponentConfig } from '@morfeo/react';

export const Card: ComponentConfig = {
  tag: 'div',
  style: {
    cursor: 'pointer',
    color: 'text',
    corner: 's',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    boxSizing: 'border-box',
  },
  variants: {
    primary: {
      style: {
        shadow: 'light',
      },
    },
    'primary.clickable': {
      style: {
        shadow: 'light',
        transition: 'fast',
        '&:hover': {
          shadow: 'medium',
          transform: 'translateY(-5px)',
        },
      },
    },
  },
  meta: {
    tags: ['container', 'ui'],
    description: 'Card component',
  },
} as ComponentConfig;
