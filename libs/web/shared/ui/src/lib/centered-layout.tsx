import React, { ReactNode } from 'react';

interface CenteredLayoutProps {
  children: ReactNode;
}

export const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-fit max-w-4xl">{children}</div>
    </div>
  );
};
