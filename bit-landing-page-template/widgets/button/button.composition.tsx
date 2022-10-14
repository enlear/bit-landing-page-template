import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from './button';

export const BasicButton = () => <Button>Hello World!</Button>;

export const ButtonWithIcon = () => (
    <Button endIcon={<ArrowForwardIcon fontSize="small" />}>
      Hello World!
    </Button>
);

export const ButtonWithClickAndIcon = () => (
    <Button
      onClick={() => alert('hello world')}
      endIcon={<ArrowForwardIcon fontSize="small" />}
    >
      Hello World!
    </Button>
);
