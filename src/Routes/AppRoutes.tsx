import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import HomePages from '../pages/home/HomePages';
import Quizzes from '../pages/home/Quizzes/Quizzes';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePages />} />
      <Route path="/quizzes" element={<Quizzes />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
