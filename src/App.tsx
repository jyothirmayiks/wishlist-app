import React, { useState } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { AddItemModal } from './components/AddItemModal';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <MainLayout onAddNew={() => setIsModalOpen(true)}>
        <Home />
      </MainLayout>

      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}


export default App;
