import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage';
import BookCardPage from './pages/BookCardPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/book/:isbn13" element={<BookCardPage/>} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;




