import React from 'react';
import { Wrapper } from './wrapper';

export const WithWrapper = () => (
    <Wrapper condition={true} wrapper={(children) => <div>{children}</div>}>
      Hello World
    </Wrapper>
);

export const WithNoWrapper = () => (
    <Wrapper condition={false} wrapper={(children) => <div>{children}</div>}>
      Hello World
    </Wrapper>
);
