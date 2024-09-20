import { ReactNode } from 'react';
import { Header } from '../components/Header';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main style={{ width: '80vw', margin: '0 auto' }}>{children}</main>
    </div>
  );
};
