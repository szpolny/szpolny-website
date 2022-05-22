import * as React from 'react';
import './Layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div className="topbar">topbar</div>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
