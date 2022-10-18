import React, { ReactNode } from 'react';

export type AboutProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function About({ children }: AboutProps) {
  return (
    <div>
      {children}
    </div>
  );
}
