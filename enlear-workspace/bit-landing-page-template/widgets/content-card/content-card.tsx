import React, { ReactNode } from 'react';

export type ContentCardProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function ContentCard({ children }: ContentCardProps) {
  return (
    <div>
      {children}
    </div>
  );
}
