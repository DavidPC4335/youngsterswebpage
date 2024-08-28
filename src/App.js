import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.js';
import NotFoundComponent from './components/NotFoundComponent';
import { Stack } from '@mui/material';
import PricingScreen from './screens/PricingScreen.js';
import ContactScreen from './screens/ContactScreen.js';

function App() {
  console.log('App.js');
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/pricing" element={<PricingScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      {/* Page Not Found */}
      <Route path='*' element={<><Stack pt={15}><NotFoundComponent/></Stack></>} />
    </Routes>
  );
}

export default App;
