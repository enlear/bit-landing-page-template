import React from 'react';
import { Button } from './button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const BasicButton = () => {
  return <Button>Hello World!</Button>;
};

export const ButtonWithIcon = () => {
  return (
    <Button endIcon={<ArrowForwardIcon fontSize="small" />}>
      Hello World!
    </Button>
  );
};

export const ButtonWithClickAndIcon = () => {
  return (
    <Button
      onClick={() => alert('hello world')}
      endIcon={<ArrowForwardIcon fontSize="small" />}
    >
      Hello World!
    </Button>
  );
};
