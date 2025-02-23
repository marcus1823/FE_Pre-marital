import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePages from '../pages/home/HomePages';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<HomePages />} />

  </Routes>
);

export default AppRoutes;
