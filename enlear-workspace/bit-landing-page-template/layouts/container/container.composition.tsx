import { Button } from '@mui/material';
import React from 'react';
import { Container } from './container';

export const ContainerWithNoMaxWidth = () => (
    <Container>
      <Button>No MaxWidth</Button>
    </Container>
);

export const ContainerWithSmMaxWidth = () => (
    <Container maxWidth="sm">
      <Button>MaxWidth="sm"</Button>
    </Container>
);

export const ContainerWithLgMaxWidth = () => (
    <Container maxWidth="lg">
      <Button>MaxWidth="lg"</Button>
    </Container>
);

export const ContainerWithLgMaxWidthAndPadding = () => (
    <Container maxWidth="lg" sx={{ p: 10 }}>
      <Button>MaxWidth="lg"</Button>
    </Container>
);
