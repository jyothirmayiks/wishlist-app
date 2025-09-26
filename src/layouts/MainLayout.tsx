import React from 'react';
import { Header } from '../components/Header';

interface MainLayoutProps {
  children: React.ReactNode;
  onAddNew: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, onAddNew }) => {
  return (
    <div className="min-h-screen bg-neutral-100 text-gray-900">
      <div className="w-full max-w-[2200px] mx-auto px-6">
        <Header onAddNew={onAddNew} />
      </div>

      <main className="w-full max-w-[1840px] mx-auto px-6 py-6">
        {children}
      </main>
    </div>
  );
};
