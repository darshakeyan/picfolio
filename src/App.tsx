import React from 'react';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Starred from 'pages/Starred';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';

const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
