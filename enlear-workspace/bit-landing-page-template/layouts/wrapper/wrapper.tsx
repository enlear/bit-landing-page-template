import React, { ReactNode } from 'react';

export type WrapperProps = {
  /**
   * the children to be rendered
   */
  children: ReactNode;

  /**
   * the condition to determine if children should be wrapped or not.
   * default: `false`
   */
  condition: boolean;

  /**
   * the component to wrap around when `condition` is passed.
   */
  wrapper: (children: ReactNode[]) => ReactNode;
};

export const Wrapper = ({ children, condition, wrapper }: WrapperProps) => <>{condition ? wrapper([children]) : children}</>;

Wrapper.defaultProps = {
  condition: false,
};
